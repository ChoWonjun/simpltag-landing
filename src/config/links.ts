import { DownloadLinks, LegalLinks, Contact } from "@/types";

export const DOWNLOAD_LINKS: DownloadLinks = {
  appStore: 'https://apps.apple.com/app/simpltag/id123456789', // 실제 링크로 교체 필요
  playStore: null, // 안드로이드 준비 중
};

export const LEGAL_LINKS: LegalLinks = {
  terms: '/terms',
  privacy: '/terms?tab=privacy-ko',
};

export const CONTACT: Contact = {
  email: 'support@simpltag.com',
};
