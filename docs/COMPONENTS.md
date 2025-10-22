# SimplTag Landing Page - Component Specification

## Overview
이 문서는 SimplTag 랜딩 페이지의 모든 컴포넌트 설계 및 구현 가이드를 제공합니다.

---

## Component Architecture

### Component Categories

```
src/
├── components/              # 재사용 가능한 공통 컴포넌트
│   ├── ui/                 # shadcn/ui 컴포넌트
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ScreenshotCard.tsx
│
└── app/_components/        # 페이지 전용 섹션 컴포넌트
    ├── HeroSection.tsx
    └── PreviewSection.tsx
```

---

## 1. Header Component

### 목적
전역 헤더로, 모든 페이지 상단에 표시되는 네비게이션 영역

### 위치
`src/components/Header.tsx`

### 구성 요소
- SimplTag 로고 (SVG)
- 스크롤 시 하단 border 애니메이션

### Props
```typescript
interface HeaderProps {
  // Props 없음 (순수 표현 컴포넌트)
}
```

### 동작 방식
1. 기본 상태: border 없음
2. 스크롤 감지: `window.scrollY > 0`
3. 스크롤 시: 하단에 `border-b` 추가 (애니메이션)

### 스타일링
- **배경**: 투명 → 스크롤 시 배경색 추가 (선택사항)
- **높이**: 64px (모바일), 80px (데스크톱)
- **로고 크기**: 98 x 21px
- **정렬**:
  - 모바일: 중앙
  - 데스크톱: 좌측 (padding-left: 24px)

### 반응형
```
모바일 (≤768px):  로고 중앙 정렬
데스크톱 (>768px): 로고 좌측 정렬
```

### 구현 체크리스트
- [ ] `src/components/Header.tsx` 파일 생성
- [ ] Image 컴포넌트로 `/logo.svg` 불러오기
- [ ] `useState`로 스크롤 상태 관리
- [ ] `useEffect`로 scroll 이벤트 리스너 등록
- [ ] 스크롤 위치에 따른 border 조건부 렌더링
- [ ] 반응형 스타일 적용 (모바일 중앙, 데스크톱 좌측)
- [ ] sticky 또는 fixed 포지셔닝 적용
- [ ] 애니메이션 transition 추가

---

## 2. Footer Component

### 목적
전역 푸터로, 저작권 정보 및 링크를 제공

### 위치
`src/components/Footer.tsx`

### 구성 요소
- 저작권 표시: `© 2025 SimplTag`
- 문의하기 링크: `mailto:support@simpltag.com`
- 이용약관 링크 (외부 URL)
- 개인정보처리방침 링크 (외부 URL)

### Props
```typescript
interface FooterProps {
  // Props 없음 (정적 컴포넌트)
}
```

### 데이터 소스
`src/config/links.ts`에서 링크 URL 가져오기

### 스타일링
- **배경**: `bg-neutral-50` (라이트 모드), `bg-neutral-900` (다크 모드)
- **텍스트 크기**: `text-sm` (14px)
- **텍스트 색상**: `text-neutral-500`
- **정렬**: 중앙 정렬
- **패딩**: `py-8 px-4`
- **링크 호버**: `hover:text-neutral-900` (underline)

### 레이아웃
```
모바일:
┌─────────────────────┐
│   © 2025 SimplTag   │
│    문의하기 · 이용약관    │
│  개인정보처리방침         │
└─────────────────────┘

데스크톱:
┌───────────────────────────────────────┐
│ © 2025 SimplTag · 문의하기 · 이용약관 · 개인정보처리방침 │
└───────────────────────────────────────┘
```

### 구현 체크리스트
- [ ] `src/components/Footer.tsx` 파일 생성
- [ ] `src/config/links.ts` import
- [ ] 저작권 텍스트 렌더링
- [ ] `mailto:` 링크 추가
- [ ] 외부 링크 2개 추가 (이용약관, 개인정보처리방침)
- [ ] 링크에 `target="_blank"` 및 `rel="noopener noreferrer"` 추가
- [ ] 반응형 레이아웃 적용 (모바일 세로, 데스크톱 가로)
- [ ] 다크모드 스타일 추가

---

## 3. ScreenshotCard Component

