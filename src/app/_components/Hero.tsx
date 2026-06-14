import Image from "next/image";
import { AppStoreCta } from "./AppStoreCta";

/**
 * Hero — emotional hook (regret) → relief promise, single CTA.
 * Cream stage; the floating phone + annotation chips tell the
 * "pre-validation" story in one glance.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream bg-grain">
      {/* soft warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(246,238,218,0) 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:px-8 md:pb-28 md:pt-20">
        {/* Copy */}
        <div className="text-center md:text-left">
          <p className="eyebrow animate-rise text-brand-coral [animation-delay:40ms]">
            보기 전에 끝내는 AI 요약
          </p>

          <h1 className="animate-rise mt-5 text-[2rem] font-extrabold leading-[1.18] tracking-[-0.02em] text-brand-ink [animation-delay:120ms] sm:text-[2.6rem] md:text-[3.25rem]">
            <span
              className="[-webkit-box-decoration-break:clone] [box-decoration-break:clone]"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(244,99,78,0.3) 0, rgba(244,99,78,0.3) 0.32em, transparent 0.32em)",
              }}
            >
              끝까지 보고 후회한 적
            </span>
            ,
            <br />
            있으시죠?
          </h1>

          <p className="animate-rise mx-auto mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-brand-ink-soft [animation-delay:200ms] md:mx-0 md:text-[1.1875rem]">
            링크만 공유하면 SimplTag가 먼저 읽고 핵심만 추려드려요. 끝까지 안
            봐도 30초면 볼지 말지 결정할 수 있어요.
          </p>

          <div className="animate-rise mt-9 [animation-delay:280ms]">
            <AppStoreCta align="center" className="md:items-start" />
          </div>
        </div>

        {/* Phone + annotations */}
        <div className="animate-rise relative mx-auto w-full max-w-[340px] [animation-delay:360ms]">
          <div className="animate-float relative">
            <Image
              src="/screenshots/detail.png"
              alt="SimplTag가 콘텐츠 핵심만 30초 만에 보여주는 화면"
              width={647}
              height={1355}
              priority
              className="h-auto w-full drop-shadow-[0_30px_60px_rgba(27,36,51,0.22)]"
            />
          </div>

          {/* "30초면 충분" coral chip */}
          <div className="absolute -left-2 top-10 rotate-[-6deg] rounded-2xl bg-brand-coral px-4 py-2.5 text-sm font-bold text-white shadow-lg md:-left-6">
            30초면 충분 ⚡
          </div>

          {/* "원본 28:14 → 안 봐도 OK" chip */}
          <div className="absolute -right-1 bottom-24 rotate-[4deg] rounded-2xl bg-white px-4 py-3 shadow-lg md:-right-6">
            <p className="text-[11px] font-medium text-brand-ink-soft line-through">
              원본 영상 28:14
            </p>
            <p className="text-sm font-bold text-brand-blue">안 봐도 OK 👍</p>
          </div>
        </div>
      </div>
    </section>
  );
}
