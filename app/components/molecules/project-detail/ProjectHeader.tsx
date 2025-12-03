// 프로젝트 헤더 분자
"use client";

interface ProjectHeaderProps {
  title: string;
  subtitle?: string;
  links?: {
    github?: string;
    site?: string;
    docs?: string;
  };
}

export default function ProjectHeader({ title, subtitle }: ProjectHeaderProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-4 border-b border-primary/20 mb-8">
      <div className="flex min-w-72 flex-col gap-3">
        <p className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter">
          Project: {title}
        </p>
        {subtitle && (
          <p className="text-[#9b92c9] text-base font-normal leading-normal">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

