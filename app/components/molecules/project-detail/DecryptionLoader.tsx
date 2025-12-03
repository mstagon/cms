// 파일 해독 로더 분자
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
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);

  // onComplete 콜백을 ref에 저장하여 최신 값 유지
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          // 다음 이벤트 루프에서 콜백 호출하여 렌더링 중 상태 업데이트 방지
          setTimeout(() => {
            onCompleteRef.current?.();
          }, 0);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (isComplete) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 p-4 mb-8">
      <div className="flex gap-6 justify-between">
        <p className="text-primary text-base font-medium leading-normal animate-pulse font-mono uppercase">
          DECRYPTING {filename}...
        </p>
      </div>
      <div className="rounded bg-[#3b3267]/30">
        <div className="h-2 rounded bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
      <p className="text-[#9b92c9] text-sm font-normal leading-normal font-mono">
        {progress < 100 ? "Loading project data stream..." : "Loading project data stream... Success."}
      </p>
    </div>
  );
}

