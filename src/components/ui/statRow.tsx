function StatRow({ label, home, away }: { label: string; home?: number; away?: number }) {
  const left = home ?? 0;
  const right = away ?? 0;
  const total = Math.max(left + right, 1);
  const leftPct = Math.round((left / total) * 100);
  const rightPct = 100 - leftPct;
  return (
    <div className="space-y-1 text-xs">
      <div className="flex items-center justify-between text-emerald-300">
        <span>{label}</span>
        <span>
          {left} - {right}
        </span>
      </div>
      <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-emerald-900/40">
        <div className="h-full bg-emerald-500" style={{ width: `${leftPct}%` }} aria-hidden />
        <div className="h-full bg-emerald-700" style={{ width: `${rightPct}%` }} aria-hidden />
      </div>
    </div>
  );
}

export default StatRow;