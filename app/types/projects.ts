// 프로젝트 데이터와 UI에서 함께 활용하는 타입 정의입니다.
export interface ProjectItem {
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
  title: string;
  description: string;
  href: string;
}
