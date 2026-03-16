# frontend.md — 페이지 구조 및 컴포넌트

## 1. 페이지 목록

| 경로 | 파일 | 렌더링 | 설명 |
|------|------|--------|------|
| `/` | `app/page.tsx` | Static | 시작 화면 |
| `/test` | `app/test/page.tsx` | Client | 질문 진행 화면 |
| `/result/[shareId]` | `app/result/[shareId]/page.tsx` | SSR | 결과 화면 |

---

## 2. 페이지별 상세

### / — 시작 화면

```
┌─────────────────────────┐
│                         │
│         念              │  ← 72px 골드 한자
│    넨 타입 진단          │
│  당신의 계통을 알아보세요  │
│                         │
│  [넨이란 무엇인가 설명]   │  ← 2-3줄 배경 설명
│                         │
│  ┌─────────────────┐    │
│  │  진단 시작하기   │    │  ← CTA 버튼
│  └─────────────────┘    │
└─────────────────────────┘
```

**구성요소**: 정적 텍스트 + CTA 버튼  
**상태**: 없음  
**이벤트**: 버튼 클릭 → `router.push('/test')`

---

### /test — 질문 화면

```
┌─────────────────────────┐
│ 3 / 12           25%    │  ← 진행 정보
│ ▓▓▓▓▓░░░░░░░░░░░░░░░   │  ← 진행 바
│                         │
│ QUESTION 03             │
│ ┌─────────────────────┐ │
│ │ 친한 사람이 배신했을  │ │  ← 질문 카드
│ │ 때 당신은?           │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ 분노한다. 정면으로   │ │  ← 선택지 (4개)
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ 슬프다. 이해하려...  │ │
│ └─────────────────────┘ │
│ ...                     │
└─────────────────────────┘
```

**상태**:
```typescript
const [current, setCurrent] = useState(0);
const [scores, setScores] = useState<Scores>({ K:0, H:0, T:0, G:0, S:0, J:0 });
```

**이벤트 흐름**:
1. 선택지 클릭 → 선택지에 `selected` 스타일
2. 0.35초 딜레이
3. 점수 누적 → 다음 질문으로
4. 12번째 완료 → `saveResult(topType)` → `/result/[shareId]`

**컴포넌트**: `ProgressBar`, `QuestionCard`

---

### /result/[shareId] — 결과 화면

```
┌─────────────────────────┐
│ ENHANCEMENT             │
│ 강화계                   │  ← ResultBanner
│ 대표 캐릭터: 곤 · 우봉   │
│ [계통 설명 텍스트]        │
├─────────────────────────┤
│ AURA DISTRIBUTION       │
│      [레이더 차트]        │  ← RadarChart
├─────────────────────────┤
│ ENHANCEMENT / 강화계     │
│ [설명]                   │
│ ⚡ 주요 능력: ...        │  ← NenTypeCard
│ 🧠 성격: ...             │
│ 💼 직업: 운동선수 · ...  │
│                         │
│ 대표 캐릭터              │
│ ┌──────┐  ┌──────┐      │
│ │[사진]│  │[사진]│      │
│ │곤    │  │우봉  │      │
│ │[능력]│  │[능력]│      │
│ └──────┘  └──────┘      │
├─────────────────────────┤
│ [X(트위터)로 공유]        │  ← ShareButtons
│ [카카오로 공유]           │
├─────────────────────────┤
│ [다시 진단하기]           │
└─────────────────────────┘
```

**데이터 fetch**: 서버 컴포넌트에서 `getResultByShareId(shareId)`  
**트래킹**: 마운트 시 `trackPageView('/result')` (클라이언트)

---

## 3. 컴포넌트 목록

| 컴포넌트 | 파일 | 클라이언트 | 설명 |
|---------|------|-----------|------|
| ProgressBar | `components/ProgressBar.tsx` | ❌ | 진행률 바 |
| QuestionCard | `components/QuestionCard.tsx` | ✅ | 질문 + 선택지 |
| ResultBanner | `components/ResultBanner.tsx` | ❌ | 계통명 + 설명 배너 |
| RadarChart | `components/RadarChart.tsx` | ✅ | Canvas 레이더 차트 |
| NenTypeCard | `components/NenTypeCard.tsx` | ✅ | 계통 상세 카드 |
| ShareButtons | `components/ShareButtons.tsx` | ✅ | 트위터/카카오 공유 버튼 |

---

## 4. 디자인 시스템

### 컬러

```css
--bg:         #0a0a0f   /* 배경 */
--surface:    #12121a   /* 카드 배경 */
--border:     rgba(255,255,255,0.08)
--gold:       #c9a84c   /* 주요 포인트 */
--gold-light: #e8c97a   /* 호버 상태 */
--text:       #e8e0d0   /* 본문 */
--muted:      #7a7068   /* 보조 텍스트 */
--aura:       rgba(201,168,76,0.15) /* 호버 배경 */
```

### 계통별 컬러

```typescript
K: '#dc5040'  // 강화계 — 레드
H: '#50a0dc'  // 방출계 — 블루
T: '#b478dc'  // 변화계 — 퍼플
G: '#3cb478'  // 구현화계 — 그린
S: '#dca028'  // 조작계 — 골드
J: '#c8c850'  // 특질계 — 옐로우
```

### 타이포그래피

```css
주 폰트:   Noto Serif KR (400, 700, 900)
영문 장식: Cinzel (400, 700)  /* 계통 영문명, 섹션 라벨 */
```

### 애니메이션

```css
/* 페이지/카드 진입 */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* 헤더 진입 */
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

---

## 5. 반응형 브레이크포인트

```
모바일:  max-width 640px  → 단일 컬럼, 패딩 16px
태블릿:  641px ~ 768px    → 단일 컬럼, 패딩 24px
데스크탑: 769px+          → max-width 680px 중앙 정렬
```

캐릭터 카드: 모바일에서도 2열 유지 (`grid-cols-2`)
