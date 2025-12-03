// 홈 화면은 스티키 인트로 뒤에 소개를 순차적으로 배치합니다.
import HomeContent from "@/app/components/organisms/home/HomeContent";
import { fetchAboutData } from "@/app/lib/api/about";
import type { Language } from "@/app/types/ui";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Home() {
  const cookieStore = await cookies();
  const cookieLanguage = cookieStore.get("lang")?.value;
  const initialLanguage = (cookieLanguage === "en" ? "en" : "ko") as Language;

  // 직접 함수 호출로 변경 (HTTP fetch 대신)
  const aboutJson = await fetchAboutData(initialLanguage);

  return (
    <HomeContent
      initialAbout={aboutJson}
      initialLanguage={initialLanguage}
    />
  );
}
