"use client"

import { useEffect, useRef, useState } from "react"

import { isReducedMotion, isTouchDevice } from "@/utils/animations"
import { cn } from "@/lib/utils"

/**
 * Custom magnetic cursor: a precise dot + a lagging ring. The ring expands
 * over interactive elements (`[data-cursor="hover"]`) and becomes a filled
 * VIEW badge over project links (`[data-cursor="view"]`).
 *
 * Never renders on touch devices or when reduced motion is preferred.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [mode, setMode] = useState<"default" | "hover" | "view">("default")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isReducedMotion() || isTouchDevice()) return

    document.documentElement.classList.add("has-cursor")
    window.requestAnimationFrame(() => setEnabled(true))

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let frame = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setVisible(true)

      const target = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]")
      const nextMode = target?.dataset.cursor === "view" ? "view" : target ? "hover" : "default"
      setMode(nextMode)
    }

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]")
      const nextMode = target?.dataset.cursor === "view" ? "view" : target ? "hover" : "default"
      setMode(nextMode)
    }

    const onLeave = () => setVisible(false)

    const loop = () => {
      const dot = dotRef.current
      const ring = ringRef.current
      if (dot) {
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
      }
      if (ring) {
        ringX += (mouseX - ringX) * 0.18
        ringY += (mouseY - ringY) * 0.18
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      }
      frame = window.requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mouseover", onOver, { passive: true })
    document.documentElement.addEventListener("mouseleave", onLeave)
    frame = window.requestAnimationFrame(loop)

    return () => {
      document.documentElement.classList.remove("has-cursor")
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[90]"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s ease" }}
    >
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-fog will-change-transform"
        style={{ opacity: mode === "view" ? 0 : 1 }}
      />
      <div
        ref={ringRef}
        className={cn(
          "fixed left-0 top-0 flex items-center justify-center rounded-full will-change-transform",
          "border border-fog/60",
          mode === "hover" && "border-accent bg-accent/10",
          mode === "view" && "border-transparent bg-accent text-void"
        )}
        style={{
          width: mode === "view" ? 84 : 40,
          height: mode === "view" ? 84 : 40,
          transition: "width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1), background-color 0.3s ease, border-color 0.3s ease",
        }}
      >
        <span
          className="font-mono text-[11px] font-medium tracking-[0.2em]"
          style={{ opacity: mode === "view" ? 1 : 0, transition: "opacity 0.25s ease" }}
        >
          VIEW
        </span>
      </div>
    </div>
  )
}