### 목적
미리보기 섹션에서 앱 스크린샷을 표시하는 카드 컴포넌트

### 위치
`src/components/ScreenshotCard.tsx`

### 구성 요소
- 스크린샷 이미지
- 제목 (선택사항)
- 설명 (선택사항)

### Props
```typescript
interface ScreenshotCardProps {
  image: string;           // 이미지 경로
  alt: string;             // 접근성 alt 텍스트
  title?: string;          // 카드 제목 (선택)
  description?: string;    // 카드 설명 (선택)
}
```

### 스타일링
- **카드 배경**: `bg-white` (라이트), `bg-neutral-800` (다크)
- **그림자**: `shadow-card` (앱 디자인 토큰)
- **라운딩**: `rounded-lg` (10px)
- **패딩**: `p-4`
- **이미지**:
  - 비율 유지 (`aspect-auto`)
  - 라운딩 `rounded-md`
  - 최대 높이 제한

### 레이아웃
```
┌──────────────────┐
│                  │
│   [스크린샷]      │
│                  │
├──────────────────┤
│ 제목 (선택)       │
│ 설명 (선택)       │
└──────────────────┘
```

### 구현 체크리스트
- [ ] `src/components/ScreenshotCard.tsx` 파일 생성
- [ ] Props 인터페이스 정의
- [ ] shadcn/ui Card 컴포넌트 활용
- [ ] Next.js Image 컴포넌트로 이미지 최적화
- [ ] 조건부 렌더링 (title, description)
- [ ] `shadow-card` 커스텀 클래스 적용
- [ ] 호버 효과 추가 (선택사항: scale, shadow 증가)
- [ ] 다크모드 스타일 추가

---

## 4. HeroSection Component

### 목적
랜딩 페이지의 첫 번째 섹션으로, 핵심 메시지와 CTA 버튼 제공

### 위치
`src/app/_components/HeroSection.tsx`

### 구성 요소
- H1 제목: "링크만 공유하세요."
- H1 보조: "나머지는 SimplTag가 알아서 정리할게요."
- 서브 문구: "링크 하나로 완성되는 AI 요약 보관함."
- App Store 다운로드 버튼
- Play Store 다운로드 버튼 (안내 모달 트리거)
- 히어로 이미지 (`/hero-image.png`)

### Props
```typescript
interface HeroSectionProps {
  // Props 없음 (정적 섹션)
}
```

### 데이터 소스
- `src/config/links.ts`: 앱스토어 링크
- `src/config/site.ts`: 메타데이터

### 동작 방식
1. **App Store 버튼**: 외부 링크로 이동
2. **Play Store 버튼**: Dialog (모달) 열기
   - 모달 내용: "안드로이드 서비스는 곧 출시 예정이에요."
   - 닫기 버튼

### 스타일링
- **컨테이너**: `max-w-7xl mx-auto px-4`
- **패딩**: `py-20` (모바일), `py-32` (데스크톱)
- **제목 폰트**: `text-title-l font-bold` (모바일), `text-5xl` (데스크톱)
- **서브 텍스트**: `text-body-m text-neutral-600`
- **버튼 간격**: `gap-4`
- **이미지 크기**: 최대 `800px` 너비

### 레이아웃
```
모바일 (세로):
┌─────────────────┐
│   제목 + 서브     │
│   [버튼 2개]      │
│   [히어로 이미지]  │
└─────────────────┘

데스크톱 (가로):
┌──────────────────────────────┐
│ [텍스트 + 버튼]  │ [히어로 이미지] │
└──────────────────────────────┘
```

### 반응형
```
모바일:  flex-col (세로 배치)
데스크톱: flex-row (좌우 배치), 텍스트 50%, 이미지 50%
```

### 구현 체크리스트
- [ ] `src/app/_components/HeroSection.tsx` 파일 생성
- [ ] `src/config/links.ts`에서 다운로드 링크 import
- [ ] H1 제목 2줄 렌더링 (줄바꿈 고려)
- [ ] 서브 문구 렌더링
- [ ] shadcn/ui Button 컴포넌트 2개 추가
- [ ] App Store 버튼에 외부 링크 연결
- [ ] Play Store 버튼에 Dialog 연결
- [ ] Dialog 컴포넌트 구현 (안내 메시지)
- [ ] Next.js Image로 히어로 이미지 추가
- [ ] 반응형 레이아웃 구현 (모바일 세로, 데스크톱 가로)
- [ ] 버튼 아이콘 추가 (App Store, Play Store 아이콘)
- [ ] 애니메이션 추가 (선택사항: fade-in, slide-up)

