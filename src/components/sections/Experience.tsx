"use client"

import { useEffect, useRef } from "react"

import gsap from "gsap"

import { EditorialTitle } from "@/components/animations/EditorialTitle"
import { experience } from "@/data/experience"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { fadeUp, isReducedMotion } from "@/utils/animations"

export function Experience() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      if (isReducedMotion()) {
        gsap.set(".exp-fill", { scaleY: 1 })
        gsap.set(".exp-entry", { autoAlpha: 1, y: 0 })
        return
      }

      gsap.fromTo(
        ".exp-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top 75%", end: "bottom 55%", scrub: 0.8 },
        }
      )

      fadeUp(".exp-entry", { trigger: root, start: "top 60%", stagger: 0.18 })
      fadeUp(".exp-index", { trigger: root, start: "top 60%", stagger: 0.18 })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} id="experience" className="relative overflow-hidden py-28 md:py-44">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 flex items-center gap-4 md:mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">05</span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-dim">Experience</span>
        </div>

        <EditorialTitle
          text="THE JOURNEY SO FAR."
          className="max-w-3xl text-[clamp(2.2rem,6.5vw,6.5rem)] text-fog"
        />
      </div>

      <div className="relative mx-auto mt-16 max-w-5xl px-5 md:mt-28 md:px-10">
        <div className="absolute bottom-0 left-[13px] top-0 w-px bg-line md:left-[13px]" aria-hidden="true">
          <div className="exp-fill h-full w-full origin-top bg-gradient-to-b from-accent via-accent-2 to-aqua" style={{ transform: "scaleY(0)" }} />
        </div>

        <ol className="space-y-16 md:space-y-24">
          {experience.map((entry, index) => (
            <li key={entry.role} className="relative pl-12 md:pl-20">
              <span
                className="exp-index absolute left-[6px] top-1.5 flex h-4 w-4 items-center justify-center md:left-[6px]"
                aria-hidden="true"
              >
                <span className="absolute h-4 w-4 rounded-full bg-accent/20" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>

              <div className="exp-entry">
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-fog md:text-4xl">
                    {entry.role}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                    {entry.period}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-mute">
                  {entry.org}
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-dim md:text-lg">
                  {entry.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm leading-relaxed text-mute md:text-base">
                      <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <span
                className="text-outline pointer-events-none absolute -right-2 top-0 font-display text-6xl font-bold opacity-30 md:text-8xl"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
