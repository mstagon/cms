// 목차 분자
"use client";

import { useEffect, useState, useRef } from "react";

interface TableOfContentsItem {
  id: string;
  label: string;
  order: number;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // IntersectionObserver로 현재 보이는 섹션 추적
    const observer = new IntersectionObserver(
      (entries) => {
        // 가장 위쪽에 있는 섹션을 활성화
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const aTop = a.boundingClientRect.top;
            const bTop = b.boundingClientRect.top;
            return aTop - bTop;
          });

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    observerRef.current = observer;

    // 각 섹션 관찰 시작
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // 헤더 높이 고려
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <section>
      <h3 className="text-lg font-bold text-primary mb-3 font-mono">TABLE_OF_CONTENTS</h3>
      <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2 max-h-[calc(100vh-12rem)] overflow-y-auto">
        {items
          .sort((a, b) => a.order - b.order)
          .map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`w-full text-left px-3 py-2 rounded transition-all duration-200 font-mono text-sm ${
                  isActive
                    ? "bg-primary/20 text-primary border-l-2 border-primary"
                    : "text-[#9b92c9] hover:text-primary hover:bg-white/5"
                }`}
              >
                <span className="text-xs text-accent/70 mr-2">
                  {String(item.order).padStart(2, "0")}
                </span>
                {item.label}
              </button>
            );
          })}
      </div>
    </section>
  );
}

