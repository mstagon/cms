"use client";

import { useEffect, useState } from "react";
import FooterSection from "@/app/components/organisms/layout/FooterSection";
import type { FooterInfo } from "@/app/types/layout";
import type { Language } from "@/app/types/ui";
import { useUI } from "@/app/context/UIContext";

interface FooterContainerProps {
  initialInfo: FooterInfo;
  initialLanguage: Language;
  year: number;
}

export default function FooterContainer({
  initialInfo,
  initialLanguage,
  year,
}: FooterContainerProps) {
  const { language } = useUI();
  const [info, setInfo] = useState<FooterInfo>(initialInfo);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    if (language === currentLanguage) {
      return;
    }

    let cancelled = false;
    const fetchFooter = async () => {
      try {
        const response = await fetch(`/api/footer?lang=${language}`, { cache: "no-store" });
        if (!response.ok) {
          throw new Error("Failed to load footer info");
        }
        const data = (await response.json()) as FooterInfo;
        if (!cancelled) {
          setInfo(data);
          setCurrentLanguage(language);
        }
      } catch (error) {
        // 오류는 사용자 경험을 방해하지 않도록 콘솔에만 기록합니다.
        console.error(error);
      }
    };

    fetchFooter();

    return () => {
      cancelled = true;
    };
  }, [language, currentLanguage]);

  return <FooterSection info={info} year={year} />;
}


