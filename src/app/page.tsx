import AboutSection from '@/components/sections/AboutSection'
import BlogSection from '@/components/sections/BlogSection'
import ContactSection from '@/components/sections/ContactSection'
import CTASection from '@/components/sections/CTASection'
import GamificationSection from '@/components/sections/GamificationSection'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import StatsSection from '@/components/sections/StatsSection'
import TerminalSection from '@/components/sections/TerminalSection'

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <CTASection />
      <ServicesSection />
      <TerminalSection />
      <GamificationSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}
