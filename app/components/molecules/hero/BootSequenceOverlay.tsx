// BootSequenceOverlay는 부팅 로그 텍스트를 순차 애니메이션으로 출력합니다.
"use client";

import type { BootLine } from "@/app/types/hero";

interface BootSequenceOverlayProps {
  lines: BootLine[];
}

export default function BootSequenceOverlay({ lines }: BootSequenceOverlayProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-40 flex flex-col items-center justify-center bg-background-dark animate-systemBoot">
      <div className="w-full max-w-lg space-y-4 p-4 font-mono text-accent">
        {lines.map((line) => (
          <p
            key={`${line.content}-${line.delay}`}
            className={`animate-fadeIn opacity-0 ${line.className ?? ""}`}
            style={{ animationDelay: `${line.delay}s` }}
          >
            {line.content}
            {line.highlight ? (
              <>
                {" "}
                <span className={line.highlight.className}>
                  {line.highlight.text}
                </span>
              </>
            ) : null}
          </p>
        ))}
      </div>
    </div>
  );
}

