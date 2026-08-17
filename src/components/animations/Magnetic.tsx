"use client"

import type { ReactNode } from "react"

import { magneticElement } from "@/utils/animations"
import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

type MagneticProps = {
  children: ReactNode
  className?: string
  strength?: number
}

/**
 * Wraps children in a magnetic container. The container pulls toward the
 * cursor and springs back on leave. Uses GSAP quickTo for buttery motion.
 */
export function Magnetic({ children, className, strength = 0.32 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return
    return magneticElement(ref.current, strength)
  }, [strength])

  return (
    <span ref={ref} className={cn("inline-block will-change-transform", className)}>
      {children}
    </span>
  )
}
