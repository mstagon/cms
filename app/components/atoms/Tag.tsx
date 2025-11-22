// Tag 아톰은 간단한 배지 형태의 텍스트를 표현합니다.
"use client";

import type { PropsWithChildren } from "react";

interface TagProps extends PropsWithChildren {
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ${className}`}
    >
      {children}
    </span>
  );
}
