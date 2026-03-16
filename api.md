# api.md — API 명세

이 앱의 서버 API는 Next.js Route Handler 1개와 Supabase 직접 호출로 구성된다.

---

## 1. Route Handler

### GET /api/og

소셜 공유용 OG 이미지를 동적으로 생성한다.

**Runtime**: Edge  
**응답 타입**: `image/png`  
**사이즈**: 1200 × 630

#### 쿼리 파라미터

| 파라미터 | 타입 | 필수 | 설명 |
|---------|------|------|------|
| `type` | string | ✅ | 넨 계통 키 (`K`\|`H`\|`T`\|`G`\|`S`\|`J`) |

#### 예시

```
GET /api/og?type=K
→ 강화계 OG 이미지 반환

GET /api/og?type=T
→ 변화계 OG 이미지 반환
```

#### 구현

```typescript
// app/api/og/route.tsx
import { ImageResponse } from '@vercel/og';
import { nenTypes } from '@/lib/nenTypes';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const typeKey = searchParams.get('type') ?? 'K';
  const nenType = nenTypes[typeKey];

  return new ImageResponse(
    (
      <div style={{
        background: '#0a0a0f', width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', padding: '60px',
      }}>
        <div style={{ position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.15), transparent)' }} />
        <p style={{ color: '#c9a84c', fontSize: 18, letterSpacing: '0.4em', marginBottom: 16 }}>
          {nenType.en}
        </p>
        <h1 style={{ color: '#c9a84c', fontSize: 80, fontWeight: 900, margin: 0 }}>
          {nenType.name}
        </h1>
        <p style={{ color: '#e8e0d0', fontSize: 20, marginTop: 24,
          maxWidth: 600, textAlign: 'center', lineHeight: 1.6 }}>
          {nenType.desc.slice(0, 60)}
        </p>
        <p style={{ color: '#7a7068', fontSize: 16, marginTop: 40, letterSpacing: '0.2em' }}>
          念 TYPE TEST
        </p>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
```

---

## 2. Supabase 함수 (lib/supabase.ts)

라우트 핸들러가 아닌 서버 컴포넌트·클라이언트에서 직접 호출하는 함수들.

### saveResult

```typescript
saveResult(topType: NenTypeKey): Promise<string>
```

| 항목 | 내용 |
|------|------|
| 동작 | `nen_results`에 결과 INSERT, 생성된 `share_id` 반환 |
| 호출 위치 | `/test` 페이지 (클라이언트) |
| 에러 처리 | throw — 호출부에서 try/catch 처리 |

```typescript
export async function saveResult(topType: NenTypeKey): Promise<string> {
  const shareId = Math.random().toString(36).substring(2, 10);
  const { error } = await supabase
    .from('nen_results')
    .insert({ share_id: shareId, top_type: topType });
  if (error) throw error;
  return shareId;
}
```

### getResultByShareId

```typescript
getResultByShareId(shareId: string): Promise<NenResult>
```

| 항목 | 내용 |
|------|------|
| 동작 | `share_id`로 결과 조회 |
| 호출 위치 | `/result/[shareId]` 서버 컴포넌트 |
| 에러 처리 | throw — 404 처리는 호출부에서 |

```typescript
export async function getResultByShareId(shareId: string): Promise<NenResult> {
  const { data, error } = await supabase
    .from('nen_results')
    .select('*')
    .eq('share_id', shareId)
    .single();
  if (error) throw error;
  return data;
}
```

### trackPageView

```typescript
trackPageView(path: string): Promise<void>
```

| 항목 | 내용 |
|------|------|
| 동작 | `page_views`에 방문 기록 INSERT |
| 호출 위치 | 각 페이지 마운트 시 (`useEffect`) |
| 에러 처리 | 무시 — 트래킹 실패가 UX에 영향 주면 안 됨 |

```typescript
export async function trackPageView(path: string): Promise<void> {
  await supabase.from('page_views').insert({ path }).catch(() => {});
}
```

---

## 3. 소셜 공유 URL 포맷

### 트위터 Web Intent

```
https://twitter.com/intent/tweet
  ?text=나의+넨+계통은+강화계(ENHANCEMENT)!%0A念+Type+Test로+당신의+계통도+알아보세요+👇
  &url=https://your-domain.vercel.app/result/abc12345
```

### 카카오 SDK 파라미터

```typescript
window.Kakao.Share.sendDefault({
  objectType: 'feed',
  content: {
    title: `나의 넨 계통은 ${nenType.name}`,
    description: nenType.desc.slice(0, 60),
    imageUrl: `${BASE_URL}/api/og?type=${nenType.key}`,
    link: {
      mobileWebUrl: `${BASE_URL}/result/${shareId}`,
      webUrl: `${BASE_URL}/result/${shareId}`,
    },
  },
  buttons: [{
    title: '내 계통 확인하기',
    link: {
      mobileWebUrl: `${BASE_URL}/result/${shareId}`,
      webUrl: `${BASE_URL}/result/${shareId}`,
    },
  }],
});
```
