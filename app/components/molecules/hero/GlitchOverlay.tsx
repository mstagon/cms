// GlitchOverlay는 화면 전체에 글리치 텍스트와 메시지를 출력합니다.
"use client";

import { RefObject, useEffect, useState } from "react";

interface GlitchOverlayProps {
  overlayRef: RefObject<HTMLDivElement | null>;
  title: string;
  message: string;
  successMessage: string;
}

export default function GlitchOverlay({
  overlayRef,
  title,
  message,
  successMessage,
}: GlitchOverlayProps) {
  const [currentMessage, setCurrentMessage] = useState(message);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          if (overlay.classList.contains("active")) {
            setCurrentMessage(message);
            setIsSuccess(false);
            const timer = setTimeout(() => {
              setCurrentMessage(successMessage);
              setIsSuccess(true);
            }, 1500); // 1.5초 후 메시지 변경

            return () => clearTimeout(timer);
          } else {
            setCurrentMessage(message);
            setIsSuccess(false);
          }
        }
      });
    });

    observer.observe(overlay, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, [message, successMessage, overlayRef]);

  return (
    <div className="section-glitch-overlay" id="section-glitch" ref={overlayRef}>
      <h2
        className="glitch-effect text-2xl font-black tracking-widest text-secondary-accent md:text-4xl"
        data-text={title}
      >
        {title}
      </h2>
      <p
        className={`mt-4 font-mono text-lg text-accent transition-all duration-500 ${
          isSuccess
            ? "animate-[glitchMessageGlow_1.5s_ease-in-out_infinite_alternate] drop-shadow-[0_0_8px_var(--color-accent)] scale-105"
            : ""
        }`}
      >
        {currentMessage}
      </p>
    </div>
  );
}

