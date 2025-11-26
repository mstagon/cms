"use client";

import LanguageSelector from "@/app/components/molecules/LanguageSelector";
import ThemeToggle from "@/app/components/molecules/ThemeToggle";

interface HeroControlsProps {
  className?: string;
}

export default function HeroControls({ className = "" }: HeroControlsProps) {
  return (
    <div
      className={`pointer-events-auto flex items-center gap-3 rounded-full border border-white/15 bg-black/40 px-3 py-2 backdrop-blur-md ${className}`}
    >
      <LanguageSelector />
      <div className="hidden h-6 w-px bg-white/15 sm:block" />
      <ThemeToggle />
    </div>
  );
}


