import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CONTACT, LEGAL_LINKS } from "@/config/links";

export const metadata: Metadata = {
  title: "계정 및 데이터 삭제 | SimplTag",
  description:
    "SimplTag 계정과 데이터를 삭제하는 방법을 안내합니다. / How to delete your SimplTag account and data.",
};

const mailtoHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
  "계정 삭제 요청 (Account deletion request)"
)}`;

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <article className="prose prose-neutral max-w-none">
            {/* ───────────────── 한국어 ───────────────── */}
            <h1>계정 및 데이터 삭제</h1>
            <p>
              <strong>SimplTag</strong> (개발자: SimplLabs) 계정과 관련 데이터를
              삭제하는 방법을 안내합니다.
            </p>

            <h2>앱에서 삭제하기</h2>
            <ol>
              <li>홈 화면 좌측 상단의 프로필 아이콘을 탭합니다.</li>
              <li>
                <strong>설정 &gt; 계정</strong>으로 이동합니다.
              </li>
              <li>
                <strong>계정 삭제</strong>를 탭하고 안내에 따라 확인합니다.
              </li>
            </ol>

            <h2>앱을 삭제했거나 접근이 어려운 경우</h2>
            <p>
              <a href={mailtoHref}>{CONTACT.email}</a> 으로 가입하신 이메일 주소와
              함께 삭제를 요청하시면 본인 확인 후 처리해 드립니다.
            </p>

            <h2>삭제되는 데이터 · 보관 기간</h2>
            <p>
              계정을 삭제하면 계정 정보(이메일·이름)와 모든 관련 데이터 — 프로필,
              폴더, 저장한 링크·노트, 태그, 채팅 기록 — 가{" "}
              <strong>즉시 영구 삭제</strong>되며 되돌릴 수 없습니다. 자동 백업에
              남은 사본은 <strong>최대 30일 이내</strong>에 제거됩니다. 자세한
              내용은 <a href={LEGAL_LINKS.privacy}>개인정보처리방침</a>을
              참고하세요.
            </p>

            <hr />

            {/* ───────────────── English ───────────────── */}
            <h1>Account &amp; Data Deletion</h1>
            <p>
              How to delete your <strong>SimplTag</strong> (developer: SimplLabs)
              account and associated data.
            </p>

            <h2>Delete from the app</h2>
            <ol>
              <li>Tap the profile icon at the top-left of the home screen.</li>
              <li>
                Go to <strong>Settings &gt; Account</strong>.
              </li>
              <li>
                Tap <strong>Delete Account</strong> and confirm.
              </li>
            </ol>

            <h2>If you can&apos;t access the app</h2>
            <p>
              Email <a href={mailtoHref}>{CONTACT.email}</a> with the address you
              signed up with, and we&apos;ll process the deletion after verifying
              your identity.
            </p>

            <h2>What is deleted &amp; retention</h2>
            <p>
              Deleting your account <strong>permanently removes</strong> your
              account info (email, name) and all associated data — profile,
              folders, saved links and notes, tags, and chat history —
              immediately and irreversibly. Any copies remaining in automated
              backups are removed <strong>within 30 days</strong>. See our{" "}
              <a href={LEGAL_LINKS.privacy}>Privacy Policy</a> for details.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
