"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Nebula Dashboard",
    description:
      "A real-time analytics dashboard with 3D data visualizations, built for enterprise-scale monitoring and insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Three.js", "D3.js", "WebSocket"],
    color: "#64ffda",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Quantum Commerce",
    description:
      "A next-generation e-commerce platform with AI-powered recommendations and immersive product experiences.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    tags: ["Next.js", "Stripe", "OpenAI", "PostgreSQL"],
    color: "#ff6090",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Synth Studio",
    description:
      "A browser-based music production studio with real-time collaboration and AI-assisted composition.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
    tags: ["Web Audio", "React", "WebRTC", "TensorFlow"],
    color: "#7c3aed",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 4,
    title: "Neural Canvas",
    description:
      "An AI art generator that creates unique visual masterpieces from text descriptions.",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&auto=format&fit=crop&q=80",
    tags: ["Python", "Stable Diffusion", "FastAPI", "React"],
    color: "#f59e0b",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 5,
    title: "Cipher Chat",
    description:
      "End-to-end encrypted messaging platform with disappearing messages and zero-knowledge architecture.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=80",
    tags: ["React Native", "Signal Protocol", "Node.js"],
    color: "#06b6d4",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: 6,
    title: "Terra Tracker",
    description:
      "Climate change visualization platform with real-time satellite data and predictive modeling.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    tags: ["Vue.js", "Mapbox", "Python", "NASA API"],
    color: "#10b981",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
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
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`group relative ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="glass relative h-full overflow-hidden rounded-2xl transition-all duration-300"
        style={{
          borderColor: isHovered ? project.color : "transparent",
          boxShadow: isHovered ? `0 0 30px ${project.color}30` : "none",
        }}
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-110"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
              aria-label="View GitHub repository"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full text-background transition-transform hover:scale-110"
              style={{ backgroundColor: project.color }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              aria-label="View live site"
            >
              <ExternalLink className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4 flex items-start justify-between">
            <h3
              className="text-xl font-bold transition-colors"
              style={{ color: isHovered ? project.color : "inherit" }}
            >
              {project.title}
            </h3>
            <motion.div
              animate={{ x: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight
                className="h-5 w-5"
                style={{ color: project.color }}
              />
            </motion.div>
          </div>

          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Glow effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.color}10, transparent 40%)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "featured">("all")
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="relative min-h-screen py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.span className="mb-4 inline-block font-mono text-sm text-primary">
            {"<projects>"}
          </motion.span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-foreground">Featured </span>
            <span className="gradient-text">Work</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground text-pretty">
            A collection of projects that showcase my passion for creating
            exceptional digital experiences
          </p>

          {/* Filter buttons */}
          <div className="flex items-center justify-center gap-4">
            {(["all", "featured"] as const).map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-6 py-2 font-mono text-sm capitalize transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-border/50 text-muted-foreground hover:bg-border"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {f}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Section Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <span className="font-mono text-sm text-primary">{"</projects>"}</span>
        </motion.div>
      </div>
    </section>
  )
}
