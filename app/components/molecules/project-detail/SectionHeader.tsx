// 섹션 헤더 분자
"use client";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export default function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <h2
      className={`text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 font-mono ${className}`}
    >
      {title}
    </h2>
  );
}

