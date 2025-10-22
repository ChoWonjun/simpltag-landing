import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/app/_components/HeroSection";
import { PreviewSection } from "@/app/_components/PreviewSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PreviewSection />
      </main>
      <Footer />
    </div>
  );
}
