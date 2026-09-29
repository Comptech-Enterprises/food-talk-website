import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
        alt="Candlelit dinner table with friends sharing food and drinks"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
}
