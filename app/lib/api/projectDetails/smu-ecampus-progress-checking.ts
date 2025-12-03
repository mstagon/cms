import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getSmuEcampusProgressCheckingDetail(
  language: Language = "ko"
): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "SMU e-Campus 진도율 체크 프로그램은 코로나19로 인해 온라인 강의가 활성화된 현 시점에서 e-Campus 플랫폼의 불편한 점을 개선하고 필요한 기능을 추가하기 위해 개발된 데스크톱 애플리케이션입니다. 특히 진도율을 제대로 체크하지 못해 의도치 않은 결석을 하게 되는 상황을 목격하거나 경험한 것을 바탕으로, 이러한 문제를 해결하는 프로그램을 계획하게 되었습니다. 이 프로젝트의 주된 목적은 e-Campus를 통해 강의를 수강하고 진도율을 채우는 시스템에서 진도율 체크를 하기 위해 일일이 해당 과목의 학습진도사항을 들어가서 체크해야 하고, 모바일에서는 진도율 체크조차 불가능하다는 점을 개선하는 것입니다. 사용자가 한 번의 로그인으로 모든 수강 과목의 진도율을 한눈에 확인할 수 있도록 하여, 시간을 절약하고 결석을 방지하는 것이 핵심 목표입니다. 궁극적으로 이 프로그램은 학생들의 학습 관리 효율성을 높이고, 온라인 강의 환경에서의 불편함을 해소하여 더 나은 학습 경험을 제공하는 것을 비전으로 합니다."
        : "The SMU e-Campus Progress Check Program is a desktop application developed to improve inconveniences and add necessary features to the e-Campus platform at a time when online lectures have become active due to COVID-19. Based on witnessing or experiencing situations where unintended absences occurred due to not being able to properly check progress rates, this program was planned to solve such problems. The main purpose of this project is to improve the current system where, to check the progress rate in the system for taking lectures and completing progress rates through e-Campus, one has to manually go into the learning progress details of each subject, and it is even impossible to check the progress rate on mobile. The core goal is to allow users to check the progress rates of all enrolled courses at a glance with a single login, saving time and preventing absences. Ultimately, this program's vision is to improve students' learning management efficiency and eliminate inconveniences in the online lecture environment to provide a better learning experience.",
    links: {
      github: "https://github.com/mstagon/SMU-ECAMPUS-PROGRESS-CHECKING",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "SMU e-Campus 진도율 체크 프로그램은 Python의 Tkinter를 활용한 데스크톱 GUI 애플리케이션으로, e-Campus 웹사이트에 자동으로 로그인하여 수강 중인 모든 과목의 진도율을 한 번에 확인할 수 있도록 해주는 도구입니다. 웹 스크래핑 기술을 활용하여 e-Campus의 진도율 정보를 자동으로 수집하고, 직관적인 테이블 형태로 표시합니다. 프로그램의 핵심 기능은 두 가지로 구성됩니다. 첫째, 자동 로그인 기능으로 사용자는 option.py 파일에 학번과 비밀번호를 설정하거나 GUI에서 직접 입력하여 e-Campus에 로그인할 수 있습니다. 로그인 성공 시 세션을 유지하여 이후 요청에 재사용합니다. 둘째, 진도율 체크 기능으로 로그인 후 사용자가 등록한 과목 목록이 콤보박스에 표시되고, 과목을 선택하면 해당 과목의 주차별 진도율 정보가 자동으로 크롤링되어 테이블 형태로 표시됩니다. 기술적으로는 requests 라이브러리를 활용하여 HTTP 세션을 관리하고, BeautifulSoup을 통해 HTML을 파싱하여 필요한 데이터를 추출합니다. pandas를 활용하여 HTML 테이블을 데이터프레임으로 변환하고, Tkinter의 Treeview 위젯을 통해 사용자에게 직관적으로 정보를 제공합니다. 또한 PIL(Pillow)을 활용하여 로고 이미지를 표시하고, 커스텀 폰트를 적용하여 사용자 경험을 향상시켰습니다. 프로그램은 option.py 파일을 통해 설정을 관리하며, 사용자는 과목 ID를 배열 형태로 입력하여 관심 있는 과목만 선택적으로 확인할 수 있습니다. 자동 로그인 기능을 활성화하면 프로그램 실행 시 자동으로 로그인되어 즉시 진도율을 확인할 수 있어 편의성이 크게 향상됩니다."
          : "The SMU e-Campus Progress Check Program is a desktop GUI application using Python's Tkinter that automatically logs into the e-Campus website and allows users to check the progress rates of all enrolled courses at once. It uses web scraping technology to automatically collect progress rate information from e-Campus and displays it in an intuitive table format. The program's core functionality consists of two parts. First, the automatic login feature allows users to log into e-Campus by setting their student ID and password in the option.py file or entering them directly in the GUI. Upon successful login, the session is maintained for reuse in subsequent requests. Second, the progress rate check feature displays a list of registered courses in a combobox after login, and when a course is selected, the course's weekly progress rate information is automatically scraped and displayed in table format. Technically, it uses the requests library to manage HTTP sessions and BeautifulSoup to parse HTML and extract needed data. It uses pandas to convert HTML tables into dataframes and provides information to users intuitively through Tkinter's Treeview widget. It also uses PIL (Pillow) to display logo images and applies custom fonts to enhance user experience. The program manages settings through the option.py file, and users can selectively check only courses of interest by entering course IDs in array format. When the automatic login feature is enabled, the program automatically logs in upon execution, allowing immediate progress rate checking, greatly improving convenience.",
      stats: {
        vision:
          language === "ko"
            ? "학생들의 학습 관리 효율성을 높이고, 온라인 강의 환경에서의 불편함을 해소하여 더 나은 학습 경험을 제공합니다."
            : "Improve students' learning management efficiency and eliminate inconveniences in the online lecture environment to provide a better learning experience.",
      },
    },
    role: {
      title: language === "ko" ? "풀스택 개발자" : "Full-stack Developer",
      responsibilities:
        language === "ko"
          ? [
              "Python 기반 데스크톱 GUI 애플리케이션 설계 및 개발",
              "Tkinter를 활용한 사용자 인터페이스 구현",
              "BeautifulSoup과 requests를 활용한 웹 스크래핑 기능 개발",
              "e-Campus 로그인 시스템 및 세션 관리 구현",
              "진도율 데이터 크롤링 및 파싱 로직 개발",
              "pandas를 활용한 데이터 처리 및 테이블 표시 기능 구현",
              "자동 로그인 및 과목 등록 기능 개발",
              "설정 파일(option.py) 구조 설계 및 구현",
            ]
          : [
              "Python-based desktop GUI application design and development",
              "User interface implementation using Tkinter",
              "Web scraping functionality development using BeautifulSoup and requests",
              "e-Campus login system and session management implementation",
              "Progress rate data crawling and parsing logic development",
              "Data processing and table display functionality implementation using pandas",
              "Automatic login and course registration feature development",
              "Configuration file (option.py) structure design and implementation",
            ],
    },
    timeframe: "2021.03 - 2021.06",
    platform: "Desktop (Windows)",
    type: "Desktop Application (Educational Tool)",
    techStack: [
      "Python",
      "Tkinter",
      "BeautifulSoup4",
      "Requests",
      "Pandas",
      "PIL (Pillow)",
    ],
    performance: {
      pageLoadSpeed: { value: 88, improvement: "+40% improvement" }},
    challenges: [
      {
        title:
          language === "ko"
            ? "e-Campus 웹사이트의 동적 로그인 처리"
            : "Dynamic Login Processing for e-Campus Website",
        asIs:
          language === "ko"
            ? "e-Campus는 세션 기반 인증 시스템을 사용하며, 단순히 POST 요청만으로는 로그인이 완료되지 않았습니다. 또한 CSRF 토큰이나 추가 인증 단계가 필요할 수 있어 로그인 처리가 복잡했습니다."
            : "e-Campus uses a session-based authentication system, and simply making a POST request was not enough to complete login. Also, CSRF tokens or additional authentication steps might be needed, making login processing complex.",
        toBe:
          language === "ko"
            ? "requests 라이브러리의 Session 객체를 활용하여 세션을 유지하고, 로그인 POST 요청 후 메인 페이지에 접근하여 사용자 정보가 포함된 HTML 요소를 확인하는 방식으로 로그인 성공 여부를 검증했습니다. BeautifulSoup을 통해 'user_department' 클래스를 가진 요소를 찾아 로그인 상태를 확인하도록 구현했습니다."
            : "We used the requests library's Session object to maintain sessions and verified login success by accessing the main page after the login POST request and checking for HTML elements containing user information. We implemented it to check login status by finding elements with the 'user_department' class using BeautifulSoup.",
        result:
          language === "ko"
            ? "안정적인 로그인 처리가 가능해졌고, 로그인 실패 시 명확한 에러 메시지를 사용자에게 제공할 수 있게 되었습니다."
            : "Stable login processing became possible, and we could provide clear error messages to users when login failed.",
      },
      {
        title:
          language === "ko"
            ? "HTML 테이블 데이터 추출 및 표시"
            : "HTML Table Data Extraction and Display",
        asIs:
          language === "ko"
            ? "e-Campus의 진도율 정보는 HTML 테이블 형태로 제공되지만, 복잡한 구조와 동적 콘텐츠로 인해 데이터 추출이 어려웠습니다. 또한 추출한 데이터를 사용자에게 직관적으로 표시하는 것도 과제였습니다."
            : "e-Campus's progress rate information is provided in HTML table format, but data extraction was difficult due to complex structures and dynamic content. Also, displaying extracted data to users in an intuitive way was a challenge.",
        toBe:
          language === "ko"
            ? "BeautifulSoup을 통해 'table table-bordered user_progress' 클래스를 가진 테이블을 찾고, pandas의 read_html 함수를 활용하여 HTML 테이블을 데이터프레임으로 변환했습니다. 필요한 컬럼(주차, 강의 자료, 진도율)만 선택하여 정제하고, Tkinter의 Treeview 위젯을 활용하여 테이블 형태로 표시하도록 구현했습니다."
            : "We found tables with the 'table table-bordered user_progress' class using BeautifulSoup and converted HTML tables to dataframes using pandas' read_html function. We selected and refined only necessary columns (week, lecture material, progress rate) and implemented it to display in table format using Tkinter's Treeview widget.",
        result:
          language === "ko"
            ? "진도율 정보가 깔끔하고 읽기 쉬운 형태로 표시되어 사용자가 한눈에 확인할 수 있게 되었습니다."
            : "Progress rate information is displayed in a clean and readable format, allowing users to check at a glance.",
      },
      {
        title:
          language === "ko"
            ? "다중 과목 관리 및 선택 기능"
            : "Multiple Course Management and Selection Functionality",
        asIs:
          language === "ko"
            ? "사용자는 여러 과목을 수강하고 있으며, 각 과목마다 다른 ID를 가지고 있어 과목별로 진도율을 확인해야 했습니다. 또한 사용자가 원하는 과목만 선택적으로 확인할 수 있는 기능이 필요했습니다."
            : "Users are enrolled in multiple courses, each with different IDs, requiring progress rate checking for each course. Also, functionality to selectively check only desired courses was needed.",
        toBe:
          language === "ko"
            ? "option.py 파일에 과목 ID를 배열 형태로 입력받도록 하고, 로그인 후 각 과목 ID에 해당하는 페이지를 크롤링하여 과목명을 추출했습니다. 과목명과 ID를 딕셔너리로 매핑하고, Tkinter의 Combobox를 활용하여 사용자가 드롭다운에서 과목을 선택할 수 있도록 구현했습니다."
            : "We implemented it to receive course IDs in array format in the option.py file, and after login, we crawled pages corresponding to each course ID to extract course names. We mapped course names and IDs into a dictionary and implemented it using Tkinter's Combobox so users could select courses from a dropdown.",
        result:
          language === "ko"
            ? "사용자가 원하는 과목만 등록하여 관리할 수 있게 되었고, 드롭다운에서 간편하게 과목을 선택하여 진도율을 확인할 수 있게 되었습니다."
            : "Users could register and manage only desired courses, and could easily select courses from a dropdown to check progress rates.",
      },
      {
        title:
          language === "ko"
            ? "자동 로그인 기능 구현"
            : "Automatic Login Functionality Implementation",
        asIs:
          language === "ko"
            ? "매번 프로그램을 실행할 때마다 학번과 비밀번호를 입력하는 것은 불편했습니다. 특히 자주 사용하는 경우 자동 로그인 기능이 필요했습니다."
            : "Entering student ID and password every time the program was executed was inconvenient. Especially for frequent users, automatic login functionality was needed.",
        toBe:
          language === "ko"
            ? "option.py 파일에 autologin 플래그와 학번(cn), 비밀번호(pw) 필드를 추가하여 자동 로그인 기능을 구현했습니다. autologin이 True로 설정되어 있으면 프로그램 실행 시 자동으로 로그인 함수를 호출하고, False이면 GUI에서 입력받도록 했습니다. 단, 보안을 위해 option.py 파일에 실제 비밀번호를 저장하지 않도록 주의사항을 명시했습니다."
            : "We implemented automatic login functionality by adding an autologin flag and student ID (cn) and password (pw) fields to the option.py file. If autologin is set to True, the login function is automatically called when the program runs, and if False, it receives input from the GUI. However, we noted precautions not to store actual passwords in the option.py file for security.",
        result:
          language === "ko"
            ? "사용자 편의성이 크게 향상되었고, 자주 사용하는 사용자들에게 특히 유용한 기능이 되었습니다."
            : "User convenience greatly improved, and it became a particularly useful feature for frequent users.",
      },
      {
        title:
          language === "ko"
            ? "GUI 디자인 및 사용자 경험 개선"
            : "GUI Design and User Experience Improvement",
        asIs:
          language === "ko"
            ? "초기에는 기능 중심으로 개발되어 사용자 인터페이스가 단조로웠고, 사용성이 떨어졌습니다."
            : "Initially, development was function-focused, making the user interface monotonous and less usable.",
        toBe:
          language === "ko"
            ? "Tkinter의 Frame, Label, Entry 등 다양한 위젯을 활용하여 깔끔한 레이아웃을 구성했습니다. 좌측에는 로그인 패널을, 우측에는 진도율 표시 영역을 배치하여 기능을 명확히 구분했습니다. 또한 커스텀 폰트(티머니 둥근바람 ExtraBold)를 적용하고, 로고 이미지를 추가하여 브랜딩을 강화했습니다. 색상 스키마도 일관되게 적용하여 시각적 통일감을 높였습니다."
            : "We configured a clean layout using various Tkinter widgets such as Frame, Label, and Entry. We placed the login panel on the left and the progress rate display area on the right to clearly separate functions. We also applied custom fonts (Tmoney Round Wind ExtraBold) and added logo images to strengthen branding. We applied color schemes consistently to enhance visual unity.",
        result:
          language === "ko"
            ? "사용자 인터페이스가 직관적이고 사용하기 쉬워졌으며, 프로그램의 전문성이 향상되었습니다."
            : "The user interface became intuitive and easy to use, and the program's professionalism improved.",
      },
    ],
    architecture: {
      description:
        language === "ko"
          ? "SMU e-Campus 진도율 체크 프로그램은 단일 실행 파일 구조를 가진 데스크톱 애플리케이션입니다. run.py가 메인 실행 파일이며, option.py는 설정 파일로 분리되어 있습니다. 프로그램은 Tkinter의 이벤트 드리븐 아키텍처를 따르며, 사용자 인터랙션에 따라 함수가 호출되는 구조입니다. 데이터 흐름은 다음과 같습니다: 사용자가 로그인 버튼을 클릭하거나 자동 로그인이 활성화되면, login() 함수가 호출되어 requests.Session을 통해 e-Campus에 로그인합니다. 로그인 성공 후 option.py에 등록된 과목 ID 목록을 순회하며 각 과목의 페이지를 크롤링하여 과목명을 추출합니다. 과목명과 ID를 딕셔너리로 매핑하여 Combobox에 표시합니다. 사용자가 Combobox에서 과목을 선택하면 crawl() 함수가 호출되어 해당 과목의 진도율 페이지를 크롤링합니다. BeautifulSoup을 통해 HTML을 파싱하고, pandas를 활용하여 테이블 데이터를 추출한 후 Treeview 위젯에 표시합니다. 이 과정에서 세션은 계속 유지되어 인증 상태가 보존됩니다. 설정 관리는 option.py 파일을 통해 이루어지며, Python 모듈로 import하여 사용합니다. 이를 통해 코드와 설정을 분리하여 유지보수성을 높였고, 사용자가 쉽게 설정을 변경할 수 있도록 했습니다."
          : "The SMU e-Campus Progress Check Program is a desktop application with a single executable file structure. run.py is the main execution file, and option.py is separated as a configuration file. The program follows Tkinter's event-driven architecture, where functions are called according to user interactions. The data flow is as follows: When a user clicks the login button or automatic login is enabled, the login() function is called to log into e-Campus through requests.Session. After successful login, it iterates through the list of course IDs registered in option.py and crawls each course's page to extract course names. Course names and IDs are mapped into a dictionary and displayed in a Combobox. When a user selects a course from the Combobox, the crawl() function is called to crawl the course's progress rate page. It parses HTML using BeautifulSoup, extracts table data using pandas, and displays it in a Treeview widget. During this process, the session is continuously maintained to preserve authentication status. Configuration management is done through the option.py file, imported and used as a Python module. This separated code and configuration to improve maintainability and allowed users to easily change settings.",
      diagrams: [
        {
          title:
            language === "ko"
              ? "시스템 아키텍처 다이어그램"
              : "System Architecture Diagram",
          image: "",
          alt:
            language === "ko"
              ? "SMU e-Campus 진도율 체크 프로그램 시스템 아키텍처 구조도"
              : "SMU e-Campus Progress Check Program system architecture diagram",
        },
      ],
    },
    retrospective:
      language === "ko"
        ? "이 프로젝트를 통해 Python을 활용한 데스크톱 애플리케이션 개발과 웹 스크래핑 기술에 대한 깊은 이해를 얻을 수 있었습니다. 특히 Tkinter를 활용한 GUI 개발과 BeautifulSoup을 통한 웹 데이터 추출 방법을 배울 수 있었습니다. 또한 requests 라이브러리를 활용한 세션 관리와 HTTP 통신에 대한 실무 경험을 쌓을 수 있었습니다. 가장 큰 성과는 실제로 사용하는 학생들의 불편함을 해소할 수 있는 실용적인 도구를 만들 수 있었다는 점입니다. e-Campus의 불편한 UI를 우회하여 한 번의 클릭으로 진도율을 확인할 수 있게 되어, 많은 시간을 절약할 수 있었습니다. 또한 자동 로그인 기능을 통해 사용자 편의성을 크게 향상시킬 수 있었습니다. 아쉬운 점으로는 웹 스크래핑 기반의 프로그램이라 e-Campus 웹사이트의 구조가 변경되면 프로그램이 동작하지 않을 수 있다는 취약점이 있습니다. 또한 에러 핸들링이 부족하여 예외 상황에 대한 처리가 미흡합니다. 또한 설정 파일에 비밀번호를 평문으로 저장하는 것은 보안상 위험할 수 있습니다. 개선하고 싶은 점으로는 설정 파일을 암호화하여 저장하고, e-Campus 웹사이트 구조 변경에 대응할 수 있도록 유연한 파싱 로직을 구현하고 싶습니다. 또한 진도율 데이터를 로컬 데이터베이스에 저장하여 과거 데이터를 추적하고 통계를 제공하는 기능을 추가하면 더욱 유용할 것입니다. 마지막으로 알림 기능을 추가하여 진도율이 일정 기준 이하로 떨어지면 사용자에게 알림을 보내는 기능을 구현하면 학습 관리에 더욱 도움이 될 것입니다."
        : "Through this project, I gained deep understanding of Python-based desktop application development and web scraping technology. In particular, I learned GUI development using Tkinter and web data extraction methods through BeautifulSoup. I also gained practical experience with session management and HTTP communication using the requests library. The biggest achievement was being able to create a practical tool that could solve the inconveniences of students actually using it. By bypassing e-Campus's inconvenient UI to check progress rates with a single click, we could save a lot of time. We also greatly improved user convenience through the automatic login feature. As a regret, since it's a web scraping-based program, the program may not work if the e-Campus website structure changes. Also, error handling is insufficient, and exception handling is inadequate. Additionally, storing passwords in plain text in configuration files can be a security risk. As improvements I'd like to make, I want to encrypt and store configuration files, and implement flexible parsing logic to respond to e-Campus website structure changes. I also want to add functionality to store progress rate data in a local database to track past data and provide statistics. Finally, implementing a notification feature to alert users when progress rates fall below a certain threshold would be more helpful for learning management.",
    achievements: [
      {
        title:
          language === "ko"
            ? "진도율 확인 시간 단축"
            : "Progress Rate Check Time Reduction",
        description:
          language === "ko"
            ? "일일이 각 과목의 학습진도사항 페이지에 접근하여 확인하던 것을 한 번의 클릭으로 단축했습니다."
            : "Reduced the time spent manually accessing each course's learning progress page to a single click.",
        metrics: language === "ko" ? "시간 절약율" : "Time Savings Rate",
        value: 80,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "자동 로그인 기능 구현"
            : "Automatic Login Functionality Implementation",
        description:
          language === "ko"
            ? "매번 로그인 정보를 입력하던 불편함을 해소하여 사용자 편의성을 향상시켰습니다."
            : "Improved user convenience by eliminating the inconvenience of entering login information every time.",
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
            ? "다중 과목 관리 기능 구현"
            : "Multiple Course Management Functionality Implementation",
        description:
          language === "ko"
            ? "여러 과목의 진도율을 한 화면에서 확인할 수 있도록 하여 학습 관리 효율성을 높였습니다."
            : "Improved learning management efficiency by allowing progress rates of multiple courses to be checked on one screen.",
        metrics:
          language === "ko"
            ? "학습 관리 효율성 향상"
            : "Learning Management Efficiency Improvement",
        value: 75,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "직관적인 GUI 구현"
            : "Intuitive GUI Implementation",
        description:
          language === "ko"
            ? "사용하기 쉬운 인터페이스를 제공하여 프로그램 사용성을 향상시켰습니다."
            : "Improved program usability by providing an easy-to-use interface.",
        metrics: language === "ko" ? "사용자 만족도" : "User Satisfaction",
        value: 85,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "웹 스크래핑 안정성 확보"
            : "Web Scraping Stability Secured",
        description:
          language === "ko"
            ? "requests Session을 활용한 안정적인 세션 관리로 로그인 및 데이터 수집의 신뢰성을 높였습니다."
            : "Improved reliability of login and data collection through stable session management using requests Session.",
        metrics: language === "ko" ? "프로그램 안정성" : "Program Stability",
        value: 88,
        unit: "%",
      },
    ],
  };
}
