// AboutSection 오거니즘은 프로필 소개부터 기술 스택, 경력, 수상, 관심사를 순서대로 렌더링합니다.
"use client";

import type {
  Award,
  Experience,
  Interest,
  ProfileIntro,
  SkillCategory,
} from "@/app/types/about";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { useRef } from "react";
import ProfileHero from "@/app/components/molecules/ProfileHero";
import ExperienceTimeline from "@/app/components/organisms/about/ExperienceTimeline";
import SkillsSection from "@/app/components/organisms/about/SkillsSection";
import AwardsList from "@/app/components/organisms/about/AwardsList";
import InterestGrid from "@/app/components/organisms/about/InterestGrid";

interface AboutSectionProps {
  profile: ProfileIntro;
  experiences: Experience[];
  skillCategories: SkillCategory[];
  awards: Award[];
  interests: Interest[];
}

export default function AboutSection({
  profile,
  experiences,
  skillCategories,
  awards,
  interests,
}: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  useScrollReveal(sectionRef, {
    threshold: 0.18,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <section
      ref={sectionRef}
      className="mx-auto flex w-full max-w-[960px] flex-col gap-20 px-6 py-16 md:px-10 lg:px-16"
    >
      <ProfileHero intro={profile} delay={0.1} />
      <ExperienceTimeline experiences={experiences} delay={0.2} />
      <SkillsSection categories={skillCategories} delay={0.18} />
      <AwardsList awards={awards} delay={0.35} />
      <InterestGrid interests={interests} delay={0.4} />
    </section>
  );
}


