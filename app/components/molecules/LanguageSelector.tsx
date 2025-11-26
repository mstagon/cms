"use client";

import { useCallback, type ChangeEvent } from "react";
import { useUI, uiConstants } from "@/app/context/UIContext";
import type { Language } from "@/app/types/ui";

const LANGUAGE_LABELS: Record<Language, string> = {
  ko: "한국어",
  en: "English",
};

export default function LanguageSelector() {
  const { language, setLanguage } = useUI();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setLanguage(event.target.value as Language);
    },
    [setLanguage],
  );

  const labelText = language === "ko" ? "언어" : "Language";
  const ariaLabel = language === "ko" ? "언어 선택" : "Select language";

  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-white/60 sm:block">
        {labelText}
      </span>
      <select
        aria-label={ariaLabel}
        value={language}
        onChange={handleChange}
        className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        {uiConstants.languages.map((lang) => (
          <option key={lang} value={lang} className="text-black">
            {LANGUAGE_LABELS[lang]}
          </option>
        ))}
      </select>
    </div>
  );
}


