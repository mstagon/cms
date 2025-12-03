// 아키텍처 섹션 분자
"use client";

import SectionHeader from "@/app/components/molecules/project-detail/SectionHeader";

interface ArchitectureSectionProps {
  description?: string;
  diagrams?: Array<{
    title?: string;
    image: string;
    alt?: string;
  }>;
}

export default function ArchitectureSection({
  description,
  diagrams = [],
}: ArchitectureSectionProps) {
  if (!description && diagrams.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <SectionHeader title="// ARCHITECTURE.diagram" />
      {description && (
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-[#c5c0e5]">
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      )}
      {diagrams.length > 0 && (
        <div className="space-y-6">
          {diagrams.map((diagram, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 overflow-hidden">
              {diagram.title && (
                <h4 className="font-bold text-white mb-3 text-sm font-mono">
                  {diagram.title}
                </h4>
              )}
              <div className="relative w-full aspect-video bg-black/20 rounded overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={diagram.image}
                  alt={diagram.alt || diagram.title || `Architecture diagram ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

