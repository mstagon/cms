import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getPhcDetail(language: Language): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "보건소 업무(예약/접수/진료 기록 등)를 웹으로 처리하는 통합 관리 시스템을 만들었습니다. 팀 내 기술 스택 선호가 달라 React 메인 앱 + Flutter(Web) 모듈을 웹뷰/iframe 형태로 통합하는 하이브리드 구성을 선택했습니다."
        : "PHC is a web-based management system for public health center workflows (appointments/check-in/records). Due to mixed stack preferences, we chose a hybrid setup: a React main app plus a Flutter(Web) module integrated via webview/iframe.",
    links: {
      github: "https://github.com/mstagon/phc",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "React 기반 메인 웹 + Flutter(Web) 모듈을 결합한 하이브리드 구성입니다.\n\n- 주요 흐름: 예약 생성 → 접수(예: QR/전화번호) → 접수 현황 확인 → 진료 기록/처방 관리\n- 백엔드: FastAPI + SQLAlchemy + SQLite\n- 통합: iframe/webview 형태로 Flutter 모듈을 React 앱에 포함\n\n설명은 ‘실제로 구현한 구성/흐름’만 남기고 과장된 지표는 제거했습니다."
          : "A hybrid setup combining a React main web app and a Flutter(Web) module.\n\n- Flow: appointment → check-in (e.g., QR/phone) → queue/status → records/prescriptions\n- Backend: FastAPI + SQLAlchemy + SQLite\n- Integration: embed Flutter module into the React app via iframe/webview",
      stats: {
        vision:
          language === "ko"
            ? "팀의 기술 선택이 다른 상황에서, 통합 가능한 구조(하이브리드)를 설계하고 끝까지 연결하는 경험을 쌓았습니다."
            : "Gained experience designing and delivering an integratable hybrid architecture under mixed stack preferences.",
      },
    },
    role: {
      title:
        language === "ko"
          ? "프로젝트 리더 & 풀스택 개발자"
          : "Project Leader & Full-stack Developer",
      responsibilities:
        language === "ko"
          ? [
              "팀원 간 기술 스택 충돌 해결 및 하이브리드 아키텍처 설계",
              "React 메인 애플리케이션 개발 및 Flutter 웹뷰 통합",
              "FastAPI 백엔드 API 설계 및 구현",
              "프로젝트 전체 아키텍처 설계 및 기술 결정",
              "팀원 간 코드 리뷰 및 기술 멘토링",
            ]
          : [
              "Resolved technology stack conflicts among team members and designed hybrid architecture",
              "Developed React main application and integrated Flutter webview",
              "Designed and implemented FastAPI backend APIs",
              "Designed overall project architecture and made technical decisions",
              "Conducted code reviews and technical mentoring among team members",
            ],
    },
    timeframe: "2024.01 - 2024.06",
    platform: "Web",
    type: "Healthcare Management System",
    techStack: [
      "React",
      "JavaScript",
      "React Router",
      "Axios",
      "Tailwind CSS",
      "SCSS",
      "Flutter",
      "Dart",
      "Flutter Riverpod",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "RESTful API",
    ],
    performance: {
      pageLoadSpeed: { value: 85 },
    },
    challenges: [
      {
        title:
          language === "ko"
            ? "팀원 간 기술 스택 충돌 해결"
            : "Resolving Technology Stack Conflicts Among Team Members",
        asIs:
          language === "ko"
            ? "프로젝트 초기, 팀원들 간에 React와 Flutter 중 어떤 기술 스택을 사용할지에 대한 의견이 엇갈렸습니다. 일부 팀원은 React의 생태계와 웹 개발 경험을 선호했고, 다른 팀원들은 Flutter의 크로스 플랫폼 능력과 UI 성능을 강조했습니다. 이러한 기술적 의견 차이로 인해 프로젝트 진행이 지연되고 있었습니다."
            : "At the beginning of the project, team members had conflicting opinions about whether to use React or Flutter. Some team members preferred React's ecosystem and web development experience, while others emphasized Flutter's cross-platform capabilities and UI performance. This technical disagreement was delaying project progress.",
        toBe:
          language === "ko"
            ? "리더로서 두 기술 스택의 장점을 모두 활용할 수 있는 하이브리드 아키텍처를 제안했습니다. React를 메인 프레임워크로 사용하여 전체 애플리케이션의 구조를 잡고, 특정 기능 모듈(접수 관리, 층별 정보 등)은 Flutter 웹으로 개발하여 iframe 또는 웹뷰를 통해 통합했습니다. 이를 통해 각 팀원이 선호하는 기술 스택으로 개발할 수 있도록 하면서도 통합된 사용자 경험을 제공할 수 있었습니다."
            : "As a leader, I proposed a hybrid architecture that could leverage the strengths of both technology stacks. React was used as the main framework to structure the entire application, while specific feature modules (check-in management, floor information, etc.) were developed in Flutter web and integrated through iframe or webview. This allowed each team member to develop using their preferred technology stack while providing a unified user experience.",
        result:
          language === "ko"
            ? "React/Flutter를 병렬로 진행할 수 있도록 역할을 분리하고, 통합 지점을 명확히 했습니다."
            : "Separated responsibilities so React and Flutter parts could move in parallel with clear integration points.",
      },
      {
        title:
          language === "ko"
            ? "React와 Flutter 웹뷰 통합"
            : "Integrating React and Flutter Webview",
        asIs:
          language === "ko"
            ? "React 애플리케이션 내에 Flutter 웹 모듈을 통합하는 과정에서 여러 기술적 난제가 발생했습니다. iframe을 통한 통합 시 CORS 문제, 상태 관리 동기화, 라우팅 충돌, 성능 최적화 등의 문제가 있었습니다."
            : "Several technical challenges arose when integrating Flutter web modules into the React application. When integrating through iframe, there were issues with CORS, state management synchronization, routing conflicts, and performance optimization.",
        toBe:
          language === "ko"
            ? "PostMessage API를 활용하여 React와 Flutter 간의 양방향 통신을 구현했습니다. CORS 설정을 백엔드와 프론트엔드 양쪽에서 최적화하고, 라우팅은 React Router를 메인으로 하되 Flutter 모듈 내부에서는 독립적인 라우팅을 유지하도록 설계했습니다. 또한 lazy loading과 코드 스플리팅을 적용하여 초기 로딩 시간을 단축했습니다."
            : "Implemented bidirectional communication between React and Flutter using the PostMessage API. Optimized CORS settings on both backend and frontend, and designed routing to use React Router as the main router while maintaining independent routing within Flutter modules. Also applied lazy loading and code splitting to reduce initial loading time.",
        result:
          language === "ko"
            ? "React ↔ Flutter 간 통신(PostMessage)과 라우팅 경계를 정리해 하나의 앱처럼 동작하도록 구성했습니다."
            : "Set up PostMessage communication and routing boundaries so the hybrid app feels integrated.",
      },
      {
        title:
          language === "ko"
            ? "하이브리드 아키텍처 설계 및 최적화"
            : "Designing and Optimizing Hybrid Architecture",
        asIs:
          language === "ko"
            ? "두 개의 다른 프레임워크를 하나의 애플리케이션에 통합하면서 발생하는 아키텍처 복잡성과 유지보수성 문제가 있었습니다. 각 모듈 간의 의존성 관리와 빌드 프로세스도 복잡해졌습니다."
            : "There were architectural complexity and maintainability issues arising from integrating two different frameworks into one application. Dependency management and build processes between modules also became complex.",
        toBe:
          language === "ko"
            ? "모듈화된 아키텍처를 설계하여 각 기능을 독립적인 모듈로 분리했습니다. React는 메인 레이아웃과 공통 기능을 담당하고, Flutter는 특정 비즈니스 로직이 집중된 모듈을 담당하도록 역할을 명확히 구분했습니다. 또한 공통 API 레이어를 구축하여 두 프레임워크가 동일한 백엔드 API를 사용하도록 통일했습니다."
            : "Designed a modular architecture to separate each feature into independent modules. React handles the main layout and common features, while Flutter handles modules with specific business logic, clearly defining roles. Also built a common API layer so both frameworks use the same backend API.",
        result:
          language === "ko"
            ? "React(메인)과 Flutter(기능 모듈)의 역할과 통합 지점을 분리해, 병렬 개발이 가능한 형태로 정리했습니다."
            : "Separated responsibilities and integration points between React (shell) and Flutter (feature modules) to enable parallel development.",
      },
      {
        title:
          language === "ko"
            ? "백엔드 API 설계 및 성능 최적화"
            : "Backend API Design and Performance Optimization",
        asIs:
          language === "ko"
            ? "초기 API 설계 시 RESTful 원칙을 완전히 따르지 않아 일관성 없는 엔드포인트 구조와 중복된 로직이 발생했습니다. 또한 데이터베이스 쿼리 최적화가 부족하여 응답 시간이 느렸습니다."
            : "In the initial API design, not fully following RESTful principles led to inconsistent endpoint structures and duplicated logic. Also, insufficient database query optimization resulted in slow response times.",
        toBe:
          language === "ko"
            ? "RESTful API 설계 원칙을 철저히 적용하여 일관된 엔드포인트 구조를 설계했습니다. SQLAlchemy의 관계형 쿼리와 joinedload를 활용하여 N+1 쿼리 문제를 해결하고, 필요한 경우에만 데이터를 로드하는 지연 로딩 전략을 적용했습니다. 또한 FastAPI의 자동 문서화 기능을 활용하여 API 문서를 자동으로 생성하도록 했습니다."
            : "Thoroughly applied RESTful API design principles to design a consistent endpoint structure. Used SQLAlchemy's relational queries and joinedload to solve N+1 query problems and applied lazy loading strategies to load data only when needed. Also utilized FastAPI's automatic documentation feature to auto-generate API documentation.",
        result:
          language === "ko"
            ? "엔드포인트 구조를 정리하고, ORM 쿼리(N+1 등) 이슈를 줄이기 위한 로딩 전략을 적용했습니다."
            : "Standardized endpoints and applied ORM loading strategies to reduce query issues (e.g., N+1).",
      },
      {
        title:
          language === "ko"
            ? "크로스 플랫폼 호환성 및 반응형 디자인"
            : "Cross-platform Compatibility and Responsive Design",
        asIs:
          language === "ko"
            ? "다양한 디바이스와 브라우저에서의 호환성 문제가 있었습니다. 특히 모바일 환경에서 Flutter 웹뷰의 레이아웃이 깨지거나 터치 이벤트가 제대로 작동하지 않는 경우가 있었습니다."
            : "There were compatibility issues across various devices and browsers. Particularly on mobile, Flutter webview layouts broke or touch events didn't work properly.",
        toBe:
          language === "ko"
            ? "Tailwind CSS와 Flutter의 반응형 설정을 활용해 화면 크기별 레이아웃을 맞추고, 모바일에서 발생한 터치/레이아웃 이슈를 중심으로 수정했습니다."
            : "Maximized the use of Tailwind CSS and Flutter's responsive design features to accommodate various screen sizes. Optimized breakpoint settings using media queries and touch event handling. Also automated browser compatibility testing to ensure operation on major browsers.",
        result:
          language === "ko"
            ? "모바일 환경에서의 레이아웃/터치 이슈를 중심으로 호환성을 점검하고 수정했습니다."
            : "Verified and fixed compatibility issues (layout/touch) on mobile devices.",
      },
    ],
    architecture: {
      description:
        language === "ko"
          ? "PHC 시스템은 하이브리드 아키텍처를 기반으로 구축되었습니다. React를 메인 프레임워크로 사용하여 전체 애플리케이션의 레이아웃, 라우팅, 공통 컴포넌트를 관리하고, 특정 기능 모듈은 Flutter 웹으로 개발하여 웹뷰를 통해 통합했습니다. 이는 팀원 간의 기술 스택 선호도를 조율하면서도 각자의 전문성을 최대한 활용할 수 있도록 설계된 구조입니다.\n\n백엔드는 Python FastAPI로 구축되어 RESTful API를 제공하며, SQLAlchemy ORM을 통해 SQLite 데이터베이스와 상호작용합니다. 프론트엔드와 백엔드 간의 통신은 Axios와 Dio를 통해 이루어지며, CORS 미들웨어를 통해 크로스 오리진 요청을 처리합니다. 상태 관리는 React에서는 Context API와 커스텀 훅을, Flutter에서는 Riverpod을 사용하여 각 프레임워크의 모범 사례를 따릅니다."
          : "The PHC system is built on a hybrid architecture. React is used as the main framework to manage the application's layout, routing, and common components, while specific feature modules are developed in Flutter web and integrated through webview. This structure is designed to coordinate technology stack preferences among team members while maximizing each person's expertise.\n\nThe backend is built with Python FastAPI, providing RESTful APIs and interacting with SQLite database through SQLAlchemy ORM. Communication between frontend and backend occurs through Axios and Dio, with CORS middleware handling cross-origin requests. State management uses Context API and custom hooks in React, and Riverpod in Flutter, following each framework's best practices.",
      diagrams: [
        {
          title:
            language === "ko"
              ? "시스템 아키텍처 다이어그램"
              : "System Architecture Diagram",
          image: "",
          alt:
            language === "ko"
              ? "PHC 시스템의 전체 아키텍처를 보여주는 다이어그램. React 메인 앱, Flutter 웹뷰 모듈, FastAPI 백엔드, SQLite 데이터베이스 간의 관계를 시각화"
              : "Diagram showing the overall architecture of the PHC system, visualizing the relationships between React main app, Flutter webview modules, FastAPI backend, and SQLite database",
        },
        {
          title: language === "ko" ? "데이터 흐름도" : "Data Flow Diagram",
          image: "",
          alt:
            language === "ko"
              ? "환자 접수부터 진료 완료까지의 데이터 흐름을 보여주는 다이어그램"
              : "Diagram showing data flow from patient check-in to treatment completion",
        },
      ],
    },
    retrospective:
      language === "ko"
        ? "서로 다른 프레임워크를 하나의 서비스처럼 운영하기 위해, 통합 지점(iframe/webview, PostMessage, 라우팅 경계)을 먼저 정리하고 그 위에 기능을 얹었습니다.\n다음에는 장애 시나리오(모듈 로딩 실패/통신 실패)에 대한 처리와, 배포/관측(로그/알림)까지 포함한 운영 준비를 더 일찍 하고 싶습니다."
        : "A key learning was making a hybrid (iframe/webview + PostMessage + routing boundaries) feel like one app under mixed stack choices.\nNext I’d define module boundaries earlier and add typing/tests/deploy automation from the start.",
    achievements: [
      {
        title:
          language === "ko"
            ? "하이브리드 아키텍처 성공적 구축"
            : "Successful Hybrid Architecture Implementation",
        description:
          language === "ko"
            ? "React 메인 앱 + Flutter(Web) 모듈의 하이브리드 구조로 개발을 진행했습니다."
            : "Implemented a hybrid structure (React main app + Flutter web module).",
      },
      {
        title:
          language === "ko"
            ? "ORM 로딩/쿼리 전략 정리"
            : "Query/Loading Strategy Refinement",
        description:
          language === "ko"
            ? "SQLAlchemy 쿼리/로딩 전략을 정리해 불필요한 조회를 줄였습니다."
            : "Reduced unnecessary DB queries with SQLAlchemy loading/query strategies.",
      },
      {
        title:
          language === "ko"
            ? "모듈 지연 로딩 적용"
            : "Module Lazy-loading",
        description:
          language === "ko"
            ? "모듈을 지연 로딩하는 방식으로 초기 진입 부담을 줄였습니다."
            : "Reduced initial load cost via lazy-loading modules.",
      },
      {
        title:
          language === "ko"
            ? "크로스 플랫폼 호환성 확보"
            : "Cross-platform Compatibility Achieved",
        description:
          language === "ko"
            ? "모바일/브라우저 환경에서의 호환성 이슈를 점검하고 수정했습니다."
            : "Tested and fixed compatibility issues across devices/browsers.",
      },
      {
        title:
          language === "ko"
            ? "병렬 개발을 위한 역할/경계 분리"
            : "Parallel Development Enablement",
        description:
          language === "ko"
            ? "하이브리드 구조로 역할을 분리해 병렬 개발이 가능하도록 구성했습니다."
            : "Enabled parallel development by separating responsibilities in the hybrid setup.",
      },
    ],
  };
}

