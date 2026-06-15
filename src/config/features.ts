import { HowStep, FeatureBlock } from "@/types";

/**
 * How it works — 3 steps. Headers are result-verbs (not feature names),
 * so the user reads outcomes, not mechanics.
 */
export const HOW_STEPS: HowStep[] = [
  {
    id: "share",
    step: "01",
    label: "공유하기",
    body: "유튜브·블로그·뉴스, 어떤 링크든 공유 버튼을 누르고 SimplTag만 고르면 끝. 앱을 따로 열 필요도 없어요.",
    image: "/screenshots/share.png",
    alt: "iOS 공유 시트에서 SimplTag를 선택하는 화면",
  },
  {
    id: "summarize",
    step: "02",
    label: "AI가 먼저 읽어드려요",
    body: "심플태그가 링크를 대신 읽고 핵심만 요약해요. 태그와 폴더 정리까지 알아서 해둡니다.",
    image: "/screenshots/home.png",
    alt: "공유한 링크가 요약 카드로 정리된 홈 화면",
  },
  {
    id: "decide",
    step: "03",
    label: "안 봐도 핵심은 알아요",
    body: "30초면 결론부터 확인할 수 있어요. 볼 만하면 그때 원본을 보면 되고요.",
    image: "/screenshots/detail.png",
    alt: "콘텐츠 핵심 요약을 보여주는 상세 화면",
  },
];

/**
 * Features — the second-brain value (save / search / chat) shown AFTER
 * the wedge. Max 3 blocks. Result-verb headers.
 */
export const FEATURE_BLOCKS: FeatureBlock[] = [
  {
    id: "organize",
    eyebrow: "자동 정리",
    title: "저장만 하면 알아서 정리돼요",
    body: "태그도 폴더도 직접 만들 필요 없어요. 심플태그가 콘텐츠를 읽고 어울리는 태그를 자동으로 붙여 분류해 둡니다.",
    image: "/screenshots/tag.png",
    alt: "자동으로 분류된 태그 목록 화면",
    accent: "blue",
  },
  {
    id: "search",
    eyebrow: "의미 검색",
    title: "한글로 물어도 영문 콘텐츠까지 찾아요",
    body: "제목·요약·태그·메모를 모두 이해하는 의미 기반 검색이에요. 정확한 단어가 기억나지 않아도 떠오르는 대로 찾으세요.",
    image: "/screenshots/list.png",
    alt: "저장한 콘텐츠가 쌓인 아카이브 목록 화면",
    accent: "coral",
  },
  {
    id: "chat",
    eyebrow: "출처 기반 대화",
    title: "저장한 콘텐츠에게 직접 물어보세요",
    body: "AI가 내가 저장한 콘텐츠를 근거로 답해요. 지어내지 않고, 어떤 콘텐츠에서 나온 답인지 출처까지 보여드려요.",
    image: "/screenshots/chat.png",
    alt: "저장한 콘텐츠를 바탕으로 답하는 AI 대화 화면",
    accent: "blue",
  },
];
