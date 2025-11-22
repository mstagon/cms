// 프로젝트 데이터와 UI에서 함께 활용하는 타입 정의입니다.
export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  href: string;
  icon?: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  layout?: "default" | "reversed";
  unoptimized?: boolean;
}

export interface ProjectSummary {
  slug?: string;
  title: string;
  description: string;
  href: string;
}

export interface ProjectMetaItem {
  label: string;
  value: string;
}

export interface ProjectProcessStep {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  alignment?: "normal" | "reversed";
}

export interface ProjectFeatureItem {
  title: string;
  description: string;
}

export interface ProjectDetailLinks {
  liveDemo?: string;
  repository?: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: {
    src: string;
    alt: string;
  };
  meta: ProjectMetaItem[];
  techStack: string[];
  processes: ProjectProcessStep[];
  features: ProjectFeatureItem[];
  links: ProjectDetailLinks;
}
