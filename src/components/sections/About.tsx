"use client"

import { useEffect, useRef } from "react"

import gsap from "gsap"

import { EditorialTitle } from "@/components/animations/EditorialTitle"
import { expertise } from "@/data/technologies"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { fadeUp, isReducedMotion } from "@/utils/animations"

export function About() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!rootRef.current) return

    const ctx = gsap.context(() => {
      if (isReducedMotion()) {
        gsap.set(".about-fade", { autoAlpha: 1, y: 0 })
        return
      }
      fadeUp(".about-fade", { trigger: rootRef.current, stagger: 0.12 })
      fadeUp(".about-tag", { trigger: rootRef.current, stagger: 0.05 })
    }, rootRef)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={rootRef} id="about" className="relative overflow-hidden py-28 md:py-44">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(70%_60%_at_20%_30%,black,transparent)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="about-fade mb-10 flex items-center gap-4 md:mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">01</span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-dim">About</span>
        </div>

        <EditorialTitle
          text="ENGINEERING DIGITAL EXPERIENCES."
          className="text-[clamp(2.4rem,7.5vw,7.5rem)] text-fog"
          accentWords={[0]}
        />

        <div className="mt-14 grid gap-12 md:mt-24 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="about-fade max-w-2xl font-display text-xl leading-relaxed text-mute md:text-2xl">
              I&apos;m <span className="text-fog">Priyansh</span> — a builder at the intersection of
              product, intelligence and motion. I ship interfaces that feel alive, AI systems that
              reason, and mobile apps that run anywhere.
            </p>
            <p className="about-fade mt-6 max-w-2xl text-base leading-relaxed text-dim md:text-lg">
              From agentic DevOps pipelines governed by policy engines to RAG tutoring systems that
              read source documents — every system I build obsesses over the same thing:{" "}
              <span className="text-fog">craft that performs</span>. Cinematic frontends, intelligent
              backends, and the small details in between.
            </p>
          </div>

          <div className="md:col-span-5">
            <p className="about-fade mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-dim">
              Core expertise
            </p>
            <div className="flex flex-wrap gap-2.5">
              {expertise.map((skill) => (
                <span
                  key={skill}
                  data-cursor="hover"
                  className="about-tag glass rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-fog/90 transition-colors duration-300 hover:border-accent/50 hover:text-fog"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="about-fade mt-10 border-l-2 border-accent/60 pl-5">
              <p className="font-display text-lg italic leading-relaxed text-mute">
                “Design is intelligence made visible — I just add motion and meaning.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
