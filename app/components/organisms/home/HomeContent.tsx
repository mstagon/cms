"use client";

import { useEffect, useState } from "react";
import HeroSection from "@/app/components/organisms/hero/HeroSection";
import AboutSection from "@/app/components/organisms/about/AboutSection";
import { useUI } from "@/app/context/UIContext";
import type { AboutApiResponse } from "@/app/lib/api/about";
import type { Language } from "@/app/types/ui";

interface HomeContentProps {
  initialAbout: AboutApiResponse;
  initialLanguage: Language;
}

export default function HomeContent({
  initialAbout,
  initialLanguage,
}: HomeContentProps) {
  const { language } = useUI();
  const [aboutData, setAboutData] = useState<AboutApiResponse>(initialAbout);
  const [currentLanguage, setCurrentLanguage] =
    useState<Language>(initialLanguage);
  const isUpdatingLanguage = language !== currentLanguage;

  useEffect(() => {
    if (language === currentLanguage) {
      return;
    }

    let cancelled = false;

    const loadTranslatedData = async () => {
      try {
        const aboutResponse = await fetch(`/api/about?lang=${language}`, {
          cache: "no-store",
        });

        if (!aboutResponse.ok) {
          throw new Error("콘텐츠를 불러오지 못했습니다.");
        }

        const aboutJson = (await aboutResponse.json()) as AboutApiResponse;

        if (!cancelled) {
          setAboutData(aboutJson);
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
      <div className="relative z-20 space-y-24 bg-background-dark">
        <AboutSection
          profile={aboutData.profile}
          experiences={aboutData.experiences}
          skillCategories={aboutData.skillCategories}
          awards={aboutData.awards}
          interests={aboutData.interests}
        />
      </div>

    </div>
  );
}