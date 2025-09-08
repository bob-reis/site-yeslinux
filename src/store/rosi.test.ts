import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useROSIStore } from './rosi'

// Reset store between tests
beforeEach(() => {
  const { getState, setState } = useROSIStore
  const state = getState()
  setState({ ...state, scenarios: [], currentResult: null }, true)
})

describe('ROSI store', () => {
  it('calculates and saves a scenario', () => {
    const { calculate, saveScenario } = useROSIStore.getState()
    const res = calculate({ initialInvestment: 50000, potentialLoss: 300000, riskReductionPercentage: 40 })
    expect(res.annualizedSavings).toBe(70000)
    expect(useROSIStore.getState().currentResult).not.toBeNull()

    // Mock randomUUID if absent
    if (!('randomUUID' in crypto)) {
      // @ts-ignore
      crypto.randomUUID = vi.fn().mockReturnValue('test-uuid')
    }
    saveScenario('Cenário Teste')
    expect(useROSIStore.getState().scenarios.length).toBe(1)
    const s = useROSIStore.getState().scenarios[0]
    expect(s.name).toBe('Cenário Teste')
    expect(s.result.annualizedSavings).toBe(70000)
  })
})
