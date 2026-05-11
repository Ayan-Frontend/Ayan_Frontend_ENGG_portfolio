"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  HiAcademicCap,
  HiQrCode,
  HiRocketLaunch,
  HiSparkles,
  HiTrophy,
  HiLightBulb,
} from "react-icons/hi2";

const timeline = [
  {
    year: "2022",
    title: "Started Learning Frontend",
    description:
      "Began my journey into web development, learning HTML, CSS, and the fundamentals of how the web works.",
    icon: HiAcademicCap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2022",
    title: "Mastering JavaScript",
    description:
      "Deep-dived into JavaScript, understanding DOM manipulation, ES6+ features, and asynchronous programming.",
    icon: HiQrCode,
    color: "from-yellow-500 to-orange-500",
  },
  {
    year: "2023",
    title: "React & Modern Frameworks",
    description:
      "Fell in love with React. Learned component architecture, hooks, state management, and the React ecosystem.",
    icon: HiSparkles,
    color: "from-cyan-500 to-blue-500",
  },
  {
    year: "2023",
    title: "Building Real Projects",
    description:
      "Started building modern UI projects, applying best practices and focusing on user experience and performance.",
    icon: HiRocketLaunch,
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2024",
    title: "Scalable Applications",
    description:
      "Working on larger applications with scalable frontend architecture, API integrations, and performance optimization.",
    icon: HiLightBulb,
    color: "from-green-500 to-teal-500",
  },
  {
    year: "2024",
    title: "VELOOP Rewards",
    description:
      "Created VELOOP Rewards - a comprehensive rewards platform featuring authentication, leaderboards, and gamification.",
    icon: HiTrophy,
    color: "from-primary to-secondary",
  },
];

function TimelineItem({
  item,
  index,
  isInView,
}: {
  item: (typeof timeline)[0];
  index: number;
  isInView: boolean;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`flex items-center gap-4 md:gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
        <motion.div
          className="group relative inline-block w-full"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Glow */}
          <div
            className={`absolute inset-0 bg-linear-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
          />

          <div className="relative glass rounded-2xl p-6 glass-hover transition-all duration-300">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-3">
              {item.year}
            </span>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Center Icon */}
      <div className="relative shrink-0">
        {/* Line */}
        {index !== timeline.length - 1 && (
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-border to-transparent" />
        )}

        {/* Icon Circle */}
        <motion.div
          className={`relative w-14 h-14 rounded-full bg-linear-to-br ${item.color} flex items-center justify-center z-10`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            delay: index * 0.15 + 0.2,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <item.icon className="w-6 h-6 text-white" />

          {/* Pulse Effect */}
          <motion.div
            className={`absolute inset-0 rounded-full bg-linear-to-br ${item.color}`}
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Spacer for opposite side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 aurora opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div
        ref={containerRef}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm text-primary font-mono mb-4">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The <span className="text-gradient">Path</span>{" "}
            <span>I&apos;ve Taken</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From curious beginner to passionate developer - every step has
            shaped who I am today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 md:space-y-12">
          {timeline.map((item, index) => (
            <TimelineItem
              key={item.title}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm">
              Currently open to new opportunities and collaborations
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
