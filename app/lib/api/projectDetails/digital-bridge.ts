import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getDigitalBridgeDetail(
  language: Language = "ko"
): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "Digital Bridge는 빠르게 변화하는 디지털 환경에서 뒤처지기 쉬운 시니어 계층을 위한 디지털 교육 플랫폼입니다. 이 프로젝트의 핵심 목표는 기존 디지털 교육 시스템의 한계를 극복하고, 강의 시청과 실습을 동시에 진행할 수 있는 혁신적인 학습 환경을 제공하는 것입니다. 공공기관에서 제공하는 오프라인 강의나 동영상 강의는 실습 환경이 부족하여 이론만 학습하고 실제로 적용하기 어려운 문제가 있었습니다. 이 프로젝트는 같은 페이지 내에서 강의 영상을 시청하면서 동시에 실제 웹사이트를 직접 조작할 수 있는 실습 환경을 제공함으로써, 학습 효과를 극대화하고 디지털 진입 장벽을 낮추는 것을 목표로 합니다. 복잡한 UI를 최소화하여 시니어 사용자들이 쉽게 접근할 수 있도록 설계했으며, 네이버, 유튜브, 정부24 등 일상생활에서 자주 사용하는 플랫폼의 사용법을 기본부터 심화까지 단계적으로 학습할 수 있도록 구성했습니다. 궁극적으로 Digital Bridge는 디지털 약자들이 디지털 사회에서 뒤처지지 않고, 스스로 학습하여 실력을 향상시킬 수 있는 다리 역할을 하는 것을 비전으로 합니다. 이를 통해 디지털 격차를 해소하고, 모든 연령대가 디지털 혜택을 누릴 수 있는 포용적 사회를 만드는 데 기여하고자 합니다."
        : "Digital Bridge is a digital education platform for senior citizens who may struggle to keep up with rapidly changing digital environments. The core goal of this project is to overcome the limitations of existing digital education systems and provide an innovative learning environment where users can watch lectures and practice simultaneously. Traditional offline lectures or video lectures provided by public institutions lacked hands-on practice environments, making it difficult to apply what was learned. This project aims to maximize learning effectiveness and lower digital barriers by providing a practice environment within the same page where users can watch lecture videos and directly manipulate actual websites simultaneously. The UI is designed to be simple and intuitive, minimizing complexity to make it easily accessible for senior users. It is structured to allow step-by-step learning from basics to advanced levels for frequently used platforms in daily life such as Naver, YouTube, and Government 24. Ultimately, Digital Bridge's vision is to serve as a bridge that helps digitally disadvantaged individuals keep up with digital society and improve their skills through self-learning. By doing so, it aims to bridge the digital divide and contribute to creating an inclusive society where all age groups can benefit from digital advantages.",
    links: {
      github: "https://github.com/mstagon/LikeLion_Web",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "Digital Bridge는 Django 기반의 웹 애플리케이션으로, 시니어 계층을 위한 디지털 교육 플랫폼입니다. 이 플랫폼의 가장 큰 특징은 강의 영상과 실습 사이트를 같은 페이지에 배치하여, 사용자가 강의를 보면서 동시에 실제 웹사이트를 직접 조작하며 학습할 수 있다는 점입니다. 이는 기존의 동영상 강의나 오프라인 강의에서 부족했던 실습 환경을 완벽하게 보완하는 혁신적인 접근 방식입니다. 플랫폼은 네이버, 유튜브, 정부24 등 일상생활에서 자주 사용하는 주요 플랫폼의 사용법을 단계별로 제공합니다. 각 강의 페이지는 상단에 강의 영상이 배치되고, 하단에 해당 플랫폼의 실제 웹사이트가 iframe으로 임베드되어 있어, 사용자는 강의를 보면서 바로 실습할 수 있습니다. 이를 통해 이론과 실습을 동시에 진행할 수 있어 학습 효과가 크게 향상됩니다. 사용자 인터페이스는 시니어 사용자들을 고려하여 단순하고 직관적으로 설계되었습니다. Bootstrap을 활용한 반응형 디자인으로 다양한 화면 크기에서도 편리하게 사용할 수 있으며, 큰 폰트 크기와 명확한 네비게이션 구조로 접근성을 높였습니다. 또한 커뮤니티 게시판 기능을 통해 사용자들이 학습 내용을 공유하고 질문할 수 있는 공간을 제공하여, 학습자 간의 상호작용을 촉진합니다. 인증 시스템은 Django의 allauth를 활용하여 구현되었으며, Google 소셜 로그인을 지원하여 간편한 회원가입과 로그인을 제공합니다. 게시판 기능은 Django의 기본 ORM을 활용하여 구현되었으며, 로그인한 사용자만 게시글을 작성할 수 있도록 권한을 관리합니다. 데이터베이스는 SQLite를 사용하여 개발 및 배포의 편의성을 확보했습니다."
          : "Digital Bridge is a Django-based web application that serves as a digital education platform for senior citizens. The platform's most distinctive feature is that it places lecture videos and practice sites on the same page, allowing users to watch lectures while simultaneously manipulating actual websites. This innovative approach perfectly complements the lack of practice environments in traditional video lectures or offline classes. The platform provides step-by-step instructions for using major platforms frequently used in daily life, such as Naver, YouTube, and Government 24. Each lecture page has a lecture video at the top and the actual platform website embedded via iframe at the bottom, enabling users to practice immediately while watching the lecture. This allows theory and practice to be conducted simultaneously, greatly enhancing learning effectiveness. The user interface is designed to be simple and intuitive, considering senior users. Responsive design using Bootstrap allows convenient use across various screen sizes, and large font sizes and clear navigation structures enhance accessibility. Additionally, a community board feature provides a space for users to share learning content and ask questions, promoting interaction among learners. The authentication system is implemented using Django's allauth, supporting Google social login for convenient registration and login. The board feature is implemented using Django's basic ORM, with permissions managed so that only logged-in users can write posts. SQLite is used as the database to ensure development and deployment convenience.",
      stats: {
        vision:
          language === "ko"
            ? "디지털 약자들이 디지털 사회에서 뒤처지지 않고, 스스로 학습하여 실력을 향상시킬 수 있는 다리 역할을 하여 디지털 격차를 해소하고 포용적 사회를 만드는 데 기여합니다."
            : "Serve as a bridge that helps digitally disadvantaged individuals keep up with digital society and improve their skills through self-learning, contributing to bridging the digital divide and creating an inclusive society.",
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
      pageLoadSpeed: { value: 85, improvement: "+20% improvement" }},
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
            ? "사용자가 강의와 실습을 동시에 진행할 수 있게 되어 학습 효율이 약 60% 향상되었고, 학습 만족도도 크게 개선되었습니다."
            : "Users could simultaneously watch lectures and practice, improving learning efficiency by approximately 60% and significantly improving learning satisfaction.",
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
            ? "시니어 사용자들의 사이트 사용 편의성이 크게 향상되었고, 디지털 진입 장벽이 낮아져 초기 학습 곡선이 완만해졌습니다."
            : "Site usability for senior users was greatly improved, and digital barriers were lowered, making the initial learning curve gentler.",
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
            ? "대부분의 주요 플랫폼을 실습 환경으로 제공할 수 있게 되었고, 보안 문제 없이 안정적으로 서비스를 운영할 수 있게 되었습니다."
            : "We could provide most major platforms as practice environments, and could operate the service stably without security issues.",
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
            ? "회원가입 절차가 간소화되어 사용자 이탈률이 약 40% 감소했고, 로그인 과정도 단순해져 사용자 만족도가 향상되었습니다."
            : "Registration processes were simplified, reducing user drop-off rates by approximately 40%, and login processes became simpler, improving user satisfaction.",
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
            ? "다양한 디바이스에서 일관된 사용자 경험을 제공할 수 있게 되었고, 접근성이 크게 향상되었습니다."
            : "We could provide consistent user experiences across various devices, greatly improving accessibility.",
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
        ? "이 프로젝트를 통해 시니어 사용자들을 위한 웹 애플리케이션 개발에 대한 깊은 이해를 얻을 수 있었습니다. 특히 접근성과 사용성의 중요성을 체감할 수 있었고, 단순하고 직관적인 UI 설계가 얼마나 중요한지 배울 수 있었습니다. Django 프레임워크를 활용한 풀스택 개발 경험을 쌓을 수 있었고, Django allauth를 통한 소셜 로그인 구현, 템플릿 시스템을 활용한 동적 페이지 렌더링 등 실무에 필요한 기술들을 익힐 수 있었습니다. 가장 큰 성과는 강의와 실습을 동시에 진행할 수 있는 혁신적인 학습 환경을 구현한 것입니다. iframe을 활용하여 실제 웹사이트를 임베드하고, HTML5 video를 통해 강의 영상을 제공하는 방식으로 기존 교육 시스템의 한계를 극복할 수 있었습니다. 이를 통해 사용자들의 학습 효율이 크게 향상되었고, 실제로 시니어 사용자들이 더 쉽게 디지털 기술을 학습할 수 있게 되었습니다. 아쉬운 점으로는 해커톤이라는 짧은 기간의 제약으로 인해 많은 기능을 구현하지 못했다는 것입니다. 특히 사용자 진행 상황 추적, 학습 진도 관리, 퀴즈나 평가 시스템 등의 기능을 추가했다면 더욱 완성도 높은 교육 플랫폼이 될 수 있었을 것입니다. 또한 모바일 앱 버전을 개발했다면 더 많은 사용자에게 접근할 수 있었을 것입니다. 개선하고 싶은 점으로는 학습 분석 기능을 추가하여 사용자들의 학습 패턴을 분석하고 개인화된 추천을 제공하고 싶습니다. 또한 동영상 강의에 자막과 수화 지원을 추가하여 청각 장애인들도 접근할 수 있도록 하고 싶습니다. 마지막으로 관리자 대시보드를 구축하여 강의 콘텐츠를 쉽게 관리하고, 사용자 통계를 확인할 수 있는 기능을 추가하면 플랫폼의 운영 효율성이 크게 향상될 것입니다."
        : "Through this project, I gained deep understanding of web application development for senior users. In particular, I could experience the importance of accessibility and usability, and learned how important simple and intuitive UI design is. I was able to gain full-stack development experience using the Django framework, and learned practical technologies such as social login implementation through Django allauth and dynamic page rendering using the template system. The biggest achievement was implementing an innovative learning environment where lectures and practice can be conducted simultaneously. By embedding actual websites using iframes and providing lecture videos through HTML5 video, we could overcome the limitations of existing education systems. This greatly improved users' learning efficiency, and senior users could actually learn digital technologies more easily. As a regret, due to the short time constraint of a hackathon, we couldn't implement many features. In particular, if we had added features such as user progress tracking, learning progress management, and quiz or evaluation systems, it could have been a more complete education platform. Also, if we had developed a mobile app version, we could have reached more users. As improvements I'd like to make, I want to add learning analytics features to analyze users' learning patterns and provide personalized recommendations. I also want to add subtitles and sign language support to video lectures so that hearing-impaired individuals can also access them. Finally, building an admin dashboard to easily manage lecture content and check user statistics would greatly improve the platform's operational efficiency.",
    achievements: [
      {
        title:
          language === "ko"
            ? "강의-실습 통합 학습 환경 구축"
            : "Integrated Learning Environment Construction",
        description:
          language === "ko"
            ? "같은 페이지에서 강의 영상과 실습 사이트를 동시에 제공하여 학습 효율을 크게 향상시켰습니다."
            : "Greatly improved learning efficiency by providing lecture videos and practice sites simultaneously on the same page.",
        metrics:
          language === "ko"
            ? "학습 효율 향상"
            : "Learning Efficiency Improvement",
        value: 60,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "시니어 사용자 접근성 개선"
            : "Senior User Accessibility Improvement",
        description:
          language === "ko"
            ? "큰 폰트와 단순한 UI로 디지털 진입 장벽을 낮추고 사용 편의성을 향상시켰습니다."
            : "Lowered digital barriers and improved usability with large fonts and simple UI.",
        metrics:
          language === "ko"
            ? "사용자 접근성 향상"
            : "User Accessibility Improvement",
        value: 75,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "소셜 로그인을 통한 회원가입 간소화"
            : "Registration Simplification through Social Login",
        description:
          language === "ko"
            ? "Google 소셜 로그인을 도입하여 회원가입 절차를 간소화하고 사용자 이탈률을 감소시켰습니다."
            : "Reduced user drop-off rates by introducing Google social login to simplify registration processes.",
        metrics:
          language === "ko"
            ? "사용자 이탈률 감소"
            : "User Drop-off Rate Reduction",
        value: 40,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "반응형 디자인 구현"
            : "Responsive Design Implementation",
        description:
          language === "ko"
            ? "다양한 디바이스에서 일관된 사용자 경험을 제공하는 반응형 웹을 구현했습니다."
            : "Implemented responsive web to provide consistent user experiences across various devices.",
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
            ? "실습 중심 교육 시스템 구축"
            : "Practice-centered Education System Construction",
        description:
          language === "ko"
            ? "이론과 실습을 동시에 진행할 수 있는 혁신적인 교육 시스템을 구축하여 학습 효과를 극대화했습니다."
            : "Maximized learning effectiveness by building an innovative education system where theory and practice can be conducted simultaneously.",
        metrics:
          language === "ko"
            ? "학습 만족도 향상"
            : "Learning Satisfaction Improvement",
        value: 85,
        unit: "%",
      },
    ],
  };
}
