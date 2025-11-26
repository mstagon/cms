// /api/projects 엔드포인트는 프로젝트 데이터를 반환합니다.
import { NextResponse } from "next/server";
import { fetchProjectsData } from "@/app/lib/api/projects";
import type { Language } from "@/app/types/ui";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const languageParam = (searchParams.get("lang") ?? "ko") as Language;
  const data = await fetchProjectsData(languageParam);
  return NextResponse.json(data);
}


