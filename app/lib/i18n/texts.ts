// 모든 UI 텍스트를 중앙에서 관리합니다.
import type { Language } from "@/app/types/ui";
import type { BootLine } from "@/app/types/hero";

// Hero 섹션 텍스트
export interface HeroTexts {
  role: string;
  tagline: string;
  glitchText: string;
  glitchMessage: string;
  transitionText: string;
  scroll: string;
  bootSequence: BootLine[];
  successMessage: {
    ko: string;
    en: string;
  };
}

// About 섹션 텍스트
export interface AboutTexts {
  brand: string;
  resume: string;
  initLabel: string;
  glitchLabel: string;
  roleSuffix: string;
  heroDescription: string;
  scrollLabel: string;
  philosophyTitle: string;
  philosophyDescription: string;
  timelineTitle: string;
  timelineLabel: string;
  capabilitiesTitle: string;
  ctaTitle: string;
  ctaDescription: string;
  primaryCta: string;
  secondaryCta: string;
  navItems: Array<{ icon: string; title: string }>;
  fallbackCards: Array<{
    icon: string;
    title: string;
    body: string;
  }>;
}

// UI 공통 텍스트
export interface UITexts {
  language: {
    label: string;
    select: string;
    labels: Record<Language, string>;
  };
  theme: {
    label: string;
    dark: string;
    light: string;
    switchToDark: string;
    switchToLight: string;
  };
}

// About 섹션 텍스트 생성 함수 (profile 데이터를 받아서 동적으로 생성)
export function getAboutTexts(
  language: Language,
  profile: { headline?: string; description?: string }
): AboutTexts {
  const baseTexts: Record<
    Language,
    Omit<AboutTexts, "brand" | "glitchLabel" | "heroDescription">
  > = {
    ko: {
      resume: "[ GET_RESUME ]",
      initLabel: "[INITIATING_CONNECTION...]",
      roleSuffix: ": FRONTEND_DEV",
      scrollLabel: "[SCROLL_SEQUENCE]",
      philosophyTitle: "// PHILOSOPHY.LOG",
      philosophyDescription:
        "비주얼을 넘어 직관적이며 효율적인 경험을 만드는 시스템을 구축합니다.",
      timelineTitle: "// DATA_STREAM.LOG",
      timelineLabel: "TIMESTAMP",
      capabilitiesTitle: "// CORE_SPECS.LOG",
      ctaTitle: "[ ESTABLISH_CONNECTION? ]",
      ctaDescription:
        "> 제 작업에 관심이 있거나 협업을 제안하고 싶다면 언제든지 연락 주세요.",
      primaryCta: "ENTER_ARCHIVE",
      secondaryCta: "CONTACT.EXE",
      navItems: [
        { icon: "psychology", title: "ACCESS: PHILOSOPHY.LOG" },
        { icon: "memory", title: "ACCESS: CORE_SPECS.LOG" },
        { icon: "timeline", title: "ACCESS: DATA_STREAM.LOG" },
        { icon: "outgoing_mail", title: "EXECUTE: CONTACT.EXE" },
      ],
      fallbackCards: [
        {
          icon: "person_alert",
          title: "사용자 중심 프로토콜",
          body: "모든 여정은 실제 사용자 시나리오에서 출발합니다.",
        },
        {
          icon: "code_blocks",
          title: "효율적인 코드베이스",
          body: "명료한 설계와 성능 최적화를 결합한 시스템을 구축합니다.",
        },
      ],
    },
    en: {
      resume: "[ GET_RESUME ]",
      initLabel: "[INITIATING_CONNECTION...]",
      roleSuffix: ": FRONTEND_DEV",
      scrollLabel: "[SCROLL_SEQUENCE]",
      philosophyTitle: "// PHILOSOPHY.LOG",
      philosophyDescription:
        "Accessing kernel... Beyond visuals, I craft intuitive, efficient, accessible systems.",
      timelineTitle: "// DATA_STREAM.LOG",
      timelineLabel: "TIMESTAMP",
      capabilitiesTitle: "// MAIN_CORES.LOG",
      ctaTitle: "[ ESTABLISH_CONNECTION? ]",
      ctaDescription:
        "> If you're interested in my work or want to collaborate, feel free to reach out.",
      primaryCta: "ENTER_ARCHIVE",
      secondaryCta: "CONTACT.EXE",
      navItems: [
        { icon: "psychology", title: "ACCESS: PHILOSOPHY.LOG" },
        { icon: "memory", title: "ACCESS: CORE_SPECS.LOG" },
        { icon: "timeline", title: "ACCESS: DATA_STREAM.LOG" },
        { icon: "outgoing_mail", title: "EXECUTE: CONTACT.EXE" },
      ],
      fallbackCards: [
        {
          icon: "person_alert",
          title: "User-Centric Protocol",
          body: "Meaningful journeys grounded in real user problems.",
        },
        {
          icon: "code_blocks",
          title: "Efficient Codebase",
          body: "Clean, scalable, performant code built to last.",
        },
      ],
    },
  };

  const base = baseTexts[language] ?? baseTexts.en;

  return {
    ...base,
    brand: "cms.sys",
    glitchLabel: profile.headline || "OOO",
    heroDescription:
      profile.description ||
      (language === "ko"
        ? "> 감성과 성능이 공존하는 인터페이스를 설계합니다."
        : "> Building immersive web experiences with precision and passion."),
  };
}

