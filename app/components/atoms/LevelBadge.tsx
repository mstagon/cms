// LevelBadge 아톰은 기술 숙련도 텍스트를 컬러와 함께 보여줍니다.
"use client";

interface LevelBadgeProps {
  label: string;
  color: string;
}

export default function LevelBadge({ label, color }: LevelBadgeProps) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em]"
      style={{
        color,
        borderColor: color,
        backgroundColor: "rgba(15, 23, 42, 0.72)",
      }}
    >
      {label}
    </span>
  );
}


