// ProjectDetailTechStack 분자는 사용 기술 목록을 태그 형태로 보여줍니다.
import Tag from "@/app/components/atoms/Tag";

interface ProjectDetailTechStackProps {
  items: string[];
}

export default function ProjectDetailTechStack({ items }: ProjectDetailTechStackProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((stack) => (
        <Tag key={stack} className="border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white">
          {stack}
        </Tag>
      ))}
    </div>
  );
}

