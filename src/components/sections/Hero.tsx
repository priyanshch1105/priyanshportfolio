"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef } from "react"

import gsap from "gsap"

import { MagneticCTA } from "@/components/animations/MagneticCTA"
import { useIsMobile } from "@/hooks/useIsMobile"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { site } from "@/data/site"
import { isReducedMotion } from "@/utils/animations"

const HeroScene = dynamic(() => import("@/components/three/HeroScene").then((m) => m.HeroScene), {
  ssr: false,
  loading: () => null,
})

const LETTERS = Array.from("PRIYANSH")

export function Hero({ ready }: { ready: boolean }) {
  const rootRef = useRef<HTMLElement>(null)
  const isMobile = useIsMobile()
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!ready) return

    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      if (isReducedMotion()) {
        gsap.set(".hero-letter, .hero-fade, .hero-cta", { autoAlpha: 1, yPercent: 0, y: 0 })
        return
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })
      tl.fromTo(
        ".hero-letter",
        { yPercent: 130 },
        { yPercent: 0, duration: 1.3, stagger: 0.06 },
        0.15
      )
        .fromTo(
          ".hero-fade",
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12 },
          "-=0.85"
        )
        .fromTo(
          ".hero-cta",
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12 },
          "-=0.7"
        )
        .fromTo(
          ".hero-scroll-hint",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.8 },
          "-=0.4"
        )
    }, root)

    return () => ctx.revert()
  }, [ready])

  useEffect(() => {
    if (reduced || !rootRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(".hero-content", {
        yPercent: -14,
        autoAlpha: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <HeroScene isMobile={isMobile} />
      </div>
      <div className="absolute inset-0 z-0 vignette" aria-hidden="true" />
      <div className="absolute inset-0 z-0 grid-bg opacity-40 [mask-image:radial-gradient(80%_60%_at_50%_40%,black,transparent)]" aria-hidden="true" />

      <div className="hero-content relative z-10 flex min-h-[100svh] flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <h1
            className="font-display font-semibold leading-[0.9] tracking-tight text-fog"
            style={{ fontSize: "var(--text-hero)" }}
            aria-label="Priyansh"
          >
            <span aria-hidden="true" className="inline-flex overflow-hidden pb-[0.08em]">
              {LETTERS.map((letter, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <span className="hero-letter inline-block will-change-transform">{letter}</span>
                </span>
              ))}
            </span>
          </h1>

          <p className="hero-fade mt-6 max-w-md font-mono text-[11px] uppercase leading-relaxed tracking-[0.22em] text-mute md:mt-8 md:max-w-lg md:text-sm">
            Frontend Developer · AI/ML Engineer · Mobile App Developer
          </p>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 pb-20 md:flex-row md:items-end md:justify-between md:px-10">
          <blockquote className="hero-fade max-w-sm">
            <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.3em] text-dim">
              — Manifesto
            </span>
            <p className="font-display text-xl font-medium leading-snug text-fog md:text-2xl">
              {site.tagline}
            </p>
          </blockquote>

          <div className="hero-fade flex flex-wrap items-center gap-4 md:justify-end">
            <MagneticCTA href="#work" variant="solid">
              Explore Work
            </MagneticCTA>
            <MagneticCTA href="#contact" variant="outline">
              Let&apos;s Connect
            </MagneticCTA>
          </div>
        </div>

        <div className="hero-scroll-hint pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-dim">
              Scroll
            </span>
            <div className="relative h-12 w-px overflow-hidden bg-line">
              <span className="absolute inset-x-0 top-0 h-4 bg-fog motion-safe:animate-[scrolldot_1.6s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
