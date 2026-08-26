"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef } from "react"

import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import gsap from "gsap"

import { Magnetic } from "@/components/animations/Magnetic"
import { MagneticCTA } from "@/components/animations/MagneticCTA"
import { useIsMobile } from "@/hooks/useIsMobile"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { site } from "@/data/site"
import { isReducedMotion } from "@/utils/animations"

const ContactScene = dynamic(
  () =>
    import("@/components/three/ContactScene").then(
      (m) => m.ContactScene
    ),
  {
    ssr: false,
    loading: () => null,
  }
)

const LINES = [
  { words: ["LET'S", "BUILD"] },
  { words: ["SOMETHING"] },
  { words: ["GREAT."] },
]

const SOCIALS = [
  {
    label: "GitHub",
    href: site.socials.github.href,
    icon: Github,
    handle: site.socials.github.handle,
  },
  {
    label: "LinkedIn",
    href: site.socials.linkedin.href,
    icon: Linkedin,
    handle: site.socials.linkedin.handle,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    icon: Mail,
    handle: site.email,
  },
  {
    label: "Instagram",
    href: site.socials.instagram.href,
    icon: Instagram,
    handle: site.socials.instagram.handle,
  },
]

export function Contact() {
  const rootRef = useRef<HTMLElement>(null)
  const isMobile = useIsMobile()
  const reduced = useReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      if (isReducedMotion()) {
        gsap.set(".contact-letter, .contact-fade", {
          autoAlpha: 1,
          yPercent: 0,
          y: 0,
        })
        return
      }

      gsap.fromTo(
        ".contact-letter",
        { yPercent: 130 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.025,
          scrollTrigger: {
            trigger: root,
            start: "top 55%",
            once: true,
          },
        }
      )

      gsap.fromTo(
        ".contact-fade",
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.6,
          scrollTrigger: {
            trigger: root,
            start: "top 50%",
            once: true,
          },
        }
      )
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={rootRef}
      id="contact"
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-32 md:pt-40"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <ContactScene isMobile={isMobile} />
      </div>

      <div
        className="absolute inset-0 z-0 vignette"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 md:px-10">
        <div className="mb-10 flex items-center gap-4 md:mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
            08
          </span>

          <span className="h-px flex-1 bg-line" />

          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-dim">
            Contact
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <h2 className="text-[clamp(2.8rem,10vw,9.5rem)] font-semibold leading-[0.92] tracking-tight text-fog">
            {LINES.map((line, li) => (
              <span key={li} className="block">
                {line.words.map((word, wi) => (
                  <span key={`${word}-${wi}`}>
                    <span className="mr-[0.28em] inline-flex overflow-hidden pb-[0.06em] align-bottom">
                      {Array.from(word).map((letter, letterIndex) => (
                        <span
                          key={letterIndex}
                          className="inline-block overflow-hidden"
                        >
                          <span className="contact-letter inline-block will-change-transform">
                            {letter}
                          </span>
                        </span>
                      ))}
                    </span>

                    {wi < line.words.length - 1 ? <span> </span> : null}
                  </span>
                ))}
              </span>
            ))}
          </h2>

          <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="contact-fade max-w-sm">
              <p className="font-display text-lg leading-relaxed text-mute md:text-xl">
                Have a product idea, mobile app, or software project in mind?
                Let&apos;s build something reliable, useful, and built to scale.
              </p>

              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-dim">
                {site.location}
              </p>
            </div>

            <div className="contact-fade flex flex-col items-start gap-5 md:items-end">
              <MagneticCTA
                href={`mailto:${site.email}`}
                variant="solid"
              >
                Let&apos;s Connect
              </MagneticCTA>

              <div className="mt-2 flex flex-wrap gap-3">
                {SOCIALS.map((social) => (
                  <Magnetic key={social.label} strength={0.3}>
                    <a
                      href={social.href}
                      target={
                        social.href.startsWith("mailto")
                          ? undefined
                          : "_blank"
                      }
                      rel="noreferrer"
                      aria-label={social.label}
                      data-cursor="hover"
                      className="glass group flex items-center gap-2.5 rounded-full px-4 py-2.5 transition-colors duration-300 hover:border-accent/50"
                    >
                      <social.icon
                        size={15}
                        className="text-mute transition-colors group-hover:text-accent"
                      />

                      <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-mute sm:inline">
                        {social.label}
                      </span>
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-fade relative z-10 mx-auto mt-20 w-full max-w-7xl px-5 pb-8 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-dim">
            {site.name} · Software · Mobile · Web
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-dim">
            Priyansh Chaurasiya © 2026
          </span>
        </div>
      </div>
    </section>
  )
}