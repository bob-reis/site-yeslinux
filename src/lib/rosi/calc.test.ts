import { describe, it, expect } from 'vitest'
import { calculateROSI, calculatePaybackPeriodYears, calculateRiskScore } from './calc'

describe('ROSI calc', () => {
  it('computes typical values', () => {
    const res = calculateROSI({ initialInvestment: 50000, potentialLoss: 300000, riskReductionPercentage: 40 })
    expect(res.avoidedLoss).toBe(120000)
    expect(res.annualizedSavings).toBe(70000)
    expect(res.roiPercentage).toBeCloseTo(140)
    expect(res.paybackPeriodYears).toBeCloseTo(50000 / 70000)
    expect(res.riskMitigationScore).toBeGreaterThanOrEqual(0)
    expect(res.riskMitigationScore).toBeLessThanOrEqual(100)
  })

  it('handles zero investment', () => {
    const res = calculateROSI({ initialInvestment: 0, potentialLoss: 100000, riskReductionPercentage: 10 })
    expect(res.avoidedLoss).toBe(10000)
    expect(res.annualizedSavings).toBe(10000)
    expect(res.roiPercentage).toBe('infinite')
    expect(res.paybackPeriodYears).toBe(0)
  })

  it('handles invalid inputs via clamping', () => {
    const res = calculateROSI({ initialInvestment: -10, potentialLoss: -5, riskReductionPercentage: 120 })
    expect(res.avoidedLoss).toBe(0)
    expect(res.annualizedSavings).toBe(0)
    expect(res.roiPercentage).toBe(0)
  })

  it('payback returns null when savings <= 0', () => {
    expect(calculatePaybackPeriodYears(1000, 0)).toBeNull()
    expect(calculatePaybackPeriodYears(1000, -1)).toBeNull()
  })

  it('risk score is bounded 0..100', () => {
    expect(calculateRiskScore(0, 0, 0)).toBeGreaterThanOrEqual(0)
    expect(calculateRiskScore(100, 1, 1_000_000)).toBeLessThanOrEqual(100)
  })
})

