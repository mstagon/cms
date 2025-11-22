// SectionHeading 아톰은 제목과 부제목을 일관된 스타일로 출력합니다.
"use client";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <header className={`flex flex-col gap-2 ${alignment}`}>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-sm uppercase tracking-[0.32em] text-white/60">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
