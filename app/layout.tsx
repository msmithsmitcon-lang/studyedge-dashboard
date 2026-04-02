import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StudyEdge Dashboard",
  description: "CAPS-aligned learner dashboard for StudyEdge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
