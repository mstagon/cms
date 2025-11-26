// 프로젝트 데이터를 패칭하는 비동기 함수입니다.
import type { ProjectItem, ProjectSummary } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export interface ProjectsApiResponse {
  featured: ProjectItem[];
  others: ProjectSummary[];
}

const featuredBase: Array<
  Pick<ProjectItem, "slug" | "href" | "image" | "tags" | "layout" | "unoptimized">
> = [
  {
    slug: "vanilla-extract-design-system",
    href: "/projects/vanilla-extract-design-system",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5H6Ciw3E1WVleTAI4i9VqSXpndnEhjFxhk_sxU9YZJ-_PxtoljNQAnUf4zsrQFKVqmJU5_mWmQ6heQQYNC0pjScw0Lbjc_zQfYebykkkBp6qKOg8J2ktO1AdAcrwH2UwPGqaZq1kquINtBa2cY1rnuq9F9N42QXjnSL2CbjtBUCmKOHXwHjOpQGZC7zVz7hk7Jt3tckuGZAEGCsXlGTZnj_CsC7cV_bHq12qdPTQsUJQBCu_rZYIRkMSbZBL8YC5iLGa_YQ99sgla",
    tags: ["Next.js", "TypeScript", "Vanilla Extract", "Storybook"],
    layout: "default",
  },
  {
    slug: "brand-experience-platform",
    href: "#",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeItotLSH2crkmZYlhQbXYzplXFSjnmY3CfZ0hlsuqnGYcpXhByd1ivwBucubos80-f1zGngZSTxKyOTJjgV5sXjPXXLiRA4U6Qbqh-e6Bj_tHPGDISLlOGyYwvh7ZKagdSlpVZntzwjlapoUmWMmEvV4QUyPlYQ0yK7hnS9A3dB41qocuNdNsCsidjLNx42gP95iJipkSJI3fbNRHxXDUMU-7zjUHVlpz-xmOzpmMC54Gm1ofuw5nVizZpZMfb0h-QQ3aATSY4rm-z8k",
    tags: ["Next.js", "GSAP", "WebGL", "i18n"],
    layout: "reversed",
  },
  {
    slug: "ecommerce-replatforming",
    href: "#",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHOnsIiftrosbI90PyI-DkNaVTie6uxteFft3y2PCWsHiHR_m8sDO2T9WSlEDXSo8VYQ3W__hyphenhyphenLXyV36Pw58E0e4N2LXWIKQFgNd0QFJul8WRDW1JpHpB4hzDyp5WLtWZOInN-w3Dk3k_VynsqTCO538EiyjR2SsumOHuVMJBM3ONPS4XienNoCj6LicgUMcwINXUUP31hDKm2WOwVFFPcV4uIbX-Y83EfevYIqyXbWUxgj7DWuBP8s33Iy-wNTZ5ubguvogSB3zP",
    tags: ["React Query", "Stripe", "SWR", "Storybook"],
    layout: "default",
  },
  {
    slug: "collaboration-workflow-suite",
    href: "#",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9Z3riBmtBOexwaXF2APDTTt-DJK4JMoqdxrq4TcwRzu0G8Ljlcb7oTGOLn-Wm7NtFFfG0q9c_nYEojpgRLUPJdJkoYNmpPbgMgBpGSvWYrUQvjeD_WgrgaLY4g8zyBUkGexztZVJ6BxMDgNYl_RQqh23X_u86DSiBi11LILlA0Jx31Har8SjlsR1nMZ7wc0bYciJFg5zAChd82MZVlypqun2sl2FqJhKf2of0g0z0zy9pyBbQi9P2GLZ5Et8hzAqVnV9TBAJbXqRvKyR",
    tags: ["React", "Recoil", "WebSocket", "Design System"],
    layout: "reversed",
  },
];

const featuredCopy: Record<
  Language,
  Record<string, Pick<ProjectItem, "title" | "description" | "imageAlt">>
