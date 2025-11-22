// /api/footer 엔드포인트는 푸터 정보를 반환합니다.
import { NextResponse } from "next/server";
import { fetchFooterData } from "@/app/lib/api/layout";

export async function GET() {
  const data = await fetchFooterData();
  return NextResponse.json(data);
}


