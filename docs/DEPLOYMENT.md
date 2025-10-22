# SimplTag Landing Page Deployment Guide

## Deployment Overview
SimplTag 랜딩 페이지는 Vercel을 통해 `agent.simpltag.com` 도메인으로 배포됩니다.

---

## Prerequisites

### 1. Vercel Account
- Vercel 계정 생성 및 로그인
- GitHub 저장소 연결

### 2. Domain Configuration
- `agent.simpltag.com` 도메인 보유
- DNS 설정 권한

---

## Deployment Steps

### 1. GitHub Repository
```bash
# 저장소 초기화 (이미 완료된 경우 생략)
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Vercel Project Setup
1. [Vercel Dashboard](https://vercel.com/dashboard) 접속
2. "Add New Project" 클릭
3. GitHub 저장소 선택 (`simpltag-landing`)
4. Framework Preset: **Next.js** 자동 감지
5. Build Settings (기본값 사용):
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### 3. Environment Variables
현재 프로젝트는 환경 변수가 필요하지 않습니다.
향후 필요 시 Vercel Dashboard > Settings > Environment Variables에서 추가합니다.

### 4. Custom Domain
1. Vercel Dashboard > Project > Settings > Domains
2. `agent.simpltag.com` 추가
3. DNS 레코드 설정:
   ```
   Type: CNAME
   Name: agent
   Value: cname.vercel-dns.com
   ```
4. DNS 전파 대기 (최대 48시간, 보통 수 분 내 완료)

---

## Build Configuration

### `next.config.ts`
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Optional: Docker 배포 시 사용
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
```

### `package.json` Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## Deployment Workflow

### Automatic Deployment (권장)
GitHub에 push하면 자동으로 Vercel이 빌드 및 배포합니다.

```bash
# 변경사항 커밋
git add .
git commit -m "Update landing page"
git push origin main
```

Vercel이 자동으로:
1. 변경사항 감지
2. 빌드 실행
3. 배포 완료
4. 배포 URL 생성

### Manual Deployment
```bash
# Vercel CLI 설치 (최초 1회)
npm install -g vercel

# 배포
vercel --prod
```

---

## Preview Deployments

### Branch Preview
- `main` 외 브랜치에 push 시 자동 프리뷰 생성
- PR에 배포 URL 자동 코멘트

```bash
# 새 브랜치 생성
git checkout -b feature/new-section

# 변경사항 push
git push origin feature/new-section
```

### Preview URL Format
```
https://simpltag-landing-<hash>.vercel.app
```

---

## Performance Optimization

### 1. Image Optimization
Next.js Image 컴포넌트 사용:
```typescript
import Image from 'next/image'

<Image
  src="/hero-image.png"
  alt="SimplTag Hero"
  width={800}
  height={600}
  priority // LCP 최적화
/>
```

### 2. Metadata Optimization
`app/layout.tsx`에서 메타데이터 설정:
```typescript
export const metadata = {
  title: 'SimplTag — 링크 하나로 완성되는 AI 요약 보관함',
  description: '링크만 공유하세요. 나머지는 SimplTag가 알아서 정리할게요.',
  openGraph: {
    title: 'SimplTag',
    description: '링크만 공유하세요. 나머지는 SimplTag가 알아서 정리할게요.',
    images: ['/og-image.png'],
  },
}
```

### 3. Static Generation
모든 페이지는 빌드 시 정적 생성됩니다 (SSG).

---

## Monitoring & Analytics

### Vercel Analytics (선택)
```bash
npm install @vercel/analytics
```

`app/layout.tsx`에 추가:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics (선택)
환경 변수에 GA ID 추가 후 통합

---

## Troubleshooting

### Build Errors
```bash
# 로컬에서 빌드 테스트
npm run build

# 타입 체크
npx tsc --noEmit

# Lint 체크
npm run lint
```

### DNS Issues
- DNS 전파 확인: [DNS Checker](https://dnschecker.org/)
- Vercel DNS 설정 확인: Dashboard > Domains > DNS Records

### Performance Issues
- [Vercel Speed Insights](https://vercel.com/docs/concepts/speed-insights) 활성화
- Lighthouse 점수 확인
- Core Web Vitals 모니터링

---

## Rollback

### Vercel Dashboard에서 롤백
1. Vercel Dashboard > Project > Deployments
2. 이전 배포 선택
3. "Promote to Production" 클릭

### Git을 통한 롤백
```bash
# 이전 커밋으로 되돌리기
git revert <commit-hash>
git push origin main
```

---

## Security

### Headers Configuration
`next.config.ts`에서 보안 헤더 설정:
```typescript
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}
```

---

## References
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains)
