# Test Cases — Project Setup & Base Layout

## 1. Next.js project initialized with App Router

**Scenario**: App Router project exists
**Given**: The project has been initialized with `create-next-app` (App Router)
**When**: Inspecting the project root
**Then**: There is an `app/` directory containing `layout.tsx` and `page.tsx`

## 2. Tailwind CSS configured via PostCSS

**Scenario**: Tailwind CSS is enabled
**Given**: The project has been scaffolded
**When**: Checking `postcss.config.js` (or `.mjs`) and `tailwind.config.ts`
**Then**: Tailwind is listed as a PostCSS plugin, and `tailwind.config.ts` has content paths pointing to `./app/**/*.{js,ts,jsx,tsx}`

## 3. Global CSS custom properties defined

**Scenario**: Custom CSS properties match design tokens
**Given**: The file `app/globals.css` exists
**When**: Reading the `:root` block
**Then**: Five CSS custom properties are defined with correct hex values:
  - `--color-accent: #3B82F6`
  - `--color-bg: #0A0A0F`
  - `--color-surface: #1E1E2A`
  - `--color-muted: #A1A1AA`
  - `--color-text: #FFFFFF`

## 4. Dark background applied globally

**Scenario**: Dark background body
**Given**: The root `layout.tsx` renders the `<body>` element
**When**: Inspecting the body class or style in `layout.tsx`
**Then**: The body has a dark background (Tailwind class `bg-[#0A0A0F]` or equivalent), and the `globals.css` sets `body { background-color: var(--color-bg); color: var(--color-text); }`

## 5. Inter and Plus Jakarta Sans fonts loaded via next/font

**Scenario**: Typography fonts are loaded
**Given**: The root `layout.tsx` file
**When**: Reading the imports and font setup
**Then**: `Inter` is imported from `next/font/google` and applied as the body font; `Plus Jakarta Sans` is imported from `next/font/google` and applied as the heading font (e.g. via a CSS class or `fontFamily` in Tailwind config)

## 6. Responsive container max-w-7xl

**Scenario**: Responsive container class is present on the main wrapper
**Given**: The root layout or page component wraps content in a container
**When**: Inspecting the wrapper `<div>` or `<main>` element
**Then**: It has classes `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

## 7. Mobile-first responsive breakpoints available

**Scenario**: Default Tailwind breakpoints are ready
**Given**: The Tailwind config is set up
**When**: Reading `tailwind.config.ts`
**Then**: The `theme.extend` or default theme includes breakpoints `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px` (Tailwind defaults, no custom overrides needed)

## 8. Clean spacing system via Tailwind default scale

**Scenario**: Tailwind spacing scale is available
**Given**: The Tailwind config is set up
**When**: Checking for custom spacing overrides in `tailwind.config.ts`
**Then**: No custom spacing values are defined; the project relies on Tailwind's default spacing scale (p-4, p-6, p-8, gap-4, gap-6, gap-8, etc.)

## 9. Layout renders all child pages

**Scenario**: Root layout includes children outlet
**Given**: The root `layout.tsx` file
**When**: Reading the component return value
**Then**: It renders `{children}` inside the container, allowing all 7 subsequent sections to render correctly within the layout
