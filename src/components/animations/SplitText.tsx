"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"
import { isReducedMotion } from "@/utils/animations"

type SplitTextProps = {
  text: string
  className?: string
  type?: "words" | "chars"
  delay?: number
}

/**
 * Splits a string into masked spans so GSAP can animate each unit from
 * inside an overflow-hidden wrapper. Content is aria-hidden; the full text
 * is exposed via aria-label for screen readers.
 */
export function SplitText({ text, className, type = "words", delay = 0 }: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (isReducedMotion()) {
      ref.current
        ?.querySelectorAll<HTMLElement>(".word-inner, .char-inner")
        .forEach((el) => (el.style.transform = "translateY(0)"))
    }
  }, [])

  const units = type === "words" ? text.split(" ") : Array.from(text)

  return (
    <span ref={ref} aria-label={text} className={cn("inline-block", className)}>
      <span aria-hidden="true" className="inline">
        {units.map((unit, i) => (
          <span key={`${unit}-${i}`} className="word-mask">
            <span
              className={type === "words" ? "word-inner" : "char-inner"}
              style={{ transitionDelay: `${delay}s` }}
            >
              {unit}
            </span>
            {i < units.length - 1 ? <span> </span> : null}
          </span>
        ))}
      </span>
    </span>
  )
}
