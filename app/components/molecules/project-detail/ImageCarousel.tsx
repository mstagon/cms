// 이미지 캐러셀 분자
"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt?: string;
}

export default function ImageCarousel({ images, alt = "Project image" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="relative bg-black/20 border border-white/10 rounded-lg overflow-hidden">
      <div className="relative w-full aspect-video">
        <Image
          src={currentImage}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover"
          unoptimized
        />
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-2 bg-gradient-to-t from-black/80 to-transparent">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`block w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

