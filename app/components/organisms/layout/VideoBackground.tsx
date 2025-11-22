// VideoBackground 오거니즘은 페이지 전역에 고정된 배경 영상을 렌더링합니다.
"use client";

export default function VideoBackground() {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <video
        autoPlay={!prefersReduced}
        playsInline
        loop={!prefersReduced}
        muted
        preload="metadata"
        aria-hidden="true"
        className="h-full w-full object-cover"
      >
        <source src="/background1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
    </div>
  );
}


