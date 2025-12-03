// 프로젝트 목록 페이지
import ProjectsArchivePage from "@/app/components/organisms/projects/ProjectsArchivePage";
import { getServerBaseUrl } from "@/app/lib/server/baseUrl";
import type { ProjectsApiResponse } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const baseUrl = getServerBaseUrl();
  const cookieStore = await cookies();
  const cookieLanguage = cookieStore.get("lang")?.value;
  const initialLanguage = (cookieLanguage === "en" ? "en" : "ko") as Language;

  const projectsResponse = await fetch(
    `${baseUrl}/api/projects?lang=${initialLanguage}`,
    { cache: "no-store" }
  );

  if (!projectsResponse.ok) {
    throw new Error("프로젝트 데이터를 불러오지 못했습니다.");
  }

  const projectsJson = (await projectsResponse.json()) as ProjectsApiResponse;

  return (
    <ProjectsArchivePage
      initialProjects={projectsJson}
      initialLanguage={initialLanguage}
    />
  );
}

