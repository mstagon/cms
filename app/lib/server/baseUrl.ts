// 서버 환경별 기본 URL을 반환합니다.
export function getServerBaseUrl() {
  const explicitBaseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXT_PUBLIC_BASE_URL;
  if (explicitBaseUrl) {
    return explicitBaseUrl;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}
