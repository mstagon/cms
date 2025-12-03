"use client";

import { useCallback, type ChangeEvent } from "react";
import { useUI, uiConstants } from "@/app/context/UIContext";
import { uiTexts } from "@/app/lib/i18n/texts";
import type { Language } from "@/app/types/ui";

export default function LanguageSelector() {
  const { language, setLanguage } = useUI();
  const texts = uiTexts[language] ?? uiTexts.ko;

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setLanguage(event.target.value as Language);
    },
    [setLanguage],
  );

  return (
    <div className="flex items-center gap-1.5">
      <span className="material-symbols-outlined text-base text-accent" aria-hidden>
        translate
      </span>
      <select
        aria-label={texts.language.select}
        value={language}
        onChange={handleChange}
        className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[0.65rem] font-medium text-primary transition-colors hover:border-primary/50 hover:bg-primary/15 focus:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-transparent"
      >
        {uiConstants.languages.map((lang) => (
          <option key={lang} value={lang} className="bg-[rgba(10,25,47,0.95)] text-primary">
            {texts.language.labels[lang]}
          </option>
        ))}
      </select>
    </div>
  );
}


