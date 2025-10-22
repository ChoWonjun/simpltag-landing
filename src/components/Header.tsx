"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background transition-all duration-300 ${
        isScrolled ? "border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-center md:justify-start">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image
              src="/logo.svg"
              alt="SimplTag"
              width={137}
              height={29}
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
