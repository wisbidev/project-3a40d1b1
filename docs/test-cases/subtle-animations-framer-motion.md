# Test Cases: Subtle Animations (Framer Motion)

## Acceptance Criteria Checklist

1. framer-motion installed as a dependency
2. Each section wraps content in `motion.div` with `initial={{ opacity: 0, y: 24 }}` and `whileInView={{ opacity: 1, y: 0 }}`
3. Transition: `duration: 0.6, ease: "easeOut"`
4. `viewport={{ once: true, margin: "-100px" }}`
5. No animation on the Hero section (visible immediately)

## Happy Path Scenarios

**Scenario**: Hero section renders without animation
**Given**: The landing page loads for the first time
**When**: The Hero section (id="hero") enters the viewport
**Then**: The Hero section content is fully visible immediately — no fade-in or y-offset animation

**Scenario**: Pipeline section fades in on scroll
**Given**: The page is scrolled down
**When**: The Pipeline section (id="pipeline") enters the viewport with a 100px margin
**Then**: It fades in from opacity 0 to 1 and slides up 24px with a 0.6s easeOut transition, animating only once

**Scenario**: AI Agents section fades in on scroll
**Given**: The page is scrolled down
**When**: The AI Agents section (id="agents") enters the viewport with a 100px margin
**Then**: It fades in from opacity 0 to 1 and slides up 24px with a 0.6s easeOut transition, animating only once

**Scenario**: Features section fades in on scroll
**Given**: The page is scrolled down
**When**: The Features section (id="features") enters the viewport with a 100px margin
**Then**: It fades in from opacity 0 to 1 and slides up 24px with a 0.6s easeOut transition, animating only once

**Scenario**: Tech Stack section fades in on scroll
**Given**: The page is scrolled down
**When**: The Tech Stack section (id="tech-stack") enters the viewport with a 100px margin
**Then**: It fades in from opacity 0 to 1 and slides up 24px with a 0.6s easeOut transition, animating only once

**Scenario**: Final CTA section fades in on scroll
**Given**: The page is scrolled down
**When**: The CTA section (id="cta") enters the viewport with a 100px margin
**Then**: It fades in from opacity 0 to 1 and slides up 24px with a 0.6s easeOut transition, animating only once

**Scenario**: Footer fades in on scroll
**Given**: The page is scrolled down to the very bottom
**When**: The Footer enters the viewport with a 100px margin
**Then**: It fades in from opacity 0 to 1 and slides up 24px with a 0.6s easeOut transition, animating only once
