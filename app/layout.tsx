// RootLayout는 글로벌 스타일, 메타데이터, 배경 영상, 푸터를 묶어 모든 페이지를 구성합니다.
import "./globals.css";
import type { Metadata } from "next";
import { spaceGrotesk } from "@/app/fonts";
import FooterContainer from "@/app/components/organisms/layout/FooterContainer";
import VideoBackground from "@/app/components/organisms/layout/VideoBackground";
import { getServerBaseUrl } from "@/app/lib/server/baseUrl";
import type { FooterInfo } from "@/app/types/layout";
import { UIProvider } from "@/app/context/UIContext";
import { cookies, headers } from "next/headers";
import type { Language } from "@/app/types/ui";

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
  const cookieStore = await cookies();
  const cookieLanguage = cookieStore.get("lang")?.value;
  const initialLanguage = (cookieLanguage === "en" ? "en" : "ko") as Language;
  const cookieTheme = cookieStore.get("theme")?.value;
  const initialTheme = cookieTheme === "light" ? "light" : "dark";

  let footerInfo: FooterInfo;
  try {
    // 현재 요청의 호스트를 가져와서 동적으로 base URL 구성
    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const baseUrl = host ? `${protocol}://${host}` : getServerBaseUrl();

    const footerResponse = await fetch(
      `${baseUrl}/api/footer?lang=${initialLanguage}`,
      {
        cache: "no-store",
      }
    );

    if (!footerResponse.ok) {
      const errorText = await footerResponse
        .text()
        .catch(() => "Unknown error");
      throw new Error(
        `푸터 데이터를 불러오지 못했습니다. (Status: ${footerResponse.status}, URL: ${baseUrl}/api/footer?lang=${initialLanguage}, Error: ${errorText})`
      );
    }

    footerInfo = (await footerResponse.json()) as FooterInfo;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`푸터 데이터를 불러오지 못했습니다: ${error.message}`);
    }
    throw new Error("푸터 데이터를 불러오지 못했습니다.");
  }
  const currentYear = new Date().getFullYear();

  return (
    <html lang={initialLanguage} data-theme={initialTheme}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.className} ${spaceGrotesk.variable} relative m-0 p-0 min-h-screen overflow-x-hidden bg-black text-white`}
      >
        <UIProvider
          initialLanguage={initialLanguage}
          initialTheme={initialTheme}
        >
          <VideoBackground />
          <main className="relative z-10">{children}</main>
          <div className="relative z-10">
            <FooterContainer
              initialInfo={footerInfo}
              initialLanguage={initialLanguage}
              year={currentYear}
            />
          </div>
        </UIProvider>
      </body>
    </html>
  );
}
