// Other 프로젝트 그리드 유기체 (파일 탐색기 스타일)
"use client";

import ProjectFileItem from "@/app/components/molecules/projects/ProjectFileItem";
import type { ProjectItem } from "@/app/types/projects";

interface OtherProjectsGridProps {
  projects: ProjectItem[];
  onAccess?: (slug?: string) => void;
}

export default function OtherProjectsGrid({
  projects,
  onAccess,
}: OtherProjectsGridProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="relative">
      {/* 파일 탐색기 스타일 헤더 */}
      <div className="mb-4 p-3 bg-white/5 border border-white/10 rounded-t font-mono">
        <div className="flex items-center gap-2 text-xs text-[#8892B0]">
          <span className="material-symbols-outlined text-accent text-sm">
            folder
          </span>
          <span>{"// DIRECTORY: OTHER_PROJECTS"}</span>
          <span className="text-accent/70">({projects.length} files)</span>
        </div>
      </div>

      {/* 파일 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
        {projects.map((project) => (
          <ProjectFileItem
            key={project.id}
            project={project}
            onAccess={onAccess}
          />
        ))}
      </div>
    </div>
  );
}

