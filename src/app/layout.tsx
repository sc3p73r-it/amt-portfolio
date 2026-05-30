import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AntdProvider from "@/components/providers/AntdProvider";
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
  title: "Aung Myo Thu | Network Security Engineer",
  description:
    "Portfolio of Aung Myo Thu — Network Security Engineer specializing in Cisco, Palo Alto Networks, and Check Point.",
  keywords: [
    "Network Security",
    "Cisco",
    "Palo Alto",
    "Check Point",
    "Firewall",
    "Aung Myo Thu",
  ],
  openGraph: {
    title: "Aung Myo Thu | Network Security Engineer",
    description:
      "Cisco, Palo Alto & Check Point expert — enterprise firewall architecture and network security.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full">
        <AntdProvider>{children}</AntdProvider>
      </body>
    </html>
  );
}
