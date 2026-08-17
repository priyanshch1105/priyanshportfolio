"use client"

import { FeaturedProject } from "@/components/projects/FeaturedProject"
import { EditorialTitle } from "@/components/animations/EditorialTitle"
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-7xl px-5 pt-28 md:px-10 md:pt-40">
        <div className="mb-10 flex items-center gap-4 md:mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">03</span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-dim">Work</span>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <EditorialTitle
            text="SELECTED WORK, BUILT TO MOVE."
            className="max-w-3xl text-[clamp(2.2rem,6.5vw,6.5rem)] text-fog"
          />
          <p className="max-w-xs text-sm leading-relaxed text-dim">
            Five systems, five disciplines — from SOS infrastructure to agentic DevOps. Full-screen,
            unapologetically cinematic.
          </p>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        {projects.map((project, index) => (
          <FeaturedProject key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
