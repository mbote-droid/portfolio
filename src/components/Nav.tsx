import Link from "next/link";
import { site } from "@/data/content";

const links = [
  { label: "About", href: "/#about" },
  { label: "Data & Research", href: "/#focus" },
  { label: "Science", href: "/#science" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Credentials", href: "/#credentials" },
  { label: "Radar", href: "/radar" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight"
          aria-label={`${site.shortName} — home`}
        >
          {site.shortName}
          <span className="text-accent">.</span>
        </Link>
        <ul className="hidden items-center gap-7 text-sm text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-muted transition-colors hover:text-foreground sm:inline"
          >
            GitHub
          </a>
          <a href="/#contact" className="btn btn-primary">
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
