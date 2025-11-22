// FooterNav 분자는 푸터에 표시할 링크 목록을 렌더링합니다.
import type { FooterLinkItem } from "@/app/types/layout";
import FooterLink from "@/app/components/atoms/FooterLink";

interface FooterNavProps {
  links: FooterLinkItem[];
}

export default function FooterNav({ links }: FooterNavProps) {
  return (
    <nav className="flex items-center gap-5 text-sm">
      {links.map((link) => (
        <FooterLink key={link.label} label={link.label} href={link.href} external={link.external} />
      ))}
    </nav>
  );
}


