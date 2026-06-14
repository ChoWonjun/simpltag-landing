# 메인 랜딩 페이지 리디자인 (2026-06-14)

> 대상: `/` (메인 랜딩) **only**. `/terms`·`/portfolio` 는 건드리지 않음.
> 브랜치: `redesign/landing-main` (main 미반영 — 롤백 가능).

## 포지셔닝

"사후 정리 도구"가 아니라 **"보기 전에 끝내는 사전 검증" 도구**.
Eightify·Glarity 의 "빠른 요약" 과 Recall·mymind 의 "저장·정리" 사이의
감정적 빈틈(*"끝까지 보고 후회한 시간"*)을 점유한다. 후크는 기능이 아니라
**후회(regret)**, 안도는 "이제 안 봐도 핵심은 안다".

내부 기준선: *"심플태그는 콘텐츠를 정리해주는 앱이 아니라, 끝까지 안 봐도 되게 해주는 앱이다."*

## 섹션 구성 (7, 단일 CTA 퍼널)

1. **Hero** — "끝까지 보고 후회한 적, 있으시죠?" → 30초 약속 + App Store CTA + 폰/주석칩
2. **Problem** — before/after 공감 (낚시 썸네일 후회 구체화)
3. **How it works** — 3스텝(공유 → AI가 읽음 → 안 봐도 앎), 결과형 동사 헤더 + CTA 반복
4. **Features** — 저장·검색·대화(지그재그) + "이런 링크 전부 됩니다" 스트립
5. **Trust** — grounded AI(출처 표시)·계정 전용·무료 시작 3기둥 (평점 미조작)
6. **FAQ** — 무료/링크종류/안전/플랫폼 4문 아코디언
7. **Final CTA** — "다음 영상부터는, 보기 전에 아세요." + 동일 CTA

단일 지배 CTA "App Store에서 무료로 받기" 를 hero·how·final 3회 반복(경쟁 버튼 없음).

## 비주얼 시스템 (additive 토큰, globals.css)

크림 `#F6EEDA`(hero·final 무대) + 화이트 본문 + 네이비 잉크 `#1B2433` +
액션 블루 `#0A84FF` + 코랄 스파크 `#F4634E`. Pretendard. 스크롤 리빌 + 히어로 스태거.
기존 shadcn 토큰 값은 **불변** → `/terms`·`/portfolio` 렌더 영향 0.

## 블로커 수정

- App Store 링크 placeholder(`id123456789`) → 실제 `id6748384416` (`config/links.ts`).

## 신규/변경 파일

- `src/app/page.tsx` — 7섹션 조립 (LandingHeader + 기존 Footer 재사용)
- `src/app/_components/` — Hero·ProblemSection·HowItWorks·FeaturesSection·TrustSection·FaqSection·FinalCta·LandingHeader·AppStoreCta·Reveal
- `src/config/` — links(실 URL)·site(메타)·features(신규 콘텐츠), `src/types`(콘텐츠 모델)
- `src/app/globals.css` — 브랜드 토큰·키프레임·reveal (additive)
- 삭제(고아): `_components/HeroSection`·`PreviewSection`, `components/ScreenshotCard`, `ui/card`·`ui/carousel`, dep `embla-carousel-react`

## 남은 작업

- **스크린샷 현행화**: 현재 `public/screenshots/*` 는 버전 혼재(하단탭 Threads/Library)·일부 영문.
  현재 앱에서 한국어·라이트모드로 재촬영해 교체 필요(Hero/How/Features 8컷).
- og-image 갱신(선택).

## 롤백

```bash
cd ~/Documents/simpltag-landing
git checkout main && git branch -D redesign/landing-main   # 전체 폐기
```
프로덕션(main) 에는 아무것도 반영되지 않았으므로 배포 영향 0.
