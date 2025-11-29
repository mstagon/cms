// 닫기 버튼 아톰
"use client";

interface CloseButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function CloseButton({ onClick, className = "" }: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center p-2 text-white/80 hover:text-white transition-colors ${className}`}
      aria-label="Close"
    >
      <span className="material-symbols-outlined text-2xl">close</span>
    </button>
  );
}

