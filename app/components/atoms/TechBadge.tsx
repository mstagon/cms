// 기술 스택 배지 아톰
"use client";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export default function TechBadge({ name, className = "" }: TechBadgeProps) {
  return (
    <span
      className={`bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded ${className}`}
    >
      {name}
    </span>
  );
}

