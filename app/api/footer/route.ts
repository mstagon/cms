// /api/footer 엔드포인트는 푸터 정보를 반환합니다.
import { NextResponse } from "next/server";
import { fetchFooterData } from "@/app/lib/api/footer";
import type { Language } from "@/app/types/ui";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const language = (searchParams.get("lang") ?? "ko") as Language;
  const data = await fetchFooterData(language);
  return NextResponse.json(data);
}


