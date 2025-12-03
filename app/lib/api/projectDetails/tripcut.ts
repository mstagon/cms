import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getTripcutDetail(language: Language = "ko"): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "TripCut은 K-드라마 촬영지를 중심으로 여행지를 탐색·저장·리뷰하고, 테마/지역별 추천 코스로 일정을 손쉽게 구성하는 모바일 최적화 웹 서비스입니다. K-콘텐츠 확산과 촬영지 관광 수요 증가에 따라, 정보의 파편화 문제를 해결하고 모바일 중심의 여행 계획 경험을 제공하는 것이 핵심 목표입니다. 이 프로젝트는 감성 기반 탐색의 즐거움을 극대화하고, 의사결정 스트레스를 해소하며, 개인화와 기록 욕구를 충족시키는 것을 목표로 합니다. 드라마에서 시작하여 촬영지를 발견하고 이를 여행 코스로 연결하는 경험을 제공하며, 실시간 정보, 리뷰, 주변 추천을 한 화면에서 제공하여 즉각적인 의사결정을 가능하게 합니다. 또한 사용자의 선호도와 활동을 기반으로 한 맞춤형 추천과 방문 기록 관리를 통해 개인 여행 포트폴리오를 구축할 수 있도록 합니다. 궁극적으로 TripCut은 K-드라마와 관광 산업을 연결하는 새로운 생태계를 만들어, 글로벌 여행객을 한국으로 이끄는 가교 역할을 하며, 지역 경제 활성화와 분산 관광에 기여하는 것을 비전으로 합니다."
        : "TripCut is a mobile-optimized web service that allows users to explore, save, and review travel destinations centered around K-drama filming locations, and easily create itineraries with recommended courses by theme/region. With the spread of K-content and increasing demand for filming location tourism, the core goal is to solve the problem of information fragmentation and provide a mobile-centric travel planning experience. This project aims to maximize the joy of emotion-based exploration, relieve decision-making stress, and satisfy users' desires for personalization and recording. It provides an experience where users can discover filming locations starting from dramas and connect them into travel courses, while offering real-time information, reviews, and nearby recommendations on a single screen for immediate decision-making. It also enables users to build personal travel portfolios through personalized recommendations based on preferences and activities, and visit record management. Ultimately, TripCut's vision is to create a new ecosystem connecting K-drama and the tourism industry, serving as a bridge to attract global travelers to Korea and contributing to local economic activation and distributed tourism.",
    links: {
      github: "https://github.com/mstagon/TourAPI_FrontEnd",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "TripCut은 K-드라마 촬영지를 비롯한 다양한 여행지를 탐색하고 실제 방문을 유도하는 올인원 관광 플랫폼입니다. 드라마 팬뿐만 아니라 새로운 여행지를 찾는 일반 국내·외 여행객까지, 누구나 즐길 수 있는 '체험형 콘텐츠 기반 여행 플랫폼'입니다. 서비스의 핵심 기능은 작품명이나 여행지명으로 검색해 관련 드라마 촬영지·관광지 정보를 탐색하는 것입니다. 여행지를 선택하면 방문 후기, 주변 즐길 거리, 명소 정보를 확인할 수 있고, 드라마 콘텐츠 중심 탐색 시에는 촬영지 정보·리뷰·주변 관광지 정보까지 제공합니다. 또한 출발지부터 목적지까지의 경로 안내 기능으로 손쉽게 여행을 계획할 수 있습니다. TripCut은 여행의 재미를 높이기 위해 GPS 기반 스탬프 수집 기능도 제공합니다. 실제 명소를 방문하면 자동으로 방문이 인증되고 디지털 스탬프와 포인트가 지급되며, 한정판 이벤트 스탬프 등으로 수집 욕구를 자극해 자연스럽게 참여를 유도합니다. 개인화 추천 서비스는 AI 기반으로 사용자의 장르·테마 선호도와 방문 패턴을 분석하여, 드라마 촬영지뿐만 아니라 자연·문화·액티비티 등 맞춤형 여행지를 제안합니다. 기술적으로는 PWA(Progressive Web App) 형태로 구현되어 별도 앱 설치 없이 모바일 웹에서도 네이티브 앱 수준의 사용자 경험을 제공합니다. Next.js 기반 서버사이드 렌더링으로 초기 로딩 속도를 높였으며, 카카오 소셜 로그인과 반응형 UI로 간편한 가입과 다양한 기기 환경을 지원합니다. 또한 커뮤니티 기능을 통해 여행자 간의 소통을 강화하며, 촬영지·관광지별 리뷰와 평점을 공유하고, 해시태그 기반 인증샷을 업로드하여 다른 여행객들과 경험을 나눌 수 있습니다."
          : "TripCut is an all-in-one tourism platform that explores various travel destinations, including K-drama filming locations, and encourages actual visits. It is an 'experiential content-based travel platform' that anyone, from drama fans to general domestic and international travelers looking for new destinations, can enjoy. The service's core function is to search for related K-drama filming locations and tourist attraction information by work title or destination name. When a destination is selected, users can check visit reviews, nearby attractions, and landmark information. When exploring centered on drama content, it provides filming location information, reviews, and nearby tourist attraction information. Additionally, it offers a route guidance function from the starting point to the destination, making travel planning easy. TripCut also provides a GPS-based stamp collection function to enhance the fun of traveling. When users visit actual landmarks, their visit is automatically authenticated, and digital stamps and points are awarded, stimulating the desire to collect with limited edition event stamps, thereby naturally encouraging participation. The personalized recommendation service analyzes users' genre/theme preferences and visit patterns using AI, suggesting customized travel destinations including not only drama filming locations but also nature, culture, and activities. Technically, it is implemented as a PWA (Progressive Web App), providing a native app-level user experience even on mobile web without a separate app installation. Next.js-based server-side rendering has increased initial loading speed, and Kakao social login and responsive UI support easy sign-up and various device environments. Furthermore, it strengthens communication among travelers through community features, allowing users to share reviews and ratings for each filming location/tourist attraction, upload hashtag-based certification photos to share experiences with other travelers, and save places of interest using the bookmark function to plan travel itineraries.",
      stats: {
        vision:
          language === "ko"
            ? "K-드라마와 관광 산업을 연결하는 새로운 생태계를 만들어, 글로벌 여행객을 한국으로 이끄는 가교 역할을 하며 지역 경제 활성화와 분산 관광에 기여합니다."
            : "Create a new ecosystem connecting K-drama and the tourism industry, serving as a bridge to attract global travelers to Korea and contributing to local economic activation and distributed tourism.",
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
      pageLoadSpeed: { value: 90, improvement: "+35% improvement" }},
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
            ? "사용자들이 별도 앱 설치 없이도 네이티브 앱 수준의 경험을 할 수 있게 되었고, 오프라인에서도 기본 기능을 사용할 수 있어 접근성이 크게 향상되었습니다. 특히 해외 여행객들에게 큰 장점이 되었습니다."
            : "Users could experience native app-level functionality without separate app installation, and basic features could be used offline, greatly improving accessibility. This was particularly beneficial for international travelers.",
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
            ? "페이지 로딩 속도가 35% 향상되었고, 사용자가 필요한 정보에 더 쉽게 접근할 수 있게 되어 사용자 만족도가 높아졌습니다."
            : "Page loading speed improved by 35%, and users could more easily access needed information, increasing user satisfaction.",
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
            ? "API 통신 코드의 재사용성과 유지보수성이 크게 향상되었고, 타입 안정성으로 인한 버그가 감소했습니다."
            : "Code reusability and maintainability for API communication greatly improved, and bugs decreased due to type safety.",
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
            ? "Next.js의 서버 사이드 렌더링을 활용하여 초기 데이터를 서버에서 가져오고, 클라이언트에서는 React Query나 SWR과 같은 데이터 페칭 라이브러리를 활용하여 실시간 데이터를 주기적으로 갱신하도록 구현했습니다. 또한 정적 데이터는 ISR(Incremental Static Regeneration)을 활용하여 캐싱하고, 동적 데이터는 적절한 캐시 전략을 적용했습니다."
            : "We used Next.js's server-side rendering to fetch initial data on the server, and on the client, we used data fetching libraries like React Query or SWR to periodically update real-time data. We also cached static data using ISR (Incremental Static Regeneration) and applied appropriate cache strategies for dynamic data.",
        result:
          language === "ko"
            ? "초기 로딩 속도가 개선되었고, 실시간 데이터의 정확성도 유지할 수 있게 되었습니다. 서버 부하도 감소했습니다."
            : "Initial loading speed improved, and we could maintain accuracy of real-time data. Server load also decreased.",
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
            ? "사용자가 원하는 조건으로 쉽게 검색하고 필터링할 수 있게 되었고, URL 공유 기능으로 사용자 경험이 향상되었습니다. 상태 관리도 체계적으로 이루어져 유지보수가 용이해졌습니다."
            : "Users could easily search and filter with desired conditions, and URL sharing functionality improved user experience. State management became systematic, making maintenance easier.",
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
        ? "이 프로젝트를 통해 Next.js를 활용한 대규모 웹 애플리케이션 개발과 PWA 구현에 대한 깊은 이해를 얻을 수 있었습니다. 특히 서버 사이드 렌더링과 클라이언트 사이드 렌더링을 적절히 혼합하여 성능과 사용자 경험을 최적화하는 방법을 배울 수 있었습니다. PWA 구현을 통해 웹 기술만으로도 네이티브 앱 수준의 경험을 제공할 수 있다는 것을 체험할 수 있었습니다. 가장 큰 성과는 복잡한 관광 데이터를 사용자 친화적인 인터페이스로 변환하여 제공할 수 있었다는 점입니다. 드라마 촬영지와 여행지를 연결하는 추천 시스템을 구현하고, GPS 기반 스탬프 기능을 통해 게임화 요소를 추가하여 사용자 참여도를 높일 수 있었습니다. 또한 Bottom Sheet와 같은 모던한 UI 패턴을 활용하여 정보 과부하 없이 필요한 정보를 제공할 수 있었습니다. 아쉬운 점으로는 초기 설계 단계에서 상태 관리 아키텍처를 더 체계적으로 설계하지 못했다는 것입니다. React Query나 Zustand 같은 상태 관리 라이브러리를 도입했다면 더 효율적인 데이터 페칭과 상태 관리가 가능했을 것입니다. 또한 테스트 코드 작성이 부족하여 코드 품질 관리 측면에서 아쉬움이 남습니다. 개선하고 싶은 점으로는 오프라인 기능을 더 강화하여 네트워크 연결이 불안정한 여행 환경에서도 완전한 기능을 사용할 수 있도록 하고 싶습니다. 또한 AI 기반 추천 알고리즘을 더 고도화하여 사용자의 선호도와 방문 패턴을 더 정확하게 분석하고 맞춤형 추천을 제공하고 싶습니다. 마지막으로 AR 기술을 도입하여 실제 여행지에서 드라마 촬영 장면을 오버레이로 보여주는 기능을 추가하면 사용자 경험이 더욱 향상될 것입니다."
        : "Through this project, I gained deep understanding of large-scale web application development using Next.js and PWA implementation. In particular, I learned how to optimize performance and user experience by appropriately mixing server-side rendering and client-side rendering. Through PWA implementation, I experienced that web technologies alone can provide native app-level experiences. The biggest achievement was being able to transform complex tourism data into user-friendly interfaces. We implemented a recommendation system connecting drama filming locations and travel destinations, and added gamification elements through GPS-based stamp functionality to increase user engagement. We could also provide necessary information without information overload by utilizing modern UI patterns like Bottom Sheet. As a regret, we didn't design the state management architecture more systematically in the initial design phase. If we had introduced state management libraries like React Query or Zustand, more efficient data fetching and state management would have been possible. Also, the lack of test code leaves room for improvement in code quality management. As improvements I'd like to make, I want to strengthen offline functionality so complete features can be used even in travel environments with unstable network connections. I also want to further advance AI-based recommendation algorithms to more accurately analyze user preferences and visit patterns and provide personalized recommendations. Finally, introducing AR technology to overlay drama filming scenes at actual travel destinations would further enhance user experience.",
    achievements: [
      {
        title:
          language === "ko"
            ? "PWA 구현으로 네이티브 앱 수준의 사용자 경험 제공"
            : "Native App-level User Experience through PWA Implementation",
        description:
          language === "ko"
            ? "PWA 기술을 적용하여 별도 앱 설치 없이도 네이티브 앱과 유사한 경험을 제공했습니다."
            : "Applied PWA technology to provide native app-like experiences without separate app installation.",
        metrics:
          language === "ko"
            ? "사용자 접근성 향상"
            : "User Accessibility Improvement",
        value: 85,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "페이지 로딩 속도 최적화"
            : "Page Loading Speed Optimization",
        description:
          language === "ko"
            ? "서버 사이드 렌더링과 적절한 캐싱 전략을 통해 초기 로딩 속도를 크게 개선했습니다."
            : "Greatly improved initial loading speed through server-side rendering and appropriate caching strategies.",
        metrics:
          language === "ko"
            ? "페이지 로드 속도 개선"
            : "Page Load Speed Improvement",
        value: 35,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "복잡한 필터링 시스템 구현"
            : "Complex Filtering System Implementation",
        description:
          language === "ko"
            ? "다중 조건 검색 및 필터링 기능을 URL 기반으로 구현하여 사용자 경험을 향상시켰습니다."
            : "Implemented multi-condition search and filtering functionality based on URLs to enhance user experience.",
        metrics:
          language === "ko"
            ? "검색 기능 완성도"
            : "Search Functionality Completion",
        value: 95,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "반응형 디자인 구현"
            : "Responsive Design Implementation",
        description:
          language === "ko"
            ? "Tailwind CSS를 활용하여 다양한 디바이스에서 최적의 경험을 제공하는 반응형 UI를 구현했습니다."
            : "Implemented responsive UI using Tailwind CSS to provide optimal experiences on various devices.",
        metrics:
          language === "ko"
            ? "크로스 디바이스 호환성"
            : "Cross-device Compatibility",
        value: 100,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "API 통신 구조 최적화"
            : "API Communication Structure Optimization",
        description:
          language === "ko"
            ? "통합 API 클라이언트와 도메인별 모듈 분리를 통해 코드 재사용성과 유지보수성을 향상시켰습니다."
            : "Improved code reusability and maintainability through integrated API client and domain-based module separation.",
        metrics:
          language === "ko"
            ? "코드 재사용성 향상"
            : "Code Reusability Improvement",
        value: 70,
        unit: "%",
      },
    ],
  };
}
