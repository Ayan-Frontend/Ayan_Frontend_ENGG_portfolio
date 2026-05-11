"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowDown } from "react-icons/hi2";

function FloatingBlob({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

function ParticleField() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [-20, -60],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

function MouseFollowLight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.25 280 / 0.15) 0%, transparent 70%)",
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
    </div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Ayan-Frontend",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/ayan-alam-dev",
      label: "LinkedIn",
    },
    { icon: FaEnvelope, href: "mailto:ayanalamdev@gmail.com", label: "Email" },
    { icon: FaXTwitter, href: "https://twitter.com/ayan", label: "Twitter" },
  ];

  const roles = [
    "Frontend Developer",
    "React Developer",
    "Creative UI Engineer",
    "JavaScript Enthusiast",
    "Performance Focused Developer",
  ];

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 aurora" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise" />

      {/* Floating Blobs */}
      <FloatingBlob className="w-96 h-96 bg-primary/30 top-20 -left-48" />
      <FloatingBlob
        className="w-80 h-80 bg-secondary/30 bottom-20 -right-40"
        delay={2}
      />
      <FloatingBlob
        className="w-64 h-64 bg-accent/20 top-1/2 left-1/4"
        delay={4}
      />

      {/* Particle Field */}
      <ParticleField />

      {/* Mouse Follow Light */}
      <MouseFollowLight />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Name Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mt-22 rounded-full glass text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="block text-foreground">{"Hi, I'm"}</span>
          <span className="block text-gradient mt-2">Ayan</span>
        </motion.h1>

        {/* Typewriter Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 h-12 font-mono"
        >
          <Typewriter
            options={{
              strings: roles,
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
              delay: 80,
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting scalable, interactive, and high-performance web experiences
          with modern technologies and pixel-perfect attention to detail.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-xl overflow-hidden font-semibold text-primary-foreground transition-all duration-300"
          >
            <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary opacity-100 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
            <span className="relative z-10">View Projects</span>
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-xl glass glass-hover font-semibold transition-all duration-300 hover:glow-purple"
          >
            Contact Me
          </a>

          <a
            href="https://drive.google.com/file/d/1Ku13ZasABE386DVoXL3ImT1TiFVunlqe/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border border-border hover:border-primary/50 font-semibold transition-all duration-300 hover:bg-primary/5"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex mb-20 items-center justify-center gap-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-3 rounded-full glass glass-hover transition-all duration-300 hover:glow-cyan hover:scale-110"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <HiArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
