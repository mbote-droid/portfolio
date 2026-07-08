import type { Metadata } from "next";
import Link from "next/link";
import { getRadarSnapshot } from "@/lib/radar";
import { OpportunityCard } from "@/components/radar/OpportunityCard";

export const metadata: Metadata = {
  title: "Healthcare AI Radar — Samuel Mbote",
  description:
    "A live view of the Healthcare AI Radar: publication opportunities mined and ranked from current healthcare-AI literature.",
};

function formatDate(iso: string): string {
  // Deterministic UTC formatting (avoids server/client locale mismatch).
  return new Date(iso).toISOString().slice(0, 10);
}

export default function RadarPage() {
  const snap = getRadarSnapshot();

  return (
    <div className="radar-dark min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="radar-grid absolute inset-0 opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 py-16">
          <Link
            href="/"
            className="font-mono text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            ← Samuel Mbote
          </Link>
          <h1 className="animate-fade-up mt-6 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
            Healthcare AI Radar
          </h1>
          <p className="animate-fade-up mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">
            A working system I built: it tracks healthcare-AI literature across
            arXiv, PubMed and the press, then mines it for concrete{" "}
            <span className="text-[var(--foreground)]">
              publication opportunities
            </span>{" "}
            — clustered into themes and ranked by how well they fit a
            researcher&apos;s expertise, momentum, evidence and effort.
          </p>
          <p className="animate-fade-up mt-4 font-mono text-xs text-[var(--muted)]">
            snapshot · {snap.count} opportunities · generated{" "}
            {formatDate(snap.generated_at)} UTC
          </p>
        </div>
      </div>

      {/* Opportunities */}
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {snap.opportunities.map((opp, i) => (
            <OpportunityCard key={opp.theme + i} opp={opp} index={i} />
          ))}
        </div>

        <p className="mt-12 border-t border-[var(--border)] pt-6 text-sm leading-relaxed text-[var(--muted)]">
          This is a static snapshot of a live pipeline (
          <a
            href="https://github.com/mbote-droid/healthcare-ai-radar"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--accent-strong)] hover:underline"
          >
            source on GitHub
          </a>
          ). Every source shown is a real fetched item; the tool maps the
          terrain — the scholarship is written by a human.
        </p>
      </div>
    </div>
  );
}
