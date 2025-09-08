import ROSICalculator from '@/components/tools/ROSICalculator'

export const metadata = {
  title: 'ROSI Calculator | YesLinux Tools',
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <ROSICalculator />
    </main>
  )
}

