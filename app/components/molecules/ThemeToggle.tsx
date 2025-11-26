"use client";

import { useCallback } from "react";
import { useUI } from "@/app/context/UIContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, language } = useUI();

  const copy = {
    ko: {
      aria: theme === "dark" ? "라이트 테마로 변경" : "다크 테마로 변경",
      label: "테마",
      mode: theme === "dark" ? "다크" : "라이트",
    },
    en: {
      aria: theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
      label: "Theme",
      mode: theme === "dark" ? "Dark" : "Light",
    },
  } as const;

  const text = copy[language] ?? copy.ko;

  const handleClick = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-sm font-medium text-white transition hover:border-[hsl(var(--color-accent))] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      aria-label={text.aria}
    >
      <span aria-hidden className="text-base">
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
      <span className="hidden text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-white/70 sm:block">
        {text.label}
      </span>
      <span className="text-xs font-semibold text-white">{text.mode}</span>
    </button>
  );
}


