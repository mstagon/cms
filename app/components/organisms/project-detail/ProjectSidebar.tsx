// 프로젝트 사이드바 유기체
"use client";

import InfoRow from "@/app/components/molecules/project-detail/InfoRow";
import TechBadge from "@/app/components/atoms/TechBadge";
import ProgressBar from "@/app/components/atoms/ProgressBar";

interface ProjectSidebarProps {
  timeframe?: string;
  platform?: string;
  type?: string;
  techStack?: string[];
  performance?: {
    pageLoadSpeed?: { value: number; improvement?: string };
  };
}

export default function ProjectSidebar({
  timeframe,
  platform,
  type,
  techStack = [],
  performance,
}: ProjectSidebarProps) {
  return (
    <aside className="md:col-span-1 flex flex-col gap-8">
      {/* Project Info */}
      {(timeframe || platform || type) && (
        <section>
          <h3 className="text-lg font-bold text-primary mb-3 font-mono">FILE_INFO</h3>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            {timeframe && <InfoRow label="TIMEFRAME" value={timeframe} />}
            {platform && <InfoRow label="PLATFORM" value={platform} />}
            {type && <InfoRow label="TYPE" value={type} isLast />}
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {techStack.length > 0 && (
        <section>
          <h3 className="text-lg font-bold text-primary mb-3 font-mono">TECH_STACK</h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <TechBadge key={index} name={tech} />
            ))}
          </div>
        </section>
      )}

      {/* Performance Metrics */}
      {performance && (
        <section>
          <h3 className="text-lg font-bold text-primary mb-3 font-mono">PERFORMANCE</h3>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-4">
            {performance.pageLoadSpeed && (
              <div>
                <p className="text-sm text-[#9b92c9] mb-1">Page Load Speed</p>
                <ProgressBar
                  value={performance.pageLoadSpeed.value}
                  showLabel
                  label={performance.pageLoadSpeed.improvement}
                />
              </div>
            )}
          </div>
        </section>
      )}
    </aside>
  );
}

