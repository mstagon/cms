// ProjectsShowcase 컴포넌트는 주요/기타 프로젝트를 스크롤 애니메이션과 함께 보여줍니다.
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { ProjectItem, ProjectSummary } from "@/app/types/projects";

interface ProjectsShowcaseProps {
  featured: ProjectItem[];
  others: ProjectSummary[];
}

export default function ProjectsShowcase({ featured, others }: ProjectsShowcaseProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof window === "undefined") {
      return;
    }

    const nodes = Array.from(section.querySelectorAll<HTMLElement>('[data-animate="scroll"]'));
    if (!nodes.length) return;

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="bg-black text-white">
      <div className="container mx-auto flex flex-col gap-20 px-6 py-24">
        <header
          className="space-y-4 text-center"
          data-animate="scroll"
          style={{ transitionDelay: "0.1s" }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-muted">
            Selected Works
          </p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Projects</h2>
          <p className="mx-auto max-w-2xl text-base text-muted">
            사용자 경험과 비즈니스 임팩트를 동시에 만족시킨 프로젝트입니다.
          </p>
        </header>

        <div className="flex flex-col gap-20 md:gap-24">
          {featured.map((project, idx) => {
            const isReversed = project.layout === "reversed";
            return (
              <article
                key={project.title}
                className={`group grid grid-cols-1 items-center gap-10 md:grid-cols-2 ${
                  isReversed ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""
                }`}
                data-animate="scroll"
                style={{ transitionDelay: `${0.2 + idx * 0.15}s` }}
              >
                <a
                  href={project.href}
                  className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? ""}
                      fill
                      unoptimized={project.unoptimized}
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
                </a>

                <div className={`space-y-6 ${isReversed ? "md:text-right" : ""}`}>
                  <div className="space-y-3">
                    <span className="text-sm uppercase tracking-[0.3em] text-muted">
                      Project {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-3xl font-bold leading-tight md:text-4xl transition-colors duration-300 group-hover:text-[hsl(var(--color-accent))]">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted leading-relaxed">{project.description}</p>
                  {!!(project.tags && project.tags.length) && (
                    <div className={`flex flex-wrap gap-2 ${isReversed ? "md:justify-end" : ""}`}>
                      {project.tags.map((tag) => (
                        <span key={tag} className="chip bg-surface">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div>
                    <a
                      href={project.href}
                      className={`cta-link ${isReversed ? "md:justify-end" : ""}`}
                    >
                      자세히 보기
                      <span aria-hidden className="text-base">→</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <section
          className="flex flex-col items-center gap-8 text-center"
          data-animate="scroll"
          style={{ transitionDelay: `${0.2 + featured.length * 0.15}s` }}
        >
          <h3 className="text-2xl font-bold">Other Projects</h3>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {others.map((project, idx) => (
              <a
                key={project.title}
                href={project.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-subtle bg-surface p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[hsl(var(--color-accent))] hover:shadow-lg hover:shadow-[hsl(var(--color-accent))/0.2]"
                data-animate="scroll"
                style={{ transitionDelay: `${0.35 + (featured.length + idx) * 0.12}s` }}
              >
                <div className="space-y-2 text-left">
                  <h4 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[hsl(var(--color-accent))]">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted">{project.description}</p>
                </div>
                <div className="mt-4 flex items-center justify-end text-muted transition-colors group-hover:text-[hsl(var(--color-accent))]">
                  <span aria-hidden className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
