// 개요 섹션 분자
"use client";

import SectionHeader from "@/app/components/molecules/project-detail/SectionHeader";

interface OverviewSectionProps {
  description: string;
  stats?: {
    totalUsers?: string;
    dau?: string;
    annualNewUsers?: string;
    vision?: string;
  };
}

export default function OverviewSection({
  description,
  stats,
}: OverviewSectionProps) {
  return (
    <section className="space-y-4">
      <SectionHeader title="// OVERVIEW.log" />
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4 text-[#c5c0e5]">
        <p className="text-sm leading-relaxed">{description}</p>
        {stats && (
          <div className="pt-4 border-t border-white/10 space-y-2">
            {stats.totalUsers && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-primary">Total Users:</span>
                <span className="text-sm font-semibold text-accent">{stats.totalUsers}</span>
              </div>
            )}
            {stats.dau && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-primary">DAU:</span>
                <span className="text-sm font-semibold text-accent">{stats.dau}</span>
              </div>
            )}
            {stats.annualNewUsers && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-primary">Annual New Users:</span>
                <span className="text-sm font-semibold text-accent">{stats.annualNewUsers}</span>
              </div>
            )}
            {stats.vision && (
              <div className="pt-2">
                <p className="text-xs font-mono text-primary/70 italic">{stats.vision}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