---

## 5. PreviewSection Component

### 목적
SimplTag 앱의 핵심 기능을 스크린샷으로 미리보기 제공

### 위치
`src/app/_components/PreviewSection.tsx`

### 구성 요소
- 섹션 제목: "핵심 기능 미리보기"
- 가로 스크롤 스크린샷 갤러리
- ScreenshotCard 컴포넌트 4~5개

### Props
```typescript
interface PreviewSectionProps {
  // Props 없음 (정적 섹션)
}
```

### 데이터 소스
`src/config/features.ts`:
```typescript
export const PREVIEW_FEATURES = [
  { id: 'share-summary', title: '공유하기로 요약', image: '/screenshots/share-summary.png', alt: '...' },
  { id: 'chat-search', title: 'Chat 자연어 검색', image: '/screenshots/chat-search.png', alt: '...' },
  { id: 'recent-page', title: 'Recent 페이지', image: '/screenshots/recent-page.png', alt: '...' },
  { id: 'folder-page', title: '폴더 페이지', image: '/screenshots/folder-page.png', alt: '...' },
  { id: 'item-bottomsheet', title: 'Item 바텀시트', image: '/screenshots/item-bottomsheet.png', alt: '...' },
]
```

### 스타일링
- **컨테이너**: `max-w-7xl mx-auto px-4`
- **패딩**: `py-16`
- **제목**: `text-title-m font-bold text-center mb-12`
- **스크롤 컨테이너**:
  - `overflow-x-auto`
  - `snap-x snap-mandatory` (CSS scroll-snap)
  - `gap-6`
  - `pb-4` (스크롤바 여백)

### 스크롤 동작
- **모바일**: 1장씩 스와이프 (`snap-center`)
- **데스크톱**: 3~4장 표시, 나머지 스크롤

### 레이아웃
```
┌────────────────────────────────────────┐
│         핵심 기능 미리보기                 │
├────────────────────────────────────────┤
│  [카드1] [카드2] [카드3] [카드4] [카드5]  │
│  ← 가로 스크롤 →                        │
└────────────────────────────────────────┘
```

### 구현 체크리스트
- [ ] `src/app/_components/PreviewSection.tsx` 파일 생성
- [ ] `src/config/features.ts` 생성 및 데이터 정의
- [ ] 섹션 제목 렌더링
- [ ] 가로 스크롤 컨테이너 구현
- [ ] CSS scroll-snap 적용 (`snap-x`, `snap-mandatory`)
- [ ] `PREVIEW_FEATURES` 배열 map으로 ScreenshotCard 렌더링
- [ ] 각 카드에 `snap-center` 클래스 추가
- [ ] 반응형: 모바일 1장, 데스크톱 3~4장 표시
- [ ] 스크롤바 스타일링 (선택사항: 커스텀 스크롤바)
- [ ] 스크롤 인디케이터 추가 (선택사항: dots)

---

## 6. Config Files (설정 파일)

### 6.1 `src/config/site.ts`

**목적**: 사이트 메타데이터 및 기본 정보

```typescript
export const SITE_METADATA = {
  title: 'SimplTag — 링크 하나로 완성되는 AI 요약 보관함',
  description: '링크만 공유하세요. 나머지는 SimplTag가 알아서 정리할게요.',
  url: 'https://agent.simpltag.com',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
}

export const SITE_INFO = {
  name: 'SimplTag',
  copyright: `© ${new Date().getFullYear()} SimplTag`,
}
```

**구현 체크리스트**:
- [ ] `src/config/site.ts` 파일 생성
- [ ] `SITE_METADATA` 객체 정의
- [ ] `SITE_INFO` 객체 정의
- [ ] 타입 정의 추가 (`src/types/index.ts`)

---

### 6.2 `src/config/links.ts`

**목적**: 외부 링크 및 연락처 정보

