import { LEGAL_LINKS, CONTACT } from "@/config/links";
import { SITE_INFO } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-muted py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-center gap-2 md:gap-1 text-sm text-muted-foreground">
          <span>{SITE_INFO.copyright}</span>
          <span className="hidden md:inline">·</span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="hover:text-foreground hover:underline transition-colors"
          >
            문의하기
          </a>
          <span className="hidden md:inline">·</span>
          <a
            href={LEGAL_LINKS.terms}
            className="hover:text-foreground hover:underline transition-colors"
          >
            이용약관
          </a>
          <span className="hidden md:inline">·</span>
          <a
            href={LEGAL_LINKS.privacy}
            className="hover:text-foreground hover:underline transition-colors"
          >
            개인정보처리방침
          </a>
        </div>
      </div>
    </footer>
  );
}
