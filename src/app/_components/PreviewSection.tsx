import { ScreenshotCard } from "@/components/ScreenshotCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PREVIEW_FEATURES } from "@/config/features";

export function PreviewSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          핵심 기능 미리보기
        </h2>

        {/* Embla Carousel - 부드러운 드래그 스크롤 */}
        <Carousel
          opts={{
            align: "start",
            loop: false,
            dragFree: true,
            containScroll: "trimSnaps",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {PREVIEW_FEATURES.map((feature) => (
              <CarouselItem key={feature.id} className="pl-6 basis-auto">
                <div className="w-[320px]">
                  <ScreenshotCard {...feature} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
