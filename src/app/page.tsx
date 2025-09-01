import AboutSection from '@/components/sections/AboutSection'
import CTASection from '@/components/sections/CTASection'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import StatsSection from '@/components/sections/StatsSection'

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <CTASection />
      <ServicesSection />
      {/* Contact section removed; Footer contains contact info */}
    </main>
  )
}
