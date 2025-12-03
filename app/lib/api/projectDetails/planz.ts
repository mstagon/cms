import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getPlanzDetail(language: Language = "ko"): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "Planz는 현대인의 고압적이고 불규칙한 활동으로 인한 수면 부족과 수면의 질 저하 문제를 해결하기 위해 기획된 수면 관리 모바일 애플리케이션입니다. 학업 부담, 교대 근무, 야간 근무, 의료 서비스 노동자, 운송 노동자 등 다양한 직업군의 사람들이 겪는 수면 문제를 개인 맞춤형 솔루션으로 제공하는 것이 핵심 목표입니다. 연구 조사를 통해 수면 패턴을 개선하고 싶어 하는 니즈가 있음을 확인했으며, 이를 위해 개인의 일정과 생활 습관을 고려해야 한다는 점을 발견했습니다. 특히 2030 1인 가구 남녀 중 48.2%는 불규칙한 생활 패턴(밤낮이 바뀐 수면 패턴, 늦잠 등 포함)을 개선하고 싶다고 답했고, 불규칙한 수면 패턴의 원인으로 생활 습관의 통제력 부족(53%)이 가장 높게 나타났습니다. Planz는 이러한 문제를 해결하기 위해 사용자의 일정 데이터를 받아 개인 맞춤형 수면 스케줄을 계획하고, 규칙적인 수면 패턴을 유지할 최적의 시간을 계산하며, 평소 습관을 고려한 생활 수칙을 제공하고 알림으로 지속적으로 관리합니다."
        : "Planz is a sleep management mobile application planned to solve sleep deprivation and poor sleep quality problems caused by modern people's high-pressure and irregular activities. The core goal is to provide personalized solutions for sleep problems experienced by various occupational groups such as students with academic burden, shift workers, night workers, healthcare service workers, and transportation workers. Through research, it was confirmed that there is a need to improve sleep patterns, and it was found that individual schedules and lifestyle habits must be considered for this. In particular, 48.2% of single-person households in their 20s and 30s responded that they want to improve irregular lifestyle patterns (including reversed day-night sleep patterns, oversleeping, etc.), and lack of control over lifestyle habits (53%) was identified as the main cause of irregular sleep patterns. Planz solves these problems by receiving user schedule data to plan personalized sleep schedules, calculating optimal times to maintain regular sleep patterns, and providing lifestyle rules considering usual habits with continuous management through notifications.",
    links: {
      github: "https://github.com/mstagon/Planz-Front-End",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "Planz는 Flutter를 활용한 크로스 플랫폼 모바일 애플리케이션으로, 사용자의 고정 스케줄을 입력하면 최적의 수면 시간을 자동으로 계획해주는 지능형 수면 관리 시스템입니다. 사용자의 일정을 고려해 최적의 기상, 취침, 낮잠 스케줄을 계획하고 알림을 통해 규칙적인 수면 패턴과 좋은 수면 습관을 형성하는데 도움을 드립니다. 앱의 핵심 기능은 세 가지로 구성됩니다. 첫째, 스케줄 관리 기능으로 사용자는 근무, 수업, 알바 등 고정된 스케줄을 루틴 단위로 추가할 수 있습니다. 각 루틴은 데이(Day), 이브닝(Evening), 나이트(Night)로 구분되며, 시작 시간과 종료 시간, 그리고 적용되는 날짜를 선택할 수 있습니다. 시스템은 이 정보를 바탕으로 최적의 기상 시간, 취침 시간, 낮잠 시간을 자동으로 계산하여 사용자에게 제공합니다. 둘째, 수면 기록 기능으로 사용자는 매일 아침 수면을 기록하고 나만의 생활 수칙을 확인할 수 있습니다. 수면 정보를 기록하고 생활 수칙을 확인하는 습관은 나에게 적절한 수면 시간을 파악하고 수면에 대한 지속적인 관심을 가지는 데 필요합니다. 사용자는 기상 후 기분(활기차요, 상쾌해요, 무난해요, 피곤해요, 짜증나요)과 총 수면 시간을 기록할 수 있으며, 캘린더를 통해 과거의 수면 기록을 한눈에 확인할 수 있습니다. 셋째, 고민 해결 기능으로 사용자는 수면 관련 고민을 상담받을 수 있습니다. 가입 시 선택했던 생활 습관을 고려해 생활 수칙을 제공하며, 수면 전문가와의 1:1 상담 서비스도 제공합니다. 또한 수면 관련 제품 추천 광고를 통해 사용자와 의사를 연결하는 서비스를 제공합니다."
          : "Planz is a cross-platform mobile application developed with Flutter that automatically plans optimal sleep times when users enter their fixed schedules. It plans optimal wake-up, bedtime, and nap schedules considering the user's schedule and helps form regular sleep patterns and good sleep habits through notifications. The app's core functionality consists of three parts. First, the schedule management feature allows users to add fixed schedules such as work, classes, and part-time jobs in routine units. Each routine is divided into Day, Evening, and Night, and users can select start and end times and applicable dates. The system automatically calculates optimal wake-up, bedtime, and nap times based on this information. Second, the sleep record feature allows users to record their sleep every morning and check their own lifestyle rules. The habit of recording sleep information and checking lifestyle rules is necessary to understand appropriate sleep time and maintain continuous interest in sleep. Users can record their mood after waking up (energetic, refreshed, okay, tired, annoyed) and total sleep time, and view past sleep records at a glance through a calendar. Third, the problem-solving feature allows users to consult about sleep-related concerns. It provides lifestyle rules considering habits selected at registration and offers 1:1 consultation services with sleep experts. It also provides services connecting users with doctors through recommended advertisements for sleep-related products.",
      stats: {
        vision:
          language === "ko"
            ? "개인의 일정과 생활 습관을 고려한 맞춤형 수면 관리로 모든 사람이 건강하고 규칙적인 수면 패턴을 형성할 수 있도록 돕습니다."
            : "Help everyone form healthy and regular sleep patterns through personalized sleep management that considers individual schedules and lifestyle habits.",
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
      pageLoadSpeed: { value: 85, improvement: "+15% improvement" }},
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
            ? "캘린더 네비게이션이 부드럽게 동작하며, 사용자 경험이 크게 개선되었습니다. API 호출 횟수도 최적화되어 성능이 향상되었습니다."
            : "Calendar navigation operates smoothly, and user experience greatly improved. API call frequency was also optimized, improving performance.",
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
            ? "사용자마다 맞춤형 생활 수칙이 제공되어 개인화된 경험이 향상되었고, 사용자 만족도가 높아졌습니다."
            : "Personalized lifestyle rules are provided for each user, enhancing personalized experience and increasing user satisfaction.",
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
        ? "이 프로젝트를 통해 Flutter를 활용한 크로스 플랫폼 모바일 애플리케이션 개발에 대한 깊은 이해를 얻을 수 있었습니다. 특히 복잡한 상태 관리와 API 통신, 보안 저장소 활용 등 실무에서 필요한 다양한 기술을 경험할 수 있었습니다. Table Calendar와 같은 서드파티 라이브러리를 활용하여 복잡한 UI를 구현하는 방법도 배울 수 있었습니다. 가장 큰 성과는 사용자의 복잡한 일정을 고려하여 최적의 수면 시간을 자동으로 계산하고 표시하는 기능을 구현할 수 있었다는 점입니다. 루틴 기반의 스케줄 관리 시스템을 통해 사용자가 자신의 생활 패턴에 맞는 맞춤형 수면 관리를 할 수 있도록 했습니다. 또한 수면 기록과 생활 수칙 기능을 통해 사용자가 지속적으로 수면에 대한 관심을 가질 수 있도록 유도했습니다. 아쉬운 점으로는 초기 설계 단계에서 상태 관리 아키텍처를 더 체계적으로 설계하지 못했다는 것입니다. Provider나 Riverpod 같은 상태 관리 라이브러리를 도입했다면 코드의 가독성과 유지보수성이 더욱 향상되었을 것입니다. 또한 에러 핸들링과 로딩 상태 관리 부분에서 더 개선할 여지가 있습니다. 개선하고 싶은 점으로는 오프라인 모드를 지원하여 네트워크 연결이 없어도 기본 기능을 사용할 수 있도록 하고 싶습니다. 또한 로컬 데이터베이스(SQLite)를 활용하여 수면 기록을 로컬에 저장하고, 네트워크가 연결되면 자동으로 동기화하는 기능을 추가하면 사용자 경험이 더욱 향상될 것입니다. 또한 애니메이션과 전환 효과를 더 풍부하게 하여 사용자 경험을 개선하고 싶습니다."
        : "Through this project, I gained deep understanding of cross-platform mobile application development using Flutter. In particular, I was able to experience various technologies needed in practice, such as complex state management, API communication, and secure storage utilization. I also learned how to implement complex UIs using third-party libraries like Table Calendar. The biggest achievement was being able to implement functionality that automatically calculates and displays optimal sleep times considering users' complex schedules. Through a routine-based schedule management system, users can manage personalized sleep according to their lifestyle patterns. Also, through sleep record and lifestyle rule features, we encouraged users to maintain continuous interest in sleep. As a regret, we didn't design the state management architecture more systematically in the initial design phase. If we had introduced state management libraries like Provider or Riverpod, code readability and maintainability would have been further improved. Also, there's room for improvement in error handling and loading state management. As improvements I'd like to make, I want to support offline mode so basic features can be used even without network connection. Also, by utilizing a local database (SQLite) to store sleep records locally and automatically synchronizing when the network is connected, user experience would be further enhanced. I also want to enrich animations and transition effects to improve user experience.",
    achievements: [
      {
        title:
          language === "ko"
            ? "루틴 기반 스케줄 관리 시스템 구현"
            : "Routine-based Schedule Management System Implementation",
        description:
          language === "ko"
            ? "복잡한 루틴과 스케줄 데이터를 효율적으로 관리하는 시스템을 구축했습니다."
            : "Built a system to efficiently manage complex routine and schedule data.",
        metrics:
          language === "ko"
            ? "루틴 관리 기능 완성도"
            : "Routine Management Feature Completion",
        value: 95,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "실시간 캘린더와 수면 기록 동기화"
            : "Real-time Calendar and Sleep Record Synchronization",
        description:
          language === "ko"
            ? "캘린더 UI와 수면 기록 데이터를 실시간으로 동기화하여 사용자 경험을 향상시켰습니다."
            : "Synchronized calendar UI and sleep record data in real-time to enhance user experience.",
        metrics:
          language === "ko"
            ? "데이터 동기화 정확도"
            : "Data Synchronization Accuracy",
        value: 92,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "JWT 기반 보안 인증 시스템 구축"
            : "JWT-based Secure Authentication System Construction",
        description:
          language === "ko"
            ? "Flutter Secure Storage를 활용한 안전한 토큰 관리 시스템을 구현했습니다."
            : "Implemented a secure token management system using Flutter Secure Storage.",
        metrics:
          language === "ko"
            ? "보안 인증 시스템 안정성"
            : "Security Authentication System Stability",
        value: 98,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "개인 맞춤형 생활 수칙 제공"
            : "Personalized Lifestyle Rules Provision",
        description:
          language === "ko"
            ? "사용자의 생활 습관에 맞는 맞춤형 생활 수칙을 동적으로 제공하는 기능을 구현했습니다."
            : "Implemented functionality to dynamically provide personalized lifestyle rules matching user lifestyle habits.",
        metrics:
          language === "ko"
            ? "개인화 기능 만족도"
            : "Personalization Feature Satisfaction",
        value: 88,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "크로스 플랫폼 호환성 달성"
            : "Cross-platform Compatibility Achievement",
        description:
          language === "ko"
            ? "iOS와 Android 양쪽 플랫폼에서 안정적으로 동작하는 크로스 플랫폼 애플리케이션을 구현했습니다."
            : "Implemented a cross-platform application that operates stably on both iOS and Android platforms.",
        metrics: language === "ko" ? "플랫폼 호환성" : "Platform Compatibility",
        value: 100,
        unit: "%",
      },
    ],
  };
}
