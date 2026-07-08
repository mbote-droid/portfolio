import type { Opportunity } from "@/lib/radar";

const BREAKDOWN_ORDER = ["expertise", "momentum", "evidence", "effort"];

export function OpportunityCard({
  opp,
  index,
}: {
  opp: Opportunity;
  index: number;
}) {
  return (
    <article
      className="animate-fade-up rounded-xl border border-[var(--border)] bg-[var(--card)] p-6"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
            {opp.output_label} · effort {opp.effort}/3
          </p>
          <h3 className="mt-2 text-lg font-semibold leading-snug text-[var(--foreground)]">
            {opp.theme}
          </h3>
        </div>
        <div className="shrink-0 text-right">
          <div className="font-mono text-3xl font-bold text-[var(--accent)]">
            {Math.round(opp.score)}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
            score
          </div>
        </div>
      </div>

      {/* score breakdown mini-bars */}
      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
        {BREAKDOWN_ORDER.map((k) => {
          const v = opp.score_breakdown[k] ?? 0;
          return (
            <div key={k} className="flex items-center gap-2">
              <span className="w-20 font-mono text-[11px] text-[var(--muted)]">
                {k}
              </span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                <span
                  className="animate-grow-x block h-full rounded-full bg-[var(--accent)]"
                  style={{ width: `${Math.round(v * 100)}%` }}
                />
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
        <span className="font-medium text-[var(--foreground)]">
          Working title:{" "}
        </span>
        {opp.suggested_title}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {opp.target_venues.map((v) => (
          <span
            key={v}
            className="rounded-md border border-[var(--border)] px-2 py-0.5 font-mono text-[11px] text-[var(--muted)]"
          >
            {v}
          </span>
        ))}
      </div>

      {opp.sources.length > 0 && (
        <div className="mt-5 border-t border-[var(--border)] pt-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]">
            Source{opp.sources.length > 1 ? "s" : ""}
          </p>
          <ul className="mt-2 space-y-1">
            {opp.sources.slice(0, 4).map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[var(--accent-strong)] hover:underline"
                >
                  {s.title}
                </a>{" "}
                <span className="text-xs text-[var(--muted)]">— {s.source}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
