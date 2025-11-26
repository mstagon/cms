// FeaturedProjectCard 분자는 대표 프로젝트 정보를 이미지와 함께 보여줍니다.
"use client";

import Image from "next/image";
import Tag from "@/app/components/atoms/Tag";
import type { ProjectItem } from "@/app/types/projects";
import { useUI } from "@/app/context/UIContext";

interface FeaturedProjectCardProps {
  project: ProjectItem;
  index: number;
  delay: number;
  onOpenDetail?: (slug: string) => void;
}

export default function FeaturedProjectCard({
  project,
  index,
  delay,
  onOpenDetail,
}: FeaturedProjectCardProps) {
  const { language } = useUI();
  const imageSrc = project.image?.split("=")[0] ?? project.image;
  const isReversed = project.layout === "reversed";
  const isInternalLink = Boolean(onOpenDetail);

  const labels = {
    ko: "자세히 보기",
    en: "View detail",
  } as const;

  const ctaLabel = labels[language] ?? labels.ko;

  const handleOpenDetail = () => {
    if (onOpenDetail) {
      onOpenDetail(project.slug);
    }
  };

  return (
    <article
      className={`group grid grid-cols-1 items-center gap-10 md:grid-cols-2 ${
        isReversed ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""
      }`}
      data-animate="scroll"
      style={{ transitionDelay: `${delay}s` }}
    >
      {isInternalLink ? (
        <button
          type="button"
          onClick={handleOpenDetail}
          className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 bg-[rgba(17,24,39,0.68)]"
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={project.imageAlt ?? ""}
              fill
              unoptimized={project.unoptimized}
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          ) : null}
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
        </button>
      ) : (
        <a
          href={project.href}
          className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/15 bg-[rgba(17,24,39,0.68)]"
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={project.imageAlt ?? ""}
              fill
              unoptimized={project.unoptimized}
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          ) : null}
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
        </a>
      )}

      <div className={`space-y-6 ${isReversed ? "md:text-right" : ""}`}>
        <div className="space-y-3">
          <span className="text-sm uppercase tracking-[0.3em] text-white/60">
            Project {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-3xl font-bold leading-tight md:text-4xl transition-colors duration-300 group-hover:text-[hsl(var(--color-accent))]">
            {project.title}
          </h3>
        </div>
        <p className="text-white/65 leading-relaxed">{project.description}</p>
        {!!(project.tags && project.tags.length) && (
          <div className={`flex flex-wrap gap-2 ${isReversed ? "md:justify-end" : ""}`}>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
        <div>
          {isInternalLink ? (
            <button
              type="button"
              onClick={handleOpenDetail}
              className={`inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[hsl(var(--color-accent))] hover:bg-white/10 hover:text-[hsl(var(--color-accent))] ${
                isReversed ? "md:justify-end" : ""
              }`}
            >
              {ctaLabel}
              <span aria-hidden className="text-base">→</span>
            </button>
          ) : (
            <a
              href={project.href}
              className={`inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[hsl(var(--color-accent))] hover:bg-white/10 hover:text-[hsl(var(--color-accent))] ${
                isReversed ? "md:justify-end" : ""
              }`}
            >
              {ctaLabel}
              <span aria-hidden className="text-base">→</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}


