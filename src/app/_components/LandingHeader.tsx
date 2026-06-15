"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DOWNLOAD_LINKS } from "@/config/links";

/**
 * Landing-only header. Transparent over the cream hero, then frosts on
 * scroll. Carries a single compact CTA. The shared `Header` component is
 * left untouched so /terms keeps its original look.
 */
export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-line bg-brand-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[72px] md:px-8">
        <Link
          href="/"
          className="transition-opacity hover:opacity-80"
          aria-label="SimplTag 홈"
        >
          <Image
            src="/logo.svg"
            alt="SimplTag"
            width={130}
            height={28}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <a
          href={DOWNLOAD_LINKS.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand-ink px-4 py-2 text-[14px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-blue md:px-5"
        >
          무료로 받기
        </a>
      </div>
    </header>
  );
}
