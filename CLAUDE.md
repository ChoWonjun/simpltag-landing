# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

simpltag-landing is a landing page built with Next.js 15.5.6 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### Stack
- **Next.js 15.5.6**: App Router architecture
- **React 19.1.0**: Latest React with concurrent features
- **TypeScript 5**: Strict mode enabled
- **Tailwind CSS 4**: Latest v4 with `@import "tailwindcss"` syntax
- **ESLint 9**: Next.js recommended config with TypeScript support

### Project Structure
```
simpltag-landing/
├── src/
│   ├── app/
│   │   ├── _components/              # Private folder (페이지 전용 섹션) - 구현 예정
│   │   │   ├── HeroSection.tsx       # 히어로 섹션 (제목, CTA 버튼, 히어로 이미지)
│   │   │   └── PreviewSection.tsx    # 핵심 기능 미리보기 (스크린샷 갤러리)
│   │   │
│   │   ├── layout.tsx                # Root layout (Header, Footer 포함)
│   │   ├── page.tsx                  # Home page (HeroSection, PreviewSection 렌더링)
│   │   ├── globals.css               # Global styles (Pretendard, 디자인 토큰)
│   │   └── favicon.ico
│   │
│   ├── components/                   # 재사용 가능한 컴포넌트 - 구현 예정
│   │   ├── ui/                       # shadcn/ui 컴포넌트 (설치 완료)
│   │   │   ├── button.tsx            # Button 컴포넌트
│   │   │   ├── card.tsx              # Card 컴포넌트
│   │   │   └── dialog.tsx            # Dialog (모달) 컴포넌트
│   │   │
│   │   ├── Header.tsx                # 헤더 (로고, 스크롤 감지 border)
│   │   ├── Footer.tsx                # 푸터 (저작권, 링크)
│   │   └── ScreenshotCard.tsx        # 스크린샷 카드 (이미지, 제목, 설명)
│   │
│   ├── config/                       # 설정 및 정적 데이터 - 작성 예정
│   │   ├── site.ts                   # 메타데이터 (title, description, OG)
│   │   ├── links.ts                  # 외부 링크 (앱스토어, 약관, 이메일)
│   │   └── features.ts               # 미리보기 스크린샷 데이터 배열
│   │
│   ├── types/
│   │   └── index.ts                  # TypeScript 타입 정의 (Feature, Links 등)
│   │
│   └── lib/
│       └── utils.ts                  # 유틸리티 함수 (cn 등, shadcn/ui 설치 시 생성)
│
├── public/
│   ├── logo.svg                      # SimplTag 로고 (SF Pro Rounded, 98×21px) ✅
│   ├── hero-image.png                # 히어로 이미지 (2688×1024px) ✅
│   ├── og-image.png                  # OG 이미지 (1200×630) - 준비 예정
│   ├── favicon.ico
│   └── screenshots/                  # 앱 스크린샷 - 준비 예정
│       ├── share-summary.png
│       ├── chat-search.png
│       ├── recent-page.png
│       ├── folder-page.png
│       └── item-bottomsheet.png
│
├── docs/                             # 프로젝트 문서
│   ├── PRD.md                        # 제품 요구사항 명세 ✅
│   ├── ARCHITECTURE.md               # 아키텍처 및 폴더 구조 설명 ✅
│   ├── COMPONENTS.md                 # 컴포넌트 상세 기획 및 구현 가이드 ✅
│   └── DEPLOYMENT.md                 # Vercel 배포 가이드 ✅
│
└── components.json                   # shadcn/ui 설정 파일 ✅
```

### Architecture Principles

**1. Colocation (근접 배치)**
- 페이지 전용 컴포넌트는 `app/_components/`에 배치
- 재사용 컴포넌트는 `src/components/`에 배치

**2. Private Folders**
- `_components/`는 Next.js Private Folder 패턴 사용
- 라우팅에서 제외되어 `/components` URL 생성 방지

**3. Flat Structure**
- 소규모 프로젝트에 적합한 flat 구조
- 불필요한 depth 제거로 파일 접근성 향상

**4. Configuration Centralization**
- 정적 데이터는 `config/` 디렉토리에서 중앙 관리
- 코드 변경 없이 데이터만 수정 가능

