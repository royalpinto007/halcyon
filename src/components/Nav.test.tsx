import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Nav } from './Nav'
describe('Nav', () => {
  it('renders product navigation', () => {
    render(<Nav path="/" />)
    expect(screen.getByRole('link', { name: 'Technology' })).toHaveAttribute(
      'href',
      '/technology',
    )
    expect(screen.getByRole('link', { name: /Buy/ })).toHaveAttribute('href', '/buy')
  })
  it('highlights the active section', () => {
    render(<Nav path="/technology" />)
    expect(screen.getByRole('link', { name: 'Technology' }).className).toContain('copper')
  })
  it('toggles the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Nav path="/" />)
    const btn = screen.getByRole('button', { name: /menu/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })
})
