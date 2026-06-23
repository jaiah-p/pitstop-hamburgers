import { SITE } from "@/lib/site";
import Reveal from "./Reveal";

export default function Place() {
  return (
    <section id="place" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow text-red">In the heart of the valley</p>
          <h2 className="headline mt-3 text-5xl text-ink sm:text-7xl">
            Find the <span className="text-red">Pitstop.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
            Surrounded by cattle farms on Waterfall Way, midway between Bellingen
            and Dorrigo, you&rsquo;ll find Pitstop tucked behind the Thora
            General Store. A little rough around the edges, all warm welcomes.
          </p>
        </Reveal>

        {/* area photos */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Reveal>
            <figure className="overflow-hidden rounded-2xl ring-4 ring-ink shadow-xl">
              <img
                src="/photos/area-falls.jpg"
                alt="Dangar Falls near Dorrigo on Waterfall Way"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <figcaption className="bg-ink px-4 py-2 text-xs uppercase tracking-widest text-cream/70">
                Waterfall Way · Dorrigo
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="overflow-hidden rounded-2xl ring-4 ring-ink shadow-xl">
              <img
                src="/photos/area-bellingen.jpg"
                alt="Relaxing in Bellingen"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <figcaption className="bg-ink px-4 py-2 text-xs uppercase tracking-widest text-cream/70">
                Come as you are · Bellingen
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* map + details */}
        <div className="mt-6 grid gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-ink p-8 text-cream">
              <div className="space-y-7">
                <div>
                  <p className="eyebrow text-mustard">Where</p>
                  <p className="mt-2 text-xl font-semibold">{SITE.location}</p>
                  <p className="text-cream/70">{SITE.address}</p>
                  <p className="mt-1 text-sm text-cream/50">{SITE.between}</p>
                </div>
                <div>
                  <p className="eyebrow text-mustard">When</p>
                  <p className="mt-2 text-xl font-semibold">Thursday to Sunday</p>
                  <p className="text-cream/70">11am til 3pm</p>
                </div>
              </div>
              <a
                href={SITE.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-red px-6 py-3 text-sm font-bold uppercase tracking-widest text-cream transition-transform hover:scale-105"
              >
                Get directions →
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-3">
            <div className="h-72 overflow-hidden rounded-2xl ring-4 ring-ink md:h-full">
              <iframe
                title="Map to Pitstop Hamburgers, Thora NSW"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=2656%20Waterfall%20Way%2C%20Thora%20NSW%202454&output=embed"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
