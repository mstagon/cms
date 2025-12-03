// 프로젝트 관련 타입 정의
export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  tags: string[];
  href?: string;
  slug?: string;
  type: "featured" | "regular" | "encrypted";
  status: "online" | "locked";
  directory?: string;
  filename?: string;
}

export interface ProjectDetail {
  objective?: string;
  images?: string[];
  role?: {
    title: string;
    responsibilities: string[];
  };
  timeframe?: string;
  platform?: string;
  type?: string;
  techStack?: string[];
  performance?: {
    pageLoadSpeed?: { value: number; improvement?: string };
    lighthouseScore?: { value: number; score?: string };
  };
  // 외부 링크
  links?: {
    github?: string;
    site?: string;
    docs?: string;
  };
  // 상세 개요 (통계 포함)
  overview?: {
    description: string;
    stats?: {
      totalUsers?: string;
      dau?: string;
      annualNewUsers?: string;
      vision?: string;
    };
  };
  // 문제 해결 (AS-IS / TO-BE)
  challenges?: Array<{
    title: string;
    asIs: string;
    toBe: string;
    result?: string;
    githubLink?: string;
    docsLink?: string;
  }>;
  // 아키텍처 다이어그램
  architecture?: {
    description?: string;
    diagrams?: Array<{
      title?: string;
      image: string;
      alt?: string;
    }>;
  };
  // 회고
  retrospective?: string;
  // 성과/결과
  achievements?: Array<{
    title: string;
    description: string;
    metrics?: string;
    value?: number;
    unit?: string;
  }>;
}

export interface ProjectsApiResponse {
  featured: ProjectItem[];
  others: ProjectItem[];
}

