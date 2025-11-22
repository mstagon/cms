// ProjectDetailHero 분자는 상세 페이지 상단의 대표 이미지를 출력합니다.
"use client";

import Image from "next/image";
import { stripImageParams } from "@/app/lib/utils/image";

interface ProjectDetailHeroProps {
  src: string;
  alt: string;
  delay?: number;
  className?: string;
}

export default function ProjectDetailHero({
  src,
  alt,
  delay = 0.2,
  className = "",
}: ProjectDetailHeroProps) {
  return (
    <div
      className={className}
      data-animate="scroll"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#1E1E1E]">
        <Image
          src={stripImageParams(src)}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 ease-out"
          priority
          sizes="(min-width: 768px) 75vw, 100vw"
        />
      </div>
    </div>
  );
}

