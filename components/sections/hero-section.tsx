"use client"

import { motion } from "framer-motion"
import { Hero3D } from "@/components/hero-3d"
import { TypingEffect } from "@/components/typing-effect"
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/sujan-dev7", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sujan-shrestha-3787a737a/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/accounts/login/", label: "Instagram" },
]

export function HeroSection() {
  const handleScrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <Hero3D />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-mono text-sm text-primary">
            Welcome to my universe
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-5xl font-bold tracking-tight text-balance md:text-7xl lg:text-8xl"
        >
          <span className="text-foreground">{"Hi, I'm "}</span>
          <span className="gradient-text">Sujan Shrestha</span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 h-12 text-xl text-muted-foreground md:text-2xl lg:text-3xl"
        >
          <span>I build </span>
          <TypingEffect
            words={[
              "interactive experiences",
              "beautiful interfaces",
              "scalable systems",
              "digital products",
              "the future of web",
            ]}
            className="text-primary"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground text-pretty"
        >
          A full-stack developer and creative technologist crafting immersive digital
          experiences that push the boundaries of what&apos;s possible on the web.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 font-mono text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_var(--glow-cyan)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="rounded-full border border-border bg-transparent px-8 py-4 font-mono text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
              <motion.div
                className="absolute inset-0 -z-10 rounded-full bg-primary/20"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </section>
  )
}
