---
version: alpha
name: Leo-trevizani
description: |
  Expo PP embodies a bold, forward-thinking digital aesthetic grounded in a
  deep, near-black canvas that prioritizes contrast and visual hierarchy. The
  design balances technical precision with vibrant accent colors, creating an
  immersive platform for academic innovation and digital marketplace
  experiences. A gradient-rich approach using warm orange-to-purple transitions
  defines hero moments, while carefully layered micro-shadows add depth without
  overwhelming the dark backdrop. The system radiates energy and professionalism
  through precise typography, smooth interactions, and a measured use of color
  that keeps focus on content and calls to action. Icons and decorative elements
  carry bright orange accents that cut through the darkness, signaling
  interactivity and brand presence.
source:
  url: "https://leo-trevizani.github.io/ECOS-Summit/"
  pagesAnalyzed: 1
  extractedAt: 2026-11-12
  tokensMeasured: true
colors:
  primary: "#F27D26"
  canvas: "#0F0A1F"
  on-primary: "#222222"
  hairline: "#251F35"
  neutral-1: "#FFFFFF"
typography:
  display:
    fontFamily: "Space Grotesk"
    fontSize: 48px
    fontWeight: 900
    lineHeight: 1
    letterSpacing: -2.4px
  heading:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.63
    letterSpacing: 0px
  body-xs:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0px
  button-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  button-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.43
    letterSpacing: 0px
  button-sm-strong:
    fontFamily: "Space Grotesk"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 1.4px
    textTransform: uppercase
  code-sm:
    fontFamily: "JetBrains Mono"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0px
  code-sm-strong:
    fontFamily: "JetBrains Mono"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 0.6px
    textTransform: uppercase
  code-xs:
    fontFamily: "JetBrains Mono"
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0.5px
    textTransform: uppercase
rounded:
  xs: 8px
  sm: 16px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 80px
borderWidths:
  thin: 1px
shadows:
  sm: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px"
  md: "oklab(0.710617 0.106104 0.132957 / 0.2) 0px 10px 15px -3px, oklab(0.710617 0.106104 0.132957 / 0.2) 0px 4px 6px -4px"
  lg: "oklab(0.710617 0.106104 0.132957 / 0.1) 0px 20px 25px -5px, oklab(0.710617 0.106104 0.132957 / 0.1) 0px 8px 10px -6px"
elevationStrategy: layered-micro
themes:
  derived: light   # the other theme is the site's measured palette
  light:
    bg: "#FFFBF7"
    surface: "#F5F1ED"
    surfaceRaised: "#EDE9E6"
    text: "#1C1612"
    textMuted: "#706C68"
    border: "#DBD8D4"
    accent: "#BB560B"
    accentFg: "#FFFFFF"
    focusRing: "#E2680E"
    elevation: shadow
  dark:
    bg: "#0F0A1F"
    surface: "#0F0A1E"
    surfaceRaised: "#221E30"
    text: "#111111"
    textMuted: "#100F16"
    border: "#251F35"
    accent: "#F27D26"
    accentFg: "#0B0B0C"
    focusRing: "#F27D26"
    elevation: "border+surface"
  contrastFailures:
    - "dark: text on bg = 1.03:1 (needs 4.5:1)"
    - "dark: muted on bg = 1.02:1 (needs 4.5:1)"
    - "dark: text on surface = 1.03:1 (needs 4.5:1)"
gradients:
  - context: section
    kind: linear
    value: "linear-gradient(to right top in oklab, rgb(242, 125, 38) 0%, rgb(124, 58, 237) 100%)"
  - context: section
    kind: linear
    value: "linear-gradient(to right, rgb(255, 255, 255) 0%, oklch(0.968 0.007 247.896) 50%, rgb(242, 125, 38) 100%)"
  - context: section
    kind: linear
    value: "linear-gradient(to right, oklab(0.381 0.100917 -0.144194 / 0.4) 0%, rgb(22, 18, 33) 50%, oklab(0.266 0.0637018 0.0467235 / 0.3) 100%)"
