"use client";

import type {
  Award,
  Experience,
  Interest,
  ProfileIntro,
  SkillCategory,
} from "@/app/types/about";
import { useEffect, useMemo, useRef, useState } from "react";
import { useUI } from "@/app/context/UIContext";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import AboutSystemHeader from "@/app/components/molecules/about/AboutSystemHeader";
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
}

const MAX_CARDS = 4;
const MAX_STATS = 4;

export default function AboutSection({
  profile,
  experiences,
  skillCategories,
  awards,
  interests,
}: AboutSectionProps) {
  const { language } = useUI();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [capabilitiesHeight, setCapabilitiesHeight] = useState(140); // 기본 높이
  const [visualPanelLoading, setVisualPanelLoading] = useState(false);
  const [visualPanelMessage, setVisualPanelMessage] = useState<
    string | undefined
  >();
  useScrollReveal(sectionRef, { threshold: 0.12, rootMargin: "-10% 0px" });

  // 비주얼 패널 로딩 상태 관리
  useEffect(() => {
    const handleVisualPanelLoading = (event: Event) => {
      const customEvent = event as CustomEvent<{
        isLoading: boolean;
        message?: string;
      }>;
      setVisualPanelLoading(customEvent.detail.isLoading);
      setVisualPanelMessage(customEvent.detail.message);
    };

    window.addEventListener("visualPanelLoading", handleVisualPanelLoading);
    return () => {
      window.removeEventListener(
        "visualPanelLoading",
        handleVisualPanelLoading
      );
    };
  }, []);

  const copy = useMemo(
    () => ({
      ko: {
        brand: `${profile.headline || "OOO"}.sys`,
        resume: "[ GET_RESUME ]",
        initLabel: "[INITIATING_CONNECTION...]",
        glitchLabel: profile.headline || "OOO",
        roleSuffix: ": FRONTEND_DEV",
        heroDescription:
          profile.description ||
          "> 감성과 성능이 공존하는 인터페이스를 설계합니다.",
        scrollLabel: "[SCROLL_SEQUENCE]",
        philosophyTitle: "// PHILOSOPHY.LOG",
        philosophyDescription:
          "비주얼을 넘어 직관적이며 효율적인 경험을 만드는 시스템을 구축합니다.",
        timelineTitle: "// DATA_STREAM.LOG",
        timelineLabel: "TIMESTAMP",
        capabilitiesTitle: "// CORE_SPECS.LOG",
        ctaTitle: "[ ESTABLISH_CONNECTION? ]",
        ctaDescription:
          "> 제 작업에 관심이 있거나 협업을 제안하고 싶다면 언제든지 연락 주세요.",
        primaryCta: "VIEW_PROJECTS",
        secondaryCta: "CONTACT.EXE",
        navItems: [
          { icon: "psychology", title: "ACCESS: PHILOSOPHY.LOG" },
          { icon: "memory", title: "ACCESS: CORE_SPECS.LOG" },
          { icon: "timeline", title: "ACCESS: DATA_STREAM.LOG" },
          { icon: "outgoing_mail", title: "EXECUTE: CONTACT.EXE" },
        ],
        fallbackCards: [
          {
            icon: "person_alert",
            title: "사용자 중심 프로토콜",
            body: "모든 여정은 실제 사용자 시나리오에서 출발합니다.",
          },
          {
            icon: "code_blocks",
            title: "효율적인 코드베이스",
            body: "명료한 설계와 성능 최적화를 결합한 시스템을 구축합니다.",
          },
        ],
      },
      en: {
        brand: `${profile.headline || "OOO"}.sys`,
        resume: "[ GET_RESUME ]",
        initLabel: "[INITIATING_CONNECTION...]",
        glitchLabel: profile.headline || "OOO",
        roleSuffix: ": FRONTEND_DEV",
        heroDescription:
          profile.description ||
          "> Building immersive web experiences with precision and passion.",
        scrollLabel: "[SCROLL_SEQUENCE]",
        philosophyTitle: "// PHILOSOPHY.LOG",
        philosophyDescription:
          "Accessing kernel... Beyond visuals, I craft intuitive, efficient, accessible systems.",
        timelineTitle: "// DATA_STREAM.LOG",
        timelineLabel: "TIMESTAMP",
        capabilitiesTitle: "// CORE_SPECS.LOG",
        ctaTitle: "[ ESTABLISH_CONNECTION? ]",
        ctaDescription:
          "> If you’re interested in my work or want to collaborate, feel free to reach out.",
        primaryCta: "VIEW_PROJECTS",
        secondaryCta: "CONTACT.EXE",
        navItems: [
          { icon: "psychology", title: "ACCESS: PHILOSOPHY.LOG" },
          { icon: "memory", title: "ACCESS: CORE_SPECS.LOG" },
          { icon: "timeline", title: "ACCESS: DATA_STREAM.LOG" },
          { icon: "outgoing_mail", title: "EXECUTE: CONTACT.EXE" },
        ],
        fallbackCards: [
          {
            icon: "person_alert",
            title: "User-Centric Protocol",
            body: "Meaningful journeys grounded in real user problems.",
          },
          {
            icon: "code_blocks",
            title: "Efficient Codebase",
            body: "Clean, scalable, performant code built to last.",
          },
        ],
      },
    }),
    [profile]
  );

  const text = copy[language] ?? copy.en;

  const dynamicCards = useMemo(() => {
    const merged = [...awards, ...interests]
      .map((item, index) => ({
        icon: index % 2 === 0 ? "person_alert" : "code_blocks",
        title: item.title,
        body: item.description,
      }))
      .slice(0, MAX_CARDS);

    return merged.length ? merged : text.fallbackCards;
  }, [awards, interests, text.fallbackCards]);

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
      {/* <div className="animate-circuitFlow pointer-events-none fixed inset-0 z-0 opacity-10" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent to-background-dark" />
      <AboutSystemHeader
        brandLabel={text.brand}
        resumeLabel={text.resume}
        navItems={text.navItems}
      /> */}
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
