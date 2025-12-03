// RootLayout는 글로벌 스타일, 메타데이터, 푸터를 묶어 모든 페이지를 구성합니다.
import "./globals.css";
import type { Metadata } from "next";
import { spaceGrotesk } from "@/app/fonts";
import FooterContainer from "@/app/components/organisms/layout/FooterContainer";
import { UIProvider } from "@/app/context/UIContext";
import { cookies } from "next/headers";
import type { Language } from "@/app/types/ui";
import { fetchFooterData } from "@/app/lib/api/footer";

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

  // 직접 함수 호출로 변경 (HTTP fetch 대신)
  const footerInfo = await fetchFooterData(initialLanguage);
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
          <main className="relative z-10">{children}</main>
          <div className="relative z-10 pdf-hide-footer">
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
