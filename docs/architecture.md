# Architecture — aiteam Landing Page

## Overview

Static marketing landing page for aiteam — an AI platform that automates software development via Telegram. Single-page, dark-mode, mobile-first. No backend, no database.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Linting | ESLint + `next/core-web-vitals` |
| Fonts | Inter (body), Plus Jakarta Sans (headings) via `next/font` |
| Animations | Framer Motion (P3) |
| Deployment | Vercel / static export |

**No backend. No database.** All content is hardcoded Vietnamese.

## Folder Structure

```
aiteam/
├── docs/
│   ├── SRS.md
│   └── architecture.md
├── frontend/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── public/
│   ├── src/
│   │   └── components/
│   │       ├── Hero.tsx
│   │       ├── Pipeline.tsx
│   │       ├── Agents.tsx
│   │       ├── Features.tsx
│   │       ├── TechStack.tsx
│   │       ├── CTA.tsx
│   │       └── Footer.tsx
│   ├── .env.example
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── next.config.js
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.ts
│   └── tsconfig.json
├── backend/
│   └── .gitkeep  # reserved for future API
├── .github/
│   └── workflows/
│       └── ci.yml
├── .gitignore
├── .env.example
├── docker-compose.yml
└── README.md
```

## Visual Identity (design tokens)

| Token | Value | Usage |
|---|---|---|
| `--color-accent` | `#3B82F6` | Buttons, glows, links |
| `--color-bg` | `#0A0A0F` | Page background |
| `--color-surface` | `#1E1E2A` | Cards, panels |
| `--color-muted` | `#A1A1AA` | Secondary text |
| `--color-text` | `#FFFFFF` | Primary text |

## Sections

1. **Hero** (`#hero`) — full-viewport headline, gradient glow, two CTAs
2. **Pipeline** (`#pipeline`) — 5-step horizontal/vertical timeline
3. **Agents** (`#agents`) — 4 AI role cards in a 2×2 grid
4. **Features** (`#features`) — 6-item grid
5. **Tech Stack** (`#tech-stack`) — 6 logos
6. **CTA** (`#cta`) — final conversion section
7. **Footer** — logo, links, copyright

## Responsive Breakpoints

| Breakpoint | Width |
|---|---|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |

Mobile-first. Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

## Environment Variables

### Frontend — `frontend/.env.example`

| Key | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `http://localhost:8080` | Reserved for future backend API |

### Root — `.env.example`

No runtime variables required for static deployment. Reserved for future use:
`NEXT_PUBLIC_API_URL`, `POSTGRES_*` (future).

## Running Locally

```bash
# Frontend only (dev)
cd frontend
npm install
npm run dev

# Full stack via Docker (future)
docker compose up
```

## CI Pipeline

`.github/workflows/ci.yml` runs on every PR and push to main:

- **frontend** job: `npm ci && npm run lint && npm run build && npm test`
- **compose** job: `docker compose config -q` (validates docker-compose.yml)

## Naming Conventions

- Components: PascalCase files matching component name (`Hero.tsx`, `Pipeline.tsx`)
- CSS classes: Tailwind utility classes; no custom CSS beyond `globals.css` variables
- Section IDs: lowercase-kebab (`#pipeline`, `#agents`)
- All page text: Vietnamese

## Design Decisions

- **No backend** — static site; no API, no DB, no auth
- **CSS variables** for design tokens so they can be overridden per component
- **Framer Motion** is P3 — implemented as a progressive enhancement
- **Docker Compose** is present for future backend expansion; frontend builds and runs in the `frontend` service
