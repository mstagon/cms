import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getMoyangDetail(language: Language = "ko"): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "자취방/시설(주차장·창고 등) 양도 게시글을 탐색하고 거래를 이어갈 수 있는 커뮤니티형 앱을 만들었습니다. 게시글/필터/지도 조회, STOMP 기반 채팅, 알림, 인증/토큰 저장까지 앱의 기본 흐름을 구현했습니다."
        : "Moyang is a community-style app for listing and exploring room/facility transfers (e.g., parking/storage). It implements core flows: posts + filters, map browsing, STOMP-based chat, notifications, and auth/token storage.",
    links: {
      github: "https://github.com/mstagon/MoYang_FrontEnd",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "Flutter 기반 크로스 플랫폼 앱입니다.\n\n- 게시글: 양도 게시글 CRUD, 댓글/찜/신고 등 커뮤니티 기능\n- 탐색: 다중 조건 필터(가격/옵션 등) + 지도 기반 매물 조회(마커)\n- 채팅: STOMP(WebSocket) 기반 실시간 채팅, 재연결/오프라인 큐잉 처리\n- 인증/보안: 토큰 저장(Secure Storage), 생체 인증(Local Auth)\n- API: Dio + Retrofit(+ codegen)으로 타입 안전한 통신 구성\n- 상태/라우팅: Riverpod v2 + GoRouter\n\n설명은 실제 구현한 기능/구성 중심으로만 정리했습니다."
          : "A Flutter cross-platform app.\n\n- Posts: CRUD + community features (comments/bookmarks/reports)\n- Explore: multi-condition filters + map-based browsing with markers\n- Chat: STOMP(WebSocket) real-time chat with reconnect/offline queue\n- Auth/Security: token storage (Secure Storage), biometric auth (Local Auth)\n- API: Dio + Retrofit (codegen) for type-safe calls\n- State/Routing: Riverpod v2 + GoRouter",
      stats: {
        vision:
          language === "ko"
            ? "게시글 탐색 → 문의(채팅)로 이어지는 흐름을 앱 내에서 끊기지 않게 만드는 데 집중했습니다."
            : "Focused on keeping the flow from browsing posts to chatting within the app.",
      },
    },
    role: {
      title: language === "ko" ? "프론트엔드 개발자" : "Frontend Developer",
      responsibilities:
        language === "ko"
          ? [
              "Flutter 기반 크로스 플랫폼 모바일 애플리케이션 개발",
              "자취방 양도 게시판 및 기타 시설 양도 게시판 UI/UX 구현",
              "STOMP 프로토콜 기반 실시간 채팅 시스템 개발",
              "지도 기반 매물 조회 기능 및 마커 표시 기능 개발",
              "Riverpod v2를 활용한 상태 관리 및 GoRouter 기반 라우팅 설계",
              "Dio + Retrofit을 활용한 타입 안전한 API 통신 구현",
            ]
          : [
              "Developed Flutter-based cross-platform mobile application",
              "Implemented UI/UX for room transfer board and other facility transfer board",
              "Developed STOMP protocol-based real-time chat system",
              "Developed map-based property search and marker display features",
              "Designed state management using Riverpod v2 and routing based on GoRouter",
              "Implemented type-safe API communication using Dio + Retrofit",
            ],
    },
    timeframe: "2024.12 - 진행 중",
    platform: "Mobile + Web",
    type: "Community Platform / Marketplace",
    techStack: [
      "Flutter",
      "Dart",
      "Riverpod v2",
      "Riverpod Generator",
      "GoRouter",
      "Dio",
      "Retrofit",
      "Retrofit Generator",
      "STOMP",
      "Flutter Secure Storage",
      "Image Picker",
      "Flutter ScreenUtil",
      "Persistent Bottom Nav Bar",
      "JSON Serialization",
      "Flutter SVG",
      "Local Auth",
      "Share Plus",
    ],
    performance: {
      pageLoadSpeed: { value: 85 },
    },
    challenges: [
      {
        title:
          language === "ko"
            ? "STOMP 프로토콜 기반 실시간 채팅 구현"
            : "Implementing Real-time Chat with STOMP Protocol",
        asIs:
          language === "ko"
            ? "실시간 채팅 기능을 구현하기 위해 WebSocket 기반 통신이 필요했지만, 백엔드에서 STOMP 프로토콜을 사용하고 있어 Flutter에서 STOMP 클라이언트를 구현해야 했습니다. 초기에는 연결 상태 관리, 메시지 재전송, 오프라인 큐잉 등이 제대로 구현되지 않아 사용자 경험이 좋지 않았습니다."
            : "WebSocket-based communication was needed to implement real-time chat functionality, but since the backend uses the STOMP protocol, a STOMP client had to be implemented in Flutter. Initially, connection state management, message retransmission, offline queuing, etc. were not properly implemented, resulting in poor user experience.",
        toBe:
          language === "ko"
            ? "stomp_dart_client 패키지를 활용하여 STOMP 클라이언트를 구현하고, Riverpod을 통해 연결 상태를 관리하도록 설계했습니다. 연결이 끊어졌을 때 자동으로 재연결하는 로직을 구현하고, 오프라인 상태에서 전송된 메시지는 로컬 스토리지에 큐잉하여 재연결 시 자동으로 전송되도록 했습니다. 또한 메시지 전송 실패 시 재시도 로직과 메시지 순서 보장을 위한 타임스탬프 기반 정렬을 구현했습니다."
            : "Implemented a STOMP client using the stomp_dart_client package and designed to manage connection state through Riverpod. Implemented logic to automatically reconnect when the connection is lost, and queued messages sent in offline state to local storage to automatically send when reconnected. Also implemented retry logic for failed message transmission and timestamp-based sorting to guarantee message order.",
        result:
          language === "ko"
            ? "재연결/오프라인 큐잉을 포함해 실시간 채팅이 끊기지 않도록 구성했습니다."
            : "Implemented reconnect + offline queueing to make chat resilient.",
      },
      {
        title:
          language === "ko"
            ? "지도 기반 매물 조회 성능 최적화"
            : "Optimizing Map-based Property Search Performance",
        asIs:
          language === "ko"
            ? "초기 구현 시 지도에 모든 매물을 한 번에 표시하면서 마커가 많아질수록 렌더링 성능이 저하되고, 사용자 경험이 나빠지는 문제가 발생했습니다. 특히 스크롤이나 지도 이동 시 프레임 드롭이 발생하여 앱의 반응성이 떨어졌습니다."
            : "In the initial implementation, displaying all properties on the map at once caused rendering performance degradation as the number of markers increased, leading to poor user experience. Particularly, frame drops occurred during scrolling or map movement, reducing app responsiveness.",
        toBe:
          language === "ko"
            ? "뷰포트 기반 마커 클러스터링과 지도 영역 내 매물만 필터링하여 표시하는 방식으로 개선했습니다. 사용자가 보이는 지도 영역(Viewport) 내의 매물만 동적으로 로드하고, 지도 이동 시 이전 마커를 제거하고 새로운 영역의 마커만 추가하는 방식으로 최적화했습니다. 또한 마커 클러스터링 라이브러리를 활용하여 가까운 위치의 매물들을 하나의 클러스터로 묶어 표시하여 마커 수를 줄였습니다."
            : "Improved by implementing viewport-based marker clustering and filtering to display only properties within the map area. Dynamically load only properties within the visible map area (Viewport), and optimize by removing previous markers and adding only markers in the new area when the map moves. Also utilized a marker clustering library to group nearby properties into clusters, reducing the number of markers.",
        result:
          language === "ko"
            ? "뷰포트 기반 로딩/클러스터링으로 마커 렌더링 부담을 줄였습니다."
            : "Reduced marker rendering load with viewport-based loading and clustering.",
      },
      {
        title:
          language === "ko"
            ? "복잡한 필터링 시스템 구현"
            : "Implementing Complex Filtering System",
        asIs:
          language === "ko"
            ? "자취방 양도 게시글에는 가격, 위치, 방 크기, 주차장, 엘리베이터, CCTV, 반려동물 허용 여부 등 다양한 필터 조건이 필요했습니다. 초기에는 각 필터를 독립적으로 처리하다 보니 필터 조합 시 로직이 복잡해지고, 필터 상태 관리가 어려웠습니다."
            : "Room transfer posts require various filter conditions such as price, location, room size, parking, elevator, CCTV, pet allowance, etc. Initially, processing each filter independently made the logic complex when combining filters, and filter state management was difficult.",
        toBe:
          language === "ko"
            ? "Riverpod의 StateNotifier를 활용하여 필터 상태를 중앙에서 관리하는 필터 프로바이더를 구현했습니다. 각 필터 타입(가격, 위치, 시설 등)을 독립적인 모델로 정의하고, 필터 조합 시 AND/OR 로직을 명확히 구분하여 처리했습니다. 또한 필터 초기화, 필터 저장, 필터 공유 등의 기능도 추가하여 사용자 편의성을 높였습니다."
            : "Implemented a filter provider that centrally manages filter state using Riverpod's StateNotifier. Defined each filter type (price, location, facilities, etc.) as an independent model, and clearly distinguished and processed AND/OR logic when combining filters. Also added features such as filter reset, filter save, and filter sharing to improve user convenience.",
        result:
          language === "ko"
            ? "필터 상태를 중앙에서 관리해 조합 로직을 단순화하고 유지보수성을 높였습니다."
            : "Centralized filter state to simplify combinations and maintenance.",
      },
      {
        title:
          language === "ko"
            ? "타입 안전한 API 통신 구축"
            : "Building Type-safe API Communication",
        asIs:
          language === "ko"
            ? "초기에는 Dio만 사용하여 API 통신을 구현했지만, 수동으로 모델을 파싱하고 에러 처리를 해야 해서 코드가 반복적이고 타입 안전성이 떨어졌습니다. 또한 API 엔드포인트가 변경될 때마다 여러 곳을 수정해야 하는 문제가 있었습니다."
            : "Initially, only Dio was used to implement API communication, but manually parsing models and handling errors made the code repetitive and type safety was low. Also, there was a problem of having to modify multiple places whenever API endpoints changed.",
        toBe:
          language === "ko"
            ? "Retrofit과 코드 제너레이션을 도입하여 타입 안전한 API 클라이언트를 구축했습니다. 인터페이스에 API 엔드포인트를 정의하고, build_runner를 통해 자동으로 구현체를 생성하도록 했습니다. JSON Serialization을 활용하여 모델 클래스도 자동으로 생성하도록 하여, API 응답 구조가 변경되면 컴파일 타임에 에러를 감지할 수 있게 했습니다."
            : "Introduced Retrofit and code generation to build a type-safe API client. Defined API endpoints in interfaces and automatically generated implementations through build_runner. Also used JSON Serialization to automatically generate model classes, enabling compile-time error detection when API response structures change.",
        result:
          language === "ko"
            ? "타입 안전성이 크게 향상되었고, API 변경 시 컴파일 타임에 에러를 감지할 수 있어 버그를 사전에 방지할 수 있었습니다. 코드 반복도 줄어들어 개발 생산성이 향상되었습니다."
            : "Type safety significantly improved, and being able to detect errors at compile time when APIs change enabled preventing bugs in advance. Code repetition also decreased, improving development productivity.",
      },
      {
        title:
          language === "ko"
            ? "크로스 플랫폼 호환성 및 반응형 디자인"
            : "Cross-platform Compatibility and Responsive Design",
        asIs:
          language === "ko"
            ? "iOS, Android, Web 등 다양한 플랫폼에서 UI 레이아웃이 일관되지 않고, 특히 웹 환경에서 모바일 UI가 제대로 표시되지 않는 문제가 있었습니다. 또한 다양한 화면 크기에 대응하지 못하여 작은 화면에서는 콘텐츠가 잘리고, 큰 화면에서는 공간 활용이 비효율적이었습니다."
            : "UI layouts were inconsistent across various platforms including iOS, Android, and Web, and particularly on web, mobile UI was not properly displayed. Also, not responding to various screen sizes caused content to be cut off on small screens and inefficient space utilization on large screens.",
        toBe:
          language === "ko"
            ? "Flutter ScreenUtil을 활용하여 다양한 화면 크기에 대응하는 반응형 디자인을 구현했습니다. 디자인 사이즈(393x852)를 기준으로 모든 위젯의 크기를 비율로 계산하여 적용했으며, 플랫폼별로 다른 디자인 가이드라인(iOS의 Cupertino, Android의 Material)을 적용했습니다. 웹 환경에서는 데스크톱과 모바일 뷰를 구분하여 각각에 최적화된 레이아웃을 제공했습니다."
            : "Implemented responsive design that responds to various screen sizes using Flutter ScreenUtil. Applied all widget sizes proportionally based on the design size (393x852), and applied different design guidelines for each platform (iOS's Cupertino, Android's Material). On web, distinguished between desktop and mobile views to provide optimized layouts for each.",
        result:
          language === "ko"
            ? "모든 플랫폼에서 일관된 사용자 경험을 제공할 수 있게 되었고, 웹 접근성이 크게 향상되었습니다. 다양한 디바이스에서 테스트한 결과, 모든 화면 크기에서 정상적으로 작동함을 확인했습니다."
            : "Achieved consistent user experience across all platforms, and web accessibility significantly improved. Testing on various devices confirmed that it works properly on all screen sizes.",
      },
    ],
    architecture: {
      description:
        language === "ko"
          ? "Moyang 애플리케이션은 Clean Architecture 원칙을 따르며, 기능별 모듈화된 구조로 설계되었습니다. 각 기능(홈, 양도, 채팅, 커뮤니티, 마이페이지 등)은 독립적인 모듈로 구성되어 있으며, 각 모듈 내에서 view, view_models, repository, models로 계층을 구분했습니다.\n\nPresentation Layer에서는 Riverpod v2를 활용한 상태 관리와 GoRouter를 통한 선언적 라우팅을 사용합니다. Riverpod Generator를 통해 코드 제너레이션을 활용하여 보일러플레이트 코드를 줄이고 타입 안전성을 높였습니다. Business Logic Layer에서는 Repository 패턴을 적용하여 데이터 소스와 비즈니스 로직을 분리했으며, Dio와 Retrofit을 활용한 타입 안전한 API 통신을 구현했습니다.\n\n실시간 채팅 기능은 STOMP 프로토콜을 통해 구현되었으며, Riverpod을 통해 연결 상태와 메시지 상태를 관리합니다. Data Layer에서는 Flutter Secure Storage를 활용하여 인증 토큰과 민감한 정보를 안전하게 저장하며, JSON Serialization을 통해 모델 클래스를 자동 생성합니다."
          : "The Moyang application follows Clean Architecture principles and is designed with a modular structure by feature. Each feature (home, handover, chat, community, mypage, etc.) is composed as an independent module, and layers are distinguished as view, view_models, repository, and models within each module.\n\nThe Presentation Layer uses state management with Riverpod v2 and declarative routing with GoRouter. Utilized code generation through Riverpod Generator to reduce boilerplate code and increase type safety. In the Business Logic Layer, the Repository pattern is applied to separate data sources and business logic, and type-safe API communication is implemented using Dio and Retrofit.\n\nReal-time chat functionality is implemented through the STOMP protocol, and connection state and message state are managed through Riverpod. In the Data Layer, Flutter Secure Storage is used to securely store authentication tokens and sensitive information, and model classes are automatically generated through JSON Serialization.",
      diagrams: [
        {
          title:
            language === "ko"
              ? "시스템 아키텍처 다이어그램"
              : "System Architecture Diagram",
          image: "",
          alt:
            language === "ko"
              ? "Moyang 애플리케이션의 전체 아키텍처를 보여주는 다이어그램. Presentation Layer, Business Logic Layer, Data Layer 간의 관계와 Flutter, Riverpod, Dio, Retrofit, STOMP 등의 기술 스택을 시각화"
              : "Diagram showing the overall architecture of the Moyang application, visualizing the relationships between Presentation Layer, Business Logic Layer, Data Layer and technology stack including Flutter, Riverpod, Dio, Retrofit, STOMP",
        },
        {
          title:
            language === "ko"
              ? "기능 모듈 구조도"
              : "Feature Module Structure Diagram",
          image: "",
          alt:
            language === "ko"
              ? "홈, 양도, 채팅, 커뮤니티, 마이페이지 등 주요 기능 모듈 간의 관계와 데이터 흐름을 보여주는 다이어그램"
              : "Diagram showing the relationships and data flow between major feature modules such as home, handover, chat, community, and mypage",
        },
      ],
    },
    retrospective:
      language === "ko"
        ? "채팅(STOMP), 지도(마커), 복잡한 필터처럼 상태가 복잡한 화면에서 Riverpod으로 상태를 정리하는 경험을 했습니다.\n다음에는 테스트/모니터링을 더 일찍 붙이고, 오프라인 동작 범위를 명확히 정의해서 기능을 확장하고 싶습니다."
        : "This project helped me manage complex UI state (chat/map/filters) with Riverpod.\nNext I would add tests/monitoring earlier and define offline behavior more clearly.",
    achievements: [
      {
        title:
          language === "ko"
            ? "STOMP 기반 실시간 채팅 시스템 구축"
            : "STOMP-based Real-time Chat System Implementation",
        description:
          language === "ko"
            ? "STOMP 기반 실시간 채팅 + 오프라인 큐잉/재연결 로직을 구현했습니다."
            : "Implemented STOMP chat with offline queueing and reconnection.",
      },
      {
        title:
          language === "ko"
            ? "지도 성능 최적화"
            : "Map Performance Optimization",
        description:
          language === "ko"
            ? "뷰포트 기반 로딩/클러스터링으로 지도 마커 렌더링 부담을 줄였습니다."
            : "Reduced map marker rendering via viewport loading and clustering.",
      },
      {
        title:
          language === "ko"
            ? "타입 안전한 API 통신 구축"
            : "Type-safe API Communication Implementation",
        description:
          language === "ko"
            ? "Retrofit + 코드 제너레이션으로 타입 안전한 API 클라이언트를 구성했습니다."
            : "Built a type-safe API client with Retrofit + codegen.",
      },
      {
        title:
          language === "ko"
            ? "복잡한 필터링 시스템 구현"
            : "Complex Filtering System Implementation",
        description:
          language === "ko"
            ? "다중 조건 필터를 중앙 상태로 관리하는 구조를 만들었습니다."
            : "Centralized multi-condition filters in state management.",
      },
      {
        title:
          language === "ko"
            ? "크로스 플랫폼 호환성 확보"
            : "Cross-platform Compatibility Achieved",
        description:
          language === "ko"
            ? "Flutter 기반으로 iOS/Android/Web 타깃을 고려한 UI 구성을 진행했습니다."
            : "Built UI targeting Flutter’s iOS/Android/Web platforms.",
      },
    ],
  };
}
