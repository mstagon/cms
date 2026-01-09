import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getTripcutDetail(language: Language = "ko"): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "K-드라마 촬영지를 중심으로 여행지를 탐색/저장/리뷰할 수 있는 모바일 최적화 웹(PWA) 서비스를 만들었습니다. 검색/필터, 상세 정보, 추천 코스, 마이페이지(저장/리뷰/기록)까지 주요 화면 흐름을 구현했습니다."
        : "TripCut is a mobile-optimized web (PWA) service for exploring/saving/reviewing travel spots centered around K-drama filming locations. It implements core flows including search/filters, detail pages, recommended routes, and a mypage (saved/reviews/history).",
    links: {
      github: "https://github.com/mstagon/TourAPI_FrontEnd",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "Next.js 기반의 모바일 최적화 웹(PWA) 서비스입니다.\n\n- 탐색/검색: 작품명/여행지명 검색, 태그/지역 필터\n- 상세 페이지: 기본 정보/리뷰/주변 정보 등 섹션 단위 구성\n- 코스/저장: 추천 코스 + 북마크\n- 인증: 카카오 소셜 로그인\n- 통신: FastAPI 중개 서버 및 Spring Boot API 서버와 연동\n\n운영 관점\n- 여러 백엔드와 통신하는 구조에서, 도메인별 API 모듈 분리 + 공통 인터셉터로 요청/인증 헤더 처리를 한 곳에서 관리했습니다.\n- 초기 진입(SSR)과 상세 데이터 로딩을 분리해, 네트워크 지연 시에도 화면이 단계적으로 채워지도록 구성했습니다."
          : "A mobile-optimized web (PWA) built with Next.js.\n\n- Explore/Search: keyword search + tag/region filters.\n- Detail pages: structured sections (info, reviews, nearby).\n- Routes/Saved: recommended routes and bookmarking.\n- Auth: Kakao social login.\n- API: integrates with a FastAPI relay and a Spring Boot API.",
      stats: {
        vision:
          language === "ko"
            ? "모바일 웹에서 탐색 → 저장 → 상세 확인 → 코스 구성으로 이어지는 흐름을 만들었습니다."
            : "Focused on a mobile flow: explore → save → view details → build a route.",
      },
    },
    role: {
      title: language === "ko" ? "Frontend Developer" : "Frontend Developer",
      responsibilities:
        language === "ko"
          ? [
              "Next.js 기반 PWA 웹 애플리케이션 개발 및 최적화",
              "드라마 목록/상세 페이지 및 여행지 탐색 페이지 개발",
              "검색 기능 및 필터링 시스템 구현 (태그 기반 필터, 지역별 필터)",
              "여행지 상세 페이지 개발 (히어로 이미지, 실시간 통계, 리뷰, 즐길거리, 주변 추천)",
              "추천 경로 페이지 개발 (테마/지역 필터, 코스 카드, 북마크 기능)",
              "마이페이지 개발 (저장한 장소, 내 리뷰, 방문 기록, 활동 통계)",
              "카카오 소셜 로그인 연동 및 인증 시스템 구현",
              "FastAPI 중개 서버 및 Spring Boot API 서버와의 통신 구현",
              "Tailwind CSS를 활용한 반응형 UI 디자인 및 구현",
              "Bottom Sheet 기반 단계적 정보 표시 컴포넌트 개발",
            ]
          : [
              "Next.js-based PWA web application development and optimization",
              "Drama list/detail page and travel destination exploration page development",
              "Search functionality and filtering system implementation (tag-based filters, regional filters)",
              "Travel destination detail page development (hero image, real-time statistics, reviews, attractions, nearby recommendations)",
              "Recommended route page development (theme/region filters, course cards, bookmark functionality)",
              "My Page development (saved locations, my reviews, visit history, activity statistics)",
              "Kakao social login integration and authentication system implementation",
              "Communication implementation with FastAPI intermediary server and Spring Boot API server",
              "Responsive UI design and implementation using Tailwind CSS",
              "Bottom Sheet-based step-by-step information display component development",
            ],
    },
    timeframe: "2025.01 - 2025.03",
    platform: "Web (PWA - Mobile Optimized)",
    type: "Web Application (Tourism Platform)",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PWA",
      "Axios",
      "FastAPI",
      "Spring Boot",
      "Kakao Login API",
      "TourAPI",
    ],
    performance: {
      pageLoadSpeed: { value: 90 },
    },
    challenges: [
      {
        title:
          language === "ko"
            ? "PWA 구현을 통한 네이티브 앱 수준의 사용자 경험 제공"
            : "Providing Native App-level User Experience through PWA Implementation",
        asIs:
          language === "ko"
            ? "웹 애플리케이션으로 개발해야 했지만, 사용자들은 네이티브 앱과 같은 부드러운 경험과 오프라인 접근, 홈 화면 추가 기능을 기대했습니다. 또한 별도 앱 설치 없이 모바일에서 앱처럼 사용할 수 있는 방법이 필요했습니다."
            : "We needed to develop a web application, but users expected smooth experiences like native apps, offline access, and home screen addition functionality. We also needed a way to use it like an app on mobile without separate app installation.",
        toBe:
          language === "ko"
            ? "Next.js의 next-pwa 플러그인을 활용하여 PWA(Progressive Web App)를 구현했습니다. Service Worker를 통해 오프라인 접근을 지원하고, manifest.json을 설정하여 홈 화면 추가 기능을 제공했습니다. 또한 앱 아이콘과 스플래시 스크린을 구성하여 네이티브 앱과 유사한 경험을 제공하도록 했습니다."
            : "We implemented PWA (Progressive Web App) using Next.js's next-pwa plugin. We supported offline access through Service Worker and provided home screen addition functionality by configuring manifest.json. We also configured app icons and splash screens to provide an experience similar to native apps.",
        result:
          language === "ko"
            ? "PWA 형태로 홈 화면 추가/기본 캐싱을 적용해, 모바일에서 설치 없이 “앱처럼” 접근할 수 있는 형태로 정리했습니다."
            : "Implemented a PWA setup (add-to-home-screen + basic caching) so the service can be accessed in an app-like way without installation.",
      },
      {
        title:
          language === "ko"
            ? "복잡한 여행지 상세 정보의 단계적 표시"
            : "Step-by-step Display of Complex Travel Destination Information",
        asIs:
          language === "ko"
            ? "여행지 상세 페이지에 표시해야 할 정보가 많아(히어로 이미지, 실시간 통계, 리뷰, 즐길거리, 주변 추천 등) 한 화면에 모두 표시하면 정보 과부하가 발생하고 사용자 경험이 저하되었습니다."
            : "There was too much information to display on the travel destination detail page (hero image, real-time statistics, reviews, attractions, nearby recommendations, etc.), and displaying everything on one screen caused information overload and degraded user experience.",
        toBe:
          language === "ko"
            ? "Bottom Sheet 컴포넌트를 개발하여 정보를 단계적으로 표시하도록 구현했습니다. 초기에는 히어로 이미지와 핵심 정보만 표시하고, 사용자가 스크롤하거나 Bottom Sheet를 열면 상세 정보(리뷰, 즐길거리, 주변 추천)를 점진적으로 표시하도록 했습니다. 이를 통해 정보 접근성은 유지하면서도 초기 로딩 속도와 사용자 경험을 개선했습니다."
            : "We developed a Bottom Sheet component to display information step by step. Initially, only the hero image and core information are displayed, and when users scroll or open the Bottom Sheet, detailed information (reviews, attractions, nearby recommendations) is displayed progressively. This maintained information accessibility while improving initial loading speed and user experience.",
        result:
          language === "ko"
            ? "정보를 한 번에 다 펼치지 않고, 단계적으로 펼쳐보는 구조로 상세 화면을 정리했습니다."
            : "Reduced information overload by revealing details progressively on the detail page.",
      },
      {
        title:
          language === "ko"
            ? "다중 API 서버와의 효율적인 통신 구조"
            : "Efficient Communication Structure with Multiple API Servers",
        asIs:
          language === "ko"
            ? "FastAPI 중개 서버와 Spring Boot API 서버 두 개의 백엔드 서버와 통신해야 했고, 각 API의 엔드포인트와 응답 형식이 달라 통합 관리가 어려웠습니다."
            : "We needed to communicate with two backend servers (FastAPI intermediary server and Spring Boot API server), and managing them was difficult because each API's endpoints and response formats differed.",
        toBe:
          language === "ko"
            ? "Axios를 기반으로 한 통합 API 클라이언트를 구축하고, 각 도메인별로 API 모듈을 분리했습니다(drama, location, auth, stamp 등). 환경 변수를 통해 API 베이스 URL을 관리하고, 인터셉터를 활용하여 공통 헤더(인증 토큰 등)를 자동으로 추가하도록 구현했습니다. 또한 TypeScript 타입을 정의하여 API 응답의 타입 안정성을 확보했습니다."
            : "We built an integrated API client based on Axios and separated API modules by domain (drama, location, auth, stamp, etc.). We managed API base URLs through environment variables and used interceptors to automatically add common headers (authentication tokens, etc.). We also defined TypeScript types to ensure type safety for API responses.",
        result:
          language === "ko"
            ? "도메인별 모듈 분리 + 공통 인터셉터로 API 통신 코드를 한 곳에서 관리할 수 있게 했습니다."
            : "Centralized API communication via domain modules and common interceptors.",
      },
      {
        title:
          language === "ko"
            ? "실시간 데이터 표시 및 캐싱 전략"
            : "Real-time Data Display and Caching Strategy",
        asIs:
          language === "ko"
            ? "여행지의 실시간 통계(방문자 수, 혼잡도 등)와 리뷰 정보를 표시해야 했지만, 매번 API를 호출하면 성능 저하와 서버 부하가 발생할 수 있었습니다."
            : "We needed to display real-time statistics (visitor count, congestion, etc.) and review information for travel destinations, but calling the API every time could cause performance degradation and server load.",
        toBe:
          language === "ko"
            ? "초기 화면에서 필요한 데이터는 서버에서 먼저 내려주고(SSR), 이후 화면 내에서 필요한 데이터만 추가로 요청하도록 분리했습니다. 잦은 재요청이 필요한 데이터는 캐시/갱신 전략을 고려해 호출 빈도를 조절했습니다."
            : "Fetched initial data on the server (SSR), then loaded additional data on demand in the client. For frequently refreshed data, we tuned request frequency with caching/refresh strategies.",
        result:
          language === "ko"
            ? "초기 진입 시 필요한 정보는 빠르게 표시하고, 이후 데이터는 점진적으로 로드하는 형태로 구성했습니다."
            : "Displayed essential content early and loaded the rest progressively.",
      },
      {
        title:
          language === "ko"
            ? "복잡한 필터링 및 검색 기능 구현"
            : "Complex Filtering and Search Functionality Implementation",
        asIs:
          language === "ko"
            ? "사용자가 드라마, 여행지, 지역, 태그 등 다양한 조건으로 검색하고 필터링해야 했지만, 여러 필터를 조합할 때의 상태 관리와 URL 동기화가 복잡했습니다."
            : "Users needed to search and filter by various conditions (drama, travel destination, region, tags, etc.), but state management and URL synchronization when combining multiple filters were complex.",
        toBe:
          language === "ko"
            ? "Next.js의 URL SearchParams를 활용하여 필터 상태를 URL 쿼리 파라미터와 동기화했습니다. 사용자가 필터를 변경하면 URL이 업데이트되고, URL을 공유하거나 북마크할 수 있도록 했습니다. 또한 태그 필터는 Chip 컴포넌트로 구현하여 직관적인 UI를 제공하고, 다중 선택이 가능하도록 했습니다."
            : "We synchronized filter state with URL query parameters using Next.js's URL SearchParams. When users change filters, the URL updates, enabling URL sharing and bookmarking. We also implemented tag filters as Chip components to provide intuitive UI and enable multiple selections.",
        result:
          language === "ko"
            ? "필터 상태를 URL과 동기화해 공유/북마크 가능한 검색 경험을 만들었습니다."
            : "Synced filters to URL params to enable shareable/bookmarkable searches.",
      },
    ],
    architecture: {
      description:
        language === "ko"
          ? "TripCut 프론트엔드는 Next.js 15의 App Router를 기반으로 한 서버 사이드 렌더링 아키텍처를 채택했습니다. 페이지는 서버 컴포넌트로 구성되어 초기 렌더링 시 서버에서 데이터를 가져와 HTML을 생성하며, 클라이언트 컴포넌트는 인터랙티브한 UI 요소에만 사용됩니다. API 통신 구조는 계층화되어 있습니다. 최상위에는 통합 API 클라이언트가 있으며, 각 도메인별(drama, location, auth 등)로 API 모듈이 분리되어 있습니다. FastAPI 중개 서버는 프론트엔드와 Spring Boot API 서버 사이의 중간 계층 역할을 하며, 데이터 변환과 캐싱을 담당합니다. Spring Boot API 서버는 한국관광공사 TourAPI와 연동하여 실제 관광 데이터를 제공합니다. 상태 관리 측면에서는 서버 상태는 Next.js의 서버 컴포넌트와 클라이언트 데이터 페칭을 통해 관리하고, 클라이언트 상태는 React의 useState와 URL SearchParams를 활용합니다. 인증 상태는 Context API를 통해 전역으로 관리하며, 카카오 로그인 토큰은 Secure Storage에 저장합니다. PWA 기능은 next-pwa 플러그인을 통해 구현되었으며, Service Worker가 자동으로 생성되어 오프라인 캐싱과 백그라운드 동기화를 담당합니다. Tailwind CSS를 활용한 유틸리티 기반 스타일링으로 일관된 디자인 시스템을 구축했으며, 반응형 디자인으로 다양한 디바이스에서 최적의 경험을 제공합니다."
          : "The TripCut frontend adopts a server-side rendering architecture based on Next.js 15's App Router. Pages are composed of server components that fetch data on the server during initial rendering to generate HTML, while client components are used only for interactive UI elements. The API communication structure is layered. At the top level, there is an integrated API client, and API modules are separated by domain (drama, location, auth, etc.). The FastAPI intermediary server acts as a middle layer between the frontend and Spring Boot API server, handling data transformation and caching. The Spring Boot API server integrates with Korea Tourism Organization's TourAPI to provide actual tourism data. For state management, server state is managed through Next.js's server components and client data fetching, while client state is managed using React's useState and URL SearchParams. Authentication state is managed globally through Context API, and Kakao login tokens are stored in Secure Storage. PWA functionality is implemented through the next-pwa plugin, and Service Worker is automatically generated to handle offline caching and background synchronization. We built a consistent design system using Tailwind CSS's utility-based styling and provide optimal experiences on various devices through responsive design.",
      diagrams: [
        {
          title:
            language === "ko"
              ? "시스템 아키텍처 다이어그램"
              : "System Architecture Diagram",
          image: "",
          alt:
            language === "ko"
              ? "TripCut 애플리케이션 시스템 아키텍처 구조도"
              : "TripCut application system architecture diagram",
        },
      ],
    },
    retrospective:
      language === "ko"
        ? "모바일 웹에서 검색/필터 → 상세 → 저장/코스로 이어지는 사용자 흐름을 만들면서, Next.js의 SSR/CSR 경계를 어디에 둘지 고민한 프로젝트였습니다.\n과장된 지표 대신, 실제로 구현한 화면/기능과 데이터 흐름을 기준으로 정리하는 방식이 더 설득력이 있다는 것도 배웠습니다."
        : "This project focused on a mobile flow (search/filters → detail → save/routes) and helped me reason about where to draw SSR/CSR boundaries in Next.js.\nI also learned it’s more credible to describe concrete shipped features and data flow rather than unverified metrics.",
    achievements: [
      {
        title:
          language === "ko"
            ? "PWA 구현으로 네이티브 앱 수준의 사용자 경험 제공"
            : "Native App-level User Experience through PWA Implementation",
        description:
          language === "ko"
            ? "PWA 설정(next-pwa, manifest, service worker)을 적용했습니다."
            : "Implemented PWA setup (next-pwa, manifest, service worker).",
      },
      {
        title:
          language === "ko"
            ? "페이지 로딩 속도 최적화"
            : "Page Loading Speed Optimization",
        description:
          language === "ko"
            ? "초기 진입 시 필요한 데이터는 SSR로 처리하고, 상세 데이터는 점진적으로 로드하도록 구성했습니다."
            : "Used SSR for initial content and progressively loaded detail data.",
      },
      {
        title:
          language === "ko"
            ? "복잡한 필터링 시스템 구현"
            : "Complex Filtering System Implementation",
        description:
          language === "ko"
            ? "다중 조건 검색/필터를 URL 파라미터와 동기화했습니다."
            : "Synced multi-condition filters with URL parameters.",
      },
      {
        title:
          language === "ko"
            ? "반응형 디자인 구현"
            : "Responsive Design Implementation",
        description:
          language === "ko"
            ? "Tailwind CSS 기반 반응형 UI를 구성했습니다."
            : "Built a responsive UI with Tailwind CSS.",
      },
      {
        title:
          language === "ko"
            ? "API 통신 구조 최적화"
            : "API Communication Structure Optimization",
        description:
          language === "ko"
            ? "통합 API 클라이언트 + 도메인 모듈 분리로 통신 코드를 정리했습니다."
            : "Organized API calls via an integrated client and domain modules.",
      },
    ],
  };
}
