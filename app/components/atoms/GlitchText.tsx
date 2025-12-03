// 글로우 텍스트 아톰
"use client";

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlitchText({ children, className = "" }: GlitchTextProps) {
  return (
    <span className={`glitch-text relative ${className}`} data-text={String(children)}>
      {children}
    </span>
  );
}

