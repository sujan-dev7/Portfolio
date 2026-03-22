"use client"

import { useState } from "react"
import { Preloader } from "@/components/preloader"
import { CustomCursor } from "@/components/custom-cursor"
import { StarBackground } from "@/components/star-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      <Preloader onComplete={() => setIsLoaded(true)} />

      {isLoaded && (
        <>
          <CustomCursor />
          <StarBackground />
          <Navigation />

          <main className="relative">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
          </main>

          <Footer />
        </>
      )}
    </>
  )
}