### Key Configuration

**Path Aliases**: `@/*` maps to `./src/*` (configured in tsconfig.json)

**Fonts**:
- **Logo**: `/public/logo.svg` (SF Pro Rounded vectorized)
- **Service Font**: Pretendard (loaded via CDN)
- **Font Stack**: `"Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif`

**Typography Scale** (from app design tokens):
- `text-title-l`: 22px/28px (Hero titles)
- `text-title-m`: 18px/23px (Section titles)
- `text-title-s`: 16px/24px (Subtitles)
- `text-body-m`: 16px/24px (Body text)
- `text-button-l`: 16px/24px, font-weight: 600 (Buttons)

**Design Tokens** (앱과 동일한 디자인 시스템):
- **Shadow**: `shadow-card`
  - `0px 4px 12px rgba(0,0,0,0.06), 0px 2px 4px rgba(0,0,0,0.08)`
  - 사용: 카드, 버튼 hover, 모달 등

**Font Weights** (Pretendard):
- Light: 300
- Regular: 400
- Medium: 500
- SemiBold: 600
- Bold: 700

**Letter Spacing**:
- 기본: 0 (대부분)
- Logo (L): -1px (40px 폰트)
- Logo (M): -0.25px (24px 폰트)

**Tailwind v4**: Uses new import syntax in globals.css:
```css
@import "tailwindcss";
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

@theme inline {
  --font-sans: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}
```

**shadcn/ui**: Installed with neutral color scheme (new-york style)
- Components: Button, Dialog, Card
- Located in `src/components/ui/`

**Dark Mode**: Automatic dark mode support via `prefers-color-scheme` with CSS custom properties.

### ESLint Configuration
- Uses Next.js core-web-vitals and TypeScript presets
- Ignores: node_modules, .next, out, build, next-env.d.ts

---

## Current Implementation Status

### ✅ Completed
1. **Project Setup**
   - Next.js 15.5.6 with App Router
   - TypeScript 5 strict mode
   - Tailwind CSS v4
   - ESLint 9

2. **Design System**
   - Pretendard font via CDN
   - App design tokens (typography, shadows)
   - Custom utility classes (text-title-l, shadow-card 등)

3. **UI Library**
   - shadcn/ui installed (neutral theme, new-york style)
   - Button, Dialog, Card components ready
   - `cn()` utility function (`lib/utils.ts`)

4. **Assets**
   - Logo: `/public/logo.svg` (SF Pro Rounded, 98×21px)
   - Hero image: `/public/hero-image.png` (2688×1024px)

5. **Documentation**
   - PRD: 제품 요구사항 명세
   - ARCHITECTURE: 폴더 구조 및 설계 원칙
   - COMPONENTS: 컴포넌트 상세 기획 및 구현 가이드
   - DEPLOYMENT: Vercel 배포 가이드

### 🚧 In Progress / To Do
1. **Config Files** (Phase 1)
   - [ ] `src/config/site.ts` - 메타데이터
   - [ ] `src/config/links.ts` - 외부 링크
   - [ ] `src/config/features.ts` - 스크린샷 데이터
   - [ ] `src/types/index.ts` - 타입 정의 업데이트

2. **Common Components** (Phase 2)
   - [ ] `src/components/Header.tsx` - 로고, 스크롤 감지
   - [ ] `src/components/Footer.tsx` - 저작권, 링크
   - [ ] `src/components/ScreenshotCard.tsx` - 재사용 카드

3. **Section Components** (Phase 3)
   - [ ] `src/app/_components/HeroSection.tsx` - 히어로 + CTA
   - [ ] `src/app/_components/PreviewSection.tsx` - 스크린샷 갤러리

4. **Integration** (Phase 4)
   - [ ] `src/app/layout.tsx` - Header, Footer 추가
   - [ ] `src/app/page.tsx` - HeroSection, PreviewSection 추가
   - [ ] Metadata 설정

5. **Assets** (준비 필요)
   - [ ] `/public/og-image.png` (1200×630)
   - [ ] `/public/screenshots/` 스크린샷 5장

---

## Implementation Guide

### 컴포넌트 구현 순서
자세한 구현 가이드는 `/docs/COMPONENTS.md` 참조

