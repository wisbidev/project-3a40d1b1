# Test Cases — Features Section

## Section: Render & Layout

**Scenario**: Section renders with correct id and heading
**Given**: The landing page is loaded
**When**: The user scrolls to the Features section
**Then**: The section has id `#features` and displays the heading "Tự động hóa toàn bộ quy trình phát triển phần mềm"

**Scenario**: 3×2 grid on desktop
**Given**: The viewport is at least 1024px wide
**When**: The user views the Features section
**Then**: The 6 feature items are arranged in a 3-column × 2-row grid layout

**Scenario**: 2×3 grid on tablet
**Given**: The viewport is at least 768px and less than 1024px wide
**When**: The user views the Features section
**Then**: The 6 feature items are arranged in a 2-column × 3-row grid layout

**Scenario**: Single column on mobile
**Given**: The viewport is less than 768px wide
**When**: The user views the Features section
**Then**: The 6 feature items stack in a single vertical column

## Section: Item Visuals

**Scenario**: Each item displays an icon, bold title, and muted description
**Given**: The Features section is rendered
**When**: The user inspects any feature item
**Then**: The item shows an icon at the top, a bold title below it, and a description in muted text (`#A1A1AA`) beneath

**Scenario**: Items have no border or card outline
**Given**: The Features section is rendered
**When**: The user inspects any feature item
**Then**: The item has no visible border or card wrapper — minimal style with either a transparent background or a subtle surface background

## Section: Feature Item 1 — Tự động phân tích yêu cầu

**Scenario**: First feature item has correct content
**Given**: The Features section is rendered
**When**: The user views the first item
**Then**: The item displays an icon, the title "Tự động phân tích yêu cầu", and a description explaining how AI interprets project requirements

## Section: Feature Item 2 — Lập kế hoạch chi tiết

**Scenario**: Second feature item has correct content
**Given**: The Features section is rendered
**When**: The user views the second item
**Then**: The item displays an icon, the title "Lập kế hoạch chi tiết", and a description explaining automated sprint/task planning

## Section: Feature Item 3 — Code tự động

**Scenario**: Third feature item has correct content
**Given**: The Features section is rendered
**When**: The user views the third item
**Then**: The item displays an icon, the title "Code tự động", and a description explaining AI-driven code generation

## Section: Feature Item 4 — Kiểm thử toàn diện

**Scenario**: Fourth feature item has correct content
**Given**: The Features section is rendered
**When**: The user views the fourth item
**Then**: The item displays an icon, the title "Kiểm thử toàn diện", and a description explaining automated testing

## Section: Feature Item 5 — Review & Merge

**Scenario**: Fifth feature item has correct content
**Given**: The Features section is rendered
**When**: The user views the fifth item
**Then**: The item displays an icon, the title "Review & Merge", and a description explaining automated code review and PR merging

## Section: Feature Item 6 — Deploy liên tục

**Scenario**: Sixth feature item has correct content
**Given**: The Features section is rendered
**When**: The user views the sixth item
**Then**: The item displays an icon, the title "Deploy liên tục", and a description explaining continuous deployment
