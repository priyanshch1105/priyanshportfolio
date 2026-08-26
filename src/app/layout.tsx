import type { Metadata, Viewport } from "next"
import Script from "next/script"
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
  metadataBase: new URL(
    "https://priyanshportfolio-two.vercel.app"
  ),

  title: {
    default: "Priyansh — Software Developer & Mobile App Developer",
    template: "%s — Priyansh",
  },

  verification: {
    google: "dV1vqtFd2138KhHO9pKwGkCuGQ1f6V2OJFupK2TnCkM",
  },

  description:
    "Priyansh is a Software Developer and Mobile App Developer building modern web applications, cross-platform mobile apps, scalable APIs, and high-performance digital products.",

  keywords: [
    "Priyansh",
    "Software Developer",
    "Software Engineer",
    "Mobile App Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Flutter Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "Firebase Developer",
    "REST API Developer",
    "Web Developer",
    "Mobile Developer",
    "AI Developer",
    "React",
    "Next.js",
    "React Native",
    "Flutter",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Firebase",
    "Three.js",
    "GSAP",
    "Portfolio",
  ],

  authors: [{ name: "Priyansh" }],
  creator: "Priyansh",

  openGraph: {
    type: "website",
    url: "https://priyanshportfolio-two.vercel.app",
    siteName: "Priyansh — Software & Mobile Developer",
    title: "Priyansh — Software Developer & Mobile App Developer",
    description:
      "Software Developer and Mobile App Developer building modern web applications, cross-platform mobile apps, APIs, and scalable digital products.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Priyansh — Software Developer & Mobile App Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Priyansh — Software Developer & Mobile App Developer",
    description:
      "Software Developer and Mobile App Developer building modern web and mobile applications.",
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-void font-sans text-fog antialiased">
        <SmoothScroll>{children}</SmoothScroll>

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S9RS27GKSL"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-S9RS27GKSL');
          `}
        </Script>
      </body>
    </html>
  )
}