import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/Spadyyy/spandamnnn-portfolio"),
  title: { default: "Spandan Saha | AI/ML & Software Developer", template: "%s | Spandan Saha" },
  description: "Spandan Saha — Computer Science student building AI/ML, embedded systems, and software projects.",
  openGraph: { title: "Spandan Saha | Portfolio", description: "AI/ML, embedded systems, and software development.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
