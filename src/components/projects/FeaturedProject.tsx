"use client"

import { useEffect, useRef } from "react"

import gsap from "gsap"

import { ProjectVisual } from "./ProjectVisual"
import type { Project } from "@/data/projects"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { clipReveal, parallax, revealText, fadeUp, isReducedMotion } from "@/utils/animations"

type FeaturedProjectProps = {
  project: Project
  index: number
}

/**
 * A full-viewport cinematic project showcase. Each panel reveals its visual
 * with a clip-path wipe, its title word-by-word and the visual drifts with
 * parallax while you keep scrolling.
 */
export function FeaturedProject({ project, index }: FeaturedProjectProps) {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      if (isReducedMotion()) {
        gsap.set(".fp-visual, .fp-title .word-inner, .fp-fade", { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", y: 0, yPercent: 0 })
        return
      }

      clipReveal(".fp-visual", { trigger: root, start: "top 70%", direction: "left", duration: 1.5 })
      revealText(".fp-title", { trigger: root, start: "top 62%", stagger: 0.04 })
      fadeUp(".fp-fade", { trigger: root, start: "top 58%", stagger: 0.1 })
      parallax(".fp-visual", { trigger: root, amount: -70 })
      gsap.to(".fp-visual", {
        scale: 1.06,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 1.2 },
      })
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden border-t border-line py-24 md:py-0"
      style={{ borderColor: "var(--color-line)" }}
    >
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -top-6 right-2 font-display text-[clamp(7rem,24vw,24rem)] font-bold leading-none opacity-40 md:top-auto md:right-10"
      >
        {project.number}
      </span>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 md:grid-cols-12 md:items-center md:gap-10 md:px-10">
        <div className="md:col-span-6 lg:col-span-5">
          <div className="fp-fade mb-6 flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em]" style={{ color: project.accent }}>
              {project.number}
            </span>
            <span className="h-px w-10 bg-line" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mute">
              {project.category}
            </span>
            <span className="font-mono text-[11px] text-dim">{project.year}</span>
          </div>

          <h3 className="fp-title font-display text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[0.95] tracking-tight text-fog">
            {project.title.split(" ").map((word, i) => (
              <span key={i} className="inline">
                <span className="word-mask">
                  <span className="word-inner">{word}</span>
                </span>
                {i < project.title.split(" ").length - 1 ? <span> </span> : null}
              </span>
            ))}
          </h3>

          <p className="fp-fade mt-6 max-w-md text-base leading-relaxed text-mute md:text-lg">
            {project.description}
          </p>

          <div className="fp-fade mt-8 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-fog/80"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="fp-fade mt-10">
            <a
              href={project.cta.href}
              target="_blank"
              rel="noreferrer"
              data-cursor="view"
              className="group inline-flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-fog"
            >
              <span
                className="inline-block h-px w-12 transition-all duration-400 group-hover:w-20"
                style={{ background: project.accent }}
              />
              {project.cta.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>
        </div>

        <div className="relative md:col-span-6 lg:col-span-7">
          <div className="fp-visual relative aspect-[4/3] w-full overflow-hidden md:aspect-[4/3.4]">
            <ProjectVisual project={project} />
            <div
              className="pointer-events-none absolute inset-0"
              style={{ boxShadow: `inset 0 0 0 1px ${project.accent}33, inset 0 0 120px rgba(0,0,0,0.5)` }}
            />
            <div className="absolute left-5 top-5 flex items-center gap-2">
              <span className="glass rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-fog/80">
                {project.visual}
              </span>
            </div>
          </div>
        </div>
      </div>

      <span className="sr-only">{`Project ${project.number} — ${index + 1}`}</span>
    </section>
  )
}