// Hero 섹션 텍스트
export const heroTexts: Record<Language, HeroTexts> = {
  ko: {
    role: "FRONTEND DEVELOPER",
    tagline: "MINSEOK CHOI",
    glitchText: "데이터_손상",
    glitchMessage: "연결 재설정 중...",
    transitionText: "ABOUT 모듈 접속 중...",
    scroll: "INITIATE_SEQUENCE",
    bootSequence: [
      { content: "> 시스템 부팅 중...", delay: 0.2 },
      {
        content: "> 뉴럴 링크 연결 중...",
        delay: 1.0,
        highlight: { text: "성공", className: "text-text-main" },
      },
      {
        content: "> CYBER PORTFOLIO V1.0 로딩...",
        delay: 1.8,
        highlight: { text: "완료", className: "text-text-main" },
      },
      {
        content: "> 접근 허용. 환영합니다.",
        delay: 2.6,
        className: "text-secondary-accent",
      },
    ],
    successMessage: {
      ko: "연결 완료. 전송 중...",
      en: "Connection established. Transferring...",
    },
  },
  en: {
    role: "FRONTEND DEVELOPER",
    tagline: "MINSEOK CHOI",
    glitchText: "DATA_CORRUPTED",
    glitchMessage: "Attempting to re-establish connection...",
    transitionText: "Linking with ABOUT module...",
    scroll: "INITIATE_SEQUENCE",
    bootSequence: [
      { content: "> BOOTING SYSTEM...", delay: 0.2 },
      {
        content: "> ESTABLISHING NEURAL LINK...",
        delay: 1.0,
        highlight: { text: "OK", className: "text-text-main" },
      },
      {
        content: "> LOADING CYBERPUNK PORTFOLIO V2.04...",
        delay: 1.8,
        highlight: { text: "DONE", className: "text-text-main" },
      },
      {
        content: "> ACCESS GRANTED. WELCOME.",
        delay: 2.6,
        className: "text-secondary-accent",
      },
    ],
    successMessage: {
      ko: "연결 완료. 전송 중...",
      en: "Connection established. Transferring...",
    },
  },
};

// UI 공통 텍스트
export const uiTexts: Record<Language, UITexts> = {
  ko: {
    language: {
      label: "언어",
      select: "언어 선택",
      labels: {
        ko: "한국어",
        en: "English",
      },
    },
    theme: {
      label: "테마",
      dark: "다크",
      light: "라이트",
      switchToDark: "다크 테마로 변경",
      switchToLight: "라이트 테마로 변경",
    },
  },
  en: {
    language: {
      label: "Language",
      select: "Select language",
      labels: {
        ko: "한국어",
        en: "English",
      },
    },
    theme: {
      label: "Theme",
      dark: "Dark",
      light: "Light",
      switchToDark: "Switch to dark theme",
      switchToLight: "Switch to light theme",
    },
  },
};
