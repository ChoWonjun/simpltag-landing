import Image from "next/image";
import { FEATURE_BLOCKS, SOURCE_KINDS } from "@/config/features";
import { Reveal } from "./Reveal";

/**
 * Features — save / search / chat, shown AFTER the wedge. Zigzag rows.
 * Closes with the "내 링크도 되나?" source-kind strip.
 */
export function FeaturesSection() {
  return (
    <section className="bg-brand-canvas px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-brand-ink-soft">검증이 끝이 아니에요</p>
          <h2 className="mt-4 text-[1.8rem] font-extrabold leading-[1.3] tracking-[-0.01em] text-brand-ink md:text-[2.4rem]">
            한 번 저장하면
            <br className="sm:hidden" /> 검색 가능한 아카이브가 돼요
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-14 md:gap-20">
          {FEATURE_BLOCKS.map((f, i) => {
            const reversed = i % 2 === 1;
            const accent =
              f.accent === "coral" ? "text-brand-coral" : "text-brand-blue";
            const halo =
              f.accent === "coral" ? "bg-brand-coral/10" : "bg-brand-blue/10";
            return (
              <div
                key={f.id}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-14"
              >
                {/* Text */}
                <Reveal
                  className={reversed ? "md:order-2 md:pl-6" : "md:pr-6"}
                >
                  <p className={`eyebrow ${accent}`}>{f.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-extrabold leading-snug tracking-[-0.01em] text-brand-ink md:text-[1.9rem]">
                    {f.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[1.0625rem] leading-[1.7] text-brand-ink-soft">
                    {f.body}
                  </p>
                </Reveal>

                {/* Phone */}
                <Reveal
                  delay={80}
                  className={reversed ? "md:order-1" : ""}
                >
                  <div className="relative mx-auto w-full max-w-[260px]">
                    <div
                      aria-hidden
                      className={`absolute inset-x-2 bottom-8 top-12 rounded-[2.5rem] ${halo} blur-md`}
                    />
                    <Image
                      src={f.image}
                      alt={f.alt}
                      width={616}
                      height={1272}
                      className="relative h-auto w-full drop-shadow-[0_22px_50px_rgba(27,36,51,0.18)]"
                    />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Source kinds reassurance */}
        <Reveal className="mt-20 text-center">
          <p className="text-[15px] font-medium text-brand-ink-soft">
            이런 링크, 전부 됩니다
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            {SOURCE_KINDS.map((k) => (
              <li
                key={k.id}
                className="rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-ink"
              >
                {k.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
