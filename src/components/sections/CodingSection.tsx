"use client"

import { useEffect, useRef } from "react"

import gsap from "gsap"

import { useReducedMotion } from "@/hooks/useReducedMotion"
import { isReducedMotion } from "@/utils/animations"

const CODE = `const developer = {
  frontend: ["React", "Next.js", "TypeScript", "Three.js", "GSAP"],
  mobile: ["React Native", "Flutter"],
  ai: ["Python", "FastAPI", "LangChain", "LangGraph", "FAISS"],
  backend: ["FastAPI", "Node.js", "PostgreSQL"],
  infra: ["Docker", "AWS", "OPA"],
  mission: "engineering × intelligent design"
}`

const STATEMENT = "LET'S BUILD SOMETHING."

export function CodingSection() {
  const rootRef = useRef<HTMLElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const codeRef = useRef<HTMLPreElement>(null)
  const statementRef = useRef<HTMLHeadingElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    const codeEl = codeRef.current
    if (!root || !codeEl) return

    const ctx = gsap.context(() => {
      if (isReducedMotion()) {
        codeEl.textContent = CODE
        return
      }

      const proxy = { value: 0 }
      gsap.to(proxy, {
        value: CODE.length,
        duration: 3.2,
        ease: "none",
        scrollTrigger: { trigger: terminalRef.current, start: "top 78%", once: true },
        onUpdate: () => {
          codeEl.textContent = CODE.slice(0, Math.floor(proxy.value))
        },
        onComplete: () => {
          gsap.delayedCall(1.2, morph)
        },
      })

      const morph = () => {
        const tl = gsap.timeline()
        tl.to(terminalRef.current, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1,
          ease: "power4.inOut",
        }).fromTo(
          statementRef.current,
          { clipPath: "inset(0% 0% 100% 0%)", yPercent: 60 },
          { clipPath: "inset(0% 0% 0% 0%)", yPercent: 0, duration: 1.2, ease: "power4.out" },
          "-=0.5"
        )
      }
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className="relative overflow-hidden py-28 md:py-44">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 flex items-center gap-4 md:mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">07</span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-dim">Code</span>
        </div>

        <div ref={terminalRef} className="terminal-shadow relative overflow-hidden rounded-2xl border border-line bg-ink">
          <div className="flex items-center justify-between border-b border-line px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent-2/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-aqua/70" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-dim">
              developer.ts
            </span>
            <span className="font-mono text-[10px] text-dim">TS</span>
          </div>
          <div className="relative px-5 py-6 md:px-8 md:py-8">
            <div className="overflow-hidden font-mono text-[13px] leading-[1.9] text-fog/90 md:text-[15px]" aria-label="Developer profile as code">
              <span ref={codeRef} style={{ whiteSpace: "pre" }} />
              <span className="code-caret" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden py-6 md:mt-16 md:py-10">
          <h3
            ref={statementRef}
            className="text-gradient font-display text-[clamp(2rem,7.5vw,7rem)] font-bold leading-[0.95] tracking-tight"
            style={{ clipPath: "inset(0% 0% 100% 0%)" }}
          >
            {STATEMENT}
          </h3>
        </div>
      </div>
    </section>
  )
}
