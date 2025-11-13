// HeroIntro 컴포넌트는 스티키 인트로 문구와 스크롤 유도 표시를 렌더링합니다.
export default function HeroIntro() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center text-white">
      <p className="text-sm uppercase tracking-[0.5em] text-white/75">Choi Min Seok</p>
      <h1 className="text-[15vw] leading-none md:text-[8vw] text-white drop-shadow-[0_6px_18px_rgba(80,170,255,0.65)]">
        THE FE DEVELOPER
      </h1>
      <p className="max-w-xl text-lg text-white/80">
        인터랙션과 퍼포먼스를 겸비한 웹 프로덕트를 만드는 프론트엔드 개발자입니다.
      </p>
      <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.4em] text-white">
        <span>Scroll</span>
        <span className="animate-bounce text-xl">↓</span>
      </div>
    </div>
  );
}
