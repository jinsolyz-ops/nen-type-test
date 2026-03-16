import type { NenType } from "@/types";

interface ResultBannerProps {
  nenType: NenType;
}

export function ResultBanner({ nenType }: ResultBannerProps) {
  return (
    <section className="surface-card fade-down relative overflow-hidden rounded-[28px] p-6 sm:p-8">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at top right, ${nenType.color}, transparent 40%)`,
        }}
      />
      <div className="relative flex flex-col gap-3">
        <p className="gold-label text-xs">{nenType.en}</p>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{nenType.name}</h1>
        <p className="text-sm text-[var(--muted)] sm:text-base">
          대표 캐릭터: {nenType.characters[0].name} · {nenType.characters[1].name}
        </p>
        <p className="max-w-2xl text-sm leading-7 text-[var(--text)]/90 sm:text-base">
          {nenType.desc}
        </p>
      </div>
    </section>
  );
}
