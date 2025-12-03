"use client";

import { useEffect, useState } from "react";

interface AboutVisualPanelProps {
  isLoading?: boolean;
  loadingMessage?: string;
  initialProgress?: number; // 초기 진행률 (0-100)
}

export default function AboutVisualPanel({
  isLoading = false,
  loadingMessage,
  initialProgress = 0,
}: AboutVisualPanelProps) {
  const [progress, setProgress] = useState(initialProgress);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setProgress(initialProgress);
      const duration = 5000; // 5초 동안 로딩 (더 긴 시간으로 조정)
      const interval = 16; // 약 60fps
      const remainingProgress = 100 - initialProgress;
      const increment = remainingProgress / (duration / interval);

      const timer = setInterval(() => {
        setProgress((prev) => {
          const next = prev + increment;
          if (next >= 100) {
            clearInterval(timer);
            setIsComplete(true);
            // 완료 애니메이션 후 이벤트 발송 (자연스러운 전환)
            setTimeout(() => {
              window.dispatchEvent(
                new CustomEvent("visualPanelLoadingComplete")
              );
            }, 800); // 완료 효과를 보여준 후 이벤트 발송
            return 100;
          }
          return next;
        });
      }, interval);

      return () => clearInterval(timer);
    } else {
      setProgress(initialProgress);
      setIsComplete(false);
    }
  }, [isLoading, initialProgress]);

  return (
    <div className={`relative flex h-64 w-64 items-center justify-center border-2 transition-all duration-500 ${
      isComplete 
        ? "border-accent bg-[rgba(10,25,47,0.95)] shadow-[0_0_120px_rgba(0,254,149,0.6)]" 
        : "border-primary/40 bg-[rgba(10,25,47,0.8)] shadow-[0_0_80px_rgba(0,255,149,0.3)]"
    } text-primary`}>
      <div className={`absolute inset-0 transition-all duration-500 ${
        isComplete 
          ? "bg-[radial-gradient(circle_at_center,rgba(0,254,149,0.3),transparent)]" 
          : "bg-[radial-gradient(circle_at_center,rgba(0,255,149,0.18),transparent)]"
      }`} />
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
                className={`transition-all duration-150 ease-out ${
                  isComplete ? "animate-pulse" : ""
                }`}
                style={{
                  filter: isComplete 
                    ? "drop-shadow(0 0 16px var(--color-accent))" 
                    : "drop-shadow(0 0 8px var(--color-accent))",
                }}
              />
            </svg>
            {/* 중앙 텍스트 - 완료 시 체크마크 또는 COMPLETE 표시 */}
            <div className="absolute inset-0 flex items-center justify-center">
              {isComplete ? (
                <div className="flex flex-col items-center gap-1">
                  <svg
                    className="w-8 h-8 text-accent animate-scale-in"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-mono text-xs font-bold text-accent tracking-wider animate-fade-in">
                    COMPLETE
                  </span>
                </div>
              ) : (
              <span className="font-mono text-lg font-bold text-primary">
                {Math.round(progress)}%
              </span>
              )}
            </div>
          </div>
          {loadingMessage && !isComplete && (
            <p className="font-mono text-xs text-primary tracking-wider">
              {loadingMessage}
            </p>
          )}
          {isComplete && (
            <p className="font-mono text-xs text-accent tracking-wider animate-fade-in">
              DATA_STREAM.LOG ACCESSED
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
      <div className={`absolute -top-2 -left-2 h-4 w-4 border-l-2 border-t-2 transition-colors duration-500 ${
        isComplete ? "border-accent" : "border-primary"
      }`} />
      <div className={`absolute -top-2 -right-2 h-4 w-4 border-r-2 border-t-2 transition-colors duration-500 ${
        isComplete ? "border-accent" : "border-primary"
      }`} />
      <div className={`absolute -bottom-2 -left-2 h-4 w-4 border-l-2 border-b-2 transition-colors duration-500 ${
        isComplete ? "border-accent" : "border-primary"
      }`} />
      <div className={`absolute -bottom-2 -right-2 h-4 w-4 border-r-2 border-b-2 transition-colors duration-500 ${
        isComplete ? "border-accent" : "border-primary"
      }`} />
    </div>
  );
}
