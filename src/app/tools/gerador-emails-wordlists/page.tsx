import EmailWordlistGenerator from '@/components/tools/EmailWordlistGenerator'

export const metadata = {
  title: 'Gerador de E-mails e Wordlists | YesLinux Tools',
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <EmailWordlistGenerator />
    </main>
  )
}

