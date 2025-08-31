import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YesLinux - Segurança, Liberdade e Inovação',
  description: 'Consultoria em Software Livre, Cibersegurança e Desenvolvimento Seguro. Protegemos seu negócio com soluções inovadoras e transparentes.',
  keywords: 'software livre, cibersegurança, pentest, devSecOps, consultoria, OSINT, segurança digital',
  authors: [{ name: 'YesLinux', url: 'https://yeslinux.vercel.app' }],
  openGraph: {
    title: 'YesLinux - Consultoria em Software Livre',
    description: 'Segurança, liberdade e inovação em cada linha de código.',
    url: 'https://yeslinux.vercel.app',
    siteName: 'YesLinux',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}