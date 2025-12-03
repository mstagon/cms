// OtherProjectCard 분자는 간단한 프로젝트 링크 카드를 출력합니다.
"use client";

import Card from "@/app/components/atoms/Card";

interface OtherProjectCardProps {
  title: string;
  description: string;
  href: string;
  delay: number;
}

export default function OtherProjectCard({
  title,
  description,
  delay,
}: OtherProjectCardProps) {
  return (
    <Card
      className="group relative flex flex-col justify-between p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[hsl(var(--color-accent))] hover:shadow-lg hover:shadow-[hsl(var(--color-accent))/0.2]"
      data-animate="scroll"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="space-y-2 text-left">
        <h4 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[hsl(var(--color-accent))]">
          {title}
        </h4>
        <p className="text-sm text-white/60">{description}</p>
      </div>
      <div className="mt-4 flex items-center justify-end text-white/60 transition-colors group-hover:text-[hsl(var(--color-accent))]">
        <span aria-hidden className="text-xl transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Card>
  );
}


