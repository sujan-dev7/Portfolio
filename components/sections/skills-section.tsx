"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"

const skillCategories = [
  {
    name: "Frontend",
    color: "#64ffda",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind", level: 95 },
      { name: "Three.js", level: 80 },
    ],
  },
  {
    name: "Backend",
    color: "#ff6090",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "GraphQL", level: 78 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    name: "Tools",
    color: "#7c3aed",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 78 },
      { name: "Figma", level: 85 },
      { name: "CI/CD", level: 82 },
    ],
  },
]

const orbitingSkills = [
  { name: "React", angle: 0, radius: 1, color: "#61dafb" },
  { name: "Node", angle: 60, radius: 1, color: "#68a063" },
  { name: "TS", angle: 120, radius: 1, color: "#3178c6" },
  { name: "Python", angle: 180, radius: 1, color: "#ffd43b" },
  { name: "Next", angle: 240, radius: 1, color: "#ffffff" },
  { name: "AWS", angle: 300, radius: 1, color: "#ff9900" },
  { name: "Docker", angle: 30, radius: 1.5, color: "#2496ed" },
  { name: "Git", angle: 90, radius: 1.5, color: "#f05032" },
  { name: "Three", angle: 150, radius: 1.5, color: "#049ef4" },
  { name: "Figma", angle: 210, radius: 1.5, color: "#a259ff" },
  { name: "Redis", angle: 270, radius: 1.5, color: "#dc382d" },
  { name: "SQL", angle: 330, radius: 1.5, color: "#4479a1" },
]

function SkillOrbit() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-lg"
    >
      {/* Center circle */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary/50 bg-background/80"
        animate={{
          boxShadow: [
            "0 0 20px var(--glow-cyan)",
            "0 0 40px var(--glow-cyan)",
            "0 0 20px var(--glow-cyan)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="gradient-text font-mono text-lg font-bold">SKILLS</span>
      </motion.div>

      {/* Orbit rings */}
      {[1, 1.5].map((radius, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/30"
          style={{
            width: `${radius * 280}px`,
            height: `${radius * 280}px`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 30 + i * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Orbiting skills */}
      {orbitingSkills.map((skill, index) => {
        const angleRad = (skill.angle * Math.PI) / 180
        const x = Math.cos(angleRad) * skill.radius * 140
        const y = Math.sin(angleRad) * skill.radius * 140

        return (
          <motion.div
            key={skill.name}
            className="absolute left-1/2 top-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            <motion.div
              className="glass -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-xl px-3 py-2 transition-all"
              style={{ x, y }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 60 / (skill.radius * 2),
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ scale: 1.2, zIndex: 10 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{
                  duration: 60 / (skill.radius * 2),
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span
                  className="font-mono text-xs font-medium"
                  style={{
                    color: hoveredSkill === skill.name ? skill.color : "inherit",
                    textShadow:
                      hoveredSkill === skill.name
                        ? `0 0 10px ${skill.color}`
                        : "none",
                  }}
                >
                  {skill.name}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-sm text-foreground">{name}</span>
        <motion.span
          className="font-mono text-sm"
          style={{ color }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-border/50">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

function MagneticCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["5deg", "-5deg"])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-5deg", "5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set((mouseX - width / 2) / width)
    y.set((mouseY - height / 2) / height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-screen py-32">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.span className="mb-4 inline-block font-mono text-sm text-primary">
            {"<skills>"}
          </motion.span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-foreground">Technical </span>
            <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            A constellation of technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Orbital Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SkillOrbit />
          </motion.div>

          {/* Skill Categories */}
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <MagneticCard key={category.name}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                  className="glass rounded-2xl p-6"
                >
                  <h3
                    className="mb-6 flex items-center gap-3 text-xl font-bold"
                    style={{ color: category.color }}
                  >
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    {category.name}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={category.color}
                        delay={categoryIndex * 0.1 + skillIndex * 0.05}
                      />
                    ))}
                  </div>
                </motion.div>
              </MagneticCard>
            ))}
          </div>
        </div>

        {/* Section Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <span className="font-mono text-sm text-primary">{"</skills>"}</span>
        </motion.div>
      </div>
    </section>
  )
}
