import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export function getTeamoDetail(language: Language = "ko"): ProjectDetail {
  return {
    objective:
      language === "ko"
        ? "Teamo는 개발자들이 프로젝트 팀원을 모집하고 협업할 수 있는 플랫폼입니다. 이 프로젝트의 핵심 목표는 단순한 웹 애플리케이션 개발을 넘어서, 실제 프로덕션 환경에서 안정적으로 운영될 수 있는 완전한 DevOps 파이프라인을 구축하는 것이었습니다. 특히 클라우드 서비스를 사용하지 않고 직접 물리 서버(라즈베리파이)를 구성하여 인프라를 관리하고, 무중단 자동 배포 시스템을 구현하는 것이 주요 목표였습니다. 이 프로젝트를 통해 단순히 코드를 작성하는 것을 넘어서, Docker 컨테이너화, CI/CD 파이프라인 구축, 리버스 프록시 설정, 데이터베이스 관리, 모니터링 등 전체적인 인프라스트럭처 설계와 운영에 대한 실무 경험을 쌓고자 했습니다. 또한 프론트엔드와 백엔드를 모두 직접 배포하고 관리함으로써 풀스택 개발자로서의 역량을 강화하고, 실제 서비스 운영에 필요한 DevOps 지식을 습득하는 것을 목표로 했습니다. 궁극적으로 Teamo는 개발자 커뮤니티가 더 쉽게 협업할 수 있도록 돕는 플랫폼이 되고, 동시에 이 프로젝트를 통해 구축한 인프라와 DevOps 경험은 향후 더 큰 규모의 프로젝트에 적용할 수 있는 기반이 되는 것을 비전으로 합니다."
        : "Teamo is a platform where developers can recruit team members for projects and collaborate. The core goal of this project was not just to develop a simple web application, but to build a complete DevOps pipeline that can operate stably in an actual production environment. In particular, the main objectives were to configure infrastructure by directly setting up a physical server (Raspberry Pi) without using cloud services, and to implement a zero-downtime automated deployment system. Through this project, we aimed to gain practical experience in overall infrastructure design and operations beyond simply writing code, including Docker containerization, CI/CD pipeline construction, reverse proxy configuration, database management, and monitoring. We also aimed to strengthen our capabilities as full-stack developers by directly deploying and managing both frontend and backend, and to acquire DevOps knowledge necessary for actual service operations. Ultimately, Teamo's vision is to become a platform that helps developer communities collaborate more easily, while the infrastructure and DevOps experience built through this project serves as a foundation that can be applied to larger-scale projects in the future.",
    links: {
      github:
        "https://github.com/mstagon/Teamo_Infra, https://github.com/mstagon/Teamo_FrontEnd",
      site: undefined,
      docs: undefined,
    },
    overview: {
      description:
        language === "ko"
          ? "Teamo는 Next.js 기반의 프론트엔드와 NestJS 기반의 백엔드로 구성된 팀원 모집 플랫폼입니다. 사용자들은 프로젝트 팀원을 모집하거나 팀에 참여할 수 있으며, 실시간 채팅, 기술 스택 매칭, 위치 기반 검색 등의 기능을 제공합니다. 프론트엔드는 Next.js 15의 App Router를 활용하여 SSR과 CSR을 적절히 혼합한 하이브리드 렌더링을 구현했으며, Tailwind CSS를 활용한 반응형 디자인으로 웹과 모바일 환경 모두에서 최적의 사용자 경험을 제공합니다. 백엔드는 NestJS 프레임워크를 기반으로 구축되었으며, PostgreSQL과 MongoDB를 이중 데이터베이스로 활용합니다. PostgreSQL은 사용자 정보, 게시글, 인증 등 관계형 데이터를 관리하고, MongoDB는 실시간 채팅 메시지와 같은 비구조화된 데이터를 저장합니다. Socket.IO를 활용한 실시간 채팅 기능을 제공하며, JWT 기반 인증 시스템과 카카오 소셜 로그인을 지원합니다. 인프라 측면에서는 Docker Compose를 활용하여 모든 서비스를 컨테이너화했습니다. 프론트엔드, 백엔드, PostgreSQL, MongoDB, Nginx 리버스 프록시가 각각 독립적인 컨테이너로 실행되며, 서비스 간 의존성은 health check를 통해 관리됩니다. Nginx는 리버스 프록시 역할을 하며, 프론트엔드 정적 파일 서빙, 백엔드 API 라우팅, WebSocket 연결 프록시를 담당합니다. 특히 Socket.IO 연결을 위한 WebSocket 업그레이드와 긴 타임아웃 설정을 통해 실시간 통신의 안정성을 확보했습니다. 무중단 자동 배포 시스템은 GitHub Actions를 통해 구현되었습니다. 프론트엔드나 백엔드 레포지토리에 코드가 푸시되면, repository_dispatch 이벤트를 통해 인프라 레포지토리의 워크플로우가 트리거됩니다. 워크플로우는 Docker Buildx를 활용하여 멀티 아키텍처(linux/amd64, linux/arm64) 이미지를 빌드하고 Docker Hub에 푸시합니다. 이후 SSH를 통해 라즈베리파이 서버에 접속하여 최신 이미지를 pull하고, docker compose down/up을 통해 무중단으로 서비스를 재배포합니다. 이 과정에서 서브모듈을 활용하여 프론트엔드와 백엔드 레포지토리를 인프라 레포지토리에 통합 관리했습니다."
          : "Teamo is a team recruitment platform consisting of a Next.js-based frontend and a NestJS-based backend. Users can recruit team members for projects or join teams, with features such as real-time chat, tech stack matching, and location-based search. The frontend implements hybrid rendering that appropriately combines SSR and CSR using Next.js 15's App Router, and provides optimal user experience on both web and mobile environments through responsive design using Tailwind CSS. The backend is built on the NestJS framework and utilizes PostgreSQL and MongoDB as dual databases. PostgreSQL manages relational data such as user information, posts, and authentication, while MongoDB stores unstructured data such as real-time chat messages. It provides real-time chat functionality using Socket.IO, and supports JWT-based authentication system and Kakao social login. On the infrastructure side, all services are containerized using Docker Compose. Frontend, backend, PostgreSQL, MongoDB, and Nginx reverse proxy each run as independent containers, and dependencies between services are managed through health checks. Nginx serves as a reverse proxy, handling frontend static file serving, backend API routing, and WebSocket connection proxying. In particular, WebSocket upgrade and long timeout settings for Socket.IO connections ensure stability of real-time communication. The zero-downtime automated deployment system is implemented through GitHub Actions. When code is pushed to the frontend or backend repository, the infrastructure repository's workflow is triggered through a repository_dispatch event. The workflow builds the latest code using Docker Buildx to create multi-architecture (linux/amd64, linux/arm64) images and pushes them to Docker Hub. Then, it connects to the Raspberry Pi server via SSH to pull the latest images and redeploy services with zero downtime using docker compose down/up. In this process, submodules were used to integrate and manage the frontend and backend repositories within the infrastructure repository.",
      stats: {
        vision:
          language === "ko"
            ? "개발자 커뮤니티가 더 쉽게 협업할 수 있도록 돕는 플랫폼이 되고, 구축한 인프라와 DevOps 경험은 향후 더 큰 규모의 프로젝트에 적용할 수 있는 기반이 됩니다."
            : "Become a platform that helps developer communities collaborate more easily, and the infrastructure and DevOps experience built serves as a foundation that can be applied to larger-scale projects in the future.",
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
      pageLoadSpeed: { value: 92, improvement: "+30% improvement" }},
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
            ? "라즈베리파이 서버에서도 동일한 이미지를 사용할 수 있게 되었고, CI/CD 파이프라인을 통해 자동으로 멀티 아키텍처 이미지를 빌드하고 배포할 수 있게 되었습니다. 빌드 시간도 캐싱을 통해 약 40% 단축되었습니다."
            : "The same images could now be used on the Raspberry Pi server, and multi-architecture images could be automatically built and deployed through the CI/CD pipeline. Build time was also reduced by approximately 40% through caching.",
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
            ? "배포 시간이 수동 배포 대비 80% 단축되었고, 배포 중 서비스 중단 없이 새 버전으로 업데이트할 수 있게 되었습니다. 또한 배포 과정의 자동화로 인한 실수 가능성도 크게 감소했습니다."
            : "Deployment time was reduced by 80% compared to manual deployment, and services could be updated to new versions without interruption. The possibility of mistakes also significantly decreased due to automation of the deployment process.",
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
            ? "단일 도메인으로 모든 서비스에 접근할 수 있게 되었고, WebSocket 연결이 안정적으로 작동하여 실시간 채팅 기능이 원활하게 동작합니다. 또한 SSL/TLS 설정을 추가하여 HTTPS를 지원할 수 있는 구조로 확장 가능합니다."
            : "All services could be accessed through a single domain, and WebSocket connections work stably, enabling smooth real-time chat functionality. The structure is also extensible to support HTTPS by adding SSL/TLS configuration.",
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
            ? "서비스 시작 순서가 안정적으로 관리되어 데이터베이스 연결 오류가 발생하지 않게 되었고, 컨테이너 재시작 시에도 안정적으로 서비스가 복구됩니다."
            : "Service startup order is managed stably, preventing database connection errors, and services recover stably even when containers restart.",
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
            ? "단일 레포지토리에서 모든 코드를 참조할 수 있게 되어 CI/CD 파이프라인이 단순해졌고, 서브모듈의 버전 관리도 체계적으로 이루어질 수 있게 되었습니다."
            : "All code could be referenced from a single repository, simplifying the CI/CD pipeline, and submodule version management could be done systematically.",
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
        ? "이 프로젝트를 통해 단순한 웹 개발을 넘어서 실제 프로덕션 환경에서 필요한 인프라 설계와 DevOps 실무 경험을 쌓을 수 있었습니다. 특히 Docker를 활용한 컨테이너화, CI/CD 파이프라인 구축, 리버스 프록시 설정 등 실제 서비스 운영에 필요한 기술들을 직접 구현해볼 수 있어 매우 유익했습니다. 라즈베리파이를 서버로 사용하면서 리소스 제약 상황에서도 안정적인 서비스를 운영하는 방법을 배울 수 있었고, 멀티 아키텍처 빌드를 통해 다양한 플랫폼을 지원하는 방법도 익힐 수 있었습니다. 가장 큰 성과는 완전 자동화된 배포 파이프라인을 구축한 것입니다. 코드 푸시만으로 자동으로 빌드, 테스트, 배포가 이루어지며, 무중단으로 서비스가 업데이트되는 시스템을 직접 구현할 수 있었습니다. 또한 Git Submodule을 활용한 멀티 레포지토리 관리와 Health Check를 통한 서비스 의존성 관리 등 실제 프로덕션 환경에서 사용되는 패턴들을 적용해볼 수 있었습니다. 아쉬운 점으로는 모니터링과 로깅 시스템이 부족하다는 것입니다. 현재는 기본적인 로그만 확인할 수 있는데, Prometheus와 Grafana를 도입하여 메트릭을 수집하고 대시보드를 구성했다면 더 나은 운영이 가능했을 것입니다. 또한 백업 전략도 수동으로만 이루어지고 있어, 자동화된 백업 시스템을 구축했다면 데이터 안정성을 더욱 향상시킬 수 있었을 것입니다. 개선하고 싶은 점으로는 Kubernetes를 도입하여 더욱 확장 가능한 인프라를 구축하고 싶습니다. 또한 Blue-Green 배포나 Canary 배포 같은 고급 배포 전략을 적용하여 더욱 안전한 배포를 하고 싶습니다. 마지막으로 CI/CD 파이프라인에 자동화된 테스트와 보안 스캔을 추가하여 코드 품질과 보안을 더욱 강화하고 싶습니다."
        : "Through this project, I was able to gain practical experience in infrastructure design and DevOps beyond simple web development, which are necessary for actual production environments. In particular, it was very beneficial to directly implement technologies necessary for actual service operations such as containerization using Docker, CI/CD pipeline construction, and reverse proxy configuration. Using Raspberry Pi as a server, I learned how to operate stable services even under resource constraints, and also learned how to support various platforms through multi-architecture builds. The biggest achievement was building a fully automated deployment pipeline. I was able to directly implement a system where build, test, and deployment occur automatically with just a code push, and services update with zero downtime. I was also able to apply patterns used in actual production environments such as multi-repository management using Git Submodules and service dependency management through Health Checks. As a regret, monitoring and logging systems are lacking. Currently, only basic logs can be checked, but if we had introduced Prometheus and Grafana to collect metrics and configure dashboards, better operations would have been possible. Also, backup strategies are only done manually, so if we had built an automated backup system, we could have further improved data stability. As improvements I'd like to make, I want to introduce Kubernetes to build more scalable infrastructure. I also want to apply advanced deployment strategies such as Blue-Green deployment or Canary deployment for safer deployments. Finally, I want to add automated tests and security scans to the CI/CD pipeline to further strengthen code quality and security.",
    achievements: [
      {
        title:
          language === "ko"
            ? "완전 자동화된 CI/CD 파이프라인 구축"
            : "Fully Automated CI/CD Pipeline Construction",
        description:
          language === "ko"
            ? "GitHub Actions를 활용하여 코드 푸시부터 배포까지 전 과정을 자동화했습니다."
            : "Automated the entire process from code push to deployment using GitHub Actions.",
        metrics:
          language === "ko" ? "배포 시간 단축" : "Deployment Time Reduction",
        value: 80,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "무중단 배포 시스템 구현"
            : "Zero-downtime Deployment System Implementation",
        description:
          language === "ko"
            ? "Docker Compose와 Health Check를 활용하여 서비스 중단 없이 배포할 수 있는 시스템을 구축했습니다."
            : "Built a system that can deploy without service interruption using Docker Compose and Health Checks.",
        metrics:
          language === "ko"
            ? "서비스 가용성 향상"
            : "Service Availability Improvement",
        value: 99.5,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "멀티 아키텍처 Docker 이미지 빌드"
            : "Multi-architecture Docker Image Builds",
        description:
          language === "ko"
            ? "Docker Buildx를 활용하여 x86_64와 ARM64 아키텍처를 모두 지원하는 이미지를 자동으로 빌드합니다."
            : "Automatically builds images supporting both x86_64 and ARM64 architectures using Docker Buildx.",
        metrics: language === "ko" ? "플랫폼 호환성" : "Platform Compatibility",
        value: 100,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "리버스 프록시 및 WebSocket 프록시 구성"
            : "Reverse Proxy and WebSocket Proxy Configuration",
        description:
          language === "ko"
            ? "Nginx를 통해 단일 도메인으로 모든 서비스에 접근할 수 있도록 구성하고, WebSocket 연결을 안정적으로 프록시합니다."
            : "Configured to access all services through a single domain via Nginx and stably proxy WebSocket connections.",
        metrics:
          language === "ko"
            ? "네트워크 구성 완성도"
            : "Network Configuration Completion",
        value: 95,
        unit: "%",
      },
      {
        title:
          language === "ko"
            ? "Health Check 기반 서비스 의존성 관리"
            : "Health Check-based Service Dependency Management",
        description:
          language === "ko"
            ? "Health Check를 통해 서비스 간 의존성을 안정적으로 관리하여 시작 순서 문제를 해결했습니다."
            : "Stably managed dependencies between services through health checks to solve startup order problems.",
        metrics:
          language === "ko"
            ? "서비스 안정성 향상"
            : "Service Stability Improvement",
        value: 90,
        unit: "%",
      },
    ],
  };
}
