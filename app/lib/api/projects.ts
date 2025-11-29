// 프로젝트 데이터 API
import type { ProjectItem } from "@/app/types/projects";
import type { ProjectsApiResponse } from "@/app/types/projects";
import type { Language } from "@/app/types/ui";

export type { ProjectsApiResponse };

export async function getProjects(language: Language = "ko"): Promise<ProjectsApiResponse> {
  // 실제로는 API나 데이터베이스에서 가져올 수 있습니다
  // 여기서는 예시 데이터를 반환합니다
  
  const featured: ProjectItem[] = [
    {
      id: "1",
      title: "E-Commerce Analytics",
      description: "A dynamic dashboard providing real-time sales insights and user behavior analytics. Data visualization and performance optimization were key objectives.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2ETtSdBZbHBVRQ6lbiSvArsP17MOlwaPns-HIiRrwnYXZYgylpUZtoFeTzDCZ9gTpLrUuLYoiHUMsMOGkDEssrthVI4o8gbMe_zOBbWavyQf6aK2D97Ae9d5ZzhY9TivjI0E3zymTkkBLWSfzxQ57dG3zV-QcbHWpYe3Lx65rx55Skq10h48CzN9uGoFS41f8jQ8H7y9KodoaEyB-EZtrR28QC12mvKe7UWQlqWZYXRHQjN9a8Szs6RltxuCc0ELRXhNQrlZg9Q",
      imageAlt: "E-Commerce Analytics Dashboard",
      tags: ["React", "D3.js", "TypeScript"],
      type: "featured",
      status: "online",
      directory: "DIR_01:PROJ_ECOMMERCE_ANALYTICS",
      slug: "ecommerce-analytics",
    },
    {
      id: "4",
      title: "VR Data Visualization",
      description: "An immersive virtual reality experience to visualize complex datasets in a 3D space.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb28nXfQI9MtventpjpfMG9qnODYiO852Yrgkgk2FKGzjZY5j5MxI1QYizly5UW_je-HTTWPJiRcUVgGmc4XG37QVpu1yEizWrsZAoPxI4eqninwSJC1ChtIjP6hSLAXb4s2LcaK-Nevk6FQsKEkeKBmgFpVpbKn7twwyQlbyKgbvsq9IAJBUhazT8Rl0dZiOkbCmpYG5S3SJBhHNr9QTGVzrCEyiaJv7lHEdIe7LCvnkWIt0NVdM6DlHn3Y23rcP0PDcv0uL-gA",
      imageAlt: "VR Data Visualization",
      tags: ["A-Frame", "Three.js"],
      type: "featured",
      status: "online",
      directory: "DIR_02:PROJ_VR_DATA_VIS",
      slug: "vr-data-visualization",
    },
  ];

  const others: ProjectItem[] = [
    {
      id: "2",
      title: "Travel Planner",
      description: "A web app for creating and sharing custom travel itineraries with a map-based, interactive interface.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZKhN3csbhdDu87sbl72jxzorRwkU_Dh6NoiaE59SYNCzZ7jlskrcDX9C2Qf_tijiawGUzsFKivkcUnWLpwOwuV-69cJIODQL6Nb6vHnFgE4wjWsVAcGzu2_oNXGs_xavXyT_25Qsu3T_8Nlh0KHX7s8PvF6OzuNDu2B9MQyT7LukpY_0IIlgSZWLXAaEWn5ccdMD4VohYE6yg--v5OnQNoloR4faZBEjyPzRsO1PY6TLr7fImYyh6IqTxECzvE0-_X9YI6NNqsQ",
      imageAlt: "Interactive Travel Planner",
      tags: ["Vue.js", "GSAP"],
      type: "regular",
      status: "online",
      filename: "FILE_02:PROJ_TRVL_PLN",
      slug: "travel-planner",
    },
    {
      id: "3",
      title: "Task Manager",
      description: "A sleek and simple task management tool designed for focus, productivity, and a seamless user experience.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAErxLx48-c_O4RGrmadXeeyEvXHG8RqF_At3JkQMuRzOSMy6reTHEzppTv133FJz9g3azJRoqceXeKMbX6N50ybns5-k_K3_gD_t9claMdxvMRmgzWxA4rSW_DXMKxhggXRB-anrRu_R5Pfv0aQvSWMJCJdOeJKsszmjflPn4ah52feXrW2-SiI07jegHeq59nidCWITn-OtZAwfuNuvYTZe_FDlcKEi0h_ankGl-JNb42ledJui4iAvSzL71jY3zEWkx4H-Fp7w",
      imageAlt: "Minimalist Task Manager",
      tags: ["Svelte", "Firebase"],
      type: "regular",
      status: "online",
      filename: "FILE_03:PROJ_TSK_MGR",
      slug: "task-manager",
    },
    {
      id: "5",
      title: "AI Code Assistant",
      description: "A web-based tool that leverages AI to provide code suggestions, debugging help, and documentation.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb28nXfQI9MtventpjpfMG9qnODYiO852Yrgkgk2FKGzjZY5j5MxI1QYizly5UW_je-HTTWPJiRcUVgGmc4XG37QVpu1yEizWrsZAoPxI4eqninwSJC1ChtIjP6hSLAXb4s2LcaK-Nevk6FQsKEkeKBmgFpVpbKn7twwyQlbyKgbvsq9IAJBUhazT8Rl0dZiOkbCmpYG5S3SJBhHNr9QTGVzrCEyiaJv7lHEdIe7LCvnkWIt0NVdM6DlHn3Y23rcP0PDcv0uL-gA",
      imageAlt: "AI-Powered Code Assistant",
      tags: ["Next.js", "OpenAI API"],
      type: "regular",
      status: "online",
      filename: "FILE_04:PROJ_AI_CODE_ASST",
      slug: "ai-code-assistant",
    },
    {
      id: "6",
      title: "Additional Projects",
      description: "Contact me to discuss more projects and case studies not featured here.",
      type: "encrypted",
      status: "locked",
      tags: [],
      filename: "ARCHIVE_ENCRYPTED",
    },
  ];

  return {
    featured,
    others,
  };
}

