import Link from "next/link";
import { site } from "@/data/content";

const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Radar", href: "/radar" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
          {site.shortName}
          <span className="text-accent">.</span>
        </Link>
        <ul className="flex items-center gap-6 text-sm text-muted">
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
      </nav>
    </header>
  );
}
