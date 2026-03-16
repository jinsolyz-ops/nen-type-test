# architecture.md — 시스템 아키텍처

## 1. 전체 구조

```
[사용자 브라우저]
      │
      ▼
[Vercel CDN / Edge Network]
      │
      ├── Next.js App (SSR/SSG)
      │     ├── 시작 페이지          → 정적
      │     ├── 질문 페이지          → 클라이언트 렌더링
      │     ├── 결과 페이지          → 서버 렌더링 (SSR)
      │     └── /api/og             → Edge Function
      │
      └── Supabase (PostgreSQL)
            ├── nen_results         → 결과 저장 + 공유 URL
            └── page_views          → 방문자 트래킹
```

---

## 2. 렌더링 전략

| 페이지 | 방식 | 이유 |
|--------|------|------|
| `/` (시작) | Static | 내용 고정, 빠른 로딩 |
| `/test` | Client | useState 상태 관리 필요 |
| `/result/[shareId]` | SSR | 공유 URL OG 메타태그 동적 생성 필요 |
| `/api/og` | Edge Function | 빠른 이미지 생성 |

---

## 3. 데이터 흐름

### 테스트 진행 → 결과 저장
```
[/test 클라이언트]
  → 12문항 응답 수집 (useState)
  → calcTopType(scores) 계산
  → saveResult(topType) 호출
      → Supabase INSERT nen_results
      → share_id 반환
  → /result/[shareId] 라우팅
```

### 결과 페이지 로드
```
[/result/[shareId] 서버]
  → getResultByShareId(shareId)
      → Supabase SELECT nen_results
  → nenTypes[top_type] 데이터 매핑
  → generateMetadata (OG 이미지 URL 포함)
  → 페이지 렌더링 후 클라이언트로 전달
      → RadarChart 애니메이션 (클라이언트)
      → ShareButtons 초기화 (클라이언트)
```

### 소셜 공유
```
[트위터]
  → Web Intent URL로 새 탭 열기
  → 트위터 크롤러가 /result/[shareId] 접속
  → OG 태그의 /api/og?type=K 이미지 표시

[카카오]
  → Kakao.Share.sendDefault() 호출
  → imageUrl: /api/og?type=K
  → webUrl: /result/[shareId]
```

---

## 4. 컴포넌트 의존 관계

```
app/result/[shareId]/page.tsx (서버)
  ├── ResultBanner.tsx         (클라이언트)
  ├── RadarChart.tsx           (클라이언트, Canvas)
  ├── NenTypeCard.tsx          (클라이언트)
  │     └── 캐릭터 이미지
  └── ShareButtons.tsx         (클라이언트)
        ├── 트위터 Web Intent
        └── Kakao SDK
```

---

## 5. 환경별 설정

| 환경 | BASE_URL | Supabase |
|------|----------|----------|
| 로컬 개발 | `http://localhost:3000` | 동일 프로젝트 |
| Vercel Preview | 자동 생성 URL | 동일 프로젝트 |
| Vercel Production | 실제 도메인 | 동일 프로젝트 |
