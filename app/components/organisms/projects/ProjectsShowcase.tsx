// ProjectsShowcase 오거니즘은 주요 프로젝트와 기타 프로젝트 리스트를 표현합니다.
"use client";

import { useRef } from "react";
import type { ProjectItem, ProjectSummary } from "@/app/types/projects";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import SectionHeading from "@/app/components/atoms/SectionHeading";
import FeaturedProjectCard from "@/app/components/molecules/FeaturedProjectCard";
import OtherProjectCard from "@/app/components/molecules/OtherProjectCard";

interface ProjectsShowcaseProps {
  featured: ProjectItem[];
  others: ProjectSummary[];
}

export default function ProjectsShowcase({
  featured,
  others,
}: ProjectsShowcaseProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  useScrollReveal(sectionRef, { threshold: 0.2 });

  return (
    <section ref={sectionRef} id="projects" className="bg-black text-white">
      <div className="container mx-auto flex flex-col gap-20 px-6 py-24">
        <div data-animate="scroll" style={{ transitionDelay: "0.1s" }}>
          <SectionHeading
            title="Projects"
            subtitle="Selected Works"
            align="center"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-white/65">
            사용자 경험과 비즈니스 임팩트를 동시에 만족시킨 프로젝트입니다.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-24">
          {featured.map((project, idx) => (
            <FeaturedProjectCard
              key={project.title}
              project={project}
              index={idx}
              delay={0.2 + idx * 0.15}
            />
          ))}
        </div>

        <section
          className="flex flex-col items-center gap-8 text-center"
          data-animate="scroll"
          style={{ transitionDelay: `${0.2 + featured.length * 0.15}s` }}
        >
          <h3 className="text-2xl font-bold">Other Projects</h3>
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
  );
}
