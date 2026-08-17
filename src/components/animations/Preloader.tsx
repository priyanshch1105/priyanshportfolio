"use client"

import { useEffect, useRef } from "react"

import gsap from "gsap"

import { useReducedMotion } from "@/hooks/useReducedMotion"
import { isReducedMotion } from "@/utils/animations"

const LETTERS = Array.from("PRIYANSH")

type PreloaderProps = {
  onComplete?: () => void
}

/**
 * Cinematic intro. Counts 00 → 100 while revealing the PRIYANSH wordmark
 * letter by letter, then clips the curtain upward to reveal the site.
 */
export function Preloader({ onComplete }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const done = useRef(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (done.current) return

    const root = rootRef.current
    const counter = counterRef.current
    const progress = progressRef.current
    if (!root || !counter || !progress) return

    if (isReducedMotion()) {
      gsap.set(root, { autoAlpha: 0, clipPath: "inset(0% 0% 100% 0%)" })
      onComplete?.()
      done.current = true
      return
    }

    document.documentElement.style.overflow = "hidden"

    const counterProxy = { value: 0 }

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = ""
        onComplete?.()
        done.current = true
      },
    })

    tl.to(counterProxy, {
      value: 100,
      duration: 1.7,
      ease: "power2.inOut",
      onUpdate: () => {
        counter.textContent = String(Math.floor(counterProxy.value)).padStart(2, "0")
      },
    })

    tl.fromTo(
      ".loader-letter",
      { yPercent: 130 },
      { yPercent: 0, duration: 1, ease: "power4.out", stagger: 0.06 },
      "-=1.55"
    )

    tl.to(".loader-word", { autoAlpha: 0.18, duration: 0.4, ease: "power2.out" }, "-=0.9")

    tl.fromTo(progress, { scaleX: 0 }, { scaleX: 1, duration: 1.7, ease: "power2.inOut" }, 0)

    tl.to(root, {
      clipPath: "inset(0% 0% 100% 0%)",
      duration: 1.1,
      ease: "power4.inOut",
      delay: 0.15,
    })

    tl.to(root, { autoAlpha: 0, duration: 0.4, ease: "power2.out" }, "-=0.55")

    return () => {
      tl.kill()
    }
  }, [onComplete, reduced])

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 noise" />

      <div className="loader-word relative z-10 px-6 text-center">
        <p className="font-display text-[clamp(2.6rem,11vw,8.5rem)] font-semibold leading-none tracking-tight">
          <span className="inline-flex overflow-hidden">
            {LETTERS.map((letter, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <span className="loader-letter inline-block will-change-transform text-fog">
                  {letter}
                </span>
              </span>
            ))}
          </span>
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-10 z-10 flex items-end justify-between px-6 md:px-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-mute md:text-xs">
          Portfolio © 2026
        </span>
        <span
          ref={counterRef}
          className="font-display text-5xl font-medium tabular-nums text-fog md:text-7xl"
        >
          00
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-px bg-line">
        <div
          ref={progressRef}
          className="h-full w-full origin-left bg-gradient-to-r from-accent to-accent-2"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  )
}
