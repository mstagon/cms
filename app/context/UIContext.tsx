"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import type { Language, ThemeMode } from "@/app/types/ui";

const LANGUAGE_STORAGE_KEY = "ui:language";
const THEME_STORAGE_KEY = "ui:theme";

const SUPPORTED_LANGUAGES: Language[] = ["ko", "en"];
const SUPPORTED_THEMES: ThemeMode[] = ["dark", "light"];

interface UIContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

interface UIProviderProps extends PropsWithChildren {
  initialLanguage?: Language;
  initialTheme?: ThemeMode;
}

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({
  children,
  initialLanguage = "ko",
  initialTheme = "dark",
}: UIProviderProps) {
  const [language, internalSetLanguage] = useState<Language>(initialLanguage);
  const [theme, internalSetTheme] = useState<ThemeMode>(initialTheme);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language | null;
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;

    if (storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage)) {
      internalSetLanguage(storedLanguage);
    }

    if (storedTheme && SUPPORTED_THEMES.includes(storedTheme)) {
      internalSetTheme(storedTheme);
    }

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (!isHydrated || typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.cookie = `lang=${language}; path=/; max-age=${60 * 60 * 24 * 365}`;
  }, [language, isHydrated]);

  useEffect(() => {
    if (!isHydrated || typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    document.cookie = `theme=${theme}; path=/; max-age=${60 * 60 * 24 * 365}`;
  }, [theme, isHydrated]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
  }, [theme]);

  const setLanguage = useCallback((value: Language) => {
    if (!SUPPORTED_LANGUAGES.includes(value)) {
      return;
    }
    internalSetLanguage(value);
  }, []);

  const setTheme = useCallback((value: ThemeMode) => {
    if (!SUPPORTED_THEMES.includes(value)) {
      return;
    }
    internalSetTheme(value);
  }, []);

  const toggleTheme = useCallback(() => {
    internalSetTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const contextValue = useMemo<UIContextValue>(
    () => ({
      language,
      setLanguage,
      theme,
      setTheme,
      toggleTheme,
    }),
    [language, setLanguage, theme, setTheme, toggleTheme],
  );

  return <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI 훅은 UIProvider 내부에서만 사용할 수 있습니다.");
  }
  return context;
}

export const uiConstants = {
  languages: SUPPORTED_LANGUAGES,
  themes: SUPPORTED_THEMES,
} as const;


