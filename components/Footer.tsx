import { SITE } from "@/lib/site";
import { InstagramIcon, FacebookIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-red-deep pt-16 text-cream">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="script text-2xl text-mustard">Don&rsquo;t think twice.</p>
            <img
              src="/photos/logo-cream.svg"
              alt="Pitstop Hamburgers"
              className="mt-2 w-72 max-w-full sm:w-96"
            />
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-lg font-semibold transition-colors hover:text-mustard"
            >
              <InstagramIcon className="h-6 w-6" />
              @pitstop.hamburgers
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-lg font-semibold transition-colors hover:text-mustard"
            >
              <FacebookIcon className="h-6 w-6" />
              Pitstop Hamburgers Thora
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/20 py-6 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {SITE.address} · {SITE.hours}
          </p>
          <p>© {new Date().getFullYear()} Pitstop Hamburgers · Made in the valley</p>
        </div>
      </div>

      {/* giant fading wordmark */}
      <p
        aria-hidden
        className="headline pointer-events-none select-none whitespace-nowrap text-center text-[26vw] leading-none text-cream/[0.06]"
      >
        Pitstop
      </p>
    </footer>
  );
}