```typescript
export const DOWNLOAD_LINKS = {
  appStore: 'https://apps.apple.com/app/simpltag/...',  // 실제 링크로 교체
  playStore: null, // 안드로이드 미출시
}

export const LEGAL_LINKS = {
  terms: 'https://agent.simpltag.com/terms',
  privacy: 'https://agent.simpltag.com/privacy',
}

export const CONTACT = {
  email: 'support@simpltag.com',
}
```

**구현 체크리스트**:
- [ ] `src/config/links.ts` 파일 생성
- [ ] `DOWNLOAD_LINKS` 객체 정의
- [ ] `LEGAL_LINKS` 객체 정의
- [ ] `CONTACT` 객체 정의
- [ ] 타입 정의 추가

---

### 6.3 `src/config/features.ts`

**목적**: 미리보기 섹션 스크린샷 데이터

```typescript
export const PREVIEW_FEATURES = [
  {
    id: 'share-summary',
    title: '공유하기로 요약',
    image: '/screenshots/share-summary.png',
    alt: 'SimplTag 공유하기 기능으로 링크를 요약하는 화면',
    description: '링크를 공유하면 자동으로 요약됩니다.', // 선택
  },
  {
    id: 'chat-search',
    title: 'Chat 자연어 검색',
    image: '/screenshots/chat-search.png',
    alt: 'SimplTag Chat 기능으로 자연어로 검색하는 화면',
  },
  {
    id: 'recent-page',
    title: 'Recent 페이지',
    image: '/screenshots/recent-page.png',
    alt: 'SimplTag Recent 페이지에서 최근 저장한 링크를 확인하는 화면',
  },
  {
    id: 'folder-page',
    title: '폴더 페이지',
    image: '/screenshots/folder-page.png',
    alt: 'SimplTag 폴더 기능으로 링크를 정리하는 화면',
  },
  {
    id: 'item-bottomsheet',
    title: 'Item 바텀시트',
    image: '/screenshots/item-bottomsheet.png',
    alt: 'SimplTag Item 바텀시트로 링크 상세 정보를 확인하는 화면',
  },
]
```

**구현 체크리스트**:
- [ ] `src/config/features.ts` 파일 생성
- [ ] `PREVIEW_FEATURES` 배열 정의
- [ ] 각 feature 객체에 id, title, image, alt 포함
- [ ] description 필드 추가 (선택사항)
- [ ] 타입 정의 추가 (`Feature` 인터페이스)

---

## 7. Types (타입 정의)

### 위치
`src/types/index.ts`

### 타입 정의
```typescript
// Site Metadata
export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  twitterCard: string;
}

export interface SiteInfo {
  name: string;
  copyright: string;
}

// Links
export interface DownloadLinks {
  appStore: string;
  playStore: string | null;
}

export interface LegalLinks {
  terms: string;
  privacy: string;
}

export interface Contact {
  email: string;
}

// Features
export interface Feature {
  id: string;
  title: string;
  image: string;
  alt: string;
  description?: string;
}
```

**구현 체크리스트**:
- [ ] `src/types/index.ts` 업데이트
- [ ] `SiteMetadata` 인터페이스 정의
- [ ] `SiteInfo` 인터페이스 정의
- [ ] `DownloadLinks` 인터페이스 정의
- [ ] `LegalLinks` 인터페이스 정의
- [ ] `Contact` 인터페이스 정의
- [ ] `Feature` 인터페이스 정의

---

## 8. Layout Integration

### `src/app/layout.tsx`

**목적**: 전역 레이아웃에 Header, Footer 통합

**구조**:
```tsx
<html>
  <body>
    <Header />
    {children}
    <Footer />
  </body>
</html>
```

**구현 체크리스트**:
- [ ] `layout.tsx`에서 Header 컴포넌트 import
- [ ] `layout.tsx`에서 Footer 컴포넌트 import
- [ ] Header를 children 위에 배치
- [ ] Footer를 children 아래 배치
- [ ] `SITE_METADATA`로 metadata 설정
- [ ] Pretendard 폰트 적용 확인

---

### `src/app/page.tsx`

**목적**: 홈 페이지에 HeroSection, PreviewSection 통합

