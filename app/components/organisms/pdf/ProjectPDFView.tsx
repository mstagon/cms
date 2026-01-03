// PDF 전용 프로젝트 상세 뷰
import type { ProjectItem, ProjectDetail } from "@/app/types/projects";
import ProjectPDFContent from "@/app/components/organisms/pdf/ProjectPDFContent";
import "@/app/styles/pdf.css";
import Link from "next/link";

interface ProjectPDFViewProps {
  project: ProjectItem;
  projectDetail: ProjectDetail;
}

export default async function ProjectPDFView({
  project,
  projectDetail,
}: ProjectPDFViewProps) {
  return (
    <div className="pdf-layout min-h-screen bg-white text-gray-900">
      {/* 뒤로가기 */}
      <div className="fixed top-4 right-4 print:hidden z-50 flex gap-2">
        <Link
          href="/pdf"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          ← 목록으로
        </Link>
      </div>

      {/* PDF 인쇄 안내 (화면에서만 표시) */}
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-lg print:hidden z-50">
        <p className="text-sm font-semibold mb-2">PDF로 저장하기</p>
        <p className="text-xs text-blue-100">
          브라우저에서 Ctrl+P (Mac: Cmd+P)를 눌러 PDF로 저장하세요
        </p>
      </div>
      <ProjectPDFContent project={project} projectDetail={projectDetail} />
    </div>
  );
}

