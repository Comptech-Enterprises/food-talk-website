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

        <div className="max-w-2xl border border-white/20 rounded-2xl bg-white/10 backdrop-blur-xl p-10 sm:p-14 md:p-16">
          <p className="text-white/85 text-base sm:text-lg tracking-wide mb-8 font-medium">
            1,00,000 subscribers and growing.
          </p>

          <form className="space-y-8">
            <div>
              <label className="block text-white/90 text-sm sm:text-base font-bold tracking-wider uppercase mb-2">
                Email<span className="text-[var(--red)]">*</span>
              </label>
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full bg-transparent border-b-2 border-white/40 text-white py-4 text-base sm:text-lg placeholder:text-white/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-white/90 text-sm sm:text-base font-bold tracking-wider uppercase mb-2">
                Phone<span className="text-[var(--red)]">*</span>
              </label>
              <div className="flex items-center gap-4">
                <span className="text-white/90 text-base sm:text-lg font-medium border-b-2 border-white/40 py-4 pr-3">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  className="flex-1 bg-transparent border-b-2 border-white/40 text-white py-4 text-base sm:text-lg placeholder:text-white/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/90 text-sm sm:text-base font-bold tracking-wider uppercase mb-3">
                City<span className="text-[var(--red)]">*</span>
              </label>
              <div className="flex flex-wrap gap-6 sm:gap-8">
                {CITIES.map((city) => (
                  <label key={city} className="flex items-center gap-3 text-white font-medium text-base sm:text-lg cursor-pointer group">
                    <input
                      type="checkbox"
                      name="city"
                      value={city}
                      className="sr-only peer"
                    />
                    <span className="w-6 h-6 border-2 border-white/60 rounded-md bg-black/20 peer-checked:bg-accent peer-checked:border-accent flex items-center justify-center transition-colors" />
                    <span className="group-hover:text-accent transition-colors">{city}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-accent-ink py-5 text-base sm:text-lg font-black tracking-wider uppercase rounded-xl hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer mt-2"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
