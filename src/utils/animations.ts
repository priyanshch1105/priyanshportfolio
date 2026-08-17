import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const isReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

export const isTouchDevice = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches

export const useMotion = () => !isReducedMotion() && !isTouchDevice()

export { gsap, ScrollTrigger }

/* ------------------------------------------------------------------ */
/* Shared tween variable types                                         */
/* ------------------------------------------------------------------ */

export type RevealVars = {
  trigger?: gsap.DOMTarget
  start?: string
  end?: string
  y?: number
  duration?: number
  stagger?: number
  ease?: string
  once?: boolean
  scrub?: boolean | number
}

export type ParallaxVars = {
  trigger?: gsap.DOMTarget
  amount?: number
  start?: string
  end?: string
}

export type ClipVars = {
  trigger?: gsap.DOMTarget
  start?: string
  direction?: "up" | "down" | "left" | "right" | "scale"
  duration?: number
  ease?: string
  once?: boolean
}

/* ------------------------------------------------------------------ */
/* Utilities                                                           */
/* ------------------------------------------------------------------ */

export function fadeUp(targets: gsap.DOMTarget, vars: RevealVars = {}) {
  const {
    trigger = targets,
    start = "top 86%",
    y = 56,
    duration = 1.1,
    stagger = 0.08,
    ease = "power3.out",
    once = true,
  } = vars

  if (isReducedMotion()) {
    gsap.set(targets, { autoAlpha: 1, y: 0 })
    return null
  }

  return gsap.fromTo(
    targets,
    { autoAlpha: 0, y },
    {
      autoAlpha: 1,
      y: 0,
      duration,
      ease,
      stagger,
      scrollTrigger: { trigger, start, once },
    }
  )
}

/**
 * Reveals text already split into `.word-inner` / `.char-inner` spans
 * (rendered by <SplitText>) by translating them out of their masks.
 */
export function revealText(
  target: gsap.DOMTarget,
  vars: Pick<RevealVars, "trigger" | "start" | "stagger" | "duration" | "ease" | "once"> = {}
) {
  const { trigger = target, start = "top 82%", stagger = 0.018, duration = 1.1, ease = "power4.out", once = true } = vars

  const elements = gsap.utils.toArray<HTMLElement>(target)
  const inners = elements.flatMap((el) => [
    ...Array.from(el.querySelectorAll<HTMLElement>(".word-inner")),
    ...Array.from(el.querySelectorAll<HTMLElement>(".char-inner")),
  ])

  if (isReducedMotion() || inners.length === 0) {
    gsap.set(inners.length ? inners : target, { yPercent: 0, autoAlpha: 1 })
    return null
  }

  return gsap.fromTo(
    inners,
    { yPercent: 120 },
    {
      yPercent: 0,
      duration,
      ease,
      stagger,
      scrollTrigger: { trigger, start, once },
    }
  )
}

export function parallax(target: gsap.DOMTarget, vars: ParallaxVars = {}) {
  const { trigger = target, amount = 90, start = "top bottom", end = "bottom top" } = vars

  if (isReducedMotion()) return null

  return gsap.fromTo(
    target,
    { y: -amount },
    {
      y: amount,
      ease: "none",
      scrollTrigger: { trigger, start, end, scrub: 1 },
    }
  )
}

export function clipReveal(target: gsap.DOMTarget, vars: ClipVars = {}) {
  const {
    trigger = target,
    start = "top 82%",
    direction = "up",
    duration = 1.4,
    ease = "power4.inOut",
    once = true,
  } = vars

  const clipPaths: Record<NonNullable<ClipVars["direction"]>, string> = {
    up: "inset(0% 0% 100% 0%)",
    down: "inset(100% 0% 0% 0%)",
    left: "inset(0% 100% 0% 0%)",
    right: "inset(0% 0% 0% 100%)",
    scale: "inset(10% 10% 10% 10%)",
  }

  if (isReducedMotion()) {
    gsap.set(target, { clipPath: "inset(0% 0% 0% 0%)", autoAlpha: 1 })
    return null
  }

  return gsap.fromTo(
    target,
    { clipPath: clipPaths[direction] },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      duration,
      ease,
      scrollTrigger: { trigger, start, once },
    }
  )
}

/**
 * Horizontal pin-and-scroll gallery. The track translates horizontally
 * while the wrapper stays pinned. Returns the tween for cleanup.
 */
export function horizontalScroll(
  wrapper: HTMLElement,
  track: HTMLElement,
  vars: { start?: string; speed?: number } = {}
) {
  const { start = "top top", speed = 1 } = vars

  const getDistance = () => {
    const distance = track.scrollWidth - window.innerWidth
    return Math.max(distance, 0) * speed
  }

  if (isReducedMotion()) return null

  return gsap.to(track, {
    x: () => -getDistance(),
    ease: "none",
    scrollTrigger: {
      trigger: wrapper,
      start,
      end: () => `+=${getDistance()}`,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  })
}

/**
 * Attaches a magnetic effect to an element. Returns a cleanup function.
 * Respects reduced-motion and coarse pointers.
 */
export function magneticElement(element: HTMLElement, strength = 0.35) {
  if (!element || isReducedMotion() || isTouchDevice()) return () => {}

  const xTo = gsap.quickTo(element, "x", { duration: 0.8, ease: "power3" })
  const yTo = gsap.quickTo(element, "y", { duration: 0.8, ease: "power3" })

  const onMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    xTo((e.clientX - (rect.left + rect.width / 2)) * strength)
    yTo((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const onLeave = () => {
    xTo(0)
    yTo(0)
  }

  element.addEventListener("mousemove", onMove)
  element.addEventListener("mouseleave", onLeave)

  return () => {
    element.removeEventListener("mousemove", onMove)
    element.removeEventListener("mouseleave", onLeave)
  }
}

/**
 * Sets a gradient background that subtly shifts with the mouse, purely
 * for scroll-independent ambience.
 */
export function tiltElement(element: HTMLElement, maxTilt = 8) {
  if (!element || isReducedMotion() || isTouchDevice()) return () => {}

  const onMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    element.style.transform = `perspective(900px) rotateY(${px * maxTilt}deg) rotateX(${-py * maxTilt}deg)`
  }

  const onLeave = () => {
    element.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)"
  }

  element.addEventListener("mousemove", onMove)
  element.addEventListener("mouseleave", onLeave)

  return () => {
    element.removeEventListener("mousemove", onMove)
    element.removeEventListener("mouseleave", onLeave)
  }
}
