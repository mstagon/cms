"use client";

import type {
  Award,
  Certification,
  Experience,
  Interest,
  ProfileIntro,
  SkillCategory,
} from "@/app/types/about";
import { useEffect, useMemo, useRef, useState } from "react";
import { useUI } from "@/app/context/UIContext";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { getAboutTexts } from "@/app/lib/i18n/texts";
import AboutHeroIntro from "@/app/components/molecules/about/AboutHeroIntro";
import AboutVisualPanel from "@/app/components/molecules/about/AboutVisualPanel";
import AboutPhilosophySection from "@/app/components/molecules/about/AboutPhilosophySection";
import AboutTimelineSection from "@/app/components/molecules/about/AboutTimelineSection";
import AboutCapabilitiesSection from "@/app/components/molecules/about/AboutCapabilitiesSection";
import AboutCTASection from "@/app/components/molecules/about/AboutCTASection";

interface AboutSectionProps {
  profile: ProfileIntro;
  experiences: Experience[];
  skillCategories: SkillCategory[];
  awards: Award[];
  interests: Interest[];
  certifications: Certification[];
}

const MAX_CARDS = 6;
const MAX_STATS = 4;

export default function AboutSection({
  profile,
  experiences,
  skillCategories,
  awards,
  interests,
  certifications,
}: AboutSectionProps) {
  const { language } = useUI();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [capabilitiesHeight, setCapabilitiesHeight] = useState(140); // 기본 높이
  const [visualPanelLoading, setVisualPanelLoading] = useState(false);
  const [visualPanelMessage, setVisualPanelMessage] = useState<
    string | undefined
  >();
  const [visualPanelInitialProgress, setVisualPanelInitialProgress] =
    useState(0);
  useScrollReveal(sectionRef, { threshold: 0.12, rootMargin: "-10% 0px" });

  // 비주얼 패널 로딩 상태 관리
  useEffect(() => {
    const handleVisualPanelLoading = (event: Event) => {
      const customEvent = event as CustomEvent<{
        isLoading: boolean;
        message?: string;
        initialProgress?: number;
      }>;
      setVisualPanelLoading(customEvent.detail.isLoading);
      setVisualPanelMessage(customEvent.detail.message);
      if (customEvent.detail.initialProgress !== undefined) {
        setVisualPanelInitialProgress(customEvent.detail.initialProgress);
      }
    };

    window.addEventListener("visualPanelLoading", handleVisualPanelLoading);
    return () => {
      window.removeEventListener(
        "visualPanelLoading",
        handleVisualPanelLoading
      );
    };
  }, []);

  const text = useMemo(
    () => getAboutTexts(language, profile),
    [language, profile]
  );

  const dynamicCards = useMemo(() => {
    // 자격증을 우선적으로 포함하고, 그 다음 awards와 interests를 추가
    const merged = [...certifications, ...awards, ...interests]
      .map((item, index) => ({
        icon: index % 2 === 0 ? "person_alert" : "code_blocks",
        title: item.title,
        body: item.description,
      }))
      .slice(0, MAX_CARDS);

    return merged.length ? merged : text.fallbackCards;
  }, [awards, interests, certifications, text.fallbackCards]);

  const timelineEntries = useMemo(() => {
    if (experiences.length === 0) {
      return [
        {
          title: "INITIALIZING_SEQUENCE",
          timestamp: "2020",
          description:
            "> First contact with code, building simple web pages. Discovered infinite possibilities.",
        },
        {
          title: "FRAMEWORK_INTEGRATION",
          timestamp: "2022",
          description:
            "> Deep dive into modern frameworks. Deployed solo projects and sharpened product sense.",
        },
        {
          title: "LIVE_SYSTEM_OPERATIONS",
          timestamp: "2023 - PRESENT",
          description:
            "> Building for real users, focusing on performance optimization and UX refinement.",
        },
      ];
    }

    return experiences.map((experience) => ({
      title: experience.role.toUpperCase().replace(/\s+/g, "_"),
      timestamp: experience.period,
      description: experience.description,
    }));
  }, [experiences]);

  const capabilityStats = useMemo(() => {
    const stats = skillCategories
      .flatMap((category) =>
        category.skills.map((skill) => ({
          label: skill.levelLabel.toUpperCase() || skill.name.toUpperCase(),
          value: `${skill.proficiency}%`,
          weight: skill.proficiency,
          name: skill.name, // 고유 키를 위해 name 추가
        }))
      )
      .sort((a, b) => b.weight - a.weight)
      .slice(0, MAX_STATS)
      .map(({ label, value, name }) => ({
        label: label.toUpperCase(),
        value,
        name: name.toUpperCase(), // 고유 키
      }));

    if (stats.length === 0) {
      return [
        { label: "PROBLEM-SOLVING", value: "85%", name: "PROBLEM-SOLVING" },
        { label: "UI/UX_IMPL", value: "95%", name: "UI/UX_IMPL" },
        { label: "PERF_TUNING", value: "90%", name: "PERF_TUNING" },
        { label: "STATE_MGMT", value: "80%", name: "STATE_MGMT" },
      ];
    }

    return stats;
  }, [skillCategories]);

  // 전체 섹션 높이도 조정 (타임라인 75vh + 철학 75vh + 코어스펙 실제 높이 + 간격)
  const philosophySectionHeight = useMemo(() => {
    return 75 + 75 + capabilitiesHeight + 10; // 간격 최소화 (10vh)
  }, [capabilitiesHeight]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative isolate flex w-full flex-col items-center bg-background-dark text-[#a8b2d1]"
    >
      <div className="animate-circuitFlow pointer-events-none fixed inset-0 z-0 opacity-10" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent to-background-dark" />
      <main className="relative z-10 w-full max-w-5xl px-6">
        <AboutHeroIntro
          initLabel={text.initLabel}
          glitchLabel={text.glitchLabel}
          roleSuffix={text.roleSuffix}
          description={text.heroDescription}
          scrollLabel={text.scrollLabel}
        />

        <section
          id="philosophy-section"
          className="relative pt-8 pb-20"
          style={{ minHeight: `${philosophySectionHeight}vh` }}
        >
          <div className="sticky top-0 flex h-screen items-center justify-start">
            <div className="hidden w-1/2 items-center justify-center lg:flex">
              <AboutVisualPanel
                isLoading={visualPanelLoading}
                loadingMessage={visualPanelMessage}
                initialProgress={visualPanelInitialProgress}
              />
            </div>
          </div>

          {/* 오른쪽: 절대 배치된 타임라인, 철학, 코어스펙 섹션 (스크롤 시 각각 화면 중앙에 위치) */}
          <div
            className="absolute top-0 right-0 flex w-1/2 flex-col justify-between gap-4"
            style={{ minHeight: `${philosophySectionHeight}vh` }}
          >
            <div
              id="timeline-section"
              className="flex min-h-[75vh] items-center"
            >
              <AboutTimelineSection
                title={text.timelineTitle}
                label={text.timelineLabel}
                entries={timelineEntries}
              />
            </div>
            <div className="flex min-h-[75vh] items-center">
              <AboutPhilosophySection
                title={text.philosophyTitle}
                description={text.philosophyDescription}
                cards={dynamicCards}
              />
            </div>
            <div className="flex items-start py-8 pb-16">
              <AboutCapabilitiesSection
                title={text.capabilitiesTitle}
                stats={capabilityStats}
                skillCategories={skillCategories}
                onHeightChange={setCapabilitiesHeight}
              />
            </div>
          </div>
        </section>
        <AboutCTASection
          title={text.ctaTitle}
          description={text.ctaDescription}
          primaryLabel={text.primaryCta}
          secondaryLabel={text.secondaryCta}
        />
      </main>
    </section>
  );
}
