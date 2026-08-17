"use client"

import { useEffect, useRef } from "react"

import gsap from "gsap"

import { cn } from "@/lib/utils"
import { revealText } from "@/utils/animations"

type EditorialTitleProps = {
  text: string
  className?: string
  stagger?: number
  accentWords?: number[]
}

/**
 * Large editorial heading that reveals word-by-word from masked containers
 * as the user scrolls into view.
 */
export function EditorialTitle({ text, className, stagger = 0.05, accentWords = [] }: EditorialTitleProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const words = text.split(" ")

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      revealText(ref.current, { trigger: ref.current, start: "top 82%", stagger })
    }, ref)
    return () => ctx.revert()
  }, [stagger])

  return (
    <h2 ref={ref} className={cn("font-display font-semibold leading-[0.95] tracking-tight", className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline">
          <span className="word-mask">
            <span className={cn("word-inner", accentWords.includes(i) && "text-gradient")}>
              {word}
            </span>
          </span>
          {i < words.length - 1 ? <span> </span> : null}
        </span>
      ))}
    </h2>
  )
}
