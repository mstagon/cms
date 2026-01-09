"use client";

import { useState } from "react";
import Link from "next/link";
import ContactModal from "./ContactModal";

interface AboutCTASectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
}

export default function AboutCTASection({
  title,
  description,
  primaryLabel,
  secondaryLabel,
}: AboutCTASectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="about-cta"
        className="min-h-screen flex items-center justify-center py-20 text-center bg-background-dark relative"
      >
        {/* 액센트 컬러 포인트 - 테두리 효과 */}
        <div className="absolute inset-0 border-t border-accent/20" />
        <div className="absolute inset-0 border-b border-accent/20" />

        {/* 액센트 컬러 그라데이션 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

        <div className="flex flex-col items-center gap-4 relative z-10">
          <h2 className="text-3xl font-bold text-[#E6F1FF] md:text-4xl animate-glitch">
            {title}
          </h2>
          <p className="max-w-2xl text-[#8892B0]">{description}</p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-none border border-accent bg-accent px-6 py-3 text-base font-bold tracking-[0.3em] text-background-dark transition-all hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(0,254,149,0.4)]"
            >
              {primaryLabel}
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-none border-2 border-accent px-6 py-3 text-base font-bold tracking-[0.3em] text-accent transition-all hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(0,254,149,0.2)]"
            >
              {secondaryLabel}
            </button>
          </div>
        </div>
      </section>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        email="devcms21@gmail.com"
        github="mstagon"
        blogHref="https://velog.io/@devcms21"
      />
    </>
  );
}
