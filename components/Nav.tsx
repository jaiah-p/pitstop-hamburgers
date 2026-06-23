"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { InstagramIcon, FacebookIcon } from "./icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-ink/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <a
          href="#menu"
          className={`eyebrow transition-colors hover:text-red ${
            scrolled ? "text-ink" : "text-cream"
          }`}
        >
          View Menu
        </a>

        <a
          href="#top"
          aria-label="Pitstop Hamburgers, back to top"
          className={`transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <img
            src="/photos/logo-ink.svg"
            alt="Pitstop Hamburgers"
            className="h-8 w-auto"
          />
        </a>

        <div className="flex items-center gap-4">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pitstop Hamburgers on Instagram"
            className={`transition-colors hover:text-red ${
              scrolled ? "text-ink" : "text-cream"
            }`}
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={SITE.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pitstop Hamburgers on Facebook"
            className={`hidden transition-colors hover:text-red sm:block ${
              scrolled ? "text-ink" : "text-cream"
            }`}
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
