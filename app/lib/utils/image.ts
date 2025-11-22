// 이미지 관련 유틸리티 함수를 제공합니다.
export function stripImageParams(url?: string | null) {
  if (!url) {
    return "";
  }
  const [withoutParams] = url.split("=");
  return withoutParams ?? url;
}

