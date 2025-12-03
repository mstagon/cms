// PDF 전용 프로젝트 컨텐츠
import type { ProjectItem, ProjectDetail } from "@/app/types/projects";
import Image from "next/image";
import { getProjectHeroImage, getProjectArchitectureImages } from "@/app/lib/utils/image";

interface ProjectPDFContentProps {
  project: ProjectItem;
  projectDetail: ProjectDetail;
}

export default async function ProjectPDFContent({
  project,
  projectDetail,
}: ProjectPDFContentProps) {
  // 대표 이미지 우선순위: public/projects/[slug]/hero.* > project.image > projectDetail.images[0]
  const publicHeroImage = project.slug ? await getProjectHeroImage(project.slug) : null;
  const heroImage = publicHeroImage || project.image || (projectDetail.images && projectDetail.images[0]);
  
  // 아키텍처 이미지: public/projects/[slug]/architecture/ 우선, 없으면 projectDetail.architecture.diagrams
  const publicArchImages = project.slug ? await getProjectArchitectureImages(project.slug) : [];

  return (
    <div className="max-w-4xl mx-auto px-8 py-12 print:px-4 print:py-6">
      {/* 대문 이미지 */}
      {heroImage && (
        <div className="mb-12 print:mb-6">
          <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={heroImage}
              alt={project.imageAlt || `${project.title} - Hero Image`}
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>
        </div>
      )}

      {/* 헤더 */}
      <header className="mb-12 print:mb-6 border-b-2 border-gray-200 pb-8 print:pb-4">
        <h1 className="text-4xl print:text-2xl font-bold text-gray-900 mb-4 print:mb-2">
          {project.title}
        </h1>
        {project.description && (
          <p className="text-lg print:text-sm text-gray-600 leading-relaxed">
            {project.description}
          </p>
        )}
        {projectDetail.objective && !projectDetail.overview && (
          <div className="mt-6 print:mt-3">
            <p className="text-base print:text-xs text-gray-700 leading-relaxed">
              {projectDetail.objective}
            </p>
          </div>
        )}
      </header>

      {/* 메타 정보 */}
      <div className="grid grid-cols-2 gap-6 print:gap-3 mb-12 print:mb-6">
        {projectDetail.timeframe && (
          <div>
            <h3 className="text-sm print:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 print:mb-1">
              Timeframe
            </h3>
            <p className="text-base print:text-sm text-gray-900">
              {projectDetail.timeframe}
            </p>
          </div>
        )}
        {projectDetail.platform && (
          <div>
            <h3 className="text-sm print:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 print:mb-1">
              Platform
            </h3>
            <p className="text-base print:text-sm text-gray-900">
              {projectDetail.platform}
            </p>
          </div>
        )}
        {projectDetail.type && (
          <div>
            <h3 className="text-sm print:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 print:mb-1">
              Type
            </h3>
            <p className="text-base print:text-sm text-gray-900">
              {projectDetail.type}
            </p>
          </div>
        )}
        {projectDetail.techStack && projectDetail.techStack.length > 0 && (
          <div>
            <h3 className="text-sm print:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 print:mb-1">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 print:gap-1">
              {projectDetail.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm print:text-xs bg-gray-100 text-gray-700 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Overview */}
      {projectDetail.overview && (
        <section className="mb-12 print:mb-6">
          <h2 className="text-2xl print:text-xl font-bold text-gray-900 mb-6 print:mb-3 pb-3 print:pb-2 border-b border-gray-200">
            Overview
          </h2>
          <p className="text-base print:text-xs text-gray-700 leading-relaxed mb-6 print:mb-3">
            {projectDetail.overview.description}
          </p>
          {projectDetail.overview.stats && (
            <div className="grid grid-cols-2 gap-6 print:gap-4">
              {projectDetail.overview.stats.totalUsers && (
                <div>
                  <h4 className="text-sm print:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Total Users
                  </h4>
                  <p className="text-xl print:text-lg font-bold text-gray-900">
                    {projectDetail.overview.stats.totalUsers}
                  </p>
                </div>
              )}
              {projectDetail.overview.stats.dau && (
                <div>
                  <h4 className="text-sm print:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    DAU
                  </h4>
                  <p className="text-xl print:text-lg font-bold text-gray-900">
                    {projectDetail.overview.stats.dau}
                  </p>
                </div>
              )}
              {projectDetail.overview.stats.annualNewUsers && (
                <div>
                  <h4 className="text-sm print:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Annual New Users
                  </h4>
                  <p className="text-xl print:text-lg font-bold text-gray-900">
                    {projectDetail.overview.stats.annualNewUsers}
                  </p>
                </div>
              )}
            </div>
          )}
        </section>
      )}

      {/* Images */}
      {projectDetail.images && projectDetail.images.length > 0 && (
        <section className="mb-12 print:mb-6">
          <h2 className="text-2xl print:text-xl font-bold text-gray-900 mb-6 print:mb-3 pb-3 print:pb-2 border-b border-gray-200">
            Visual Output
          </h2>
          <div className="space-y-6 print:space-y-3">
            {projectDetail.images.map((image, index) => (
              <div key={index} className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* My Role */}
      {projectDetail.role && (
        <section className="mb-12 print:mb-6">
          <h2 className="text-2xl print:text-xl font-bold text-gray-900 mb-6 print:mb-3 pb-3 print:pb-2 border-b border-gray-200">
            My Role
          </h2>
          <h3 className="text-xl print:text-base font-semibold text-gray-900 mb-4 print:mb-2">
            {projectDetail.role.title}
          </h3>
          <ul className="list-disc list-inside space-y-2 print:space-y-1 text-base print:text-xs text-gray-700">
            {projectDetail.role.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Challenges */}
      {projectDetail.challenges && projectDetail.challenges.length > 0 && (
        <section className="mb-12 print:mb-6">
          <h2 className="text-2xl print:text-xl font-bold text-gray-900 mb-6 print:mb-3 pb-3 print:pb-2 border-b border-gray-200">
            Challenges & Solutions
          </h2>
          <div className="space-y-8 print:space-y-4">
            {projectDetail.challenges.map((challenge, index) => (
              <div key={index} className="border-l-4 border-gray-300 pl-6 print:pl-3">
                <h3 className="text-xl print:text-base font-semibold text-gray-900 mb-4 print:mb-2">
                  {challenge.title}
                </h3>
                <div className="grid grid-cols-2 gap-6 print:gap-3 mb-4 print:mb-2">
                  <div>
                    <h4 className="text-sm print:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 print:mb-1">
                      AS-IS
                    </h4>
                    <p className="text-base print:text-xs text-gray-700 leading-relaxed">
                      {challenge.asIs}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm print:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 print:mb-1">
                      TO-BE
                    </h4>
                    <p className="text-base print:text-xs text-gray-700 leading-relaxed">
                      {challenge.toBe}
                    </p>
                  </div>
                </div>
                {challenge.result && (
                  <div className="mt-4 print:mt-2">
                    <h4 className="text-sm print:text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 print:mb-1">
                      Result
                    </h4>
                    <p className="text-base print:text-xs text-gray-700 leading-relaxed">
                      {challenge.result}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Architecture - 이미지가 있을 때만 표시 */}
      {(() => {
        // 유효한 이미지가 있는지 확인
        const hasPublicImages = publicArchImages.length > 0;
        const hasValidDiagrams = projectDetail.architecture?.diagrams?.some(
          (diagram) => diagram.image && diagram.image.trim() !== ""
        ) || false;
        
        return hasPublicImages || hasValidDiagrams;
      })() ? (
        <section className="mb-12 print:mb-6">
          <h2 className="text-2xl print:text-xl font-bold text-gray-900 mb-6 print:mb-3 pb-3 print:pb-2 border-b border-gray-200">
            Architecture
          </h2>
          {projectDetail.architecture?.description && (
            <p className="text-base print:text-xs text-gray-700 leading-relaxed mb-6 print:mb-3">
              {projectDetail.architecture.description}
            </p>
          )}
          <div className="space-y-6 print:space-y-3">
              {/* public/projects/[slug]/architecture/ 이미지 우선 사용 */}
            {publicArchImages.length > 0 ? (
              publicArchImages.map((imagePath, index) => (
                <div key={index}>
                  <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={imagePath}
                      alt={`${project.title} - Architecture ${index + 1}`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              ))
            ) : (
              /* 기존 diagrams 사용 */
              projectDetail.architecture?.diagrams?.map((diagram, index) => (
                <div key={index}>
                  {diagram.title && (
                    <h3 className="text-lg print:text-sm font-semibold text-gray-900 mb-4 print:mb-2">
                      {diagram.title}
                    </h3>
                  )}
                  <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={diagram.image}
                      alt={diagram.alt || diagram.title || `Architecture diagram ${index + 1}`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      ) : null}

      {/* Achievements */}
      {projectDetail.achievements && projectDetail.achievements.length > 0 && (
        <section className="mb-12 print:mb-6">
          <h2 className="text-2xl print:text-xl font-bold text-gray-900 mb-6 print:mb-3 pb-3 print:pb-2 border-b border-gray-200">
            Achievements
          </h2>
          <div className="space-y-6 print:space-y-3">
            {projectDetail.achievements.map((achievement, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 print:p-3">
                <h3 className="text-xl print:text-base font-semibold text-gray-900 mb-3 print:mb-2">
                  {achievement.title}
                </h3>
                <p className="text-base print:text-xs text-gray-700 leading-relaxed">
                  {achievement.description}
                </p>
                {achievement.metrics && (
                  <p className="text-sm print:text-xs text-gray-500 mt-3 print:mt-1">
                    {achievement.metrics}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Retrospective */}
      {projectDetail.retrospective && (
        <section className="mb-12 print:mb-6">
          <h2 className="text-2xl print:text-xl font-bold text-gray-900 mb-6 print:mb-3 pb-3 print:pb-2 border-b border-gray-200">
            Retrospective
          </h2>
          <div className="prose prose-lg print:prose-xs max-w-none">
            <p className="text-base print:text-xs text-gray-700 leading-relaxed whitespace-pre-line">
              {projectDetail.retrospective}
            </p>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="mt-16 print:mt-6 pt-8 print:pt-4 border-t border-gray-200 text-center text-sm print:text-xs text-gray-500">
        <p>{project.title} - Project Portfolio</p>
      </footer>
    </div>
  );
}

