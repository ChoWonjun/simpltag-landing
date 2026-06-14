import Image from "next/image";
import { HOW_STEPS } from "@/config/features";
import { Reveal } from "./Reveal";

/**
 * How it works — 3 steps. Proves "쉽다". Result-verb headers, phone shots.
 */
export function HowItWorks() {
  return (
    <section id="how" className="bg-white px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-brand-blue">어떻게 작동하나요</p>
          <h2 className="mt-4 text-[1.8rem] font-extrabold leading-[1.3] tracking-[-0.01em] text-brand-ink md:text-[2.4rem]">
            공유 한 번이면 끝.
            <br className="sm:hidden" /> 내가 할 일은 그게 전부예요.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {HOW_STEPS.map((s, i) => (
            <Reveal
              as="li"
              key={s.id}
              delay={i * 100}
              className="flex flex-col gap-7"
            >
              <div className="relative mx-auto w-full max-w-[260px] order-2 md:order-1">
                <div
                  aria-hidden
                  className="absolute inset-x-6 bottom-6 top-10 rounded-[2rem] bg-brand-cream-soft"
                />
                <Image
                  src={s.image}
                  alt={s.alt}
                  width={548}
                  height={1132}
                  className="relative h-auto w-full drop-shadow-[0_18px_40px_rgba(27,36,51,0.16)]"
                />
              </div>

              <div className="order-1 text-center md:order-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-ink text-sm font-bold text-white">
                  {s.step}
                </span>
                <h3 className="mt-4 text-xl font-bold text-brand-ink">
                  {s.label}
                </h3>
                <p className="mx-auto mt-2.5 max-w-xs text-[15px] leading-relaxed text-brand-ink-soft">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
