// 자기소개 섹션에서 사용하는 데이터 타입을 정의합니다.
export interface ProfileIntro {
  headline: string;
  description: string;
  imageAlt: string;
  imageUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export type SkillLevel = "beginner" | "intermediate" | "comfortable" | "advanced";

export interface SkillItem {
  name: string;
  icon: string;
  level: SkillLevel;
  levelLabel: string;
  proficiency: number; // 0-100
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface Award {
  title: string;
  description: string;
  icon: string;
}

export interface Interest {
  title: string;
  description: string;
  icon: string;
}




