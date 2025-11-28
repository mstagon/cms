"use client";

interface AboutSystemHeaderProps {
  brandLabel: string;
  resumeLabel: string;
  navItems: { icon: string; title: string }[];
}

export default function AboutSystemHeader({
  brandLabel,
  resumeLabel,
  navItems,
}: AboutSystemHeaderProps) {
  return (
    <header className="pointer-events-none fixed top-4 left-1/2 z-40 flex w-full max-w-4xl -translate-x-1/2 justify-center px-4">
      <div className="pointer-events-auto group flex w-full items-center justify-between gap-6 rounded-full border border-primary/20 bg-[rgba(10,25,47,0.7)] px-5 py-2 text-sm font-mono text-[#a8b2d1] shadow-[0_0_20px_rgba(0,255,149,0.12)] backdrop-blur-xl transition-colors duration-300 hover:border-primary/50">
        <a className="flex items-center gap-3" href="#about" aria-label="Scroll to about section">
          <div className="h-8 w-8 text-primary transition-transform duration-500 group-hover:rotate-90">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12.001 2.003c-2.344 0-4.542.86-6.28 2.39L12 12.004l6.279-7.61c-1.738-1.531-3.936-2.391-6.279-2.391zm0 2.827a5.538 5.538 0 0 0-4.764 2.76L12 12.827l4.764-5.237a5.538 5.538 0 0 0-4.764-2.76zm-7.61 6.28C2.86 12.855 2 15.053 2 17.394c0 2.343.86 4.541 2.39 6.28L12.001 12l-7.61-9.28zM12.001 12l-5.237 4.764a5.538 5.538 0 0 0 2.76 4.764L12.001 12zm0 10.001c2.343 0 4.541-.86 6.28-2.39L12 12l-6.279 7.611c1.738 1.53 3.936 2.39 6.279 2.39zm7.61-6.28c1.53-1.738 2.39-3.936 2.39-6.279s-.86-4.542-2.39-6.28L12 12.001l7.61 9.28zM12.001 12l5.237-4.764a5.538 5.538 0 0 0-2.76-4.764L12.001 12z" />
            </svg>
          </div>
          <h2 className="text-[#E6F1FF] text-lg font-bold">{brandLabel}</h2>
        </a>
        <div className="h-6 w-px bg-primary/20" aria-hidden />
        <div className="flex items-center gap-3 text-base">
          {navItems.map((item) => (
            <button
              key={item.icon}
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#8892B0] transition-colors hover:bg-primary/15 hover:text-primary"
              title={item.title}
              aria-label={item.title}
            >
              <span className="material-symbols-outlined text-xl">{item.icon}</span>
            </button>
          ))}
        </div>
        <div className="h-6 w-px bg-primary/20" aria-hidden />
        <button
          type="button"
          className="flex h-8 items-center justify-center rounded-full border border-primary/50 bg-primary/10 px-4 text-xs font-bold tracking-wide text-primary transition-colors hover:bg-primary/20"
        >
          <span className="truncate">{resumeLabel}</span>
        </button>
      </div>
    </header>
  );
}

