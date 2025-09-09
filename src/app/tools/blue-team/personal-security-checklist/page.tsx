import Link from 'next/link'

export const metadata = {
  title: 'Checklist de Segurança Pessoal | YesLinux',
  description:
    'Guia prático em português para fortalecer sua segurança digital: autenticação, privacidade, dispositivos e muito mais.',
}

export default function PersonalSecurityChecklistPage() {
  return (
    <main className="min-h-screen py-10">
      <section className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="card-cyber rounded-lg p-6 mb-6 text-center">
            <p className="text-sm text-text-muted">O definitivo</p>
            <h1 className="text-3xl md:text-4xl font-bold">Checklist de Segurança Pessoal</h1>
            <p className="text-text-muted mt-2">
              Seu guia para proteger sua vida digital e privacidade.
            </p>
          </div>

          <div className="rounded-lg p-0 md:p-4">
            <div className="prose prose-invert max-w-none">
              <h2>Sobre</h2>
              <p>
                Esta é uma versão em português do projeto “Personal Security Checklist”, com foco
                em práticas essenciais de segurança e privacidade para o dia a dia. Nosso objetivo é
                tornar simples o que realmente importa: hábitos e configurações que reduzem riscos.
              </p>

              <h3>Status da tradução</h3>
              <p>
                A interface já está em português. Estamos concluindo a tradução completa do conteúdo
                (checklists e artigos). Enquanto isso, você pode consultar a versão original em inglês
                para referência.
              </p>

              <div className="mt-4 flex gap-4 flex-wrap">
                <Link href="https://github.com/Lissy93/personal-security-checklist" target="_blank" className="btn btn-sm btn-outline">
                  Ver repositório original (inglês)
                </Link>
              </div>

              <h3 className="mt-8">O que você encontrará aqui</h3>
              <ul>
                <li>Orientações práticas de segurança (senhas, 2FA, backups, atualizações)</li>
                <li>Privacidade digital (navegadores, rastreadores, dados pessoais)</li>
                <li>Dispositivos e contas (configurações e cuidados essenciais)</li>
                <li>Referências e materiais para aprofundamento</li>
              </ul>

              <h3 className="mt-8">Versão interativa</h3>
              <p>
                Estamos integrando uma versão interativa do checklist diretamente no site YesLinux. Em breve você
                poderá percorrer seções, marcar progresso e salvar localmente — tudo em português e no nosso tema.
              </p>
            </div>
          </div>

          <hr className="my-8 border-white/10" />

          <footer className="text-xs text-text-muted text-center">
            <p>
              Licenciado sob MIT — Fork do projeto original de{' '}
              <a className="text-primary hover:underline" href="https://aliciasykes.com" target="_blank" rel="noreferrer">Alicia Sykes</a>
              , mantendo os devidos créditos. Código-fonte original em{' '}
              <a className="text-primary hover:underline" href="https://github.com/Lissy93/personal-security-checklist" target="_blank" rel="noreferrer">github.com/Lissy93/personal-security-checklist</a>.
            </p>
          </footer>
        </div>
      </section>
    </main>
  )
}