components:
  button-primary:
    typography: "{typography.button-sm-strong}"
    textColor: "{colors.neutral-1}"
    height: 48px
    padding: "14px 24px 14px 24px"
    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.710617 0.106104 0.132957 / 0.2) 0px 10px 15px -3px, oklab(0.710617 0.106104 0.132957 / 0.2) 0px 4px 6px -4px"
    rounded: "{rounded.sm}"
    backgroundColor: "{colors.primary}"
  button-outline:
    typography: "{typography.code-sm}"
    textColor: "oklch(0.704 0.04 256.788)"
    border: "1px solid oklab(0.257013 0.0180493 -0.0371398 / 0.3)"
    height: 30px
    padding: "6px 10px 6px 10px"
    rounded: "{rounded.xs}"
states:
  other-hover:
    target: other
    state: hover
    borderColor: "rgba(124, 58, 237, 0.3)"
  other-disabled:
    target: other
    state: disabled
    opacity: 0.3
breakpoints:
  - width: 375
    containerWidth: 375
    gridColumns: 0
    navLinksVisible: 0
    menuToggleVisible: false
    headingPx: 36
    bodyPx: 16
    sectionPaddingX: 0
  - width: 768
    containerWidth: 768
    gridColumns: 0
    navLinksVisible: 0
    menuToggleVisible: false
    headingPx: 48
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1024
    containerWidth: 1024
    gridColumns: 0
    navLinksVisible: 0
    menuToggleVisible: false
    headingPx: 48
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1280
    containerWidth: 1280
    gridColumns: 0
    navLinksVisible: 0
    menuToggleVisible: false
    headingPx: 48
    bodyPx: 16
    sectionPaddingX: 0
  - width: 1440
    containerWidth: 1440
    gridColumns: 0
    navLinksVisible: 0
    menuToggleVisible: false
    headingPx: 48
    bodyPx: 16
    sectionPaddingX: 0
coverage:
  statesFound: 61
  gradientsFound: 3
  rolesUnassigned: 1
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: false
  semanticRampDeclared: false
---

# Design System Inspired by Expo PP

## 1. Visual Theme & Atmosphere

Expo PP embodies a bold, forward-thinking digital aesthetic grounded in a deep, near-black canvas that prioritizes contrast and visual hierarchy. The design balances technical precision with vibrant accent colors, creating an immersive platform for academic innovation and digital marketplace experiences. A gradient-rich approach using warm orange-to-purple transitions defines hero moments, while carefully layered micro-shadows add depth without overwhelming the dark backdrop. The system radiates energy and professionalism through precise typography, smooth interactions, and a measured use of color that keeps focus on content and calls to action. Icons and decorative elements carry bright orange accents that cut through the darkness, signaling interactivity and brand presence.

**Key Characteristics**
- Deep, near-black canvas (`{colors.canvas}` — `#0F0A1F`) creates a modern, high-contrast foundation
- Vibrant primary orange accent (`{colors.primary}` — `#F27D26`) drives all interactive and brand elements
- Rich gradient overlays (orange-to-purple and layered semi-transparent gradients) define visual depth
- Micro-shadow elevation strategy keeps depth subtle and refined
- Precise, technical typography hierarchy across three font families (Space Grotesk, Inter, JetBrains Mono)
- Careful spacing and radius strategy creates clear visual rhythm without excess ornament
- Responsive layout maintains full-width presentation across all breakpoints with consistent padding

## 2. Color Palette & Roles

### Primary
- **Brand Accent** (`{colors.primary}` — `#F27D26`): Primary call-to-action buttons, brand mark accent, active/hover states, and interactive highlights throughout the interface

### Neutral Scale
- **Canvas** (`{colors.canvas}` — `#0F0A1F`): Default page background and primary surface color
- **Hairline** (`{colors.hairline}` — `#251F35`): 1px borders, dividers, and subtle surface separation
- **On Primary** (`{colors.on-primary}` — `#222222`): Label text and secondary content on brand-colored surfaces
- **Neutral White** (`{colors.neutral-1}` — `#FFFFFF`): Primary body text, headings, and high-contrast foreground content

### Surface & Borders
- **Hairline** (1px accent borders on dark surfaces): Used for card borders and subtle visual definition in low-contrast regions

## 3. Typography Rules

