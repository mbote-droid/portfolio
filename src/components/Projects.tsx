import { projects, type Project } from "@/data/content";

function ProjectCard({ project }: { project: Project }) {
  const links = project.links.filter((l) => l.href); // hide unset (TODO) links
  return (
    <article className="rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent/50">
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
        {project.flagship && (
          <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent-strong">
            Flagship
          </span>
        )}
      </div>
      <p className="mt-1 text-sm font-medium text-accent-strong">
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
            className="rounded-md bg-background px-2 py-1 font-mono text-xs text-muted ring-1 ring-border"
          >
            {t}
          </span>
        ))}
      </div>

      {links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-4">
          {links.map((l) => {
            const external = l.href.startsWith("http");
            return (
              <a
                key={l.label}
                href={l.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="text-sm font-medium text-accent-strong hover:underline"
              >
                {l.label} →
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
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          Projects
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
