// 프로젝트 상세 정보를 반환하는 목업 API 로직입니다.
import type { ProjectDetail } from "@/app/types/projects";

const projectDetails: Record<string, ProjectDetail> = {
  "vanilla-extract-design-system": {
    slug: "vanilla-extract-design-system",
    title: "Vanilla Extract 기반 디자인 시스템 구축",
    subtitle:
      "Emotion의 런타임 비용과 타입 불일치를 해결하고, 타입 안정성과 빌드 타임 CSS 생성을 통해 개발 경험과 성능을 동시에 확보한 사내 디자인 시스템 프로젝트입니다.",
    heroImage: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5H6Ciw3E1WVleTAI4i9VqSXpndnEhjFxhk_sxU9YZJ-_PxtoljNQAnUf4zsrQFKVqmJU5_mWmQ6heQQYNC0pjScw0Lbjc_zQfYebykkkBp6qKOg8J2ktO1AdAcrwH2UwPGqaZq1kquINtBa2cY1rnuq9F9N42QXjnSL2CbjtBUCmKOHXwHjOpQGZC7zVz7hk7Jt3tckuGZAEGCsXlGTZnj_CsC7cV_bHq12qdPTQsUJQBCu_rZYIRkMSbZBL8YC5iLGa_YQ99sgla",
      alt: "데스크톱과 모바일 UI 목업으로 구성된 디자인 시스템 프로젝트 프리뷰",
    },
    meta: [
      {
        label: "프로젝트 목표",
        value:
          "타입스크립트 기반 타입-세이프 디자인 시스템 구축으로 개발 생산성 향상",
      },
      {
        label: "기간",
        value: "2023.08 - 2023.11",
      },
      {
        label: "기여도",
        value: "프론트엔드 개발 100%",
      },
    ],
    techStack: ["React", "TypeScript", "Next.js", "Vanilla Extract", "Storybook"],
    processes: [
      {
        title: "1. 컴포넌트 아키텍처 설계 및 구현",
        description:
          "Atomic Design 패턴을 기반으로 재사용성과 확장성을 고려한 컴포넌트 구조를 설계했습니다. Polymorphic 컴포넌트를 도입해 `as` prop으로 HTML 태그 변경이 가능하도록 만들어 UI 활용성을 극대화했습니다.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCA86Cukm_QwrCqEZkNJ7C1Uru3thCZCM9WInTalpc7jzj0FwMouif1fga18m_xw_Hbb0Cjltd6uFCoA00_t7bPxnaFk-SjAPfVzVKHl6M_7WGXDoylly7ZVOzYxRwl7zDy7eIWZE7NcQJ9kjdGW9J34xvgVSaiJ7KiecWfrW3-hY0YrLKIRNEPXpNU_7JbMIu_KXoqiAgln-Ws5uZEi03Iq1mbWgYqKpWslZgrjV5uQvEDTx0WGV4soe5PCKjf-EoHPOmAT4OyiNf1",
        imageAlt: "컴포넌트 아키텍처 다이어그램",
        alignment: "normal",
      },
      {
        title: "2. Storybook을 이용한 문서화 및 테스트",
        description:
          "Storybook을 도입하여 컴포넌트의 다양한 상태를 문서화하고 Chromatic 기반 UI 회귀 테스트를 자동화했습니다. 디자이너와 개발자의 협업 효율이 크게 향상되었습니다.",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDnmgyZnM8rPwr4bB_XPXoekyGHvC5gIKoxSfJTJErC-nOMBXb1-FVRaDq-QlsOi--9Z1mFjrZAnwrPKDHjJ5H5TRyA5VqmwRGYUsT_J9Fxk5e3telsdtsDTBF9iOgkWEuRqEa8IsQbYmjdF7rfBhgsxBXa6FHuwWyUDTkqwXPBjD-KkrcXCdOuJTgLZAE8Z-dbFOOTozJavG9udt6xskxNN5990Kt4VCopLvVGuOc5vH8doMIKOV-k3uq4zl_XD9x1ol3pLUscXiuO",
        imageAlt: "Storybook 인터페이스 화면",
        alignment: "reversed",
      },
    ],
    features: [
      {
        title: "타입-세이프 테마",
        description:
          "CSS 변수와 TypeScript를 연동해 테마를 코드로 관리하고 자동완성을 통해 오타나 잘못된 값 사용을 차단했습니다.",
      },
      {
        title: "제로 런타임 스타일링",
        description:
          "Vanilla Extract의 빌드 타임 CSS 생성을 활용해 런타임 오버헤드를 제거하고 초기 로딩 성능을 크게 개선했습니다.",
      },
      {
        title: "손쉬운 다크 모드",
        description:
          "CSS 변수 기반 테마 토글 구조를 설계해 단일 토글만으로 다크/라이트 전환이 가능하도록 만들었습니다.",
      },
    ],
    links: {
      liveDemo: "#",
      repository: "#",
    },
  },
};

export async function fetchProjectDetail(slug: string): Promise<ProjectDetail | null> {
  return projectDetails[slug] ?? null;
}

export async function fetchProjectDetailSlugs(): Promise<string[]> {
  return Object.keys(projectDetails);
}

