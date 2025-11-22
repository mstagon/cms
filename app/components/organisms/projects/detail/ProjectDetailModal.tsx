// ProjectDetailModal 오거니즘은 프로젝트 상세 정보를 오버레이 모달로 제공합니다.
"use client";

import { useEffect } from "react";
import ProjectDetailView from "@/app/components/organisms/projects/detail/ProjectDetailView";
import type { ProjectDetail } from "@/app/types/projects";

interface ProjectDetailModalProps {
  isOpen: boolean;
  isLoading: boolean;
  detail: ProjectDetail | null;
  error?: string | null;
  onClose: () => void;
}

export default function ProjectDetailModal({
  isOpen,
  isLoading,
  detail,
  error,
  onClose,
}: ProjectDetailModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm">
      <div className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#121212] shadow-2xl shadow-black/50">
        <button
          type="button"
          onClick={onClose}
          className="group absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white transition hover:border-white/40 hover:bg-black/60"
          aria-label="프로젝트 상세 닫기"
        >
          <span
            aria-hidden
            className="text-xl transition group-hover:rotate-90"
          >
            ×
          </span>
        </button>
        <div className="max-h-[90vh] overflow-y-auto pr-2">
          {isLoading ? (
            <div className="flex min-h-[40vh] items-center justify-center px-6 py-16 text-white/70">
              데이터를 불러오는 중입니다...
            </div>
          ) : error ? (
            <div className="flex min-h-[40vh] flex-col items-center justify-center gap-4 px-6 py-16 text-center text-white/80">
              <p>{error}</p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
              >
                닫기
              </button>
            </div>
          ) : detail ? (
            <ProjectDetailView detail={detail} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
