import { site } from "@/data/content";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer id="contact" className="mt-auto border-t border-border scroll-mt-16">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
          Contact
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground">
          Open to roles and collaborations in biomedical research, healthtech and
          applied AI. The fastest way to reach me is email.
        </p>
        <div className="mt-6">
          <SocialLinks />
        </div>
        <p className="mt-12 text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. Built with Next.js, deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
