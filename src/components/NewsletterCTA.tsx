import Image from "next/image";

const CITIES = ["Delhi-NCR", "Mumbai", "Bangalore"];

export default function NewsletterCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2000&q=80"
        alt="Wine glasses clinking in warm light"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="display text-[clamp(2rem,5vw,3.5rem)] text-white leading-[1.05] mb-8">
          GET ACCESS TO
          <br />
          OUR EXPERIENCES.
        </h2>

        <div className="max-w-md border border-white/20 rounded-xl bg-white/10 backdrop-blur-xl p-8">
          <p className="text-white/70 text-sm tracking-wide mb-6">
            1,00,000 subscribers and growing.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-white/60 text-xs font-bold tracking-wider uppercase mb-1">
                Email<span className="text-[var(--red)]">*</span>
              </label>
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full bg-transparent border-b border-white/30 text-white py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-white/60 text-xs font-bold tracking-wider uppercase mb-1">
                Phone<span className="text-[var(--red)]">*</span>
              </label>
              <div className="flex items-center gap-3">
                <span className="text-white/60 text-sm border-b border-white/30 py-3 pr-3">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  className="flex-1 bg-transparent border-b border-white/30 text-white py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/60 text-xs font-bold tracking-wider uppercase mb-2">
                City<span className="text-[var(--red)]">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {CITIES.map((city) => (
                  <label key={city} className="flex items-center gap-2 text-white text-sm cursor-pointer group">
                    <input
                      type="checkbox"
                      name="city"
                      value={city}
                      className="sr-only peer"
                    />
                    <span className="w-4 h-4 border border-white/40 rounded-sm peer-checked:bg-accent peer-checked:border-accent transition-colors" />
                    <span className="group-hover:text-accent transition-colors">{city}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-accent-ink py-3 text-sm font-bold tracking-wider rounded-md hover:brightness-110 transition-all"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