### Font Family
- **Space Grotesk** (`https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700`): Display and strong button typography; weights 500, 700; geometric, modern, highly legible at display sizes
- **Inter** (`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700`): Body, heading, and button text; weights 400, 500, 600, 700; neutral, accessible, highly versatile
- **JetBrains Mono** (`https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500`): Code, labels, and micro-text; weights 400, 500; monospace precision for technical roles

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Display | Space Grotesk | 48px | 900 | 1.0 | -2.4px | Hero heading; strong negative tracking |
| Heading | Inter | 14px | 700 | 1.43 | 0px | Small section heading; strong emphasis |
| Body—Small | Inter | 14px | 400 | 1.63 | 0px | Primary body copy and descriptive text |
| Body—Extra Small | Inter | 12px | 400 | 1.33 | 0px | Secondary body text and fine print |
| Button—Small Strong | Space Grotesk | 14px | 700 | 1.43 | 1.4px | CTA buttons; uppercase; high contrast |
| Button—Small | Inter | 14px | 600 | 1.43 | 0px | Secondary buttons and action labels |
| Button—Medium | Inter | 16px | 400 | 1.5 | 0px | Large interactive elements |
| Code—Small | JetBrains Mono | 12px | 400 | 1.33 | 0px | Inline code and monospace text |
| Code—Small Strong | JetBrains Mono | 12px | 700 | 1.33 | 0.6px | Uppercase code labels and badges |
| Code—Extra Small | JetBrains Mono | 10px | 700 | 1.5 | 0.5px | Uppercase micro-labels and tags |

### Principles
- **Negative tracking on display**: The display role uses strong letter-spacing compression (`-2.4px`), creating visual tension and modern presence
- **Three-font strategy**: Each family serves a distinct tonal purpose—geometric warmth (Space Grotesk), neutral clarity (Inter), technical precision (JetBrains Mono)
- **Uppercase as emphasis**: Strong weights and code families use text-transform uppercase with positive letter-spacing to signal hierarchy and action
- **Line-height for readability**: Body text uses generous line-height (1.63) to maintain legibility on dark backgrounds; headings use tighter spacing (1.43) for impact

## 4. Component Stylings

### Buttons

**Primary Button**
- **Background**: `{colors.primary}` — `#F27D26`
- **Text Color**: `{colors.neutral-1}` — `#FFFFFF`
- **Typography**: `{typography.button-sm-strong}` — 14px, weight 700, Space Grotesk, uppercase, 1.4px letter-spacing
- **Padding**: `{spacing.md}` vertical, `{spacing.md}` horizontal — 14px top/bottom, 24px left/right
- **Height**: 48px
- **Border Radius**: `{rounded.sm}` — 16px
- **Border**: None (0px)
- **Box Shadow**: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.710617 0.106104 0.132957 / 0.2) 0px 10px 15px -3px, oklab(0.710617 0.106104 0.132957 / 0.2) 0px 4px 6px -4px` — micro-elevation with warm-tinted shadow
- **Width**: 320px (full-width presentation on measurement)
- **Hover State**: Orange becomes lighter (observed as `var(--color-brand-orange-hover)`), with increased opacity and subtle background shift

**Outline Button**
- **Background**: Transparent
- **Text Color**: `oklch(0.704 0.04 256.788)` — light periwinkle
- **Typography**: `{typography.code-sm}` — 12px, weight 400, JetBrains Mono
- **Padding**: `{spacing.xs}` vertical, `{spacing.xs}` horizontal — 6px top/bottom, 10px left/right
- **Height**: 30px
- **Border Radius**: `{rounded.xs}` — 8px
- **Border**: 1px solid `oklab(0.257013 0.0180493 -0.0371398 / 0.3)` — dark, subtle border
- **Box Shadow**: None
- **Width**: 57px (as measured)
- **Hover State**: Border becomes slightly more visible with increased opacity; minimal background shift

### Cards & Containers

**Info Card** (observed on platform features)
- **Background**: Semi-transparent dark with subtle border
- **Border**: 1px solid `{colors.hairline}` or transparent with rounded corner accent
- **Border Radius**: `{rounded.xs}` — 8px
- **Padding**: `{spacing.md}` or `{spacing.lg}` (16–20px)
- **Icon Area**: Small orange accent icon (size 24–32px) with warm orange color (`{colors.primary}`)
- **Title**: `{typography.heading}` — 14px, weight 700, `{colors.neutral-1}`
- **Description**: `{typography.body-sm}` — 14px, weight 400, lighter gray/white
- **Hover State**: Border color lightens to `rgba(242, 125, 38, 0.3)` or `rgba(37, 31, 53, 0.8)`

### Inputs & Forms

**Form Input (Outline Style)**
- **Background**: Transparent or very dark (`rgba(15, 10, 31, 0.8)` on hover)
- **Border**: 1px solid `{colors.hairline}` — `#251F35`
- **Border Radius**: `{rounded.xs}` — 8px
- **Text Color**: `{colors.neutral-1}` — `#FFFFFF`
- **Placeholder Color**: Reduced opacity white or light gray
- **Focus State**: Border becomes `{colors.primary}` — `#F27D26`
- **Padding**: `{spacing.sm}` to `{spacing.md}` (12–16px)

