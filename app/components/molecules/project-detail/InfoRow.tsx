// 정보 행 분자
"use client";

interface InfoRowProps {
  label: string;
  value: string;
  isLast?: boolean;
}

export default function InfoRow({ label, value, isLast = false }: InfoRowProps) {
  return (
    <div
      className={`flex justify-between gap-x-6 py-2 ${
        isLast ? "" : "border-b border-white/10"
      }`}
    >
      <p className="text-[#9b92c9] text-sm font-normal leading-normal">{label}</p>
      <p className="text-white text-sm font-normal leading-normal text-right">{value}</p>
    </div>
  );
}

