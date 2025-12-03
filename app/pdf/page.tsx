// PDF 프로젝트 목록 페이지
import { getProjects } from "@/app/lib/api/projects";
import type { Language } from "@/app/types/ui";
import { cookies } from "next/headers";
import PDFIndexPage from "@/app/components/organisms/pdf/PDFIndexPage";

export const dynamic = "force-dynamic";

export default async function PDFPage() {
  const cookieStore = await cookies();
  const cookieLanguage = cookieStore.get("lang")?.value;
  const language = (cookieLanguage === "en" ? "en" : "ko") as Language;

  const projects = await getProjects(language);

  return <PDFIndexPage projects={projects} />;
}

