// 진행률 바 아톰
"use client";

interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
  showLabel?: boolean;
  label?: string;
}

export default function ProgressBar({
  value,
  className = "",
  showLabel = false,
  label,
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="rounded bg-primary/20">
        <div
          className="bg-primary h-2.5 rounded transition-all duration-500"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
      {showLabel && label && (
        <p className="text-xs text-right mt-1 text-white">{label}</p>
      )}
    </div>
  );
}

