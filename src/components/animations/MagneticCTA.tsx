"use client"

import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Magnetic } from "./Magnetic"

type MagneticCTAProps = {
  href: string
  children: ReactNode
  variant?: "solid" | "outline"
  className?: string
  ariaLabel?: string
}

export function MagneticCTA({
  href,
  children,
  variant = "solid",
  className,
  ariaLabel,
}: MagneticCTAProps) {
  return (
    <Magnetic strength={0.35} className="inline-block">
      <a
        href={href}
        aria-label={ariaLabel}
        data-cursor="hover"
        className={cn(
          "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.25em] transition-colors duration-300",
          variant === "solid"
            ? "bg-fog text-void hover:text-fog"
            : "border border-line text-fog hover:text-void",
          className
        )}
      >
        <span
          className={cn(
            "absolute inset-0 -z-0 translate-y-full transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0",
            variant === "solid"
              ? "bg-gradient-to-r from-accent to-accent-2"
              : "bg-fog"
          )}
        />
        <span className="relative z-10">{children}</span>
        <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>
    </Magnetic>
  )
}
