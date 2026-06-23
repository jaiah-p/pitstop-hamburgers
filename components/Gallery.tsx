import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow text-red">Feast your eyes</p>
          <h2 className="headline mt-3 text-5xl text-ink sm:text-7xl">
            Simple food, <span className="text-red">done well.</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-5">
          {/* big food shot */}
          <Reveal className="md:col-span-3">
            <figure className="overflow-hidden rounded-2xl ring-4 ring-ink shadow-xl">
              <img
                src="/photos/tray-grass.jpg"
                alt="A tray of Pitstop cheeseburgers, beef tallow fries and milkshakes on the grass"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </figure>
          </Reveal>

          {/* the brand moment */}
          <Reveal delay={0.1} className="md:col-span-2">
            <figure className="relative h-full overflow-hidden rounded-2xl ring-4 ring-ink shadow-xl">
              <img
                src="/photos/singer.jpg"
                alt="The Pitstop vibe, an old-school country roadside feeling"
                className="h-full min-h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <figcaption className="script absolute bottom-3 left-4 text-2xl text-cream drop-shadow-lg">
                country tunes, always on
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-lg text-ink-soft">
            Local beef, cheese, onion, pickles and that sweet, tangy Mississippi
            comeback sauce. Beef tallow chips on the side, a vanilla milkshake to
            finish. That is the whole idea.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
