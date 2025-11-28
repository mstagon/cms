// 홈 화면은 스티키 인트로 뒤에 소개와 프로젝트를 순차적으로 배치합니다.
import HomeContent from "@/app/components/organisms/home/HomeContent";
import { getServerBaseUrl } from "@/app/lib/server/baseUrl";
import type { AboutApiResponse } from "@/app/lib/api/about";
import type { ProjectsApiResponse } from "@/app/lib/api/projects";
import type { Language } from "@/app/types/ui";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Home() {
  const baseUrl = getServerBaseUrl();
  const cookieStore = await cookies();
  const cookieLanguage = cookieStore.get("lang")?.value;
  const initialLanguage = (cookieLanguage === "en" ? "en" : "ko") as Language;

  const [aboutResponse, projectsResponse] = await Promise.all([
    fetch(`${baseUrl}/api/about?lang=${initialLanguage}`, { cache: "no-store" }),
    fetch(`${baseUrl}/api/projects?lang=${initialLanguage}`, { cache: "no-store" }),
  ]);

  if (!aboutResponse.ok) {
    throw new Error("소개 데이터를 불러오지 못했습니다.");
  }

  if (!projectsResponse.ok) {
    throw new Error("프로젝트 데이터를 불러오지 못했습니다.");
  }

  const aboutJson = (await aboutResponse.json()) as AboutApiResponse;
  const projectsJson = (await projectsResponse.json()) as ProjectsApiResponse;

  return (
    <HomeContent
      initialAbout={aboutJson}
      initialProjects={projectsJson}
      initialLanguage={initialLanguage}
    />
  );
}
