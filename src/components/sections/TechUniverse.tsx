"use client"

import dynamic from "next/dynamic"

import { EditorialTitle } from "@/components/animations/EditorialTitle"
import { domainColors, technologies } from "@/data/technologies"
import { useIsMobile } from "@/hooks/useIsMobile"

const TechConstellationScene = dynamic(
  () =>
    import("@/components/three/TechConstellation").then(
      (m) => m.TechConstellationScene
    ),
  { ssr: false, loading: () => null }
)

const LEGEND = [
  { label: "Frontend", color: domainColors.frontend },
  { label: "Mobile", color: domainColors.mobile },
  { label: "Backend", color: domainColors.backend },
]

export function TechUniverse() {
  const isMobile = useIsMobile()

  return (
    <section id="stack" className="relative overflow-hidden py-28 md:py-44">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-10 flex items-center gap-4 md:mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            02
          </span>

          <span className="h-px flex-1 bg-line" />

          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-dim">
            Universe
          </span>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <EditorialTitle
            text="ONE CONSTELLATION, ENDLESS TOOLS."
            className="max-w-3xl text-[clamp(2.2rem,6.5vw,6.5rem)] text-fog"
          />

          <p className="max-w-xs text-sm leading-relaxed text-dim">
            Hover the stars. Every node below ships real products — hover to
            inspect the map.
          </p>
        </div>
      </div>

      <div
        className="relative mx-auto mt-6 h-[46vh] w-full md:mt-12 md:h-[70vh]"
        data-cursor="hover"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <TechConstellationScene isMobile={isMobile} />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-void to-transparent" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void to-transparent" />
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 md:mt-12 md:justify-between md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {LEGEND.map((item) => (
            <span key={item.label} className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: item.color }}
              />

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
                {item.label}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="sr-only" aria-label="Technologies used">
        <ul>
          {technologies.map((tech) => (
            <li key={tech.name}>{tech.name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
