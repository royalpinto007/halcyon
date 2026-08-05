import { describe, it, expect } from 'vitest'
import { FEATURES, SPECS, MODELS, NAV } from './product'
describe('product data', () => {
  it('features have a key, title, body, and stat', () => {
    expect(FEATURES.every((f) => f.k && f.title && f.body && f.stat)).toBe(true)
  })
  it('specs are key/value pairs', () => {
    expect(SPECS.every((s) => s.length === 2 && s[0] && s[1])).toBe(true)
  })
  it('every model has a price and finish', () => {
    expect(MODELS.every((m) => m.price && m.finish)).toBe(true)
  })
  it('nav links are internal', () => {
    expect(NAV.every((n) => n.href.startsWith('/'))).toBe(true)
  })
})
