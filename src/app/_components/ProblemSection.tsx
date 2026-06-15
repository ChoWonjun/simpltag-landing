import { Reveal } from "./Reveal";

/**
 * Problem — agitation. Make the visitor feel "이거 내 얘기".
 * Empathy, not blame. Before / After contrast.
 */
export function ProblemSection() {
  return (
    <section className="bg-brand-canvas px-5 py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow text-brand-ink-soft">누구나 이런 경험 있잖아요</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-[1.7rem] font-extrabold leading-[1.32] tracking-[-0.01em] text-brand-ink md:text-[2.25rem]">
            썸네일은 충격적인데,
            <br />
            정작 기대했던 내용은 마지막에 아주 잠깐.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-[1.7] text-brand-ink-soft">
            낚시 영상에 속아 시간만 날리거나, ‘나중에 봐야지’ 저장해둔 아티클은
            어디다 뒀는지 기억도 안 나요. 누가 대신 보고 중요한 내용만
            알려줬으면 했던 적 있으신가요?
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 text-left sm:grid-cols-2">
          <Reveal delay={60}>
            <div className="h-full rounded-2xl border border-brand-line bg-white p-6 md:p-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-coral/10 px-3 py-1 text-[13px] font-semibold text-brand-coral">
                지금까지는
              </span>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-brand-ink-soft">
                <li>· 끝까지 보고 나서야 “이걸 왜 봤지” 싶고</li>
                <li>· 저장한 링크는 어디 뒀는지 기억도 안 나고</li>
                <li>· 다시 찾으려면 제목조차 가물가물</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="h-full rounded-2xl border border-brand-blue/25 bg-brand-blue/[0.04] p-6 md:p-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1 text-[13px] font-semibold text-brand-blue">
                심플태그를 쓰면
              </span>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-brand-ink">
                <li>· 보기 전에 핵심부터 먼저 확인하고</li>
                <li>· 저장한 콘텐츠는 알아서 태그·폴더로 정리되고</li>
                <li>· 한글로 떠오르는 대로 물어도 바로 찾고</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
