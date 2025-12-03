// 가상 인터페이스 팝업 분자
"use client";

import type { ProjectItem } from "@/app/types/projects";

interface VirtualInterfacePopupProps {
  project: ProjectItem;
  isVisible: boolean;
  onAccess?: (slug?: string) => void;
}

export default function VirtualInterfacePopup({
  project,
  isVisible,
  onAccess,
}: VirtualInterfacePopupProps) {
  const handleAccess = () => {
    if (project.type === "encrypted") {
      onAccess?.();
    } else if (project.slug && onAccess) {
      onAccess(project.slug);
    } else if (project.href && project.href !== "#") {
      window.location.href = project.href;
    }
  };

  const getButtonText = () => {
    if (project.type === "encrypted") return "INITIATE CONTACT";
    return "ACCESS LOG";
  };

  const getButtonIcon = () => {
    if (project.type === "encrypted") return "mail";
    return "arrow_outward";
  };

  return (
    <div
      className={`virtual-interface-popup p-6 flex flex-col justify-center items-start ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <h3 className="text-white tracking-light text-xl md:text-2xl font-bold leading-tight glitch-text" data-text={project.title}>
        {project.title}
      </h3>
      <p className="text-white/80 text-sm font-medium leading-normal mt-2 text-left">
        {project.description}
      </p>
      <button
        onClick={handleAccess}
        className="relative mt-4 flex self-start items-center justify-center gap-2 h-10 px-4 bg-accent/10 text-accent border border-accent rounded-lg font-bold text-sm hover:bg-accent hover:text-background-dark transition-colors"
      >
        <span className="material-symbols-outlined text-lg">{getButtonIcon()}</span>
        <span>{getButtonText()}</span>
      </button>
    </div>
  );
}

