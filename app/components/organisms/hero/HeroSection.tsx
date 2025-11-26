// HeroSection 오거니즘은 메인 인트로 문구와 스크롤 인디케이터를 보여줍니다.
"use client";

import ScrollIndicator from "@/app/components/atoms/ScrollIndicator";
import { useUI } from "@/app/context/UIContext";
import HeroControls from "@/app/components/organisms/hero/HeroControls";

export default function HeroSection() {
  const { language } = useUI();
  const copy = {
    ko: {
      name: "Choi Min Seok",
      tagline: "THE FE DEVELOPER",
      description:
        "인터랙션과 퍼포먼스를 겸비한 웹 프로덕트를 만드는 프론트엔드 개발자입니다.",
    },
    en: {
      name: "Choi Min Seok",
      tagline: "THE FE DEVELOPER",
      description:
        "Frontend developer crafting immersive and high-performance web products.",
    },
  } as const;

  const text = copy[language] ?? copy.ko;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center text-white">
      <div className="pointer-events-none absolute right-6 top-6 flex justify-end sm:right-10 sm:top-10">
        <HeroControls className="pointer-events-auto" />
      </div>
      <p className="text-sm uppercase tracking-[0.5em] text-white/75">
        {text.name}
      </p>
      <h1 className="text-[15vw] font-bold leading-none text-white drop-shadow-[0_6px_18px_rgba(80,170,255,0.65)] md:text-[8vw]">
        {text.tagline}
      </h1>
      <p className="max-w-xl text-lg text-white/80">{text.description}</p>
      <ScrollIndicator className="absolute bottom-10 left-1/2 -translate-x-1/2" />
    </div>
  );
}
