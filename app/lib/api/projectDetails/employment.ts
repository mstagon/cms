import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getEmploymentDetail(language: Language = "ko"): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "취업 준비 과정에서 필요한 기능(채용 공고 검색/일정 정리/자소서 첨삭)을 한 화면 흐름으로 묶은 웹 앱을 만들었습니다. React로 UI를 구성하고, Flask API에서 키워드 검색과 OpenAI API 호출을 처리했습니다."
        : "A web app that bundles job-post search, schedule tracking, and resume editing into one flow. UI is built with React; the Flask API handles keyword-based search and OpenAI API calls.",
    links: {
      github: "https://github.com/mstagon/employment",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "React 기반 SPA입니다.\n\n- 채팅 UI: 사용자 메시지를 먼저 렌더링하고, API 응답을 비동기로 붙이는 형태로 구성\n- 채용 공고 검색: 사용자 입력에서 키워드를 추출해 기업/공고 정보를 조회\n- 캘린더: FullCalendar로 일정 관리 UI 구성(이벤트 클릭/상세 링크)\n- 자소서 첨삭: OpenAI GPT-3.5 API 호출(프롬프트 구성/temperature 설정 등)\n- 백엔드: Flask + Flask-RESTX로 API 구성 및 문서화\n\n‘AI가 ~한다’ 같은 표현은 줄이고, 실제로 만든 기능과 호출 흐름만 남겼습니다."
          : "A React-based SPA.\n\n- Chat UI: optimistic rendering + async API responses\n- Job search: keyword extraction and lookup\n- Calendar: FullCalendar-based schedule UI\n- Resume editing: OpenAI GPT-3.5 API calls (prompt/temperature settings)\n- Backend: Flask + Flask-RESTX with API docs",
      stats: {
        vision:
          language === "ko"
            ? "검색/캘린더/첨삭을 한 서비스 흐름으로 묶어 관리 부담을 줄이는 데 초점을 맞췄습니다."
            : "Focused on reducing management overhead by connecting search/calendar/editing in one flow.",
      },
    },
    role: {
      title: language === "ko" ? "풀스택 개발자" : "Full-stack Developer",
      responsibilities:
        language === "ko"
          ? [
              "React 기반 프론트엔드 개발 및 UI/UX 구현",
              "Flask 기반 백엔드 API 개발 및 OpenAI GPT 통합",
              "챗봇 인터페이스 및 실시간 채용 정보 검색 기능 개발",
              "FullCalendar를 활용한 채용 일정 캘린더 기능 구현",
              "키워드 기반 채용 공고 검색 시스템 설계 및 구현",
              "Flask-RESTX를 활용한 API 문서화",
            ]
          : [
              "Developed React-based frontend and implemented UI/UX",
              "Developed Flask-based backend API and integrated OpenAI GPT",
              "Developed chatbot interface and real-time recruitment information search functionality",
              "Implemented recruitment schedule calendar feature using FullCalendar",
              "Designed and implemented keyword-based job posting search system",
              "API documentation using Flask-RESTX",
            ],
    },
    timeframe: "2023.09 - 2023.10",
    platform: "Web",
    type: "SaaS / Career Platform",
    techStack: [
      "React",
      "JavaScript",
      "React Router",
      "FullCalendar",
      "Axios",
      "SCSS",
      "Flask",
      "Python",
      "Flask-RESTX",
      "OpenAI GPT-3.5",
      "BeautifulSoup",
      "Pandas",
      "Flask-CORS",
    ],
    performance: {
      pageLoadSpeed: { value: 78 },
    },
    challenges: [
      {
        title:
          language === "ko"
            ? "OpenAI GPT API를 활용한 자소서 첨삭 기능 구현"
            : "Implementing Resume Editing Feature Using OpenAI GPT API",
        asIs:
          language === "ko"
            ? "초기에는 단순히 사용자 입력을 OpenAI API에 전달하는 방식으로 구현했지만, 자소서 첨삭에 특화된 프롬프트가 없어 일반적인 텍스트 생성 결과만 받을 수 있었습니다. 또한 첨삭 결과의 품질이 일관되지 않고, 사용자의 선호하는 수정 방향을 반영하지 못하는 문제가 있었습니다."
            : "Initially implemented by simply passing user input to the OpenAI API, but without prompts specialized for resume editing, only general text generation results could be obtained. Also, the quality of editing results was inconsistent, and there was a problem of not reflecting the user's preferred revision direction.",
        toBe:
          language === "ko"
            ? "시스템 프롬프트를 '자소서 첨삭 전문가'로 설정하고, 사용자 역할 프롬프트를 통해 자소서 내용을 전달하도록 개선했습니다. 프롬프트에 '강점과 약점 분석', '전체 흐름 개선', '사용자 선호 방식에 맞춘 수정' 등의 지시사항을 포함하여 더 정확하고 유용한 첨삭 결과를 얻을 수 있도록 했습니다. 또한 temperature를 0으로 설정하여 일관된 결과를 생성하도록 최적화했습니다."
            : "Improved by setting the system prompt to 'resume editing expert' and passing resume content through user role prompts. Included instructions in the prompt such as 'strength and weakness analysis', 'overall flow improvement', and 'revision according to user's preferred method' to obtain more accurate and useful editing results. Also optimized to generate consistent results by setting temperature to 0.",
        result:
          language === "ko"
            ? "프롬프트 구조를 고정하고 파라미터를 조절해 응답 형태를 일정하게 만들었습니다."
            : "Stabilized output by structuring prompts and tuning parameters.",
      },
      {
        title:
          language === "ko"
            ? "키워드 기반 채용 공고 검색 및 캘린더 자동 등록"
            : "Keyword-based Job Posting Search and Automatic Calendar Registration",
        asIs:
          language === "ko"
            ? "사용자가 자연어로 입력한 메시지에서 기업명을 추출하고 해당 기업의 채용 정보를 찾는 것이 어려웠습니다. 초기에는 정확한 기업명을 입력해야만 검색이 가능했고, 다양한 표현 방식(예: '네이버', '네이버커넥트재단', '네이버 커넥트 재단' 등)을 인식하지 못했습니다."
            : "It was difficult to extract company names from user input in natural language and find the company's recruitment information. Initially, searches were only possible with exact company names, and various expression methods (e.g., 'Naver', 'Naver Connect Foundation', 'Naver Connect Foundation', etc.) were not recognized.",
        toBe:
          language === "ko"
            ? "키워드 매칭 시스템을 구현하여 사용자 입력에서 여러 형태의 기업명을 인식할 수 있도록 했습니다. 키워드 사전에 다양한 기업명 변형을 등록하고, 사용자 입력과 부분 매칭을 통해 가장 먼저 매칭된 키워드를 찾아 해당 기업의 채용 정보를 반환하도록 구현했습니다. 또한 채용 정보를 캘린더 이벤트 형식으로 자동 변환하여 FullCalendar에 바로 등록할 수 있도록 했습니다."
            : "Implemented a keyword matching system to recognize various forms of company names from user input. Registered various company name variations in a keyword dictionary and implemented to find the first matched keyword through partial matching with user input and return the company's recruitment information. Also automatically converted recruitment information to calendar event format so it can be immediately registered to FullCalendar.",
        result:
          language === "ko"
            ? "여러 표현을 부분 매칭으로 처리하고, 검색 결과를 캘린더 이벤트 형태로 변환해 등록했습니다."
            : "Handled name variations via partial matching and converted results into calendar events.",
      },
      {
        title:
          language === "ko"
            ? "실시간 챗봇 인터페이스 구현"
            : "Implementing Real-time Chatbot Interface",
        asIs:
          language === "ko"
            ? "챗봇 인터페이스를 구현하는 과정에서 메시지 전송과 수신의 비동기 처리가 복잡했고, API 응답 대기 중 사용자 경험이 좋지 않았습니다. 또한 채팅 히스토리 관리와 스크롤 위치 조정 등 UI/UX 개선이 필요했습니다."
            : "When implementing the chatbot interface, asynchronous processing of message sending and receiving was complex, and user experience was poor while waiting for API responses. Also, UI/UX improvements such as chat history management and scroll position adjustment were needed.",
        toBe:
          language === "ko"
            ? "React의 useState를 활용하여 채팅 히스토리를 상태로 관리하고, 사용자 메시지를 즉시 화면에 표시한 후 API 응답을 비동기로 처리하도록 구현했습니다. 로딩 상태를 표시하여 사용자에게 응답 대기 중임을 알리고, API 응답이 도착하면 채팅 히스토리에 추가하도록 했습니다. 또한 스크롤을 자동으로 하단으로 이동시켜 최신 메시지를 항상 볼 수 있도록 했습니다."
            : "Implemented to manage chat history as state using React's useState, immediately display user messages on screen, and then process API responses asynchronously. Display loading state to inform users that a response is being waited for, and add to chat history when API response arrives. Also automatically scroll to bottom so latest messages are always visible.",
        result:
          language === "ko"
            ? "응답 대기 상태 표시와 자동 스크롤 등 기본 UX를 정리했습니다."
            : "Added basic UX such as loading state and auto-scroll.",
      },
      {
        title:
          language === "ko"
            ? "FullCalendar를 활용한 채용 일정 관리"
            : "Recruitment Schedule Management Using FullCalendar",
        asIs:
          language === "ko"
            ? "채용 일정을 관리하기 위해 캘린더 기능이 필요했지만, 직접 구현하기에는 복잡도가 높았습니다. 또한 챗봇을 통해 등록된 채용 일정을 캘린더에 동적으로 추가하는 기능을 구현해야 했습니다."
            : "Calendar functionality was needed to manage recruitment schedules, but implementing it directly was highly complex. Also, functionality to dynamically add recruitment schedules registered through the chatbot to the calendar needed to be implemented.",
        toBe:
          language === "ko"
            ? "FullCalendar 라이브러리를 도입하여 캘린더 기능을 구현했습니다. dayGridPlugin, timeGridPlugin, interactionPlugin을 활용하여 월간 뷰와 주간 뷰를 제공하고, 이벤트 클릭 시 상세 정보를 표시하는 기능을 구현했습니다. 챗봇을 통해 받은 채용 정보를 이벤트 객체로 변환하여 state에 추가하고, FullCalendar가 자동으로 렌더링하도록 구현했습니다."
            : "Introduced FullCalendar library to implement calendar functionality. Used dayGridPlugin, timeGridPlugin, and interactionPlugin to provide monthly and weekly views, and implemented functionality to display detailed information when events are clicked. Converted recruitment information received through chatbot to event objects and added to state, implementing so FullCalendar automatically renders them.",
        result:
          language === "ko"
            ? "검색 결과를 이벤트로 만들어 FullCalendar에 바로 반영되도록 구성했습니다."
            : "Converted search results into events rendered by FullCalendar.",
      },
      {
        title:
          language === "ko"
            ? "Flask-RESTX를 활용한 API 문서화"
            : "API Documentation Using Flask-RESTX",
        asIs:
          language === "ko"
            ? "백엔드 API를 개발하면서 API 엔드포인트와 파라미터에 대한 문서화가 필요했지만, 수동으로 문서를 작성하는 것은 시간이 많이 걸리고 유지보수가 어려웠습니다."
            : "While developing backend APIs, documentation of API endpoints and parameters was needed, but manually writing documentation was time-consuming and difficult to maintain.",
        toBe:
          language === "ko"
            ? "Flask-RESTX를 도입하여 API 문서를 자동으로 생성하도록 구현했습니다. 각 API 엔드포인트에 @Chat.doc 데코레이터를 추가하여 파라미터 설명을 작성하고, @Chat.response 데코레이터로 응답 코드와 설명을 정의했습니다. Swagger UI를 통해 자동으로 생성된 API 문서를 확인할 수 있도록 했습니다."
            : "Introduced Flask-RESTX to automatically generate API documentation. Added @Chat.doc decorator to each API endpoint to write parameter descriptions, and defined response codes and descriptions with @Chat.response decorator. Enabled checking automatically generated API documentation through Swagger UI.",
        result:
          language === "ko"
            ? "Swagger UI 기반으로 API 문서를 함께 확인할 수 있게 했습니다."
            : "Exposed API docs via Swagger UI.",
      },
    ],
    architecture: {
      description:
        language === "ko"
          ? "취업의신 애플리케이션은 클라이언트-서버 아키텍처로 구성되어 있습니다. 프론트엔드는 React 기반의 SPA(Single Page Application)로 구현되었으며, React Router를 통해 라우팅을 관리합니다. 주요 페이지는 채팅, 캘린더, 마이페이지로 구성되어 있으며, Sidebar 컴포넌트를 통해 네비게이션을 제공합니다.\n\n백엔드는 Flask 기반의 RESTful API 서버로 구현되었으며, Flask-RESTX를 활용하여 API 문서화를 자동화했습니다. OpenAI GPT API와 통신하여 자소서 첨삭 기능을 제공하고, 키워드 기반 채용 공고 검색 시스템을 통해 사용자 입력에서 기업명을 추출하여 해당 기업의 채용 정보를 반환합니다. CORS를 활성화하여 프론트엔드와의 크로스 오리진 통신을 지원합니다.\n\n프론트엔드와 백엔드 간의 통신은 Axios를 통해 이루어지며, 비동기 방식으로 API를 호출합니다. 챗봇 인터페이스에서는 사용자 메시지를 즉시 화면에 표시한 후 API 응답을 받아 채팅 히스토리에 추가하는 방식으로 구현되어 실시간 대화 경험을 제공합니다."
          : "The Employment God application is structured as a client-server architecture. The frontend is implemented as a React-based SPA (Single Page Application), managing routing through React Router. Main pages consist of chat, calendar, and mypage, providing navigation through the Sidebar component.\n\nThe backend is implemented as a Flask-based RESTful API server and uses Flask-RESTX to automate API documentation. Communicates with OpenAI GPT API to provide resume editing functionality, and through a keyword-based job posting search system, extracts company names from user input and returns the company's recruitment information. CORS is enabled to support cross-origin communication with the frontend.\n\nCommunication between frontend and backend occurs through Axios, calling APIs asynchronously. In the chatbot interface, user messages are immediately displayed on screen, then API responses are received and added to chat history, providing a real-time conversation experience.",
      diagrams: [
        {
          title:
            language === "ko"
              ? "시스템 아키텍처 다이어그램"
              : "System Architecture Diagram",
          image: "",
          alt:
            language === "ko"
              ? "취업의신 애플리케이션의 전체 아키텍처를 보여주는 다이어그램. React 프론트엔드, Flask 백엔드, OpenAI GPT API 간의 관계를 시각화"
              : "Diagram showing the overall architecture of the Employment God application, visualizing the relationships between React frontend, Flask backend, and OpenAI GPT API",
        },
        {
          title:
            language === "ko"
              ? "챗봇 플로우 다이어그램"
              : "Chatbot Flow Diagram",
          image: "",
          alt:
            language === "ko"
              ? "사용자 입력부터 채용 정보 검색 및 캘린더 등록까지의 챗봇 플로우를 보여주는 다이어그램"
              : "Diagram showing the chatbot flow from user input to recruitment information search and calendar registration",
        },
      ],
    },
    retrospective:
      language === "ko"
        ? "OpenAI API를 붙이면서, 모델이 아니라 ‘프롬프트/파라미터/출력 포맷’을 어떻게 통제할지가 핵심이라는 걸 배웠습니다.\n또한 채팅 UI는 비동기 응답 대기 UX(로딩/스크롤/히스토리)가 품질에 크게 영향을 줘서 이 부분을 우선 정리했습니다."
        : "Key learnings were controlling prompts/params/output format (not the model itself) and handling async chat UX (loading/scroll/history) properly.",
    achievements: [
      {
        title:
          language === "ko"
            ? "AI 기반 자소서 첨삭 시스템 구축"
            : "AI-based Resume Editing System Implementation",
        description:
          language === "ko"
            ? "OpenAI GPT-3.5 API를 이용해 자소서 첨삭 기능을 구현했습니다."
            : "Implemented resume editing using the OpenAI GPT-3.5 API.",
      },
      {
        title:
          language === "ko"
            ? "챗봇 기반 채용 정보 검색 시스템"
            : "Chatbot-based Recruitment Information Search System",
        description:
          language === "ko"
            ? "채팅 입력 → 키워드 매칭 → 공고 조회 → 캘린더 이벤트 등록 흐름을 구현했습니다."
            : "Implemented chat input → keyword match → posting lookup → calendar event registration.",
      },
      {
        title:
          language === "ko"
            ? "채용 일정 관리 효율화"
            : "Recruitment Schedule Management Efficiency",
        description:
          language === "ko"
            ? "FullCalendar 기반 일정 UI를 구성했습니다."
            : "Built schedule UI with FullCalendar.",
      },
      {
        title:
          language === "ko"
            ? "API 문서화 자동화"
            : "API Documentation Automation",
        description:
          language === "ko"
            ? "Flask-RESTX로 API 문서(Swagger UI)를 자동 생성했습니다."
            : "Auto-generated API docs (Swagger UI) with Flask-RESTX.",
      },
      {
        title:
          language === "ko"
            ? "풀스택 개발 경험"
            : "Full-stack Development Experience",
        description:
          language === "ko"
            ? "프론트엔드와 백엔드를 모두 개발하여 전체 시스템 아키텍처 이해도 향상"
            : "Developed both frontend and backend to improve understanding of overall system architecture",
      },
    ],
  };
}
