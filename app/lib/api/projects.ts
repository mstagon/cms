// 프로젝트 데이터 API
import type { ProjectItem } from "@/app/types/projects";
import type { ProjectsApiResponse } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export type { ProjectsApiResponse };

export async function getProjects(language: Language = "ko"): Promise<ProjectsApiResponse> {
  // 실제로는 API나 데이터베이스에서 가져올 수 있습니다
  // 여기서는 예시 데이터를 반환합니다
  
  const featured: ProjectItem[] = [
    {
      id: "doss",
      title: language === "ko" ? "DOSS" : "DOSS",
      description:
        language === "ko"
          ? "설치 없이 어디서든 앱처럼 사용할 수 있는 모바일 뷰 기반 주식 확인 증권 웹 서비스. 한국투자증권 API와 Elasticsearch를 활용한 실시간 주식 정보 제공 및 빠른 검색 기능."
          : "A mobile-view-based stock checking securities web service that works like an app without installation, accessible anywhere. Provides real-time stock information using Korea Investment & Securities API and fast search functionality with Elasticsearch.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2ETtSdBZbHBVRQ6lbiSvArsP17MOlwaPns-HIiRrwnYXZYgylpUZtoFeTzDCZ9gTpLrUuLYoiHUMsMOGkDEssrthVI4o8gbMe_zOBbWavyQf6aK2D97Ae9d5ZzhY9TivjI0E3zymTkkBLWSfzxQ57dG3zV-QcbHWpYe3Lx65rx55Skq10h48CzN9uGoFS41f8jQ8H7y9KodoaEyB-EZtrR28QC12mvKe7UWQlqWZYXRHQjN9a8Szs6RltxuCc0ELRXhNQrlZg9Q",
      imageAlt: language === "ko" ? "DOSS 주식 확인 서비스" : "DOSS Stock Checking Service",
      tags: ["Next.js", "React", "TypeScript", "Spring Boot", "Elasticsearch"],
      type: "featured",
      status: "online",
      directory: "DIR_01:PROJ_DOSS",
      slug: "doss",
    },
    {
      id: "rest-forest",
      title: language === "ko" ? "휴림 (Rest Forest)" : "Rest Forest (휴림)",
      description:
        language === "ko"
          ? "게임화된 디지털 디톡스 모바일 애플리케이션. NFC 태그 기반 스마트폰 거치 감지 시스템과 가상 식물 성장 메커니즘을 통해 스마트폰 사용 시간을 줄이고 건강한 디지털 라이프를 실현합니다."
          : "A gamified digital detox mobile application. Reduces smartphone usage time and achieves a healthy digital life through NFC tag-based smartphone docking detection system and virtual plant growth mechanism.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb28nXfQI9MtventpjpfMG9qnODYiO852Yrgkgk2FKGzjZY5j5MxI1QYizly5UW_je-HTTWPJiRcUVgGmc4XG37QVpu1yEizWrsZAoPxI4eqninwSJC1ChtIjP6hSLAXb4s2LcaK-Nevk6FQsKEkeKBmgFpVpbKn7twwyQlbyKgbvsq9IAJBUhazT8Rl0dZiOkbCmpYG5S3SJBhHNr9QTGVzrCEyiaJv7lHEdIe7LCvnkWIt0NVdM6DlHn3Y23rcP0PDcv0uL-gA",
      imageAlt: language === "ko" ? "휴림 디지털 디톡스 앱" : "Rest Forest Digital Detox App",
      tags: ["Flutter", "Dart", "NFC", "Provider", "Mobile"],
      type: "featured",
      status: "online",
      directory: "DIR_02:PROJ_REST_FOREST",
      slug: "rest-forest",
    },
    {
      id: "phc",
      title: language === "ko" ? "PHC (보건소 통합 관리 시스템)" : "PHC (Public Health Center)",
      description:
        language === "ko"
          ? "보건소의 디지털 전환을 위한 통합 관리 시스템. React와 Flutter 하이브리드 아키텍처를 통해 환자 접수, 예약 관리, 진료 기록, 처방전 관리를 디지털화하여 효율성을 극대화합니다."
          : "An integrated management system for digital transformation of public health centers. Digitizes patient check-in, appointment management, medical records, and prescription management through React and Flutter hybrid architecture to maximize efficiency.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2ETtSdBZbHBVRQ6lbiSvArsP17MOlwaPns-HIiRrwnYXZYgylpUZtoFeTzDCZ9gTpLrUuLYoiHUMsMOGkDEssrthVI4o8gbMe_zOBbWavyQf6aK2D97Ae9d5ZzhY9TivjI0E3zymTkkBLWSfzxQ57dG3zV-QcbHWpYe3Lx65rx55Skq10h48CzN9uGoFS41f8jQ8H7y9KodoaEyB-EZtrR28QC12mvKe7UWQlqWZYXRHQjN9a8Szs6RltxuCc0ELRXhNQrlZg9Q",
      imageAlt: language === "ko" ? "PHC 보건소 관리 시스템" : "PHC Public Health Center Management System",
      tags: ["React", "Flutter", "FastAPI", "Python", "Healthcare"],
      type: "featured",
      status: "online",
      directory: "DIR_03:PROJ_PHC",
      slug: "phc",
    },
    {
      id: "planz",
      title: language === "ko" ? "Planz (수면 관리 앱)" : "Planz (Sleep Management App)",
      description:
        language === "ko"
          ? "개인 맞춤형 수면 관리 모바일 애플리케이션. 사용자의 일정을 고려하여 최적의 수면 시간을 자동으로 계획하고, 루틴 기반 스케줄 관리와 수면 기록 기능을 통해 규칙적인 수면 패턴을 형성하도록 돕습니다."
          : "A personalized sleep management mobile application. Automatically plans optimal sleep times considering user schedules, and helps form regular sleep patterns through routine-based schedule management and sleep record features.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb28nXfQI9MtventpjpfMG9qnODYiO852Yrgkgk2FKGzjZY5j5MxI1QYizly5UW_je-HTTWPJiRcUVgGmc4XG37QVpu1yEizWrsZAoPxI4eqninwSJC1ChtIjP6hSLAXb4s2LcaK-Nevk6FQsKEkeKBmgFpVpbKn7twwyQlbyKgbvsq9IAJBUhazT8Rl0dZiOkbCmpYG5S3SJBhHNr9QTGVzrCEyiaJv7lHEdIe7LCvnkWIt0NVdM6DlHn3Y23rcP0PDcv0uL-gA",
      imageAlt: language === "ko" ? "Planz 수면 관리 앱" : "Planz Sleep Management App",
      tags: ["Flutter", "Dart", "Spring Boot", "Mobile", "Health"],
      type: "featured",
      status: "online",
      directory: "DIR_04:PROJ_PLANZ",
      slug: "planz",
    },
    {
      id: "moyang",
      title: language === "ko" ? "Moyang (모양)" : "Moyang (모양)",
      description:
        language === "ko"
          ? "자취생과 원룸 거주자들을 위한 통합 양도 플랫폼. 자취방 양도 거래를 중심으로 지역별 채팅, 지도 기반 매물 조회, 실시간 알림 등 사용자 경험을 극대화하는 커뮤니티 기반 거래 플랫폼입니다."
          : "An integrated transfer platform for people living alone and studio apartment residents. A community-based trading platform centered around room transfer transactions, maximizing user experience with regional chat, map-based property search, and real-time notifications.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2ETtSdBZbHBVRQ6lbiSvArsP17MOlwaPns-HIiRrwnYXZYgylpUZtoFeTzDCZ9gTpLrUuLYoiHUMsMOGkDEssrthVI4o8gbMe_zOBbWavyQf6aK2D97Ae9d5ZzhY9TivjI0E3zymTkkBLWSfzxQ57dG3zV-QcbHWpYe3Lx65rx55Skq10h48CzN9uGoFS41f8jQ8H7y9KodoaEyB-EZtrR28QC12mvKe7UWQlqWZYXRHQjN9a8Szs6RltxuCc0ELRXhNQrlZg9Q",
      imageAlt: language === "ko" ? "Moyang 양도 플랫폼" : "Moyang Transfer Platform",
      tags: ["Flutter", "Dart", "Riverpod", "GoRouter", "Community"],
      type: "featured",
      status: "online",
      directory: "DIR_05:PROJ_MOYANG",
      slug: "moyang",
    },
    {
      id: "tripcut",
      title: language === "ko" ? "TripCut" : "TripCut",
      description:
        language === "ko"
          ? "K-드라마 촬영지를 중심으로 여행지를 탐색·저장·리뷰하고, 테마/지역별 추천 코스로 일정을 손쉽게 구성하는 모바일 최적화 웹 서비스. PWA 기술을 통해 네이티브 앱 수준의 사용자 경험을 제공합니다."
          : "A mobile-optimized web service that allows users to explore, save, and review travel destinations centered around K-drama filming locations, and easily create itineraries with recommended courses by theme/region. Provides native app-level user experience through PWA technology.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2ETtSdBZbHBVRQ6lbiSvArsP17MOlwaPns-HIiRrwnYXZYgylpUZtoFeTzDCZ9gTpLrUuLYoiHUMsMOGkDEssrthVI4o8gbMe_zOBbWavyQf6aK2D97Ae9d5ZzhY9TivjI0E3zymTkkBLWSfzxQ57dG3zV-QcbHWpYe3Lx65rx55Skq10h48CzN9uGoFS41f8jQ8H7y9KodoaEyB-EZtrR28QC12mvKe7UWQlqWZYXRHQjN9a8Szs6RltxuCc0ELRXhNQrlZg9Q",
      imageAlt: language === "ko" ? "TripCut 여행 플랫폼" : "TripCut Travel Platform",
      tags: ["Next.js", "React", "TypeScript", "PWA", "Tourism"],
      type: "featured",
      status: "online",
      directory: "DIR_06:PROJ_TRIPCUT",
      slug: "tripcut",
    },
    {
      id: "teamo",
      title: language === "ko" ? "Teamo" : "Teamo",
      description:
        language === "ko"
          ? "개발자 팀원 모집 플랫폼. Next.js와 NestJS 기반 풀스택 애플리케이션으로, Docker Compose를 활용한 멀티 컨테이너 인프라와 GitHub Actions를 통한 무중단 자동 배포 시스템을 구축했습니다. 라즈베리파이 서버에서 운영되며 완전 자동화된 DevOps 파이프라인을 갖추고 있습니다."
          : "Developer team recruitment platform. A full-stack application based on Next.js and NestJS, with multi-container infrastructure using Docker Compose and a zero-downtime automated deployment system through GitHub Actions. Operates on Raspberry Pi server with a fully automated DevOps pipeline.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2ETtSdBZbHBVRQ6lbiSvArsP17MOlwaPns-HIiRrwnYXZYgylpUZtoFeTzDCZ9gTpLrUuLYoiHUMsMOGkDEssrthVI4o8gbMe_zOBbWavyQf6aK2D97Ae9d5ZzhY9TivjI0E3zymTkkBLWSfzxQ57dG3zV-QcbHWpYe3Lx65rx55Skq10h48CzN9uGoFS41f8jQ8H7y9KodoaEyB-EZtrR28QC12mvKe7UWQlqWZYXRHQjN9a8Szs6RltxuCc0ELRXhNQrlZg9Q",
      imageAlt: language === "ko" ? "Teamo 팀원 모집 플랫폼" : "Teamo Team Recruitment Platform",
      tags: ["Next.js", "NestJS", "Docker", "CI/CD", "DevOps"],
      type: "featured",
      status: "online",
      directory: "DIR_07:PROJ_TEAMO",
      slug: "teamo",
    },
  ];

  const others: ProjectItem[] = [
    {
      id: "employment",
      title: language === "ko" ? "취업의신" : "Employment God",
      description:
        language === "ko"
          ? "AI 기반 통합 취업 지원 플랫폼. 챗봇을 활용한 실시간 채용 정보 검색, OpenAI GPT를 활용한 자소서 첨삭 및 면접 예상 질문 제공 기능을 통해 취업 준비생들을 체계적으로 지원합니다."
          : "AI-based integrated employment support platform. Systematically supports job seekers through chatbot-based real-time recruitment information search, resume editing using OpenAI GPT, and expected interview questions.",
      type: "regular",
      status: "online",
      tags: ["React", "Flask", "OpenAI GPT", "FullCalendar"],
      filename: "employment.proj",
      slug: "employment",
    },
    {
      id: "smu-ecampus-progress-checking",
      title: language === "ko" ? "SMU e-Campus 진도율 체크" : "SMU e-Campus Progress Check",
      description:
        language === "ko"
          ? "Python Tkinter 기반 데스크톱 애플리케이션. e-Campus 웹사이트에 자동 로그인하여 수강 중인 모든 과목의 진도율을 한 번에 확인할 수 있는 도구입니다. 웹 스크래핑 기술을 활용하여 진도율 정보를 자동으로 수집하고 직관적인 테이블 형태로 표시합니다."
          : "Python Tkinter-based desktop application. A tool that automatically logs into the e-Campus website to check the progress rates of all enrolled courses at once. Uses web scraping technology to automatically collect progress rate information and display it in an intuitive table format.",
      type: "regular",
      status: "online",
      tags: ["Python", "Tkinter", "BeautifulSoup", "Web Scraping"],
      filename: "smu-ecampus.proj",
      slug: "smu-ecampus-progress-checking",
    },
    {
      id: "digital-bridge",
      title: language === "ko" ? "Digital Bridge" : "Digital Bridge",
      description:
        language === "ko"
          ? "시니어 계층을 위한 디지털 교육 플랫폼. Django 기반 웹 애플리케이션으로, 강의 영상과 실습 사이트를 같은 페이지에 배치하여 사용자가 강의를 보면서 동시에 실제 웹사이트를 직접 조작하며 학습할 수 있는 혁신적인 학습 환경을 제공합니다."
          : "Digital education platform for senior citizens. A Django-based web application that provides an innovative learning environment by placing lecture videos and practice sites on the same page, allowing users to watch lectures while simultaneously manipulating actual websites.",
      type: "regular",
      status: "online",
      tags: ["Django", "Python", "Bootstrap", "Education"],
      filename: "digital-bridge.proj",
      slug: "digital-bridge",
    },
    {
      id: "6",
      title: language === "ko" ? "추가 프로젝트" : "Additional Projects",
      description:
        language === "ko"
          ? "더 많은 프로젝트와 케이스 스터디에 대해 논의하려면 연락해주세요."
          : "Contact me to discuss more projects and case studies not featured here.",
      type: "encrypted",
      status: "locked",
      tags: [],
      filename: "ARCHIVE_ENCRYPTED",
    },
  ];

  return {
    featured,
    others,
  };
}

