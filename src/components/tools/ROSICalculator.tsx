"use client"

import ROSIForm from '@/components/tools/ROSIForm'
import ROSIResults from '@/components/tools/ROSIResults'
import ROSIScenarios from '@/components/tools/ROSIScenarios'
import ROSICharts from '@/components/tools/ROSICharts'
import { useCallback } from 'react'
import Link from 'next/link'

export default function ROSICalculator() {
  const onExport = useCallback(() => {
    window.print()
  }, [])

  return (
    <div className="container mx-auto px-4 py-10 space-y-8" id="rosi-report">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">ROSI Calculator</h1>
        <div className="flex items-center gap-3 print:hidden">
          <Link href="/tools/rosi-calculator/report" className="btn-cyber px-4 py-2 rounded">
            Gerar relatório
          </Link>
          <button className="btn-cyber px-4 py-2 rounded" onClick={onExport}>
            Exportar PDF
          </button>
        </div>
      </div>
      <ROSIForm />
      <ROSIResults />
      <ROSICharts />
      <ROSIScenarios />
    </div>
  )
}
