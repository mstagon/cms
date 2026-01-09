// 레이아웃 전반에서 사용할 하단 정보 데이터를 패칭합니다.
import type { FooterInfo } from "@/app/types/layout";
import type { Language } from "@/app/types/ui";

const footerByLanguage: Record<Language, FooterInfo> = {
  ko: {
    name: "최민석",
    role: "프론트엔드 개발자",
    links: [
      { label: "기술블로그", href: "https://velog.io/@devcms21", external: true },
      { label: "이메일", href: "mailto:devcms21@gmail.com" },
      { label: "깃허브", href: "https://github.com/mstagon", external: true },
      { label: "링크드인", href: "https://lnkd.in/g5N77A5C", external: true },
    ],
  },
  en: {
    name: "Choi Min Seok",
    role: "Frontend Developer",
    links: [
      { label: "Tech Blog", href: "https://velog.io/@devcms21", external: true },
      { label: "Email", href: "mailto:devcms21@gmail.com" },
      { label: "GitHub", href: "https://github.com/mstagon", external: true },
      { label: "LinkedIn", href: "https://lnkd.in/g5N77A5C", external: true },
    ],
  },
};

export async function fetchFooterData(language: Language = "ko"): Promise<FooterInfo> {
  if (language in footerByLanguage) {
    return footerByLanguage[language as Language];
  }
  return footerByLanguage.ko;
}

