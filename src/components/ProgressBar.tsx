interface ProgressBarProps {
  current: number;
  total: number;
  percent: number;
}

export function ProgressBar({ current, total, percent }: ProgressBarProps) {
  return (
    <section className="surface-card rounded-[24px] p-5">
      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="text-[var(--text)]">
          {current} / {total}
        </span>
        <span className="gold-label text-xs">{Math.round(percent)}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/8">
        <div
          className="h-full rounded-full bg-[var(--gold)] transition-[width] duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </section>
  );
}
