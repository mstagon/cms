// PDF 전용 레이아웃 (푸터 제거, 깔끔한 스타일)
import "../styles/pdf.css";

export default function PDFLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pdf-layout">{children}</div>;
}


