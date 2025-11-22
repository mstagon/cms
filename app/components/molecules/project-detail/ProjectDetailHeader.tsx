// ProjectDetailHeader 분자는 프로젝트 타이틀과 서브타이틀을 중앙 정렬로 제공합니다.
interface ProjectDetailHeaderProps {
  title: string;
  subtitle: string;
  delay?: number;
}

export default function ProjectDetailHeader({
  title,
  subtitle,
  delay = 0.1,
}: ProjectDetailHeaderProps) {
  return (
    <header
      className="mb-12 flex flex-col items-center text-center"
      data-animate="scroll"
      style={{ transitionDelay: `${delay}s` }}
    >
      <h1 className="mb-4 text-4xl font-bold tracking-tighter text-white md:text-5xl">
        {title}
      </h1>
      <p className="max-w-2xl text-lg text-white/70">{subtitle}</p>
    </header>
  );
}

