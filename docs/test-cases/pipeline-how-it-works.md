# Test Cases — Pipeline / How It Works

## Happy Path Scenarios

**Scenario**: Section has id `#pipeline` and displays the Vietnamese title
**Given**: The landing page is loaded
**When**: The user scrolls to the Pipeline / How It Works section
**Then**: The section has `id="pipeline"` and the title reads "Từ ý tưởng đến deploy hoàn toàn tự động" in white, centered

**Scenario**: 5 steps are displayed sequentially from idea to deploy
**Given**: The Pipeline section is visible
**When**: The user views the step cards
**Then**: Exactly 5 steps are shown in order: (1) Ý tưởng, (2) PM lên kế hoạch, (3) Dev code, (4) Test kiểm tra, (5) Deploy

**Scenario**: Each step displays an icon, a title, and a short description
**Given**: The Pipeline section is visible
**When**: The user looks at any single step card
**Then**: The card contains an icon (emoji or SVG), a title of at most 4 words, and a short description of at most 15 words

**Scenario**: Steps are arranged in a horizontal row with connecting arrows on desktop
**Given**: The Pipeline section is visible on a desktop viewport (≥1024px)
**When**: The user views the step layout
**Then**: The 5 steps are arranged in a horizontal row with visual connectors (lines or arrows) between adjacent steps

**Scenario**: Steps are arranged in a vertical stack with connecting lines on mobile
**Given**: The Pipeline section is visible on a mobile viewport (≤640px)
**When**: The user views the step layout
**Then**: The 5 steps are stacked vertically, one per row, with connecting lines between adjacent steps

**Scenario**: Step cards use surface-colored background
**Given**: The Pipeline section is visible
**When**: The user inspects any step card
**Then**: The card background uses the surface color (`#1E1E2A`)

**Scenario**: All step content is in Vietnamese
**Given**: The Pipeline section is visible
**When**: The user reads all text content across the 5 steps
**Then**: The title, step titles, and descriptions are written entirely in Vietnamese
