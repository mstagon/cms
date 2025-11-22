// FooterLink 아톰은 푸터 내비게이션에서 사용하는 단일 링크를 출력합니다.
interface FooterLinkProps {
  label: string;
  href: string;
  external?: boolean;
}

export default function FooterLink({ label, href, external = false }: FooterLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="transition-colors hover:text-white/95"
    >
      {label}
    </a>
  );
}


