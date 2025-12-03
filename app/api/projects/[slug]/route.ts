// 프로젝트 상세 API 라우트
import { NextResponse } from "next/server";
import { getProjectDetail } from "@/app/lib/api/projectDetails";
import { getProjects } from "@/app/lib/api/projects";
import type { Language } from "@/app/types/ui";

export const dynamic = "force-dynamic";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { searchParams } = new URL(request.url);
    const lang = (searchParams.get("lang") || "ko") as Language;
    const { slug } = await params;

    const [projectDetail, allProjects] = await Promise.all([
      getProjectDetail(slug, lang),
      getProjects(lang),
    ]);

    // 프로젝트 기본 정보 찾기
    const project = [
      ...allProjects.featured,
      ...allProjects.others,
    ].find((p) => p.slug === slug);

    if (!project) {
      return NextResponse.json(
          { error: "프로젝트를 찾을 수 없습니다." },
          { status: 404 }
      );
    }

    return NextResponse.json({
      project,
      detail: projectDetail,
    });
  } catch (error) {
    console.error("프로젝트 상세 데이터를 불러오는 중 오류 발생:", error);
    console.error("Error details:", error instanceof Error ? error.message : String(error));
    console.error("Error stack:", error instanceof Error ? error.stack : "No stack trace");
    return NextResponse.json(
        { 
          error: "프로젝트 상세 데이터를 불러오지 못했습니다.",
          details: error instanceof Error ? error.message : String(error)
        },
        { status: 500 }
    );
  }
}

