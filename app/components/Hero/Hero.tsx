"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroIntro() {
  const wrapper = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const w1 = useRef<HTMLHeadingElement>(null);
  const w2 = useRef<HTMLHeadingElement>(null);
  const w3 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!wrapper.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    tl.to(
      titleRef.current,
      {
        scale: 0.3,
        opacity: 0,
        ease: "none",
      },
      0,
    )
      .fromTo(
        w1.current,
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, ease: "none" },
        0.2,
      )
      .fromTo(
        w2.current,
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, ease: "none" },
        0.4,
      )
      .fromTo(
        w3.current,
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, ease: "none" },
        0.6,
      )
      .to(
        [w1.current, w2.current, w3.current],
        {
          x: (i) => (i % 2 === 0 ? -200 : 200),
          opacity: 0,
          ease: "none",
        },
        0.8,
      );
  }, []);

  return (
    <section ref={wrapper} className="relative h-[150vh] overflow-hidden">
      <h1
        ref={titleRef}
        className="absolute top-[10%] left-1/2 -translate-x-1/2 text-[15vw] text-white m-0 whitespace-nowrap"
      >
        CHOI MIN SEOK
      </h1>
      <h2
        ref={w1}
        className="absolute left-1/2 -translate-x-1/2 text-[8vw] text-white m-0 whitespace-nowrap"
        style={{ top: "30%" }}
      >
        THE
      </h2>
      <h2
        ref={w2}
        className="absolute left-1/2 -translate-x-1/2 text-[8vw] text-white m-0 whitespace-nowrap"
        style={{ top: "40%" }}
      >
        FE
      </h2>
      <h2
        ref={w3}
        className="absolute left-1/2 -translate-x-1/2 text-[8vw] text-white m-0 whitespace-nowrap"
        style={{ top: "50%" }}
      >
        DEVELOPER
      </h2>
    </section>
  );
}
