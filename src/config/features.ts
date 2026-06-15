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
    body: "유튜브·블로그·뉴스, 어떤 링크든 공유 버튼 누르고 SimplTag만 고르면 끝. 앱을 따로 열 필요 없어요.",
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
    id: "variety",
    eyebrow: "콘텐츠 요약",
    title: "영상도 기사도, 다 요약돼요",
    body: "링크만 저장하면 심플태그가 핵심만 추려 한곳에 모아둡니다.",
    image: "/screenshots/home.png",
    alt: "영상과 뉴스 기사가 함께 쌓인 홈 화면",
    accent: "blue",
  },
  {
    id: "organize",
    eyebrow: "자동 정리",
    title: "저장만 하면 알아서 정리돼요",
    body: "직접 등록하지 않아도 어울리는 태그로 자동 분류해 둡니다. 물론 폴더·태그로 직접 정리도 가능해요.",
    image: "/screenshots/tag.png",
    alt: "자동으로 분류된 태그 목록 화면",
    accent: "coral",
  },
  {
    id: "search",
    eyebrow: "자연어 검색",
    title: "기억나는 대로 물어보세요",
    body: "제목·요약·태그 기억하지 않아도 돼요. 떠오르는 대로 물으면 의미 기반으로 찾아드려요.",
    image: "/screenshots/search.png",
    alt: "자연어로 질문해 관련 콘텐츠를 찾아주는 검색 결과 화면",
    accent: "blue",
  },
];
