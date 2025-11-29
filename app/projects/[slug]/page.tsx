// 프로젝트 상세 페이지
import ProjectDetailView from "@/app/components/organisms/project-detail/ProjectDetailView";
import { getServerBaseUrl } from "@/app/lib/server/baseUrl";
import type { ProjectItem, ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

interface ProjectDetailPageProps {
    params: {
        slug: string;
    };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const baseUrl = getServerBaseUrl();
    const cookieStore = await cookies();
    const cookieLanguage = cookieStore.get("lang")?.value;
    const language = (cookieLanguage === "en" ? "en" : "ko") as Language;

    const response = await fetch(
        `${baseUrl}/api/projects/${params.slug}?lang=${language}`,
        { cache: "no-store" }
    );

    if (!response.ok) {
        throw new Error("프로젝트 상세 데이터를 불러오지 못했습니다.");
    }

    const data = (await response.json()) as {
        project: ProjectItem;
        detail: ProjectDetail | null;
    };

    return (
        <ProjectDetailView project={data.project} projectDetail={data.detail || undefined} />
    );
}

