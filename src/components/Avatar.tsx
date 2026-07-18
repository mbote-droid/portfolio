/**
 * Monogram avatar placeholder (no photo yet). A gradient ring around the
 * user's initials — professional and swappable for a real headshot later
 * by dropping an <Image> in place of the inner monogram.
 */
export function Avatar({ initials = "SM" }: { initials?: string }) {
  return (
    <div className="relative animate-float">
      {/* soft glow */}
      <div
        aria-hidden
        className="absolute -inset-4 rounded-full opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.45), transparent 60%)",
        }}
      />
      <div className="relative rounded-full p-[3px] bg-[linear-gradient(135deg,var(--accent),var(--accent-2)_50%,var(--accent-3))] shadow-[0_20px_50px_-20px_var(--ring)]">
        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-surface sm:h-48 sm:w-48">
          <span className="text-5xl font-extrabold tracking-tight text-gradient sm:text-6xl">
            {initials}
          </span>
        </div>
      </div>
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted shadow-sm">
        <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
        Open to work
      </span>
    </div>
  );
}
