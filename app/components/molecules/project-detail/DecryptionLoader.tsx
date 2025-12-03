// 경로 이동 로더 분자
"use client";

import { useEffect, useState, useRef } from "react";

interface DecryptionLoaderProps {
  filename?: string;
  onComplete?: () => void;
}

export default function DecryptionLoader({
  filename = "FILE_STREAM_0X4A",
  onComplete,
}: DecryptionLoaderProps) {
  const [displayedPath, setDisplayedPath] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);

  // 프로젝트 경로 생성
  const projectPath = `/projects/${filename.toLowerCase().replace(/[^a-z0-9]/g, "-")}/index.tsx`;
  const fullPath = projectPath;

  // onComplete 콜백을 ref에 저장하여 최신 값 유지
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let charIndex = 0;
    const typingSpeed = 60; // ms per character
    const pauseAfterSegment = 200; // ms pause after each segment

    const typePath = () => {
      if (charIndex >= fullPath.length) {
        setIsComplete(true);
        setTimeout(() => {
          onCompleteRef.current?.();
        }, 500);
        return;
      }

      const nextChar = fullPath[charIndex];
      setDisplayedPath((prev) => prev + nextChar);
      charIndex++;

      // 경로 구분자(/) 다음에 약간의 딜레이
      if (nextChar === "/" && charIndex < fullPath.length) {
        setTimeout(typePath, pauseAfterSegment);
      } else {
        setTimeout(typePath, typingSpeed);
      }
    };

    const timer = setTimeout(typePath, 300);
    return () => clearTimeout(timer);
  }, [fullPath]);

  if (isComplete) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 p-4 mb-8 border border-primary/20 rounded-lg bg-white/5">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-primary font-mono text-sm">
          <span className="text-accent">$</span>
          <span>cd</span>
        </div>
        <div className="flex items-center gap-1 text-primary font-mono text-sm min-h-[1.25rem]">
          <span className="text-[#9b92c9]">{displayedPath}</span>
          <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" />
        </div>
      </div>
      <div className="flex items-center gap-2 text-[#9b92c9] text-xs font-mono">
        <span className="text-accent animate-pulse">→</span>
        <span>Navigating to project directory...</span>
      </div>
    </div>
  );
}

