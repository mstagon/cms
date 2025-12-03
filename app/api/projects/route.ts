// 프로젝트 API 라우트
import { NextResponse } from "next/server";
import { getProjects } from "@/app/lib/api/projects";
import type { Language } from "@/app/types/ui";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = (searchParams.get("lang") || "ko") as Language;

    const projects = await getProjects(lang);

    return NextResponse.json(projects);
  } catch (error) {
    console.error("프로젝트 데이터를 불러오는 중 오류 발생:", error);
    return NextResponse.json(
        { error: "프로젝트 데이터를 불러오지 못했습니다." },
        { status: 500 }
    );
  }
}

