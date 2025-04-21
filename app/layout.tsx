"use client";
import "./globals.css";
import VideoComponent from "@/app/components/VideoComponents";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 min-h-screen relative overflow-x-hidden">
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
          <VideoComponent />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
