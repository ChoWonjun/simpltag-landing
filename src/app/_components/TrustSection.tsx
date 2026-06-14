import { Reveal } from "./Reveal";

const PILLARS = [
  {
    id: "grounded",
    title: "지어내지 않아요",
    body: "AI 답변은 당신이 저장한 콘텐츠 안에서만 만들어지고, 어떤 콘텐츠에서 나왔는지 출처를 함께 보여드려요.",
  },
  {
    id: "private",
    title: "내 계정 전용이에요",
    body: "저장한 콘텐츠는 본인에게만 연결돼요. 다른 사람에게 노출되지 않습니다.",
  },
  {
    id: "free",
    title: "부담 없이 시작해요",
    body: "카드 등록 없이 무료로 시작할 수 있어요. 마음에 들 때 더 쓰면 됩니다.",
  },
];

/**
 * Trust — honest differentiators (no fabricated ratings for a new app).
 * Leads with the grounded-AI / source-citation message.
 */
export function TrustSection() {
  return (
    <section className="bg-white px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-brand-blue">믿고 쓸 수 있게</p>
          <h2 className="mt-4 text-[1.7rem] font-extrabold leading-[1.32] tracking-[-0.01em] text-brand-ink md:text-[2.25rem]">
            요약은 빠르게, 신뢰는 단단하게
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 90}
              className="h-full rounded-2xl border border-brand-line bg-brand-canvas p-7"
            >
              <div className="mb-4 h-1.5 w-9 rounded-full bg-brand-blue" />
              <h3 className="text-lg font-bold text-brand-ink">{p.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-brand-ink-soft">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
