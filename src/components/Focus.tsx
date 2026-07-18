import { focus } from "@/data/content";

/**
 * "Data & Research" capability section — surfaces the data-science,
 * data-annotation and biomedical-research strengths prominently for
 * recruiters hiring specifically for those roles.
 */
export function Focus() {
  return (
    <section id="focus" className="border-t border-border scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          Data &amp; Research
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          I own the whole chain — from the research question and study design, to
          the data itself, to the model and the shipped product. These are the
          areas I go deep.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {focus.map((f, i) => (
            <div
              key={f.title}
              className="animate-fade-up relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_18px_40px_-24px_var(--ring)]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                aria-hidden
                className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full opacity-70 blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(13,148,136,0.18), transparent 65%)",
                }}
              />
              <h3 className="relative text-lg font-semibold tracking-tight">
                {f.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted">
                {f.blurb}
              </p>
              <ul className="relative mt-4 flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
