// 레이아웃 전반에서 사용할 하단 정보 데이터를 패칭합니다.
import type { FooterInfo } from "@/app/types/layout";

const footerInfo: FooterInfo = {
  name: "Choi Min Seok",
  role: "Frontend Developer",
  links: [
    { label: "Email", href: "mailto:hello@example.com" },
    { label: "GitHub", href: "https://github.com/", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/", external: true },
  ],
};

export async function fetchFooterData(): Promise<FooterInfo> {
  return footerInfo;
}


