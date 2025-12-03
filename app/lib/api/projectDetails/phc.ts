import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getPhcDetail(language: Language): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "PHC(Public Health Center) 프로젝트는 보건소의 디지털 전환을 목표로 한 통합 관리 시스템입니다. 환자 접수, 예약 관리, 진료 기록, 처방전 관리 등 보건소의 핵심 업무를 디지털화하여 효율성을 극대화하고, 환자 경험을 개선하는 것을 목표로 합니다. 또한 팀원 간의 기술 스택 선호도 차이를 조율하여 하이브리드 아키텍처를 구축함으로써, 각 팀원의 강점을 최대한 활용하면서도 통합된 사용자 경험을 제공하는 것을 핵심 목표로 삼았습니다."
        : "The PHC (Public Health Center) project is an integrated management system aimed at digital transformation of public health centers. The core objective is to digitize essential operations such as patient check-in, appointment management, medical records, and prescription management to maximize efficiency and improve patient experience. Additionally, by coordinating differences in technology stack preferences among team members and building a hybrid architecture, the project aims to maximize each team member's strengths while providing a unified user experience.",
    links: {
      github: "https://github.com/mstagon/phc",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "PHC 프로젝트는 보건소의 전자화된 업무 처리를 위한 종합 관리 시스템입니다. React 기반의 메인 웹 애플리케이션을 중심으로 구축되었으며, 특정 기능 모듈은 Flutter 웹으로 개발되어 웹뷰를 통해 통합되었습니다. 이는 팀원 간의 기술 스택 선호도 차이를 조율하면서도 각자의 전문성을 활용할 수 있는 하이브리드 아키텍처입니다.\n\n시스템은 환자 접수부터 진료 완료까지의 전체 워크플로우를 지원합니다. 환자는 온라인으로 예약을 생성하고, 접수 시 QR 코드나 전화번호를 통해 빠르게 체크인할 수 있습니다. 의료진은 실시간으로 접수 현황을 확인하고, 진료 기록과 처방전을 디지털로 관리할 수 있습니다. 또한 층별 안내 정보와 건강 프로그램 정보를 제공하여 환자 편의성을 높였습니다.\n\n백엔드는 Python FastAPI로 구축되어 RESTful API를 제공하며, SQLAlchemy ORM을 활용한 데이터베이스 관리와 자동화된 API 문서화를 지원합니다. 프론트엔드와 백엔드 간의 효율적인 통신을 위해 CORS 설정과 에러 핸들링을 최적화했습니다."
          : "The PHC project is a comprehensive management system for digitized operations of public health centers. It is built around a React-based main web application, with specific feature modules developed in Flutter web and integrated through webview. This is a hybrid architecture that coordinates differences in technology stack preferences among team members while leveraging each person's expertise.\n\nThe system supports the entire workflow from patient check-in to treatment completion. Patients can create appointments online and quickly check in using QR codes or phone numbers. Medical staff can check check-in status in real-time and manage medical records and prescriptions digitally. Additionally, floor-by-floor guide information and health program information are provided to enhance patient convenience.\n\nThe backend is built with Python FastAPI, providing RESTful APIs, and supports database management using SQLAlchemy ORM and automated API documentation. CORS settings and error handling have been optimized for efficient communication between frontend and backend.",
      stats: {
        vision:
          language === "ko"
            ? "보건소의 디지털 전환을 선도하여 국민 건강 관리의 접근성과 효율성을 혁신하는 것"
            : "Leading the digital transformation of public health centers to revolutionize the accessibility and efficiency of public health management",
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
      pageLoadSpeed: { value: 85, improvement: "+30% improvement" }},
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
            ? "팀원들의 만족도가 크게 향상되었고, 각자의 전문성을 최대한 활용할 수 있게 되었습니다. 프로젝트 일정도 단축되었으며, 결과적으로 더 풍부한 기능을 가진 애플리케이션을 완성할 수 있었습니다."
            : "Team member satisfaction significantly improved, and each person was able to maximize their expertise. The project timeline was shortened, and we were able to complete an application with richer features.",
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
            ? "두 프레임워크 간의 원활한 통신이 가능해졌고, 사용자는 하나의 통합된 애플리케이션처럼 경험할 수 있게 되었습니다. 초기 로딩 시간도 30% 개선되었습니다."
            : "Smooth communication between the two frameworks became possible, and users could experience it as a single integrated application. Initial loading time also improved by 30%.",
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
            ? "코드 재사용성이 향상되었고, 각 모듈의 독립적인 개발과 배포가 가능해졌습니다. 유지보수성도 크게 개선되었습니다."
            : "Code reusability improved, and independent development and deployment of each module became possible. Maintainability also significantly improved.",
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
            ? "API 응답 시간이 평균 40% 개선되었고, 코드 가독성과 유지보수성이 향상되었습니다. 자동 생성된 API 문서로 프론트엔드 개발자와의 협업 효율도 높아졌습니다."
            : "API response time improved by an average of 40%, and code readability and maintainability improved. Auto-generated API documentation also increased collaboration efficiency with frontend developers.",
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
            ? "Tailwind CSS와 Flutter의 반응형 디자인 기능을 최대한 활용하여 다양한 화면 크기에 대응했습니다. 미디어 쿼리를 활용한 브레이크포인트 설정과 터치 이벤트 핸들링을 최적화했습니다. 또한 브라우저 호환성 테스트를 자동화하여 주요 브라우저에서의 동작을 보장했습니다."
            : "Maximized the use of Tailwind CSS and Flutter's responsive design features to accommodate various screen sizes. Optimized breakpoint settings using media queries and touch event handling. Also automated browser compatibility testing to ensure operation on major browsers.",
        result:
          language === "ko"
            ? "모든 주요 브라우저와 디바이스에서 정상적으로 작동하며, 모바일 사용자 경험이 크게 개선되었습니다."
            : "Works properly on all major browsers and devices, and mobile user experience significantly improved.",
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
        ? "PHC 프로젝트를 통해 기술 리더십과 아키텍처 설계 능력을 크게 향상시킬 수 있었습니다. 팀원 간의 기술 스택 충돌을 해결하기 위해 하이브리드 아키텍처를 제안하고 구현한 경험은, 기술적 완벽함보다는 팀의 협업과 생산성을 우선시하는 실용적인 접근의 중요성을 깨달게 해주었습니다.\n\n특히 React와 Flutter를 하나의 애플리케이션에 통합하는 과정에서 겪은 기술적 도전들은, 서로 다른 기술 스택 간의 통신 방법과 상태 관리 전략에 대한 깊은 이해를 제공했습니다. PostMessage API를 활용한 통신 방식과 모듈화된 아키텍처 설계는 향후 유사한 프로젝트에서도 활용할 수 있는 귀중한 경험이 되었습니다.\n\n아쉬운 점으로는, 프로젝트 초기에 더 명확한 기술 스택 결정 기준을 수립했다면 초기 개발 시간을 더 단축할 수 있었을 것 같습니다. 또한 테스트 코드 작성과 CI/CD 파이프라인 구축을 더 일찍 시작했다면 코드 품질과 배포 효율성을 더 높일 수 있었을 것입니다.\n\n개선하고 싶은 점으로는, 마이크로프론트엔드 아키텍처 패턴을 더 깊이 연구하여 모듈 간의 독립성을 더욱 강화하고, 각 모듈의 독립적인 배포와 버전 관리를 가능하게 하는 것입니다. 또한 TypeScript 도입을 통해 타입 안정성을 높이고, 더 나은 개발자 경험을 제공하고 싶습니다."
        : "Through the PHC project, I was able to significantly improve my technical leadership and architecture design skills. The experience of proposing and implementing a hybrid architecture to resolve technology stack conflicts among team members made me realize the importance of a practical approach that prioritizes team collaboration and productivity over technical perfection.\n\nIn particular, the technical challenges encountered while integrating React and Flutter into one application provided deep understanding of communication methods and state management strategies between different technology stacks. The communication method using PostMessage API and modular architecture design became valuable experiences that can be utilized in similar future projects.\n\nAs for regrets, I think we could have shortened the initial development time if we had established clearer technology stack decision criteria earlier in the project. Also, if we had started writing test code and building CI/CD pipelines earlier, we could have improved code quality and deployment efficiency.\n\nAs for improvements I'd like to make, I want to research micro-frontend architecture patterns more deeply to further strengthen independence between modules and enable independent deployment and version management of each module. I also want to introduce TypeScript to increase type safety and provide a better developer experience.",
    achievements: [
      {
        title:
          language === "ko"
            ? "하이브리드 아키텍처 성공적 구축"
            : "Successful Hybrid Architecture Implementation",
        description:
          language === "ko"
            ? "React와 Flutter를 하나의 애플리케이션에 통합하여 팀원 간 기술 스택 충돌을 해결하고 각자의 전문성을 최대한 활용할 수 있도록 함"
            : "Integrated React and Flutter into one application to resolve technology stack conflicts among team members and maximize each person's expertise",
        metrics: language === "ko" ? "팀 만족도" : "Team Satisfaction",
        value: 95,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "API 응답 시간 개선"
            : "API Response Time Improvement",
        description:
          language === "ko"
            ? "SQLAlchemy 쿼리 최적화와 지연 로딩 전략을 통해 백엔드 API 응답 시간을 대폭 개선"
            : "Significantly improved backend API response time through SQLAlchemy query optimization and lazy loading strategies",
        metrics:
          language === "ko" ? "응답 시간 개선" : "Response Time Improvement",
        value: 40,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "페이지 로딩 속도 개선"
            : "Page Loading Speed Improvement",
        description:
          language === "ko"
            ? "Lazy loading과 코드 스플리팅을 적용하여 초기 페이지 로딩 시간을 단축"
            : "Reduced initial page loading time by applying lazy loading and code splitting",
        metrics:
          language === "ko" ? "로딩 속도 개선" : "Loading Speed Improvement",
        value: 30,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "크로스 플랫폼 호환성 확보"
            : "Cross-platform Compatibility Achieved",
        description:
          language === "ko"
            ? "다양한 브라우저와 디바이스에서 정상 작동하도록 반응형 디자인과 호환성 최적화를 완료"
            : "Completed responsive design and compatibility optimization to ensure proper operation across various browsers and devices",
        metrics: language === "ko" ? "호환 브라우저" : "Compatible Browsers",
        value: 5,
        unit: "개",
      },
      {
        title:
          language === "ko"
            ? "프로젝트 일정 단축"
            : "Project Timeline Reduction",
        description:
          language === "ko"
            ? "하이브리드 아키텍처를 통해 각 팀원이 병렬로 개발할 수 있어 전체 프로젝트 일정을 단축"
            : "Shortened overall project timeline by enabling parallel development through hybrid architecture",
        metrics: language === "ko" ? "일정 단축" : "Timeline Reduction",
        value: 25,
        unit: "%",
      },
    ],
  };
}

