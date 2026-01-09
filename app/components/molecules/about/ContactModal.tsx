"use client";

import { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  github: string;
  blogHref?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  email,
  github,
  blogHref,
}: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-background-dark border-2 border-accent/30 rounded-lg p-8 max-w-md w-full mx-4 shadow-[0_0_30px_rgba(0,254,149,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* 헤더 */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[#E6F1FF] mb-2">
            [ CONTACT_INFO ]
          </h3>
          <div className="h-0.5 bg-accent/30 w-full"></div>
        </div>

        {/* 연락처 정보 */}
        <div className="space-y-4">
          {/* 기술 블로그 */}
          {blogHref && (
            <div className="flex items-center gap-4 p-4 bg-white/5 border border-accent/20 rounded-lg hover:border-accent/40 transition-colors">
              <span className="material-symbols-outlined text-accent text-2xl">
                article
              </span>
              <div className="flex-1">
                <p className="text-xs text-[#8892B0] mb-1">TECH BLOG</p>
                <a
                  href={blogHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#E6F1FF] hover:text-accent transition-colors font-mono text-sm"
                >
                  {blogHref}
                </a>
              </div>
            </div>
          )}

          {/* 이메일 */}
          <div className="flex items-center gap-4 p-4 bg-white/5 border border-accent/20 rounded-lg hover:border-accent/40 transition-colors">
            <span className="material-symbols-outlined text-accent text-2xl">
              mail
            </span>
            <div className="flex-1">
              <p className="text-xs text-[#8892B0] mb-1">EMAIL</p>
              <a
                href={`mailto:${email}`}
                className="text-[#E6F1FF] hover:text-accent transition-colors font-mono text-sm"
              >
                {email}
              </a>
            </div>
          </div>

          {/* 깃허브 */}
          <div className="flex items-center gap-4 p-4 bg-white/5 border border-accent/20 rounded-lg hover:border-accent/40 transition-colors">
            <span className="material-symbols-outlined text-accent text-2xl">
              code
            </span>
            <div className="flex-1">
              <p className="text-xs text-[#8892B0] mb-1">GITHUB</p>
              <a
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noreferrer"
                className="text-[#E6F1FF] hover:text-accent transition-colors font-mono text-sm"
              >
                github.com/{github}
              </a>
            </div>
          </div>
        </div>

        {/* 푸터 메시지 */}
        <div className="mt-6 pt-4 border-t border-accent/20">
          <p className="text-xs text-[#8892B0] text-center font-mono">
            {"// Ready to collaborate"}
          </p>
        </div>
      </div>
    </div>
  );
}

