import { skills } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="border-t border-border scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          Skills
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Tools I use in shipped, tested work — plus what I&apos;m actively growing
          into. Nothing here is aspirational unless it&apos;s labelled so.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.label}
              className={`rounded-2xl border p-5 ${
                group.learning
                  ? "border-dashed border-border bg-transparent"
                  : "border-border bg-card"
              }`}
            >
              <h3 className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                {group.label}
                {group.learning && (
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent-strong">
                    In progress
                  </span>
                )}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={group.learning ? "chip chip-learning" : "chip"}
                  >
                    {item}
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
