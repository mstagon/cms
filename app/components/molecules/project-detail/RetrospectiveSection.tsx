// 회고 섹션 분자
"use client";

import SectionHeader from "@/app/components/molecules/project-detail/SectionHeader";

interface RetrospectiveSectionProps {
  content: string;
}

export default function RetrospectiveSection({
  content,
}: RetrospectiveSectionProps) {
  return (
    <section className="space-y-4">
      <SectionHeader title="// RETROSPECTIVE.md" />
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-[#c5c0e5]">
        <p className="text-sm leading-relaxed whitespace-pre-line">{content}</p>
      </div>
    </section>
  );
}

