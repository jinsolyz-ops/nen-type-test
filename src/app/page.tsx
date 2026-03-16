import Link from "next/link";

export default function Home() {
  return (
    <main className="page-wrap flex min-h-screen items-center">
      <section className="surface-card fade-up relative w-full overflow-hidden rounded-[32px] px-6 py-12 sm:px-10 sm:py-16">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/70 to-transparent" />
        <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[var(--aura)] blur-3xl" />
        <div className="relative flex flex-col gap-8 text-center">
          <header className="fade-down flex flex-col gap-4">
            <span className="gold-label text-sm">NEN TYPE TEST</span>
            <h1 className="font-serif text-6xl font-bold tracking-[0.08em] text-[var(--gold)] sm:text-7xl">
              念
            </h1>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">넨 타입 진단</h2>
              <p className="mx-auto max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                12개의 질문을 통해 당신의 기질이 어떤 넨 계통과 가장 닮아 있는지 분석합니다.
                헌터헌터 세계관의 여섯 계통 중 당신의 오라는 어디에 가장 가까운지 확인해보세요.
              </p>
            </div>
          </header>

          <div className="surface-card rounded-[28px] border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-5 text-left">
            <p className="gold-label mb-3 text-xs">WHAT IS NEN</p>
            <p className="text-sm leading-7 text-[var(--text)]/90 sm:text-base">
              넨은 생명 에너지를 다루는 기술이며, 사람마다 타고난 성향에 따라 더 잘 맞는 계통이
              다릅니다. 이 테스트는 행동 방식과 사고 습관을 바탕으로 당신의 대표 계통을 추정합니다.
            </p>
          </div>

          <Link
            href="/test"
            className="inline-flex items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--gold)] px-8 py-4 font-semibold text-[#20170a] transition hover:border-[var(--gold-light)] hover:bg-[var(--gold-light)]"
          >
            진단 시작하기
          </Link>
        </div>
      </section>
    </main>
  );
}
