# skill.md — 기술 스택

## 1. 스택 요약

| 역할 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | Next.js (App Router) | 14.x |
| 언어 | TypeScript | 5.x |
| 스타일링 | Tailwind CSS | 3.x |
| DB / BaaS | Supabase | latest |
| OG 이미지 생성 | @vercel/og | latest |
| 소셜 공유 | Kakao SDK, Twitter Web Intent | — |
| 배포 | Vercel | — |
| 패키지 매니저 | npm | — |

---

## 2. 기술 선택 이유

### Next.js 14 App Router
- SSR로 결과 페이지 OG 메타태그 동적 생성 가능
- Edge Runtime으로 OG 이미지 빠른 생성
- Vercel과 완벽 통합

### Supabase
- PostgreSQL 기반, SQL 그대로 사용 가능
- Row Level Security로 별도 백엔드 없이 보안 처리
- 무료 티어로 초기 운영 가능

### @vercel/og
- Edge에서 실행 → 빠른 응답
- OG 이미지(링크 미리보기)와 공유 카드 이미지를 같은 엔드포인트로 처리
- `html2canvas` 대비 서버사이드라 안정적

### Tailwind CSS
- 빠른 스타일링
- 단, OG 이미지(`/api/og`) 내부는 inline style 사용 (Edge 환경에서 Tailwind 미작동)

---

## 3. 설치 명령어

```bash
# 프로젝트 생성
npx create-next-app@latest nen-type-test \
  --typescript --tailwind --app \
  --src-dir false --import-alias "@/*"

# 추가 패키지
npm install @supabase/supabase-js
npm install @vercel/og
```

---

## 4. 주요 패키지 역할

### @supabase/supabase-js
```typescript
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(URL, ANON_KEY);

// 사용
await supabase.from('nen_results').insert({ ... });
await supabase.from('nen_results').select('*').eq('share_id', id).single();
```

### @vercel/og
```typescript
import { ImageResponse } from '@vercel/og';
export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(<div>...</div>, { width: 1200, height: 630 });
}
```

### Kakao SDK (CDN)
```typescript
// app/layout.tsx
<Script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
  strategy="afterInteractive"
  onLoad={() => window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY)} />

// 사용
window.Kakao.Share.sendDefault({ objectType: 'feed', ... });
```

---

## 5. 환경변수

```bash
NEXT_PUBLIC_SUPABASE_URL=       # Supabase 프로젝트 URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=  # Supabase anon public 키
NEXT_PUBLIC_BASE_URL=           # 배포 도메인 (로컬: http://localhost:3000)
NEXT_PUBLIC_KAKAO_JS_KEY=       # 카카오 개발자 앱 JavaScript 키
```

---

## 6. 외부 서비스 설정

### Supabase
1. [supabase.com](https://supabase.com) → New Project
2. `Project Settings → API`에서 URL, anon key 복사
3. `SQL Editor`에서 `database.md` DDL 실행

### 카카오 개발자
1. [developers.kakao.com](https://developers.kakao.com) → 앱 등록
2. `앱 키 → JavaScript 키` 복사
3. `플랫폼 → Web → 사이트 도메인` 등록
   - `http://localhost:3000` (개발)
   - `https://your-domain.vercel.app` (배포)

### Vercel
1. GitHub 레포 연결
2. `Settings → Environment Variables`에 4개 환경변수 입력
3. 배포 완료 후 `NEXT_PUBLIC_BASE_URL` 실제 도메인으로 업데이트
