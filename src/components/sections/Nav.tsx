"use client"

import { useEffect, useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

import { site } from "@/data/site"
import { cn } from "@/lib/utils"

const SECTION_IDS = ["work", "about", "experience", "contact"]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setHidden(y > lastY && y > 200)
      lastY = y
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -50% 0px" }
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = ""
    }
    return () => {
      document.documentElement.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[70] flex items-center justify-between px-5 transition-all duration-500 md:px-10",
          hidden ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 md:px-6",
            scrolled && "glass"
          )}
          style={{ marginTop: scrolled ? 14 : 22 }}
        >
          <a
            href="#top"
            data-cursor="hover"
            className="font-display text-lg font-semibold tracking-tight text-fog"
          >
            PRIY<span className="text-accent">ANSH</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {site.nav.map((item) => {
              const isActive = active === item.href.replace("#", "")
              return (
                <a
                  key={item.href}
                  href={item.href}
                  data-cursor="hover"
                  className={cn(
                    "group relative font-mono text-[11px] uppercase tracking-[0.25em] transition-colors duration-300",
                    isActive ? "text-fog" : "text-mute hover:text-fog"
                  )}
                >
                  <span
                    className={cn(
                      "absolute -left-4 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-accent transition-all duration-300",
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    )}
                  />
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-dim">
              Available for work
            </span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
            </span>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            data-cursor="hover"
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={cn(
                "block h-px w-6 bg-fog transition-transform duration-300",
                open && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-fog transition-transform duration-300",
                open && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[65] flex flex-col bg-void md:hidden"
          >
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute inset-0 noise" />
            <nav
              className="relative z-10 flex flex-1 flex-col justify-center gap-2 px-8"
              aria-label="Mobile"
            >
              {site.nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline gap-4 border-b border-line py-4"
                >
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <span className="font-display text-5xl font-semibold tracking-tight text-fog">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative z-10 flex justify-between px-8 pb-10"
            >
              <a href={`mailto:${site.email}`} className="font-mono text-xs text-mute">
                {site.email}
              </a>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-dim">
                © 2026
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
