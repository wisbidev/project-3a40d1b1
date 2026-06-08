# Test Cases — Tech Stack Section

## Section: Render & Layout

**Scenario**: Section renders with correct id and heading
**Given**: The landing page is loaded
**When**: The user scrolls to the Tech Stack section
**Then**: The section has id `#tech-stack` and displays the heading "Stack hiện đại, sẵn sàng production"

**Scenario**: 6 items in a flexible grid on desktop
**Given**: The viewport is at least 768px wide
**When**: The user views the Tech Stack section
**Then**: The 6 tech items are arranged in a 3×2 grid layout

**Scenario**: 3×2 grid on tablet
**Given**: The viewport is at least 768px and less than 1024px wide
**When**: The user views the Tech Stack section
**Then**: The 6 tech items are arranged in a 3-column × 2-row grid layout

**Scenario**: Single column on mobile
**Given**: The viewport is less than 768px wide
**When**: The user views the Tech Stack section
**Then**: The 6 tech items stack in a single vertical column (or 2 per row) with centered alignment

## Section: Item Visuals

**Scenario**: Each item displays an icon and tech name
**Given**: The Tech Stack section is rendered
**When**: The user inspects any tech item
**Then**: The item shows an icon at the top and the tech name label below it

**Scenario**: Hover scale-up effect
**Given**: The Tech Stack section is rendered
**When**: The user hovers over a tech item
**Then**: The item scales up slightly (transform: scale effect) on hover

## Section: Tech Items

**Scenario**: Tech item 1 — Next.js
**Given**: The Tech Stack section is rendered
**When**: The user views the first item
**Then**: The item displays an icon and the name "Next.js"

**Scenario**: Tech item 2 — Go
**Given**: The Tech Stack section is rendered
**When**: The user views the second item
**Then**: The item displays an icon and the name "Go"

**Scenario**: Tech item 3 — PostgreSQL
**Given**: The Tech Stack section is rendered
**When**: The user views the third item
**Then**: The item displays an icon and the name "PostgreSQL"

**Scenario**: Tech item 4 — Tailwind CSS
**Given**: The Tech Stack section is rendered
**When**: The user views the fourth item
**Then**: The item displays an icon and the name "Tailwind CSS"

**Scenario**: Tech item 5 — GitHub Actions
**Given**: The Tech Stack section is rendered
**When**: The user views the fifth item
**Then**: The item displays an icon and the name "GitHub Actions"

**Scenario**: Tech item 6 — Docker
**Given**: The Tech Stack section is rendered
**When**: The user views the sixth item
**Then**: The item displays an icon and the name "Docker"
