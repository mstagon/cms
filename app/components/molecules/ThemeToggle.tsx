"use client";

import { useCallback } from "react";
import { useUI } from "@/app/context/UIContext";
import { uiTexts } from "@/app/lib/i18n/texts";

export default function ThemeToggle() {
  const { theme, toggleTheme, language } = useUI();
  const texts = uiTexts[language] ?? uiTexts.ko;

  const handleClick = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 p-1.5 text-primary transition-colors hover:border-primary/50 hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-transparent"
      aria-label={theme === "dark" ? texts.theme.switchToLight : texts.theme.switchToDark}
    >
      <span className="material-symbols-outlined text-sm text-accent" aria-hidden>
        {theme === "dark" ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
}


