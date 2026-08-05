import Script from "next/script";

export default function InstagramPosts() {
  return (
    <section
      aria-label="Instagram feed"
      className="border-t border-line bg-bg py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
        <div
          className="elfsight-app-f519aa45-2337-49a5-a8e2-d3c0a6cb6e28"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}
