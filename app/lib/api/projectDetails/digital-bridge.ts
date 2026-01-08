import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getDigitalBridgeDetail(
  language: Language = "ko"
): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "시니어 사용자를 대상으로, 강의 영상과 실습을 한 화면에서 진행할 수 있는 디지털 교육 웹을 제작했습니다(해커톤). Django 템플릿 기반으로 강의 페이지, 실습 화면(iframe), 게시판, Google 소셜 로그인을 구현했습니다."
        : "Digital Bridge is a hackathon project: a digital education web app for seniors. It was built with Django templates, providing lecture pages with an embedded practice area (iframe), a community board, and Google social login.",
    links: {
      github: "https://github.com/mstagon/LikeLion_Web",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "Django 기반의 교육 웹 서비스입니다.\n\n- 강의 페이지: 상단에 강의 영상(HTML5 video), 하단에 실습 화면(iframe)을 배치해 같은 화면에서 따라 해볼 수 있게 구성했습니다.\n- 커뮤니티: 게시판 CRUD를 구현했고, 로그인 사용자만 작성할 수 있도록 권한을 분리했습니다.\n- 인증: Django allauth로 Google 소셜 로그인을 연동했습니다.\n- UI: Bootstrap 기반 반응형 레이아웃, 큰 글자/단순한 네비게이션을 중심으로 구성했습니다.\n- 저장소: SQLite + Django ORM 기반으로 개발했습니다."
          : "A Django-based education web app.\n\n- Lecture pages: HTML5 video on top + an embedded practice area (iframe) below.\n- Community: a CRUD board with write access limited to authenticated users.\n- Auth: Google social login via Django allauth.\n- UI: responsive layout built with Bootstrap.\n- Storage: SQLite with Django ORM.",
      stats: {
        vision:
          language === "ko"
            ? "시니어 사용자가 강의와 실습을 한 화면에서 따라 할 수 있도록 학습 흐름을 단순화하는 데 초점을 맞췄습니다."
            : "Focused on simplifying the learning flow so seniors can follow along (lecture + practice) in a single screen.",
      },
    },
    role: {
      title: language === "ko" ? "풀스택 개발자" : "Full-stack Developer",
      responsibilities:
        language === "ko"
          ? [
              "Django 기반 백엔드 서버 개발 및 API 설계",
              "강의 페이지 및 실습 환경 통합 UI 개발",
              "사용자 인증 시스템 구현 (Django allauth, Google 소셜 로그인)",
              "게시판 기능 개발 및 CRUD 구현",
              "Bootstrap을 활용한 반응형 웹 디자인 및 UI/UX 최적화",
              "iframe을 활용한 실습 환경 통합 구현",
              "시니어 사용자를 고려한 접근성 개선",
            ]
          : [
              "Django-based backend server development and API design",
              "Lecture page and integrated practice environment UI development",
              "User authentication system implementation (Django allauth, Google social login)",
              "Board feature development and CRUD implementation",
              "Responsive web design and UI/UX optimization using Bootstrap",
              "Practice environment integration implementation using iframe",
              "Accessibility improvements for senior users",
            ],
    },
    timeframe: "2023.08.04 - 2023.08.10",
    platform: "Web (Responsive)",
    type: "Web Application (Educational Platform)",
    techStack: [
      "Django",
      "Python",
      "SQLite",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
      "Django allauth",
      "Google OAuth",
    ],
    performance: {
      pageLoadSpeed: { value: 85 },
    },
    challenges: [
      {
        title:
          language === "ko"
            ? "강의 영상과 실습 사이트의 동시 표시 및 동기화"
            : "Simultaneous Display and Synchronization of Lecture Videos and Practice Sites",
        asIs:
          language === "ko"
            ? "기존 디지털 교육 시스템은 강의 영상만 제공하거나, 실습 사이트가 별도 페이지에 있어 강의를 보면서 동시에 실습하기 어려웠습니다. 사용자는 강의를 보다가 실습하려면 다른 탭이나 창을 열어야 했고, 이로 인해 학습 흐름이 끊기고 집중력이 저하되었습니다."
            : "Existing digital education systems only provided lecture videos, or practice sites were on separate pages, making it difficult to practice while watching lectures. Users had to open other tabs or windows to practice after watching lectures, which disrupted learning flow and reduced concentration.",
        toBe:
          language === "ko"
            ? "같은 페이지 내에서 상단에 강의 영상, 하단에 실습 사이트를 iframe으로 임베드하여 동시에 표시하도록 구현했습니다. HTML5 video 태그를 사용하여 강의 영상을 재생하고, iframe을 통해 실제 플랫폼 웹사이트를 임베드했습니다. 이를 통해 사용자는 강의를 보면서 바로 아래에서 실습할 수 있어 학습 효과가 크게 향상되었습니다."
            : "We implemented simultaneous display by embedding lecture videos at the top and practice sites via iframe at the bottom within the same page. HTML5 video tags were used to play lecture videos, and iframes were used to embed actual platform websites. This allowed users to practice immediately below while watching lectures, greatly enhancing learning effectiveness.",
        result:
          language === "ko"
            ? "강의 화면과 실습 화면을 오가며 학습 흐름이 끊기던 문제를 줄이고, 한 페이지에서 따라 하며 학습할 수 있게 했습니다."
            : "Reduced context switching by keeping lecture and practice on a single page.",
      },
      {
        title:
          language === "ko"
            ? "시니어 사용자를 위한 UI/UX 최적화"
            : "UI/UX Optimization for Senior Users",
        asIs:
          language === "ko"
            ? "일반적인 웹사이트 UI는 시니어 사용자들에게 복잡하고 접근하기 어려웠습니다. 작은 폰트, 복잡한 메뉴 구조, 빠른 애니메이션 등이 시니어 사용자들의 디지털 진입 장벽을 높였습니다."
            : "General website UIs were complex and difficult for senior users to access. Small fonts, complex menu structures, and fast animations raised digital barriers for senior users.",
        toBe:
          language === "ko"
            ? "Bootstrap을 활용하여 큰 폰트 크기와 명확한 네비게이션 구조를 구현했습니다. 네비게이션 바의 폰트 크기를 70px로 설정하여 가독성을 높였고, 단순한 메뉴 구조로 정보 계층을 최소화했습니다. 또한 명확한 버튼과 링크 스타일을 적용하여 클릭 가능한 요소를 쉽게 식별할 수 있도록 했습니다. 색상 대비도 높여 시각적 접근성을 개선했습니다."
            : "We implemented large font sizes and clear navigation structures using Bootstrap. Navigation bar font size was set to 70px to improve readability, and information hierarchy was minimized with simple menu structures. Additionally, clear button and link styles were applied to make clickable elements easily identifiable. Color contrast was also increased to improve visual accessibility.",
        result:
          language === "ko"
            ? "큰 글자와 단순한 정보 구조를 중심으로 화면을 구성해, 기본 동선(강의 선택 → 시청 → 실습)이 복잡해지지 않도록 했습니다."
            : "Kept the core flow (select → watch → practice) simple with larger typography and a shallow navigation structure.",
      },
      {
        title:
          language === "ko"
            ? "iframe을 통한 외부 사이트 임베드 및 보안 문제 해결"
            : "External Site Embedding via iframe and Security Issue Resolution",
        asIs:
          language === "ko"
            ? "외부 웹사이트를 iframe으로 임베드할 때 X-Frame-Options 헤더로 인해 일부 사이트는 임베드되지 않는 문제가 있었습니다. 또한 iframe 내부의 사이트와 상위 페이지 간의 통신 제한으로 인한 기능 제약이 있었습니다."
            : "When embedding external websites via iframe, some sites could not be embedded due to X-Frame-Options headers. There were also functional limitations due to communication restrictions between iframe content and parent pages.",
        toBe:
          language === "ko"
            ? "X-Frame-Options를 우회할 수 있는 사이트는 iframe으로 임베드하고, 그렇지 않은 사이트는 새 창으로 열리는 링크를 제공하는 하이브리드 접근 방식을 채택했습니다. iframe의 sandbox 속성을 적절히 설정하여 보안을 유지하면서도 필요한 기능은 사용할 수 있도록 구성했습니다. 또한 사용자에게 iframe이 제대로 로드되지 않을 경우를 대비한 안내 메시지를 제공했습니다."
            : "We adopted a hybrid approach, embedding sites that allow iframe embedding via iframe, and providing links that open in new windows for sites that don't. iframe sandbox attributes were appropriately configured to maintain security while allowing necessary functions. We also provided guidance messages for users in case iframes don't load properly.",
        result:
          language === "ko"
            ? "임베드 가능한 사이트는 iframe으로 제공하고, 제한이 있는 경우에는 새 창 링크로 안내하는 방식으로 학습 흐름을 유지했습니다."
            : "Used iframe when allowed, and fell back to opening in a new tab when embedding was blocked.",
      },
      {
        title:
          language === "ko"
            ? "Django allauth를 활용한 소셜 로그인 구현"
            : "Social Login Implementation using Django allauth",
        asIs:
          language === "ko"
            ? "시니어 사용자들에게 복잡한 회원가입 절차는 큰 진입 장벽이었습니다. 이메일 인증, 비밀번호 설정 등 여러 단계를 거쳐야 하는 전통적인 회원가입 방식은 사용자 이탈을 증가시켰습니다."
            : "Complex registration processes were major barriers for senior users. Traditional registration methods requiring multiple steps such as email verification and password setup increased user drop-off rates.",
        toBe:
          language === "ko"
            ? "Django allauth를 활용하여 Google 소셜 로그인을 구현했습니다. 사용자는 Google 계정으로 간편하게 로그인할 수 있으며, 회원가입과 로그인 과정이 단순화되었습니다. 또한 Django의 기본 인증 시스템과 통합하여 게시판 등 인증이 필요한 기능에서도 일관되게 사용할 수 있도록 구성했습니다."
            : "We implemented Google social login using Django allauth. Users can easily log in with their Google accounts, and registration and login processes were simplified. It was also integrated with Django's basic authentication system to be used consistently in features requiring authentication such as the board.",
        result:
          language === "ko"
            ? "계정 생성/로그인 절차를 Google 소셜 로그인으로 단순화했습니다."
            : "Simplified sign-up/login via Google social login.",
      },
      {
        title:
          language === "ko"
            ? "반응형 디자인을 통한 다양한 디바이스 지원"
            : "Multi-device Support through Responsive Design",
        asIs:
          language === "ko"
            ? "초기에는 데스크톱 환경만 고려하여 개발되었지만, 태블릿이나 스마트폰에서도 사용할 수 있어야 하는 요구사항이 있었습니다. 특히 시니어 사용자들은 다양한 디바이스를 사용할 수 있어야 했습니다."
            : "Initially developed considering only desktop environments, but there was a requirement to be usable on tablets or smartphones. Senior users needed to be able to use various devices.",
        toBe:
          language === "ko"
            ? "Bootstrap의 그리드 시스템을 활용하여 반응형 레이아웃을 구현했습니다. 모바일, 태블릿, 데스크톱 등 다양한 화면 크기에 맞춰 레이아웃이 자동으로 조정되도록 구성했습니다. iframe과 비디오 플레이어도 반응형으로 설정하여 작은 화면에서도 최적의 경험을 제공하도록 했습니다."
            : "We implemented responsive layouts using Bootstrap's grid system. Layouts automatically adjust to various screen sizes including mobile, tablet, and desktop. iframes and video players were also set to be responsive to provide optimal experiences even on small screens.",
        result:
          language === "ko"
            ? "Bootstrap 그리드 기반으로 레이아웃이 화면 크기에 따라 무너지지 않도록 조정했습니다."
            : "Used Bootstrap grid for a responsive layout across screen sizes.",
      },
    ],
    architecture: {
      description:
        language === "ko"
          ? "Digital Bridge는 Django의 MVT(Model-View-Template) 아키텍처 패턴을 따르는 전통적인 웹 애플리케이션 구조입니다. 프로젝트는 두 개의 주요 앱으로 구성되어 있습니다: `one_pages`는 강의 페이지와 랜딩 페이지를 담당하고, `home`은 게시판 기능을 담당합니다. 각 앱은 독립적인 URL 라우팅, 뷰, 템플릿을 가지고 있어 모듈화된 구조를 유지합니다. 데이터베이스 계층에서는 Django ORM을 활용하여 모델을 정의하고, SQLite를 기본 데이터베이스로 사용합니다. Post 모델은 게시판의 게시글을 관리하며, Django의 기본 User 모델을 확장하여 사용자 인증을 처리합니다. Django allauth를 통해 소셜 로그인 기능을 구현했으며, 세션 기반 인증을 사용합니다. 프레젠테이션 계층에서는 Django 템플릿 시스템을 활용하여 HTML을 렌더링합니다. Bootstrap을 CDN을 통해 로드하여 스타일링을 처리하고, base.html 템플릿을 통해 공통 레이아웃을 제공합니다. 각 강의 페이지는 상단에 HTML5 video 태그로 강의 영상을 표시하고, 하단에 iframe으로 실습 사이트를 임베드하는 구조로 구성되어 있습니다. 정적 파일(이미지, 비디오, CSS)은 Django의 static 파일 시스템을 통해 관리됩니다."
          : "Digital Bridge follows Django's MVT (Model-View-Template) architecture pattern, a traditional web application structure. The project consists of two main apps: `one_pages` handles lecture pages and landing pages, while `home` handles board functionality. Each app maintains independent URL routing, views, and templates, maintaining a modular structure. At the database layer, models are defined using Django ORM, and SQLite is used as the default database. The Post model manages board posts, and Django's basic User model is extended to handle user authentication. Social login functionality is implemented through Django allauth, using session-based authentication. At the presentation layer, HTML is rendered using Django's template system. Bootstrap is loaded via CDN to handle styling, and a base.html template provides common layouts. Each lecture page displays lecture videos using HTML5 video tags at the top and embeds practice sites via iframe at the bottom. Static files (images, videos, CSS) are managed through Django's static file system.",
      diagrams: [
        {
          title:
            language === "ko"
              ? "시스템 아키텍처 다이어그램"
              : "System Architecture Diagram",
          image: "",
          alt:
            language === "ko"
              ? "Digital Bridge 애플리케이션 시스템 아키텍처 구조도"
              : "Digital Bridge application system architecture diagram",
        },
      ],
    },
    retrospective:
      language === "ko"
        ? "짧은 기간(해커톤) 안에 템플릿 기반으로 화면/기능을 빠르게 조립하고, 인증/게시판 같은 기본 기능을 끝까지 연결하는 경험을 했습니다. \niframe은 사이트별로 임베드 정책(X-Frame-Options 등) 제약이 있어, 실패 시 새 창 링크로 안내하는 플로우를 함께 준비해야 했습니다.\n추가로 한다면 진도(완료 체크), 퀴즈/평가, 관리자용 콘텐츠 관리 같은 운영 기능을 붙여보고 싶습니다."
        : "In a short hackathon timeframe, I shipped core flows end-to-end (pages, auth, board) using Django templates. \nI also learned that iframe embedding is constrained by each site's policies (e.g., X-Frame-Options), so a safe fallback (open in new tab) is necessary.\nNext steps would be progress tracking, quizzes, and basic admin tooling for content.",
    achievements: [
      {
        title:
          language === "ko"
            ? "강의-실습 통합 학습 환경 구축"
            : "Integrated Learning Environment Construction",
        description:
          language === "ko"
            ? "강의 영상과 실습 화면을 한 페이지에 배치해, 시청하면서 바로 따라 할 수 있게 구성했습니다."
            : "Placed lecture video and practice area on a single page to reduce context switching.",
      },
      {
        title:
          language === "ko"
            ? "시니어 사용자 접근성 개선"
            : "Senior User Accessibility Improvement",
        description:
          language === "ko"
            ? "큰 글자/단순 네비게이션을 중심으로 화면을 구성했습니다."
            : "Designed screens with larger typography and a simple navigation structure.",
      },
      {
        title:
          language === "ko"
            ? "소셜 로그인을 통한 회원가입 간소화"
            : "Registration Simplification through Social Login",
        description:
          language === "ko"
            ? "Django allauth로 Google 소셜 로그인을 연동했습니다."
            : "Integrated Google social login via Django allauth.",
      },
      {
        title:
          language === "ko"
            ? "반응형 디자인 구현"
            : "Responsive Design Implementation",
        description:
          language === "ko"
            ? "Bootstrap 기반으로 기본 반응형 레이아웃을 구성했습니다."
            : "Implemented a responsive layout with Bootstrap.",
      },
      {
        title:
          language === "ko"
            ? "실습 중심 교육 시스템 구축"
            : "Practice-centered Education System Construction",
        description:
          language === "ko"
            ? "실습 화면을 함께 제공하는 형태로 강의 페이지를 구성했습니다."
            : "Structured lecture pages to include a practice area alongside the content.",
      },
    ],
  };
}
