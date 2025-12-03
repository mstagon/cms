// 프로젝트 상세 뷰 유기체
"use client";

import { useState, useCallback, useMemo } from "react";
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
  publicHeroImage?: string | null;
  publicArchImages?: string[];
}

export default function ProjectDetailView({
  project,
  projectDetail,
  publicHeroImage,
  publicArchImages = [],
}: ProjectDetailViewProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const handleClose = () => {
    router.back();
  };

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // 이미지 우선순위: public/projects/[slug]/hero.* > project.image > projectDetail.images
  const images = useMemo(() => {
    const imageList: string[] = [];
    if (publicHeroImage) {
      imageList.push(publicHeroImage);
    }
    if (project.image && !imageList.includes(project.image)) {
      imageList.push(project.image);
    }
    if (projectDetail?.images) {
      projectDetail.images.forEach(img => {
        if (!imageList.includes(img)) {
          imageList.push(img);
        }
      });
    }
    return imageList;
  }, [publicHeroImage, project.image, projectDetail?.images]);

  // 아키텍처 이미지 우선순위: public/projects/[slug]/architecture/ > projectDetail.architecture.diagrams
  // description이 있으면 섹션 헤더는 표시 (이미지는 선택적)
  const architecture = useMemo(() => {
    // public 폴더에 아키텍처 이미지가 있으면 우선 사용
    if (publicArchImages.length > 0) {
      return {
        description: projectDetail?.architecture?.description,
        diagrams: publicArchImages.map((image, index) => ({
          image,
          title: `Architecture ${index + 1}`,
          alt: `${project.title} - Architecture ${index + 1}`,
        })),
      };
    }
    
    // public 폴더에 없으면 기존 architecture 사용
    // description이 있으면 섹션 헤더는 표시
    if (projectDetail?.architecture) {
      // 유효한 이미지가 있는 diagrams만 필터링
      const validDiagrams = projectDetail.architecture.diagrams?.filter(
        (diagram) => diagram.image && diagram.image.trim() !== ""
      ) || [];
      
      return {
        ...projectDetail.architecture,
        diagrams: validDiagrams,
      };
    }
    
    return undefined;
  }, [projectDetail?.architecture, publicArchImages, project.title]);

  // 목차 아이템 생성
  const tocItems = [];
  let order = 1;

  if (projectDetail?.overview || projectDetail?.objective) {
    tocItems.push({ id: "section-overview", label: "OVERVIEW", order: order++ });
  }
  if (images.length > 0) {
    tocItems.push({ id: "section-visual", label: "VISUAL_OUTPUT", order: order++ });
  }
  if (projectDetail?.role) {
    tocItems.push({ id: "section-role", label: "MY_ROLE", order: order++ });
  }
  if (projectDetail?.challenges && projectDetail.challenges.length > 0) {
    tocItems.push({ id: "section-challenges", label: "CHALLENGES", order: order++ });
  }
  if (architecture) {
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
            images={images}
            role={projectDetail?.role}
            overview={projectDetail?.overview}
            challenges={projectDetail?.challenges}
            architecture={architecture}
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

