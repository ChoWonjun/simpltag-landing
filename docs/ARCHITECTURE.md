# SimplTag Landing Page Architecture

## Project Overview
SimplTag 랜딩 페이지의 폴더 구조 및 아키텍처 설명 문서입니다.

---

## Folder Structure

```
simpltag-landing/
├── src/
│   ├── app/
│   │   ├── _components/              # Private folder (라우팅 제외)
│   │   │   ├── HeroSection.tsx       # 홈 페이지 히어로 섹션
│   │   │   └── PreviewSection.tsx    # 핵심 기능 미리보기 섹션
│   │   │
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Home page
│   │   ├── globals.css               # Global styles with Tailwind v4
│   │   └── favicon.ico
│   │
│   ├── components/                   # 재사용 가능한 컴포넌트
│   │   ├── Header.tsx                # 헤더 (layout에서 사용)
│   │   ├── Footer.tsx                # 푸터 (layout에서 사용)
│   │   ├── Button.tsx                # 재사용 가능한 버튼 컴포넌트
│   │   └── ScreenshotCard.tsx        # 스크린샷 카드 컴포넌트
│   │
│   ├── config/                       # 설정 및 정적 데이터
│   │   ├── site.ts                   # 메타데이터, 사이트 정보
│   │   ├── links.ts                  # 외부 링크 (앱스토어, 약관 등)
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
│   │
│   └── screenshots/                  # 앱 스크린샷
│       ├── share-summary.png
│       ├── chat-search.png
│       ├── recent-page.png
│       ├── folder-page.png
│       └── item-bottomsheet.png
│
├── docs/
│   ├── PRD.md                        # 제품 요구사항 명세
│   ├── ARCHITECTURE.md               # 아키텍처 문서 (this file)
│   └── DEPLOYMENT.md                 # 배포 가이드
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

---

## Architecture Principles

### 1. Colocation (근접 배치)
페이지 전용 컴포넌트는 해당 페이지와 가까이 배치하여 응집도를 높입니다.

```
✅ app/_components/        # 페이지 전용 섹션
✅ components/             # 재사용 가능한 컴포넌트
```

### 2. Private Folders
`_components/`는 Next.js Private Folder 패턴을 사용하여 라우팅에서 제외됩니다.

```
app/_components/          # "_" 접두사로 /components 라우트 생성 방지
```

### 3. Flat Structure
소규모 프로젝트에서는 불필요한 depth를 제거하여 파일 접근성을 높입니다.

```
❌ components/layout/Header.tsx
❌ components/ui/Button.tsx

✅ components/Header.tsx
✅ components/Button.tsx
```

### 4. Configuration Centralization
정적 데이터는 `config/` 디렉토리에서 중앙 관리합니다.

---

## Component Categories

### `app/_components/`
**목적**: 홈 페이지에만 사용되는 섹션 컴포넌트

**포함 파일**:
- `HeroSection.tsx`: 히어로 섹션 (제목, 설명, 다운로드 버튼)
- `PreviewSection.tsx`: 핵심 기능 미리보기 섹션

**특징**: `page.tsx`에서만 import

---

### `components/`
**목적**: 2곳 이상에서 재사용되는 컴포넌트

**포함 파일**:
- `Header.tsx`: 헤더 컴포넌트 (로고)
- `Footer.tsx`: 푸터 컴포넌트 (저작권, 문의, 약관 링크)
- `Button.tsx`: 재사용 가능한 버튼
- `ScreenshotCard.tsx`: 스크린샷 카드

**특징**: layout과 섹션 컴포넌트에서 import

---

### `config/`
**목적**: 정적 데이터 중앙 관리

**포함 파일**:
- `site.ts`: 메타데이터, 사이트 제목, 설명
- `links.ts`: 앱스토어 링크, 이용약관 링크, 연락처
- `features.ts`: 미리보기 섹션 스크린샷 데이터

**특징**: 코드 변경 없이 데이터만 수정 가능

---

## Path Aliases
`tsconfig.json`에서 `@/*` → `./src/*` 매핑 설정

```typescript
import { Header } from '@/components/Header'
import { DOWNLOAD_LINKS } from '@/config/links'
```

---

## Design Decisions

### Why `_components` instead of `components/sections`?
- Next.js App Router의 colocation 원칙 준수
- 페이지 전용 컴포넌트는 가까이 배치하여 응집도 향상
- Private folder 패턴으로 라우팅 충돌 방지

### Why flat `components/` structure?
- 파일 수가 4개 수준으로 적음
- 불필요한 depth는 오버엔지니어링
- 10개 이상일 때 폴더 분류 고려 예정

### Why `config/` instead of `constants/`?
- Next.js, Vercel 등 업계 표준 네이밍
- 설정과 정적 데이터의 명확한 구분

---

## Scalability

### 페이지 추가 시
```
app/
  ├── _components/         # 홈 페이지 전용
  ├── about/
  │   ├── _components/     # About 페이지 전용
  │   └── page.tsx
  └── pricing/
      ├── _components/     # Pricing 페이지 전용
      └── page.tsx
```

### 컴포넌트 증가 시
```
components/
  ├── layout/              # 10개 이상 시 분류 고려
  │   ├── Header.tsx
  │   └── Footer.tsx
  └── ui/
      ├── Button.tsx
      └── Card.tsx
```

---

## Best Practices

### 1. Colocation
페이지 전용 컴포넌트는 해당 페이지 디렉토리 내 `_components/`에 배치

### 2. Reusability
2곳 이상에서 사용되는 컴포넌트만 `src/components/`로 이동

### 3. Data Management
하드코딩된 데이터는 `config/`에서 중앙 관리

### 4. Type Safety
공유 타입은 `types/index.ts`에 정의

### 5. Utilities
재사용 가능한 함수는 `lib/utils.ts`에 정의

---

## References
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Next.js Project Structure](https://nextjs.org/docs/getting-started/project-structure)
- [Private Folders](https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders)
