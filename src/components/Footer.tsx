import { site } from "@/data/content";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer id="contact" className="mt-auto border-t border-border scroll-mt-16">
      <div className="relative overflow-hidden">
        <div className="dotted pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
            Contact
          </h2>
          <p className="mt-6 max-w-xl text-2xl font-semibold leading-snug tracking-tight">
            {site.availability}.
          </p>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">
            The fastest way to reach me is email — I read every message and reply
            personally.
          </p>
          <div className="mt-7">
            <SocialLinks />
          </div>
          <p className="mt-14 border-t border-border pt-6 text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind CSS, deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