### Navigation

**Logo / Brand Mark**
- **Styling**: Orange circular accent (`{colors.primary}`) with icon glyph
- **Border Radius**: Typically `{rounded.sm}` — 16px for badge style
- **Text**: "EXPO PP" in uppercase, `{typography.code-sm-strong}` or similar weight
- **Hover State**: Color brightens; subtle background shift

**Admin Link** (top right)
- **Text Color**: `{colors.neutral-1}` — `#FFFFFF`
- **Typography**: `{typography.body-sm}` or `{typography.body-xs}` — 12–14px
- **Hover State**: Color becomes brighter or orange-tinted

## 5. Layout Principles

### Spacing System
- **Base Unit**: 4px (`{spacing.xxs}`)
- **Scale**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 80px (named `xxs` through `xxxl`)
- **Usage Context**:
  - `{spacing.xxs}` — 4px: Micro-spacing between tightly grouped elements
  - `{spacing.xs}` — 8px: Compact spacing within components (button padding, small gaps)
  - `{spacing.sm}` — 12px: Small section spacing, icon margins
  - `{spacing.md}` — 16px: Default body padding, standard gaps, button padding
  - `{spacing.lg}` — 20px: Medium section spacing, card padding
  - `{spacing.xl}` — 24px: Large spacing between major components
  - `{spacing.xxl}` — 32px: Major layout divisions
  - `{spacing.xxxl}` — 80px: Full-screen hero spacing and large vertical rhythm

### Grid & Container
- **Max Width**: Full viewport width at all breakpoints (no hard container max-width constraint observed; content spans edge-to-edge)
- **Column Strategy**: Single-column layout observed across all measured breakpoints (375px, 768px, 1024px, 1280px, 1440px)
- **Section Padding**: 0px horizontal padding on measured viewports; content centers via flexbox/grid alignment, not margin auto
- **Content Column**: Matches viewport width at all measured sizes (no gutters between content and edge)

### Whitespace Philosophy
- **Generous vertical rhythm**: Large spacing between sections (`{spacing.xxxl}` — 80px) creates breathing room and visual clarity
- **Tight horizontal density**: Full-width sections with minimal lateral padding keep focus centered and allow content to expand
- **Micro-spacing precision**: Small gaps (4–12px) used within components for intentional grouping
- **Hero-to-content flow**: Significant whitespace above and below major content blocks encourages scanning and engagement

### Border Radius Scale
- `{rounded.xs}` — 8px: Form inputs, outline buttons, small cards, micro-components
- `{rounded.sm}` — 16px: Primary buttons, feature cards, logo badges, medium-scale UI elements

### Border Widths
- **Thin**: 1px (hairline borders on inputs, form fields, card outlines)

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow; color blocking only | Text, icons, flat content areas |
| Micro (sm) | `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px` | Small elevated components (buttons, badges) |
| Subtle (md) | `oklab(0.710617 0.106104 0.132957 / 0.2) 0px 10px 15px -3px, oklab(0.710617 0.106104 0.132957 / 0.2) 0px 4px 6px -4px` | Warm-tinted mid-tier elevation (featured buttons, interactive cards) |
| Deep (lg) | `oklab(0.710617 0.106104 0.132957 / 0.1) 0px 20px 25px -5px, oklab(0.710617 0.106104 0.132957 / 0.1) 0px 8px 10px -6px` | Large floating elements, modals, prominent overlays |

