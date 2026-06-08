# Test Cases — Hero Section

## Happy Path Scenarios

**Scenario**: Hero renders at full viewport height on desktop with dark background and blue glow
**Given**: The landing page is loaded on a desktop screen (≥1024px)
**When**: The Hero section is rendered
**Then**: It fills the full viewport height, has a `#0A0A0F` background, and a blue radial gradient glow effect is visible behind the headline

**Scenario**: Headline displays correct Vietnamese text with responsive sizing
**Given**: The Hero section is visible
**When**: The page renders the headline
**Then**: The headline reads "AI Team. Không cần thuê dev." in white, is styled as `text-5xl` on mobile and `md:text-7xl` on desktop, and uses `font-bold`

**Scenario**: Subheadline describes the platform
**Given**: The Hero section is visible
**When**: The page renders the subheadline
**Then**: A subheadline paragraph appears below the headline, styled as `text-lg` on mobile and `md:text-xl`, in muted text color (`#A1A1AA`), explaining the platform in Vietnamese

**Scenario**: Primary CTA "Bắt đầu ngay" is a filled accent button linking to Telegram
**Given**: The Hero section is visible
**When**: The user sees the primary CTA button
**Then**: The button displays "Bắt đầu ngay", is filled with the accent color (`#3B82F6`), and links to Telegram

**Scenario**: Secondary CTA "Xem cách hoạt động" is an outlined button that scrolls to Pipeline
**Given**: The Hero section is visible
**When**: The user sees the secondary CTA button
**Then**: The button displays "Xem cách hoạt động", has an outlined style (transparent background with a border), and clicking it smoothly scrolls to the section with id `#pipeline`

**Scenario**: Both CTAs are stacked horizontally with adequate spacing
**Given**: The Hero section is visible
**When**: The page renders the call-to-action buttons
**Then**: Both buttons are displayed side by side (horizontally stacked on desktop, adaptable on mobile) with spacing between them

**Scenario**: Hero section typography is responsive — smaller on mobile, larger on desktop
**Given**: The Hero section is visible on a mobile viewport (≤640px)
**When**: The page renders the headline and subheadline
**Then**: The headline uses `text-5xl` and the subheadline uses `text-lg`
**When**: The same page is viewed on a desktop viewport (≥768px)
**Then**: The headline uses `md:text-7xl` and the subheadline uses `md:text-xl`

**Scenario**: Hero section is shorter on mobile than on desktop
**Given**: The Hero section is rendered on a mobile viewport (≤640px)
**When**: The page displays the hero
**Then**: The hero height is reduced (not full viewport) compared to the desktop full-viewport-height presentation

**Scenario**: All text in the Hero section is in Vietnamese
**Given**: The Hero section is visible
**When**: The user reads all text content
**Then**: The headline, subheadline, and both CTA button labels are written entirely in Vietnamese
