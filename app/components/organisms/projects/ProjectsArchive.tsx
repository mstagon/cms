// 프로젝트 아카이브 유기체
"use client";

import { useEffect, useState, useRef } from "react";
import ProjectsArchiveGrid from "@/app/components/organisms/projects/ProjectsArchiveGrid";
import GlitchText from "@/app/components/atoms/GlitchText";
import type { ProjectItem } from "@/app/types/projects";

interface ProjectsArchiveProps {
  featured: ProjectItem[];
  others?: ProjectItem[];
}

export default function ProjectsArchive({
  featured,
  others = [],
}: ProjectsArchiveProps) {
  const [isVisible, setIsVisible] = useState(true); // 초기 상태를 visible로 변경
  const sectionRef = useRef<HTMLElement>(null);

  // IntersectionObserver로 스크롤 시 표시 (선택적)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleAccess = (slug?: string) => {
    if (slug) {
      // 프로젝트 상세 페이지로 이동
      window.location.href = `/projects/${slug}`;
    } else {
      // 연락처로 이동
      window.location.href = "/#contact";
    }
  };

  // 모든 프로젝트 합치기
  const allProjects = [...featured, ...others];

  // 디버깅: 데이터 확인 (개발 환경에서만)
  if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    console.log("ProjectsArchive - featured:", featured);
    console.log("ProjectsArchive - others:", others);
    console.log("ProjectsArchive - allProjects:", allProjects);
  }

  if (allProjects.length === 0) {
    return (
      <section ref={sectionRef} id="projects-archive" className="relative">
        <div className="text-center py-10">
          <p className="text-white/70">No projects available</p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="projects-archive"
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-center py-10">
        <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em] glitch-text text-accent uppercase" data-text="// SYSTEM_ARCHIVE_ACCESS">
          <GlitchText>// SYSTEM_ARCHIVE_ACCESS</GlitchText>
        </h1>
        <p className="text-white/70 text-base md:text-lg font-normal leading-normal mt-4 max-w-2xl mx-auto font-mono">
          // Directory scan complete. Data modules awaiting user interaction [HOVER/CLICK].
        </p>
      </div>

      <ProjectsArchiveGrid projects={allProjects} onAccess={handleAccess} />
    </section>
  );
}

