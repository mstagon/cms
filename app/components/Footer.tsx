// Footer 컴포넌트는 연락처 링크와 저작권 정보를 하단에 제공합니다.
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white/70">
      <div className="container mx-auto flex flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="font-medium text-white/90">Choi Min Seok</p>
          <p className="text-sm">
            Frontend Developer · © {new Date().getFullYear()}
          </p>
        </div>
        <nav className="flex items-center gap-5 text-sm">
          <a
            href="mailto:hello@example.com"
            className="transition-colors hover:text-white/95"
          >
            Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white/95"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white/95"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}



