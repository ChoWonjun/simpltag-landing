import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_METADATA } from "@/config/site";
import "./portfolio.css";

const PAGE_TITLE = "AI 서비스, 직접 만들어보았습니다 — SimplTag";
const PAGE_DESC =
  "7년차 카카오 인증 기획자의 1인 프로덕트 출시기. SimplTag — 링크 하나로 완성되는 AI 콘텐츠 검색·정리 도구.";

const APP_STORE_URL = "https://apps.apple.com/us/app/simpltag/id6748384416";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${SITE_METADATA.url}/portfolio`,
    siteName: "SimplTag",
    images: [
      {
        url: SITE_METADATA.ogImage,
        width: 1200,
        height: 630,
        alt: PAGE_TITLE,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [SITE_METADATA.ogImage],
  },
};

type Entry = {
  num: string;
  title: string;
  tagline: string;
  body: string[];
  image: { src: string; alt: string; caption: string };
  reverse?: boolean;
};

const ENTRIES: Entry[] = [
  {
    num: "01 / Pipeline",
    title: "LLM 활용 콘텐츠 가공 파이프라인",
    tagline: "AI 요약 파이프라인 — 링크만 공유하면 핵심만 요약해서 저장합니다.",
    body: [
      "사용자가 URL을 전송하면 도메인에 따라 콘텐츠 성격에 맞는 방식으로 본문을 추출합니다. 유튜브는 자막을, 인스타그램·페이스북 등 SNS는 카드 메타데이터를, 블로그·기사 등 일반 글은 본문 텍스트를 크롤링한 뒤 광고와 같은 노이즈를 걸러냅니다.",
      "추려진 본문을 활용해 구조화된 JSON 형식으로 요약과 태그를 생성합니다. 요약은 빠르고 저렴한 Haiku, 태그는 어휘 일관성을 위해 더 정확한 Sonnet, 그리고 자연어 검색을 위한 임베딩은 OpenAI 모델로 역할별로 분리했습니다. 여러 AI 모델과 외부 API를 역할·비용·품질에 맞춰 오케스트레이션한 결과, 한 모델로 통일하는 방식보다 효율적인 파이프라인을 운영할 수 있었습니다.",
    ],
    image: {
      src: "/portfolio/content_detail.png",
      alt: "SimplTag 콘텐츠 상세 화면",
      caption: "콘텐츠 상세 화면",
    },
  },
  {
    num: "02 / Search",
    title: "임베딩 기반 하이브리드 검색 랭킹",
    tagline: "콘텐츠 검색 — 키워드와 의미를 함께 보고 검색합니다.",
    body: [
      "검색은 의미와 키워드를 동시에 봅니다. 의미 검색은 임베딩으로 콘텐츠와 질문의 유사도를 비교하고, 키워드 검색은 제목·요약·도메인에서 단어 일치를 찾습니다. 키워드 검색에서 짧은 검색어(2자 이하)는 단어 일부 매칭이 아니라 정확히 일치하는 단어만 찾도록 처리해 노이즈를 줄였습니다. 두 결과를 합칠 때 짧은 쿼리는 키워드, 긴 쿼리는 의미 쪽에 더 무게를 둡니다.",
      "‘넥스트js’나 ‘AI/인공지능’ 같은 한국어 표기 다양성은 키워드 확장 맵으로 보완했습니다. 한국어 검색은 영문과 유사도 점수 분포가 다르기 때문에, 실측을 통해 한국어용 임계값(0.25)을 따로 정의했습니다.",
    ],
    image: {
      src: "/portfolio/search_result.png",
      alt: "SimplTag 검색 결과 화면",
      caption: "검색 결과 화면",
    },
    reverse: true,
  },
  {
    num: "03 / Tool Use",
    title: "대화 맥락 기반 도구 자동 호출",
    tagline: "Tool Use 기반 채팅 — 자연어 요청을 도구로 자동 라우팅합니다.",
    body: [
      "처음엔 “URL이면 요약, 키워드면 검색” 같은 규칙 기반 라우팅으로 시작했지만, 맥락을 이어가는 대화를 따라가지 못하는 문제가 컸습니다. 예를 들어 “AI 콘텐츠 찾아줘”라고 묻고 이어서 “그중에서 유튜브만 골라줘”라고 하면, 앞의 AI 맥락은 잊고 유튜브로 새로 검색을 실행하는 식이었습니다. 해결 방식은 규칙을 정해주는 게 아니라 대화 맥락 속에서 AI가 스스로 사용자의 요청을 태스크로 분리하도록 하는 것이었고, 자주 쓰는 작업을 도구로 정의해 모델에 라우팅을 맡기는 구조로 전환했습니다.",
      "도구를 설계할 때는 업계에서 권장하는 ‘Narrow Verb’ 가이드를 참고해 도구마다 하나의 명확한 동작만 책임지도록 좁게 정의했습니다. 의미 검색·날짜 필터·태그/폴더 탐색·콘텐츠 조회·URL 요약·도움말 안내 같은 도구가 있고, 사용자 의도가 모호할 때는 의도를 되묻도록 했습니다. 새 기능이 필요할 때 도구만 추가하면 되는 구조라 일일이 케이스에 대응할 필요가 없어졌습니다.",
    ],
    image: {
      src: "/portfolio/chat-routing.png",
      alt: "SimplTag 채팅 화면",
      caption: "채팅 / 라우팅 화면",
    },
  },
  {
    num: "04 / Tagging",
    title: "콘텐츠 자동 분류와 개인화 태그 추천",
    tagline:
      "자동 분류와 태그 추천 — 콘텐츠를 저장하면 태그별로 분류하고, 적절한 태그를 추천합니다.",
    body: [
      "콘텐츠를 저장하면 그 콘텐츠를 관통하는 가장 중요한 키워드 1개를 자동으로 태그로 등록해, 사용자가 따로 정리하지 않아도 태그별로 분류되도록 했습니다. 함께 제안되는 3개의 추천 태그는 다른 콘텐츠에서도 재사용할 수 있는 공통 개념이나 카테고리 단어 위주로, 어휘가 무한정 늘어나지 않도록 설계했습니다.",
      "모델 프롬프트에 사용 중인 태그와 사용 횟수를 함께 전달해, 기존 태그를 먼저 매칭하고 적절한 것이 없을 때만 새 태그를 제안하도록 정의했습니다. 콘텐츠가 등록되지 않은 태그는 자동으로 삭제해 어휘 목록을 정돈합니다. ‘AI’와 ‘인공지능’처럼 같은 의미를 다르게 적는 한국어 표기 다양성도 프롬프트에 명시해, 같은 의미는 같은 태그로 모이도록 했습니다. 그 결과 콘텐츠가 흩어지지 않고 카테고리별로 정돈됩니다.",
    ],
    image: {
      src: "/portfolio/tag_suggest.png",
      alt: "SimplTag 태그/폴더 관리 화면",
      caption: "태그 추천 화면",
    },
    reverse: true,
  },
];

export default function PortfolioPage() {
  return (
    <div className="portfolio-root">
      <header className="topbar">
        <div className="wrap">
          <div className="brand">
            <span className="hash">#</span>SimplTag{" "}
            <span style={{ color: "var(--muted-2)", fontWeight: 400, marginLeft: 6 }}>
              / Portfolio
            </span>
          </div>
          <nav>
            <a href="#about">About</a>
            <a href="#design">Design</a>
            <Link href="/">simpltag.com</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div>
            <div className="eyebrow">1인 프로덕트 출시기</div>
            <h1>
              <em>AI 서비스,</em>
              <br className="hero-br" />
              직접 만들어
              <br className="hero-br" />
              보았습니다.
            </h1>
            <p className="lede">7년차 카카오 인증 기획자의, 1인 프로덕트 출시기</p>
            <p className="product">
              <strong>SimplTag</strong> — 링크 하나로 완성되는 AI 콘텐츠 검색·정리 도구
            </p>
            <a className="cta" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.05 12.04c-.02-2.13 1.74-3.16 1.82-3.21-.99-1.45-2.54-1.65-3.09-1.67-1.31-.13-2.56.77-3.23.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.38 6.45 1.08 8.56.71 1.04 1.56 2.2 2.66 2.16 1.07-.04 1.47-.69 2.77-.69 1.3 0 1.66.69 2.79.67 1.15-.02 1.88-1.05 2.59-2.09.81-1.19 1.15-2.35 1.17-2.41-.03-.01-2.24-.86-2.25-3.41zM14.94 5.5c.59-.71.99-1.7.88-2.69-.85.03-1.88.57-2.49 1.28-.55.63-1.03 1.64-.9 2.61.95.07 1.92-.48 2.51-1.2z" />
              </svg>
              App Store에서 보기
            </a>
          </div>
          <div className="hero-img">
            <Image
              src="/portfolio/hero_image.png"
              alt="SimplTag — 링크 하나로 완성되는 AI 콘텐츠 검색·정리 도구"
              width={1024}
              height={1024}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">01 — About</span>
            <h2>자기소개</h2>
          </div>

          <article className="about-block">
            <h3>기획자에서 제작자로, 변화의 흐름을 마주하며</h3>
            <p>
              지난해 5월부터 5개월간 육아휴직을 하면서, 평소 관심 있던 생성형 AI 분야의 급속한 변화를 더
              가까이 목격했습니다. 기획자가 상상하던 아이디어를 직접 구현할 수 있는 환경이 열렸음을
              실감했습니다. 가능성을 확인하고자 1인 프로젝트로 콘텐츠를 요약·정리하고 자연어로 검색할 수
              있는 서비스를 출시했고, AI가 단순 업무 자동화를 넘어 비개발자의 제품 생산성까지 혁신할 수
              있음을 확인했습니다.
            </p>
            <p>
              이 프로젝트를 통해 가장 깊이 배운 점은, 에이전트 서비스의 핵심이 화려한 답변이 아니라
              사용자가 요청한 작업을 정확히 완료하는 경험이라는 사실이었습니다. 요청을 올바른 경로로
              라우팅하고, 불확실한 상황에서는 근거를 재확인하는 설계가 사용자 신뢰의 바탕이 된다는 것을
              직접 만들며 확인했고, 그 영역을 더 깊이 들여다보고 싶다는 갈증이 생겼습니다.
            </p>
            <p>
              AI 검색 기획이라는 직무가 그 갈증을 가장 채울 수 있는 영역이라고 판단했습니다. “검색을
              결과를 넘어 경험으로 확장한다”는 팀의 방향성이 1인 프로젝트를 통해 실현해보고 싶었던 것과
              일치했고, “기획자가 코드와 데이터를 직접 다루며 문제를 해결한다”는 정의는 SimplTag에서
              일해 온 방식 그대로였습니다. 1인 프로젝트로 쌓은 기술적 이해를 카카오의 데이터 규모와
              톡·커머스 같은 실서비스 위에서 실제 사용자 가치로 전환하는 과정을 경험하고 싶습니다.
            </p>
          </article>

          <article className="about-block">
            <h3>제품 기획부터 출시까지, AI 에이전트 팀으로</h3>
            <p>
              AI를 활용해 기획부터 개발, 출시까지 직접 완료하며, AI 에이전트 솔로 팀으로 일하는 방식을
              다듬어왔습니다. 다음 작업을 정하는 것부터 AI와 함께 합니다. 서비스를 직접 사용하며 발견한
              아이디어·오류·개선점을 작업 종류와 사용자 영향 두 축으로 분류해 누적해 두고, 사용자 영향을
              AI와 논의해 지금 가장 먼저 할 일을 결정합니다. 릴리즈를 앞두면 사용자 체감이 큰 작업을
              먼저 고르는 식입니다.
            </p>
            <p>
              고른 작업은 곧바로 코드로 가지 않습니다. 웹 리서치 에이전트로 레퍼런스를 조사하고,
              브레인스토밍 스킬로 놓친 기획 결정 사항과 설계 누락 지점을 검토합니다. 정리된 내용을
              기반으로 구현 계획을 작성하며, 바이브 코딩의 완성도를 위해 테스트 먼저(TDD)를 엄격하게
              지키도록 요구합니다.
            </p>
            <p>
              구현은 보통 컨텍스트 오염을 막기 위해 역할별 subagent를 팀으로 묶어 TDD 사이클로 진행합니다.
              작업이 끝나면 며칠 동안 테스트 환경에서 실제 사용해본 뒤 운영 환경에 반영하고, 그 과정에서
              발견된 후속작업은 처음 시작했던 업무 목록에 다시 반영하며 구현 사이클을 마무리합니다.
            </p>
            <p>
              1인 환경에서 다듬어 온 이 방식이 AI Search Agent 팀이 만들어가고 있는 새로운 기획자의
              일하는 방식에 보탬이 되도록, 그 자리에 적극 참여하고 싶습니다.
            </p>
          </article>
        </div>
      </section>

      <section className="section no-rule" id="design">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">02 — Design</span>
            <h2>주요 설계</h2>
          </div>

          {ENTRIES.map((entry) => (
            <article key={entry.num} className={entry.reverse ? "entry reverse" : "entry"}>
              <div className="entry-media">
                <div className="media-wrap">
                  <div className="phone-frame">
                    <Image
                      src={entry.image.src}
                      alt={entry.image.alt}
                      width={640}
                      height={1280}
                      loading="lazy"
                      sizes="(max-width: 900px) 280px, 320px"
                    />
                  </div>
                  <div className="caption">{entry.image.caption}</div>
                </div>
              </div>
              <div className="entry-body">
                <span className="entry-num">{entry.num}</span>
                <h3>{entry.title}</h3>
                <p className="tagline">{entry.tagline}</p>
                {entry.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="portfolio-footer">
        <div className="wrap">
          <div className="brand">
            <span className="hash" style={{ color: "var(--accent)" }}>
              #
            </span>
            SimplTag
          </div>
          <div className="meta">© 2026 · simpltag.com/portfolio</div>
        </div>
      </footer>
    </div>
  );
}