**구조**:
```tsx
<main>
  <HeroSection />
  <PreviewSection />
</main>
```

**구현 체크리스트**:
- [ ] `page.tsx`에서 HeroSection import
- [ ] `page.tsx`에서 PreviewSection import
- [ ] HeroSection 렌더링
- [ ] PreviewSection 렌더링
- [ ] `<main>` 태그로 감싸기 (접근성)

---

## Implementation Order (구현 순서)

### Phase 1: Config & Types (설정 및 타입)
1. [ ] `src/types/index.ts` 타입 정의
2. [ ] `src/config/site.ts` 생성
3. [ ] `src/config/links.ts` 생성
4. [ ] `src/config/features.ts` 생성

### Phase 2: Common Components (공통 컴포넌트)
5. [ ] `src/components/Header.tsx` 구현
6. [ ] `src/components/Footer.tsx` 구현
7. [ ] `src/components/ScreenshotCard.tsx` 구현

### Phase 3: Section Components (섹션 컴포넌트)
8. [ ] `src/app/_components/HeroSection.tsx` 구현
9. [ ] `src/app/_components/PreviewSection.tsx` 구현

### Phase 4: Integration (통합)
10. [ ] `src/app/layout.tsx` 업데이트
11. [ ] `src/app/page.tsx` 업데이트
12. [ ] 메타데이터 설정 확인

### Phase 5: Testing & Refinement (테스트 및 개선)
13. [ ] 로컬 개발 서버 실행 및 확인
14. [ ] 반응형 테스트 (모바일, 태블릿, 데스크톱)
15. [ ] 다크모드 테스트
16. [ ] 접근성 테스트 (키보드 네비게이션, 스크린리더)
17. [ ] 성능 최적화 (이미지 최적화, Lighthouse 점수)
18. [ ] 프로덕션 빌드 및 배포

---

## Design Tokens Reference

### Typography
- `text-title-l`: 22px / 28px (Hero titles)
- `text-title-m`: 18px / 23px (Section titles)
- `text-title-s`: 16px / 24px (Subtitles)
- `text-body-m`: 16px / 24px (Body text)
- `text-button-l`: 16px / 24px, 600 (Buttons)

### Colors (shadcn/ui neutral scheme)
- Primary: `oklch(0.205 0 0)` (#1E293B 상당)
- Background: `oklch(1 0 0)` (White)
- Foreground: `oklch(0.145 0 0)` (거의 Black)
- Muted: `oklch(0.97 0 0)` (Light Gray)

### Shadows
- `shadow-card`: 앱 디자인 토큰
  ```css
  box-shadow:
    0px 4px 12px rgba(0, 0, 0, 0.06),
    0px 2px 4px rgba(0, 0, 0, 0.08);
  ```

### Spacing
- Container: `max-w-7xl` (1280px)
- Section padding: `py-16` (모바일), `py-20` (데스크톱)
- Gap: `gap-4` (16px), `gap-6` (24px)

---

## Accessibility Checklist

### 필수 항목
- [ ] 모든 이미지에 `alt` 속성 추가
- [ ] 의미 있는 HTML 구조 사용 (`header`, `main`, `footer`, `section`)
- [ ] 키보드 네비게이션 지원 (Tab, Enter)
- [ ] 포커스 스타일 명확히 표시
- [ ] 링크에 적절한 `aria-label` 추가 (필요 시)
- [ ] 색상 대비 WCAG AA 기준 충족
- [ ] 스크린리더 테스트

---

## Performance Checklist

### 최적화 항목
- [ ] Next.js Image 컴포넌트 사용 (자동 최적화)
- [ ] 히어로 이미지에 `priority` 속성 추가 (LCP 개선)
- [ ] 스크린샷 이미지 lazy loading
- [ ] Pretendard 폰트 최적화 로딩
- [ ] 불필요한 JavaScript 제거
- [ ] CSS 최소화
- [ ] Lighthouse 점수 90+ 목표

---

## Notes

### 향후 개선 사항
- 애니메이션 라이브러리 추가 (framer-motion 등)
- 스크린샷 갤러리 터치 제스처 개선
- 다국어 지원 (i18n)
- A/B 테스트를 위한 변형 컴포넌트
