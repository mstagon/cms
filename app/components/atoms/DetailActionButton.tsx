// DetailActionButton 아톰은 프로젝트 CTA 버튼을 일관된 스타일로 제공합니다.
import type { PropsWithChildren } from "react";

type DetailActionButtonVariant = "primary" | "secondary";

interface DetailActionButtonProps extends PropsWithChildren {
  href: string;
  variant?: DetailActionButtonVariant;
  external?: boolean;
  className?: string;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2.5 rounded-lg px-8 py-3 text-base font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantClasses: Record<DetailActionButtonVariant, string> = {
  primary:
    "bg-[#3B82F6] text-white hover:scale-105 hover:opacity-90 active:scale-95 focus-visible:outline-[#3B82F6]/60",
  secondary:
    "bg-white/10 text-white hover:scale-105 hover:bg-white/20 active:scale-95 focus-visible:outline-white/60",
};

export default function DetailActionButton({
  href,
  variant = "secondary",
  external = false,
  className = "",
  children,
}: DetailActionButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

