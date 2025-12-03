// TechPillList는 하이라이트 기술 스택을 필 형태로 보여줍니다.
"use client";

interface TechPillListProps {
  items: string[];
}

export default function TechPillList({ items }: TechPillListProps) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:gap-x-6">
      {items.map((tech) => (
        <div
          key={tech}
          className="tech-pill border-2 border-accent bg-accent/10 px-4 py-2 text-sm font-bold text-accent"
        >
          {tech}
        </div>
      ))}
    </div>
  );
}

