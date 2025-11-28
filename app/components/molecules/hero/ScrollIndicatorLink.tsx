// ScrollIndicatorLink는 하단 스크롤 유도 버튼을 렌더링합니다.
"use client";

import type { RefObject } from "react";

interface ScrollIndicatorLinkProps {
  label: string;
  linkRef: RefObject<HTMLAnchorElement | null>;
}

export default function ScrollIndicatorLink({ label, linkRef }: ScrollIndicatorLinkProps) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <a
        href="#about"
        id="scroll-link"
        ref={linkRef}
        className="group flex flex-col items-center gap-2 text-text-light transition-colors hover:text-accent"
      >
        <span className="text-xs font-medium tracking-[0.3em] group-hover:text-shadow-neon-accent">
          {label}
        </span>
        <svg
          className="h-12 w-12 animate-bounce text-current"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M6 7l6 6 6-6" />
          <path d="M6 13l6 6 6-6" />
        </svg>
      </a>
    </div>
  );
}

