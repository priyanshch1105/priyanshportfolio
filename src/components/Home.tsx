"use client"

import { useState } from "react"

import { Preloader } from "@/components/animations/Preloader"
import { CustomCursor } from "@/components/animations/CustomCursor"
import { ScrollProgress } from "@/components/animations/ScrollProgress"
import { Nav } from "@/components/sections/Nav"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { TechUniverse } from "@/components/sections/TechUniverse"
import { Projects } from "@/components/sections/Projects"
import { HorizontalGallery } from "@/components/sections/HorizontalGallery"
import { Experience } from "@/components/sections/Experience"
import { Achievements } from "@/components/sections/Achievements"
import { CodingSection } from "@/components/sections/CodingSection"
import { Contact } from "@/components/sections/Contact"

export function Home() {
  const [ready, setReady] = useState(false)

  return (
    <>
      <Preloader onComplete={() => setReady(true)} />
      <CustomCursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero ready={ready} />
        <About />
        <TechUniverse />
        <Projects />
        <HorizontalGallery />
        <Experience />
        <Achievements />
        <CodingSection />
        <Contact />
      </main>
    </>
  )
}
