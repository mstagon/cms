// 프로젝트 사이드바 유기체
"use client";

import InfoRow from "@/app/components/molecules/project-detail/InfoRow";
import TechBadge from "@/app/components/atoms/TechBadge";
import TableOfContents from "@/app/components/molecules/project-detail/TableOfContents";

interface TableOfContentsItem {
  id: string;
  label: string;
  order: number;
}

interface ProjectSidebarProps {
  timeframe?: string;
  platform?: string;
  type?: string;
  techStack?: string[];
  links?: {
    github?: string;
    site?: string;
    docs?: string;
  };
  tocItems?: TableOfContentsItem[];
}

export default function ProjectSidebar({
  timeframe,
  platform,
  type,
  techStack = [],
  links,
  tocItems = [],
}: ProjectSidebarProps) {
  return (
    <aside className="md:col-span-1 flex flex-col gap-8">
      <div className="flex flex-col gap-8">
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

        {/* Links */}
        <section>
          <h3 className="text-lg font-bold text-primary mb-3 font-mono">LINKS</h3>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
            {/* GitHub Link */}
            {links?.github ? (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all group"
              >
                <svg
                  className="w-5 h-5 text-primary group-hover:text-accent transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm font-mono text-primary group-hover:text-accent transition-colors">
                  GitHub
                </span>
              </a>
            ) : (
              <div className="flex items-center gap-3 p-3 rounded border border-white/10 bg-white/5 opacity-50 cursor-not-allowed">
                <svg
                  className="w-5 h-5 text-white/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-sm font-mono text-white/30">GitHub</span>
              </div>
            )}

            {/* Live Demo Link */}
            {links?.site ? (
              <a
                href={links.site}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded border border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all group"
              >
                <svg
                  className="w-5 h-5 text-primary group-hover:text-accent transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span className="text-sm font-mono text-primary group-hover:text-accent transition-colors">
                  Live Demo
                </span>
              </a>
            ) : (
              <div className="flex items-center gap-3 p-3 rounded border border-white/10 bg-white/5 opacity-50 cursor-not-allowed">
                <svg
                  className="w-5 h-5 text-white/30"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span className="text-sm font-mono text-white/30">Live Demo</span>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Table of Contents */}
      {tocItems.length > 0 && (
        <TableOfContents items={tocItems} />
      )}
    </aside>
  );
}

