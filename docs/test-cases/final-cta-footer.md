# Test Cases — Final CTA & Footer

## Final CTA Section

**Scenario**: Final CTA renders with headline, subheadline, and Telegram button
**Given**: The landing page is loaded
**When**: The user scrolls to the Final CTA section (id: `#cta` or the last section before the footer)
**Then**: The section displays:
- A large headline in white text (e.g. "Sẵn sàng biến ý tưởng thành sản phẩm?")
- A muted subheadline below the headline
- An accent-filled button labeled "Chat qua Telegram" that links to `https://t.me/aiteam`

**Scenario**: Final CTA button opens Telegram in a new tab
**Given**: The Final CTA section is visible
**When**: The user clicks the "Chat qua Telegram" button
**Then**: A new browser tab opens to `https://t.me/aiteam`

## Footer

**Scenario**: Footer renders with logo, links, and copyright
**Given**: The landing page is fully loaded
**When**: The user scrolls to the bottom of the page
**Then**: The footer displays:
- The "aiteam" logo/wordmark
- A Telegram link (icon or text) pointing to `https://t.me/aiteam`
- A GitHub link (icon or text) pointing to the project's GitHub repository
- A copyright line: "© 2024 aiteam. All rights reserved." (or equivalent in Vietnamese)

**Scenario**: Footer links open in new tabs
**Given**: The footer is visible
**When**: The user clicks the Telegram or GitHub link
**Then**: Each link opens the corresponding URL in a new browser tab

**Scenario**: Footer layout is horizontal on desktop, stacked on mobile
**Given**: The footer is rendered
**When**: The viewport width is ≥ 768px
**Then**: Footer items (logo, links, copyright) are laid out in a single horizontal row
**When**: The viewport width is < 768px
**Then**: Footer items are stacked vertically

## Visual & Theming

**Scenario**: Footer has a clean dark background
**Given**: The footer is rendered
**When**: Inspecting the footer's background color
**Then**: The footer uses a dark background (`#0A0A0F` or `#1E1E2A` surface color), consistent with the page's dark theme
