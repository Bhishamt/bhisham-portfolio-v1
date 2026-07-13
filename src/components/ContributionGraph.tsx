"use client";

// This component is loaded ONLY on the client (dynamic import with ssr: false).
// Math.random() is safe here — it only ever runs in the browser.

const LEVELS = [
  "bg-zinc-900",
  "bg-zinc-800",
  "bg-blue-600/30",
  "bg-blue-500/60",
  "bg-blue-400",
];

function getLevel(): string {
  const r = Math.random();
  if (r > 0.85) return LEVELS[4];
  if (r > 0.65) return LEVELS[3];
  if (r > 0.45) return LEVELS[2];
  if (r > 0.30) return LEVELS[1];
  return LEVELS[0];
}

export default function ContributionGraph() {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-1 min-w-[600px]">
        {Array.from({ length: 52 }, (_, week) => (
          <div key={week} className="flex flex-col gap-1">
            {Array.from({ length: 7 }, (_, day) => (
              <div
                key={day}
                className={`w-3 h-3 rounded-[2px] ${getLevel()} transition-colors hover:opacity-80`}
                title={`Week ${week + 1}, Day ${day + 1}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3 text-xs text-zinc-600 font-mono">
        <span>Less</span>
        {LEVELS.map((c, i) => (
          <div key={i} className={`w-3 h-3 rounded-[2px] ${c}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
