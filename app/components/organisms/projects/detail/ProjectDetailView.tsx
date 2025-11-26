// ProjectDetailView 오거니즘은 프로젝트 상세 페이지 전체 레이아웃을 구성합니다.
"use client";

import { useRef } from "react";
import ProjectMetaGrid from "@/app/components/molecules/project-detail/ProjectMetaGrid";
import ProjectProcessItem from "@/app/components/molecules/project-detail/ProjectProcessItem";
import ProjectFeatureCard from "@/app/components/molecules/project-detail/ProjectFeatureCard";
import ProjectDetailHeader from "@/app/components/molecules/project-detail/ProjectDetailHeader";
import ProjectDetailHero from "@/app/components/molecules/project-detail/ProjectDetailHero";
import ProjectDetailSection from "@/app/components/molecules/project-detail/ProjectDetailSection";
import ProjectDetailTechStack from "@/app/components/molecules/project-detail/ProjectDetailTechStack";
import ProjectDetailActions from "@/app/components/molecules/project-detail/ProjectDetailActions";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import type { ProjectDetail } from "@/app/types/projects";
import { useUI } from "@/app/context/UIContext";

interface ProjectDetailViewProps {
  detail: ProjectDetail;
}

export default function ProjectDetailView({ detail }: ProjectDetailViewProps) {
  const { language } = useUI();
  const containerRef = useRef<HTMLElement | null>(null);
  useScrollReveal(containerRef, { threshold: 0.1 });

  const {
    title,
    subtitle,
    heroImage,
    meta,
    techStack,
    processes,
    features,
    links,
  } = detail;

  const copy = {
    ko: {
      techStack: "사용 기술",
      process: "구현 과정 및 기여",
      features: "핵심 기능",
    },
    en: {
      techStack: "Tech Stack",
      process: "Process & Contribution",
      features: "Key Features",
    },
  } as const;

  const messages = copy[language] ?? copy.ko;

  return (
    <section ref={containerRef} className="relative flex w-full flex-col bg-[#121212] text-white">
      <div className="flex justify-center py-8 sm:px-2 md:px-6">
        <div className="flex w-full max-w-4xl flex-col px-2 md:px-4">
          <ProjectDetailHeader title={title} subtitle={subtitle} />
          <ProjectDetailHero
            src={heroImage.src}
            alt={heroImage.alt}
            className="mt-8"
          />

          <ProjectDetailSection delay={0.3} className="mt-16">
            <ProjectMetaGrid items={meta} />
          </ProjectDetailSection>

          <ProjectDetailSection title={messages.techStack} delay={0.4} className="mt-16">
            <ProjectDetailTechStack items={techStack} />
          </ProjectDetailSection>

          <ProjectDetailSection
            title={messages.process}
            delay={0.45}
            className="mt-16"
            contentClassName="space-y-12"
          >
            {processes.map((step, index) => (
              <ProjectProcessItem key={step.title} step={step} index={index} />
            ))}
          </ProjectDetailSection>

          <ProjectDetailSection
            title={messages.features}
            delay={0.5}
            className="mt-12"
            contentClassName="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <ProjectFeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </ProjectDetailSection>

          <ProjectDetailActions links={links} delay={0.6} />
        </div>
      </div>
    </section>
  );
}
