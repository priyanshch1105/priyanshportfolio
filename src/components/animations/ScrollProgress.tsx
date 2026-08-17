"use client"

import { useEffect, useRef } from "react"

import { isReducedMotion } from "@/utils/animations"

/**
 * Thin scroll-progress indicator fixed to the top edge of the viewport.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      bar.style.transform = `scaleX(${progress})`
    }

    if (isReducedMotion()) {
      bar.style.transform = "scaleX(0)"
      onScroll()
      window.addEventListener("scroll", onScroll, { passive: true })
      return () => window.removeEventListener("scroll", onScroll)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[80] h-[2px] bg-transparent">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-accent via-accent-2 to-aqua"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  )
}
