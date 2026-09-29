import Image from "next/image";

const CITIES = ["Delhi-NCR", "Mumbai", "Bangalore"];

export default function NewsletterCTA() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden py-20 md:py-28">
      <Image
        src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2000&q=80"
        alt="Wine glasses clinking in warm light"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <h2 className="display text-[clamp(2.5rem,6vw,4.5rem)] text-white leading-[1.05] mb-8">
          GET ACCESS TO
          <br />
          OUR EXPERIENCES.
        </h2>

        <div className="max-w-lg border border-white/20 rounded-xl bg-white/10 backdrop-blur-xl p-8 sm:p-10">
          <p className="text-white/80 text-base tracking-wide mb-6">
            1,00,000 subscribers and growing.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-white/80 text-xs sm:text-sm font-bold tracking-wider uppercase mb-1.5">
                Email<span className="text-[var(--red)]">*</span>
              </label>
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full bg-transparent border-b border-white/40 text-white py-3.5 text-base placeholder:text-white/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-white/80 text-xs sm:text-sm font-bold tracking-wider uppercase mb-1.5">
                Phone<span className="text-[var(--red)]">*</span>
              </label>
              <div className="flex items-center gap-3">
                <span className="text-white/80 text-base border-b border-white/40 py-3.5 pr-3">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  className="flex-1 bg-transparent border-b border-white/40 text-white py-3.5 text-base placeholder:text-white/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2.5">
                City<span className="text-[var(--red)]">*</span>
              </label>
              <div className="flex flex-wrap gap-5">
                {CITIES.map((city) => (
                  <label key={city} className="flex items-center gap-2.5 text-white font-medium text-sm sm:text-base cursor-pointer group">
                    <input
                      type="checkbox"
                      name="city"
                      value={city}
                      className="sr-only peer"
                    />
                    <span className="w-5 h-5 border-2 border-white/60 rounded-sm bg-black/20 peer-checked:bg-accent peer-checked:border-accent transition-colors" />
                    <span className="group-hover:text-accent transition-colors">{city}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-accent-ink py-4 text-base font-bold tracking-wider rounded-md hover:brightness-110 transition-all cursor-pointer"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
