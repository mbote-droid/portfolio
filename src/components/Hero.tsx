import { site } from "@/data/content";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
      <p className="animate-fade-up font-mono text-sm text-accent">
        {site.role} · {site.location}
      </p>
      <h1 className="animate-fade-up mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
        {site.name}
      </h1>
      <p
        className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted"
        style={{ animationDelay: "80ms" }}
      >
        {site.tagline}
      </p>
      <div
        className="animate-fade-up mt-8"
        style={{ animationDelay: "160ms" }}
      >
        <SocialLinks />
      </div>
    </section>
  );
}
