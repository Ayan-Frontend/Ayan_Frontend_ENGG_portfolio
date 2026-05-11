"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Ayan-Frontend", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/ayan-alam-dev",
    label: "LinkedIn",
  },
  { icon: FaEnvelope, href: "mailto:ayanalamdev@gmail.com", label: "Email" },
  { icon: FaXTwitter, href: "https://twitter.com/ayan", label: "Twitter" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Glow Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 aurora opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block text-3xl font-bold text-gradient mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Ayan
            </motion.a>
            <p className="text-muted-foreground leading-relaxed">
              Frontend Developer passionate about creating beautiful,
              performant, and user-friendly web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 rounded-xl glass glass-hover transition-all duration-300 hover:glow-purple"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Available for freelance and full-time opportunities.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            &copy; {currentYear} Ayan. Crafted with
            <FaHeart className="w-3 h-3 text-red-500 mx-1" />
            using React & Next.js
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass glass-hover transition-all duration-300 hover:glow-cyan text-sm"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
