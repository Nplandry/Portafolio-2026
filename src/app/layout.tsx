import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageBackground } from "@/components/layout/PageBackground";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio | Nicolas Poblete",
  description: "Portafolio personal de desarrollo de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <PageBackground />
        <CustomCursor />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
