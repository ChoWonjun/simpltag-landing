import Image from "next/image";
import { FEATURE_BLOCKS } from "@/config/features";
import { Reveal } from "./Reveal";

/**
 * Features — save / search / chat, shown AFTER the wedge. 3-column card grid
 * mirroring the How-it-works layout for visual consistency.
 */
export function FeaturesSection() {
  return (
    <section className="bg-brand-canvas px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-brand-ink-soft">확인하고 끝이 아니에요</p>
          <h2 className="mt-4 text-[1.8rem] font-extrabold leading-[1.3] tracking-[-0.01em] text-brand-ink md:text-[2.4rem]">
            한 번 저장하면
            <br className="sm:hidden" /> 검색 가능한 아카이브가 돼요
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {FEATURE_BLOCKS.map((f, i) => {
            const accent =
              f.accent === "coral" ? "text-brand-coral" : "text-brand-blue";
            return (
              <Reveal key={f.id} delay={i * 100} className="flex flex-col gap-7">
                <div className="relative mx-auto w-full max-w-[260px] order-2 md:order-1">
                  <div
                    aria-hidden
                    className="absolute inset-x-6 bottom-6 top-10 rounded-[2rem] bg-brand-cream-soft"
                  />
                  <Image
                    src={f.image}
                    alt={f.alt}
                    width={548}
                    height={1148}
                    className="relative h-auto w-full drop-shadow-[0_18px_40px_rgba(27,36,51,0.16)]"
                  />
                </div>

                <div className="order-1 text-center md:order-2">
                  <p className={`eyebrow ${accent}`}>{f.eyebrow}</p>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-brand-ink">
                    {f.title}
                  </h3>
                  <p className="mx-auto mt-2.5 max-w-xs text-[15px] leading-relaxed text-brand-ink-soft">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
