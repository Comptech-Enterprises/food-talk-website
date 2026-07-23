type LogoProps = {
  className?: string;
  /** Show the "FOOD TALK" wordmark next to the mark. */
  withWordmark?: boolean;
};

/**
 * Food Talk mark — a fork tucked inside a filled circle, echoing the
 * original brand badge, paired with a stacked wordmark.
 */
export default function Logo({ className = "", withWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-label="Food Talk"
        className="h-10 w-10 shrink-0"
      >
        <circle cx="32" cy="32" r="32" fill="currentColor" />
        {/* fork */}
        <g fill="none" stroke="var(--bg, #0d0d0d)" strokeWidth="2.4" strokeLinecap="round">
          <path d="M20 18v9a5 5 0 0 0 5 5h0a5 5 0 0 0 5-5v-9" />
          <line x1="25" y1="18" x2="25" y2="46" />
          <line x1="20.5" y1="18" x2="20.5" y2="27" />
          <line x1="29.5" y1="18" x2="29.5" y2="27" />
          {/* knife / stem sweeping right, nodding to the original */}
          <path d="M38 18c6 2 8 7 8 12 0 4-3 6-6 6h-2" />
          <line x1="40" y1="36" x2="40" y2="46" />
        </g>
      </svg>
      {withWordmark && (
        <span className="leading-none">
          <span className="display block text-lg tracking-tight">FOOD</span>
          <span className="block text-[0.6rem] font-semibold tracking-[0.35em] text-muted">
            TALK
          </span>
        </span>
      )}
    </span>
  );
}