**Shadow Philosophy**: The system uses a layered-micro elevation strategy with warm-tinted oklab shadows (not pure black). Multiple near-transparent layers stack subtly to create barely-perceptible depth. The warm orange tint (`oklab(0.710617 0.106104 0.132957)`) echoes the brand primary and integrates shadows into the visual warmth of the interface. This approach preserves the dark aesthetic while signaling interactive elevation.

### Opacity Levels
- **20%** (0.20): Subtle background tints, very faint overlays
- **50%** (0.50): Semi-transparent backgrounds, medium overlays
- **72%** (0.72): Strong but not opaque; used for prominent semi-transparent surfaces
- **Disabled State**: 30–60% opacity reductions depending on component severity

### Z-index / Layering
- **Dropdown**: z-index 10 (menus, popovers above base content)
- **Base Content**: z-index auto/0 (default stacking)

## 7. Do's and Don'ts

### Do
- **Use the three-font strategy intentionally**: Space Grotesk for geometric warmth and display, Inter for neutral clarity, JetBrains Mono for technical precision and micro-labels
- **Apply negative letter-spacing to display text**: The `-2.4px` tracking on 48px headings is a defining brand trait; never normalize it
- **Ground every color choice in the palette**: Primary orange (`#F27D26`) for all CTAs, white for text, dark canvas for backgrounds, hairline for subtle borders
- **Maintain full-width section layouts**: Content spans edge-to-edge at all breakpoints with minimal (0px) horizontal padding; center via flex/grid alignment, not margins
- **Stack micro-shadows with warm tint**: Use oklab-based shadows rather than pure black to keep depth warm and integrated with the brand
- **Prioritize contrast on dark backgrounds**: Use full white text and bright orange accents to ensure legibility and visual pop
- **Respect the spacing scale**: Use the 4px base unit (xxs through xxxl) for all layout and component spacing; no arbitrary values
- **Apply uppercase styling only to button/code roles**: Use text-transform uppercase strategically with Space Grotesk or JetBrains Mono for signal and emphasis

### Don't
- **Don't invent new colors**: The palette is deliberately constrained (canvas, primary, neutrals, hairline). All interactive and status colors derive from these primaries
- **Don't flatten shadows to pure black**: Every shadow uses oklab warmth; pure `rgba(0,0,0,...)` is not on brand
- **Don't add horizontal padding to full-width sections**: Let content span edge-to-edge; use flexbox centering instead
- **Don't use rounded corners larger than** `{rounded.sm}` — 16px for standard components; rounded pill buttons are not in this system
- **Don't override line-height on body text below 1.6**: Dark backgrounds require ample leading for readability; never compress body line-height
- **Don't apply color outside the measured palette**: No error reds, success greens, or warning yellows are defined; status states are not semantically colored in this system
- **Don't mix font families within a single text block**: If a heading is Space Grotesk, keep it consistent; never blend fonts mid-sentence for emphasis
- **Don't disable interactive elements without reducing opacity** (30–60% opacity reduction per the measured interaction states)
- **Don't invent interaction states**: Only hover, focus, and disabled states were extracted; no active, group-hover, or other states exist in the documented palette

## 8. Responsive Behavior

### Breakpoints

| Viewport | Content Width | Grid Columns | Key Changes |
|---|---|---|---|
| 375px | 375px | 1 | Mobile; full-width sections; heading 36px |
| 768px | 768px | 1 | Tablet; heading grows to 48px; spacing remains consistent |
| 1024px | 1024px | 1 | Desktop; heading 48px; section padding 0px horizontal |
| 1280px | 1280px | 1 | Wide desktop; full layout maintained |
| 1440px | 1440px | 1 | Max measured viewport; no further layout changes |

**Derived Strategy**: The layout is single-column across all measured breakpoints. No responsive grid changes, no visible menu toggle, and no conditional navigation visibility were detected. Content scaling is minimal; headings shift from 36px on mobile to 48px on tablet/desktop. All sections maintain 0px horizontal padding, allowing content to extend edge-to-edge. Body text remains 16px across all sizes.

### Touch Targets
- **Minimum button height**: 48px (primary CTA buttons)
- **Minimum button width**: 320px (observed on mobile)
- **Outline button minimum**: 30px height, 57px width (observed)
- **Tap padding**: `{spacing.md}` — 16px minimum around interactive elements to avoid accidental presses

