import Link from 'next/link'
import { Shield, Terminal, Search, ClipboardList, Calculator, BarChart3, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Tools | YesLinux',
}

export default function ToolsIndexPage() {
  return (
    <main className="min-h-screen py-10">
      <section className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-3">YesLinux Tools</h1>
        <p className="text-text-muted mb-8">
          Coleção de ferramentas client-side para Pentesters, Investigadores OSINT e Blue Team. Nada é enviado ao servidor.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-cyber rounded-lg p-5">
            <h2 className="text-lg font-semibold mb-2 text-primary flex items-center gap-2"><Search className="w-5 h-5" /> OSINT Tools</h2>
            <ul className="text-sm text-text-muted space-y-2">
              <li className="flex items-center justify-between opacity-80">
                <span>Username profiler</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded border border-primary/30 text-primary/90 text-[10px] bg-primary/10">Em breve</span>
              </li>
              <li className="flex items-center justify-between opacity-80">
                <span>Image metadata extractor</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded border border-primary/30 text-primary/90 text-[10px] bg-primary/10">Em breve</span>
              </li>
              <li className="flex items-center justify-between opacity-80">
                <span>Domain intel viewer</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded border border-primary/30 text-primary/90 text-[10px] bg-primary/10">Em breve</span>
              </li>
            </ul>
          </div>

          <div className="card-cyber rounded-lg p-5">
            <h2 className="text-lg font-semibold mb-2 text-primary flex items-center gap-2"><Terminal className="w-5 h-5" /> Red Team Tools</h2>
            <ul className="text-sm space-y-3">
              <li>
                <div className="flex flex-col">
                  <span className="font-medium flex items-center gap-2"><ClipboardList className="w-4 h-4 text-primary" /> Gerador de E-mails e Wordlists</span>
                  <span className="text-text-muted">Gere e-mails, usernames e wordlists localmente para pentest/OSINT.</span>
                  <ul className="mt-1 text-xs text-text-muted list-disc list-inside space-y-0.5">
                    <li>Combinações de nomes e domínios</li>
                    <li>Prévia e exportação .txt</li>
                    <li>Sem enviar dados ao servidor</li>
                  </ul>
                  <Link className="text-primary hover:underline w-fit inline-flex items-center gap-1" href="/tools/gerador-emails-wordlists">
                    Abrir ferramenta <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="card-cyber rounded-lg p-5">
            <h2 className="text-lg font-semibold mb-2 text-primary flex items-center gap-2"><Shield className="w-5 h-5" /> Blue Team Tools</h2>
            <ul className="text-sm text-text-muted space-y-2">
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Checklist de Segurança Pessoal</span>
                  <span className="text-text-muted">Guia prático para reforçar a segurança e privacidade pessoal.</span>
                  <a className="text-primary hover:underline w-fit inline-flex items-center gap-1" href="/personal-security-checklist">
                    Abrir ferramenta <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </li>
              <li className="flex items-center justify-between opacity-80">
                <span>Incident severity helper</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded border border-primary/30 text-primary/90 text-[10px] bg-primary/10">Em breve</span>
              </li>
              <li className="flex items-center justify-between opacity-80">
                <span>IOC enrichment</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded border border-primary/30 text-primary/90 text-[10px] bg-primary/10">Em breve</span>
              </li>
              <li className="flex items-center justify-between opacity-80">
                <span>Log parser toolkit</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded border border-primary/30 text-primary/90 text-[10px] bg-primary/10">Em breve</span>
              </li>
            </ul>
          </div>

          <div className="card-cyber rounded-lg p-5 md:col-span-2">
            <h2 className="text-lg font-semibold mb-2 text-primary flex items-center gap-2"><BarChart3 className="w-5 h-5" /> Gestão & Conformidade</h2>
            <ul className="text-sm space-y-3">
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Avaliação de Maturidade em Segurança</span>
                  <span className="text-text-muted">Questionário por domínio, gráficos de radar e recomendações.</span>
                  <Link className="text-primary hover:underline w-fit inline-flex items-center gap-1" href="/tools/maturidade">
                    Abrir ferramenta <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex flex-col">
                  <span className="font-medium flex items-center gap-2"><Calculator className="w-4 h-4 text-primary" /> ROSI Calculator</span>
                  <span className="text-text-muted">Calcule ROI, economia anual e payback. Salve cenários.</span>
                  <ul className="mt-1 text-xs text-text-muted list-disc list-inside space-y-0.5">
                    <li>Entradas: investimento, perda potencial, % redução</li>
                    <li>Indicadores: ROI, economia, score de mitigação</li>
                    <li>Persistência local de cenários</li>
                  </ul>
                  <div className="flex gap-4">
                    <Link className="text-primary hover:underline w-fit inline-flex items-center gap-1" href="/tools/rosi-calculator">
                      Abrir ferramenta <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link className="text-primary/80 hover:underline w-fit inline-flex items-center gap-1" href="/docs/rosi">
                      O que é ROSI <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
