# AGENTS.md — Codex 작업 지시서

전체 스펙은 각 문서 참고. 이 파일은 구현 규칙과 작업 순서만 담는다.

| 문서 | 내용 |
|------|------|
| `PRD.md` | 서비스 요구사항 |
| `architecture.md` | 시스템 구조 + 데이터 흐름 |
| `database.md` | DB 스키마 + SQL |
| `api.md` | API 명세 + 함수 구현 |
| `frontend.md` | 페이지 구조 + 컴포넌트 + 디자인 시스템 |
| `skill.md` | 기술 스택 + 설치 + 외부 서비스 설정 |

---

## 핵심 원칙

- `any` 사용 금지 — TypeScript strict 준수
- `pages/` 디렉토리 생성 금지 — App Router만 사용
- `'use client'` 최소화 — 서버 컴포넌트 우선
- 환경변수 코드 하드코딩 금지 — `.env.local`에서만
- `console.log` 제거 (에러 로그 제외)

---

## 구현 순서

1. `types/index.ts`
2. `lib/nenTypes.ts`
3. `lib/questions.ts`
4. `lib/scoring.ts`
5. `lib/supabase.ts`
6. Supabase SQL 실행 (`database.md` DDL 복사)
7. `app/layout.tsx` (카카오 SDK Script)
8. `app/page.tsx`
9. `app/test/page.tsx`
10. `components/ProgressBar.tsx`
11. `components/QuestionCard.tsx`
12. `components/ResultBanner.tsx`
13. `components/RadarChart.tsx`
14. `components/NenTypeCard.tsx`
15. `app/api/og/route.tsx`
16. `components/ShareButtons.tsx`
17. `app/result/[shareId]/page.tsx`

---

## 컴포넌트별 필수 규칙

### RadarChart.tsx
- `'use client'` 필수
- canvas 조작은 `useEffect` 안에서만
- 꼭짓점 순서: `['K', 'H', 'T', 'G', 'S', 'J']`, 12시 방향 시작
- 애니메이션 easing: `1 - Math.pow(1 - progress, 3)`

### ShareButtons.tsx
- `'use client'` 필수
- 카카오 호출 전 `window.Kakao?.isInitialized()` 체크

### app/api/og/route.tsx
- `export const runtime = 'edge'` 필수
- inline style만 사용 (Tailwind 클래스 미작동)
- 사이즈: `1200 × 630`

---

## Supabase 호출 규칙

```typescript
// 일반 — 항상 error 체크
const { data, error } = await supabase.from('...').select('*');
if (error) throw error;

// 트래킹 — 에러 무시
await supabase.from('page_views').insert({ path }).catch(() => {});
```

---

## 금지 사항

| 금지 | 대신 사용 |
|------|----------|
| `html2canvas` | `@vercel/og` |
| `nanoid` | `Math.random().toString(36).substring(2, 10)` |
| `pages/` 디렉토리 | `app/` |
| 캐릭터 imageUrl 분산 관리 | `lib/nenTypes.ts` 에서만 |

---

## 배포 전 필수 체크

- [ ] 캐릭터 imageUrl → `public/characters/` 자체 이미지로 전부 교체
- [ ] Vercel 환경변수 4개 설정
- [ ] 카카오 개발자 콘솔 Vercel 도메인 등록
- [ ] `NEXT_PUBLIC_BASE_URL` 실제 도메인으로 변경
- [ ] Footer에 저작권 면책 문구 추가
