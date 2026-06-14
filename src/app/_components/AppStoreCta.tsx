"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DOWNLOAD_LINKS } from "@/config/links";

interface AppStoreCtaProps {
  /** alignment of the group */
  align?: "center" | "start";
  className?: string;
}

/**
 * The single dominant CTA, repeated across the page (hero / how-it-works /
 * final). Official Apple Korean App Store badge → real listing. Google Play
 * badge opens an "준비 중" dialog (Android not shipped).
 */
export function AppStoreCta({
  align = "center",
  className = "",
}: AppStoreCtaProps) {
  const [androidOpen, setAndroidOpen] = useState(false);
  const alignItems = align === "center" ? "items-center" : "items-start";
  const justify = align === "center" ? "justify-center" : "justify-start";

  return (
    <div className={`flex flex-col gap-3 ${alignItems} ${className}`}>
      <div className={`flex flex-row items-center gap-3 ${justify}`}>
        <a
          href={DOWNLOAD_LINKS.appStore}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-90"
          aria-label="App Store에서 SimplTag 다운로드"
        >
          <Image
            src="/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.svg"
            alt="App Store에서 다운로드"
            width={132}
            height={44}
            className="h-[52px] w-auto"
            priority
          />
        </a>
        <button
          type="button"
          onClick={() => setAndroidOpen(true)}
          className="transition-transform duration-200 hover:-translate-y-0.5 hover:opacity-90"
          aria-label="Google Play 출시 안내"
        >
          <Image
            src="/GetItOnGooglePlay_Badge_Web_color_Korean.svg"
            alt="Google Play에서 다운로드"
            width={148}
            height={44}
            className="h-[52px] w-auto"
          />
        </button>
      </div>

      <Dialog open={androidOpen} onOpenChange={setAndroidOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>안드로이드 버전 준비 중</DialogTitle>
            <DialogDescription>
              안드로이드 서비스는 곧 출시 예정이에요. 지금은 iOS에서 먼저
              만나보실 수 있어요.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
