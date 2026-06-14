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

// Landing redesign content models
export interface HowStep {
  id: string;
  step: string; // "01"
  label: string; // result-verb header e.g. "안 봐도 알아요"
  body: string;
  image: string;
  alt: string;
}

export interface FeatureBlock {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  accent?: "blue" | "coral";
}

export interface FaqItem {
  id: string;
  q: string;
  a: string;
}

export interface SourceKind {
  id: string;
  label: string;
}
