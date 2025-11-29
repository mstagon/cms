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
}

export interface ProjectsApiResponse {
  featured: ProjectItem[];
  others: ProjectItem[];
}

