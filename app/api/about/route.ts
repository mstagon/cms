// /api/about 엔드포인트는 소개 섹션 데이터를 반환합니다.
import { NextResponse } from "next/server";
import { fetchAboutData } from "@/app/lib/api/about";
import type { Language } from "@/app/types/ui";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const languageParam = (searchParams.get("lang") ?? "ko") as Language;
  const data = await fetchAboutData(languageParam);
  return NextResponse.json(data);
}


