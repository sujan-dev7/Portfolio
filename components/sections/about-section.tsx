"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Code2, Rocket, Heart, Lightbulb } from "lucide-react"

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "30+", label: "Happy Clients" },
  { number: "10+", label: "Awards Won" },
]

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and efficiency in every project.",
  },
  {
    icon: Heart,
    title: "User First",
    description: "Creating experiences that users love and remember.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technologies.",
  },
]

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative min-h-screen py-32"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

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
            {"<about>"}
          </motion.span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-foreground">My </span>
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            From curiosity to creation, exploring the art of digital craftsmanship
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Story Section */}
          <motion.div style={{ y, opacity }} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                The Beginning
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                My journey into the digital world started with a simple &quot;Hello World&quot; 
                that sparked an endless curiosity. What began as tinkering with HTML and 
                CSS evolved into a deep passion for creating experiences that matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                The Evolution
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Over the years, I&apos;ve transformed from a curious learner to a 
                full-stack developer specializing in immersive web experiences. 
                Every project is an opportunity to blend creativity with technical 
                excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="mb-4 text-2xl font-bold text-foreground">
                The Mission
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Today, I focus on building digital experiences that push boundaries. 
                Whether it&apos;s a complex web application or an interactive art piece, 
                I believe in creating work that inspires and innovates.
              </p>
            </motion.div>
          </motion.div>

          {/* Highlights & Stats */}
          <div className="space-y-12">
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass group rounded-xl p-6 transition-all hover:border-primary/30"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary/20">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="mb-2 font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="gradient-text mb-2 text-3xl font-bold md:text-4xl">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Fun fact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 p-8"
            >
              <div className="relative z-10">
                <p className="mb-2 font-mono text-sm text-primary">
                  // fun_fact.ts
                </p>
                <p className="text-lg text-foreground">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                  contributing to open source, or perfecting my coffee brewing technique.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            </motion.div>
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
          <span className="font-mono text-sm text-primary">{"</about>"}</span>
        </motion.div>
      </div>
    </section>
  )
}
