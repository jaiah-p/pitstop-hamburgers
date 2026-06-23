import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="story" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-red">In the heart of the valley</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="headline mt-3 text-5xl text-ink sm:text-7xl">
            A roadside burger shop,
            <br />
            <span className="text-red">done the old way.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Behind the Thora General Store, midway between Bellingen and
              Dorrigo, you&rsquo;ll find Pitstop Hamburgers, an old school
              roadside burger shop from fine dining chef{" "}
              <strong className="text-ink">Giuseppe</strong> and his partner{" "}
              <strong className="text-ink">Gemma</strong>.
            </p>
            <p>
              Giuseppe spent over ten years in Michelin starred and three hatted
              kitchens across Europe, the United States and Australia. Now he
              flips smash burgers for his community, and calls it the more
              rewarding pursuit.
            </p>
            <p>
              It&rsquo;s a true two person operation. Giuseppe runs the kitchen.
              Gemma leads the design and socials, and jumps on the fryer and
              milkshakes when it gets busy.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex">
            <blockquote className="relative flex flex-col justify-center rounded-2xl bg-red p-8 text-cream shadow-xl sm:p-10">
              <span className="font-display text-7xl leading-none text-mustard">
                &ldquo;
              </span>
              <p className="-mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
                When you come to Pitstop, you&rsquo;re choosing to step into my
                house. I cook one way, to the best of my ability.
              </p>
              <footer className="script mt-5 text-xl text-cream/90">
                Giuseppe
              </footer>
            </blockquote>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-14 max-w-3xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
            &ldquo;A tight menu keeps prices fair and quality high. Nothing
            wasted. Nothing tired. All our focus goes into doing three things
            right.{" "}
            <span className="text-red font-semibold">And you can taste it.</span>
            &rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
