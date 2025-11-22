// ProjectDetailSection 분자는 상세 페이지 내 섹션 래퍼와 타이틀을 일관되게 제공합니다.
import type { PropsWithChildren, ReactNode } from "react";

interface ProjectDetailSectionProps extends PropsWithChildren {
  title?: string;
  description?: ReactNode;
  delay?: number;
  className?: string;
  contentClassName?: string;
}

export default function ProjectDetailSection({
  title,
  description,
  delay = 0.3,
  className = "",
  contentClassName = "",
  children,
}: ProjectDetailSectionProps) {
  return (
    <section
      className={`space-y-6 ${className}`}
      data-animate="scroll"
      style={{ transitionDelay: `${delay}s` }}
    >
      {title ? (
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {description ? (
            <div className="text-base leading-relaxed text-white/70">{description}</div>
          ) : null}
        </div>
      ) : null}
      <div className={contentClassName}>{children}</div>
    </section>
  );
}

