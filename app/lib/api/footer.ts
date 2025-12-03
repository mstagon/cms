// 레이아웃 전반에서 사용할 하단 정보 데이터를 패칭합니다.
import type { FooterInfo } from "@/app/types/layout";
import type { Language } from "@/app/types/ui";

const footerByLanguage: Record<Language, FooterInfo> = {
  ko: {
    name: "최민석",
    role: "프론트엔드 개발자",
    links: [
      { label: "이메일", href: "mailto:hello@example.com" },
      { label: "깃허브", href: "https://github.com/", external: true },
      { label: "링크드인", href: "https://www.linkedin.com/", external: true },
    ],
  },
  en: {
    name: "Choi Min Seok",
    role: "Frontend Developer",
    links: [
      { label: "Email", href: "mailto:hello@example.com" },
      { label: "GitHub", href: "https://github.com/", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/", external: true },
    ],
  },
};

export async function fetchFooterData(language: Language = "ko"): Promise<FooterInfo> {
  if (language in footerByLanguage) {
    return footerByLanguage[language as Language];
  }
  return footerByLanguage.ko;
}

