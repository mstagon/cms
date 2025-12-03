// 소개 섹션에 필요한 데이터를 패칭하는 비동기 함수 모음입니다.
import type {
  Award,
  Experience,
  Interest,
  ProfileIntro,
  SkillCategory,
} from "@/app/types/about";
import type { Language } from "@/app/types/ui";

export interface AboutApiResponse {
  profile: ProfileIntro;
  experiences: Experience[];
  skillCategories: SkillCategory[];
  awards: Award[];
  interests: Interest[];
}

const sharedSkills = {
  frontend: [
    {
      name: "React",
      icon: "⚛️",
      level: "comfortable",
      levelLabel: "Proficient",
      proficiency: 78,
    },
    {
      name: "Next.js",
      icon: "⬛",
      level: "comfortable",
      levelLabel: "Proficient",
      proficiency: 77,
    },
    {
      name: "JavaScript",
      icon: "🟨",
      level: "comfortable",
      levelLabel: "Proficient",
      proficiency: 76,
    },
    {
      name: "TypeScript",
      icon: "🟦",
      level: "comfortable",
      levelLabel: "Proficient",
      proficiency: 75,
    },
    {
      name: "Tailwind CSS",
      icon: "🌊",
      level: "comfortable",
      levelLabel: "Proficient",
      proficiency: 72,
    },
    {
      name: "Styled-components",
      icon: "💅",
      level: "comfortable",
      levelLabel: "Proficient",
      proficiency: 71,
    },
    {
      name: "CSS",
      icon: "🎨",
      level: "comfortable",
      levelLabel: "Proficient",
      proficiency: 70,
    },
    {
      name: "Dart",
      icon: "🟢",
      level: "advanced",
      levelLabel: "Advanced",
      proficiency: 83,
    },
    {
      name: "Flutter",
      icon: "🦋",
      level: "advanced",
      levelLabel: "Advanced",
      proficiency: 84,
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "🟢",
      level: "intermediate",
      levelLabel: "Intermediate",
      proficiency: 63,
    },
    {
      name: "Python",
      icon: "🐍",
      level: "advanced",
      levelLabel: "Advanced",
      proficiency: 84,
    },
    {
      name: "Django",
      icon: "🌿",
      level: "intermediate",
      levelLabel: "Intermediate",
      proficiency: 62,
    },
    {
      name: "Flask",
      icon: "🧪",
      level: "comfortable",
      levelLabel: "Proficient",
      proficiency: 74,
    },
    {
      name: "FastAPI",
      icon: "⚡",
      level: "comfortable",
      levelLabel: "Proficient",
      proficiency: 73,
    },
    {
      name: "Spring",
      icon: "🌱",
      level: "intermediate",
      levelLabel: "Intermediate",
      proficiency: 60,
    },
    {
      name: "Java",
      icon: "☕",
      level: "intermediate",
      levelLabel: "Intermediate",
      proficiency: 58,
    },
    {
      name: "PHP",
      icon: "🐘",
      level: "intermediate",
      levelLabel: "Intermediate",
      proficiency: 57,
    },
  ],
  infra: [
    {
      name: "Docker",
      icon: "🐳",
      level: "intermediate",
      levelLabel: "Intermediate",
      proficiency: 60,
    },
    {
      name: "GitHub Actions",
      icon: "⚙️",
      level: "intermediate",
      levelLabel: "Intermediate",
      proficiency: 61,
    },
    {
      name: "Nginx",
      icon: "🧭",
      level: "intermediate",
      levelLabel: "Intermediate",
      proficiency: 55,
    },
  ],
  database: [
    {
      name: "MySQL",
      icon: "🐬",
      level: "intermediate",
      levelLabel: "Intermediate",
      proficiency: 60,
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      level: "beginner",
      levelLabel: "Beginner",
      proficiency: 40,
    },
    {
      name: "Supabase",
      icon: "🧪",
      level: "beginner",
      levelLabel: "Beginner",
      proficiency: 35,
    },
    {
      name: "Firebase",
      icon: "🔥",
      level: "comfortable",
      levelLabel: "Proficient",
      proficiency: 74,
    },
  ],
  ai: [
    {
      name: "LangChain",
      icon: "🔗",
      level: "beginner",
      levelLabel: "Beginner",
      proficiency: 34,
    },
    {
      name: "OpenAI API",
      icon: "🧠",
      level: "intermediate",
      levelLabel: "Intermediate",
      proficiency: 52,
    },
    {
      name: "TensorFlow / PyTorch",
      icon: "🧬",
      level: "beginner",
      levelLabel: "Beginner",
      proficiency: 33,
    },
  ],
} satisfies Record<string, SkillCategory["skills"]>;

