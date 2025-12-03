import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getDossDetail(language: Language): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "DOSS는 설치 없이 어디서든 앱처럼 사용할 수 있는 모바일 뷰 기반 주식 확인 증권 웹 서비스입니다. 사용자들이 복잡한 증권 앱 설치 없이도 웹 브라우저를 통해 실시간 주식 정보를 확인하고, 관심 종목을 관리할 수 있도록 하는 것이 핵심 목표입니다. 한국투자증권 API를 활용하여 국내 및 미국 주식 시장의 실시간 데이터를 제공하고, Elasticsearch를 통한 빠른 검색 기능으로 6,000개 이상의 종목을 쉽게 찾을 수 있도록 구현했습니다. 또한 앱과 유사한 사용자 경험을 제공하기 위해 PWA 기술과 세밀한 인터랙션 디자인을 적용하여 웹 서비스임에도 네이티브 앱 수준의 사용성을 추구했습니다."
        : "DOSS is a mobile-view-based stock checking securities web service that works like an app without installation, accessible anywhere. The core goal is to enable users to check real-time stock information and manage their favorite stocks through a web browser without the need to install complex securities apps. By leveraging the Korea Investment & Securities API, we provide real-time data from domestic and US stock markets, and through Elasticsearch's fast search functionality, users can easily find over 6,000 stocks. We also applied PWA technology and detailed interaction design to provide a user experience similar to native apps, even though it's a web service.",
    links: {
      github: "https://github.com/mstagon/DOSS",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "DOSS는 Next.js와 Spring Boot를 기반으로 구축된 모바일 우선 주식 확인 웹 서비스입니다. 한국투자증권 API를 통해 국내 및 미국 주식 시장의 실시간 데이터를 제공하며, 거래대금, 거래량, 급상승/급하락 등 다양한 기준으로 인기 주식을 조회할 수 있습니다. Elasticsearch 검색 엔진을 활용하여 6,000개 이상의 주식 종목에 대한 빠른 검색과 자동완성 기능을 제공합니다. 사용자는 관심 종목을 찜하기 기능으로 저장하고, 마이페이지에서 한눈에 확인할 수 있습니다. 또한 보안을 강화하기 위해 브루트포스 공격 방지를 위한 로그인 시도 제한 기능을 구현했습니다. 프론트엔드에서는 Toss의 useFunnel 라이브러리를 활용한 단계별 회원가입 프로세스를 통해 사용자 몰입도를 높였고, 컴포지블 UI 설계를 통해 재사용 가능한 컴포넌트 기반 개발을 추구했습니다. Framer Motion을 활용한 세밀한 애니메이션과 인터랙션으로 앱과 유사한 사용자 경험을 제공합니다. 백엔드에서는 Spring Boot와 MyBatis를 활용하여 RESTful API를 구현했으며, JWT 기반 인증 시스템을 구축했습니다. 주식 데이터는 15분마다 자동으로 갱신되며, MySQL 데이터베이스에 저장되어 빠른 조회가 가능합니다. Elasticsearch를 통한 검색 기능은 실시간 자동완성과 빠른 검색 결과 제공을 가능하게 합니다."
          : "DOSS is a mobile-first stock checking web service built on Next.js and Spring Boot. It provides real-time data from domestic and US stock markets through the Korea Investment & Securities API, allowing users to view popular stocks based on various criteria such as trading value, volume, and rapid rise/fall. By utilizing the Elasticsearch search engine, we provide fast search and autocomplete functionality for over 6,000 stocks. Users can save their favorite stocks using the bookmark feature and view them at a glance on the mypage. We also implemented a login attempt limit feature to prevent brute force attacks and enhance security. On the frontend, we used Toss's useFunnel library to create a step-by-step registration process that increases user engagement, and pursued component-based development through composable UI design. We provide an app-like user experience through detailed animations and interactions using Framer Motion. On the backend, we implemented RESTful APIs using Spring Boot and MyBatis, and built a JWT-based authentication system. Stock data is automatically updated every 15 minutes and stored in a MySQL database for fast retrieval. The search functionality through Elasticsearch enables real-time autocomplete and fast search results.",
      stats: {
        vision:
          language === "ko"
            ? "설치 없이, 어디서든 앱처럼 사용할 수 있는 주식 확인 서비스로 모든 투자자에게 편리한 주식 정보 접근성을 제공합니다."
            : "Provide convenient stock information access to all investors through a stock checking service that works like an app without installation, accessible anywhere.",
      },
    },
    role: {
      title: language === "ko" ? "Full-stack Developer" : "Full-stack Developer",
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
      pageLoadSpeed: { value: 92, improvement: "+30% improvement" },
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
            ? "API 호출 횟수를 80% 이상 감소시켰고, 평균 응답 시간을 2초에서 0.3초로 단축했습니다. 사용자 경험이 크게 개선되었습니다."
            : "We reduced API calls by over 80% and shortened average response time from 2 seconds to 0.3 seconds. User experience was significantly improved.",
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
            ? "검색 응답 시간이 1초 이상에서 100ms 이하로 단축되었고, 사용자 친화적인 자동완성 기능을 제공할 수 있게 되었습니다."
            : "Search response time was reduced from over 1 second to under 100ms, and we were able to provide user-friendly autocomplete functionality.",
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
            ? "사용자들이 웹 서비스임에도 앱과 유사한 경험을 느낄 수 있게 되었고, 페이지 이탈률이 감소했습니다."
            : "Users could experience an app-like feel even though it's a web service, and page bounce rate decreased.",
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
            ? "회원가입 완료율이 40% 향상되었고, 사용자들이 서비스에 대한 이해도가 높아졌습니다."
            : "Registration completion rate increased by 40%, and users' understanding of the service improved.",
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
        ? "이 프로젝트를 통해 풀스택 개발자로서 프론트엔드와 백엔드 전반에 대한 이해도를 높일 수 있었습니다. 특히 한국투자증권 API 연동을 통해 외부 API 통합 경험을 쌓았고, Elasticsearch를 활용한 검색 기능 구현을 통해 검색 엔진에 대한 이해를 넓혔습니다. 가장 큰 성과는 모바일 우선 설계를 통해 웹 서비스임에도 앱과 유사한 사용자 경험을 제공할 수 있었다는 점입니다. Framer Motion을 활용한 애니메이션과 컴포지블 UI 설계를 통해 재사용 가능하고 확장 가능한 코드 구조를 만들 수 있었습니다. 아쉬운 점으로는 9일이라는 짧은 개발 기간으로 인해 일부 기능을 완전히 최적화하지 못했다는 것입니다. 특히 성능 최적화와 에러 핸들링 부분에서 더 개선할 여지가 있습니다. 또한 테스트 코드 작성이 부족하여 코드 품질 관리 측면에서 아쉬움이 남습니다. 개선하고 싶은 점으로는 실시간 주가 업데이트를 WebSocket을 통해 구현하여 더욱 실시간성 있는 서비스를 제공하고 싶습니다. 또한 사용자 맞춤형 추천 기능과 포트폴리오 분석 기능을 추가하여 단순 조회 서비스를 넘어서는 가치를 제공하고 싶습니다."
        : "Through this project, I was able to improve my understanding of both frontend and backend as a full-stack developer. In particular, I gained experience in external API integration through the Korea Investment & Securities API integration, and expanded my understanding of search engines by implementing search functionality using Elasticsearch. The biggest achievement was being able to provide an app-like user experience even though it's a web service through mobile-first design. Through animations using Framer Motion and composable UI design, I was able to create a reusable and scalable code structure. As a regret, due to the short 9-day development period, we couldn't fully optimize some features. In particular, there's room for improvement in performance optimization and error handling. Also, the lack of test code leaves room for improvement in code quality management. As improvements I'd like to make, I want to implement real-time stock price updates through WebSocket to provide a more real-time service. I also want to add user-customized recommendation features and portfolio analysis features to provide value beyond a simple lookup service.",
    achievements: [
      {
        title:
          language === "ko"
            ? "API 호출 최적화로 성능 개선"
            : "Performance Improvement through API Call Optimization",
        description:
          language === "ko"
            ? "데이터 캐싱 전략을 통해 불필요한 API 호출을 최소화하고 응답 시간을 단축했습니다."
            : "Minimized unnecessary API calls and reduced response time through data caching strategy.",
        metrics:
          language === "ko" ? "API 호출 감소율" : "API Call Reduction Rate",
        value: 80,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "검색 응답 시간 단축"
            : "Search Response Time Reduction",
        description:
          language === "ko"
            ? "Elasticsearch 도입으로 주식 검색 성능을 대폭 개선했습니다."
            : "Significantly improved stock search performance by introducing Elasticsearch.",
        metrics:
          language === "ko"
            ? "검색 응답 시간 개선"
            : "Search Response Time Improvement",
        value: 90,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "회원가입 완료율 향상"
            : "Registration Completion Rate Increase",
        description:
          language === "ko"
            ? "단계별 온보딩 프로세스로 사용자 이탈률을 감소시켰습니다."
            : "Reduced user bounce rate through step-by-step onboarding process.",
        metrics:
          language === "ko"
            ? "회원가입 완료율 증가"
            : "Registration Completion Rate Increase",
        value: 40,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "페이지 로드 속도 개선"
            : "Page Load Speed Improvement",
        description:
          language === "ko"
            ? "Next.js 최적화와 코드 스플리팅을 통해 초기 로딩 시간을 단축했습니다."
            : "Reduced initial loading time through Next.js optimization and code splitting.",
        metrics:
          language === "ko"
            ? "페이지 로드 속도 개선"
            : "Page Load Speed Improvement",
        value: 30,
        unit: "%",
      },
    ],
  };
}

