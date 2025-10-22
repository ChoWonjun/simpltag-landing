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
│   │   ├── _components/              # Private folder (페이지 전용 섹션)
│   │   │   ├── HeroSection.tsx       # 히어로 섹션
│   │   │   └── PreviewSection.tsx    # 핵심 기능 미리보기
│   │   │
│   │   ├── layout.tsx                # Root layout with Geist fonts
│   │   ├── page.tsx                  # Home page component
│   │   ├── globals.css               # Global styles with Tailwind v4
│   │   └── favicon.ico
│   │
│   ├── components/                   # 재사용 가능한 컴포넌트
│   │   ├── Header.tsx                # 헤더 컴포넌트 (로고)
│   │   ├── Footer.tsx                # 푸터 컴포넌트
│   │   ├── Button.tsx                # 재사용 버튼
│   │   └── ScreenshotCard.tsx        # 스크린샷 카드
│   │
│   ├── config/                       # 설정 및 정적 데이터
│   │   ├── site.ts                   # 메타데이터, 사이트 정보
│   │   ├── links.ts                  # 외부 링크 (앱스토어, 약관)
│   │   └── features.ts               # 미리보기 섹션 데이터
│   │
│   ├── types/
│   │   └── index.ts                  # TypeScript 타입 정의
│   │
│   └── lib/
│       └── utils.ts                  # 유틸리티 함수
│
├── public/
│   ├── hero-image.png                # 히어로 이미지
│   ├── og-image.png                  # OG 이미지 (1200×630)
│   ├── favicon.ico
│   └── screenshots/                  # 앱 스크린샷
│       ├── share-summary.png
│       ├── chat-search.png
│       ├── recent-page.png
│       ├── folder-page.png
│       └── item-bottomsheet.png
│
└── docs/
    ├── PRD.md                        # 제품 요구사항 명세
    ├── ARCHITECTURE.md               # 아키텍처 문서
    └── DEPLOYMENT.md                 # 배포 가이드
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

**Fonts**: Geist Sans and Geist Mono loaded via `next/font/google` with CSS variables:
- `--font-geist-sans`
- `--font-geist-mono`

**Tailwind v4**: Uses new import syntax in globals.css:
```css
@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

**Dark Mode**: Automatic dark mode support via `prefers-color-scheme` with CSS custom properties.

### ESLint Configuration
- Uses Next.js core-web-vitals and TypeScript presets
- Ignores: node_modules, .next, out, build, next-env.d.ts
