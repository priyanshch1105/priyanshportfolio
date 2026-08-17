"use client"

import { useEffect, useRef } from "react"

import gsap from "gsap"

import { ProjectVisual } from "@/components/projects/ProjectVisual"
import { EditorialTitle } from "@/components/animations/EditorialTitle"
import { projects } from "@/data/projects"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { horizontalScroll } from "@/utils/animations"

export function HorizontalGallery() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const wrapper = wrapperRef.current
    const track = trackRef.current
    if (!wrapper || !track) return
    if (reduced || window.innerWidth < 768) return

    const ctx = gsap.context(() => {
      horizontalScroll(wrapper, track)
    }, wrapper)

    return () => {
      ctx.revert()
      gsap.delayedCall(0.1, () => window.dispatchEvent(new Event("resize")))
    }
  }, [reduced])

  return (
    <section id="gallery" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 pt-28 md:px-10 md:pt-40">
        <div className="mb-10 flex items-center gap-4 md:mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">04</span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-dim">Gallery</span>
        </div>

        <EditorialTitle
          text="THE FULL ARCHIVE."
          className="max-w-3xl text-[clamp(2.2rem,6.5vw,6.5rem)] text-fog"
        />
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-dim">
          Keep scrolling — vertical motion drives a horizontal journey through every project.
        </p>
      </div>

      <div
        ref={wrapperRef}
        className="relative mt-16 overflow-hidden border-t border-line md:mt-28 md:h-screen"
      >
        <div
          ref={trackRef}
          className="flex flex-col gap-10 px-5 py-16 md:h-full md:flex-row md:items-center md:gap-0 md:py-0 md:pl-10"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              data-cursor="view"
              className="group relative flex w-full shrink-0 flex-col justify-between border-line pb-2 md:w-[46vw] md:border-r md:pr-14 lg:w-[40vw]"
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="font-display text-6xl font-semibold leading-none md:text-8xl"
                  style={{ color: project.accent }}
                >
                  {project.number}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-dim">
                  {project.year}
                </span>
              </div>

              <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden md:mt-10">
                <ProjectVisual project={project} />
                <div
                  className="absolute inset-0 flex items-end p-5 opacity-0 transition-all duration-500 group-hover:opacity-100 md:p-6"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
                    {project.category} · {project.stack.slice(0, 3).join(" · ")}
                  </span>
                </div>
              </div>

              <h3 className="mt-8 font-display text-3xl font-semibold tracking-tight text-fog md:text-5xl">
                {project.title}
              </h3>

              <div className="mt-4 flex items-center justify-between">
                <p className="max-w-sm text-sm leading-relaxed text-dim md:text-base">
                  {project.description.length > 110
                    ? `${project.description.slice(0, 110)}…`
                    : project.description}
                </p>
                <span className="ml-6 hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.25em] text-accent md:inline-block">
                  View ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
