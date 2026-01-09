import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getRestForestDetail(language: Language): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "스마트폰을 케이스에 거치하면 NFC로 인식해 타이머가 시작되는 ‘디지털 디톡스’ 앱을 만들었습니다. 사용하지 않은 시간에 따라 가상 식물이 성장하고 포인트를 쌓는 방식으로 기본 동선을 구성했습니다."
        : "Rest Forest is a digital detox app that starts a timer when a phone is docked and detected via NFC. It uses a simple loop: time away from phone → plant growth → points.",
    links: {
      github: "https://github.com/mstagon/Rest_Forest_Client",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "Flutter 기반 크로스플랫폼 앱입니다.\n\n- NFC: 케이스 내부 태그를 인식하면 타이머 시작\n- 타이머/백그라운드: 앱이 백그라운드/종료 상태여도 시간 누적(Flutter Background Service)\n- 게임화: 경과 시간 기반 식물 성장 단계/포인트 누적\n- 상점/저장: 포인트로 아이템 구매, 구매 상태는 Secure Storage에 저장\n- 상태 관리: Provider로 타이머/포인트/구매 상태를 분리"
          : "A Flutter cross-platform app.\n\n- NFC: start timer on tag detection\n- Background: timer continues even when app is backgrounded/closed\n- Gamification: time-based plant growth + points\n- Store/Persistence: purchases stored via secure storage\n- State: Provider-based separation (timer/points/purchases)",
      stats: {
        vision:
          language === "ko"
            ? "하드웨어(NFC)와 앱을 연결해 ‘사용하지 않는 시간’을 측정하고 기록하는 형태로 구현했습니다."
            : "Built a simple system that measures time away from phone via NFC docking and reflects it in the app.",
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
      pageLoadSpeed: { value: 88 },
    },
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
            ? "거치 감지는 NFC로 전환해 동작을 단순화했고, 케이스에 넣는 즉시 타이머가 시작되도록 만들었습니다."
            : "Switched docking detection to NFC and started the timer immediately on detection.",
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
            ? "앱이 백그라운드/종료 상태여도 타이머가 누적되도록 구성하고, 재실행 시 이전 상태를 복원했습니다."
            : "Made the timer accumulate in background/terminated states and restored previous state on relaunch.",
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
        ? "NFC 인식, 백그라운드 타이머처럼 모바일 OS 제약이 큰 영역을 직접 다뤄본 프로젝트였습니다.\n다음에는 백그라운드 동작의 배터리/권한 이슈를 더 보수적으로 다루고, 기록/통계 같은 ‘지속 사용’ 요소를 보강해보고 싶습니다."
        : "This project dealt with platform constraints like NFC and background timers. Next, I’d improve power/permission handling and add retention features like history/statistics.",
    achievements: [
      {
        title:
          language === "ko"
            ? "거치 상태 감지 정확도 향상"
            : "Docking Status Detection Accuracy Improvement",
        description:
          language === "ko"
            ? "NFC 태그 기반 거치 감지 → 타이머 시작 흐름을 구현했습니다."
            : "Implemented NFC-based docking detection that starts the timer.",
      },
      {
        title:
          language === "ko"
            ? "백그라운드 타이머 안정성 개선"
            : "Background Timer Stability Improvement",
        description:
          language === "ko"
            ? "백그라운드/종료 상태에서도 타이머가 누적되도록 구현했습니다."
            : "Kept the timer running in background/closed states.",
      },
      {
        title:
          language === "ko"
            ? "사용자 참여도 향상"
            : "User Engagement Increase",
        description:
          language === "ko"
            ? "타이머 ↔ 식물 성장 ↔ 포인트/상점의 기본 루프를 구성했습니다."
            : "Built the core loop (timer → plant growth → points/store).",
      },
      {
        title:
          language === "ko"
            ? "크로스 플랫폼 호환성 달성"
            : "Cross-platform Compatibility Achievement",
        description:
          language === "ko"
            ? "iOS/Android에서 동작하는 Flutter 앱 형태로 구현했습니다."
            : "Shipped as a Flutter app targeting iOS and Android.",
      },
      {
        title:
          language === "ko"
            ? "앱 성능 최적화"
            : "App Performance Optimization",
        description:
          language === "ko"
            ? "Provider로 타이머/포인트/구매 상태를 분리해 UI 업데이트 범위를 관리했습니다."
            : "Scoped UI updates by separating timer/points/purchases with Provider.",
      },
    ],
  };
}

