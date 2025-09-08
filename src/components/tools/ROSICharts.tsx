"use client"

import { useEffect, useMemo, useRef, useState } from 'react'
import Script from 'next/script'
import Section from '@/components/ui/Section'
import { useROSIStore } from '@/store/rosi'
import { calculateROSI } from '@/lib/rosi/calc'
import { formatCurrencyBRL } from '@/lib/format'

declare global {
  interface Window { Chart?: any }
}

export default function ROSICharts() {
  const { currentInput, currentResult } = useROSIStore()
  const [ready, setReady] = useState<boolean>(typeof window !== 'undefined' && !!window.Chart)

  const barRef = useRef<HTMLCanvasElement | null>(null)
  const lineRef = useRef<HTMLCanvasElement | null>(null)
  const doughnutRef = useRef<HTMLCanvasElement | null>(null)

  const breakdown = useMemo(() => {
    if (!currentResult) return null
    const investment = currentInput.initialInvestment
    const avoidedLoss = currentResult.avoidedLoss
    const savings = currentResult.annualizedSavings
    return { investment, avoidedLoss, savings }
  }, [currentInput, currentResult])

  const sensitivity = useMemo(() => {
    const samples = [0, 10, 20, 40, 60, 80, 100]
    return samples.map(x => {
      const r = calculateROSI({ ...currentInput, riskReductionPercentage: x }).roiPercentage
      const y = typeof r === 'number' ? r : 300 // cap for visualization
      return { x, y }
    })
  }, [currentInput])

  useEffect(() => {
    if (!ready || !window.Chart || !currentResult) return
    const charts: any[] = []

    // Bar (Distribuição Financeira)
    if (barRef.current) {
      const ctx = barRef.current.getContext('2d')!
      charts.push(new window.Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Investimento', 'Perda Evitada', 'Economia Anual'],
          datasets: [{
            label: 'Valores (BRL)',
            data: [breakdown!.investment, breakdown!.avoidedLoss, breakdown!.savings],
            backgroundColor: ['#00ff4166', '#00ff4199', '#00ff41cc'],
            borderColor: '#00ff41',
            borderWidth: 1,
          }]
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: { enabled: true, callbacks: { label: (ctx: any) => `${ctx.dataset.label}: ${formatCurrencyBRL(ctx.parsed.y)}` } },
            legend: { display: false },
          },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.1)' } },
            y: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { callback: (v: any) => formatCurrencyBRL(Number(v)) } },
          }
        }
      }))
    }

    // Line (Sensibilidade ROI)
    if (lineRef.current) {
      const ctx = lineRef.current.getContext('2d')!
      charts.push(new window.Chart(ctx, {
        type: 'line',
        data: {
          labels: sensitivity.map(p => `${p.x}%`),
          datasets: [{
            label: 'ROI (%)',
            data: sensitivity.map(p => p.y),
            borderColor: '#00ff41',
            backgroundColor: 'rgba(0,255,65,0.15)',
            fill: true,
            tension: 0.2,
          }]
        },
        options: {
          responsive: true,
          plugins: { tooltip: { enabled: true } },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.1)' } },
            y: { grid: { color: 'rgba(255,255,255,0.1)' } },
          }
        }
      }))
    }

    // Doughnut (Score de Mitigação)
    if (doughnutRef.current) {
      const ctx = doughnutRef.current.getContext('2d')!
      const v = Math.max(0, Math.min(100, currentResult.riskMitigationScore))
      charts.push(new window.Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Mitigação', 'Restante'],
          datasets: [{
            data: [v, 100 - v],
            backgroundColor: ['#00ff41', 'rgba(255,255,255,0.12)'],
            borderWidth: 0,
            cutout: '70%'
          }]
        },
        options: {
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          rotation: -90,
          circumference: 360,
        }
      }))
    }

    return () => charts.forEach(c => c.destroy())
  }, [ready, currentResult, breakdown, sensitivity])

  return (
    <Section id="rosi-charts" title="Visualizações" description="Gráficos interativos com eixos e tooltips.">
      <Script src="/vendor/chart.umd.min.js" strategy="afterInteractive" onLoad={() => setReady(true)} />
      {!currentResult ? (
        <p className="text-text-muted">Calcule primeiro para visualizar os gráficos.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="card-cyber p-5 rounded">
            <h4 className="font-semibold mb-3">Distribuição Financeira</h4>
            <canvas ref={barRef} height={220} />
          </div>
          <div className="card-cyber p-5 rounded">
            <h4 className="font-semibold mb-3">Sensibilidade (ROI vs Redução de Risco)</h4>
            <canvas ref={lineRef} height={220} />
          </div>
          <div className="card-cyber p-5 rounded text-center">
            <h4 className="font-semibold mb-3">Score de Mitigação</h4>
            <div className="w-full flex items-center justify-center">
              <div className="relative">
                <canvas ref={doughnutRef} width={220} height={220} />
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                  {currentResult.riskMitigationScore}%
                </div>
              </div>
            </div>
            <p className="text-sm text-text-muted mt-2">Quanto maior, melhor a mitigação obtida</p>
          </div>
        </div>
      )}
    </Section>
  )
}
