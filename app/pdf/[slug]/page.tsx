// PDF 전용 프로젝트 상세 페이지
import { getProjectDetail } from "@/app/lib/api/projectDetails";
import { getProjects } from "@/app/lib/api/projects";
import type { Language } from "@/app/types/ui";
import { cookies } from "next/headers";
import ProjectPDFView from "@/app/components/organisms/pdf/ProjectPDFView";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ProjectPDFPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const cookieLanguage = cookieStore.get("lang")?.value;
  const language = (cookieLanguage === "en" ? "en" : "ko") as Language;

  const projectDetail = await getProjectDetail(slug, language);
  const projects = await getProjects(language);
  
  const project = [...projects.featured, ...projects.others].find(
    (p) => p.slug === slug
  );

  if (!project || !projectDetail) {
    notFound();
  }

  return <ProjectPDFView project={project} projectDetail={projectDetail} />;
}

