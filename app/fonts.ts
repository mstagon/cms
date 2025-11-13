// next/font/local을 사용해 전역에서 활용할 SUIT 가변 폰트를 로드합니다.
import localFont from "next/font/local";

export const suit = localFont({
  src: [
    {
      path: "../public/SUIT-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  display: "swap",
});
