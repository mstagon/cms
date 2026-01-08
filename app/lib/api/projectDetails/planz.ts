import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getPlanzDetail(language: Language = "ko"): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "사용자가 고정 스케줄(근무/수업 등)을 입력하면 수면/기상/낮잠 시간을 계산해 보여주는 수면 관리 앱을 만들었습니다. 루틴 입력, 수면 기록(캘린더), JWT 인증/토큰 저장, 푸시 알림(FCM) 연동까지 앱 흐름을 구현했습니다."
        : "Planz is a sleep management app that calculates and displays wake/sleep/nap times based on fixed schedules. It includes routine input, calendar-based sleep records, JWT auth + token storage, and push notifications (FCM).",
    links: {
      github: "https://github.com/mstagon/Planz-Front-End",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "Flutter 기반 앱입니다.\n\n- 루틴/스케줄 입력: 근무/수업 등 고정 스케줄을 루틴으로 등록\n- 캘린더: 날짜 선택에 따라 수면 기록을 조회/입력(Table Calendar)\n- 인증/보안: JWT 토큰을 Secure Storage에 저장하고 API 요청에 포함\n- 알림: Firebase Cloud Messaging 연동\n\n(설명은 실제 구현한 화면/흐름 중심으로만 정리했습니다.)"
          : "A Flutter-based app.\n\n- Routine input: register fixed schedules as routines\n- Calendar: view/create sleep records by date (Table Calendar)\n- Auth: store JWT tokens in secure storage and attach to API requests\n- Notifications: integrated Firebase Cloud Messaging",
      stats: {
        vision:
          language === "ko"
            ? "루틴 입력 → 수면 기록(캘린더) → 알림으로 이어지는 기본 사용 흐름을 구성했습니다."
            : "Built a basic flow: routine input → calendar-based records → notifications.",
      },
    },
    role: {
      title: language === "ko" ? "Frontend Developer" : "Frontend Developer",
      responsibilities:
        language === "ko"
          ? [
              "Flutter를 활용한 크로스 플랫폼 모바일 애플리케이션 개발",
              "루틴 관리 페이지 개발 (루틴 추가, 시간 및 날짜 입력, 루틴별 스케줄 표시)",
              "스케줄 관리 페이지 개발 (고정 스케줄 입력, 최적 수면 시간 계획, 알림 설정)",
              "수면 기록 페이지 개발 (수면 시간 및 기분 기록, 캘린더 뷰, 생활 수칙 표시)",
              "Spring Boot 백엔드 API와의 통신 구현 (HTTP 요청, JWT 인증)",
              "Flutter Secure Storage를 활용한 사용자 데이터 보안 저장",
              "Table Calendar를 활용한 캘린더 UI 구현",
              "사용자 인터페이스 디자인 및 애니메이션 구현",
            ]
          : [
              "Cross-platform mobile application development using Flutter",
              "Routine management page development (routine addition, time and date input, schedule display by routine)",
              "Schedule management page development (fixed schedule input, optimal sleep time planning, notification settings)",
              "Sleep record page development (sleep time and mood recording, calendar view, lifestyle rules display)",
              "Communication implementation with Spring Boot backend API (HTTP requests, JWT authentication)",
              "Secure user data storage using Flutter Secure Storage",
              "Calendar UI implementation using Table Calendar",
              "User interface design and animation implementation",
            ],
    },
    timeframe: "2024.07 - 2024.12",
    platform: "Mobile (iOS + Android)",
    type: "Mobile App (Health & Wellness)",
    techStack: [
      "Flutter",
      "Dart",
      "Flutter Secure Storage",
      "Table Calendar",
      "Flutter Time Picker Spinner",
      "HTTP",
      "Carousel Slider",
      "WebView Flutter",
      "Intl",
      "Spring Boot",
      "Java",
      "MariaDB",
      "JWT",
      "Firebase Cloud Messaging",
      "Kakao Login",
      "Google Login",
    ],
    performance: {
      pageLoadSpeed: { value: 85 },
    },
    challenges: [
      {
        title:
          language === "ko"
            ? "복잡한 루틴 및 스케줄 데이터 구조 관리"
            : "Complex Routine and Schedule Data Structure Management",
        asIs:
          language === "ko"
            ? "사용자가 여러 개의 루틴을 생성하고, 각 루틴마다 다른 날짜에 적용되며, 각 날짜마다 다른 스케줄이 표시되어야 했습니다. 또한 루틴별로 선택된 상태를 관리하고, 선택된 루틴의 스케줄만 표시해야 하는 복잡한 상태 관리가 필요했습니다."
            : "Users needed to create multiple routines, each applying to different dates, and different schedules needed to be displayed for each date. Also, complex state management was needed to manage the selected state for each routine and display only the schedules of the selected routine.",
        toBe:
          language === "ko"
            ? "Provider 패턴을 도입하여 루틴과 스케줄 상태를 전역으로 관리하고, 선택된 루틴 인덱스를 추적하여 해당 루틴의 스케줄만 API에서 가져오도록 구현했습니다. 각 루틴은 고유 ID를 가지며, 날짜별로 스케줄을 매핑하여 효율적으로 데이터를 관리했습니다. 또한 루틴 추가, 수정, 삭제 시 즉시 UI가 업데이트되도록 setState를 적절히 활용했습니다."
            : "We introduced the Provider pattern to manage routine and schedule states globally, tracked the selected routine index, and implemented fetching schedules only for that routine from the API. Each routine has a unique ID, and schedules are mapped by date for efficient data management. We also appropriately used setState so the UI updates immediately when routines are added, modified, or deleted.",
        result:
          language === "ko"
            ? "루틴과 스케줄 관리가 안정적으로 동작하며, 사용자가 여러 루틴을 쉽게 전환하고 관리할 수 있게 되었습니다. 코드의 가독성과 유지보수성도 크게 향상되었습니다."
            : "Routine and schedule management operates stably, and users can easily switch and manage multiple routines. Code readability and maintainability also greatly improved.",
      },
      {
        title:
          language === "ko"
            ? "실시간 캘린더와 수면 기록 동기화"
            : "Real-time Calendar and Sleep Record Synchronization",
        asIs:
          language === "ko"
            ? "사용자가 특정 날짜를 선택하면 해당 날짜의 수면 기록을 표시해야 했지만, 날짜 선택 시마다 API를 호출하면 성능 저하가 발생할 수 있었습니다. 또한 오늘 날짜에 수면 기록이 없으면 자동으로 기록 입력 모달을 표시해야 했습니다."
            : "When users selected a specific date, sleep records for that date needed to be displayed, but calling the API every time a date was selected could cause performance degradation. Also, if there was no sleep record for today's date, a record input modal needed to be automatically displayed.",
        toBe:
          language === "ko"
            ? "Table Calendar 위젯을 활용하여 캘린더 UI를 구현하고, 선택된 날짜에 따라 동적으로 수면 기록을 로드하도록 했습니다. 초기 로드 시 현재 월의 수면 기록을 모두 가져와 메모리에 캐싱하고, 날짜 선택 시 캐시된 데이터를 우선 사용하도록 구현했습니다. 오늘 날짜에 기록이 없으면 initState에서 자동으로 기록 입력 모달을 표시하도록 WidgetsBinding.instance.addPostFrameCallback을 활용했습니다."
            : "We implemented the calendar UI using the Table Calendar widget and dynamically loaded sleep records according to the selected date. On initial load, we fetch all sleep records for the current month and cache them in memory, and when a date is selected, we prioritize using cached data. We used WidgetsBinding.instance.addPostFrameCallback to automatically display the record input modal in initState if there is no record for today's date.",
        result:
          language === "ko"
            ? "초기 로드 시 월 단위로 데이터를 가져와 캐시하고, 날짜 선택 시 캐시를 우선 사용하도록 구성했습니다."
            : "Fetched month data upfront and preferred cached data on date selection.",
      },
      {
        title:
          language === "ko"
            ? "JWT 토큰 기반 인증 및 보안 저장"
            : "JWT Token-based Authentication and Secure Storage",
        asIs:
          language === "ko"
            ? "모든 API 요청에 JWT 토큰을 포함해야 했지만, 토큰을 안전하게 저장하고 관리하는 것이 중요했습니다. 또한 토큰이 만료되었을 때의 처리도 필요했습니다."
            : "All API requests needed to include JWT tokens, but securely storing and managing tokens was important. Also, handling token expiration was necessary.",
        toBe:
          language === "ko"
            ? "Flutter Secure Storage를 활용하여 JWT 토큰을 안전하게 저장하고, 모든 API 요청 시 Authorization 헤더에 Bearer 토큰을 포함하도록 구현했습니다. 토큰은 앱 실행 시 자동으로 로드되며, 로그인 시 저장되고 로그아웃 시 삭제되도록 했습니다. API 요청 시 토큰이 없거나 만료된 경우 적절한 에러 처리를 추가했습니다."
            : "We implemented secure JWT token storage using Flutter Secure Storage and included Bearer tokens in the Authorization header for all API requests. Tokens are automatically loaded when the app runs, saved on login, and deleted on logout. We added appropriate error handling for cases where tokens are missing or expired during API requests.",
        result:
          language === "ko"
            ? "사용자 인증이 안전하게 처리되며, 토큰 관리가 체계적으로 이루어져 보안이 강화되었습니다."
            : "User authentication is processed securely, and token management is systematic, enhancing security.",
      },
      {
        title:
          language === "ko"
            ? "복잡한 시간 선택 및 날짜 범위 선택 UI"
            : "Complex Time Selection and Date Range Selection UI",
        asIs:
          language === "ko"
            ? "사용자가 루틴의 시작 시간과 종료 시간을 선택하고, 해당 루틴이 적용되는 날짜를 여러 개 선택해야 했습니다. 시간 선택은 직관적이어야 하고, 날짜 선택은 캘린더에서 여러 날짜를 선택할 수 있어야 했습니다."
            : "Users needed to select start and end times for routines and select multiple dates when the routine applies. Time selection needed to be intuitive, and date selection needed to allow selecting multiple dates from a calendar.",
        toBe:
          language === "ko"
            ? "Flutter Time Picker Spinner를 활용하여 직관적인 시간 선택 UI를 구현하고, Table Calendar를 커스터마이징하여 여러 날짜를 선택할 수 있도록 했습니다. 선택된 날짜는 시각적으로 강조 표시되며, 사용자가 쉽게 확인할 수 있도록 했습니다. 또한 시작 시간과 종료 시간의 유효성 검사를 추가하여 종료 시간이 시작 시간보다 이전인 경우를 방지했습니다."
            : "We implemented an intuitive time selection UI using Flutter Time Picker Spinner and customized Table Calendar to allow selecting multiple dates. Selected dates are visually emphasized so users can easily confirm them. We also added validation for start and end times to prevent cases where the end time is before the start time.",
        result:
          language === "ko"
            ? "사용자가 쉽고 직관적으로 루틴을 생성하고 관리할 수 있게 되었고, 입력 오류가 크게 감소했습니다."
            : "Users can easily and intuitively create and manage routines, and input errors significantly decreased.",
      },
      {
        title:
          language === "ko"
            ? "개인 맞춤형 생활 수칙 동적 표시"
            : "Dynamic Display of Personalized Lifestyle Rules",
        asIs:
          language === "ko"
            ? "사용자가 가입 시 선택한 생활 습관(카페인 섭취, 전자기기 사용, 비타민 복용 등)에 따라 다른 생활 수칙을 표시해야 했습니다. 또한 수면 기록 페이지와 설정 페이지에서 모두 일관되게 표시되어야 했습니다."
            : "Different lifestyle rules needed to be displayed according to lifestyle habits (caffeine intake, electronic device use, vitamin intake, etc.) selected by users during registration. Also, they needed to be displayed consistently on both the sleep record page and settings page.",
        toBe:
          language === "ko"
            ? "사용자 정보 API를 통해 사용자의 생활 습관을 가져오고, 각 습관에 맞는 생활 수칙을 동적으로 필터링하여 표시하도록 구현했습니다. 생활 수칙은 아이콘과 함께 표시되며, 사용자가 쉽게 이해할 수 있도록 명확한 문구로 작성했습니다. 생활 수칙 데이터는 상수로 관리하여 유지보수를 용이하게 했습니다."
            : "We fetch user lifestyle habits through the user information API and dynamically filter and display lifestyle rules matching each habit. Lifestyle rules are displayed with icons and written in clear language for easy understanding. Lifestyle rule data is managed as constants for easy maintenance.",
        result:
          language === "ko"
            ? "사용자 설정값에 따라 생활 수칙을 필터링해 동일한 규칙을 여러 화면에서 재사용할 수 있게 했습니다."
            : "Filtered lifestyle rules based on user settings and reused them across screens.",
      },
    ],
    architecture: {
      description:
        language === "ko"
          ? "Planz 애플리케이션은 Flutter 기반의 클라이언트-서버 아키텍처를 채택했습니다. 프론트엔드는 Flutter로 개발되어 iOS와 Android 양쪽 플랫폼에서 동일한 코드베이스로 동작하며, 백엔드는 Spring Boot 기반의 RESTful API 서버로 구성되어 있습니다. 프론트엔드 아키텍처는 화면(screen), 위젯(widget), 상수(const)로 구성됩니다. 화면 레이어에서는 스케줄, 수면 기록, 고민 해결, 설정 등의 주요 기능을 담당하며, 각 화면은 독립적으로 개발되어 유지보수가 용이합니다. 위젯 레이어에서는 재사용 가능한 컴포넌트(루틴 생성, 스케줄 하단 바, 시간 선택기 등)를 제공하며, 상수 레이어에서는 색상, 폰트, 데이터 등을 중앙 집중식으로 관리합니다. 백엔드와의 통신은 HTTP 패키지를 통해 이루어지며, 모든 API 요청은 JWT 토큰을 포함한 Authorization 헤더를 사용합니다. Flutter Secure Storage를 통해 토큰과 사용자 정보를 안전하게 저장하며, 앱 상태와 무관하게 데이터가 유지됩니다. Firebase Cloud Messaging을 통해 푸시 알림을 받아 사용자에게 수면 시간을 알려주는 기능도 구현되어 있습니다."
          : "The Planz application adopts a Flutter-based client-server architecture. The frontend is developed with Flutter to operate on both iOS and Android platforms with the same codebase, and the backend consists of a Spring Boot-based RESTful API server. The frontend architecture consists of screens, widgets, and constants. The screen layer handles major features such as schedule, sleep records, problem solving, and settings, with each screen developed independently for easy maintenance. The widget layer provides reusable components (routine creation, schedule bottom bar, time picker, etc.), and the constant layer centrally manages colors, fonts, and data. Communication with the backend is done through the HTTP package, and all API requests use an Authorization header containing JWT tokens. Tokens and user information are securely stored through Flutter Secure Storage, maintaining data regardless of app state. Firebase Cloud Messaging is also implemented to receive push notifications and inform users of sleep times.",
      diagrams: [
        {
          title:
            language === "ko"
              ? "시스템 아키텍처 다이어그램"
              : "System Architecture Diagram",
          image: "",
          alt:
            language === "ko"
              ? "Planz 애플리케이션 시스템 아키텍처 구조도"
              : "Planz application system architecture diagram",
        },
      ],
    },
    retrospective:
      language === "ko"
        ? "일정/캘린더처럼 상태가 복잡한 화면에서 ‘초기 로드 + 캐시 + 선택 상태’가 엉키지 않게 구성하는 연습이 됐습니다.\n다음에는 에러/로딩 상태를 더 촘촘히 다루고, 오프라인 저장(로컬 DB) 같은 기능을 붙여보고 싶습니다."
        : "This project helped me structure complex schedule/calendar UI with initial loading, caching, and selection state.\nNext I would improve loading/error UX and add offline storage (local DB).",
    achievements: [
      {
        title:
          language === "ko"
            ? "루틴 기반 스케줄 관리 시스템 구현"
            : "Routine-based Schedule Management System Implementation",
        description:
          language === "ko"
            ? "루틴 기반 스케줄 입력/조회 화면을 구성했습니다."
            : "Built routine-based schedule input/view screens.",
      },
      {
        title:
          language === "ko"
            ? "실시간 캘린더와 수면 기록 동기화"
            : "Real-time Calendar and Sleep Record Synchronization",
        description:
          language === "ko"
            ? "캘린더 날짜 선택에 따라 수면 기록을 조회/입력하는 흐름을 구현했습니다."
            : "Implemented date-driven sleep record view/create flow with a calendar UI.",
      },
      {
        title:
          language === "ko"
            ? "JWT 기반 보안 인증 시스템 구축"
            : "JWT-based Secure Authentication System Construction",
        description:
          language === "ko"
            ? "JWT 토큰을 Secure Storage에 저장하고 API 요청에 포함하도록 구성했습니다."
            : "Stored JWT tokens in secure storage and attached them to API requests.",
      },
      {
        title:
          language === "ko"
            ? "개인 맞춤형 생활 수칙 제공"
            : "Personalized Lifestyle Rules Provision",
        description:
          language === "ko"
            ? "사용자 설정에 따라 생활 수칙을 필터링해 보여주는 기능을 구현했습니다."
            : "Displayed lifestyle rules filtered by user settings.",
      },
      {
        title:
          language === "ko"
            ? "크로스 플랫폼 호환성 달성"
            : "Cross-platform Compatibility Achievement",
        description:
          language === "ko"
            ? "Flutter 기반으로 iOS/Android에서 동작하도록 구성했습니다."
            : "Shipped as a Flutter app targeting iOS and Android.",
      },
    ],
  };
}
