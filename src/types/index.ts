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
