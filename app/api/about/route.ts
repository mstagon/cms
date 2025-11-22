// /api/about 엔드포인트는 소개 섹션 데이터를 반환합니다.
import { NextResponse } from "next/server";
import { fetchAboutData } from "@/app/lib/api/about";

export async function GET() {
  const data = await fetchAboutData();
  return NextResponse.json(data);
}


