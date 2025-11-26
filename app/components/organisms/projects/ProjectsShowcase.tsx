// ProjectsShowcase 오거니즘은 주요 프로젝트와 기타 프로젝트 리스트를 표현합니다.
"use client";

import { useEffect, useRef, useState } from "react";
import type {
  ProjectDetail,
  ProjectItem,
  ProjectSummary,
} from "@/app/types/projects";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import SectionHeading from "@/app/components/atoms/SectionHeading";
import FeaturedProjectCard from "@/app/components/molecules/FeaturedProjectCard";
import OtherProjectCard from "@/app/components/molecules/OtherProjectCard";
import ProjectDetailModal from "@/app/components/organisms/projects/detail/ProjectDetailModal";
import { useUI } from "@/app/context/UIContext";

interface ProjectsShowcaseProps {
  featured: ProjectItem[];
  others: ProjectSummary[];
}

export default function ProjectsShowcase({
  featured,
  others,
}: ProjectsShowcaseProps) {
  const { language } = useUI();
  const sectionRef = useRef<HTMLElement | null>(null);
  useScrollReveal(sectionRef, { threshold: 0.2 });
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [detail, setDetail] = useState<ProjectDetail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isModalOpen = selectedSlug !== null;

  const copy = {
    ko: {
      subtitle: "대표 프로젝트",
      description: "사용자 경험과 비즈니스 임팩트를 동시에 만족시킨 프로젝트입니다.",
      otherProjects: "다른 프로젝트",
      detailError: "프로젝트 상세 데이터를 불러오지 못했습니다.",
      unknownError: "알 수 없는 오류가 발생했습니다.",
    },
    en: {
      subtitle: "Selected Works",
      description: "Projects that align user experience with measurable business impact.",
      otherProjects: "Other Projects",
      detailError: "Failed to load project details.",
      unknownError: "An unexpected error occurred.",
    },
  } as const;

  const messages = copy[language] ?? copy.ko;

  useEffect(() => {
    if (!selectedSlug) {
      setDetail(null);
      setError(null);
      setIsLoading(false);
      return;
    }

    let isCancelled = false;
    const fetchDetail = async () => {
      try {
        setIsLoading(true);
        setError(null);
        setDetail(null);
        const response = await fetch(`/api/projects/${selectedSlug}?lang=${language}`, {
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error(messages.detailError);
        }
        const data = (await response.json()) as ProjectDetail;
        if (!isCancelled) {
          setDetail(data);
        }
      } catch (fetchError) {
        if (!isCancelled) {
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : messages.unknownError,
          );
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchDetail();

    return () => {
      isCancelled = true;
    };
  }, [selectedSlug, language, messages.detailError, messages.unknownError]);

  const handleOpenDetail = (slug: string) => {
    setSelectedSlug(slug);
  };

  const handleCloseDetail = () => {
    setSelectedSlug(null);
  };

  return (
    <>
      <section ref={sectionRef} id="projects" className="bg-black text-white">
        <div className="container mx-auto flex flex-col gap-20 px-6 py-24">
          <div data-animate="scroll" style={{ transitionDelay: "0.1s" }}>
            <SectionHeading
              title="Projects"
              subtitle={messages.subtitle}
              align="center"
            />
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-white/65">
              {messages.description}
            </p>
          </div>

          <div className="flex flex-col gap-20 md:gap-24">
            {featured.map((project, idx) => (
              <FeaturedProjectCard
                key={project.title}
                project={project}
                index={idx}
                delay={0.2 + idx * 0.15}
                onOpenDetail={handleOpenDetail}
              />
            ))}
          </div>

          <section
            className="flex flex-col items-center gap-8 text-center"
            data-animate="scroll"
            style={{ transitionDelay: `${0.2 + featured.length * 0.15}s` }}
          >
            <h3 className="text-2xl font-bold">{messages.otherProjects}</h3>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {others.map((project, idx) => (
                <OtherProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  href={project.href}
                  delay={0.35 + (featured.length + idx) * 0.12}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
      <ProjectDetailModal
        isOpen={isModalOpen}
        isLoading={isLoading}
        detail={detail}
        error={error}
        onClose={handleCloseDetail}
      />
    </>
  );
}
