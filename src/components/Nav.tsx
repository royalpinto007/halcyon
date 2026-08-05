import { useEffect, useState } from 'react'
import { NAV } from '../data/product'

export function Nav({ path = '/' }: { path?: string }) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const active = (href: string) =>
    path === href || (href !== '/' && path.startsWith(href))
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid ? 'border-b border-[var(--color-line)] bg-[var(--color-paper)]/85 backdrop-blur-md' : ''}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="/" className="font-display text-2xl font-semibold tracking-tight">
          Halcyon
        </a>
        <ul className="hidden items-center gap-9 text-sm md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className={`transition-colors hover:text-[var(--color-copper)] ${active(n.href) ? 'text-[var(--color-copper)]' : 'text-[var(--color-ink)]'}`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/buy"
          className="hidden rounded-full border border-[var(--color-ink)] px-5 py-2 text-sm font-semibold transition hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] md:inline-block"
        >
          Buy — $690
        </a>
        <button
          className="md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-7 bg-current" />
          <span className="mt-2 block h-0.5 w-7 bg-current" />
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 border-t border-[var(--color-line)] bg-[var(--color-paper)] px-6 py-4 text-lg md:hidden">
          {NAV.map((n) => (
            <li key={n.href}>
              <a className="block py-2" href={n.href}>
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="mt-2 block rounded-full bg-[var(--color-ink)] px-5 py-3 text-center text-base font-semibold text-[var(--color-paper)]"
              href="/buy"
            >
              Buy — $690
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
