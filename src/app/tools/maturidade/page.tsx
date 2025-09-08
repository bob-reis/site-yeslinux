import MaturidadeApp from '@/components/tools/MaturidadeApp'

export const metadata = {
  title: 'Maturidade em Segurança | YesLinux Tools',
}

export const dynamic = 'force-static'

export default function MaturidadePage() {
  return (
    <main className="relative">
      <MaturidadeApp />
    </main>
  )
}
