import { site } from "@/data/content";

export function About() {
  return (
    <section id="about" className="border-t border-border scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          About
        </h2>
        <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-foreground">
          {site.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
