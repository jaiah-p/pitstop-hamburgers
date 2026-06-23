import Reveal from "./Reveal";
import { EVENTS, SITE } from "@/lib/site";
import { InstagramIcon } from "./icons";

const FEATURES = [
  {
    emoji: "♟️",
    title: "Sunday Chess Club",
    text: "All ages and levels welcome. New to the game or played for years, you'll find a friendly seat here.",
  },
  {
    emoji: "🎵",
    title: "Country Tunes",
    text: "Country music in the background, always. Out here in the valley it just feels right.",
  },
  {
    emoji: "🎸",
    title: "Live Music & Events",
    text: "Local acts on the deck and community get-togethers when the season calls for it.",
  },
];

export default function MorePitstop() {
  return (
    <section
      id="more"
      className="relative overflow-hidden bg-mustard py-20 text-ink sm:py-28"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-6"
        style={{
          backgroundImage:
            "conic-gradient(#181210 90deg, transparent 90deg 180deg, #181210 180deg 270deg, transparent 270deg)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow text-red">More than a burger</p>
          <h2 className="headline mt-3 text-5xl sm:text-7xl">
            Around the <span className="text-red">Pitstop.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-soft">
            Chess on Sundays, country tunes always, and a bit of live music when
            the valley calls for it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.05}
              className="rounded-2xl bg-cream p-7 shadow-lg ring-1 ring-ink/10"
            >
              <div className="text-4xl">{f.emoji}</div>
              <h3 className="headline mt-3 text-2xl">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{f.text}</p>
            </Reveal>
          ))}
        </div>

        {/* upcoming events */}
        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <figure className="h-full overflow-hidden rounded-2xl ring-4 ring-ink shadow-xl">
              <img
                src="/photos/singer.jpg"
                alt="Country tunes and live music in the valley"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
              />
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <p className="eyebrow text-red">Upcoming</p>
            <h3 className="headline mt-2 text-4xl text-ink">What&rsquo;s on</h3>

            <ul className="mt-6 divide-y divide-ink/15">
              {EVENTS.map((e) => (
                <li
                  key={e.title}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-5"
                >
                  <span className="w-44 shrink-0 text-sm font-bold uppercase tracking-[0.18em] text-red">
                    {e.when}
                  </span>
                  <div>
                    <p className="text-lg font-semibold">{e.title}</p>
                    <p className="text-ink-soft">{e.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold uppercase tracking-widest text-cream transition-transform hover:scale-105"
            >
              <InstagramIcon className="h-5 w-5" />
              Follow for dates
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
