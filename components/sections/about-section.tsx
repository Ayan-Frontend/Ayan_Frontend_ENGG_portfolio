'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCode, FaRocket, FaPalette, FaLightbulb } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'

const stats = [
  { label: 'Projects Completed', value: '15+', icon: FaCode },
  { label: 'Technologies Learned', value: '20+', icon: FaLightbulb },
  { label: 'GitHub Contributions', value: '500+', icon: FaRocket },
  { label: 'Years Experience', value: '2+', icon: HiSparkles },
]

const highlights = [
  {
    icon: FaCode,
    title: 'Frontend Engineering',
    description: 'Building performant and accessible user interfaces with React, TypeScript, and modern CSS frameworks.',
  },
  {
    icon: FaRocket,
    title: 'Performance Optimization',
    description: 'Obsessed with Core Web Vitals, lazy loading, code splitting, and delivering lightning-fast experiences.',
  },
  {
    icon: FaPalette,
    title: 'UI/UX Focus',
    description: 'Creating intuitive, beautiful interfaces that users love. Attention to micro-interactions and visual polish.',
  },
  {
    icon: FaLightbulb,
    title: 'Scalable Architecture',
    description: 'Designing component systems and codebases that scale gracefully with business requirements.',
  },
]

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 aurora opacity-50" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary font-mono mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Passionate</span> About
            <br />
            Building The Web
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Diploma Computer Science student with a deep passion for frontend development. 
            I specialize in creating scalable, interactive, and high-performance web applications 
            that deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Bio Card */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative glass rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Who I Am</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {"I'm a frontend developer who believes that great software is built at the intersection of clean code, beautiful design, and seamless user experience."}
                </p>
                <p>
                  My journey in web development started with curiosity about how websites work, 
                  and has evolved into a passion for crafting pixel-perfect, performant applications 
                  that solve real problems.
                </p>
                <p>
                  When {"I'm"} not coding, you can find me exploring new technologies, 
                  contributing to open source, or diving deep into UI/UX design principles 
                  to level up my craft.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative glass rounded-2xl p-6 h-full glass-hover transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative glass rounded-2xl p-6 text-center glass-hover transition-all duration-300">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
