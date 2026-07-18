import { site } from "@/data/content";

export function About() {
  return (
    <section id="about" className="border-t border-border scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          About
        </h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-foreground">
            {site.bio.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              At a glance
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2">
                <span aria-hidden className="text-accent">
                  ▸
                </span>
                Physician-scientist (MBChB, COSECSA surgical training)
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="text-accent">
                  ▸
                </span>
                IBM-Certified AI Engineer
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="text-accent">
                  ▸
                </span>
                Certified Full-Stack Software Engineer
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="text-accent">
                  ▸
                </span>
                Data science, analysis &amp; multi-domain annotation
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="text-accent">
                  ▸
                </span>
                Biomedical research: study design &amp; evidence synthesis
              </li>
              <li className="flex gap-2">
                <span aria-hidden className="text-accent">
                  ▸
                </span>
                480+ automated tests across shipped projects
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
