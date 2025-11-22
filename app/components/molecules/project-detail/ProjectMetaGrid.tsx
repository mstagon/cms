// ProjectMetaGrid 분자는 프로젝트 개요 정보를 격자로 정리합니다.
import type { ProjectMetaItem } from "@/app/types/projects";

interface ProjectMetaGridProps {
  items: ProjectMetaItem[];
}

export default function ProjectMetaGrid({ items }: ProjectMetaGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            {item.label}
          </h3>
          <p className="text-white">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