const skillCopy: Record<
  Language,
  {
    frontend: string;
    backend: string;
    infra: string;
    database: string;
    ai: string;
  }
> = {
  ko: {
    frontend: "웹 · 모바일 프런트엔드 전반을 다루며 UI/UX 품질을 끌어올립니다.",
    backend: "다양한 백엔드 프레임워크로 비즈니스 로직과 API를 설계합니다.",
    infra: "배포 자동화와 서비스 운영 환경을 안정적으로 구성합니다.",
    database: "관계형/비관계형 DB와 클라우드 백엔드를 활용합니다.",
    ai: "AI 기반 서비스와 데이터 파이프라인을 프로덕트에 접목합니다.",
  },
  en: {
    frontend: "Elevating UI and UX quality across web and mobile frontends.",
    backend:
      "Designing business logic and APIs with a range of backend frameworks.",
    infra:
      "Building reliable deployment automation and operations environments.",
    database:
      "Leveraging relational, non-relational databases and cloud backends.",
    ai: "Integrating AI services and data pipelines into products.",
  },
};

function buildSkillCategories(language: Language): SkillCategory[] {
  return [
    {
      title: "Frontend",
      description: skillCopy[language].frontend,
      skills: sharedSkills.frontend,
    },
    {
      title: "Backend & API",
      description: skillCopy[language].backend,
      skills: sharedSkills.backend,
    },
    {
      title: "Infra & DevOps",
      description: skillCopy[language].infra,
      skills: sharedSkills.infra,
    },
    {
      title: "Database & Cloud",
      description: skillCopy[language].database,
      skills: sharedSkills.database,
    },
    {
      title: "AI & Data",
      description: skillCopy[language].ai,
      skills: sharedSkills.ai,
    },
  ];
}

