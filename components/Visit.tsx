import { SITE } from "@/lib/site";
import Reveal from "./Reveal";

export default function Visit() {
  return (
    <section id="visit" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow text-red">Pull over &amp; pull up</p>
          <h2 className="headline mt-3 text-6xl text-ink sm:text-8xl">
            Find the <span className="text-red">Pitstop.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {/* details */}
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
                  <p className="mt-2 text-xl font-semibold">Thursday — Sunday</p>
                  <p className="text-cream/70">11am – 3pm</p>
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

          {/* map */}
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
