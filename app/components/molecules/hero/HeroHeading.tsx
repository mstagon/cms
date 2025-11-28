// HeroHeading은 역할 텍스트와 글리치 타이틀을 함께 렌더링합니다.
"use client";

interface HeroHeadingProps {
  role: string;
  tagline: string;
}

export default function HeroHeading({ role, tagline }: HeroHeadingProps) {
  return (
    <div className="flex flex-col gap-4">
      <p
        className="animate-glitch text-lg font-bold tracking-[0.3em] text-accent text-shadow-neon-accent md:text-2xl"
        style={{ animationDelay: "0.2s" }}
      >
        {role}
      </p>
      <h1 className="text-5xl font-black leading-tight tracking-tighter text-text-main sm:text-7xl md:text-8xl lg:text-9xl">
        <span className="glitch-effect" data-text={tagline}>
          {tagline}
        </span>
      </h1>
    </div>
  );
}

