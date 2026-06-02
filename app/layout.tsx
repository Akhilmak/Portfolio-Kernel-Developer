import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Akhil Kumar Madineni | AI Engineer Portfolio",
  description: "Professional portfolio of Akhil Kumar Madineni, AI Engineer & Backend Software Engineer specializing in LangGraph, Temporal, and distributed workflows.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-slate-950 text-slate-100 min-h-screen relative`}>
        <div className="animated-bg" />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
