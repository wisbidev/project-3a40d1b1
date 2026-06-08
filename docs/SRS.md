# Software Requirements Specification — aiteam Landing Page

## 1. Overview

aiteam is a landing page that introduces an AI-powered platform that automatically builds software via Telegram. The page is a single-page, dark-mode, mobile-first SaaS landing page built with Next.js and Tailwind CSS. It comprises 7 sequential sections, with subtle scroll-triggered animations as a nice-to-have.

## 2. Scope

A static marketing landing page. No backend, no database, no authentication. The sole CTA directs users to chat with the team via Telegram. All content is hardcoded in Vietnamese.

## 3. Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Typography:** Inter (body), Plus Jakarta Sans (headings)
- **Animations (optional):** Framer Motion
- **Deployment:** Static export via `next export` or Vercel
- **Fonts:** Loaded via `next/font`

## 4. Visual Identity

| Token | Value |
|---|---|
| Primary accent | `#3B82F6` (blue-500) |
| Background | `#0A0A0F` |
| Card surface | `#1E1E2A` |
| Muted text | `#A1A1AA` |
| White text | `#FFFFFF` |
| Font (body) | Inter |
| Font (headings) | Plus Jakarta Sans |

## 5. Design

Design: see attached spec.

Specification:
- **Colors:** #3B82F6 primary accent, #0A0A0F background, #1E1E2A card surface, #A1A1AA muted text, #FFFFFF white text
- **Pages:** single-page landing: Hero (headline+subheadline+CTAs, dark bg with blue glow), Pipeline / How It Works (5-step timeline), AI Agents (4 role cards), Features (6-item grid), Tech Stack (6 logos), Final CTA (headline+button), Footer (logo+links+copyright)

## 6. Functional Requirements

### 6.1 Project Setup & Base Layout (chore, P2)

**Description:** Initialize the Next.js project with Tailwind CSS. Set up dark mode theme, global CSS variables for accent `#3B82F6`, responsive container layout, Inter/Plus Jakarta Sans typography via `next/font`. Mobile-first responsive breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px). Clean spacing system using Tailwind's default spacing scale.

**Acceptance criteria:**
- `npx create-next-app` or manual init with App Router.
- Tailwind CSS configured via PostCSS.
- `globals.css` defines CSS custom properties (`--color-accent`, `--color-bg`, `--color-surface`, `--color-muted`, `--color-text`).
- `layout.tsx` applies dark background and font classes globally.
- Responsive container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8.
- All subsequent sections render correctly within the layout.

### 6.2 Hero Section (feature, P2)

**Description:** Dark background with a blue gradient glow effect behind the headline. Headline "AI Team. Không cần thuê dev.", subheadline explaining the platform, primary CTA button "Bắt đầu ngay" (links to Telegram), secondary CTA "Xem cách hoạt động" (scrolls down to Pipeline section). Responsive typography: large on desktop, smaller on mobile.

**Acceptance criteria:**
- Full-viewport-height hero on desktop, shorter on mobile.
- Blue radial gradient glow behind text (CSS `radial-gradient` or Tailwind `bg-gradient`).
- Headline: text-5xl md:text-7xl font-bold, white.
- Subheadline: text-lg md:text-xl, muted text color.
- Buttons: primary filled with accent color, secondary outlined with border.
- Secondary CTA scrolls smoothly to the Pipeline section (`#pipeline`).
- All text in Vietnamese.

### 6.3 Pipeline / How It Works (feature, P2)

**Description:** A timeline or step cards showing the 5-step flow from idea to deploy. Title "Từ ý tưởng đến deploy hoàn toàn tự động". Each step displays: an icon or number, a title (≤4 words), and a short description (≤15 words). Steps are connected visually with arrows or lines.

**Acceptance criteria:**
- Section id `#pipeline`.
- 5 steps displayed sequentially: (1) Ý tưởng, (2) PM lên kế hoạch, (3) Dev code, (4) Test kiểm tra, (5) Deploy.
- On desktop: horizontal row with connecting lines/arrows.
- On mobile: vertical stack with connecting lines.
- Each step has an icon (emoji or SVG), title, and description.
- Section uses surface-colored cards.

### 6.4 AI Agents Section (feature, P2)

**Description:** 4 cards representing the 4 AI roles (PM, TL, Dev, TestLead). Title "4 AI Agents vận hành như engineering team thật". Each card contains an icon, role title, and a bullet list of 3–4 responsibilities. Dark card with light border and hover glow effect.

**Acceptance criteria:**
- Section id `#agents`.
- 4 cards in a 2×2 grid on desktop, single column on mobile.
- Each card: surface background (`#1E1E2A`), border `border-gray-700/50`.
- Hover: subtle blue glow (`box-shadow: 0 0 20px rgba(59,130,246,0.15)`).
- Responsibilities as an unordered list inside each card.
- Consistent icon per role (emoji or simple SVG).

### 6.5 Features Section (feature, P2)

**Description:** Grid of 6 feature items, each with an icon, title, and description. Title "Tự động hóa toàn bộ quy trình phát triển phần mềm". Clean grid layout consistent with overall design.

**Acceptance criteria:**
- Section id `#features`.
- 6 items in a 3×2 grid on desktop, 2×3 on tablet, single column on mobile.
- Each item: icon (top), title (bold), description (muted text).
- No border or card — minimal style, or subtle surface background.
- All text in Vietnamese.

### 6.6 Tech Stack Section (feature, P2)

**Description:** Grid showing 6 tech items (Next.js, Go, PostgreSQL, Tailwind CSS, GitHub Actions, Docker). Each displays an icon/logo and the tech name. Title "Stack hiện đại, sẵn sàng production".

**Acceptance criteria:**
- Section id `#tech-stack`.
- 6 items in a flexible grid (3×2 or 6-in-a-row on desktop).
- Each item: tech logo SVG (or simple placeholder icon) + name label.
- Hover: subtle scale-up effect.
- Title centered above the grid.

### 6.7 Final CTA & Footer (feature, P2)

**Description:** Final CTA section with headline, subheadline, and "Chat qua Telegram" button. Footer with logo "aiteam", Telegram link, GitHub link, and copyright line. Clean dark footer.

**Acceptance criteria:**
- CTA section: centered content, large headline, muted subheadline, accent-filled button linking to Telegram.
- Footer: horizontal layout on desktop, stacked on mobile.
- Footer links: Telegram icon/link, GitHub icon/link.
- Copyright: "© 2024 aiteam. All rights reserved." or similar.
- Background: slightly darker than the page background or same as surface.

### 6.8 Subtle Animations — Framer Motion (feature, P3)

**Description:** Add Framer Motion for fade-in/up animations on scroll for each section. Subtle — no flashy transitions, just smooth entry. Can be dropped if complexity is too high.

**Acceptance criteria:**
- `framer-motion` installed as a dependency.
- Each section wraps content in `motion.div` with `initial={{ opacity: 0, y: 24 }}` and `whileInView={{ opacity: 1, y: 0 }}`.
- Transition: `duration: 0.6, ease: "easeOut"`.
- `viewport={{ once: true, margin: "-100px" }}` so animation triggers once when section enters viewport.
- No animation on the first render of the Hero section (it should be visible immediately).

## 7. Constraints

- All UI text is in Vietnamese.
- No backend, no API calls, no database.
- Static site — can be deployed as static files.
- Fully responsive: mobile-first, tested at 375px, 768px, 1024px, 1440px.
- No external dependencies beyond Next.js, Tailwind, and optionally Framer Motion.
