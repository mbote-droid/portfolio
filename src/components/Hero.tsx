import { site, stats } from "@/data/content";
import { Avatar } from "./Avatar";

const credentials = [
  "MBChB · Physician-Scientist",
  "IBM-Certified AI Engineer",
  "Certified Full-Stack SWE",
  "Data Science & Annotation",
  "Biomedical Research",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="aurora" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Left: value proposition */}
          <div>
            <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-xs text-accent-strong">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {site.role}
            </p>

            <h1
              className="animate-fade-up mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
              style={{ animationDelay: "60ms" }}
            >
              {site.name}
            </h1>

            <p
              className="animate-fade-up mt-4 max-w-2xl text-xl font-semibold leading-snug sm:text-2xl"
              style={{ animationDelay: "120ms" }}
            >
              <span className="text-gradient">{site.headline}</span>
            </p>

            <p
              className="animate-fade-up mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
              style={{ animationDelay: "180ms" }}
            >
              {site.tagline}
            </p>

            {/* Credential chips — strengths visible immediately */}
            <ul
              className="animate-fade-up mt-6 flex flex-wrap gap-2"
              style={{ animationDelay: "220ms" }}
            >
              {credentials.map((c) => (
                <li key={c} className="chip">
                  {c}
                </li>
              ))}
            </ul>

            {/* Primary calls to action */}
            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "280ms" }}
            >
              <a href="/#projects" className="btn btn-primary">
                View my work
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                GitHub
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                LinkedIn
              </a>
              <a href={site.links.email} className="btn btn-ghost">
                Email
              </a>
            </div>
          </div>

          {/* Right: avatar */}
          <div className="flex justify-center lg:justify-end">
            <Avatar initials="SM" />
          </div>
        </div>

        {/* Stat band — headline metrics, still above/near the fold */}
        <dl
          className="animate-fade-up mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
          style={{ animationDelay: "340ms" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-card px-5 py-6 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <div className="text-3xl font-extrabold tracking-tight text-gradient sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium text-muted">{s.label}</div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
