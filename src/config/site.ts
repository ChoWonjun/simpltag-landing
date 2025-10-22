import { SiteMetadata, SiteInfo } from "@/types";

export const SITE_METADATA: SiteMetadata = {
  title: 'SimplTag — 링크 하나로 완성되는 AI 요약 보관함',
  description: '링크만 공유하세요. 나머지는 SimplTag가 알아서 정리할게요.',
  url: 'https://agent.simpltag.com',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
};

export const SITE_INFO: SiteInfo = {
  name: 'SimplTag',
  copyright: `© ${new Date().getFullYear()} SimplTag`,
};
