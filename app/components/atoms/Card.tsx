// Card 아톰은 공통 카드 레이아웃을 제공합니다.
"use client";

import type { PropsWithChildren, CSSProperties } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
  style?: CSSProperties;
}

export default function Card({ children, className = "", style }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/15 bg-[rgba(17,24,39,0.68)] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
