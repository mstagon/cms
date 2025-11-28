"use client";

import { useEffect, useState } from "react";

interface AboutVisualPanelProps {
  isLoading?: boolean;
  loadingMessage?: string;
}

export default function AboutVisualPanel({
  isLoading = false,
  loadingMessage,
}: AboutVisualPanelProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const duration = 2000; // 2초 동안 로딩
      const interval = 16; // 약 60fps
      const increment = 100 / (duration / interval);

      const timer = setInterval(() => {
        setProgress((prev) => {
          const next = prev + increment;
          if (next >= 100) {
            clearInterval(timer);
            return 100;
          }
          return next;
        });
      }, interval);

      return () => clearInterval(timer);
    } else {
      setProgress(0);
    }
  }, [isLoading]);

  return (
    <div className="relative flex h-64 w-64 items-center justify-center border-2 border-primary/40 bg-[rgba(10,25,47,0.8)] text-primary shadow-[0_0_80px_rgba(0,255,149,0.3)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,149,0.18),transparent)]" />
      {isLoading ? (
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-24 w-24">
            {/* 원형 프로그레스 바 */}
            <svg
              className="h-24 w-24 -rotate-90 transform"
              viewBox="0 0 100 100"
            >
              {/* 배경 원 */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(0, 246, 255, 0.2)"
                strokeWidth="6"
              />
              {/* 진행 원 */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="transition-all duration-150 ease-out"
                style={{
                  filter: "drop-shadow(0 0 8px var(--color-accent))",
                }}
              />
            </svg>
            {/* 중앙 퍼센트 텍스트 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-lg font-bold text-primary">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
          {loadingMessage && (
            <p className="font-mono text-xs text-primary tracking-wider">
              {loadingMessage}
            </p>
          )}
        </div>
      ) : (
        <span
          className="material-symbols-outlined text-8xl animate-text-stream"
          aria-hidden
        >
          data_object
        </span>
      )}
      <div className="absolute -top-2 -left-2 h-4 w-4 border-l-2 border-t-2 border-primary" />
      <div className="absolute -top-2 -right-2 h-4 w-4 border-r-2 border-t-2 border-primary" />
      <div className="absolute -bottom-2 -left-2 h-4 w-4 border-l-2 border-b-2 border-primary" />
      <div className="absolute -bottom-2 -right-2 h-4 w-4 border-r-2 border-b-2 border-primary" />
    </div>
  );
}
