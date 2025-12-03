// FooterSection 오거니즘은 연락처 링크와 저작권 정보를 하단에 제공합니다.
import type { FooterInfo } from "@/app/types/layout";
import FooterBrand from "@/app/components/molecules/FooterBrand";
import FooterNav from "@/app/components/molecules/FooterNav";

interface FooterSectionProps {
  info: FooterInfo;
  year: number;
}

export default function FooterSection({ info, year }: FooterSectionProps) {
  return (
    <footer className="border-t border-white/10 bg-background-dark text-white/70">
      <div className="container mx-auto flex flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <FooterBrand name={info.name} role={info.role} year={year} />
        <FooterNav links={info.links} />
      </div>
    </footer>
  );
}
