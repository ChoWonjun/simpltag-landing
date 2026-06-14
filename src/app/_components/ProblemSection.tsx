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
          <p className="eyebrow text-brand-ink-soft">그거, 다들 겪어요</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-[1.7rem] font-extrabold leading-[1.32] tracking-[-0.01em] text-brand-ink md:text-[2.25rem]">
            썸네일은 충격적인데,
            <br />
            정작 결론은 마지막 30초에 있죠.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-[1.7] text-brand-ink-soft">
            낚시 영상에 속아 20분을 날리고, 저장만 해둔 아티클은 다시 안 열어요.
            쌓이는 건 콘텐츠가 아니라 ‘나중에 볼게’라는 후회뿐.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 text-left sm:grid-cols-2">
          <Reveal delay={60}>
            <div className="h-full rounded-2xl border border-brand-line bg-white p-6 md:p-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-coral/10 px-3 py-1 text-[13px] font-semibold text-brand-coral">
                지금까지
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
                심플태그와는
              </span>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-brand-ink">
                <li>· 보기 전에 핵심부터 30초로 먼저 확인하고</li>
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
