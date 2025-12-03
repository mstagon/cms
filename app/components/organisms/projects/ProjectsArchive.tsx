// 프로젝트 아카이브 유기체
"use client";

import { useEffect, useState, useRef } from "react";
import ProjectsArchiveGrid from "@/app/components/organisms/projects/ProjectsArchiveGrid";
import OtherProjectsGrid from "@/app/components/organisms/projects/OtherProjectsGrid";
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
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  // IntersectionObserver로 스크롤 시 표시
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
      window.location.href = `/projects/${slug}`;
    } else {
      window.location.href = "/#contact";
    }
  };

  const totalProjects = featured.length + others.length;

  if (totalProjects === 0) {
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

      {/* Featured Projects Section - 큰 카드 */}
      {featured.length > 0 && (
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-mono mb-2">
              // FEATURED_PROJECTS
            </h2>
            <p className="text-[#8892B0] text-sm font-mono">
              // High-priority data modules
            </p>
          </div>
          <ProjectsArchiveGrid projects={featured} onAccess={handleAccess} />
        </div>
      )}

      {/* Other Projects Section - 파일 탐색기 스타일 */}
      {others.length > 0 && (
        <div className="mt-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-mono mb-2">
              // OTHER_PROJECTS
            </h2>
            <p className="text-[#8892B0] text-sm font-mono">
              // Additional data modules
            </p>
          </div>
          <OtherProjectsGrid projects={others} onAccess={handleAccess} />
        </div>
      )}
    </section>
  );
}

