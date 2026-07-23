import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Show the "FOOD TALK" wordmark next to the mark. */
  withWordmark?: boolean;
};

/** Food Talk brand badge (public/logo.webp) with optional wordmark. */
export default function Logo({ className = "", withWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.webp"
        alt="Food Talk"
        width={576}
        height={576}
        priority
        className="h-10 w-10 shrink-0 object-contain"
      />
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
