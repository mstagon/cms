// ScrollIndicator 아톰은 아래로 스크롤하라는 안내 텍스트와 아이콘을 출력합니다.
"use client";

interface ScrollIndicatorProps {
  className?: string;
}

export default function ScrollIndicator({ className = "" }: ScrollIndicatorProps) {
  return (
    <div
      className={`pointer-events-none flex flex-col items-center gap-2 text-xs uppercase tracking-[0.4em] text-white ${className}`}
    >
      <span>Scroll</span>
      <span className="animate-bounce text-xl">↓</span>
    </div>
  );
}


