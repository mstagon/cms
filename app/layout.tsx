// RootLayout는 글로벌 스타일, 메타데이터, 배경 영상, 푸터를 묶어 모든 페이지를 구성합니다.
import "./globals.css";
import type { Metadata } from "next";
import { suit } from "@/app/fonts";
import Footer from "@/app/components/Footer";
import VideoComponent from "@/app/components/Hero/VideoComponents";

export const metadata: Metadata = {
  title: "CMS — Frontend Developer",
  description: "Choi Min Seok Portfolio",
  metadataBase: new URL("https://example.com"),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: "CMS — Frontend Developer",
    description: "Choi Min Seok Portfolio",
    url: "https://example.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${suit.className} relative m-0 p-0 min-h-screen overflow-x-hidden bg-black text-white`}
      >
        <VideoComponent />
        <main className="relative z-10">{children}</main>
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
