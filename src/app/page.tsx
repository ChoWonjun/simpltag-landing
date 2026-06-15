import { Footer } from "@/components/Footer";
import { LandingHeader } from "@/app/_components/LandingHeader";
import { Hero } from "@/app/_components/Hero";
import { ProblemSection } from "@/app/_components/ProblemSection";
import { HowItWorks } from "@/app/_components/HowItWorks";
import { FeaturesSection } from "@/app/_components/FeaturesSection";
import { FinalCta } from "@/app/_components/FinalCta";
import { SITE_METADATA } from "@/config/site";
import { DOWNLOAD_LINKS } from "@/config/links";

/**
 * Structured data (JSON-LD) — helps search engines and AI answer engines
 * (ChatGPT search, Perplexity, Google AI Overviews) understand what SimplTag
 * is: a free iOS productivity app. No fabricated ratings.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_METADATA.url}/#organization`,
      name: "SimplTag",
      url: SITE_METADATA.url,
      logo: `${SITE_METADATA.url}/logo.svg`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_METADATA.url}/#website`,
      url: SITE_METADATA.url,
      name: "SimplTag",
      description: SITE_METADATA.description,
      publisher: { "@id": `${SITE_METADATA.url}/#organization` },
      inLanguage: "ko",
    },
    {
      "@type": "MobileApplication",
      "@id": `${SITE_METADATA.url}/#app`,
      name: "SimplTag",
      operatingSystem: "iOS",
      applicationCategory: "ProductivityApplication",
      description: SITE_METADATA.description,
      url: SITE_METADATA.url,
      downloadUrl: DOWNLOAD_LINKS.appStore,
      offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
      publisher: { "@id": `${SITE_METADATA.url}/#organization` },
      inLanguage: "ko",
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-canvas">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHeader />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <FeaturesSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
