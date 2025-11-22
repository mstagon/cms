// HeroSection 오거니즘은 메인 인트로 문구와 스크롤 인디케이터를 보여줍니다.
"use client";

import ScrollIndicator from "@/app/components/atoms/ScrollIndicator";

export default function HeroSection() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center text-white">
      <p className="text-sm uppercase tracking-[0.5em] text-white/75">
        Choi Min Seok
      </p>
      <h1 className="text-[15vw] leading-none text-white drop-shadow-[0_6px_18px_rgba(80,170,255,0.65)] md:text-[8vw]">
        THE FE DEVELOPER
      </h1>
      <p className="max-w-xl text-lg text-white/80">
        인터랙션과 퍼포먼스를 겸비한 웹 프로덕트를 만드는 프론트엔드 개발자입니다.
      </p>
      <ScrollIndicator className="absolute bottom-10 left-1/2 -translate-x-1/2" />
    </div>
  );
}


