// 프로젝트 아카이브 그리드 유기체
"use client";

import ProjectDataModule from "@/app/components/molecules/projects/ProjectDataModule";
import type { ProjectItem } from "@/app/types/projects";

interface ProjectsArchiveGridProps {
  projects: ProjectItem[];
  onAccess?: (slug?: string) => void;
}

export default function ProjectsArchiveGrid({
  projects,
  onAccess,
}: ProjectsArchiveGridProps) {
  // 그리드 레이아웃 계산 (HTML 구조 기반)
  const getGridClasses = (index: number, total: number) => {
    // 첫 번째: md:col-span-8 md:row-span-2
    if (index === 0) return "md:col-span-8 md:row-span-2";
    
    // 두 번째: md:col-span-4
    if (index === 1) return "md:col-span-4";
    
    // 세 번째: md:col-span-4
    if (index === 2) return "md:col-span-4";
    
    // 네 번째: md:col-span-5 md:row-span-2
    if (index === 3) return "md:col-span-5 md:row-span-2";
    
    // 다섯 번째: md:col-span-7
    if (index === 4) return "md:col-span-7";
    
    // 여섯 번째: md:col-span-5
    if (index === 5) return "md:col-span-5";
    
    // 기본값
    return "md:col-span-4";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-fr gap-4 lg:gap-6 py-10">
      {projects.map((project, index) => (
        <ProjectDataModule
          key={project.id}
          project={project}
          className={getGridClasses(index, projects.length)}
          onAccess={onAccess}
        />
      ))}
    </div>
  );
}

