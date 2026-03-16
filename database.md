# database.md — DB 설계

## 1. 테이블 목록

| 테이블 | 용도 |
|--------|------|
| `nen_results` | 진단 결과 저장, 공유 URL 생성, 플레이 수 트래킹 |
| `page_views` | 페이지별 방문자 수 트래킹 |

---

## 2. 테이블 상세

### nen_results

| 컬럼 | 타입 | 설명 |
|------|------|------|
| `id` | uuid | PK, auto-generate |
| `share_id` | text | 공유용 8자리 ID (UNIQUE) |
| `top_type` | text | 결과 계통 키 (`K`\|`H`\|`T`\|`G`\|`S`\|`J`) |
| `created_at` | timestamptz | 생성 시각 (자동) |

### page_views

| 컬럼 | 타입 | 설명 |
|------|------|------|
| `id` | bigserial | PK, auto-increment |
| `path` | text | 접속 경로 (`/`, `/test`, `/result`) |
| `created_at` | timestamptz | 접속 시각 (자동) |

---

## 3. DDL

```sql
-- nen_results
CREATE TABLE nen_results (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  share_id    text UNIQUE NOT NULL,
  top_type    text NOT NULL CHECK (top_type IN ('K','H','T','G','S','J')),
  created_at  timestamptz DEFAULT now()
);

-- page_views
CREATE TABLE page_views (
  id         bigserial PRIMARY KEY,
  path       text NOT NULL,
  created_at timestamptz DEFAULT now()
);
```

---

## 4. 인덱스

```sql
CREATE INDEX idx_nen_results_share_id   ON nen_results (share_id);
CREATE INDEX idx_nen_results_created_at ON nen_results (created_at);
CREATE INDEX idx_page_views_path        ON page_views  (path);
```

---

## 5. Row Level Security

```sql
ALTER TABLE nen_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views  ENABLE ROW LEVEL SECURITY;

-- nen_results
CREATE POLICY "insert_result"  ON nen_results FOR INSERT WITH CHECK (true);
CREATE POLICY "read_results"   ON nen_results FOR SELECT USING (true);

-- page_views
CREATE POLICY "insert_page_view" ON page_views FOR INSERT WITH CHECK (true);
CREATE POLICY "read_page_views"  ON page_views FOR SELECT USING (true);
```

---

## 6. 통계 쿼리

```sql
-- 전체 플레이 수
SELECT COUNT(*) FROM nen_results;

-- 계통별 분포
SELECT top_type, COUNT(*) AS total
FROM nen_results
GROUP BY top_type
ORDER BY total DESC;

-- 페이지별 방문 수
SELECT path, COUNT(*) AS views
FROM page_views
GROUP BY path
ORDER BY views DESC;

-- 일별 플레이 수 (최근 30일)
SELECT DATE(created_at) AS date, COUNT(*) AS plays
FROM nen_results
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY date;
```
