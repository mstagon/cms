// RootLayout는 글로벌 스타일, 메타데이터, 배경 영상, 푸터를 묶어 모든 페이지를 구성합니다.
import "./globals.css";
import type { Metadata } from "next";
import { suit } from "@/app/fonts";
import FooterSection from "@/app/components/organisms/layout/FooterSection";
import VideoBackground from "@/app/components/organisms/layout/VideoBackground";
import { getServerBaseUrl } from "@/app/lib/server/baseUrl";
import type { FooterInfo } from "@/app/types/layout";

export const metadata: Metadata = {
  title: "CMS — Frontend Developer",
  description: "Choi Min Seok Portfolio",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "CMS — Frontend Developer",
    description: "Choi Min Seok Portfolio",
    url: "https://example.com",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = getServerBaseUrl();
  const footerResponse = await fetch(`${baseUrl}/api/footer`, { cache: "no-store" });

  if (!footerResponse.ok) {
    throw new Error("푸터 데이터를 불러오지 못했습니다.");
  }

  const footerInfo = (await footerResponse.json()) as FooterInfo;
  const currentYear = new Date().getFullYear();

  return (
    <html lang="ko">
      <body
        className={`${suit.className} relative m-0 p-0 min-h-screen overflow-x-hidden bg-black text-white`}
      >
        <VideoBackground />
        <main className="relative z-10">{children}</main>
        <div className="relative z-10">
          <FooterSection info={footerInfo} year={currentYear} />
        </div>
      </body>
    </html>
  );
}
