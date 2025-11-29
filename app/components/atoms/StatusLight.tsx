// 상태 표시등 아톰
"use client";

interface StatusLightProps {
  status: "online" | "locked";
  className?: string;
}

export default function StatusLight({ status, className = "" }: StatusLightProps) {
  if (status === "locked") {
    return (
      <div
        className={`w-1.5 h-1.5 rounded-full bg-red-500 ${className}`}
        style={{
          boxShadow: "0 0 4px rgb(239 68 68), 0 0 8px rgb(239 68 68)",
        }}
      />
    );
  }

  return (
    <div
      className={`w-1.5 h-1.5 rounded-full bg-accent ${className}`}
      style={{
        boxShadow: "0 0 4px rgb(0, 246, 255), 0 0 8px rgb(0, 246, 255)",
      }}
    />
  );
}

