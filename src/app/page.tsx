import { Footer } from "@/components/Footer";
import { LandingHeader } from "@/app/_components/LandingHeader";
import { Hero } from "@/app/_components/Hero";
import { ProblemSection } from "@/app/_components/ProblemSection";
import { HowItWorks } from "@/app/_components/HowItWorks";
import { FeaturesSection } from "@/app/_components/FeaturesSection";
import { FinalCta } from "@/app/_components/FinalCta";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-canvas">
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
