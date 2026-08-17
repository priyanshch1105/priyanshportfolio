"use client"

import { useEffect, useRef } from "react"

import gsap from "gsap"

import { EditorialTitle } from "@/components/animations/EditorialTitle"
import { achievements } from "@/data/achievements"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { isReducedMotion } from "@/utils/animations"

export function Achievements() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      if (isReducedMotion()) {
        gsap.set(".ach-value", { textContent: "" })
        achievements.forEach((item, i) => {
          const el = root.querySelectorAll(".ach-value")[i]
          if (el) el.textContent = String(item.value) + item.suffix
        })
        gsap.set(".ach-row", { autoAlpha: 1, y: 0 })
        return
      }

      gsap.utils.toArray<HTMLElement>(".ach-row").forEach((row, i) => {
        const valueEl = row.querySelector<HTMLElement>(".ach-value")
        const item = achievements[i]
        if (!valueEl || !item) return

        const proxy = { value: 0 }
        gsap.to(proxy, {
          value: item.value,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: { trigger: row, start: "top 82%", once: true },
          onUpdate: () => {
            valueEl.textContent = String(Math.floor(proxy.value)) + item.suffix
          },
        })

        gsap.fromTo(
          row,
          { autoAlpha: 0, y: 60 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 84%", once: true },
          }
        )
      })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} className="relative overflow-hidden py-28 md:py-44">
      <div className="absolute inset-0 grid-bg opacity-25 [mask-image:radial-gradient(70%_50%_at_80%_20%,black,transparent)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 flex items-center gap-4 md:mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">06</span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-dim">Proof</span>
        </div>

        <EditorialTitle
          text="PROOF, NOT PROMISES."
          className="max-w-3xl text-[clamp(2.2rem,6.5vw,6.5rem)] text-fog"
        />
      </div>

      <div className="relative z-10 mx-auto mt-14 max-w-7xl px-5 md:mt-24 md:px-10">
        {achievements.map((item, index) => (
          <div
            key={item.title}
            className="ach-row flex flex-col justify-between gap-4 border-t border-line py-10 transition-colors duration-500 hover:border-accent/40 md:flex-row md:items-end md:py-12"
          >
            <div className="flex items-baseline gap-6 md:gap-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-dim">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="ach-value text-gradient font-display text-[clamp(4rem,11vw,10rem)] font-bold leading-none tabular-nums">
                0
              </span>
            </div>
            <div className="md:text-right">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-fog md:text-4xl">
                {item.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-dim md:ml-auto md:text-base">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
