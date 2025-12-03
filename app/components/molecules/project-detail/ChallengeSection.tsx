// 문제 해결 섹션 분자
"use client";

import SectionHeader from "@/app/components/molecules/project-detail/SectionHeader";

interface ChallengeSectionProps {
  title: string;
  asIs: string;
  toBe: string;
  result?: string;
  githubLink?: string;
  docsLink?: string;
}

export default function ChallengeSection({
  title,
  asIs,
  toBe,
  result,
  githubLink,
  docsLink,
}: ChallengeSectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <SectionHeader title={title} />
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary hover:text-accent transition-colors"
            title="GitHub"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        )}
        {docsLink && (
          <a
            href={docsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary hover:text-accent transition-colors"
            title="Documentation"
          >
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        )}
      </div>
      <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-6 text-[#c5c0e5]">
        <div>
          <h4 className="font-bold text-white mb-2 text-sm font-mono">AS-IS</h4>
          <p className="text-sm leading-relaxed">{asIs}</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2 text-sm font-mono">TO-BE</h4>
          <p className="text-sm leading-relaxed">{toBe}</p>
        </div>
        {result && (
          <div className="pt-4 border-t border-white/10">
            <h4 className="font-bold text-accent mb-2 text-sm font-mono">RESULT</h4>
            <p className="text-sm leading-relaxed text-accent">{result}</p>
          </div>
        )}
      </div>
    </section>
  );
}

