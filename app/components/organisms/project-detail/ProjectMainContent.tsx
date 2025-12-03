// 프로젝트 메인 컨텐츠 유기체
"use client";

import SectionHeader from "@/app/components/molecules/project-detail/SectionHeader";
import ImageCarousel from "@/app/components/molecules/project-detail/ImageCarousel";
import OverviewSection from "@/app/components/molecules/project-detail/OverviewSection";
import ChallengeSection from "@/app/components/molecules/project-detail/ChallengeSection";
import ArchitectureSection from "@/app/components/molecules/project-detail/ArchitectureSection";
import RetrospectiveSection from "@/app/components/molecules/project-detail/RetrospectiveSection";
import AchievementSection from "@/app/components/molecules/project-detail/AchievementSection";
import type { ProjectDetail } from "@/app/types/projects";

interface ProjectMainContentProps {
  objective?: string;
  images?: string[];
  role?: {
    title: string;
    responsibilities: string[];
  };
  overview?: ProjectDetail["overview"];
  challenges?: ProjectDetail["challenges"];
  architecture?: ProjectDetail["architecture"];
  retrospective?: string;
  achievements?: ProjectDetail["achievements"];
}

export default function ProjectMainContent({
  objective,
  images = [],
  role,
  overview,
  challenges,
  architecture,
  retrospective,
  achievements,
}: ProjectMainContentProps) {

  return (
    <div className="md:col-span-2 flex flex-col gap-12">
      {/* Overview Section */}
      {overview && (
        <section id="section-overview">
          <OverviewSection
            description={overview.description}
            stats={overview.stats}
          />
        </section>
      )}

      {/* Objective Overview Section (fallback if overview not provided) */}
      {!overview && objective && (
        <section id="section-overview">
          <SectionHeader title="// OBJECTIVE_OVERVIEW.log" />
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-[#c5c0e5]">
            <p>{objective}</p>
          </div>
        </section>
      )}

      {/* Image Carousel */}
      {images.length > 0 && (
        <section id="section-visual">
          <SectionHeader title="// VISUAL_OUTPUT.dat" />
          <ImageCarousel images={images} alt="Project visual output" />
        </section>
      )}

      {/* My Role Section */}
      {role && (
        <section id="section-role">
          <SectionHeader title="// MY_ROLE.md" />
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4 text-[#c5c0e5]">
            <h3 className="font-bold text-lg text-white">{role.title}</h3>
            <ul className="list-disc list-inside space-y-2 pl-2">
              {role.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Challenges Section */}
      {challenges && challenges.length > 0 && (
        <section id="section-challenges" className="space-y-8">
          <SectionHeader title="// CHALLENGES_SOLUTIONS.log" />
          <div className="space-y-8">
            {challenges.map((challenge, index) => (
              <ChallengeSection
                key={index}
                title={challenge.title}
                asIs={challenge.asIs}
                toBe={challenge.toBe}
                result={challenge.result}
                githubLink={challenge.githubLink}
                docsLink={challenge.docsLink}
              />
            ))}
          </div>
        </section>
      )}

      {/* Architecture Section */}
      {architecture && (
        <section id="section-architecture">
          <ArchitectureSection
            description={architecture.description}
            diagrams={architecture.diagrams}
          />
        </section>
      )}

      {/* Achievements Section */}
      {achievements && achievements.length > 0 && (
        <section id="section-achievements">
          <AchievementSection achievements={achievements} />
        </section>
      )}

      {/* Retrospective Section */}
      {retrospective && (
        <section id="section-retrospective">
          <RetrospectiveSection content={retrospective} />
        </section>
      )}
    </div>
  );
}

