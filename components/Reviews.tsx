import { GOOGLE, REVIEWS } from "@/lib/site";
import Reveal from "./Reveal";

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} out of 5 stars`} className="text-mustard">
      {"★★★★★".slice(0, n)}
      <span className="text-cream/25">{"★★★★★".slice(n)}</span>
    </span>
  );
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      <div
        aria-hidden
        className="halftone pointer-events-none absolute inset-0 text-white/[0.04]"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow text-mustard">Don&rsquo;t just take our word for it</p>
          <h2 className="headline mt-3 text-6xl sm:text-8xl">
            Rave <span className="text-red">reviews.</span>
          </h2>

          <a
            href={GOOGLE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-cream/20 bg-white/[0.04] px-5 py-2.5 transition-colors hover:border-mustard/60"
          >
            <GoogleG className="h-5 w-5" />
            <span className="text-2xl font-bold tabular-nums">{GOOGLE.rating}</span>
            <Stars n={5} />
            <span className="text-sm text-cream/60">{GOOGLE.count} Google reviews</span>
          </a>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal
              key={r.author}
              delay={i * 0.08}
              className="flex h-full flex-col rounded-2xl border border-cream/10 bg-white/[0.03] p-7"
            >
              <div className="flex items-center justify-between">
                <Stars n={r.rating} />
                <GoogleG className="h-5 w-5 opacity-80" />
              </div>
              <p className="mt-4 flex-1 text-lg leading-relaxed text-cream/85">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-mustard">
                {r.author}
                <span className="ml-2 font-normal normal-case tracking-normal text-cream/40">
                  via Google
                </span>
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={GOOGLE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-cream transition-transform hover:scale-105"
          >
            Read all reviews on Google →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
