// 프로젝트 파일 아이템 분자 (작은 컴팩트 버전)
"use client";

import { useState } from "react";
import StatusLight from "@/app/components/atoms/StatusLight";
import type { ProjectItem } from "@/app/types/projects";

interface ProjectFileItemProps {
  project: ProjectItem;
  onAccess?: (slug?: string) => void;
}

export default function ProjectFileItem({
  project,
  onAccess,
}: ProjectFileItemProps) {
  const [isHovered, setIsHovered] = useState(false);

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
    if (project.type === "encrypted") return "lock";
    if (project.type === "featured") return "folder_special";
    return "description";
  };

  const getLabel = () => {
    if (project.directory) return project.directory;
    if (project.filename) return project.filename;
    return `${project.title.toUpperCase().replace(/\s+/g, "_")}.PROJ`;
  };

  const getFileExtension = () => {
    if (project.type === "encrypted") return ".ENC";
    if (project.type === "featured") return ".FEAT";
    return ".PROJ";
  };

  return (
    <div
      className="group relative cursor-pointer bg-white/5 border border-white/10 rounded p-3 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 file-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* 파일 헤더 - 아이콘과 파일명 */}
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-accent text-lg flex-shrink-0">
          {getIcon()}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-accent/90 text-xs font-mono truncate">
            {getLabel()}
          </p>
        </div>
        <StatusLight status={project.status} />
      </div>

      {/* 파일 정보 */}
      <div className="space-y-1">
        <h3 className="text-sm font-bold text-white group-hover:text-accent transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-xs text-[#8892B0] line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* 파일 메타 정보 */}
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
        <span className="text-[10px] font-mono text-[#8892B0]">
          {getFileExtension()}
        </span>
        <div className="flex items-center gap-1.5">
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

      {/* 태그 (작은 버전) */}
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] px-1.5 py-0.5 bg-accent/10 text-accent rounded border border-accent/20"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 2 && (
            <span className="text-[10px] px-1.5 py-0.5 text-[#8892B0]">
              +{project.tags.length - 2}
            </span>
          )}
        </div>
      )}

      {/* 호버 효과 - 스캔 라인 */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-pulse" />
          <div className="absolute top-0 left-0 right-0 h-px bg-accent/50 animate-pulse" />
        </div>
      )}
    </div>
  );
}

