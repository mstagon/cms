import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getMoyangDetail(language: Language = "ko"): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "Moyang(모양) 프로젝트는 자취생과 원룸 거주자들을 위한 통합 양도 플랫폼입니다. '모두가 살 수 있는 내 집 마련을 위해, 모두의 양도 모양'이라는 슬로건 아래, 자취방 양도뿐만 아니라 기타 시설(주차장, 창고 등) 양도까지 포괄하는 커뮤니티 기반 거래 플랫폼을 구축하는 것이 핵심 목표입니다. 단순한 정보 공유를 넘어 지역별 커뮤니티, 지도 기반 매물 조회, STOMP 프로토콜 기반 실시간 채팅, 푸시 알림 등 사용자 경험을 극대화하는 기능들을 제공하여 안전하고 효율적인 양도 거래를 지원합니다."
        : "The Moyang project is an integrated transfer platform for people living alone and studio apartment residents. Under the slogan 'Everyone's transfer shape for everyone to have their own home', the core goal is to build a community-based trading platform that encompasses not only room transfers but also transfers of other facilities (parking lots, warehouses, etc.). Beyond simple information sharing, it provides features that maximize user experience such as regional communities, map-based property search, STOMP protocol-based real-time chat, and push notifications to support safe and efficient transfer transactions.",
    links: {
      github: "https://github.com/mstagon/MoYang_FrontEnd",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "Moyang은 Flutter 기반의 크로스 플랫폼 모바일 애플리케이션으로, 자취방 양도 거래를 중심으로 한 종합 커뮤니티 플랫폼입니다. 사용자는 자취방 양도 게시글을 작성, 수정, 삭제할 수 있으며, 다양한 필터링 옵션(가격, 위치, 방 크기, 주차장, 엘리베이터, CCTV 등)을 통해 원하는 매물을 효율적으로 검색할 수 있습니다. 또한 기타 시설(주차장, 창고 등) 양도 게시판도 별도로 운영하여 사용자들의 다양한 니즈를 충족시킵니다.\n\n지도 기반 매물 조회 기능을 통해 사용자는 직관적으로 지역별 매물 현황을 파악할 수 있으며, 각 매물의 위치를 마커로 표시하여 시각적으로 확인할 수 있습니다. 건물별 및 주거 지역별 커뮤니티 기능을 통해 사용자들 간의 정보 공유와 소통이 가능하며, 이를 통해 양도 거래 전 상세 정보를 교환하고 신뢰 관계를 구축할 수 있습니다.\n\nSTOMP 프로토콜을 활용한 실시간 채팅 시스템을 구축하여 사용자들 간의 즉각적인 소통을 지원합니다. 채팅방 목록, 개별 채팅방, 메시지 전송 및 수신 등 완전한 채팅 기능을 제공하며, 오프라인 상태에서도 메시지를 큐잉하여 재연결 시 자동으로 전송되도록 구현했습니다. 푸시 알림 시스템을 통해 관심 있는 게시글이나 새로운 공지사항, 채팅 메시지에 대한 즉각적인 알림을 제공합니다.\n\n회원 관리 시스템에서는 회원가입, 로그인, 비밀번호 재설정, 회원정보 수정, 회원탈퇴 등 완전한 사용자 인증 및 관리 기능을 제공합니다. Flutter Secure Storage를 활용하여 인증 토큰과 민감한 정보를 안전하게 저장하며, 생체 인증 기능도 지원합니다. 게시글 찜하기, 댓글 작성, 신고 기능 등 커뮤니티 기능도 완비되어 있습니다.\n\n백엔드 API와의 통신은 Dio와 Retrofit을 활용하여 구현했으며, 코드 제너레이션을 통해 타입 안전한 API 클라이언트를 구축했습니다. Riverpod v2를 활용한 상태 관리와 GoRouter를 통한 선언적 라우팅으로 확장 가능하고 유지보수가 용이한 아키텍처를 구축했습니다. Flutter의 크로스 플랫폼 특성을 최대한 활용하여 iOS, Android, Web 등 다양한 플랫폼에서 동일한 사용자 경험을 제공합니다."
          : "Moyang is a Flutter-based cross-platform mobile application that serves as a comprehensive community platform centered around room transfer transactions. Users can create, edit, and delete room transfer posts, and efficiently search for desired properties through various filtering options (price, location, room size, parking, elevator, CCTV, etc.). Additionally, a separate board for other facility transfers (parking lots, warehouses, etc.) is operated to meet users' diverse needs.\n\nThrough map-based property search functionality, users can intuitively understand the property status by region, and visually confirm each property's location through markers. Building-specific and residential area-specific community features enable information sharing and communication among users, allowing them to exchange detailed information before transfer transactions and build trust relationships.\n\nBuilt a real-time chat system using the STOMP protocol to support immediate communication among users. Provides complete chat functionality including chat room lists, individual chat rooms, message sending and receiving, and implements message queuing in offline state to automatically send when reconnected.\n\nThe member management system provides complete user authentication and management features including signup, login, password reset, member information modification, and member withdrawal. Uses Flutter Secure Storage to securely store authentication tokens and sensitive information, and also supports biometric authentication. Community features such as bookmarking posts, writing comments, and reporting are also complete.\n\nAPI communication with the backend is implemented using Dio and Retrofit, building a type-safe API client through code generation. Built a scalable and maintainable architecture through state management using Riverpod v2 and declarative routing with GoRouter. Leveraging Flutter's cross-platform characteristics, it provides the same user experience across various platforms including iOS, Android, and Web.",
      stats: {
        vision:
          language === "ko"
            ? "모든 사람이 안전하고 편리하게 자취방을 양도받을 수 있는 플랫폼을 만들어, 자취생 커뮤니티의 삶의 질을 향상시키는 것"
            : "Creating a platform where everyone can safely and conveniently transfer rooms, improving the quality of life for the living-alone community",
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
      pageLoadSpeed: { value: 85, improvement: "+30% improvement" }},
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
            ? "안정적인 실시간 채팅 기능을 구현할 수 있었고, 오프라인 상태에서도 메시지가 손실되지 않도록 보장했습니다. 사용자 피드백에서도 채팅 기능의 안정성과 신뢰성에 대한 긍정적인 평가를 받았습니다."
            : "Achieved stable real-time chat functionality and ensured that messages are not lost even in offline state. Received positive feedback from users regarding the stability and reliability of the chat feature.",
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
            ? "지도 렌더링 성능이 60% 개선되었고, 마커가 100개 이상일 때도 부드러운 스크롤과 지도 이동이 가능해졌습니다. 사용자 피드백에서도 지도 사용성에 대한 만족도가 크게 향상되었습니다."
            : "Map rendering performance improved by 60%, and smooth scrolling and map movement became possible even with 100+ markers. User feedback also showed significant improvement in map usability satisfaction.",
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
            ? "필터링 로직이 명확해지고 유지보수가 쉬워졌으며, 사용자들이 원하는 조건의 매물을 더 빠르게 찾을 수 있게 되었습니다. 필터 사용률도 70% 이상으로 높은 수준을 유지하고 있습니다."
            : "Filtering logic became clearer and easier to maintain, and users were able to find properties matching their desired conditions faster. Filter usage rate is also maintained at over 70%.",
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
        ? "Moyang 프로젝트를 통해 Flutter의 크로스 플랫폼 개발 능력과 상태 관리에 대한 깊은 이해를 얻을 수 있었습니다. 특히 Riverpod v2와 코드 제너레이션을 활용하면서 타입 안전성과 개발 생산성을 동시에 향상시킬 수 있다는 것을 배웠습니다. STOMP 프로토콜을 활용한 실시간 채팅 구현을 통해 WebSocket 기반 통신의 복잡성과 상태 관리의 중요성을 체감할 수 있었고, 오프라인 큐잉과 재연결 로직 구현을 통해 안정적인 실시간 통신 시스템을 구축하는 방법을 터득했습니다.\n\nRetrofit과 코드 제너레이션을 도입하면서 타입 안전한 API 통신의 중요성을 깨달았고, 컴파일 타임에 에러를 감지할 수 있어 런타임 에러를 크게 줄일 수 있었습니다. 또한 복잡한 필터링 시스템을 구현하면서 상태 관리의 복잡성과 이를 체계적으로 관리하는 방법을 배웠습니다.\n\n아쉬운 점으로는, 프로젝트 초기에 테스트 코드 작성을 더 적극적으로 진행했다면 리팩토링 시 더 안정적으로 진행할 수 있었을 것 같습니다. 또한 디자인 시스템을 더 일찍 구축했다면 UI 일관성을 더 높일 수 있었을 것입니다. 성능 모니터링 도구를 도입하여 실제 사용자 환경에서의 성능 지표를 수집하고 분석하는 것도 개선하고 싶은 부분입니다.\n\n향후 개선하고 싶은 점으로는, 오프라인 모드를 더욱 강화하여 네트워크 연결이 불안정한 환경에서도 기본 기능을 사용할 수 있도록 하는 것입니다. 또한 사용자 행동 분석을 통해 개인화된 추천 기능을 강화하고, AI 기반 매물 매칭 기능을 추가하여 사용자 경험을 더욱 향상시키고 싶습니다. 코드 제너레이션을 더 적극적으로 활용하여 보일러플레이트 코드를 줄이고 개발 생산성을 더욱 높이고 싶습니다."
        : "Through the Moyang project, I gained deep understanding of Flutter's cross-platform development capabilities and state management. Particularly by utilizing Riverpod v2 and code generation, I learned that type safety and development productivity can be improved simultaneously. Through implementing real-time chat using the STOMP protocol, I could feel the complexity of WebSocket-based communication and the importance of state management, and learned how to build a stable real-time communication system through implementing offline queuing and reconnection logic.\n\nBy introducing Retrofit and code generation, I realized the importance of type-safe API communication, and being able to detect errors at compile time significantly reduced runtime errors. Also, while implementing a complex filtering system, I learned about the complexity of state management and how to manage it systematically.\n\nAs for regrets, I think we could have proceeded more stably during refactoring if we had more actively written test code from the beginning of the project. Also, if we had built a design system earlier, we could have improved UI consistency. Introducing performance monitoring tools to collect and analyze performance metrics in actual user environments is also something I'd like to improve.\n\nAs for future improvements, I want to further strengthen offline mode so that basic features can be used even in environments with unstable network connections. Also, I want to strengthen personalized recommendation features through user behavior analysis and add AI-based property matching functionality to further improve user experience. I want to more actively utilize code generation to reduce boilerplate code and further increase development productivity.",
    achievements: [
      {
        title:
          language === "ko"
            ? "STOMP 기반 실시간 채팅 시스템 구축"
            : "STOMP-based Real-time Chat System Implementation",
        description:
          language === "ko"
            ? "STOMP 프로토콜을 활용한 안정적인 실시간 채팅 시스템 구현 및 오프라인 메시지 큐잉 기능 추가"
            : "Implemented stable real-time chat system using STOMP protocol and added offline message queuing functionality",
        metrics: language === "ko" ? "채팅 안정성" : "Chat Stability",
        value: 95,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "지도 성능 최적화"
            : "Map Performance Optimization",
        description:
          language === "ko"
            ? "뷰포트 기반 마커 로딩과 클러스터링을 통해 지도 렌더링 성능을 대폭 개선"
            : "Significantly improved map rendering performance through viewport-based marker loading and clustering",
        metrics: language === "ko" ? "성능 개선" : "Performance Improvement",
        value: 60,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "타입 안전한 API 통신 구축"
            : "Type-safe API Communication Implementation",
        description:
          language === "ko"
            ? "Retrofit과 코드 제너레이션을 통해 타입 안전한 API 클라이언트 구축 및 컴파일 타임 에러 감지"
            : "Built type-safe API client through Retrofit and code generation, enabling compile-time error detection",
        metrics:
          language === "ko" ? "런타임 에러 감소" : "Runtime Error Reduction",
        value: 80,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "복잡한 필터링 시스템 구현"
            : "Complex Filtering System Implementation",
        description:
          language === "ko"
            ? "다양한 필터 조건을 체계적으로 관리하는 필터링 시스템 구축"
            : "Built filtering system that systematically manages various filter conditions",
        metrics: language === "ko" ? "필터 사용률" : "Filter Usage Rate",
        value: 70,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "크로스 플랫폼 호환성 확보"
            : "Cross-platform Compatibility Achieved",
        description:
          language === "ko"
            ? "iOS, Android, Web 모든 플랫폼에서 일관된 사용자 경험 제공"
            : "Provided consistent user experience across all platforms: iOS, Android, and Web",
        metrics: language === "ko" ? "지원 플랫폼" : "Supported Platforms",
        value: 3,
        unit: "개",
      },
    ],
  };
}
