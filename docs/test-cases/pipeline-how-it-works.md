# Test Cases: Pipeline / How It Works

## Section: Layout & Visibility

**Scenario**: Pipeline section renders with correct id and title
**Given**: The page is loaded
**When**: The user scrolls to the Pipeline section
**Then**: The section has id `#pipeline` and displays the heading "Từ ý tưởng đến deploy hoàn toàn tự động"

## Section: 5 Steps — Desktop Layout

**Scenario**: Five steps are displayed in a horizontal row on desktop
**Given**: The viewport is at least 1024px wide
**When**: The Pipeline section is visible
**Then**: The five steps are arranged in a horizontal row with connecting lines or arrows between them

## Section: 5 Steps — Mobile Layout

**Scenario**: Five steps stack vertically on mobile
**Given**: The viewport is 640px wide or smaller
**When**: The Pipeline section is visible
**Then**: The five steps are stacked vertically with connecting lines between them

## Section: Step 1 — Ý tưởng

**Scenario**: Step 1 displays icon, title, and description
**Given**: The Pipeline section is rendered
**When**: The user views step 1
**Then**: It shows an icon, the title "Ý tưởng", and a short description (≤15 words)

## Section: Step 2 — PM lên kế hoạch

**Scenario**: Step 2 displays icon, title, and description
**Given**: The Pipeline section is rendered
**When**: The user views step 2
**Then**: It shows an icon, the title "PM lên kế hoạch", and a short description (≤15 words)

## Section: Step 3 — Dev code

**Scenario**: Step 3 displays icon, title, and description
**Given**: The Pipeline section is rendered
**When**: The user views step 3
**Then**: It shows an icon, the title "Dev code", and a short description (≤15 words)

## Section: Step 4 — Test kiểm tra

**Scenario**: Step 4 displays icon, title, and description
**Given**: The Pipeline section is rendered
**When**: The user views step 4
**Then**: It shows an icon, the title "Test kiểm tra", and a short description (≤15 words)

## Section: Step 5 — Deploy

**Scenario**: Step 5 displays icon, title, and description
**Given**: The Pipeline section is rendered
**When**: The user views step 5
**Then**: It shows an icon, the title "Deploy", and a short description (≤15 words)

## Section: Card Styling

**Scenario**: Each step card uses surface color background
**Given**: The Pipeline section is rendered
**When**: The user inspects any step card
**Then**: The card has a surface-colored background (`#1E1E2A`)

## Section: Visual Connection

**Scenario**: Steps are connected visually
**Given**: The Pipeline section is rendered
**When**: The user inspects the layout
**Then**: Each step is connected to the next via a visual element (arrow or line) appropriate to the breakpoint
