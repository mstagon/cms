// ProjectProcessItem 분자는 프로젝트 진행 단계와 관련 이미지를 한 묶음으로 표현합니다.
"use client";

import Image from "next/image";
import { stripImageParams } from "@/app/lib/utils/image";
import type { ProjectProcessStep } from "@/app/types/projects";

interface ProjectProcessItemProps {
  step: ProjectProcessStep;
  index: number;
}

export default function ProjectProcessItem({ step, index }: ProjectProcessItemProps) {
  const isReversed = step.alignment === "reversed";
  return (
    <div
      className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 ${isReversed ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}
      data-animate="scroll"
      style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
    >
      <div className={isReversed ? "md:order-2" : "md:order-1"}>
        <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
        <p className="leading-relaxed text-white/70">{step.description}</p>
      </div>
      <div className={isReversed ? "md:order-1" : "md:order-2"}>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white/5">
          <Image
            src={stripImageParams(step.image)}
            alt={step.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={index === 0}
          />
        </div>
      </div>
    </div>
  );
}

