// 프로젝트 메인 컨텐츠 유기체
"use client";

import SectionHeader from "@/app/components/molecules/project-detail/SectionHeader";
import ImageCarousel from "@/app/components/molecules/project-detail/ImageCarousel";

interface ProjectMainContentProps {
  objective?: string;
  images?: string[];
  role?: {
    title: string;
    responsibilities: string[];
  };
}

export default function ProjectMainContent({
  objective,
  images = [],
  role,
}: ProjectMainContentProps) {
  return (
    <div className="md:col-span-2 flex flex-col gap-12">
      {/* Objective Overview Section */}
      {objective && (
        <section>
          <SectionHeader title="// OBJECTIVE_OVERVIEW.log" />
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-[#c5c0e5]">
            <p>{objective}</p>
          </div>
        </section>
      )}

      {/* Image Carousel */}
      {images.length > 0 && (
        <section>
          <SectionHeader title="// VISUAL_OUTPUT.dat" />
          <ImageCarousel images={images} alt="Project visual output" />
        </section>
      )}

      {/* My Role Section */}
      {role && (
        <section>
          <SectionHeader title="// MY_ROLE.md" />
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4 text-[#c5c0e5]">
            <h3 className="font-bold text-lg text-white">{role.title}</h3>
            <ul className="list-disc list-inside space-y-2 pl-2">
              {role.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}

