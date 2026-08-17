import { useEffect } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"

import { useReducedMotion } from "./useReducedMotion"

gsap.registerPlugin(ScrollTrigger)

/**
 * Global smooth-scroll orchestration. Runs Lenis, drives GSAP's ticker and
 * keeps ScrollTrigger in sync with Lenis' virtual scroll.
 */
export function useLenis() {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      anchors: true,
    })

    lenis.on("scroll", ScrollTrigger.update)

    const update = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    const onResize = () => ScrollTrigger.refresh()

    window.addEventListener("resize", onResize)

    return () => {
      gsap.ticker.remove(update)
      window.removeEventListener("resize", onResize)
      lenis.destroy()
      ScrollTrigger.clearScrollMemory?.()
    }
  }, [reducedMotion])
}
