import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getDossDetail(language: Language): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "모바일 우선 웹에서 주식 정보를 조회하고 관심 종목을 관리하는 서비스를 만들었습니다. 외부 API 연동(증권사), 검색(Elasticsearch), 인증(JWT)처럼 운영에 가까운 요소를 포함해 전체 흐름을 구현했습니다."
        : "DOSS is a mobile-first web app for checking stock information and managing a watchlist. It integrates the Korea Investment & Securities API, Elasticsearch-based search, JWT auth, and basic brute-force mitigation (login attempt limiting).",
    links: {
      github: "https://github.com/mstagon/DOSS",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "Next.js(프론트) + Spring Boot(백엔드)로 구성된 모바일 우선 웹 서비스입니다.\n\n- 데이터/운영: 외부 API 응답 지연/호출 제한을 고려해 서버에서 주기적으로 데이터를 갱신하고(MySQL 저장), 요청 시 DB 기반으로 응답하도록 구성했습니다.\n- 검색: Elasticsearch로 종목 검색/자동완성 분리 운영\n- 인증/보안: JWT 인증 + 로그인 시도 제한(기본적인 무차별 대입 방어)\n- 사용자 기능: 관심 종목 저장, 목록 조회\n\n운영 관점에서 “외부 의존성(API) + 캐시/갱신 + 인증”을 한 서비스 흐름으로 연결한 프로젝트입니다."
          : "A mobile-first web service built with Next.js (frontend) and Spring Boot (backend).\n\n- Data: fetches stock data via the Korea Investment & Securities API, refreshes it on a schedule, and stores it in MySQL.\n- Search: Elasticsearch-based stock search + autocomplete.\n- User features: watchlist and a simple mypage.\n- Auth/Security: JWT auth and login attempt limiting.\n- Frontend UX: step-by-step signup (useFunnel) and component-oriented UI; selected interactions use Framer Motion.",
      stats: {
        vision:
          language === "ko"
            ? "모바일 환경에서 빠르게 종목을 찾고 관심 종목을 관리하는 흐름에 집중했습니다."
            : "Focused on fast search and a simple watchlist flow on mobile.",
      },
    },
    role: {
      title:
        language === "ko" ? "Full-stack Developer" : "Full-stack Developer",
      responsibilities:
        language === "ko"
          ? [
              "Next.js와 TypeScript를 활용한 프론트엔드 개발 및 반응형 UI 구현",
              "Spring Boot 기반 RESTful API 설계 및 개발",
              "한국투자증권 API 연동 및 주식 데이터 실시간 조회 기능 구현",
              "Elasticsearch를 활용한 주식 검색 및 자동완성 기능 개발",
              "JWT 기반 인증 시스템 및 보안 기능 구현",
              "Zustand를 활용한 전역 상태 관리 및 컴포지블 UI 아키텍처 설계",
            ]
          : [
              "Frontend development using Next.js and TypeScript, implementing responsive UI",
              "RESTful API design and development based on Spring Boot",
              "Integration with Korea Investment & Securities API and implementation of real-time stock data retrieval",
              "Development of stock search and autocomplete functionality using Elasticsearch",
              "Implementation of JWT-based authentication system and security features",
              "Global state management using Zustand and design of composable UI architecture",
            ],
    },
    timeframe: "2025.03.13 - 2025.03.21",
    platform: "Web (Mobile-first)",
    type: "Financial Web Service",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Framer Motion",
      "Emotion",
      "Spring Boot",
      "Java",
      "MyBatis",
      "MySQL",
      "Elasticsearch",
      "JWT",
    ],
    performance: {
      pageLoadSpeed: { value: 92 },
    },
    challenges: [
      {
        title:
          language === "ko"
            ? "실시간 주식 데이터 동기화 및 캐싱 전략"
            : "Real-time Stock Data Synchronization and Caching Strategy",
        asIs:
          language === "ko"
            ? "한국투자증권 API 호출 시마다 응답 시간이 길어지고, 동시에 여러 사용자가 요청할 경우 API 호출 제한에 걸릴 위험이 있었습니다. 또한 불필요한 API 호출로 인한 비용 증가 문제가 있었습니다."
            : "Each call to the Korea Investment & Securities API resulted in long response times, and there was a risk of hitting API call limits when multiple users made requests simultaneously. There was also the issue of increased costs due to unnecessary API calls.",
        toBe:
          language === "ko"
            ? "15분 간격으로 스케줄링된 데이터 갱신 시스템을 구현하고, MySQL 데이터베이스에 캐시하여 빠른 조회가 가능하도록 했습니다. 마지막 업데이트 시간을 추적하여 필요할 때만 API를 호출하도록 최적화했습니다."
            : "We implemented a data refresh system scheduled at 15-minute intervals and cached data in a MySQL database for fast retrieval. We optimized it to call the API only when necessary by tracking the last update time.",
        result:
          language === "ko"
            ? "데이터를 서버에서 주기적으로 갱신하고 DB에 저장해, 요청 시 외부 API 호출 의존도를 줄였습니다."
            : "Reduced dependency on per-request external API calls by refreshing on a schedule and serving cached data from DB.",
      },
      {
        title:
          language === "ko"
            ? "Elasticsearch를 활용한 빠른 주식 검색 구현"
            : "Fast Stock Search Implementation Using Elasticsearch",
        asIs:
          language === "ko"
            ? "6,000개 이상의 주식 종목을 데이터베이스에서 LIKE 쿼리로 검색할 경우 성능 저하가 발생하고, 자동완성 기능 구현이 어려웠습니다."
            : "Searching over 6,000 stocks using LIKE queries in the database caused performance degradation, and implementing autocomplete functionality was difficult.",
        toBe:
          language === "ko"
            ? "Elasticsearch를 도입하여 주식 종목명과 종목 코드를 인덱싱하고, 실시간 검색 및 자동완성 기능을 구현했습니다. 검색어 입력 시 즉시 결과를 반환하도록 최적화했습니다."
            : "We introduced Elasticsearch to index stock names and codes, implementing real-time search and autocomplete functionality. We optimized it to return results immediately when users type search terms.",
        result:
          language === "ko"
            ? "대량 종목 목록에서도 검색/자동완성이 가능하도록 검색 전용 엔진을 분리했습니다."
            : "Separated search concerns by using a dedicated search engine for large stock lists and autocomplete.",
      },
      {
        title:
          language === "ko"
            ? "모바일 앱과 유사한 사용자 경험 구현"
            : "Implementing App-like User Experience",
        asIs:
          language === "ko"
            ? "웹 서비스의 한계로 인해 네이티브 앱과 같은 부드러운 인터랙션과 애니메이션을 제공하기 어려웠습니다."
            : "Due to the limitations of web services, it was difficult to provide smooth interactions and animations like native apps.",
        toBe:
          language === "ko"
            ? "Framer Motion을 활용하여 페이지 전환, 컴포넌트 애니메이션, 제스처 인터랙션을 구현했습니다. PWA 기술을 적용하여 앱처럼 설치하고 사용할 수 있도록 했습니다. 컴포지블 UI 설계를 통해 재사용 가능한 컴포넌트로 일관된 디자인 시스템을 구축했습니다."
            : "We implemented page transitions, component animations, and gesture interactions using Framer Motion. We applied PWA technology to enable app-like installation and usage. We built a consistent design system through composable UI design with reusable components.",
        result:
          language === "ko"
            ? "웹에서도 전환/모션이 과하지 않게 동작하도록 애니메이션 범위를 조절하고 컴포넌트 재사용성을 높였습니다."
            : "Tuned animations and improved component reuse to keep interactions smooth without being excessive.",
      },
      {
        title:
          language === "ko"
            ? "보안 강화 및 브루트포스 공격 방지"
            : "Security Enhancement and Brute Force Attack Prevention",
        asIs:
          language === "ko"
            ? "로그인 시도 제한 없이 무제한으로 시도할 수 있어 보안 취약점이 있었습니다."
            : "There was a security vulnerability as login attempts could be made unlimited times without restrictions.",
        toBe:
          language === "ko"
            ? "로그인 시도 횟수를 추적하는 테이블을 생성하고, 5회 실패 시 일정 시간 동안 로그인을 제한하는 기능을 구현했습니다. JWT 토큰 기반 인증 시스템을 구축하여 안전한 세션 관리를 구현했습니다."
            : "We created a table to track login attempts and implemented a feature that restricts login for a certain period after 5 failed attempts. We built a JWT token-based authentication system for secure session management.",
        result:
          language === "ko"
            ? "보안이 강화되었고, 무단 접근 시도에 대한 방어 체계를 구축했습니다."
            : "Security was enhanced, and we built a defense system against unauthorized access attempts.",
      },
      {
        title:
          language === "ko"
            ? "단계별 회원가입 프로세스로 사용자 몰입도 향상"
            : "Step-by-step Registration Process to Increase User Engagement",
        asIs:
          language === "ko"
            ? "일반적인 폼 기반 회원가입은 사용자에게 지루하고 이탈률이 높았습니다."
            : "Traditional form-based registration was boring for users and had a high bounce rate.",
        toBe:
          language === "ko"
            ? "Toss의 useFunnel 라이브러리를 활용하여 단계별 온보딩 프로세스를 구현했습니다. 각 단계마다 시각적 피드백과 진행 상황을 표시하여 사용자 몰입도를 높였습니다."
            : "We implemented a step-by-step onboarding process using Toss's useFunnel library. We displayed visual feedback and progress at each step to increase user engagement.",
        result:
          language === "ko"
            ? "단계별 입력으로 폼을 쪼개고 진행 상태를 노출하는 방식으로 온보딩 흐름을 구성했습니다."
            : "Structured onboarding by splitting the form into steps and showing progress state.",
      },
    ],
    architecture: {
      description:
        language === "ko"
          ? "DOSS는 클라이언트-서버 아키텍처를 기반으로 구축되었습니다. 프론트엔드는 Next.js 15의 App Router를 활용하여 서버 사이드 렌더링과 클라이언트 사이드 렌더링을 혼합한 하이브리드 렌더링 방식을 채택했습니다. 상태 관리는 Zustand를 통해 전역 상태를 관리하고, 컴포넌트별 로컬 상태는 React Hooks로 관리합니다. 백엔드는 Spring Boot 기반의 RESTful API 서버로 구성되어 있으며, MyBatis를 통해 MySQL 데이터베이스와 연동합니다. 한국투자증권 API는 백엔드 서버를 통해 프록시 방식으로 호출하여 API 키 보안을 유지합니다. Elasticsearch는 별도 서비스로 운영되며, 주식 검색 요청 시 백엔드를 통해 조회됩니다. 데이터 흐름은 다음과 같습니다: 클라이언트가 API 요청을 보내면, Spring Boot 서버가 JWT 토큰을 검증하고, 필요한 경우 한국투자증권 API를 호출하거나 데이터베이스/Elasticsearch에서 데이터를 조회하여 응답합니다. 주식 데이터는 15분마다 스케줄링된 작업을 통해 자동으로 갱신됩니다."
          : "DOSS is built on a client-server architecture. The frontend adopts a hybrid rendering approach combining server-side rendering and client-side rendering using Next.js 15's App Router. State management uses Zustand for global state, while component-specific local state is managed with React Hooks. The backend consists of a Spring Boot-based RESTful API server, connected to a MySQL database through MyBatis. The Korea Investment & Securities API is called through the backend server in a proxy manner to maintain API key security. Elasticsearch operates as a separate service and is queried through the backend when stock search requests are made. The data flow is as follows: When a client sends an API request, the Spring Boot server validates the JWT token, and if necessary, calls the Korea Investment & Securities API or retrieves data from the database/Elasticsearch to respond. Stock data is automatically updated through scheduled tasks every 15 minutes.",
      diagrams: [
        {
          title:
            language === "ko"
              ? "시스템 아키텍처 다이어그램"
              : "System Architecture Diagram",
          image: "",
          alt:
            language === "ko"
              ? "DOSS 시스템 아키텍처 구조도"
              : "DOSS system architecture diagram",
        },
      ],
    },
    retrospective:
      language === "ko"
        ? "외부 API 의존성이 있는 서비스를 운영 관점으로 바라보고(호출 제한/지연/실패), 이를 캐시/갱신/보안으로 흡수하는 구조를 직접 구성했습니다.\n다음에는 장애 상황(외부 API 실패/DB 장애)에 대한 에러 처리와 관측 가능성(로그/알림), 테스트를 보강하고 싶습니다."
        : "This project connected end-to-end concerns like external API integration, Elasticsearch search, and JWT auth. \nGiven the short timeframe, error handling and tests were limited; next I would improve failure UX (retry/caching policy) and add tests.",
    achievements: [
      {
        title:
          language === "ko"
            ? "API 호출 최적화로 성능 개선"
            : "Performance Improvement through API Call Optimization",
        description:
          language === "ko"
            ? "외부 API 호출 부담을 줄이기 위해 서버 주기 갱신 + DB 저장 흐름을 구성했습니다."
            : "Set up scheduled refresh + DB storage to reduce per-request external API dependence.",
      },
      {
        title:
          language === "ko"
            ? "검색 응답 시간 단축"
            : "Search Response Time Reduction",
        description:
          language === "ko"
            ? "Elasticsearch 기반 검색/자동완성을 구현했습니다."
            : "Implemented Elasticsearch-based search and autocomplete.",
      },
      {
        title:
          language === "ko"
            ? "회원가입 완료율 향상"
            : "Registration Completion Rate Increase",
        description:
          language === "ko"
            ? "useFunnel 기반 단계형 회원가입 플로우를 구성했습니다."
            : "Built a step-by-step signup flow with useFunnel.",
      },
      {
        title:
          language === "ko"
            ? "페이지 로드 속도 개선"
            : "Page Load Speed Improvement",
        description:
          language === "ko"
            ? "모바일 환경을 기준으로 화면 구성을 단순화하고, 필요한 데이터만 요청하도록 구성했습니다."
            : "Optimized mobile-first screens and limited requests to necessary data.",
      },
    ],
  };
}
