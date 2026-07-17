"use client";

import { useEffect, useState } from "react";

const LEVELS = [
  "bg-zinc-900",
  "bg-zinc-800",
  "bg-blue-600/30",
  "bg-blue-500/60",
  "bg-blue-400",
];

interface Day {
  count: number;
  level: number;
  date: string;
}

interface Week {
  days: Day[];
}

interface ContributionData {
  total: number;
  weeks: Week[];
}

function fetchContributions(
  username: string,
  year: number
): Promise<ContributionData> {
  const proxy = `https://api.allorigins.win/raw?url=`;
  const target = `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`;

  return fetch(proxy + encodeURIComponent(target))
    .then((r) => {
      if (!r.ok) throw new Error("API error");
      return r.json();
    })
    .catch(() =>
      fetch(target).then((r) => {
        if (!r.ok) throw new Error("API error");
        return r.json();
      })
    );
}

export default function ContributionGraph() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const year = new Date().getFullYear();
    fetchContributions("Bhishamt", year)
      .then(setData)
      .catch(() =>
        fetchContributions("Bhishamt", year - 1).then(setData)
      )
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="h-[124px] w-full rounded bg-white/[0.02] animate-pulse" />;
  }

  if (!data) {
    return (
      <div className="text-sm text-zinc-600 font-mono text-center py-8">
        Could not load contribution data. Connect your GitHub to see activity.
      </div>
    );
  }

  const weeks = data.weeks ?? [];

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-1 min-w-[600px]">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {(week.days ?? []).map((day, di) => (
              <div
                key={di}
                className={`w-3 h-3 rounded-[2px] ${LEVELS[day.level] ?? LEVELS[0]} transition-colors hover:opacity-80`}
                title={`${day.date}: ${day.count} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-3 text-xs text-zinc-600 font-mono">
        <span>{data.total?.toLocaleString() ?? 0} contributions in the last year</span>
        <div className="flex items-center gap-1">
          <span>Less</span>
          {LEVELS.map((c, i) => (
            <div key={i} className={`w-3 h-3 rounded-[2px] ${c}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
