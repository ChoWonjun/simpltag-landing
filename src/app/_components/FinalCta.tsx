import { Reveal } from "./Reveal";
import { AppStoreCta } from "./AppStoreCta";

/**
 * Final CTA — closing. Repeats the hook + the same single CTA (no competing
 * button). Cream stage, mirroring the hero.
 */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-cream bg-grain px-5 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(246,238,218,0) 70%)",
        }}
      />
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-[2rem] font-extrabold leading-[1.25] tracking-[-0.02em] text-brand-ink md:text-[2.75rem]">
          다음 영상부터는,
          <br />
          보기 전에 아세요.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[1.0625rem] leading-[1.65] text-brand-ink-soft">
          링크 하나만 공유하면 돼요. 후회하는 시간 대신, 핵심만 남는 아카이브를
          지금 시작해보세요.
        </p>
        <div className="mt-9 flex justify-center">
          <AppStoreCta align="center" />
        </div>
      </Reveal>
    </section>
  );
}
