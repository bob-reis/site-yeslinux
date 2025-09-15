import SectionLinkGrid from '@/components/psc/SectionLinkGrid'
import OverallProgress from '@/components/psc/OverallProgress'
import PriorityDashboard from '@/components/psc/PriorityDashboard'
import ClearProgressButton from '@/components/psc/ClearProgressButton'
import SectionProgressList from '@/components/psc/SectionProgressList'
import RadarChart from '@/components/psc/RadarChart'
import SecurityTipsCard from '@/components/psc/SecurityTipsCard'
import { loadPscSections } from '@/lib/psc-data'

export const metadata = {
  title: 'Personal Security Checklist | YesLinux Tools',
}

export const dynamic = 'force-static'

export default function PSCIndexPage() {
  const sections = loadPscSections()

  return (
    <main className="min-h-screen py-10">
      <section className="container mx-auto px-4">
        <div className="hero mb-8 mx-auto max-w-6xl w-full">
          <div className="hero-content text-center w-full p-6">
            <div className="w-full flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl p-10 transition-all duration-300" style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 30px rgba(0,255,65,0.3), 0 0 60px rgba(0,255,65,0.2)' }}>
              <p className="opacity-80 text-xl">O Guia Definitivo</p>
              <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#00ff41' }}>Checklist de Segurança Pessoal</h1>
              <p className="subtitle pt-2 opacity-90 text-lg">Guia prático para reforçar sua segurança e privacidade digital</p>
            </div>
          </div>
        </div>
        {sections.length === 0 ? (
          <div className="card-cyber rounded-lg p-6">
            <p className="text-text-muted">
              Não foi possível carregar os dados da checklist. Verifique se o arquivo
              <code className="mx-1 text-primary">personal-security-checklist/web/src/data/checklists.generated.ts</code>
              existe no repositório.
            </p>
          </div>
        ) : (
          <>
            {/* Dashboard row */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold">Seu Progresso</h2>
                    <ClearProgressButton />
                  </div>
                  <OverallProgress sections={sections} />
                </div>
                <PriorityDashboard sections={sections} />
                <SecurityTipsCard />
              </div>
              <div className="">
                <RadarChart sections={sections} />
              </div>
              <div className="">
                <SectionProgressList sections={sections} />
              </div>
            </div>

            {/* Cards row (below dashboard) */}
            <SectionLinkGrid sections={sections} />
          </>
        )}
      </section>
    </main>
  )
}
