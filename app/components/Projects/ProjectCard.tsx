"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
  image?: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  description,
  href,
  icon,
  image,
  tags = [],
}: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const shine = shineRef.current;
    const img = imageRef.current;
    if (!card || !shine) return;

    let rafId = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const onPointerMove = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1
      // -0.5..0.5
      const dx = px - 0.5;
      const dy = py - 0.5;
      targetX = dx * 16; // rotateY
      targetY = -dy * 12; // rotateX

      // shine 위치 업데이트
      shine.style.background = `radial-gradient(450px circle at ${px * 100}% ${
        py * 100
      }%, rgba(255,255,255,0.18), transparent 40%)`;
      shine.style.opacity = "1";

      if (!rafId) rafId = requestAnimationFrame(update);
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
      gsap.to(shine, { opacity: 0, duration: 0.4, ease: "power2.out" });
      if (img)
        gsap.to(img, {
          xPercent: 0,
          yPercent: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    const update = () => {
      currentX = lerp(currentX, targetX, 0.12);
      currentY = lerp(currentY, targetY, 0.12);
      card.style.transform = `perspective(1000px) rotateX(${currentY}deg) rotateY(${currentX}deg) translateZ(0)`;
      if (img) {
        // 이미지에 살짝 반대 방향 패럴랙스
        const ix = -currentX * 0.5;
        const iy = currentY * 0.5;
        img.style.transform = `translate3d(${ix}px, ${iy}px, 0)`;
      }

      const nearZero =
        Math.abs(currentX - targetX) < 0.01 &&
        Math.abs(currentY - targetY) < 0.01;
      if (!nearZero) {
        rafId = requestAnimationFrame(update);
      } else {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    card.addEventListener("pointermove", onPointerMove);
    card.addEventListener("pointerleave", onPointerLeave);

    return () => {
      card.removeEventListener("pointermove", onPointerMove);
      card.removeEventListener("pointerleave", onPointerLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <a
      ref={cardRef}
      href={href}
      className="group relative block rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md will-change-transform transition-transform duration-300 hover:scale-[1.015]"
      data-project-card
      aria-label={`${title} 상세 보기`}
    >
      {/* glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
        style={{
          background:
            "radial-gradient(400px circle at 50% 50%, rgba(120,119,198,0.25), transparent 40%)",
        }}
      />

      {/* shine */}
      <div
        ref={shineRef}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
      />

      <div className="relative z-10 flex items-start gap-4">
        {image ? (
          <div
            ref={imageRef}
            className="h-14 w-14 overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15"
          >
            <img src={image} alt="" className="h-full w-full object-cover" />
          </div>
        ) : icon ? (
          <div
            ref={imageRef}
            className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15"
          >
            <img src={icon} alt="" className="h-6 w-6 opacity-90" />
          </div>
        ) : null}

        <div className="flex-1">
          <div className="text-xl md:text-2xl font-semibold tracking-tight">
            {title}
          </div>
          <p className="mt-2 text-white/70 leading-relaxed">{description}</p>
          {!!tags.length && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((t, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
