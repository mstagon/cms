// 프로젝트 섹션에서 사용할 대표 및 보조 프로젝트 데이터를 제공합니다.
import { ProjectItem, ProjectSummary } from "@/app/types/projects";

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    title: "서비스 A",
    description: "대규모 트래픽 대응, SSR + CDN 처리",
    href: "#",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3q7jmzO2oXhhZhbwbmFV_Jx36YCDVhZWoP61VA3uRfs1ov8hW4MnFZSneHLzLRfW7vaAzJo7HmdQW4YZX-SX70nSGJjaw6tzxA0IFUWGpIt1xCWTscXr_H9JyDzaqTb_K_zUjgjkNcP5W2ffpPRi4NL0wtyFUU5zL7ZSFwi1AqR4W8OW5j6gLWseoQ5YKwXOHNpeG9NdhUpBFVxzdjeDnz9rf12jnPtQgRzFr1QGz929WnCTc5IPdP70ATF9vF09xYU3GTM9yVXVu",
    imageAlt: "A modern office space with laptops on a table, representing a business dashboard project.",
    tags: ["Next.js", "Edge", "GSAP"],
    unoptimized: true,
  },
  {
    title: "서비스 B",
    description: "인터랙션 중심 SPA, 모듈러 애니메이션",
    href: "#",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoOUAlU7_9Mv4hoZ4ZFimzqBr5RQOokynyQMY4JfK5i9vUeZizrHisxb0-EzgQNGoX3otBKwALBX8t4880ujTm38N3a2zIUMqnToGw6G790JlBVVKH9guEQZMcPMQLT8dsbRU1IoCfVpH-xrv5ZK-auOWwmP_SmQtBPJPU-PgAq1n4nOwLVflkCtjEctNNFVYOTnHNP8xjtNrRFoikrLSuHAqoNBIyA9tgeYmr2_snxcDkRdP3_U_jRsNzeigLryj9JLfl_ME52Usv",
    imageAlt: "Stylish sneakers on a colorful background, for an e-commerce platform.",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    layout: "reversed",
    unoptimized: true,
  },
  {
    title: "서비스 C",
    description: "태스크 관리를 위한 협업 툴",
    href: "#",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp83ACzFmocGsdxs6FcC2MomiCAlPNsHBmFTT4Yts58zbYLeQdjIfbE9Y-gFdWeM1R_nWKI4D55JAo0odYUkwXIUubOwZxQ8alulAqhbKP0VzLIGorFHdX_J4Z6irRcBISr7MwQanb7Dk6aonxiYLepLX5Fuu7PGb9M3DbcK9ajcy12ndBiJEwUhCvA0GyvQ9YuvS_S0OonxrnArsb0VJ41FMHzAPSyswGKMR7ROc-9AkdIUi1K23gRKJkRHVXQMYeCO82FrbEtUSD",
    imageAlt: "People collaborating around a laptop, representing a task management application.",
    tags: ["Vue.js", "Firebase", "Pinia"],
    unoptimized: true,
  },
];

export const OTHER_PROJECTS: ProjectSummary[] = [
  {
    title: "커뮤니티 플랫폼 개발",
    description: "다양한 주제를 다루는 사용자 참여형 커뮤니티",
    href: "#",
  },
  {
    title: "개인 블로그 리뉴얼",
    description: "Gatsby 기반 정적 블로그 구축 및 성능 최적화",
    href: "#",
  },
  {
    title: "사이드 프로젝트: 투두리스트 앱",
    description: "React와 TypeScript를 활용한 상태 관리 앱",
    href: "#",
  },
  {
    title: "오픈소스 라이브러리 컨트리뷰션",
    description: "유명 UI 라이브러리 버그 수정 및 기능 개선 참여",
    href: "#",
  },
];
