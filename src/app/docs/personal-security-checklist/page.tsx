import Link from 'next/link'
import Section from '@/components/ui/Section'

export const metadata = {
  title: 'Checklist de Segurança Pessoal | Documentação | YesLinux',
  description:
    'Documentação em português do Checklist de Segurança Pessoal: objetivos, escopo, créditos e status da tradução.'
}

export default function Page() {
  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto px-4 space-y-10">
        <Section id="sobre" title="Sobre o projeto" description="Guia prático para elevar sua segurança digital">
          <p className="text-text-muted">
            O Checklist de Segurança Pessoal reúne práticas essenciais para proteger contas, dispositivos
            e privacidade. Ele cobre desde fundamentos (senhas fortes, 2FA, backups, atualizações) até
            configurações úteis de privacidade e referências para aprofundamento.
          </p>
        </Section>

        <Section id="origem" title="Origem e licença" description="Projeto original, licença e atribuição">
          <p className="text-text-muted">
            Esta é uma adaptação em português e com o tema YesLinux do projeto original de{' '}
            <a className="text-primary hover:underline" href="https://aliciasykes.com" target="_blank" rel="noreferrer">Alicia Sykes</a>
            . Mantemos a licença MIT e os créditos completos à autora. Repositório original:{' '}
            <a className="text-primary hover:underline" href="https://github.com/Lissy93/personal-security-checklist" target="_blank" rel="noreferrer">github.com/Lissy93/personal-security-checklist</a>.
          </p>
        </Section>

        <Section id="escopo" title="Escopo" description="Principais seções cobertas">
          <ul className="list-disc list-inside text-text-muted space-y-1">
            <li>Autenticação e senhas (gerenciadores, 2FA, reutilização, vazamentos)</li>
            <li>Privacidade no navegador e bloqueio de rastreadores</li>
            <li>Configurações de dispositivos e contas</li>
            <li>Backups, atualizações e higiene digital</li>
            <li>Leituras, ferramentas e referências</li>
          </ul>
        </Section>

        <Section id="status" title="Status da tradução" description="Interface traduzida e conteúdo em andamento">
          <p className="text-text-muted">
            A interface do YesLinux já está em português. A tradução completa do conteúdo (checklists e
            artigos) está em progresso. Enquanto concluímos, você pode consultar a versão original em inglês.
          </p>
          <div className="mt-3">
            <Link href="/tools/blue-team/personal-security-checklist" className="text-primary hover:underline">
              Abrir a ferramenta
            </Link>
            <span className="mx-2">·</span>
            <a href="https://github.com/Lissy93/personal-security-checklist" target="_blank" rel="noreferrer" className="text-primary hover:underline">
              Repositório original
            </a>
          </div>
        </Section>
      </div>
    </main>
  )
}

