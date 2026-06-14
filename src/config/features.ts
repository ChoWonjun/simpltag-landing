import { HowStep, FeatureBlock, FaqItem, SourceKind } from "@/types";

/**
 * How it works — 3 steps. Headers are result-verbs (not feature names),
 * so the user reads outcomes, not mechanics.
 */
export const HOW_STEPS: HowStep[] = [
  {
    id: "share",
    step: "01",
    label: "공유하기",
    body: "유튜브·아티클에서 공유 버튼을 누르고 SimplTag를 고르면 끝. 앱을 따로 열 필요도 없어요.",
    image: "/screenshots/preview2.png",
    alt: "iOS 공유 시트에서 SimplTag를 선택하는 화면",
  },
  {
    id: "summarize",
    step: "02",
    label: "AI가 먼저 읽어드려요",
    body: "심플태그가 링크를 대신 읽고 핵심만 요약해요. 태그와 폴더 정리까지 알아서 해둡니다.",
    image: "/screenshots/preview1.png",
    alt: "공유한 링크가 요약 카드로 정리된 화면",
  },
  {
    id: "decide",
    step: "03",
    label: "안 봐도 핵심은 알아요",
    body: "30초면 결론을 먼저 확인. 볼 가치가 있으면 그때 원본으로 가면 돼요.",
    image: "/screenshots/preview3.png",
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
    title: "저장만 하면, 알아서 정리돼요",
    body: "태그도 폴더도 직접 만들 필요 없어요. 심플태그가 콘텐츠를 읽고 어울리는 자리에 자동으로 분류해 둡니다.",
    image: "/screenshots/preview5.png",
    alt: "자동으로 분류된 폴더와 태그 목록 화면",
    accent: "blue",
  },
  {
    id: "search",
    eyebrow: "의미 검색",
    title: "한글로 물어도, 영문 콘텐츠까지 찾아드려요",
    body: "제목·요약·태그·메모를 모두 이해하는 의미 기반 검색이에요. 정확한 단어가 기억나지 않아도 떠오르는 대로 찾으세요.",
    image: "/screenshots/recent-page.png",
    alt: "저장한 콘텐츠가 쌓인 아카이브 목록 화면",
    accent: "coral",
  },
  {
    id: "chat",
    eyebrow: "출처 기반 대화",
    title: "저장한 콘텐츠에게, 직접 물어보세요",
    body: "AI가 당신이 저장한 콘텐츠에 근거해 답해요. 지어내지 않고, 어떤 콘텐츠에서 나온 답인지 출처까지 보여드립니다.",
    image: "/screenshots/chat-search.png",
    alt: "저장한 콘텐츠를 바탕으로 답하는 AI 대화 화면",
    accent: "blue",
  },
];

/** "내 링크도 되나?" — input source reassurance strip. */
export const SOURCE_KINDS: SourceKind[] = [
  { id: "youtube", label: "유튜브" },
  { id: "article", label: "블로그·아티클" },
  { id: "news", label: "뉴스" },
  { id: "web", label: "웹페이지·PDF" },
];

/** Objection handling — single biggest hesitations before install. */
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "free",
    q: "정말 무료로 쓸 수 있나요?",
    a: "네. 카드 등록 없이 무료로 시작할 수 있어요. 더 많은 요약·저장이 필요하면 유료 플랜으로 올릴 수 있지만, 무료만으로도 충분히 써볼 수 있게 만들었어요.",
  },
  {
    id: "sources",
    q: "어떤 링크를 저장할 수 있나요?",
    a: "유튜브 영상, 블로그·뉴스 아티클, 일반 웹페이지까지 링크 하나면 됩니다. 공유 시트에서 SimplTag만 누르면 자동으로 요약·정리돼요.",
  },
  {
    id: "privacy",
    q: "제가 저장한 내용은 안전한가요?",
    a: "저장한 콘텐츠는 본인 계정에만 연결되고, 다른 사용자에게 노출되지 않아요. AI 답변도 당신이 저장한 콘텐츠 안에서만 만들어집니다.",
  },
  {
    id: "platform",
    q: "아이폰에서만 되나요?",
    a: "지금은 iOS(App Store)에서 만나실 수 있어요. 안드로이드 버전도 준비하고 있습니다.",
  },
];
