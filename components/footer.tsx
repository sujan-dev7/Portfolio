"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <motion.a
            href="#home"
            className="gradient-text font-mono text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            {"<"}
            <span className="text-foreground">Sujan</span>
            {"/>"}
          </motion.a>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 font-mono text-sm text-muted-foreground"
          >
            <span>&copy; {currentYear} Sujan Shrestha.</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-accent" /> and code
            </span>
          </motion.p>

          {/* Back to top */}
          <motion.button
            onClick={() =>
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            whileHover={{ y: -3 }}
          >
            Back to top
            <motion.svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </motion.svg>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
