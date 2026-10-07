import { certifications, education, type Credential } from "@/data/content";

function CredentialList({ items }: { items: Credential[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((c) => (
        <li key={`${c.name}-${c.issuer}`} className="flex flex-wrap items-baseline gap-x-2">
          {c.href ? (
            <a href={c.href} target="_blank" rel="noreferrer" className="font-medium hover:text-accent">
              {c.name}
            </a>
          ) : (
            <span className="font-medium">{c.name}</span>
          )}
          <span className="text-sm text-muted">{c.issuer}</span>
          {c.note && (
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent-strong">
              {c.note}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Credentials() {
  return (
    <section id="credentials" className="border-t border-border scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          Education &amp; certifications
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold tracking-tight">Medical degrees</h3>
            <CredentialList items={education} />
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-sm font-semibold tracking-tight">Certifications</h3>
            <CredentialList items={certifications} />
          </div>
        </div>
      </div>
    </section>
  );
}