const aboutContent: Record<Language, AboutApiResponse> = {
  ko: {
    profile: {
      headline: "성장하는 프론트엔드 개발자\n최민석입니다",
      description:
        "상명대학교 스마트정보통신공학과 전공, 앱&웹 연계전공을 복수 전공하며 이론과 실무를 함께 익혔습니다. 사용자 경험을 최우선으로 생각하며, 비즈니스 목표에 기여하는 웹 서비스를 만듭니다.",
      imageAlt: "최민석 프로필 이미지",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAL9FoyVmPJTFY36zeksOijLF8iWCEK-aQT4SDtvOeLUxs6OMEN2e2c0VPy3p3xK-ihrT__Ok66DrWec_Qa0RQrTYxxqeG1wX5zG9ijiXnlQEyadesZDwo8hQa1QrO5Gur0sSR23M4vIQF58lcE_lW8lyubcSdBlN1FDCY8BSqLz-orxMGpCJ_nv8pKuyzQ-FpSILld6d-lg5hODjnF1ID2FsMit5ncbM2n1t7HH8oka8TH2hmJq3Kx6IXy9ypnutO-o1tEnR2N6DPV",
    },
    experiences: [
      {
        role: "운영진",
        company: "멋쟁이 사자처럼 대학 11기 · 상명대학교",
        period: "2023.01 - 2023.12",
        description:
          "상명대학교 11기 운영진으로 활동하며 커리큘럼 운영과 팀 해커톤을 총괄했습니다. 웹 프로젝트 멘토링을 진행했습니다.",
        tags: ["Community", "Curriculum", "Mentoring"],
      },
      {
        role: "운영진",
        company: "멋쟁이 사자처럼 대학 12기 · 상명대학교",
        period: "2024.01 - 2024.12",
        description:
          "12기 운영진으로 연임하여 교육 프로그램 고도화와 앱 프로젝트 멘토링을 담당했습니다. 운영진 온보딩 체계를 개선했습니다.",
        tags: ["Leadership", "Mentoring", "Improvement"],
      },
      {
        role: "학부연구생",
        company: "상명대학교 스마트정보통신공학과",
        period: "2023.03 - 2023.12",
        description:
          "학부연구생으로 활동하며 AI 기반 신호처리 연구 논문을 준비해 학술대회에 발표했습니다. 모델 성능 검증과 데이터 파이프라인 구축, 발표 자료 제작을 담당했습니다.",
        tags: ["Research", "AI", "Signal Processing"],
      },
    ],
    skillCategories: buildSkillCategories("ko"),
    awards: [
      {
        title: "2023 상명대학교 전공소모임 대상",
        description: "상명대학교",
        icon: "🏅",
      },
      {
        title: "2023 소프트웨어 융합클러스터 2.0 입상",
        description: "과학기술정보통신부 · 정보통신산업진흥원",
        icon: "🏆",
      },
      {
        title: "2024 소프트웨어 융합클러스터 2.0 입상",
        description: "과학기술정보통신부 · 정보통신산업진흥원",
        icon: "🏆",
      },
      {
        title: "2021 상명대학교 SM Learning Fair 장려상",
        description: "상명대학교",
        icon: "🎖️",
      },
      {
        title: "ADsP (데이터 분석 준전문가)",
        description: "한국데이터산업진흥원 · 합격",
        icon: "📊",
      },
      {
        title: "정보처리기사 필기",
        description: "한국산업인력공단 · 필기 합격, 실기 준비중",
        icon: "🧾",
      },
    ],
    interests: [
      {
        title: "Jpop Music",
        description: "Jpop 음악을 듣고 즐깁니다.",
        icon: "🎧",
      },
      {
        title: "Biking",
        description: "자전거를 타고 여행하는 것을 즐깁니다.",
        icon: "🚴",
      },
      {
        title: "Reading",
        description: "책을 읽고 새로운 지식을 습득하는 것을 즐깁니다.",
        icon: "📚",
      },
    ],
  },
  en: {
    profile: {
      headline: "Growing Frontend Developer\nChoi Min Seok",
      description:
        "Double-majoring in Smart Information & Communication Engineering and the App & Web convergence program at Sangmyung University. I build web services that prioritize user experience while supporting business goals.",
      imageAlt: "Profile portrait of Choi Min Seok",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAL9FoyVmPJTFY36zeksOijLF8iWCEK-aQT4SDtvOeLUxs6OMEN2e2c0VPy3p3xK-ihrT__Ok66DrWec_Qa0RQrTYxxqeG1wX5zG9ijiXnlQEyadesZDwo8hQa1QrO5Gur0sSR23M4vIQF58lcE_lW8lyubcSdBlN1FDCY8BSqLz-orxMGpCJ_nv8pKuyzQ-FpSILld6d-lg5hODjnF1ID2FsMit5ncbM2n1t7HH8oka8TH2hmJq3Kx6IXy9ypnutO-o1tEnR2N6DPV",
    },
    experiences: [
      {
        role: "Operations Team",
        company: "Like Lion University 11th · Sangmyung University",
        period: "Jan 2023 - Dec 2023",
        description:
          "Managed the 11th cohort curriculum and team hackathons, while mentoring web projects to help members ship real products.",
        tags: ["Community", "Curriculum", "Mentoring"],
      },
      {
        role: "Operations Team",
        company: "Like Lion University 12th · Sangmyung University",
        period: "Jan 2024 - Dec 2024",
        description:
          "Renewed the education program and led app project mentoring. Improved the operations onboarding playbook for the next cohort.",
        tags: ["Leadership", "Mentoring", "Improvement"],
      },
      {
        role: "Undergraduate Researcher",
        company:
          "Sangmyung University · Smart Information & Communication Engineering",
        period: "Mar 2023 - Dec 2023",
        description:
          "Prepared and presented an AI-driven signal processing research paper at an academic conference. Took charge of model validation, data pipelines, and presentation materials.",
        tags: ["Research", "AI", "Signal Processing"],
      },
    ],
    skillCategories: buildSkillCategories("en"),
    awards: [
      {
        title: "2023 Sangmyung University Major Club Grand Prize",
        description: "Sangmyung University",
        icon: "🏅",
      },
      {
        title: "2023 Software Convergence Cluster 2.0 Award",
        description: "Ministry of Science and ICT · NIPA",
        icon: "🏆",
      },
      {
        title: "2024 Software Convergence Cluster 2.0 Award",
        description: "Ministry of Science and ICT · NIPA",
        icon: "🏆",
      },
      {
        title: "2021 Sangmyung University SM Learning Fair Encouragement Prize",
        description: "Sangmyung University",
        icon: "🎖️",
      },
      {
        title: "ADsP (Advanced Data Analytics Semi-Professional)",
        description: "Korea Data Agency · Passed",
        icon: "📊",
      },
      {
        title: "Engineer Information Processing (Written)",
        description: "HRDK · Written Exam Passed, preparing for practical",
        icon: "🧾",
      },
    ],
    interests: [
      {
        title: "J-pop Music",
        description: "Listening to and collecting J-pop tracks.",
        icon: "🎧",
      },
      {
        title: "Biking",
        description: "Exploring new places and short trips on a bike.",
        icon: "🚴",
      },
      {
        title: "Reading",
        description: "Diving into books to discover new ideas.",
        icon: "📚",
      },
    ],
  },
};

export async function fetchAboutData(
  language: Language = "ko"
): Promise<AboutApiResponse> {
  if (language in aboutContent) {
    return aboutContent[language as Language];
  }
  return aboutContent.ko;
}
