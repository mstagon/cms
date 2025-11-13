"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ProjectCard from "@/app/components/Projects/ProjectCard";

export interface ProjectItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
  image?: string;
  tags?: string[];
}

interface ProjectsProps {
  items: ProjectItem[];
}

export default function Projects({ items }: ProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.1 }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen bg-black text-white flex items-center"
    >
      <div className="container mx-auto px-6 w-full">
        <h3
          ref={titleRef}
          className="text-4xl md:text-6xl font-semibold mb-10 tracking-tight"
        >
          Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p, idx) => (
            <ProjectCard key={idx} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