**Phase 1: Config & Types**
1. 타입 정의 (`src/types/index.ts`)
2. Config 파일 작성 (`site.ts`, `links.ts`, `features.ts`)

**Phase 2: Common Components**
3. Header 구현 (로고 SVG, 스크롤 이벤트)
4. Footer 구현 (링크, 저작권)
5. ScreenshotCard 구현 (shadcn Card 활용)

**Phase 3: Section Components**
6. HeroSection 구현 (shadcn Button, Dialog)
7. PreviewSection 구현 (scroll-snap, ScreenshotCard)

**Phase 4: Integration**
8. layout.tsx에 Header, Footer 추가
9. page.tsx에 섹션 추가
10. Metadata 설정

**Phase 5: Testing & Deployment**
11. 로컬 테스트 (반응형, 다크모드, 접근성)
12. 프로덕션 빌드
13. Vercel 배포

### 주요 참조 파일
- **PRD**: `/docs/PRD.md` - 전체 요구사항
- **컴포넌트 기획**: `/docs/COMPONENTS.md` - 상세 구현 가이드
- **아키텍처**: `/docs/ARCHITECTURE.md` - 폴더 구조 설명
- **배포**: `/docs/DEPLOYMENT.md` - Vercel 배포 절차

---

## Quick Reference

### 자주 사용하는 경로
```typescript
// Config
import { SITE_METADATA } from '@/config/site'
import { DOWNLOAD_LINKS, LEGAL_LINKS } from '@/config/links'
import { PREVIEW_FEATURES } from '@/config/features'

// Components
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog } from '@/components/ui/dialog'

// Utils
import { cn } from '@/lib/utils'
```

### 디자인 토큰 사용법

#### Typography
```tsx
// 제목
<h1 className="text-title-l font-bold">링크만 공유하세요.</h1>
<h2 className="text-title-m font-semibold">핵심 기능 미리보기</h2>
<h3 className="text-title-s font-medium">공유하기로 요약</h3>

// 본문
<p className="text-body-m font-light text-neutral-600">
  링크 하나로 완성되는 AI 요약 보관함
</p>

// 버튼
<button className="text-button-l">Download</button>
```

#### Font Weights
```tsx
className="font-light"     // 300 - 본문, 설명
className="font-normal"    // 400 - 기본 텍스트
className="font-medium"    // 500 - 소제목
className="font-semibold"  // 600 - 버튼, 강조
className="font-bold"      // 700 - 제목
```

#### Shadows
```tsx
// 카드
<div className="shadow-card rounded-lg p-4">...</div>

// 버튼 호버 (shadcn/ui Button에 자동 적용)
<Button className="hover:shadow-card">...</Button>
```

#### Colors (shadcn/ui neutral scheme)
```tsx
// 배경
className="bg-background"           // 흰색 (라이트) / 검정 (다크)
className="bg-card"                 // 카드 배경
className="bg-muted"                // 회색 배경

// 텍스트
className="text-foreground"         // 기본 텍스트 색상
className="text-muted-foreground"   // 보조 텍스트 (회색)
className="text-primary"            // 강조 텍스트

// 테두리
className="border-border"           // 기본 border 색상
```

#### Spacing
```tsx
// 컨테이너
<div className="max-w-7xl mx-auto px-4">...</div>

// 섹션 패딩
className="py-16"         // 모바일 섹션
className="py-20"         // 데스크톱 섹션
className="py-32"         // 히어로 섹션 (데스크톱)

// 간격
className="gap-4"         // 16px - 버튼, 카드 간격
className="gap-6"         // 24px - 섹션 요소 간격
className="gap-8"         // 32px - 큰 간격
```

### 반응형 클래스 예시
```tsx
// 텍스트 크기
<h1 className="text-title-l md:text-5xl">...</h1>

// 레이아웃
<div className="flex flex-col md:flex-row">...</div>

// 패딩
<section className="py-16 md:py-20 lg:py-32">...</section>

// 정렬
<div className="text-center md:text-left">...</div>
```

### 반응형 브레이크포인트
- 모바일: `< 768px` (기본, prefix 없음)
- 태블릿: `768px - 1024px` (`md:`)
- 데스크톱: `> 1024px` (`lg:`)
