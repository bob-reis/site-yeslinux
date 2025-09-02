import Link from 'next/link'

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
          <div className="p-5 border border-primary/10 rounded">
            <h2 className="font-semibold mb-2">OSINT Tools</h2>
            <ul className="text-sm text-text-muted space-y-1">
              <li className="opacity-70">Em breve</li>
            </ul>
          </div>
          <div className="p-5 border border-primary/20 rounded bg-dark/30">
            <h2 className="font-semibold mb-2">Red Team Tools</h2>
            <ul className="text-sm space-y-2">
              <li>
                <div className="flex flex-col">
                  <span className="font-medium">Gerador de E-mails e Wordlists</span>
                  <span className="text-text-muted">Crie variações plausíveis para testes autorizados e conscientização.</span>
                  <Link className="text-primary hover:underline w-fit" href="/tools/gerador-emails-wordlists">Abrir ferramenta →</Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="p-5 border border-primary/10 rounded">
            <h2 className="font-semibold mb-2">Blue Team Tools</h2>
            <ul className="text-sm text-text-muted space-y-1">
              <li className="opacity-70">Em breve</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
