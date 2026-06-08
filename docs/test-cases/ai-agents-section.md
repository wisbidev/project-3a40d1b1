# Test Cases — AI Agents Section

## Section: Render & Layout

**Scenario**: Section renders with correct id and heading
**Given**: The landing page is loaded
**When**: The user scrolls to the AI Agents section
**Then**: The section has id `#agents` and displays the heading "4 AI Agents vận hành như engineering team thật"

**Scenario**: Responsive 2×2 grid on desktop
**Given**: The viewport is at least 768px wide
**When**: The user views the AI Agents section
**Then**: The 4 agent cards are arranged in a 2-column × 2-row grid layout

**Scenario**: Single column on mobile
**Given**: The viewport is less than 768px wide
**When**: The user views the AI Agents section
**Then**: The 4 agent cards stack in a single vertical column

## Section: Card Visuals

**Scenario**: Each card has dark surface background and light border
**Given**: The AI Agents section is visible
**When**: The user inspects any agent card
**Then**: The card has background `#1E1E2A` and a border matching `border-gray-700/50`

**Scenario**: Card shows blue glow on hover
**Given**: The user hovers over an agent card
**When**: The cursor enters the card area
**Then**: The card displays a subtle blue glow effect (`box-shadow: 0 0 20px rgba(59,130,246,0.15)`)

## Section: Card 1 — PM

**Scenario**: PM card shows icon, title, and responsibilities
**Given**: The AI Agents section is rendered
**When**: The user views the first card
**Then**: The card displays a PM icon, the title "PM", and an unordered list containing:
  - Phân tích yêu cầu
  - Chia nhỏ task
  - Lên kế hoạch sprint
  - Theo dõi tiến độ

## Section: Card 2 — TL

**Scenario**: TL card shows icon, title, and responsibilities
**Given**: The AI Agents section is rendered
**When**: The user views the second card
**Then**: The card displays a TL icon, the title "TL", and an unordered list containing:
  - Thiết kế kiến trúc
  - Review code
  - Đảm bảo chất lượng
  - Quyết định công nghệ

## Section: Card 3 — Dev

**Scenario**: Dev card shows icon, title, and responsibilities
**Given**: The AI Agents section is rendered
**When**: The user views the third card
**Then**: The card displays a Dev icon, the title "Dev", and an unordered list containing:
  - Implement tính năng
  - Viết unit test
  - Tối ưu hiệu năng
  - Fix bug

## Section: Card 4 — TestLead

**Scenario**: TestLead card shows icon, title, and responsibilities
**Given**: The AI Agents section is rendered
**When**: The user views the fourth card
**Then**: The card displays a TestLead icon, the title "TestLead", and an unordered list containing:
  - Viết test case
  - Kiểm thử tự động
  - Đảm bảo coverage
  - Report kết quả
