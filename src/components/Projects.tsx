import { projects, type Project } from "@/data/content";

function StatusBadge({ status }: { status?: Project["status"] }) {
  if (status === "coming-soon") {
    return (
      <span className="rounded-full border border-dashed border-border px-2.5 py-0.5 text-xs font-medium text-muted">
        Coming soon
      </span>
    );
  }
  if (status === "open-source") {
    return (
      <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-foreground">
        Open source · tested
      </span>
    );
  }
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-strong">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
        Live
      </span>
    );
  }
  return null;
}

function ProjectCard({ project }: { project: Project }) {
  const links = project.links.filter((l) => l.href); // hide unset (TODO) links
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_1px_2px_rgba(11,18,32,0.04)] transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_18px_40px_-24px_var(--ring)]">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        {project.flagship && (
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-strong">
            Flagship
          </span>
        )}
        <span className="ml-auto">
          <StatusBadge status={project.status} />
        </span>
      </div>
      <p className="mt-1.5 text-sm font-medium text-accent-strong">
        {project.tagline}
      </p>
      <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

      <ul className="mt-5 space-y-2">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-2 text-sm text-foreground">
            <span aria-hidden className="mt-1 text-accent">
              ▸
            </span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-surface px-2 py-1 font-mono text-xs text-muted ring-1 ring-border"
          >
            {t}
          </span>
        ))}
      </div>

      {links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3 pt-1">
          {links.map((l) => {
            const external = l.href.startsWith("http");
            const primary = l.kind === "primary";
            return (
              <a
                key={l.label}
                href={l.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className={
                  primary
                    ? "btn btn-primary !py-2 !text-sm"
                    : "btn btn-ghost !py-2 !text-sm"
                }
              >
                {l.label}
                <span aria-hidden>→</span>
              </a>
            );
          })}
        </div>
      )}
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-border scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Selected work across clinical genomics, structural biology and applied
          AI — each shipped, tested, and grounded in verifiable results.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
