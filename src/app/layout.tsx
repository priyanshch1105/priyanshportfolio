import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"

import { SmoothScroll } from "@/components/animations/SmoothScroll"

import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://priyansh.dev"),
  title: {
    default: "Priyansh — Frontend Developer, AI/ML Engineer & Mobile App Developer",
    template: "%s — Priyansh",
  },
  description:
    "I build digital products where engineering meets intelligent design. Frontend Developer, AI/ML Engineer & Mobile App Developer crafting cinematic, high-performance web experiences.",
  keywords: [
    "Priyansh",
    "Frontend Developer",
    "AI/ML Engineer",
    "Mobile App Developer",
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Flutter",
    "Three.js",
    "GSAP",
    "Portfolio",
  ],
  authors: [{ name: "Priyansh" }],
  creator: "Priyansh",
  openGraph: {
    type: "website",
    url: "https://priyansh.dev",
    siteName: "Priyansh",
    title: "Priyansh — Frontend Developer, AI/ML Engineer & Mobile App Developer",
    description:
      "I build digital products where engineering meets intelligent design.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Priyansh — Frontend Developer, AI/ML Engineer & Mobile App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyansh — Frontend Developer, AI/ML Engineer & Mobile App Developer",
    description:
      "I build digital products where engineering meets intelligent design.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050506",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-void font-sans text-fog antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
