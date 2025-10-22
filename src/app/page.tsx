import { Header } from "@/components/Header";
import { ScreenshotCard } from "@/components/ScreenshotCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Home() {
  const screenshots = [
    {
      image: "/screenshots/chat-search.png",
      alt: "SimplTag Chat 자연어 검색 화면",
      title: "Chat 자연어 검색",
      description: "자연어로 검색하면 AI가 관련 링크를 찾아줍니다."
    },
    {
      image: "/screenshots/folder-page.png",
      alt: "SimplTag 폴더 페이지",
      title: "폴더 페이지",
      description: "링크를 폴더별로 정리하고 관리할 수 있습니다."
    },
    {
      image: "/screenshots/recent-page.png",
      alt: "SimplTag Recent 페이지",
      title: "Recent 페이지",
      description: "최근에 저장한 링크들을 한눈에 확인할 수 있습니다."
    },
    {
      image: "/screenshots/chat-search.png",
      alt: "SimplTag Chat 자연어 검색 화면",
      title: "스마트 검색",
      description: "대화하듯이 검색하면 원하는 링크를 빠르게 찾을 수 있습니다."
    },
    {
      image: "/screenshots/folder-page.png",
      alt: "SimplTag 폴더 관리",
      title: "체계적인 관리",
      description: "폴더를 만들어 링크를 주제별로 분류하고 관리하세요."
    },
    {
      image: "/screenshots/recent-page.png",
      alt: "SimplTag 타임라인",
      title: "타임라인 뷰",
      description: "저장한 순서대로 정리된 링크들을 타임라인으로 확인하세요."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-title-l font-bold mb-4">
            ScreenshotCard 컴포넌트 데모
          </h1>
          <p className="text-body-m text-muted-foreground">
            좌우로 드래그하여 스크린샷을 확인하세요
          </p>
        </div>

        {/* 좌측 정렬 가로 스크롤 (Embla Carousel) - 부드러운 드래그 */}
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
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index} className="pl-6 basis-auto">
                <div className="w-[320px]">
                  <ScreenshotCard {...screenshot} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* 사용 안내 */}
        <div className="mt-12 space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h3 className="text-title-s font-semibold mb-2">💡 사용 방법</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 마우스로 드래그하거나 터치로 스와이프하여 스크롤</li>
              <li>• 각 카드는 좌측에 스냅되어 정렬됩니다 (Embla Carousel)</li>
              <li>• 부드러운 모멘텀 스크롤 지원</li>
              <li>• 시스템 다크모드 설정을 변경하여 다크모드 확인 가능</li>
            </ul>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <h3 className="text-title-s font-semibold mb-2">📋 컴포넌트 정보</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 위치: <code className="bg-background px-1 rounded">src/components/ScreenshotCard.tsx</code></li>
              <li>• shadcn/ui Carousel (Embla Carousel 기반)</li>
              <li>• shadcn/ui Card 컴포넌트 활용</li>
              <li>• Next.js Image로 이미지 최적화</li>
              <li>• shadow-card 디자인 토큰 적용</li>
              <li>• 9:16 비율 유지 (모바일 스크린샷)</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
