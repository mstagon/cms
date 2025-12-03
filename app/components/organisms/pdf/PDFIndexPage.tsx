// PDF 프로젝트 목록 페이지
import type { ProjectsApiResponse } from "@/app/types/projects";
import Link from "next/link";
import "@/app/styles/pdf.css";

interface PDFIndexPageProps {
  projects: ProjectsApiResponse;
}

export default function PDFIndexPage({ projects }: PDFIndexPageProps) {
  return (
    <div className="pdf-layout min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-8 py-12 print:px-12 print:py-16">
        <header className="mb-12 print:mb-16 text-center border-b-2 border-gray-200 pb-8 print:pb-12">
          <h1 className="text-4xl print:text-5xl font-bold text-gray-900 mb-4 print:mb-6">
            Project Portfolio
          </h1>
          <p className="text-lg print:text-xl text-gray-600">
            Collection of Development Projects
          </p>
        </header>

        <div className="space-y-8 print:space-y-12">
          {/* Featured Projects */}
          {projects.featured.length > 0 && (
            <section>
              <h2 className="text-2xl print:text-3xl font-bold text-gray-900 mb-6 print:mb-8 pb-3 print:pb-4 border-b border-gray-200">
                Featured Projects
              </h2>
              <div className="space-y-6 print:space-y-8">
                {projects.featured.map((project) => (
                  <div
                    key={project.id}
                    className="border border-gray-200 rounded-lg p-6 print:p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4 print:mb-6">
                      <div>
                        <h3 className="text-xl print:text-2xl font-bold text-gray-900 mb-2 print:mb-3">
                          {project.title}
                        </h3>
                        <p className="text-base print:text-lg text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4 print:mb-6">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm print:text-base bg-gray-100 text-gray-700 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.slug && (
                      <Link
                        href={`/pdf/${project.slug}`}
                        className="inline-block text-base print:text-lg text-blue-600 hover:text-blue-800 font-semibold print:hidden"
                      >
                        View PDF →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Other Projects */}
          {projects.others.length > 0 && (
            <section>
              <h2 className="text-2xl print:text-3xl font-bold text-gray-900 mb-6 print:mb-8 pb-3 print:pb-4 border-b border-gray-200">
                Other Projects
              </h2>
              <div className="space-y-6 print:space-y-8">
                {projects.others.map((project) => (
                  <div
                    key={project.id}
                    className="border border-gray-200 rounded-lg p-6 print:p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4 print:mb-6">
                      <div>
                        <h3 className="text-xl print:text-2xl font-bold text-gray-900 mb-2 print:mb-3">
                          {project.title}
                        </h3>
                        <p className="text-base print:text-lg text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4 print:mb-6">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm print:text-base bg-gray-100 text-gray-700 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.slug && (
                      <Link
                        href={`/pdf/${project.slug}`}
                        className="inline-block text-base print:text-lg text-blue-600 hover:text-blue-800 font-semibold print:hidden"
                      >
                        View PDF →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <footer className="mt-16 print:mt-20 pt-8 print:pt-12 border-t border-gray-200 text-center text-sm print:text-base text-gray-500">
          <p>Project Portfolio - Generated for PDF Export</p>
        </footer>
      </div>
      
      {/* PDF 인쇄 안내 (화면에서만 표시) */}
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-lg print:hidden z-50">
        <p className="text-sm font-semibold mb-2">PDF로 저장하기</p>
        <p className="text-xs text-blue-100">
          브라우저에서 Ctrl+P (Mac: Cmd+P)를 눌러 PDF로 저장하세요
        </p>
      </div>
    </div>
  );
}

