"use client";

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
  return (
    <section className="py-20 text-center">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold text-[#E6F1FF] md:text-4xl animate-glitch">{title}</h2>
        <p className="max-w-2xl text-[#8892B0]">{description}</p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-none border border-primary bg-primary px-6 py-3 text-base font-bold tracking-[0.3em] text-background-dark transition-opacity hover:bg-opacity-80">
            {primaryLabel}
          </button>
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-none border-2 border-primary px-6 py-3 text-base font-bold tracking-[0.3em] text-primary transition-colors hover:bg-primary/20">
            {secondaryLabel}
          </button>
        </div>
      </div>
    </section>
  );
}

