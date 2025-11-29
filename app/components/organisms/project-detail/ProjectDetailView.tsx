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
        <ProjectHeader title={project.title} subtitle={project.description} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          {/* Main Content Column */}
          <ProjectMainContent
            objective={projectDetail?.objective}
            images={projectDetail?.images || (project.image ? [project.image] : [])}
            role={projectDetail?.role}
          />

          {/* Sidebar Column */}
          <ProjectSidebar
            timeframe={projectDetail?.timeframe}
            platform={projectDetail?.platform}
            type={projectDetail?.type}
            techStack={projectDetail?.techStack || project.tags}
            performance={projectDetail?.performance}
          />
        </div>
      </main>
    </div>
  );
}

