"use client"

import { useMemo } from 'react'
import Section from '@/components/ui/Section'
import { useROSIStore } from '@/store/rosi'

function formatCurrency(n: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n)
}

function formatRoi(roi: number | 'infinite') {
  if (roi === 'infinite') return '∞'
  return `${roi.toFixed(2)}%`
}

export default function ROSIResults() {
  const { currentResult } = useROSIStore()

  const content = useMemo(() => {
    if (!currentResult) return (
      <p className="text-text-muted">Preencha os campos e clique em Calcular para ver os resultados.</p>
    )

    const { annualizedSavings, avoidedLoss, paybackPeriodYears, riskMitigationScore, roiPercentage } = currentResult
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card-cyber p-4 rounded">
          <h4 className="text-sm text-text-muted">ROI</h4>
          <div className="text-2xl font-bold">{formatRoi(roiPercentage)}</div>
        </div>
        <div className="card-cyber p-4 rounded">
          <h4 className="text-sm text-text-muted">Economia Anual</h4>
          <div className="text-2xl font-bold">{formatCurrency(annualizedSavings)}</div>
        </div>
        <div className="card-cyber p-4 rounded">
          <h4 className="text-sm text-text-muted">Perda Evitada</h4>
          <div className="text-2xl font-bold">{formatCurrency(avoidedLoss)}</div>
        </div>
        <div className="card-cyber p-4 rounded">
          <h4 className="text-sm text-text-muted">Mitigação de Risco</h4>
          <div className="text-2xl font-bold">{riskMitigationScore}%</div>
        </div>
        <div className="card-cyber p-4 rounded md:col-span-4">
          <h4 className="text-sm text-text-muted">Payback</h4>
          <div className="text-lg font-semibold">
            {paybackPeriodYears === null ? 'N/A' : `${paybackPeriodYears.toFixed(2)} anos`}
          </div>
        </div>
      </div>
    )
  }, [currentResult])

  return (
    <Section
      id="rosi-results"
      title="Resultados"
      description="Resumo dos indicadores financeiros e de mitigação com base nos seus dados."
    >
      {content}
    </Section>
  )
}