### Collapsing Strategy
- **Logo & brand mark**: Always visible, top-left; no responsive hiding
- **Admin link**: Always visible, top-right; no responsive collapse
- **Navigation**: No nav bar detected; content centers on viewport
- **Cards and sections**: Stack vertically on mobile; maintain full-width presentation (no multi-column grid breakpoint observed)
- **Button width**: Primary buttons remain 320px; no shrinking to fit smaller viewports (may need custom mobile adjustment outside documented system)

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA Button**: Brand Accent (`{colors.primary}` — `#F27D26`)
- **Page Background**: Canvas (`{colors.canvas}` — `#0F0A1F`)
- **Body Text & Headings**: Neutral White (`{colors.neutral-1}` — `#FFFFFF`)
- **Borders & Dividers**: Hairline (`{colors.hairline}` — `#251F35`)
- **Label Text on Brand Surfaces**: On Primary (`{colors.on-primary}` — `#222222`)

### Iteration Guide
1. **Start with canvas (`#0F0A1F`) as page background**: All sections inherit this unless explicitly layered with gradient or overlay
2. **Apply primary orange (`#F27D26`) to every CTA button**: Use `{typography.button-sm-strong}` with uppercase text and 16px border-radius
3. **Use white (`#FFFFFF`) for all body and heading text**: Maintain strong contrast against dark canvas
4. **Add micro-shadows with warm oklab tint** (`oklab(0.710617 0.106104 0.132957)`) **rather than black**: This keeps depth integrated with brand warmth
5. **Respect the spacing scale** (4, 8, 12, 16, 20, 24, 32, 80px): Never use arbitrary spacing values
6. **Apply negative letter-spacing (`-2.4px`) to display headings** (48px, Space Grotesk): This is a defining visual trait
7. **Use three font families strategically**: Space Grotesk for display/buttons, Inter for body/headings, JetBrains Mono for code/labels
8. **Keep sections full-width with 0px horizontal padding**: Center content via flexbox; let hero gradients and overlays span edge-to-edge
9. **Group interactive elements in cards with hairline borders** (`#251F35`, 1px, 8px radius): Add subtle shadows on hover
10. **Test all text on dark backgrounds for sufficient contrast**: If white text becomes hard to read, brighten or use brighter accent colors instead

## 10. Known Gaps

- **Semantic status colors**: The site declares no error, success, warning, or info color ramp. Status states are not semantically colored in the extracted palette; do not invent a ramp
- **Interaction states beyond hover/focus/disabled**: The extraction covers only hover, focus (:focus), and disabled (:disabled) states. No active, group-hover, visited, or other pseudo-class states are documented; assume none exist
- **Dark/light mode or theme switching**: One theme was extracted (dark); no light-mode variant or theme-switching mechanism was observed
- **Surfaces behind authentication**: Only the public landing/hero page was analysed; authenticated app surfaces, dashboards, or gated content were not visited
- **Responsive collapse behavior**: No responsive nav toggle, hamburger menu, or collapsed sidebar were detected. Navigation remains consistent across all measured breakpoints; the layout may require custom mobile CTA handling outside the documented system
- **Specific mobile button widths**: Primary buttons measure 320px on desktop; mobile scaling strategy was not explicitly captured. This may require custom responsive adjustment
- **Animation & transition timings**: No CSS transition or animation durations were extracted; assume no special easing or delay requirements beyond default browser behavior
- **Unassigned colors**: One neutral white (`#FFFFFF`) was measured but has no explicit semantic role assigned; it is used as text/foreground only
- **Component variants beyond primary/outline buttons**: Only two button variants were extracted (primary and outline). Secondary, ghost, link, or other button styles were not measured; do not invent them
- **Form validation states**: No error, success, or warning input states were observed; assume inputs have only default, focus, hover, and disabled states
- **Icon system**: Icons are present (rocket, badge, shield) but no formal icon sizing, naming, or color palette was extracted; assume icons inherit brand primary or text color contextually
- **Print or export styles**: No print media queries or export styling were captured
- **Accessibility features**: ARIA attributes, focus outlines, skip links, and other a11y enhancements were not explicitly measured; implement per WCAG guidelines