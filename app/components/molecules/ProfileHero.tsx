// ProfileHero 분자는 소개 섹션 상단의 프로필 이미지를 포함한 인사 문구를 구성합니다.
"use client";

import Image from "next/image";
import type { ProfileIntro } from "@/app/types/about";

interface ProfileHeroProps {
  intro: ProfileIntro;
  delay?: number;
}

export default function ProfileHero({ intro, delay = 0.1 }: ProfileHeroProps) {
  return (
    <div
      className="flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16"
      data-animate="scroll"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex-shrink-0">
        <Image
          src={intro.imageUrl}
          alt={intro.imageAlt}
          width={160}
          height={160}
          className="h-40 w-40 rounded-full object-cover shadow-[0_0_0_8px_rgba(255,255,255,0.08)]"
          unoptimized
        />
      </div>
      <div className="flex flex-1 flex-col text-center md:text-left">
        <h1 className="whitespace-pre-line text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          {intro.headline}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white/70 md:text-xl">
          {intro.description}
        </p>
      </div>
    </div>
  );
}


