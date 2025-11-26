// /api/projects/[slug] 엔드포인트는 특정 프로젝트의 상세 데이터를 제공합니다.
import { NextResponse } from "next/server";
import { fetchProjectDetail } from "@/app/lib/api/projectDetails";
import type { Language } from "@/app/types/ui";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { searchParams } = new URL(request.url);
  const language = (searchParams.get("lang") ?? "ko") as Language;
  const detail = await fetchProjectDetail(params.slug, language);

  if (!detail) {
    return NextResponse.json({ message: "프로젝트를 찾을 수 없습니다." }, { status: 404 });
  }

  return NextResponse.json(detail);
}

