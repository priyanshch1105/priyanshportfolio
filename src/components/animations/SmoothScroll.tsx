"use client"

import type { ReactNode } from "react"

import { useLenis } from "@/hooks/useLenis"

/**
 * Client wrapper that enables Lenis + GSAP smooth scrolling for the whole
 * application. Renders children unchanged.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useLenis()
  return <>{children}</>
}
