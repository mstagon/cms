// 소개 섹션에 필요한 데이터를 패칭하는 비동기 함수 모음입니다.
import type {
  Award,
  Experience,
  Interest,
  ProfileIntro,
  SkillCategory,
} from "@/app/types/about";

export interface AboutApiResponse {
  profile: ProfileIntro;
  experiences: Experience[];
  skillCategories: SkillCategory[];
  awards: Award[];
  interests: Interest[];
}

const profile: ProfileIntro = {
  headline: "성장하는 프론트엔드 개발자,\n김개발입니다.",
  description:
    "사용자 경험을 최우선으로 생각하며, 비즈니스 목표에 기여하는 웹 서비스를 만듭니다.",
  imageAlt: "프론트엔드 개발자 김개발의 프로필 이미지",
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAL9FoyVmPJTFY36zeksOijLF8iWCEK-aQT4SDtvOeLUxs6OMEN2e2c0VPy3p3xK-ihrT__Ok66DrWec_Qa0RQrTYxxqeG1wX5zG9ijiXnlQEyadesZDwo8hQa1QrO5Gur0sSR23M4vIQF58lcE_lW8lyubcSdBlN1FDCY8BSqLz-orxMGpCJ_nv8pKuyzQ-FpSILld6d-lg5hODjnF1ID2FsMit5ncbM2n1t7HH8oka8TH2hmJq3Kx6IXy9ypnutO-o1tEnR2N6DPV",
};

const experiences: Experience[] = [
  {
    role: "Lead Frontend Developer",
    company: "Innovatech",
    period: "2021.01 - 현재",
    description:
      "주요 제품의 프론트엔드 아키텍처를 설계하고 팀을 이끌었습니다. 레거시 코드 리팩터링을 통해 페이지 로딩 속도를 30% 개선하고 신규 기능 출시 주기를 단축했습니다.",
    tags: ["React", "TypeScript", "Next.js", "Redux"],
  },
  {
    role: "Frontend Developer",
    company: "Creative Solutions",
    period: "2018.06 - 2020.12",
    description:
      "다양한 클라이언트 프로젝트에서 반응형 웹과 웹 애플리케이션을 구축했습니다. 공통 UI 컴포넌트 라이브러리를 마련하여 개발 효율을 높였습니다.",
    tags: ["JavaScript (ES6+)", "Vue.js", "Sass"],
  },
  {
    role: "Junior Web Developer",
    company: "WebStart Inc.",
    period: "2017.07 - 2018.05",
    description:
      "웹사이트 유지보수 및 기능 개발을 담당하며 HTML/CSS/JS 기본기를 단단히 다졌고, 웹 표준과 접근성을 실무에 적용했습니다.",
    tags: ["HTML5", "CSS3", "jQuery"],
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "고품질 UI/UX 구현과 상태 관리에 자신 있습니다.",
    skills: [
      {
        name: "React",
        icon: "⚛️",
        level: "comfortable",
        levelLabel: "Comfortable",
        proficiency: 92,
      },
      {
        name: "JavaScript",
        icon: "🟨",
        level: "comfortable",
        levelLabel: "Comfortable",
        proficiency: 88,
      },
      {
        name: "TypeScript",
        icon: "🟦",
        level: "comfortable",
        levelLabel: "Comfortable",
        proficiency: 85,
      },
      {
        name: "Next.js",
        icon: "⬛",
        level: "comfortable",
        levelLabel: "Comfortable",
        proficiency: 82,
      },
      {
        name: "Styled-components",
        icon: "💅",
        level: "comfortable",
        levelLabel: "Comfortable",
        proficiency: 78,
      },
      {
        name: "SCSS",
        icon: "🧵",
        level: "intermediate",
        levelLabel: "Intermediate",
        proficiency: 70,
      },
      {
        name: "Tailwind CSS",
        icon: "🌊",
        level: "intermediate",
        levelLabel: "Intermediate",
        proficiency: 75,
      },
    ],
  },
  {
    title: "Backend",
    description: "경량 백엔드와 API 설계를 경험했습니다.",
    skills: [
      {
        name: "Node.js",
        icon: "🟢",
        level: "intermediate",
        levelLabel: "Intermediate",
        proficiency: 68,
      },
      {
        name: "Express",
        icon: "🚂",
        level: "intermediate",
        levelLabel: "Intermediate",
        proficiency: 60,
      },
      {
        name: "GraphQL",
        icon: "🕸️",
        level: "beginner",
        levelLabel: "Learning",
        proficiency: 45,
      },
    ],
  },
  {
    title: "Infra / DevOps",
    description: "CI/CD 파이프라인과 클라우드 배포 경험이 있습니다.",
    skills: [
      {
        name: "GitHub Actions",
        icon: "⚙️",
        level: "intermediate",
        levelLabel: "Intermediate",
        proficiency: 65,
      },
      {
        name: "Docker",
        icon: "🐳",
        level: "beginner",
        levelLabel: "Learning",
        proficiency: 50,
      },
      {
        name: "Vercel",
        icon: "▲",
        level: "comfortable",
        levelLabel: "Comfortable",
        proficiency: 80,
      },
    ],
  },
  {
    title: "Database",
    description: "경량 데이터 모델링과 쿼리 튜닝을 수행한 경험이 있습니다.",
    skills: [
      {
        name: "PostgreSQL",
        icon: "🐘",
        level: "intermediate",
        levelLabel: "Intermediate",
        proficiency: 62,
      },
      {
        name: "Firebase",
        icon: "🔥",
        level: "comfortable",
        levelLabel: "Comfortable",
        proficiency: 77,
      },
    ],
  },
  {
    title: "AI / Etc",
    description: "프론트엔드 워크플로우에 AI 도구를 도입하고 있습니다.",
    skills: [
      {
        name: "OpenAI API",
        icon: "🧠",
        level: "beginner",
        levelLabel: "Learning",
        proficiency: 40,
      },
      {
        name: "LangChain",
        icon: "🔗",
        level: "beginner",
        levelLabel: "Learning",
        proficiency: 35,
      },
    ],
  },
];

const awards: Award[] = [
  {
    title: "Best Developer Award",
    description: "Innovatech · 2022.12",
    icon: "🏆",
  },
  {
    title: "Open Source Contribution",
    description: "UI-Kit 프로젝트 컨트리뷰터 · 2021.08",
    icon: "🧩",
  },
  {
    title: "Tech Conference Speaker",
    description: "Modern Frontend 컨퍼런스 · 2023.05",
    icon: "📣",
  },
];

const interests: Interest[] = [
  {
    title: "Indie Music",
    description: "새로운 밴드를 발견하고 공유하는 것을 즐깁니다.",
    icon: "🎧",
  },
  {
    title: "Hiking",
    description: "주말마다 산을 오르며 재충전합니다.",
    icon: "🥾",
  },
  {
    title: "Specialty Coffee",
    description: "핸드드립으로 커피를 내려 맛과 향을 기록합니다.",
    icon: "☕",
  },
];

export async function fetchAboutData(): Promise<AboutApiResponse> {
  return {
    profile,
    experiences,
    skillCategories,
    awards,
    interests,
  };
}
