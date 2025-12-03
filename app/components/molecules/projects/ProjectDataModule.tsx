// 프로젝트 데이터 모듈 분자
"use client";

import { useState } from "react";
import Image from "next/image";
import StatusLight from "@/app/components/atoms/StatusLight";
import VirtualInterfacePopup from "@/app/components/molecules/projects/VirtualInterfacePopup";
import type { ProjectItem } from "@/app/types/projects";

interface ProjectDataModuleProps {
  project: ProjectItem;
  className?: string;
  onAccess?: (slug?: string) => void;
}

export default function ProjectDataModule({
  project,
  className = "",
  onAccess,
}: ProjectDataModuleProps) {
  const [isHovered, setIsHovered] = useState(false);
  const processedImageSrc = project.image?.split("=")[0] ?? project.image;

  const handleClick = () => {
    if (project.type === "encrypted") {
      onAccess?.();
      return;
    }
    if (project.slug && onAccess) {
      onAccess(project.slug);
    } else if (project.href && project.href !== "#") {
      window.location.href = project.href;
    }
  };

  const getIcon = () => {
    if (project.type === "encrypted") return "encrypted";
    if (project.type === "featured") return "folder_special";
    return "description";
  };

  const getLabel = () => {
    if (project.directory) return project.directory;
    if (project.filename) return project.filename;
    return `FILE_${project.id}:${project.title.toUpperCase().replace(/\s+/g, "_")}`;
  };

  return (
    <div
      className={`data-module cursor-pointer overflow-hidden min-h-[300px] flex flex-col p-2 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* 헤더 */}
      <div className="flex items-center gap-3 p-2 border-b border-accent/10">
        <span className="material-symbols-outlined text-accent text-base">
          {getIcon()}
        </span>
        <p className="text-accent/80 text-xs font-mono truncate flex-1">
          {getLabel()}
        </p>
        <div className="flex items-center gap-1.5">
          <StatusLight status={project.status} />
          <span
            className={`text-[10px] font-mono ${
              project.status === "locked"
                ? "text-red-500/70"
                : "text-accent/70"
            }`}
          >
            {project.status === "locked" ? "LOCKED" : "ONLINE"}
          </span>
        </div>
      </div>

      {/* 컨텐츠 */}
      {project.type === "encrypted" ? (
        <div className="relative p-6 flex flex-1 flex-col justify-center items-center text-center h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
          <div className="relative">
            <span className="material-symbols-outlined text-4xl text-accent">lock</span>
            <p className="text-white tracking-light text-xl font-bold leading-tight mt-1">
              {project.title}
            </p>
            <p className="text-white/70 text-sm mt-2">{project.description}</p>
          </div>
        </div>
      ) : (
        <div className="relative p-4 flex-1 flex flex-col justify-end">
          {processedImageSrc && (
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 group-hover:opacity-20 transition-opacity duration-300">
              <Image
                src={processedImageSrc}
                alt={project.imageAlt || project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                unoptimized
              />
            </div>
          )}
          <div className="relative">
            <p className="text-white tracking-light text-xl md:text-2xl font-bold leading-tight">
              {project.title}
            </p>
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2 py-0.5 border border-accent/50 bg-accent/10 text-accent rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 가상 인터페이스 팝업 */}
      <VirtualInterfacePopup
        project={project}
        isVisible={isHovered}
        onAccess={onAccess}
      />
    </div>
  );
}

