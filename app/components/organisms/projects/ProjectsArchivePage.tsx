// 프로젝트 아카이브 페이지 유기체
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProjectsArchive from "@/app/components/organisms/projects/ProjectsArchive";
import { useUI } from "@/app/context/UIContext";
import type { ProjectsApiResponse } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

interface ProjectsArchivePageProps {
  initialProjects: ProjectsApiResponse;
  initialLanguage: Language;
}

export default function ProjectsArchivePage({
  initialProjects,
  initialLanguage,
}: ProjectsArchivePageProps) {
  const { language } = useUI();
  const [projectsData, setProjectsData] =
    useState<ProjectsApiResponse>(initialProjects);
  const [currentLanguage, setCurrentLanguage] =
    useState<Language>(initialLanguage);

  const handleReturnToCTA = () => {
    // 해시를 포함한 URL로 직접 이동 (router.push는 해시를 제대로 처리하지 않을 수 있음)
    window.location.href = "/#about-cta";
  };

  useEffect(() => {
    if (language === currentLanguage) {
      return;
    }

    let cancelled = false;

    const loadTranslatedData = async () => {
      try {
        const projectsResponse = await fetch(`/api/projects?lang=${language}`, {
          cache: "no-store",
        });

        if (!projectsResponse.ok) {
          throw new Error("프로젝트 데이터를 불러오지 못했습니다.");
        }

        const projectsJson =
          (await projectsResponse.json()) as ProjectsApiResponse;

        if (!cancelled) {
          setProjectsData(projectsJson);
          setCurrentLanguage(language);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadTranslatedData();

    return () => {
      cancelled = true;
    };
  }, [language, currentLanguage]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background-dark">
      <div className="circuit-bg fixed inset-0" />

      {/* About CTA 섹션으로 돌아가기 버튼 */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={handleReturnToCTA}
          className="group flex items-center gap-2 px-4 py-2 bg-white/5 border border-accent/30 rounded-lg hover:border-accent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
        >
          <svg
            className="w-4 h-4 text-accent transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="text-sm font-mono text-accent font-bold tracking-wider">
            [ EXIT_ARCHIVE ]
          </span>
        </button>
      </div>

      {/* PDF 목록으로 이동 버튼 */}
      <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2">
        <Link
          href="/pdf"
          className="group flex items-center gap-2 px-4 py-2 bg-white/5 border border-accent/30 rounded-lg hover:border-accent hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
        >
          <svg
            className="w-4 h-4 text-accent transition-transform group-hover:scale-110"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm font-mono text-accent font-bold tracking-wider">
            [ PDF_VIEW ]
          </span>
        </Link>
        <p className="text-xs font-mono text-[#8892B0]/70 text-right max-w-[200px] leading-relaxed">
          {language === "ko"
            ? "// 오프라인 검토를 위한 정적 문서 내보내기 제공"
            : "// Static document export available for offline review"}
        </p>
      </div>

      <main className="relative z-10 px-4 md:px-10 lg:px-20 xl:px-40 py-10 md:py-20">
        <div className="max-w-7xl mx-auto">
          <ProjectsArchive
            featured={projectsData.featured || []}
            others={projectsData.others || []}
          />
        </div>
      </main>
    </div>
  );
}
