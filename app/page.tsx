// 홈 화면은 스티키 인트로 뒤에 소개와 프로젝트 리스트를 순차적으로 배치합니다.
import HeroSection from "@/app/components/organisms/hero/HeroSection";
import ProjectsShowcase from "@/app/components/organisms/projects/ProjectsShowcase";
import AboutSection from "@/app/components/organisms/about/AboutSection";
import { getServerBaseUrl } from "@/app/lib/server/baseUrl";
import type { AboutApiResponse } from "@/app/lib/api/about";
import type { ProjectsApiResponse } from "@/app/lib/api/projects";

export const dynamic = "force-dynamic";

export default async function Home() {
  const baseUrl = getServerBaseUrl();

  const [aboutResponse, projectsResponse] = await Promise.all([
    fetch(`${baseUrl}/api/about`, { cache: "no-store" }),
    fetch(`${baseUrl}/api/projects`, { cache: "no-store" }),
  ]);

  if (!aboutResponse.ok) {
    throw new Error("소개 데이터를 불러오지 못했습니다.");
  }

  if (!projectsResponse.ok) {
    throw new Error("프로젝트 데이터를 불러오지 못했습니다.");
  }

  const { profile, experiences, skillCategories, awards, interests } =
    (await aboutResponse.json()) as AboutApiResponse;
  const { featured, others } =
    (await projectsResponse.json()) as ProjectsApiResponse;

  return (
    <div className="relative min-h-screen">
      <section className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative z-10 h-full">
            <HeroSection />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent via-black/70 to-black" />
          </div>
        </div>
      </section>
      <div className="relative z-20 space-y-24 bg-black pb-32">
        <AboutSection
          profile={profile}
          experiences={experiences}
          skillCategories={skillCategories}
          awards={awards}
          interests={interests}
        />
        <ProjectsShowcase featured={featured} others={others} />
      </div>
    </div>
  );
}
