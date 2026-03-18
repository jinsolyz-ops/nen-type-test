import type { NenType } from "@/lib/nenTypes";

interface ResultBannerProps {
  nenType: NenType;
  color: string;
}

export function ResultBanner({ nenType, color }: ResultBannerProps) {
  return (
    <section className="surface-card fade-down relative overflow-hidden rounded-[28px] p-6 sm:p-8">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at top right, ${color}, transparent 40%)`,
        }}
      />
      <div className="relative flex flex-col gap-3">
        <p className="gold-label text-xs">{nenType.en}</p>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{nenType.name}</h1>
        <p className="text-sm font-semibold text-[var(--gold-light)] sm:text-base">{nenType.tagline}</p>
        <p className="text-sm text-[var(--muted)] sm:text-base">
          대표 캐릭터: {nenType.characters[0].name} · {nenType.characters[1].name}
        </p>
      </div>
    </section>
  );
}
