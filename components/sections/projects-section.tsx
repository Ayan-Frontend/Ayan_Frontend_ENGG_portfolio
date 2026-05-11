"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

const projects = [
  {
    title: "VELOOP Rewards",
    description:
      "A rewards-based platform where users earn coins through tasks like daily check-ins, spin wheel, surveys, social tasks, and weekly leaderboard competitions.",
    image: "/projects/veloop.jpg",
    features: [
      "Authentication system",
      "Leaderboard ranking",
      "Reward system",
      "API integration",
      "Performance optimization",
      "Responsive UI",
      "Weekly rewards",
      "Scalable architecture",
    ],
    tech: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
    ],
    liveUrl: "https://velooprewards.vercel.app",
    githubUrl: "https://github.com/Ayan-Frontend",
    featured: true,
  },
  {
    title: "Resume Skill Matcher",
    description:
      "Built an AI-powered resume skills matcher using NLP, semantic analysis, and machine learning for accurate candidate-job matching.",
    image: "/projects/portfolio-gen.jpg",
    features: [
      "Multiple themes",
      "Drag-and-drop sections",
      "Real-time preview",
      "Export to static HTML",
    ],
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    liveUrl: "https://resume-skills-matcher.vercel.app/",
    githubUrl: "https://github.com/Ayan-Frontend/resume-skill-matcher",
    featured: false,
  },
  {
    title: "Sales Dashboard",
    description:
      "Developed interactive sales dashboard using Power BI and Excel to analyze revenue, trends, customer insights, and performance metrics.",
    image: "/projects/taskflow.jpg",
    features: [
      "Real-time sync",
      "Kanban boards",
      "Team collaboration",
      "Analytics dashboard",
    ],
    tech: [
      { name: "React", icon: SiReact },
      { name: "Firebase", icon: SiFirebase },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Ayan-Alam-07/sales-dashboard",
    featured: false,
  },
];

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      className={`group relative ${project.featured ? "lg:col-span-2" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card */}
      <div className="relative glass rounded-3xl overflow-hidden h-full">
        {/* Project Image/Preview */}
        <div className="relative h-48 lg:h-64 overflow-hidden bg-linear-to-br from-primary/20 via-secondary/10 to-accent/20">
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Floating Elements for Visual Interest */}
          <motion.div
            className="absolute top-8 left-8 w-20 h-20 rounded-2xl bg-linear-to-br from-primary/30 to-secondary/30 backdrop-blur-sm"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-16 h-16 rounded-full bg-linear-to-br from-secondary/30 to-accent/30 backdrop-blur-sm"
            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl bg-linear-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-border/50"
            animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Title Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient">
              {project.title}
            </h3>
          </div>

          {/* Hover Overlay */}
          <motion.div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-primary to-secondary text-primary-foreground font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-4 h-4" />
              Code
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          {project.featured && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-primary mb-3">
                Key Features
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-primary/10 text-xs text-primary"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Built with:</span>
            <div className="flex items-center gap-2">
              {project.tech.map((tech) => (
                <div
                  key={tech.name}
                  className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center group/tech relative"
                  title={tech.name}
                >
                  <tech.icon className="w-4 h-4 text-muted-foreground group-hover/tech:text-foreground transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 aurora opacity-40" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Scrolling Text Background */}
      <motion.div
        style={{ x }}
        className="absolute top-20 left-0 whitespace-nowrap text-[200px] font-bold text-muted/5 pointer-events-none select-none"
      >
        PROJECTS • WORK • BUILDS •
      </motion.div>

      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary font-mono mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work, featuring modern web applications built
            with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/Ayan-Frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-primary to-secondary text-primary-foreground font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
