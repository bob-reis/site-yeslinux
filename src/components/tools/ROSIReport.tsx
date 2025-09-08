"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { useROSIStore } from '@/store/rosi'
import ROSIResults from '@/components/tools/ROSIResults'
import ROSICharts from '@/components/tools/ROSICharts'
import { formatCurrencyBRL } from '@/lib/format'

export default function ROSIReport() {
  const { currentInput, currentResult, calculate } = useROSIStore()

  useEffect(() => {
    if (!currentResult) calculate(currentInput)
  }, [currentResult, currentInput, calculate])

  return (
    <main className="min-h-screen">
      {/* Cover */}
      <section className="container mx-auto px-6 py-16 print:py-10">
        <div className="card-cyber rounded-xl p-8 print:border print:rounded-none print:shadow-none">
          <h1 className="text-3xl font-bold">Relatório Executivo – ROSI</h1>
          <p className="text-text-muted mt-2">Return on Security Investment</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-text-muted">Data</div>
              <div>{new Date().toLocaleDateString('pt-BR')}</div>
            </div>
            <div>
              <div className="text-text-muted">Investimento</div>
              <div>{formatCurrencyBRL(currentInput.initialInvestment)}</div>
            </div>
            <div>
              <div className="text-text-muted">Perda Potencial</div>
              <div>{formatCurrencyBRL(currentInput.potentialLoss)}</div>
            </div>
          </div>
          <div className="mt-8 print:hidden">
            <button className="btn-cyber px-6 py-2 rounded" onClick={() => window.print()}>Imprimir/Exportar PDF</button>
            <Link href="/tools/rosi-calculator" className="ml-3 text-primary hover:underline">Voltar ao Calculador</Link>
          </div>
        </div>
      </section>

      {/* Summary + Charts */}
      <section className="container mx-auto px-6 pb-16">
        <ROSIResults />
        <div className="page-break" />
        <ROSICharts />
      </section>
    </main>
  )
}

