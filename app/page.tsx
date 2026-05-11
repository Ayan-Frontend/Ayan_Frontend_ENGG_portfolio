'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HeroSection from '@/components/sections/hero-section'
import AboutSection from '@/components/sections/about-section'
import SkillsSection from '@/components/sections/skills-section'
import ProjectsSection from '@/components/sections/projects-section'
import ExperienceSection from '@/components/sections/experience-section'
import ServicesSection from '@/components/sections/services-section'
import ContactSection from '@/components/sections/contact-section'

// Dynamic imports for client-only components
const SmoothScroll = dynamic(() => import('@/components/smooth-scroll'), { ssr: false })
const CustomCursor = dynamic(() => import('@/components/custom-cursor'), { ssr: false })

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
