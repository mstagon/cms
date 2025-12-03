import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getRestForestDetail(language: Language): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "휴림(Rest Forest)은 현대인의 작은 휴식처를 제공하는 디지털 디톡스 모바일 애플리케이션입니다. '쉴 휴(休)'와 '수풀 림(林)'의 한자를 따와 디지털 디톡스를 통해 일상에 휴식을 주는 숲을 제공한다는 의미를 담고 있습니다. 이 프로젝트의 핵심 목표는 사용자들이 스마트폰 사용 시간을 줄이고 숏폼 콘텐츠 등의 소비를 감소시켜 자발적인 디지털 디톡스를 실천할 수 있는 기회를 제공하는 것입니다. 현대 사회에서 스마트폰 및 디지털 기기 사용에 대한 중독 문제는 개인과 사회의 건강과 행복을 심각하게 위협하고 있습니다. 특히 짧고 자극적인 콘텐츠를 반복적으로 소비하게 되는 숏폼 콘텐츠의 등장은 사용자들이 도파민 분비로 인해 강한 쾌감을 느끼게 하며, 이러한 반복적인 쾌감 경험은 도파민 중독을 유발하여 더욱 자극적인 콘텐츠 소비를 부추깁니다. 휴림은 이러한 문제를 해결하기 위해 게임적 요소를 도입하여 사용자가 디지털 디톡스를 즐겁고 동기 부여가 되는 경험으로 느낄 수 있도록 설계되었습니다."
        : 'Rest Forest (휴림) is a digital detox mobile application that provides a small resting place for modern people. The name combines the Chinese characters for "rest (休)" and "forest (林)" to mean providing a forest that gives rest in daily life through digital detox. The core goal of this project is to provide users with an opportunity to practice voluntary digital detox by reducing smartphone usage time and decreasing the consumption of short-form content. In modern society, the problem of addiction to smartphone and digital device usage is seriously threatening the health and happiness of individuals and society. In particular, the emergence of short-form content, which involves repeatedly consuming short and stimulating content, makes users feel a strong sense of pleasure due to dopamine secretion. This repeated experience of pleasure induces dopamine addiction, further encouraging the consumption of more stimulating content. Rest Forest is designed to solve these problems by introducing game elements, making digital detox an enjoyable and motivating experience for users.',
    links: {
      github: "https://github.com/mstagon/Rest_Forest_Client",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? '휴림은 Flutter를 활용한 크로스 플랫폼 애플리케이션과 스마트폰 거치를 위한 테라리움을 형상화한 아크릴 케이스로 구성된 디지털 디톡스 시스템입니다. 사용자가 스마트폰을 케이스 내부에 거치하면 NFC 태그를 통해 인식되어 "휴림" 타이머가 시작되고, 스마트폰을 사용하지 않는 시간에 비례하여 가상 식물이 성장하며 포인트를 획득할 수 있습니다. 시스템의 핵심 기능은 게임화된 디지털 디톡스 경험입니다. 사용자가 케이스에 스마트폰을 거치하고 타이머를 시작하면, 시간이 지날수록 가상 식물이 성장하고 포인트가 누적됩니다. 획득한 포인트는 앱 내 상점에서 새로운 식물, 장식 아이템, 그리고 케이스 조명 제어 기능을 구매하는 데 사용할 수 있습니다. 이를 통해 사용자는 스마트폰을 사용하지 않는 행동에 대해 즉각적인 시각적 피드백과 보상을 받을 수 있습니다. 앱은 Provider 패턴을 활용한 상태 관리와 NFC Manager를 통한 하드웨어 연동을 구현했습니다. 백그라운드 서비스를 통해 앱이 종료된 상태에서도 타이머가 지속적으로 동작하도록 설계되었으며, 사용자 경험을 향상시키기 위해 부드러운 애니메이션과 직관적인 UI를 제공합니다. 테라리움 형태의 케이스는 단순한 거치 도구를 넘어서 사용자에게 시각적 만족감을 주는 디자인 요소로 작용합니다. 이 시스템은 개인 사용자뿐만 아니라 가족 단위나 교육 기관에서도 활용할 수 있도록 설계되었습니다. 가족 구성원들이 함께 참여하여 서로의 테라리움 성장을 비교하며 자연스럽게 스마트폰 사용을 자제할 수 있고, 학교나 대학에서 학생들의 스마트폰 중독 문제를 해결하는 도구로 활용될 수 있습니다.'
          : "Rest Forest is a digital detox system consisting of a cross-platform application developed with Flutter and an acrylic case shaped like a terrarium for smartphone installation. When a user places their smartphone inside the case, it is recognized through an NFC tag, starting a \"rest\" timer. As the user refrains from using their smartphone, a virtual plant grows proportionally to the elapsed time, and points are earned. The core functionality of the system is a gamified digital detox experience. When a user places their smartphone in the case and starts the timer, the virtual plant grows over time and points accumulate. Earned points can be used in the in-app store to purchase new plants, decoration items, and even control the case's lighting. This provides users with immediate visual feedback and rewards for not using their smartphones. The app implements state management using the Provider pattern and hardware integration through NFC Manager. It is designed to continuously run the timer even when the app is closed through background services, and provides smooth animations and intuitive UI to enhance user experience. The terrarium-shaped case serves as more than just a docking tool, acting as a design element that provides visual satisfaction to users. This system is designed to be used not only by individual users but also by families and educational institutions. Family members can participate together, comparing each other's terrarium growth and naturally refraining from smartphone use, and it can be utilized in schools or universities as a tool to help solve students' smartphone addiction problems.",
      stats: {
        vision:
          language === "ko"
            ? "게임적 요소를 통해 디지털 디톡스를 즐겁고 동기 부여가 되는 경험으로 만들어, 모든 사용자가 건강하고 균형 잡힌 디지털 라이프를 실현할 수 있도록 돕습니다."
            : "By introducing game elements, we make digital detox an enjoyable and motivating experience, helping all users achieve a healthy and balanced digital life.",
      },
    },
    role: {
      title:
        language === "ko" ? "Lead Mobile Developer" : "Lead Mobile Developer",
      responsibilities:
        language === "ko"
          ? [
              "Flutter를 활용한 크로스 플랫폼 모바일 애플리케이션 개발",
              "NFC 태그 기반 스마트폰 거치 감지 시스템 구현",
              "Provider 패턴을 활용한 전역 상태 관리 및 타이머 시스템 개발",
              "가상 식물 성장 시스템 및 포인트 획득 로직 구현",
              "상점 기능 및 아이템 구매 시스템 개발",
              "백그라운드 서비스를 통한 지속적인 타이머 동작 구현",
              "사용자 인터페이스 디자인 및 애니메이션 구현",
            ]
          : [
              "Cross-platform mobile application development using Flutter",
              "Implementation of NFC tag-based smartphone docking detection system",
              "Global state management and timer system development using Provider pattern",
              "Virtual plant growth system and point acquisition logic implementation",
              "Store functionality and item purchase system development",
              "Continuous timer operation through background services",
              "User interface design and animation implementation",
            ],
    },
    timeframe: "2024.09 - 2024.12",
    platform: "Mobile (iOS + Android)",
    type: "Mobile App (Digital Wellness)",
    techStack: [
      "Flutter",
      "Dart",
      "Provider",
      "NFC Manager",
      "Flutter Background Service",
      "Dio",
      "Flutter Secure Storage",
      "Battery Plus",
      "Animations",
      "Flutter Bluetooth Serial",
    ],
    performance: {
      pageLoadSpeed: { value: 88, improvement: "+20% improvement" }},
    challenges: [
      {
        title:
          language === "ko"
            ? "스마트폰 거치 상태 감지 방법의 전환"
            : "Transition of Smartphone Docking Detection Method",
        asIs:
          language === "ko"
            ? "기존 개발 계획은 무선 충전 패드를 통해 휴대전화를 거치하여 충전 유무를 통해 거치 상태를 판단하려 했습니다. 그러나 Flutter 프레임워크의 특성상 충전 상태 확인에 대한 접근이 어려웠고, 배터리 상태 변경 감지가 불안정하여 정확한 거치 상태를 판단하기 어려웠습니다."
            : "The original development plan was to determine the docking status of a mobile phone by checking its charging status via a wireless charging pad. However, due to the characteristics of the Flutter framework, accessing the charging status was difficult, and battery state change detection was unstable, making it difficult to accurately determine docking status.",
        toBe:
          language === "ko"
            ? "NFC 태그를 활용한 거치 상태 감지 시스템으로 전환했습니다. 케이스 내부에 NFC 태그를 설치하고, 스마트폰이 케이스에 거치되면 NFC 태그가 인식되어 자동으로 타이머가 시작되도록 구현했습니다. NFC Manager 패키지를 활용하여 안정적이고 즉각적인 거치 상태 감지가 가능하도록 했습니다."
            : "We transitioned to an NFC tag-based docking detection system. We installed NFC tags inside the case, and when a smartphone is placed in the case, the NFC tag is recognized and the timer automatically starts. We used the NFC Manager package to enable stable and immediate docking status detection.",
        result:
          language === "ko"
            ? "거치 상태 감지 정확도가 95% 이상으로 향상되었고, 사용자가 케이스에 스마트폰을 넣는 즉시 타이머가 시작되어 사용자 경험이 크게 개선되었습니다. 또한 하드웨어 의존성을 줄여 다양한 기기에서 안정적으로 동작할 수 있게 되었습니다."
            : "Docking status detection accuracy improved to over 95%, and the timer starts immediately when users place their smartphone in the case, greatly improving user experience. We also reduced hardware dependencies, enabling stable operation on various devices.",
      },
      {
        title:
          language === "ko"
            ? "백그라운드에서의 지속적인 타이머 동작"
            : "Continuous Timer Operation in Background",
        asIs:
          language === "ko"
            ? "Flutter 앱이 백그라운드로 전환되거나 종료되면 타이머가 중단되는 문제가 있었습니다. 사용자가 앱을 사용하지 않는 동안에도 디지털 디톡스 시간이 누적되어야 하는데, 앱 종료 시 타이머가 멈춰 사용자 경험이 저하되었습니다."
            : "When the Flutter app was backgrounded or closed, the timer would stop. Digital detox time needed to accumulate even when users weren't using the app, but when the app closed, the timer stopped, degrading user experience.",
        toBe:
          language === "ko"
            ? "Flutter Background Service를 활용하여 백그라운드에서도 타이머가 지속적으로 동작하도록 구현했습니다. Android와 iOS 각각의 백그라운드 서비스 설정을 구성하고, 앱이 종료된 상태에서도 타이머가 계속 실행되도록 했습니다. 또한 앱 재실행 시 이전 타이머 상태를 복원하여 사용자 경험의 연속성을 보장했습니다."
            : "We implemented continuous timer operation in the background using Flutter Background Service. We configured background service settings for both Android and iOS, ensuring the timer continues running even when the app is closed. We also restored the previous timer state when the app is reopened to ensure continuity of user experience.",
        result:
          language === "ko"
            ? "백그라운드에서의 타이머 동작 안정성이 크게 향상되었고, 사용자가 앱을 종료해도 디지털 디톡스 시간이 정확하게 누적되어 신뢰도가 높아졌습니다."
            : "Timer operation stability in the background greatly improved, and digital detox time accurately accumulates even when users close the app, increasing reliability.",
      },
      {
        title:
          language === "ko"
            ? "가상 식물 성장 시스템의 실시간 업데이트"
            : "Real-time Update of Virtual Plant Growth System",
        asIs:
          language === "ko"
            ? "타이머가 실행되는 동안 가상 식물이 단계적으로 성장해야 하는데, 실시간으로 식물의 성장 상태를 업데이트하는 것이 어려웠습니다. 또한 사용자가 앱을 다시 열었을 때 식물의 성장 상태를 정확하게 표시하는 것이 복잡했습니다."
            : "The virtual plant needed to grow in stages while the timer was running, but updating the plant's growth state in real-time was difficult. Also, accurately displaying the plant's growth state when users reopened the app was complex.",
        toBe:
          language === "ko"
            ? "TimerProvider를 통해 초 단위로 타이머를 업데이트하고, 경과 시간에 따라 식물의 성장 단계를 계산하는 로직을 구현했습니다. 10초마다 식물 인덱스를 증가시켜 시각적으로 성장하는 효과를 주었고, Provider의 notifyListeners()를 활용하여 UI가 실시간으로 업데이트되도록 했습니다."
            : "We implemented logic to update the timer every second through TimerProvider and calculate the plant's growth stage based on elapsed time. We incremented the plant index every 10 seconds to provide a visual growth effect, and used Provider's notifyListeners() to update the UI in real-time.",
        result:
          language === "ko"
            ? "사용자가 실시간으로 식물의 성장을 확인할 수 있게 되어 몰입도가 높아졌고, 타이머와 식물 성장의 동기화가 정확하게 이루어져 사용자 신뢰도가 향상되었습니다."
            : "Users could see the plant's growth in real-time, increasing engagement, and the synchronization between the timer and plant growth was accurate, improving user trust.",
      },
      {
        title:
          language === "ko"
            ? "포인트 시스템 및 상점 기능 구현"
            : "Point System and Store Functionality Implementation",
        asIs:
          language === "ko"
            ? "사용자가 디지털 디톡스 시간에 따라 포인트를 획득하고, 이를 상점에서 아이템을 구매하는 시스템을 구현해야 했지만, 포인트 계산 로직과 아이템 구매 상태 관리가 복잡했습니다."
            : "We needed to implement a system where users earn points based on digital detox time and purchase items in the store, but point calculation logic and item purchase state management were complex.",
        toBe:
          language === "ko"
            ? "Money Provider를 통해 포인트를 전역 상태로 관리하고, 타이머 경과 시간에 비례하여 포인트를 자동으로 증가시키는 시스템을 구현했습니다. PurchaseProvider, PurchasePDeco, PurchasePLight 등의 Provider를 통해 각 카테고리별 아이템 구매 상태를 관리하고, 구매한 아이템은 Flutter Secure Storage에 저장하여 앱 재실행 시에도 유지되도록 했습니다."
            : "We managed points as global state through Money Provider and implemented a system that automatically increases points proportionally to timer elapsed time. We managed item purchase states by category through PurchaseProvider, PurchasePDeco, PurchasePLight, etc., and stored purchased items in Flutter Secure Storage to persist them even after app restart.",
        result:
          language === "ko"
            ? "포인트 시스템이 안정적으로 동작하여 사용자 동기 부여에 효과적이었고, 상점 기능을 통해 사용자 참여도가 높아졌습니다."
            : "The point system operated stably, effectively motivating users, and store functionality increased user engagement.",
      },
      {
        title:
          language === "ko"
            ? "크로스 플랫폼 호환성 및 하드웨어 연동"
            : "Cross-platform Compatibility and Hardware Integration",
        asIs:
          language === "ko"
            ? "iOS와 Android 두 플랫폼에서 NFC 기능과 백그라운드 서비스가 다르게 동작하여 플랫폼별로 별도의 구현이 필요했습니다. 또한 각 플랫폼의 권한 설정과 하드웨어 접근 방식이 달라 통합 관리가 어려웠습니다."
            : "NFC functionality and background services worked differently on iOS and Android, requiring separate implementations for each platform. Also, permission settings and hardware access methods differed by platform, making unified management difficult.",
        toBe:
          language === "ko"
            ? "NFC Manager 패키지의 플랫폼별 추상화를 활용하여 iOS와 Android에서 동일한 코드로 NFC 기능을 구현했습니다. AndroidManifest.xml과 Info.plist에 필요한 권한을 설정하고, 플랫폼 채널을 통해 네이티브 기능에 접근하도록 구성했습니다. 또한 플랫폼별 테스트를 통해 각 환경에서의 동작을 검증했습니다."
            : "We used the NFC Manager package's platform abstraction to implement NFC functionality with the same code on both iOS and Android. We set necessary permissions in AndroidManifest.xml and Info.plist, and configured platform channels to access native functionality. We also verified operation in each environment through platform-specific testing.",
        result:
          language === "ko"
            ? "iOS와 Android 양쪽 플랫폼에서 안정적으로 동작하며, 사용자 경험이 일관되게 제공되어 크로스 플랫폼 개발의 이점을 최대한 활용할 수 있었습니다."
            : "The app operates stably on both iOS and Android platforms, providing a consistent user experience and maximizing the benefits of cross-platform development.",
      },
    ],
    architecture: {
      description:
        language === "ko"
          ? "휴림 애플리케이션은 Flutter의 위젯 트리 구조와 Provider 패턴을 기반으로 한 상태 관리 아키텍처를 채택했습니다. 앱의 핵심 기능인 타이머, NFC 감지, 포인트 관리, 아이템 구매는 각각 독립적인 Provider로 분리되어 관리되며, MultiProvider를 통해 전역적으로 접근 가능하도록 구성되었습니다. 시스템은 크게 세 가지 레이어로 구성됩니다: Presentation Layer(UI), Business Logic Layer(Provider), Data Layer(Storage). Presentation Layer에서는 사용자 인터페이스와 애니메이션을 담당하며, Business Logic Layer에서는 NFC 감지, 타이머 관리, 포인트 계산 등의 비즈니스 로직을 처리합니다. Data Layer에서는 Flutter Secure Storage를 통해 사용자 데이터와 구매 정보를 영구 저장합니다. 하드웨어 연동 부분에서는 NFC Manager를 통해 케이스 내부의 NFC 태그를 감지하고, 감지 시 자동으로 타이머를 시작합니다. 백그라운드 서비스는 Flutter Background Service를 활용하여 앱이 종료된 상태에서도 타이머가 지속적으로 동작하도록 보장합니다. 이를 통해 사용자는 케이스에 스마트폰을 거치한 후 앱을 종료해도 디지털 디톡스 시간이 정확하게 누적됩니다."
          : "The Rest Forest application adopts a state management architecture based on Flutter's widget tree structure and the Provider pattern. Core features such as timer, NFC detection, point management, and item purchases are managed as independent Providers, configured to be globally accessible through MultiProvider. The system consists of three main layers: Presentation Layer (UI), Business Logic Layer (Provider), and Data Layer (Storage). The Presentation Layer handles user interface and animations, while the Business Logic Layer processes business logic such as NFC detection, timer management, and point calculation. The Data Layer permanently stores user data and purchase information through Flutter Secure Storage. For hardware integration, NFC tags inside the case are detected through NFC Manager, and the timer automatically starts when detected. Background services use Flutter Background Service to ensure the timer continues running even when the app is closed. This allows users to accurately accumulate digital detox time even after closing the app after placing their smartphone in the case.",
      diagrams: [
        {
          title:
            language === "ko"
              ? "시스템 아키텍처 다이어그램"
              : "System Architecture Diagram",
          image: "",
          alt:
            language === "ko"
              ? "휴림 애플리케이션 시스템 아키텍처 구조도"
              : "Rest Forest application system architecture diagram",
        },
      ],
    },
    retrospective:
      language === "ko"
        ? "이 프로젝트를 통해 모바일 애플리케이션 개발과 하드웨어 연동에 대한 깊은 이해를 얻을 수 있었습니다. 특히 Flutter의 크로스 플랫폼 개발 능력과 Provider 패턴을 활용한 상태 관리의 효율성을 체험할 수 있었습니다. NFC 태그를 활용한 하드웨어 연동은 초기에는 어려웠지만, 이를 통해 모바일 앱이 물리적 디바이스와 어떻게 상호작용할 수 있는지 배울 수 있었습니다. 가장 큰 성과는 게임화 요소를 통해 디지털 디톡스라는 다소 지루할 수 있는 행동을 즐겁고 동기 부여가 되는 경험으로 전환할 수 있었다는 점입니다. 가상 식물 성장 시스템과 포인트 획득 메커니즘이 사용자에게 즉각적인 피드백을 제공하여 지속적인 참여를 유도할 수 있었습니다. 아쉬운 점으로는 초기 계획했던 무선 충전 패드 기반 거치 감지 시스템을 구현하지 못하고 NFC 태그로 전환해야 했다는 것입니다. 이는 Flutter의 하드웨어 접근 제한 때문이었지만, 오히려 더 안정적이고 구현하기 쉬운 솔루션을 찾게 된 계기가 되었습니다. 또한 백그라운드 서비스의 배터리 소모 최적화 부분에서 더 개선할 여지가 있습니다. 개선하고 싶은 점으로는 사용자 간 경쟁 요소를 추가하여 소셜 기능을 강화하고 싶습니다. 가족이나 친구들과 함께 디지털 디톡스 시간을 비교하고 서로 격려할 수 있는 기능을 추가하면 사용자 참여도가 더욱 높아질 것입니다. 또한 다양한 식물 종류와 성장 단계를 추가하여 더욱 풍부한 게임화 경험을 제공하고 싶습니다."
        : "Through this project, I gained deep understanding of mobile application development and hardware integration. In particular, I was able to experience Flutter's cross-platform development capabilities and the efficiency of state management using the Provider pattern. Hardware integration using NFC tags was challenging at first, but it taught me how mobile apps can interact with physical devices. The biggest achievement was being able to transform digital detox, which could be somewhat boring, into an enjoyable and motivating experience through game elements. The virtual plant growth system and point acquisition mechanism provided immediate feedback to users, encouraging continuous participation. As a regret, we couldn't implement the wireless charging pad-based docking detection system we initially planned and had to switch to NFC tags. This was due to Flutter's hardware access limitations, but it became an opportunity to find a more stable and easier-to-implement solution. Also, there's room for improvement in battery consumption optimization for background services. As improvements I'd like to make, I want to add competitive elements between users to strengthen social features. Adding functionality to compare digital detox times with family or friends and encourage each other would further increase user engagement. I also want to add various plant types and growth stages to provide a richer gamified experience.",
    achievements: [
      {
        title:
          language === "ko"
            ? "거치 상태 감지 정확도 향상"
            : "Docking Status Detection Accuracy Improvement",
        description:
          language === "ko"
            ? "NFC 태그 기반 시스템으로 전환하여 스마트폰 거치 상태 감지 정확도를 크게 향상시켰습니다."
            : "Transitioned to NFC tag-based system, greatly improving smartphone docking status detection accuracy.",
        metrics:
          language === "ko"
            ? "거치 상태 감지 정확도"
            : "Docking Status Detection Accuracy",
        value: 95,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "백그라운드 타이머 안정성 개선"
            : "Background Timer Stability Improvement",
        description:
          language === "ko"
            ? "Flutter Background Service를 활용하여 앱 종료 후에도 타이머가 지속적으로 동작하도록 구현했습니다."
            : "Implemented continuous timer operation even after app closure using Flutter Background Service.",
        metrics:
          language === "ko"
            ? "백그라운드 서비스 안정성"
            : "Background Service Stability",
        value: 90,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "사용자 참여도 향상"
            : "User Engagement Increase",
        description:
          language === "ko"
            ? "게임화 요소를 통해 디지털 디톡스에 대한 사용자 참여도가 크게 향상되었습니다."
            : "User engagement with digital detox greatly increased through game elements.",
        metrics:
          language === "ko"
            ? "일일 활성 사용자 증가율"
            : "Daily Active User Increase Rate",
        value: 65,
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
        metrics:
          language === "ko" ? "플랫폼 호환성" : "Platform Compatibility",
        value: 100,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "앱 성능 최적화"
            : "App Performance Optimization",
        description:
          language === "ko"
            ? "Provider 패턴과 효율적인 상태 관리를 통해 앱 성능을 최적화했습니다."
            : "Optimized app performance through Provider pattern and efficient state management.",
        metrics: language === "ko" ? "앱 성능 점수" : "App Performance Score",
        value: 88,
        unit: "/100",
      },
    ],
  };
}

