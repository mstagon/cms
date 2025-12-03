// 프로젝트 헤더 분자
"use client";

interface ProjectHeaderProps {
  title: string;
  subtitle?: string;
  links?: {
    github?: string;
    site?: string;
    docs?: string;
  };
}

export default function ProjectHeader({ title, subtitle, links }: ProjectHeaderProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3 p-4 border-b border-primary/20 mb-8">
      <div className="flex min-w-72 flex-col gap-3">
        <p className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter">
          Project: {title}
        </p>
        {subtitle && (
          <p className="text-[#9b92c9] text-base font-normal leading-normal">
            {subtitle}
          </p>
        )}
      </div>
      {(links?.github || links?.site || links?.docs) && (
        <div className="flex items-center gap-4">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <span className="text-sm font-mono">GitHub</span>
              <svg
                className="w-4 h-4"
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
            </a>
          )}
          {links.site && (
            <a
              href={links.site}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <span className="text-sm font-mono">Site</span>
              <svg
                className="w-4 h-4"
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
            </a>
          )}
          {links.docs && (
            <a
              href={links.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <span className="text-sm font-mono">Docs</span>
              <svg
                className="w-4 h-4"
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
            </a>
          )}
        </div>
      )}
    </div>
  );
}

