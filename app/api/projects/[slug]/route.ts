// /api/projects/[slug] 엔드포인트는 특정 프로젝트의 상세 데이터를 제공합니다.
import { NextResponse } from "next/server";
import { fetchProjectDetail } from "@/app/lib/api/projectDetails";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const detail = await fetchProjectDetail(params.slug);

  if (!detail) {
    return NextResponse.json({ message: "프로젝트를 찾을 수 없습니다." }, { status: 404 });
  }

  return NextResponse.json(detail);
}

