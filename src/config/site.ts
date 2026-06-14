import { SiteMetadata, SiteInfo } from "@/types";

export const SITE_METADATA: SiteMetadata = {
  title: 'SimplTag — 보기 전에 끝내는 AI 요약',
  description:
    '끝까지 보고 후회한 적 있으시죠? 링크만 공유하면 SimplTag가 먼저 읽고 핵심만 추려드려요. 30초면 안 봐도 될 영상인지 알 수 있어요.',
  url: 'https://agent.simpltag.com',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
};

export const SITE_INFO: SiteInfo = {
  name: 'SimplTag',
  copyright: `© ${new Date().getFullYear()} SimplTag`,
};
