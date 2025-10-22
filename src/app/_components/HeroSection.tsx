"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DOWNLOAD_LINKS } from "@/config/links";
import { useState } from "react";

export function HeroSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="md:py-12 bg-[#F6EEDA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center md:gap-16">
          {/* 텍스트 + 버튼 영역 */}
          <div className="flex-1 text-center md:text-left pb-12 md:pb-0 md:flex md:flex-col md:justify-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              링크만 공유하세요.
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold mb-6">
              나머지는 SimplTag가 알아서 정리할게요.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              링크 하나로 완성되는 AI 요약 보관함.
            </p>

            {/* 다운로드 버튼 */}
            <div className="flex flex-row gap-4 justify-center md:justify-start items-center">
              <a
                href={DOWNLOAD_LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.svg"
                  alt="App Store에서 다운로드"
                  width={120}
                  height={40}
                  className="h-12 w-auto"
                />
              </a>
              <button
                onClick={() => setIsDialogOpen(true)}
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/GetItOnGooglePlay_Badge_Web_color_Korean.svg"
                  alt="Google Play에서 다운로드"
                  width={135}
                  height={40}
                  className="h-12 w-auto"
                />
              </button>
            </div>
          </div>

          {/* 히어로 이미지 */}
          <div className="flex-1 w-full max-w-[400px]">
            <Image
              src="/hero-image.png"
              alt="SimplTag - 링크 하나로 완성되는 AI 요약 보관함"
              width={1024}
              height={1024}
              priority
              className="w-full h-auto md:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Play Store 안내 모달 */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>안드로이드 버전 준비 중</DialogTitle>
            <DialogDescription>
              안드로이드 서비스는 곧 출시 예정이에요.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
