// ProjectFeatureCard 분자는 핵심 기능 정보를 강조 카드로 보여줍니다.
import type { ProjectFeatureItem } from "@/app/types/projects";

interface ProjectFeatureCardProps {
  feature: ProjectFeatureItem;
  index: number;
}

export default function ProjectFeatureCard({ feature, index }: ProjectFeatureCardProps) {
  return (
    <div
      className="rounded-lg bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20"
      data-animate="scroll"
      style={{ transitionDelay: `${0.2 + index * 0.08}s` }}
    >
      <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
      <p className="text-sm leading-relaxed text-white/70">{feature.description}</p>
    </div>
  );
}

