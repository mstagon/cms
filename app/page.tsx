// 홈 화면은 스티키 인트로 뒤에 애니메이션 프로젝트 리스트를 배치합니다.
import HeroIntro from "@/app/components/Hero/Hero";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/app/data/projects";
import ProjectsShowcase from "@/app/components/Projects/ProjectsShowcase";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <section className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative z-10 h-full">
            <HeroIntro />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent via-black/70 to-black" />
          </div>
        </div>
        <div className="relative z-20 -mt-[100vh] pt-[100vh]">
          <ProjectsShowcase featured={FEATURED_PROJECTS} others={OTHER_PROJECTS} />
        </div>
      </section>
    </div>
  );
}
