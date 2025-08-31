import AboutSection from '@/components/sections/AboutSection'
import BlogSection from '@/components/sections/BlogSection'
import ContactSection from '@/components/sections/ContactSection'
import GamificationSection from '@/components/sections/GamificationSection'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TerminalSection from '@/components/sections/TerminalSection'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TerminalSection />
      <GamificationSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}