> = {
  ko: {
    "vanilla-extract-design-system": {
      title: "Vanilla Extract 기반 디자인 시스템 구축",
      description:
        "Emotion 기반 스타일링을 대체하고 타입 안정성과 빌드 타임 CSS 생성을 도입해 개발 효율을 개선한 사내 디자인 시스템 프로젝트입니다.",
      imageAlt: "데스크톱과 모바일 UI 목업으로 구성된 디자인 시스템 프로젝트 프리뷰",
    },
    "brand-experience-platform": {
      title: "Brand Experience Platform",
      description:
        "글로벌 브랜드의 감성적인 캠페인을 위한 반응형 SPA를 구축했습니다. GSAP와 WebGL을 활용해 몰입감 있는 스크롤 인터랙션을 구현하고, SSR 기반 SEO 최적화를 달성했습니다.",
      imageAlt: "대형 LED 월과 인터랙티브 조명으로 구성된 브랜드 캠페인 현장 이미지",
    },
    "ecommerce-replatforming": {
      title: "E-commerce Replatforming",
      description:
        "대규모 전자상거래 플랫폼을 Next.js로 리플랫폼했습니다. 페이지 전환 속도를 40% 이상 개선하고, 구매 전환율을 끌어올린 마이크로 인터랙션을 설계했습니다.",
      imageAlt: "다양한 기기에서 쇼핑 중인 사용자를 형상화한 전자상거래 애니메이션",
    },
    "collaboration-workflow-suite": {
      title: "Collaboration Workflow Suite",
      description:
        "원격 협업을 위한 프로젝트 관리 도구를 구축했습니다. 대시보드와 실시간 작업 보드를 React 기반으로 구현하고, 성능 최적화로 렌더링 시간을 절반으로 단축했습니다.",
      imageAlt: "협업 도구 대시보드를 나타내는 추상적인 UI 컴포넌트",
    },
  },
  en: {
    "vanilla-extract-design-system": {
      title: "Building a Vanilla Extract Design System",
      description:
        "Replaced Emotion-based styling with type-safe Vanilla Extract to boost developer efficiency and ship zero-runtime styles for our in-house design system.",
      imageAlt: "Design system preview featuring desktop and mobile UI mockups",
    },
    "brand-experience-platform": {
      title: "Brand Experience Platform",
      description:
        "Delivered an immersive campaign SPA for a global brand. Used GSAP and WebGL for storytelling interactions while keeping SEO strong with SSR.",
      imageAlt: "Campaign scene with a large LED wall and interactive lighting",
    },
    "ecommerce-replatforming": {
      title: "E-commerce Replatforming",
      description:
        "Replatformed a large-scale commerce site to Next.js. Cut page transitions by 40% and engineered micro interactions that improved conversions.",
      imageAlt: "Illustration of shoppers across multiple devices in an e-commerce journey",
    },
    "collaboration-workflow-suite": {
      title: "Collaboration Workflow Suite",
      description:
        "Built a remote collaboration tool with real-time boards and dashboards in React. Halved rendering time through performance optimization.",
      imageAlt: "Abstract UI components representing a collaboration dashboard",
    },
  },
};

const othersBase: Array<{ slug: string; href: string }> = [
  { slug: "community-curation-platform", href: "#" },
  { slug: "personal-dev-blog", href: "#" },
  { slug: "task-manager-side-project", href: "#" },
  { slug: "open-source-ui-kit", href: "#" },
];

const othersCopy: Record<
  Language,
  Record<string, Pick<ProjectSummary, "title" | "description">>
> = {
  ko: {
    "community-curation-platform": {
      title: "Community Curation Platform",
      description: "사용자 취향 기반 커뮤니티 큐레이션 서비스. SSR + CDN으로 초기 로딩 35% 개선.",
    },
    "personal-dev-blog": {
      title: "Personal Dev Blog",
      description: "정적 블로그를 구축하고 LCP 1초 이하를 유지하는 성능 최적화를 진행했습니다.",
    },
    "task-manager-side-project": {
      title: "Task Manager Side Project",
      description: "React + Zustand로 생산성 도구를 제작하고 PWA 기반 오프라인 대응을 포함했습니다.",
    },
    "open-source-ui-kit": {
      title: "Open Source UI Kit",
      description: "오픈소스 UI 라이브러리에 접근성 개선 기능을 기여했습니다.",
    },
  },
  en: {
    "community-curation-platform": {
      title: "Community Curation Platform",
      description: "Interest-based community discovery service. SSR + CDN reduced initial load by 35%.",
    },
    "personal-dev-blog": {
      title: "Personal Dev Blog",
      description: "Static developer blog optimized to keep LCP under one second.",
    },
    "task-manager-side-project": {
      title: "Task Manager Side Project",
      description: "Productivity tool built with React and Zustand, including PWA offline support.",
    },
    "open-source-ui-kit": {
      title: "Open Source UI Kit",
      description: "Contributed accessibility-focused enhancements to an open-source UI library.",
    },
  },
};

function buildFeatured(language: Language): ProjectItem[] {
  return featuredBase.map((item) => {
    const copy = featuredCopy[language]?.[item.slug] ?? featuredCopy.ko[item.slug];
    return {
      ...item,
      title: copy.title,
      description: copy.description,
      imageAlt: copy.imageAlt,
    };
  });
}

function buildOthers(language: Language): ProjectSummary[] {
  return othersBase.map((item) => {
    const copy = othersCopy[language]?.[item.slug] ?? othersCopy.ko[item.slug];
    return {
      ...item,
      title: copy.title,
      description: copy.description,
    };
  });
}

const projectsContent: Record<Language, ProjectsApiResponse> = {
  ko: {
    featured: buildFeatured("ko"),
    others: buildOthers("ko"),
  },
  en: {
    featured: buildFeatured("en"),
    others: buildOthers("en"),
  },
};

export async function fetchProjectsData(language: Language = "ko"): Promise<ProjectsApiResponse> {
  if (language in projectsContent) {
    return projectsContent[language as Language];
  }
  return projectsContent.ko;
}

