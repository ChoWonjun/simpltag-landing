"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/config/features";
import { Reveal } from "./Reveal";

/**
 * FAQ — objection handling. Lightweight controlled accordion.
 */
export function FaqSection() {
  const [open, setOpen] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section className="bg-brand-canvas px-5 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="eyebrow text-brand-ink-soft">시작하기 전에</p>
          <h2 className="mt-4 text-[1.7rem] font-extrabold leading-[1.32] tracking-[-0.01em] text-brand-ink md:text-[2.25rem]">
            궁금하실 만한 것들
          </h2>
        </Reveal>

        <Reveal className="mt-10 divide-y divide-brand-line overflow-hidden rounded-2xl border border-brand-line bg-white">
          {FAQ_ITEMS.map((item) => {
            const isOpen = open === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brand-canvas/60"
                  aria-expanded={isOpen}
                >
                  <span className="text-[1.0625rem] font-semibold text-brand-ink">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-ink-soft transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] leading-[1.7] text-brand-ink-soft">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
