"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  HiQrCode,
  HiDevicePhoneMobile,
  HiPaintBrush,
  HiRocketLaunch,
  HiSparkles,
} from "react-icons/hi2";

const services = [
  {
    icon: HiQrCode,
    title: "Frontend Development",
    description:
      "Building modern, performant web applications using React, Next.js, and cutting-edge frontend technologies.",
    features: [
      "React/Next.js",
      "TypeScript",
      "State Management",
      "API Integration",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: HiSparkles,
    title: "React Development",
    description:
      "Specialized React development with focus on reusable components, hooks, and optimal performance patterns.",
    features: [
      "Component Architecture",
      "Custom Hooks",
      "Performance Optimization",
      "Testing",
    ],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: HiDevicePhoneMobile,
    title: "Responsive Web Design",
    description:
      "Creating fluid, responsive layouts that look and work beautifully across all devices and screen sizes.",
    features: [
      "Mobile-First Design",
      "Flexbox/Grid",
      "Tailwind CSS",
      "Cross-Browser Support",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: HiPaintBrush,
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces with focus on user experience, accessibility, and visual aesthetics.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: HiRocketLaunch,
    title: "Performance Optimization",
    description:
      "Analyzing and optimizing web applications for speed, Core Web Vitals, and exceptional user experience.",
    features: [
      "Code Splitting",
      "Lazy Loading",
      "Bundle Analysis",
      "Caching Strategies",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
];

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 bg-linear-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
      />

      {/* Card */}
      <div className="relative glass rounded-3xl p-8 h-full glass-hover transition-all duration-500 overflow-hidden">
        {/* Background Gradient */}
        <div
          className={`absolute top-0 right-0 w-40 h-40 bg-linear-to-br ${service.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity`}
        />

        {/* Icon */}
        <motion.div
          className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-6`}
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <service.icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 rounded-full bg-muted/50 text-xs text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 overflow-hidden">
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
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bringing your ideas to life with expertise in modern web
            technologies and a passion for creating exceptional digital
            experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Have a project in mind? {"Let's"} work together!
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-primary to-secondary text-primary-foreground font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
