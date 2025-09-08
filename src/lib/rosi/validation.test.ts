import { describe, it, expect } from 'vitest'
import { validateInput } from './validation'

describe('ROSI validation', () => {
  it('accepts valid inputs', () => {
    const errs = validateInput({ initialInvestment: 1000, potentialLoss: 5000, riskReductionPercentage: 25 })
    expect(errs.length).toBe(0)
  })

  it('rejects negative numbers and out-of-range percentage', () => {
    const errs = validateInput({ initialInvestment: -1, potentialLoss: -2, riskReductionPercentage: 120 })
    const fields = errs.map(e => e.field)
    expect(fields).toContain('initialInvestment')
    expect(fields).toContain('potentialLoss')
    expect(fields).toContain('riskReductionPercentage')
  })
})

