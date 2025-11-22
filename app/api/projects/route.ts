// /api/projects 엔드포인트는 프로젝트 데이터를 반환합니다.
import { NextResponse } from "next/server";
import { fetchProjectsData } from "@/app/lib/api/projects";

export async function GET() {
  const data = await fetchProjectsData();
  return NextResponse.json(data);
}


