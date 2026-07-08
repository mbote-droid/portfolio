import { site } from "@/data/content";

type Item = { key: string; label: string; href: string };

/** Renders only the links that are actually set - TODO placeholders are hidden
 * so the site never shows a dead link. Fill them in content.ts and they appear. */
export function SocialLinks({ variant = "light" }: { variant?: "light" | "dark" }) {
  const items: Item[] = [
    { key: "github", label: "GitHub", href: site.links.github },
    { key: "linkedin", label: "LinkedIn", href: site.links.linkedin },
    { key: "orcid", label: "ORCID", href: site.links.orcid },
    { key: "email", label: "Email", href: site.links.email },
    { key: "cv", label: "CV / Résumé", href: site.links.cv },
  ];
  const active = items.filter((i) => i.href);

  const base =
    "inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors";
  const styles =
    variant === "dark"
      ? "border-white/15 text-slate-200 hover:border-accent hover:text-accent"
      : "border-border text-foreground hover:border-accent hover:text-accent";

  return (
    <ul className="flex flex-wrap gap-3">
      {active.map((i) => {
        const external = i.href.startsWith("http");
        return (
          <li key={i.key}>
            <a
              href={i.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className={`${base} ${styles}`}
            >
              {i.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
