import config from './postcss.config.js'

describe('postcss config', () => {
  it('enables tailwindcss plugin', () => {
    expect(config.plugins).toHaveProperty('tailwindcss')
  })
})
