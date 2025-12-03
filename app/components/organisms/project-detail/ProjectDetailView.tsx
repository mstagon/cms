// 프로젝트 상세 뷰 유기체
"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import CloseButton from "@/app/components/atoms/CloseButton";
import DecryptionLoader from "@/app/components/molecules/project-detail/DecryptionLoader";
import ProjectHeader from "@/app/components/molecules/project-detail/ProjectHeader";
import ProjectMainContent from "@/app/components/organisms/project-detail/ProjectMainContent";
import ProjectSidebar from "@/app/components/organisms/project-detail/ProjectSidebar";
import type { ProjectItem, ProjectDetail } from "@/app/types/projects";

interface ProjectDetailViewProps {
  project: ProjectItem;
  projectDetail?: ProjectDetail;
}

export default function ProjectDetailView({
  project,
  projectDetail,
}: ProjectDetailViewProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => {
    router.back();
  };

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // 목차 아이템 생성
  const tocItems = [];
  let order = 1;

  if (projectDetail?.overview || projectDetail?.objective) {
    tocItems.push({ id: "section-overview", label: "OVERVIEW", order: order++ });
  }
  if ((projectDetail?.images && projectDetail.images.length > 0) || project.image) {
    tocItems.push({ id: "section-visual", label: "VISUAL_OUTPUT", order: order++ });
  }
  if (projectDetail?.role) {
    tocItems.push({ id: "section-role", label: "MY_ROLE", order: order++ });
  }
  if (projectDetail?.challenges && projectDetail.challenges.length > 0) {
    tocItems.push({ id: "section-challenges", label: "CHALLENGES", order: order++ });
  }
  if (projectDetail?.architecture) {
    tocItems.push({ id: "section-architecture", label: "ARCHITECTURE", order: order++ });
  }
  if (projectDetail?.achievements && projectDetail.achievements.length > 0) {
    tocItems.push({ id: "section-achievements", label: "ACHIEVEMENTS", order: order++ });
  }
  if (projectDetail?.retrospective) {
    tocItems.push({ id: "section-retrospective", label: "RETROSPECTIVE", order: order++ });
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden p-4 sm:p-6 md:p-8" style={{ backgroundColor: "#131022" }}>
      {/* Toolbar */}
      <header className="w-full max-w-5xl mx-auto">
        <div className="flex justify-end gap-2 px-4 py-3">
          <CloseButton onClick={handleClose} />
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto">
        {/* Loading/Decryption Simulation */}
        {isLoading && (
          <DecryptionLoader
            filename={project.directory || project.filename || "FILE_STREAM_0X4A"}
            onComplete={handleLoadComplete}
          />
        )}

        {/* Page Heading */}
        <ProjectHeader
          title={project.title}
          subtitle={project.description}
          links={projectDetail?.links}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          {/* Main Content Column */}
          <ProjectMainContent
            objective={projectDetail?.objective}
            images={projectDetail?.images || (project.image ? [project.image] : [])}
            role={projectDetail?.role}
            overview={projectDetail?.overview}
            challenges={projectDetail?.challenges}
            architecture={projectDetail?.architecture}
            retrospective={projectDetail?.retrospective}
            achievements={projectDetail?.achievements}
          />

          {/* Sidebar Column */}
          <ProjectSidebar
            timeframe={projectDetail?.timeframe}
            platform={projectDetail?.platform}
            type={projectDetail?.type}
            techStack={projectDetail?.techStack || project.tags}
            links={projectDetail?.links}
            tocItems={tocItems}
          />
        </div>
      </main>
    </div>
  );
}

