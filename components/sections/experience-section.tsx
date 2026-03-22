"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap, Award, Rocket } from "lucide-react"

const experiences = [
  {
    type: "work",
    icon: Rocket,
    title: "Senior Full-Stack Developer",
    company: "TechNova Labs",
    period: "2023 - Present",
    description:
      "Leading development of next-generation web applications with focus on performance and user experience. Architecting scalable solutions serving millions of users.",
    skills: ["Next.js", "TypeScript", "AWS", "GraphQL"],
    color: "#64ffda",
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Full-Stack Developer",
    company: "Digital Forge",
    period: "2021 - 2023",
    description:
      "Built and maintained complex web applications for enterprise clients. Introduced modern development practices and improved team productivity by 40%.",
    skills: ["React", "Node.js", "PostgreSQL", "Docker"],
    color: "#ff6090",
  },
  {
    type: "award",
    icon: Award,
    title: "Awwwards Site of the Day",
    company: "Creative Excellence",
    period: "2022",
    description:
      "Recognized for exceptional web design and development work on an interactive portfolio project.",
    skills: ["Three.js", "GSAP", "WebGL"],
    color: "#f59e0b",
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Frontend Developer",
    company: "StartupX",
    period: "2019 - 2021",
    description:
      "Developed user interfaces for a fast-growing SaaS platform. Collaborated closely with design team to implement pixel-perfect interfaces.",
    skills: ["Vue.js", "Tailwind CSS", "Firebase"],
    color: "#7c3aed",
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "B.S. Computer Science",
    company: "Tech University",
    period: "2015 - 2019",
    description:
      "Graduated with honors. Focused on software engineering and human-computer interaction. Led multiple research projects.",
    skills: ["Algorithms", "Data Structures", "HCI"],
    color: "#06b6d4",
  },
]

function TimelineItem({
  experience,
  index,
  isLast,
}: {
  experience: (typeof experiences)[0]
  index: number
  isLast: boolean
}) {
  const itemRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [index % 2 === 0 ? -50 : 50, 0]
  )

  return (
    <motion.div
      ref={itemRef}
      className={`relative flex items-center gap-8 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      style={{ opacity, scale, x }}
    >
      {/* Timeline line and dot */}
      <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-1/2">
        {!isLast && (
          <motion.div
            className="h-full w-full origin-top"
            style={{ backgroundColor: experience.color }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        )}
      </div>

      {/* Dot */}
      <motion.div
        className="absolute left-6 top-8 z-10 hidden h-4 w-4 rounded-full border-4 border-background md:left-1/2 md:block md:-translate-x-1/2"
        style={{ backgroundColor: experience.color }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />

      {/* Content */}
      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass group rounded-2xl p-6 transition-all hover:border-primary/30"
          whileHover={{
            boxShadow: `0 0 30px ${experience.color}20`,
            borderColor: experience.color,
          }}
        >
          {/* Header */}
          <div className="mb-4 flex items-start gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${experience.color}20` }}
            >
              <experience.icon
                className="h-6 w-6"
                style={{ color: experience.color }}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">
                {experience.title}
              </h3>
              <p className="font-mono text-sm text-muted-foreground">
                {experience.company}
              </p>
            </div>
          </div>

          {/* Period */}
          <div
            className="mb-4 inline-block rounded-full px-3 py-1 font-mono text-xs"
            style={{
              backgroundColor: `${experience.color}20`,
              color: experience.color,
            }}
          >
            {experience.period}
          </div>

          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {experience.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-border bg-background/50 px-2 py-1 font-mono text-xs text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden w-1/2 md:block" />
    </motion.div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative min-h-screen py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.span className="mb-4 inline-block font-mono text-sm text-primary">
            {"<experience>"}
          </motion.span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-foreground">My </span>
            <span className="gradient-text">Timeline</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            A chronological journey through my professional growth and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Center line for desktop */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-1/2" />

          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Section Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <span className="font-mono text-sm text-primary">{"</experience>"}</span>
        </motion.div>
      </div>
    </section>
  )
}
