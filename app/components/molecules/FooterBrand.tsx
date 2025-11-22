// FooterBrand 분자는 개발자 이름과 역할을 표시합니다.
interface FooterBrandProps {
  name: string;
  role: string;
  year: number;
}

export default function FooterBrand({ name, role, year }: FooterBrandProps) {
  return (
    <div className="space-y-1">
      <p className="font-medium text-white/90">{name}</p>
      <p className="text-sm text-white/70">
        {role} · © {year}
      </p>
    </div>
  );
}


