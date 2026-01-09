import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getTeamoDetail(language: Language = "ko"): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "팀원 모집/협업 서비스를 만들고, 배포·운영까지 포함해 “서비스 형태”로 구성했습니다. Docker Compose 기반 멀티 컨테이너 운영, Nginx 프록시(WebSocket 포함), GitHub Actions 기반 배포 자동화까지 직접 연결했습니다."
        : "Teamo is a team recruitment/collaboration web service with a self-managed deployment setup on a Raspberry Pi. It includes a GitHub Actions → Docker Buildx (multi-arch) → Docker Hub → SSH deploy (docker compose) pipeline, plus Nginx reverse proxy and WebSocket proxy configuration.",
    links: {
      github:
        "https://github.com/mstagon/Teamo_Infra, https://github.com/mstagon/Teamo_FrontEnd",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "Next.js(프론트) + NestJS(백엔드) 기반의 팀원 모집 서비스입니다.\n\n- 사용자 기능: 게시글 기반 모집, 실시간 채팅(Socket.IO), 기술 스택/위치 기반 탐색\n- 데이터: PostgreSQL(관계형) + MongoDB(채팅) 분리 운영\n- 인증: JWT + 카카오 소셜 로그인\n\n운영/배포 관점\n- 컨테이너 운영: Docker Compose로 FE/BE/DB/Nginx를 분리 실행, health check로 기동 순서/의존성 제어\n- 프록시: Nginx로 단일 도메인에서 API/정적/WebSocket 라우팅(Socket.IO 업그레이드/타임아웃 포함)\n- 배포 자동화: GitHub Actions → Docker Buildx(멀티 아키텍처) → Docker Hub → SSH 배포(docker compose)"
          : "A team recruitment service built with Next.js (frontend) and NestJS (backend).\n\n- Features: recruitment posts, real-time chat (Socket.IO), tech-stack/location exploration.\n- Data: dual DB (PostgreSQL for relational data, MongoDB for chat messages).\n- Auth: JWT + Kakao social login.\n- Infra: Docker Compose runs FE/BE/DB/Nginx with health-check based dependencies.\n- Networking: Nginx reverse proxy routes static/API/WebSocket under a single domain.\n- Deploy: GitHub Actions builds multi-arch images and deploys to a Raspberry Pi via SSH + docker compose.",
      stats: {
        vision:
          language === "ko"
            ? "기능 구현뿐 아니라 배포/운영(컨테이너, 프록시, CI/CD)을 포함한 서비스 형태로 구성했습니다."
            : "Built it as a service including deployment/operations (containers, proxy, CI/CD), not only app features.",
      },
    },
    role: {
      title:
        language === "ko"
          ? "Full-stack Developer & DevOps Engineer"
          : "Full-stack Developer & DevOps Engineer",
      responsibilities:
        language === "ko"
          ? [
              "Next.js 기반 프론트엔드 애플리케이션 개발 및 최적화",
              "NestJS 기반 백엔드 API 서버 개발 및 데이터베이스 설계",
              "Docker Compose를 활용한 멀티 컨테이너 인프라 구성",
              "GitHub Actions를 통한 CI/CD 파이프라인 구축 및 무중단 자동 배포 시스템 구현",
              "Nginx 리버스 프록시 설정 및 WebSocket 프록시 구성",
              "라즈베리파이 서버 구성 및 운영",
              "Docker 이미지 멀티 아키텍처 빌드 및 최적화",
              "Health check를 통한 서비스 의존성 관리 및 안정성 확보",
            ]
          : [
              "Next.js-based frontend application development and optimization",
              "NestJS-based backend API server development and database design",
              "Multi-container infrastructure configuration using Docker Compose",
              "CI/CD pipeline construction and zero-downtime automated deployment system implementation through GitHub Actions",
              "Nginx reverse proxy configuration and WebSocket proxy setup",
              "Raspberry Pi server configuration and operation",
              "Docker image multi-architecture builds and optimization",
              "Service dependency management and stability assurance through health checks",
            ],
    },
    timeframe: "2024.06 - 2024.12",
    platform: "Web (Responsive)",
    type: "Web Application (Team Recruitment Platform)",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Docker Compose",
      "Nginx",
      "GitHub Actions",
      "Socket.IO",
      "Prisma",
      "Raspberry Pi",
    ],
    performance: {
      pageLoadSpeed: { value: 92 },
    },
    challenges: [
      {
        title:
          language === "ko"
            ? "라즈베리파이 ARM 아키텍처를 위한 멀티 아키텍처 Docker 이미지 빌드"
            : "Multi-architecture Docker Image Builds for Raspberry Pi ARM Architecture",
        asIs:
          language === "ko"
            ? "라즈베리파이는 ARM 아키텍처를 사용하는데, 일반적인 CI/CD 파이프라인은 x86_64 아키텍처를 기준으로 빌드됩니다. 단일 아키텍처로 빌드된 이미지는 라즈베리파이에서 실행할 수 없었고, 로컬에서 직접 빌드하는 것은 시간이 오래 걸리고 자동화가 어려웠습니다."
            : "Raspberry Pi uses ARM architecture, but typical CI/CD pipelines build for x86_64 architecture. Images built for a single architecture could not run on Raspberry Pi, and building directly on the local machine was time-consuming and difficult to automate.",
        toBe:
          language === "ko"
            ? "Docker Buildx를 활용하여 멀티 아키텍처 빌드를 구현했습니다. GitHub Actions 워크플로우에서 QEMU 에뮬레이션을 설정하고, Buildx를 통해 linux/amd64와 linux/arm64 두 가지 아키텍처로 동시에 이미지를 빌드하도록 구성했습니다. 빌드된 이미지는 Docker Hub에 푸시되며, 라즈베리파이 서버에서는 자동으로 ARM 아키텍처 이미지를 pull하여 실행합니다. 또한 Docker 레이어 캐싱을 활용하여 빌드 시간을 단축했습니다."
            : "We implemented multi-architecture builds using Docker Buildx. In the GitHub Actions workflow, we set up QEMU emulation and configured Buildx to build images simultaneously for both linux/amd64 and linux/arm64 architectures. Built images are pushed to Docker Hub, and the Raspberry Pi server automatically pulls and runs the ARM architecture image. We also utilized Docker layer caching to reduce build time.",
        result:
          language === "ko"
            ? "라즈베리파이(ARM) 환경에서도 CI에서 빌드한 이미지를 그대로 배포할 수 있게 멀티 아키텍처 빌드 체계를 구성했습니다."
            : "Enabled deploying CI-built images to Raspberry Pi (ARM) via multi-architecture builds.",
      },
      {
        title:
          language === "ko"
            ? "무중단 자동 배포 시스템 구현"
            : "Zero-downtime Automated Deployment System Implementation",
        asIs:
          language === "ko"
            ? "코드 변경 시마다 수동으로 서버에 접속하여 배포를 진행해야 했고, 배포 중에는 서비스가 중단되어 사용자 경험이 저하되었습니다. 또한 배포 과정에서 실수가 발생할 가능성이 높았습니다."
            : "We had to manually connect to the server for each code change to deploy, and services were interrupted during deployment, degrading user experience. There was also a high possibility of mistakes during the deployment process.",
        toBe:
          language === "ko"
            ? "GitHub Actions를 활용한 완전 자동화된 배포 파이프라인을 구축했습니다. 프론트엔드나 백엔드 레포지토리에 코드가 푸시되면 repository_dispatch 이벤트를 통해 인프라 레포지토리의 워크플로우가 트리거됩니다. 워크플로우는 최신 코드를 빌드하여 Docker 이미지를 생성하고 Docker Hub에 푸시한 후, SSH를 통해 라즈베리파이 서버에 접속하여 최신 이미지를 pull하고 docker compose down/up을 실행합니다. docker compose의 restart: always 정책과 health check를 통해 서비스가 자동으로 재시작되며, Nginx가 새로운 컨테이너로 트래픽을 라우팅하므로 무중단 배포가 가능합니다."
            : "We built a fully automated deployment pipeline using GitHub Actions. When code is pushed to the frontend or backend repository, the infrastructure repository's workflow is triggered through a repository_dispatch event. The workflow builds the latest code, creates Docker images, pushes them to Docker Hub, then connects to the Raspberry Pi server via SSH to pull the latest images and execute docker compose down/up. With docker compose's restart: always policy and health checks, services automatically restart, and Nginx routes traffic to new containers, enabling zero-downtime deployment.",
        result:
          language === "ko"
            ? "코드 푸시 이후 이미지 빌드/푸시/배포까지 자동으로 이어지는 흐름을 만들었습니다."
            : "Automated build → push → deploy from a code push.",
      },
      {
        title:
          language === "ko"
            ? "Nginx를 통한 WebSocket 프록시 및 라우팅 구성"
            : "WebSocket Proxy and Routing Configuration through Nginx",
        asIs:
          language === "ko"
            ? "프론트엔드와 백엔드가 각각 다른 포트에서 실행되며, Socket.IO를 통한 실시간 채팅 기능이 필요했습니다. 브라우저에서는 단일 도메인으로 접근해야 하는데, WebSocket 연결을 프록시하는 것이 복잡했습니다."
            : "Frontend and backend ran on different ports, and real-time chat functionality through Socket.IO was needed. Browsers needed to access through a single domain, but proxying WebSocket connections was complex.",
        toBe:
          language === "ko"
            ? "Nginx를 리버스 프록시로 구성하여 모든 요청을 단일 포트(80)로 받아 적절한 서비스로 라우팅하도록 설정했습니다. 일반 HTTP 요청은 프론트엔드나 백엔드로 프록시하고, /api/socket.io/ 경로로 들어오는 요청은 WebSocket 업그레이드를 지원하도록 설정했습니다. proxy_http_version 1.1, Upgrade 헤더, Connection 헤더를 적절히 설정하고, proxy_read_timeout과 proxy_send_timeout을 600초로 설정하여 긴 연결을 유지할 수 있도록 했습니다. 또한 CORS 헤더를 추가하여 크로스 오리진 요청을 처리했습니다."
            : "We configured Nginx as a reverse proxy to receive all requests on a single port (80) and route them to appropriate services. General HTTP requests are proxied to frontend or backend, and requests coming to /api/socket.io/ are configured to support WebSocket upgrades. We appropriately set proxy_http_version 1.1, Upgrade header, and Connection header, and set proxy_read_timeout and proxy_send_timeout to 600 seconds to maintain long connections. We also added CORS headers to handle cross-origin requests.",
        result:
          language === "ko"
            ? "단일 도메인에서 FE/BE/WebSocket 요청을 분기하고, Socket.IO 업그레이드/타임아웃 설정을 포함해 프록시 설정을 정리했습니다."
            : "Routed FE/BE/WebSocket under one domain and configured Socket.IO upgrade/timeout proxy settings.",
      },
      {
        title:
          language === "ko"
            ? "Health Check를 통한 서비스 의존성 관리"
            : "Service Dependency Management through Health Checks",
        asIs:
          language === "ko"
            ? "Docker Compose에서 서비스 간 의존성을 단순히 depends_on으로만 관리하면, 데이터베이스가 완전히 준비되기 전에 애플리케이션이 시작되어 연결 오류가 발생할 수 있었습니다."
            : "Managing dependencies between services in Docker Compose only with depends_on could cause connection errors if applications started before databases were fully ready.",
        toBe:
          language === "ko"
            ? "각 서비스에 health check를 추가하고, depends_on에서 condition: service_healthy를 사용하도록 구성했습니다. PostgreSQL은 pg_isready 명령어로, MongoDB는 mongosh ping 명령어로 헬스 체크를 수행하며, 5초 간격으로 최대 20번 재시도합니다. 백엔드 서비스는 데이터베이스들이 healthy 상태가 된 후에만 시작되도록 설정했습니다. 또한 MongoDB의 경우 Replica Set 초기화를 위한 별도의 setup 컨테이너를 두어 순차적으로 초기화되도록 구성했습니다."
            : "We added health checks to each service and configured depends_on to use condition: service_healthy. PostgreSQL performs health checks with the pg_isready command, MongoDB with the mongosh ping command, retrying up to 20 times at 5-second intervals. Backend services are configured to start only after databases are in healthy status. For MongoDB, we also configured a separate setup container for Replica Set initialization to initialize sequentially.",
        result:
          language === "ko"
            ? "컨테이너 시작 순서를 health check 기준으로 제어해 DB 준비 전 애플리케이션 기동 문제를 줄였습니다."
            : "Reduced startup-order issues by gating service start on health checks.",
      },
      {
        title:
          language === "ko"
            ? "Git Submodule을 활용한 멀티 레포지토리 관리"
            : "Multi-repository Management using Git Submodules",
        asIs:
          language === "ko"
            ? "프론트엔드, 백엔드, 인프라가 각각 별도의 레포지토리로 관리되는데, CI/CD 파이프라인에서 최신 코드를 빌드하려면 세 레포지토리를 모두 참조해야 했습니다. 각 레포지토리를 개별적으로 체크아웃하는 것은 복잡하고 관리가 어려웠습니다."
            : "Frontend, backend, and infrastructure were each managed in separate repositories, but the CI/CD pipeline needed to reference all three repositories to build the latest code. Checking out each repository individually was complex and difficult to manage.",
        toBe:
          language === "ko"
            ? "Git Submodule을 활용하여 프론트엔드와 백엔드 레포지토리를 인프라 레포지토리의 서브모듈로 추가했습니다. GitHub Actions 워크플로우에서 submodules: recursive 옵션을 사용하여 서브모듈을 자동으로 동기화하고 업데이트합니다. --remote 옵션을 사용하여 서브모듈의 최신 커밋을 가져오도록 설정했으며, PAT(Personal Access Token)를 사용하여 프라이빗 레포지토리에도 접근할 수 있도록 구성했습니다."
            : "We used Git Submodules to add frontend and backend repositories as submodules of the infrastructure repository. The GitHub Actions workflow uses the submodules: recursive option to automatically synchronize and update submodules. We configured it to use the --remote option to fetch the latest commits of submodules, and used PAT (Personal Access Token) to access private repositories.",
        result:
          language === "ko"
            ? "인프라 레포지토리에서 서브모듈로 FE/BE를 함께 참조하도록 구성해, 배포 워크플로우에서 최신 코드를 가져오는 방식을 정리했습니다."
            : "Used submodules so the infra repo can reference FE/BE in a unified deploy workflow.",
      },
    ],
    architecture: {
      description:
        language === "ko"
          ? "Teamo의 인프라 아키텍처는 Docker Compose를 기반으로 한 마이크로서비스 스타일의 컨테이너 오케스트레이션 구조입니다. 모든 서비스는 독립적인 Docker 컨테이너로 실행되며, Docker 네트워크를 통해 서로 통신합니다. 프론트엔드는 Next.js standalone 빌드를 활용하여 최소한의 의존성만 포함한 경량 이미지로 구성되었으며, 백엔드는 NestJS 애플리케이션과 Prisma ORM을 포함한 이미지로 구성되었습니다. 데이터베이스 계층에서는 PostgreSQL과 MongoDB를 이중으로 운영합니다. PostgreSQL은 관계형 데이터를 저장하며, Prisma를 통해 스키마를 관리하고 마이그레이션을 자동으로 실행합니다. MongoDB는 Replica Set으로 구성되어 실시간 채팅 메시지와 같은 비구조화된 데이터를 저장합니다. 각 데이터베이스는 볼륨을 통해 데이터를 영구 저장하며, health check를 통해 서비스 준비 상태를 확인합니다. 네트워크 계층에서는 Nginx가 리버스 프록시 역할을 수행합니다. 외부 요청은 모두 Nginx를 통해 들어오며, 경로에 따라 프론트엔드(/) 또는 백엔드(/api/)로 라우팅됩니다. WebSocket 연결(/api/socket.io/)은 특별히 처리되어 백엔드의 Socket.IO 서버로 프록시됩니다. Nginx 설정은 읽기 전용 볼륨으로 마운트되어 런타임에 변경할 수 없도록 보안을 강화했습니다. 배포 아키텍처는 GitHub Actions를 중심으로 구성됩니다. 프론트엔드나 백엔드 레포지토리에 코드가 푸시되면, repository_dispatch 이벤트를 통해 인프라 레포지토리의 워크플로우가 트리거됩니다. 워크플로우는 서브모듈을 통해 최신 코드를 가져오고, Docker Buildx로 멀티 아키텍처 이미지를 빌드한 후 Docker Hub에 푸시합니다. 이후 SSH를 통해 라즈베리파이 서버에 접속하여 최신 이미지를 pull하고 docker compose를 통해 서비스를 재배포합니다. 이 과정은 완전히 자동화되어 있으며, 무중단 배포를 보장합니다."
          : "Teamo's infrastructure architecture is a container orchestration structure in a microservices style based on Docker Compose. All services run as independent Docker containers and communicate with each other through Docker networks. The frontend is configured as a lightweight image containing only minimal dependencies using Next.js standalone build, and the backend is configured as an image containing the NestJS application and Prisma ORM. At the database layer, PostgreSQL and MongoDB are operated in dual configuration. PostgreSQL stores relational data, manages schemas through Prisma, and automatically runs migrations. MongoDB is configured as a Replica Set to store unstructured data such as real-time chat messages. Each database permanently stores data through volumes and checks service readiness through health checks. At the network layer, Nginx serves as a reverse proxy. All external requests come through Nginx and are routed to frontend (/) or backend (/api/) according to the path. WebSocket connections (/api/socket.io/) are specially handled and proxied to the backend's Socket.IO server. Nginx configuration is mounted as a read-only volume to enhance security by preventing runtime changes. The deployment architecture is centered around GitHub Actions. When code is pushed to the frontend or backend repository, the infrastructure repository's workflow is triggered through a repository_dispatch event. The workflow fetches the latest code through submodules, builds multi-architecture images using Docker Buildx, and pushes them to Docker Hub. Then, it connects to the Raspberry Pi server via SSH to pull the latest images and redeploy services using docker compose. This process is fully automated and ensures zero-downtime deployment.",
      diagrams: [
        {
          title:
            language === "ko"
              ? "시스템 아키텍처 다이어그램"
              : "System Architecture Diagram",
          image: "",
          alt:
            language === "ko"
              ? "Teamo 애플리케이션 시스템 아키텍처 및 DevOps 파이프라인 구조도"
              : "Teamo application system architecture and DevOps pipeline structure diagram",
        },
      ],
    },
    retrospective:
      language === "ko"
        ? "기능 개발뿐 아니라 배포/운영까지 포함해 끝까지 연결한 프로젝트였습니다. \n운영 관점에서 다음 단계는 모니터링/로그 수집, 백업/복구, 배포 전략(롤백 포함)을 더 구체화하는 것입니다."
        : "Beyond app features (web/chat), I connected containerization, reverse proxy, and automated deployment to make it deployable end-to-end.\nOperationally, monitoring/logging/backup are the gaps; next steps would be metrics + alerting and automated DB backups.",
    achievements: [
      {
        title:
          language === "ko"
            ? "완전 자동화된 CI/CD 파이프라인 구축"
            : "Fully Automated CI/CD Pipeline Construction",
        description:
          language === "ko"
            ? "코드 푸시 → 이미지 빌드/푸시 → 서버 배포까지 자동으로 이어지는 파이프라인을 구성했습니다."
            : "Built an automated pipeline (build → push → deploy) with GitHub Actions.",
      },
      {
        title:
          language === "ko"
            ? "무중단 배포 시스템 구현"
            : "Zero-downtime Deployment System Implementation",
        description:
          language === "ko"
            ? "Docker Compose + health check로 기동 순서/재시작 정책을 정리했습니다."
            : "Managed restarts and dependency order with Docker Compose and health checks.",
      },
      {
        title:
          language === "ko"
            ? "멀티 아키텍처 Docker 이미지 빌드"
            : "Multi-architecture Docker Image Builds",
        description:
          language === "ko"
            ? "Docker Buildx로 linux/amd64, linux/arm64 멀티 아키텍처 이미지를 빌드했습니다."
            : "Built multi-arch images (linux/amd64, linux/arm64) with Docker Buildx.",
      },
      {
        title:
          language === "ko"
            ? "리버스 프록시 및 WebSocket 프록시 구성"
            : "Reverse Proxy and WebSocket Proxy Configuration",
        description:
          language === "ko"
            ? "Nginx 리버스 프록시로 API/정적/웹소켓을 단일 도메인 아래에서 라우팅했습니다."
            : "Routed API/static/WebSocket under a single domain via Nginx reverse proxy.",
      },
      {
        title:
          language === "ko"
            ? "Health Check 기반 서비스 의존성 관리"
            : "Health Check-based Service Dependency Management",
        description:
          language === "ko"
            ? "health check + depends_on 조건으로 서비스 시작 순서를 제어했습니다."
            : "Controlled startup order via health checks and depends_on conditions.",
      },
    ],
  };
}
