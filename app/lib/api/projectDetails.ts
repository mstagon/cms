// 프로젝트 상세 데이터 API
import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export async function getProjectDetail(
  slug: string,
  language: Language = "ko"
): Promise<ProjectDetail | null> {
  // 실제로는 API나 데이터베이스에서 가져올 수 있습니다
  // 여기서는 예시 데이터를 반환합니다

  const details: Record<string, ProjectDetail> = {
    "ecommerce-analytics": {
      objective:
        language === "ko"
          ? "이 프로젝트는 사용자가 사이버펑크 세계관 속 데이터 아카이브를 탐색하는 듯한 독특한 경험을 제공하는 프론트엔드 포트폴리오 웹사이트를 구축하는 것을 목표로 합니다. 정적인 레이아웃에서 벗어나, 동적인 애니메이션과 인터랙션을 통해 사용자의 몰입감을 극대화하고 개발자의 기술적 개성을 드러냅니다."
          : "This project aims to build a frontend portfolio website that provides a unique experience of exploring a data archive in a cyberpunk world. Moving away from static layouts, it maximizes user immersion through dynamic animations and interactions while showcasing the developer's technical personality.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD2ETtSdBZbHBVRQ6lbiSvArsP17MOlwaPns-HIiRrwnYXZYgylpUZtoFeTzDCZ9gTpLrUuLYoiHUMsMOGkDEssrthVI4o8gbMe_zOBbWavyQf6aK2D97Ae9d5ZzhY9TivjI0E3zymTkkBLWSfzxQ57dG3zV-QcbHWpYe3Lx65rx55Skq10h48CzN9uGoFS41f8jQ8H7y9KodoaEyB-EZtrR28QC12mvKe7UWQlqWZYXRHQjN9a8Szs6RltxuCc0ELRXhNQrlZg9Q",
      ],
      role: {
        title: language === "ko" ? "Lead Frontend & UI/UX Design" : "Lead Frontend & UI/UX Design",
        responsibilities:
          language === "ko"
            ? [
                "사이버펑크 컨셉에 부합하는 전체 UI/UX 디자인 및 프로토타이핑.",
                "React 및 Tailwind CSS를 사용한 컴포넌트 기반 아키텍처 설계 및 구현.",
                "GSAP를 활용하여 스크롤 기반 인터랙티브 애니메이션 및 글리치 효과 개발.",
                "프로젝트 데이터 구조화 및 동적 렌더링 로직 구현.",
              ]
            : [
                "Complete UI/UX design and prototyping aligned with cyberpunk concept.",
                "Component-based architecture design and implementation using React and Tailwind CSS.",
                "Development of scroll-based interactive animations and glitch effects using GSAP.",
                "Project data structuring and dynamic rendering logic implementation.",
              ],
      },
      timeframe: "Q1 2023",
      platform: "Web",
      type: "Portfolio",
      techStack: ["React", "Tailwind CSS", "GSAP", "Framer Motion", "Vite"],
      performance: {
        pageLoadSpeed: { value: 95, improvement: "+25% improvement" },
        lighthouseScore: { value: 98, score: "98/100" },
      },
    },
    "vr-data-visualization": {
      objective:
        language === "ko"
          ? "복잡한 데이터셋을 3D 공간에서 시각화하는 몰입형 가상현실 경험을 제공합니다."
          : "Provides an immersive virtual reality experience to visualize complex datasets in a 3D space.",
      images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCb28nXfQI9MtventpjpfMG9qnODYiO852Yrgkgk2FKGzjZY5j5MxI1QYizly5UW_je-HTTWPJiRcUVgGmc4XG37QVpu1yEizWrsZAoPxI4eqninwSJC1ChtIjP6hSLAXb4s2LcaK-Nevk6FQsKEkeKBmgFpVpbKn7twwyQlbyKgbvsq9IAJBUhazT8Rl0dZiOkbCmpYG5S3SJBhHNr9QTGVzrCEyiaJv7lHEdIe7LCvnkWIt0NVdM6DlHn3Y23rcP0PDcv0uL-gA",
      ],
      role: {
        title: language === "ko" ? "Frontend Developer" : "Frontend Developer",
        responsibilities:
          language === "ko"
            ? [
                "A-Frame과 Three.js를 활용한 VR 환경 구축.",
                "데이터 시각화 알고리즘 구현.",
                "성능 최적화 및 사용자 경험 개선.",
              ]
            : [
                "VR environment construction using A-Frame and Three.js.",
                "Data visualization algorithm implementation.",
                "Performance optimization and user experience improvement.",
              ],
      },
      timeframe: "Q2 2023",
      platform: "Web VR",
      type: "Data Visualization",
      techStack: ["A-Frame", "Three.js", "WebGL"],
      performance: {
        pageLoadSpeed: { value: 88, improvement: "+15% improvement" },
        lighthouseScore: { value: 92, score: "92/100" },
      },
    },
  };

  return details[slug] || null;
}

