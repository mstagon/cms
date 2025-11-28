"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/app/components/organisms/hero/HeroSection";
import AboutSection from "@/app/components/organisms/about/AboutSection";
import ProjectsShowcase from "@/app/components/organisms/projects/ProjectsShowcase";
import { useUI } from "@/app/context/UIContext";
import type { AboutApiResponse } from "@/app/lib/api/about";
import type { ProjectsApiResponse } from "@/app/lib/api/projects";
import type { Language } from "@/app/types/ui";

interface HomeContentProps {
  initialAbout: AboutApiResponse;
  initialProjects: ProjectsApiResponse;
  initialLanguage: Language;
}

export default function HomeContent({
  initialAbout,
  initialProjects,
  initialLanguage,
}: HomeContentProps) {
  const { language } = useUI();
  const [aboutData, setAboutData] = useState<AboutApiResponse>(initialAbout);
  const [projectsData, setProjectsData] = useState<ProjectsApiResponse>(initialProjects);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(initialLanguage);
  const isUpdatingLanguage = language !== currentLanguage;

  useEffect(() => {
    if (language === currentLanguage) {
      return;
    }

    let cancelled = false;

    const loadTranslatedData = async () => {
      try {
        const [aboutResponse, projectsResponse] = await Promise.all([
          fetch(`/api/about?lang=${language}`, { cache: "no-store" }),
          fetch(`/api/projects?lang=${language}`, { cache: "no-store" }),
        ]);

        if (!aboutResponse.ok || !projectsResponse.ok) {
          throw new Error("콘텐츠를 불러오지 못했습니다.");
        }

        const [aboutJson, projectsJson] = await Promise.all([
          aboutResponse.json(),
          projectsResponse.json(),
        ]);

        if (!cancelled) {
          setAboutData(aboutJson as AboutApiResponse);
          setProjectsData(projectsJson as ProjectsApiResponse);
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
    <div className="relative min-h-screen" aria-busy={isUpdatingLanguage}>
      <section className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative z-10 h-full">
            <HeroSection />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent via-black/70 to-black" />
          </div>
        </div>
      </section>
      <div className="relative z-20 space-y-24 bg-black pb-32">
        <AboutSection
          profile={aboutData.profile}
          experiences={aboutData.experiences}
          skillCategories={aboutData.skillCategories}
          awards={aboutData.awards}
          interests={aboutData.interests}
        />
        <ProjectsShowcase featured={projectsData.featured} others={projectsData.others} />
      </div>
    </div>
  );
}


