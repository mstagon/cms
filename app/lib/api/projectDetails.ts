// 프로젝트 상세 데이터 API
import type { ProjectDetail } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";
import { getDossDetail } from "./projectDetails/doss";
import { getRestForestDetail } from "./projectDetails/rest-forest";
import { getPhcDetail } from "./projectDetails/phc";
import { getPlanzDetail } from "./projectDetails/planz";
import { getMoyangDetail } from "./projectDetails/moyang";
import { getTripcutDetail } from "./projectDetails/tripcut";
import { getEmploymentDetail } from "./projectDetails/employment";
import { getSmuEcampusProgressCheckingDetail } from "./projectDetails/smu-ecampus-progress-checking";
import { getTeamoDetail } from "./projectDetails/teamo";
import { getDigitalBridgeDetail } from "./projectDetails/digital-bridge";

export async function getProjectDetail(
  slug: string,
  language: Language = "ko"
): Promise<ProjectDetail | null> {
  // 실제로는 API나 데이터베이스에서 가져올 수 있습니다
  // 여기서는 예시 데이터를 반환합니다

  try {
    const details: Record<string, ProjectDetail> = {
      doss: getDossDetail(language),
      "rest-forest": getRestForestDetail(language),
      phc: getPhcDetail(language),
      planz: getPlanzDetail(language),
      moyang: getMoyangDetail(language),
      tripcut: getTripcutDetail(language),
      employment: getEmploymentDetail(language),
      "smu-ecampus-progress-checking":
        getSmuEcampusProgressCheckingDetail(language),
      teamo: getTeamoDetail(language),
      "digital-bridge": getDigitalBridgeDetail(language),
    };

    return details[slug] || null;
  } catch (error) {
    console.error(`Error loading project detail for slug "${slug}":`, error);
    throw error;
  }
}
