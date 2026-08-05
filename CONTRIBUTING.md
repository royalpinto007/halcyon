# Contributing to Halcyon

Halcyon is a design-forward concept product site. PRs improving craft, motion, or
accessibility are welcome.

## Setup

```bash
npm install
npm run dev
```

## Before a PR

```bash
npm run format:check && npm run lint && npm run typecheck && npm run test && npm run build
```

## Notes

- Content lives in `src/data`. Pages are static `.astro`; only the nav is a React island.
- Keep every section visible without JavaScript.
- Honor `prefers-reduced-motion`.
