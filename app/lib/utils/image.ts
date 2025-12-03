// 이미지 관련 유틸리티 함수를 제공합니다.
import { readdir } from "fs/promises";
import { join } from "path";

export function stripImageParams(url?: string | null) {
  if (!url) {
    return "";
  }
  const [withoutParams] = url.split("=");
  return withoutParams ?? url;
}

/**
 * 프로젝트별 대문 이미지 경로를 반환합니다.
 * public/projects/[slug]/ 폴더에서 이미지 파일을 찾습니다.
 * 우선순위: hero.* > 첫 번째 이미지 파일
 */
export async function getProjectHeroImage(slug: string): Promise<string | null> {
  if (!slug) return null;
  
  try {
    const publicPath = join(process.cwd(), "public", "projects", slug);
    const files = await readdir(publicPath);
    
    const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
    const imageFiles = files.filter(file => 
      imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
    );
    
    if (imageFiles.length === 0) return null;
    
    // hero.* 또는 *hero* 패턴 파일 우선, 없으면 첫 번째 이미지
    const heroFile = imageFiles.find(file => 
      file.toLowerCase().startsWith("hero.") || file.toLowerCase().includes("hero")
    ) || imageFiles[0];
    
    return `/projects/${slug}/${heroFile}`;
  } catch {
    // 폴더가 없거나 읽을 수 없으면 null 반환
    return null;
  }
}

/**
 * 프로젝트별 아키텍처 이미지 경로들을 반환합니다.
 * public/projects/[slug]/architecture/ 폴더의 모든 이미지 파일을 반환합니다.
 * 파일명 순서대로 정렬됩니다.
 */
export async function getProjectArchitectureImages(slug: string): Promise<string[]> {
  if (!slug) return [];
  
  try {
    const architecturePath = join(process.cwd(), "public", "projects", slug, "architecture");
    const files = await readdir(architecturePath);
    
    const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
    const imageFiles = files
      .filter(file => 
        imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
      )
      .sort(); // 파일명 순서대로 정렬
    
    return imageFiles.map(file => `/projects/${slug}/architecture/${file}`);
  } catch {
    // 폴더가 없거나 읽을 수 없으면 빈 배열 반환
    return [];
  }
}

/**
 * 프로젝트 이미지 경로가 존재하는지 확인 (클라이언트 사이드)
 */
export async function checkImageExists(path: string): Promise<boolean> {
  if (typeof window === "undefined") {
    return false;
  }
  
  try {
    const response = await fetch(path, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

