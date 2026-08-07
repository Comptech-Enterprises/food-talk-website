type ReelCardProps = {
  src: string;
  permalink: string;
  caption: string;
  /** Seconds into the clip to freeze on. Defaults to the opening frame. */
  posterTime?: number;
};

/**
 * Reel tile: shows the video's opening frame and opens the original reel on
 * Instagram when clicked. Nothing plays in place.
 */
export default function ReelCard({
  src,
  permalink,
  caption,
  posterTime = 0.1,
}: ReelCardProps) {
  return (
    <a
      href={permalink}
      target="_blank"
      rel="noreferrer"
      aria-label={`${caption} — watch on Instagram`}
      className="group relative block aspect-[9/16] w-full overflow-hidden rounded-3xl border border-line bg-bg-card transition-colors duration-500 hover:border-line-strong"
    >
      <video
        // the media fragment tells the browser which frame to paint
        src={`${src}#t=${posterTime}`}
        muted
        playsInline
        preload="metadata"
        tabIndex={-1}
        className="pointer-events-none h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </a>
  );
}
