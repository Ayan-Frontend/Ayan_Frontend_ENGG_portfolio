"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { HiDevicePhoneMobile, HiRocketLaunch } from "react-icons/hi2";

const skills = [
  { name: "React", icon: SiReact, level: 90, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, level: 95, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 92, color: "#06B6D4" },
  { name: "HTML5", icon: SiHtml5, level: 98, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, level: 95, color: "#1572B6" },
  { name: "Node.js", icon: SiNodedotjs, level: 75, color: "#339933" },
  { name: "Express.js", icon: SiExpress, level: 70, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, level: 65, color: "#47A248" },
  { name: "REST APIs", icon: HiRocketLaunch, level: 85, color: "#8B5CF6" },
  { name: "Git & GitHub", icon: SiGit, level: 88, color: "#F05032" },
  {
    name: "Responsive Design",
    icon: HiDevicePhoneMobile,
    level: 95,
    color: "#EC4899",
  },
  {
    name: "Performance Optimization",
    icon: HiRocketLaunch,
    level: 82,
    color: "#10B981",
  },
];

function SkillCard({
  skill,
  index,
  isInView,
}: {
  skill: (typeof skills)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{ perspective: 1000 }}
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${skill.color}40, transparent)`,
        }}
      />

      {/* Card */}
      <div className="relative glass rounded-2xl p-6 glass-hover transition-all duration-500 h-full overflow-hidden">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${skill.color}, transparent 70%)`,
          }}
        />

        {/* Icon */}
        <motion.div
          className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)`,
          }}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <skill.icon
            className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
            style={{ color: skill.color }}
          />
        </motion.div>

        {/* Name */}
        <h3 className="font-semibold text-lg mb-3">{skill.name}</h3>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Proficiency</span>
            <span className="font-mono text-primary">{skill.level}%</span>
          </div>
          <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
              }}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : {}}
              transition={{
                delay: 0.5 + index * 0.05,
                duration: 1,
                ease: "easeOut",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 aurora opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

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
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life. Always
            learning, always improving.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            And many more tools in my arsenal...
          </p>
          <motion.a
            href="https://github.com/Ayan-Frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover transition-all duration-300 hover:glow-purple"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SiGithub className="w-5 h-5" />
            View My GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
