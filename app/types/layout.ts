// 레이아웃 및 푸터 구성에 사용하는 타입 정의입니다.
export interface FooterLinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterInfo {
  name: string;
  role: string;
  links: FooterLinkItem[];
}


