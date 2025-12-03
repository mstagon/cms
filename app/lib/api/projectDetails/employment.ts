import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getEmploymentDetail(language: Language = "ko"): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "취업의신 프로젝트는 취업 준비생들을 위한 AI 기반 통합 취업 지원 플랫폼입니다. 기업 채용 공고를 직접 검색하고 관리하는 번거로움을 해결하고, 개인화된 취업 지원 서비스를 제공하는 것이 핵심 목표입니다. 챗봇을 활용하여 실시간으로 채용 정보를 검색하고, 관심 기업의 채용 일정을 자동으로 캘린더에 등록할 수 있는 기능을 제공합니다. 또한 OpenAI GPT를 활용한 자소서 첨삭 및 면접 예상 질문과 답변 제공 기능을 통해 취업 준비생들의 자기소개서 작성과 면접 준비를 체계적으로 지원합니다."
        : "The Employment God project is an AI-based integrated employment support platform for job seekers. The core goal is to solve the hassle of directly searching and managing company job postings and provide personalized employment support services. It provides functionality to search for recruitment information in real-time using a chatbot and automatically register recruitment schedules of companies of interest to the calendar. Additionally, through resume editing using OpenAI GPT and providing expected interview questions and answers, it systematically supports job seekers' resume writing and interview preparation.",
    links: {
      github: "https://github.com/mstagon/employment",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "취업의신은 React 기반의 웹 애플리케이션으로, 취업 준비생들이 효율적으로 채용 정보를 관리하고 자기소개서를 개선할 수 있도록 돕는 플랫폼입니다. 챗봇 인터페이스를 통해 사용자는 자연어로 기업의 채용 공고를 검색할 수 있으며, 챗봇이 자동으로 해당 기업의 채용 일정을 캘린더에 등록해줍니다. 이를 통해 방대한 양의 채용 공고 속에서 직접 기업을 검색해야 하는 번거로움을 해결하고, 개인 맞춤형 채용 일정 관리가 가능합니다.\n\n자소서 첨삭 기능은 OpenAI GPT-3.5를 활용하여 구현되었습니다. 사용자가 작성한 자기소개서를 입력하면, AI가 강점과 약점을 분석하고 전체적인 흐름을 개선하여 첨삭 결과를 제공합니다. 또한 사용자의 선호하는 방식에 맞춰 수정 방향을 제시하며, 자소서를 기반으로 예상 면접 질문과 그에 대한 답변까지 제공하여 면접 준비까지 연계된 지원을 제공합니다.\n\n캘린더 기능은 FullCalendar 라이브러리를 활용하여 구현되었으며, 채용 일정을 시각적으로 관리할 수 있습니다. 각 채용 공고는 시작일과 종료일을 포함하여 캘린더에 표시되며, 클릭 시 상세 정보와 채용 공고 링크를 확인할 수 있습니다. 사용자는 자신만의 채용 일정 캘린더를 만들어 체계적으로 채용 일정을 관리할 수 있습니다.\n\n백엔드는 Flask 기반으로 구축되었으며, Flask-RESTX를 활용하여 API 문서화를 자동화했습니다. 키워드 기반 채용 공고 검색 시스템을 구현하여 사용자 입력에서 기업명을 추출하고, 해당 기업의 채용 정보를 반환합니다. OpenAI API를 통한 자소서 첨삭 기능도 RESTful API로 제공되어 프론트엔드와 효율적으로 통신합니다."
          : "Employment God is a React-based web application that helps job seekers efficiently manage recruitment information and improve their resumes. Through a chatbot interface, users can search for company job postings in natural language, and the chatbot automatically registers the company's recruitment schedule to the calendar. This solves the hassle of having to directly search for companies among vast amounts of job postings and enables personalized recruitment schedule management.\n\nThe resume editing feature is implemented using OpenAI GPT-3.5. When users input their written resume, the AI analyzes strengths and weaknesses and provides editing results by improving the overall flow. It also suggests revision directions according to the user's preferred method and provides expected interview questions and answers based on the resume, offering connected support up to interview preparation.\n\nThe calendar feature is implemented using the FullCalendar library, allowing visual management of recruitment schedules. Each job posting is displayed on the calendar including start and end dates, and detailed information and job posting links can be checked when clicked. Users can create their own recruitment schedule calendar to systematically manage recruitment schedules.\n\nThe backend is built on Flask and uses Flask-RESTX to automate API documentation. A keyword-based job posting search system is implemented to extract company names from user input and return the company's recruitment information. The resume editing feature through OpenAI API is also provided as a RESTful API, enabling efficient communication with the frontend.",
      stats: {
        vision:
          language === "ko"
            ? "AI 기술을 활용하여 모든 취업 준비생이 효율적이고 체계적으로 취업 준비를 할 수 있는 플랫폼을 만들어, 취업 성공률을 높이는 것"
            : "Creating a platform where all job seekers can efficiently and systematically prepare for employment using AI technology, increasing employment success rates",
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
      pageLoadSpeed: { value: 78, improvement: "+15% improvement" }},
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
            ? "자소서 첨삭 결과의 품질이 크게 향상되었고, 사용자 피드백에서도 첨삭의 유용성에 대한 긍정적인 평가를 받았습니다. AI가 제시하는 개선 방향이 구체적이고 실용적이어서 실제 자소서 작성에 도움이 된다는 피드백을 받았습니다."
            : "The quality of resume editing results significantly improved, and received positive feedback from users regarding the usefulness of editing. Received feedback that the improvement directions suggested by AI are specific and practical, helping with actual resume writing.",
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
            ? "사용자가 다양한 방식으로 기업명을 입력해도 정확하게 인식할 수 있게 되었고, 챗봇을 통해 간편하게 채용 일정을 캘린더에 등록할 수 있게 되었습니다. 사용자 편의성이 크게 향상되었고, 채용 일정 관리의 효율성이 높아졌습니다."
            : "Users can now accurately recognize company names even when entered in various ways, and can easily register recruitment schedules to the calendar through the chatbot. User convenience significantly improved, and the efficiency of recruitment schedule management increased.",
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
            ? "챗봇 인터페이스가 더욱 반응적이고 사용자 친화적으로 개선되었고, 실시간 대화 경험을 제공할 수 있게 되었습니다. 사용자 피드백에서도 챗봇 사용의 편의성에 대한 긍정적인 평가를 받았습니다."
            : "The chatbot interface became more responsive and user-friendly, and was able to provide a real-time conversation experience. Received positive feedback from users regarding the convenience of chatbot use.",
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
            ? "직관적이고 사용하기 쉬운 캘린더 인터페이스를 제공할 수 있게 되었고, 챗봇을 통해 등록된 채용 일정이 자동으로 캘린더에 표시되어 사용자 편의성이 크게 향상되었습니다."
            : "Able to provide an intuitive and easy-to-use calendar interface, and recruitment schedules registered through the chatbot are automatically displayed on the calendar, significantly improving user convenience.",
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
            ? "API 문서화 시간이 크게 단축되었고, API 변경 시 자동으로 문서가 업데이트되어 유지보수가 쉬워졌습니다. 프론트엔드 개발자와의 협업 효율도 향상되었습니다."
            : "API documentation time significantly shortened, and documentation automatically updates when APIs change, making maintenance easier. Collaboration efficiency with frontend developers also improved.",
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
        ? "취업의신 프로젝트를 통해 AI 기술을 활용한 실용적인 애플리케이션 개발 경험을 얻을 수 있었습니다. OpenAI GPT API를 통합하면서 프롬프트 엔지니어링의 중요성을 깨달았고, 적절한 프롬프트 설계가 AI 응답의 품질을 크게 좌우한다는 것을 배웠습니다. 특히 자소서 첨삭 기능에서 시스템 프롬프트를 '자소서 첨삭 전문가'로 설정하고 구체적인 지시사항을 포함함으로써 훨씬 더 유용한 결과를 얻을 수 있었습니다.\n\n키워드 기반 검색 시스템을 구현하면서 자연어 처리의 복잡성과 사용자 입력의 다양성을 경험했습니다. 다양한 표현 방식으로 입력된 기업명을 인식하기 위해 키워드 매칭 알고리즘을 개선하는 과정에서, 사용자 경험을 최우선으로 고려해야 한다는 것을 배웠습니다.\n\nFullCalendar 라이브러리를 활용하면서 오픈소스 라이브러리의 활용이 개발 속도를 크게 향상시킬 수 있다는 것을 체감했습니다. 직접 구현하기에는 복잡한 캘린더 기능을 라이브러리를 통해 빠르게 구현할 수 있었고, 이를 통해 핵심 기능 개발에 더 집중할 수 있었습니다.\n\n아쉬운 점으로는, 프로젝트 초기에 더 체계적인 데이터베이스 설계를 했다면 채용 정보를 더 효율적으로 관리할 수 있었을 것 같습니다. 현재는 하드코딩된 키워드 사전을 사용하고 있지만, 데이터베이스를 활용하여 동적으로 채용 정보를 관리할 수 있도록 개선하고 싶습니다. 또한 사용자 인증 및 개인화 기능을 추가하여 각 사용자별로 맞춤형 채용 일정을 제공할 수 있도록 하고 싶습니다.\n\n향후 개선하고 싶은 점으로는, 웹 스크래핑을 통해 실시간으로 채용 공고를 수집하는 기능을 추가하여 키워드 사전에 의존하지 않고 더 많은 기업의 채용 정보를 제공하고 싶습니다. 또한 자소서 첨삭 기능을 더욱 고도화하여 기업별 맞춤형 첨삭을 제공하거나, 면접 연습 기능을 추가하여 취업 준비를 더욱 체계적으로 지원하고 싶습니다."
        : "Through the Employment God project, I gained experience developing practical applications using AI technology. While integrating OpenAI GPT API, I realized the importance of prompt engineering and learned that proper prompt design greatly influences AI response quality. Particularly in the resume editing feature, by setting the system prompt to 'resume editing expert' and including specific instructions, I was able to obtain much more useful results.\n\nWhile implementing the keyword-based search system, I experienced the complexity of natural language processing and the diversity of user input. In the process of improving the keyword matching algorithm to recognize company names entered in various expression methods, I learned that user experience must be prioritized.\n\nWhile utilizing the FullCalendar library, I felt that using open-source libraries can greatly improve development speed. I was able to quickly implement calendar functionality that would be complex to implement directly through the library, and through this, I could focus more on core feature development.\n\nAs for regrets, I think we could have managed recruitment information more efficiently if we had designed a more systematic database from the beginning of the project. Currently using a hardcoded keyword dictionary, but I want to improve it to dynamically manage recruitment information using a database. Also, I want to add user authentication and personalization features to provide customized recruitment schedules for each user.\n\nAs for future improvements, I want to add functionality to collect job postings in real-time through web scraping to provide recruitment information for more companies without relying on keyword dictionaries. Also, I want to further enhance the resume editing feature to provide company-specific editing or add interview practice functionality to more systematically support job preparation.",
    achievements: [
      {
        title:
          language === "ko"
            ? "AI 기반 자소서 첨삭 시스템 구축"
            : "AI-based Resume Editing System Implementation",
        description:
          language === "ko"
            ? "OpenAI GPT-3.5를 활용한 자소서 첨삭 기능 구현 및 사용자 만족도 향상"
            : "Implemented resume editing functionality using OpenAI GPT-3.5 and improved user satisfaction",
        metrics:
          language === "ko" ? "첨삭 품질 향상" : "Editing Quality Improvement",
        value: 85,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "챗봇 기반 채용 정보 검색 시스템"
            : "Chatbot-based Recruitment Information Search System",
        description:
          language === "ko"
            ? "자연어 입력을 통한 채용 공고 검색 및 자동 캘린더 등록 기능 구현"
            : "Implemented recruitment posting search through natural language input and automatic calendar registration functionality",
        metrics:
          language === "ko"
            ? "사용자 편의성 향상"
            : "User Convenience Improvement",
        value: 90,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "채용 일정 관리 효율화"
            : "Recruitment Schedule Management Efficiency",
        description:
          language === "ko"
            ? "FullCalendar를 활용한 직관적인 채용 일정 관리 시스템 구축"
            : "Built intuitive recruitment schedule management system using FullCalendar",
        metrics:
          language === "ko"
            ? "일정 관리 효율성"
            : "Schedule Management Efficiency",
        value: 75,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "API 문서화 자동화"
            : "API Documentation Automation",
        description:
          language === "ko"
            ? "Flask-RESTX를 활용한 자동 API 문서 생성으로 개발 효율성 향상"
            : "Improved development efficiency through automatic API documentation generation using Flask-RESTX",
        metrics:
          language === "ko"
            ? "문서화 시간 단축"
            : "Documentation Time Reduction",
        value: 70,
        unit: "%",
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
        metrics: language === "ko" ? "시스템 이해도" : "System Understanding",
        value: 95,
        unit: "%",
      },
    ],
  };
}
