import { methods } from "@/data/content";

/** "Science & Methods": the mathematical and physical toolkit, one signature equation per discipline. */
export function Methods() {
  return (
    <section id="science" className="border-t border-border scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          Science &amp; Methods
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          The mathematics and physics under the software. Each discipline below is
          one I use in my own code, with the equation I reach for most often.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {methods.map((m) => (
            <article
              key={m.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/50"
            >
              <h3 className="text-lg font-semibold tracking-tight">{m.title}</h3>
              <p
                className="mt-3 overflow-x-auto whitespace-nowrap rounded-lg border border-border bg-background px-3 py-2 font-mono text-[13px] text-accent-strong"
                aria-label={`Key equation: ${m.equation}`}
              >
                {m.equation}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{m.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {m.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
