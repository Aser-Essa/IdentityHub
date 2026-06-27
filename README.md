<p align="center">
  <img src="public/logo.svg" alt="IdentityHub Logo" width="48" height="54" />
</p>

<h1 align="center">IdentityHub</h1>

<p align="center">
  <strong>A modern, animated landing page for a privacy-first digital identity protection platform.</strong>
</p>

<p align="center">
  Built with Next.js 15, GSAP, Tailwind CSS v4, and Swiper — featuring a cinematic preloader, scroll-triggered animations, smooth scrolling, and a fully responsive dark-themed UI.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#project-architecture">Architecture</a> •
  <a href="#application-flow">Flow</a> •
  <a href="#development-setup">Setup</a>
</p>

---

## Screenshots

> _Add screenshots or a live demo link here._

| Section       | Preview                         |
| ------------- | ------------------------------- |
| Preloader     | `<!-- screenshot placeholder -->` |
| Hero          | `<!-- screenshot placeholder -->` |
| Services      | `<!-- screenshot placeholder -->` |
| Features      | `<!-- screenshot placeholder -->` |
| Pricing       | `<!-- screenshot placeholder -->` |
| Testimonials  | `<!-- screenshot placeholder -->` |
| CTA           | `<!-- screenshot placeholder -->` |
| Footer        | `<!-- screenshot placeholder -->` |
| Mobile Menu   | `<!-- screenshot placeholder -->` |

---

## Features

| Feature | Description |
| --- | --- |
| **Cinematic Preloader** | Full-screen animated preloader with logo reveal, progress bar, floating balls, and a dramatic zoom-out transition before the main content appears. |
| **GSAP Smooth Scrolling** | Leverages GSAP `ScrollSmoother` for buttery-smooth scroll behavior across the entire page, including touch support. |
| **Scroll-Triggered Animations** | Every section (hero, services, features, pricing, testimonials, CTA, footer) has choreographed GSAP `ScrollTrigger` entrance animations with stagger, scale, opacity, and positional effects. |
| **Animated Header** | Fixed glassmorphism navigation bar with a clip-path reveal animation and staggered nav-link entrance. |
| **Hero Section** | Gradient text headline with animated label, CTA buttons, radio-wave background, floating decorative balls with infinite yoyo motion, and four info cards that animate from center outward. |
| **Services Section** | Three masked service cards with a slide-in scroll animation and custom SVG mask borders. |
| **Features Section** | Three expandable feature cards with color-coded arrow SVGs (blue/violet/green), GSAP `SplitText` title animations, checklist items, and feature images. |
| **Pricing Section** | Three-tier pricing cards (Basic / Premium / Enterprise) with scale-in scroll animations and a rotating lined-ball decorative element. |
| **Testimonials Carousel** | Swiper.js-powered testimonial slider with looping, dynamic bullet pagination, navigation arrows, and separate mobile/desktop pagination layouts. |
| **Call-to-Action (CTA)** | Full-width CTA section with radio-wave background, background lights, underlined branding word, and scroll-triggered entrance. |
| **Footer** | Logo, navigation links, social media icons (Facebook, LinkedIn, Instagram, Twitter), and copyright — all with GSAP `SplitText` word-reveal and stagger animations. |
| **Mobile Side Menu** | Slide-in side drawer (portaled to `document.body`) with backdrop overlay, body scroll lock, navigation links, and a full-width CTA button. |
| **Responsive Design** | Fully responsive from 360px mobile up to large desktop, with `react-responsive` media queries controlling animation behavior per breakpoint. |
| **Custom Typography** | Custom Aeonik font family (5 weights) loaded via `@font-face`, plus Google Fonts: Sora, Inter, and Source Code Pro. |
| **Gradient Effects** | Reusable gradient text utilities, gradient stroke borders with CSS mask compositing, and gradient CTA buttons. |
| **Relative Date Display** | Testimonial dates are displayed as human-readable relative times ("2 weeks ago", "3 months ago") via a custom utility. |

---

## Tech Stack

| Category | Technology | Purpose |
| --- | --- | --- |
| **Framework** | [Next.js 15.5.9](https://nextjs.org/) | React framework with App Router, server components, Turbopack |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Static type safety across the entire codebase |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS with `@theme` directive for design tokens |
| **Animation** | [GSAP 3.13](https://gsap.com/) | ScrollTrigger, ScrollSmoother, SplitText, ScrollToPlugin |
| **GSAP React** | [@gsap/react 2.1](https://www.npmjs.com/package/@gsap/react) | `useGSAP` hook for React lifecycle-safe GSAP animations |
| **Carousel** | [Swiper 12](https://swiperjs.com/) | Testimonials slider with loop, pagination, and navigation |
| **Icons** | [React Icons 5.5](https://react-icons.github.io/react-icons/) | `Fa`, `IoIos`, `Ai` icon families (FontAwesome, Ionicons, Ant Design) |
| **Responsive** | [react-responsive 10](https://www.npmjs.com/package/react-responsive) | `useMediaQuery` hook for breakpoint-aware rendering and animation |
| **Smooth Scroll** | [react-scroll 1.9](https://www.npmjs.com/package/react-scroll) | `<Link>` component for smooth in-page anchor navigation |
| **Class Utilities** | [clsx 2.1](https://www.npmjs.com/package/clsx) + [tailwind-merge 3.3](https://www.npmjs.com/package/tailwind-merge) | Conditional and conflict-free Tailwind class merging via `cn()` |
| **Linting** | [ESLint 9](https://eslint.org/) + [eslint-config-next](https://www.npmjs.com/package/eslint-config-next) | Code quality with Next.js core web vitals rules |
| **Formatting** | [Prettier 3.6](https://prettier.io/) + [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss) | Consistent code formatting with Tailwind class sorting |
| **PostCSS** | [@tailwindcss/postcss](https://www.npmjs.com/package/@tailwindcss/postcss) | Tailwind CSS v4 PostCSS integration |
| **Images** | [next/image](https://nextjs.org/docs/app/api-reference/components/image) | Optimized image loading with `fill`, `priority`, and sizing props |
| **Fonts** | [next/font/google](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) + Custom `@font-face` | Sora, Inter, Source Code Pro (Google) and Aeonik (self-hosted) |

---

## Project Architecture

```
IdentityHub-main/
├── app/                    # Next.js App Router directory
│   ├── globals.css         # Global styles, @font-face, @theme tokens, utilities
│   ├── icon.svg            # App favicon (SVG with gradient)
│   ├── layout.tsx          # Root layout: fonts, metadata, Preloader, Header, Footer
│   └── page.tsx            # Home page: assembles all sections
│
├── sections/               # Full-page section components (page-level blocks)
│   ├── Header.tsx          # Fixed navigation bar with GSAP reveal
│   ├── HeroSection.tsx     # Hero banner with orchestrated timeline
│   ├── Services.tsx        # Services cards grid
│   ├── Features.tsx        # Feature cards with arrow indicators
│   ├── Pricing.tsx         # Pricing tiers grid
│   ├── Testimonials.tsx    # Testimonials section wrapper
│   └── Footer.tsx          # Footer with links and social icons
│
├── components/             # Reusable and composable UI components
│   ├── Arrow.tsx           # Color-switching arrow (blue/violet/green)
│   ├── BackgroundLights.tsx# Decorative blurred color lights
│   ├── BlueArrow.tsx       # Blue SVG arrow with glow filter
│   ├── Button.tsx          # Gradient-stroke CTA button
│   ├── CTA.tsx             # Call-to-action section
│   ├── ControlPagination.tsx       # Desktop Swiper navigation + pagination
│   ├── CopywriteAndSocialLinks.tsx # Footer copyright + social links
│   ├── FeatureCard.tsx     # Individual feature card with SplitText animation
│   ├── FeaturesList.tsx    # Checklist items inside feature card
│   ├── FloatingBalls.tsx   # Decorative animated floating SVG balls
│   ├── GreenArrow.tsx      # Green SVG arrow with glow filter
│   ├── GSAPClientWrapper.tsx # GSAP plugin registration + ScrollSmoother
│   ├── HeroContent.tsx     # Hero headline, subtitle, and CTA buttons
│   ├── HeroInfoCard.tsx    # Floating info card (one-time passcode, phone, etc.)
│   ├── HeroInfoCards.tsx   # Renders all 4 hero info cards
│   ├── HeroVisual.tsx      # Hero visual: image, radio waves, balls, info cards
│   ├── Label.tsx           # Pill-shaped section label with gradient border
│   ├── Logo.tsx            # Logo image + brand name with scroll-to-top
│   ├── LogoAndFooterLinks.tsx  # Footer logo + navigation links
│   ├── MobileControlPagination.tsx # Mobile-only Swiper pagination
│   ├── Preloader.tsx       # Full-screen cinematic preloader animation
│   ├── PricingCard.tsx     # Individual pricing tier card
│   ├── SectionHeader.tsx   # Reusable section label + title + subtitle
│   ├── ServiceCard.tsx     # Individual service card with masked border
│   ├── SideMobileMenu.tsx  # Slide-in mobile navigation drawer (portal)
│   ├── TestimonialCard.tsx # Individual testimonial card
│   ├── TestimonialsSwiper.tsx # Swiper carousel for testimonials
│   ├── UnderlinedWord.tsx  # Word with decorative SVG underline
│   └── VioletArrow.tsx     # Violet SVG arrow with glow filter
│
├── constants/              # Static data and configuration
│   └── index.ts            # Nav links, hero cards, services, features,
│                           # pricing plans, testimonials, footer links
│
├── lib/                    # Shared utilities
│   └── utils.ts            # cn() class helper, calcDaysAgo() date utility
│
├── public/                 # Static assets
│   ├── fonts/              # Aeonik font files (Light, Regular, Medium, Bold, Black)
│   ├── *.svg               # Icons, logos, decorative elements, masks
│   ├── *.png               # Feature images, background, avatars, arrow lines
│   └── background.png      # Full-page background texture
│
├── eslint.config.mjs       # ESLint flat config with Next.js rules
├── postcss.config.mjs      # PostCSS with @tailwindcss/postcss
├── tsconfig.json           # TypeScript configuration with path aliases
├── next.config.ts          # Next.js configuration (default)
├── package.json            # Dependencies and scripts
└── .gitignore              # Git ignore rules
```

### Why This Structure?

| Directory | Rationale |
| --- | --- |
| `sections/` | Separates full-page layout sections from reusable components. Each section maps to a distinct visual block on the landing page. |
| `components/` | Contains reusable, composable UI pieces — from atomic elements (Button, Label) to composite blocks (FeatureCard, TestimonialsSwiper). |
| `constants/` | Centralizes all static data (navigation, pricing, testimonials) so content updates require no component changes. |
| `lib/` | Houses framework-agnostic utility functions reused across the codebase. |
| `public/fonts/` | Self-hosts the custom Aeonik font family, avoiding external CDN dependencies. |

---

## Application Flow

### 1. Initial Page Load

```
User opens page
  → RootLayout mounts
    → Preloader appears (fixed, z-[99999], opacity: 0 → 1)
    → Logo scales in with bounce easing
    → Brand name chars animate in via SplitText
    → Progress bar fills to 100%
    → onComplete: floating balls & lights fade, preloader zooms out (scale: 50)
    → Preloader hidden (display: none)
    → Header clip-path reveals (polygon animation)
    → Nav links stagger in with scale + translate
    → GSAPClientWrapper initializes ScrollSmoother
    → Main content fades in (opacity: 0 → 100)
```

### 2. Scrolling Through Sections

```
User scrolls down
  → ScrollSmoother provides smooth inertia-based scrolling
  → Each section triggers entrance animations via ScrollTrigger:

    Services   → Cards slide up from +450px with stagger
    Features   → Cards fade in, SplitText titles animate, arrow components reveal,
                 checklist items slide in, feature images scale from corner
    Pricing    → Cards scale up from 0 with bounce easing, lined-ball rotates in
    Testimonials → Swiper container scales in, nav buttons animate from sides
    CTA        → Text slides up, radio waves scale in, background lights fade in,
                 button bounces in
    Footer     → Logo slides in, links animate, copyright text word-reveals,
                 social icons bounce in

  → On mobile: animations play once and stay (toggleActions: "play play play play")
  → On desktop: animations can reverse when scrolling back up
```

### 3. In-Page Navigation

```
User clicks a nav link (e.g., "Pricing")
  → react-scroll <Link> triggers smooth scroll to #pricing
  → 600ms duration, -100px offset (accounts for fixed header)
  → Works from both Header nav and Footer links
  → Logo click scrolls to #top
```

### 4. Mobile Menu Flow

```
User taps hamburger icon (visible < 768px)
  → SideMobileMenu state: open = true
  → React portal renders overlay + aside to document.body
  → Backdrop fades in (opacity transition, 300ms)
  → Aside slides in from right (translateX: 100% → 0)
  → Body scroll is locked (overflow: hidden)
  → User taps a link → smooth scroll + menu closes
  → User taps backdrop OR ✕ → menu closes
  → Body scroll restored on unmount/close
```

### 5. Testimonials Carousel

```
User interacts with testimonial slider
  → Swiper initialized with loop, 1 slide per view, 20px gap
  → Starts at middle slide (Math.floor(total / 2))
  → Desktop: arrow buttons on sides, bullet pagination below
  → Mobile (< 640px): pagination + arrows below the card
  → Dynamic bullets show up to 5, remaining are scaled-down
  → Active bullet gets a gradient ring (CSS pseudo-element)
  → Dates display as relative time via calcDaysAgo()
```

---

## Feature Breakdown

### Preloader

| Aspect | Details |
| --- | --- |
| **Purpose** | Provides a branded loading experience while the page initializes |
| **Files** | `components/Preloader.tsx`, `components/BackgroundLights.tsx`, `components/FloatingBalls.tsx` |
| **Flow** | Opacity reveal → floating balls entrance → logo scale bounce → title SplitText chars → progress bar fill → lights/balls fade → zoom-out to (scale:50, x:5000, y:1250) → display:none |
| **Key Details** | Fixed overlay at `z-[99999]`, uses three separate GSAP timelines (core, infinite floating, end sequence), `eventCallback("onComplete")` chains the exit animation |

### Header & Navigation

| Aspect | Details |
| --- | --- |
| **Purpose** | Fixed navigation with glassmorphism effect and smooth anchor scrolling |
| **Files** | `sections/Header.tsx`, `components/Logo.tsx`, `components/Button.tsx`, `components/SideMobileMenu.tsx`, `constants/index.ts` |
| **Flow** | Clip-path reveal after 3.2s delay → nav items stagger in → links scroll to sections via react-scroll |
| **Key Details** | `backdrop-blur-[8px]`, semi-transparent bg, gradient-stroke border, `z-10000`, hidden on mobile (replaced by SideMobileMenu) |
| **Nav Links** | Services → `#services`, Feature → `#feature`, Pricing → `#pricing`, Partners → `#testimonials`, About us → `#CTA` |

### Hero Section

| Aspect | Details |
| --- | --- |
| **Purpose** | First impression — communicates the product's value proposition with visual impact |
| **Files** | `sections/HeroSection.tsx`, `components/HeroContent.tsx`, `components/HeroVisual.tsx`, `components/HeroInfoCards.tsx`, `components/HeroInfoCard.tsx`, `components/BackgroundLights.tsx`, `components/FloatingBalls.tsx`, `components/UnderlinedWord.tsx`, `components/Label.tsx`, `components/Button.tsx` |
| **Flow** | Label fades in → title text slides up with stagger → CTA buttons slide in from opposite sides → radio waves expand → hero image rises from below → info cards fly from center to corners → background lights brighten → floating balls bounce in and loop infinitely |
| **Info Cards** | 4 cards positioned absolutely — One-time passcode, Phone numbers, Email address, Credit card — with responsive positioning (mobile halves/doubles top/bottom percentages) |
| **Edge Cases** | `isMounted` state prevents hydration mismatch from `useMediaQuery`, card positions adjust for mobile via conditional math |

### Services Section

| Aspect | Details |
| --- | --- |
| **Purpose** | Showcases three core service offerings |
| **Files** | `sections/Services.tsx`, `components/ServiceCard.tsx`, `components/SectionHeader.tsx`, `constants/index.ts` |
| **Services** | Personal Information Removal, Cloaking Alias Profiles, Virtual Identities Security |
| **Flow** | SectionHeader animates (label scale, title slide, subtitle slide) → cards slide up from +450px with 0.2s stagger |
| **Key Details** | Cards use custom SVG mask border (`/mask-border.svg`), decorative purple light blur behind each card, gradient text in header |

### Features Section

| Aspect | Details |
| --- | --- |
| **Purpose** | Detailed breakdown of product capabilities with visual evidence |
| **Files** | `sections/Features.tsx`, `components/FeatureCard.tsx`, `components/FeaturesList.tsx`, `components/Arrow.tsx`, `components/BlueArrow.tsx`, `components/VioletArrow.tsx`, `components/GreenArrow.tsx`, `constants/index.ts` |
| **Features** | Protect Personal Information (blue), Detailed Reporting (violet), Secure All Data (green) |
| **Flow** | Card fades in → arrow circle scales + rotates → title chars animate via SplitText → arrow line grows (scaleY) → checklist items slide in from right → feature image scales up from corner |
| **Key Details** | Each card has a color theme (blue/violet/green) that affects the arrow SVG, checkmark icons, and down-arrow line decorations. Arrow component uses a switch pattern to select the right SVG. |

### Pricing Section

| Aspect | Details |
| --- | --- |
| **Purpose** | Presents pricing tiers to convert visitors |
| **Files** | `sections/Pricing.tsx`, `components/PricingCard.tsx`, `components/BackgroundLights.tsx`, `components/SectionHeader.tsx`, `constants/index.ts` |
| **Plans** | Basic ($0), Premium ($9.99), Enterprise ($20.99) |
| **Flow** | Lined-ball rotates in from off-screen right → cards scale up from 0 with bounce easing and 0.2s stagger |
| **Key Details** | Premium plan gets a gradient background button and different padding. All cards use gradient-stroke borders. Features list with violet checkmarks. |

### Testimonials Section

| Aspect | Details |
| --- | --- |
| **Purpose** | Social proof through user testimonials |
| **Files** | `sections/Testimonials.tsx`, `components/TestimonialsSwiper.tsx`, `components/TestimonialCard.tsx`, `components/ControlPagination.tsx`, `components/MobileControlPagination.tsx`, `constants/index.ts`, `lib/utils.ts` |
| **Data** | 10 testimonials with id, name, role, avatar, text, and date |
| **Flow** | Swiper initializes on mount → loops infinitely → starts at middle slide → desktop uses inline pagination + side arrows → mobile uses below-card pagination |
| **Key Details** | Swiper instance is properly destroyed on unmount. Separate pagination containers for mobile (`< 640px`) and desktop. Testimonial text is clamped to 4-5 lines. Active bullet gets a custom gradient ring via CSS `::before`. |

### Call-to-Action (CTA)

| Aspect | Details |
| --- | --- |
| **Purpose** | Final conversion push before the footer |
| **Files** | `components/CTA.tsx`, `components/BackgroundLights.tsx`, `components/UnderlinedWord.tsx`, `components/Button.tsx` |
| **Flow** | Text paragraphs slide up with stagger → radio waves scale from 0 → background lights fade in → CTA button bounces in |
| **Key Details** | Uses `UnderlinedWord` for "IdentityHub" with `size="smaller"` variant. Mobile: animations play once; Desktop: animations reverse on scroll back. |

### Footer

| Aspect | Details |
| --- | --- |
| **Purpose** | Site navigation, branding, social links, and copyright |
| **Files** | `sections/Footer.tsx`, `components/LogoAndFooterLinks.tsx`, `components/CopywriteAndSocialLinks.tsx`, `components/Logo.tsx`, `constants/index.ts` |
| **Flow** | Footer links slide in from bottom-right with stagger → logo flies in from bottom-left → copyright text word-reveals via SplitText → social icons bounce in |
| **Footer Links** | Feature, Services, Pricing, How To Use (scrolls to top) |
| **Social Links** | Facebook, LinkedIn, Instagram, Twitter — all open in new tabs |

---

## Routing

This is a **single-page application** with one route:

| Route | File | Description |
| --- | --- | --- |
| `/` | `app/page.tsx` | Home page — the entire landing page |

### In-Page Navigation (Anchor Scroll)

All navigation is handled via `react-scroll` `<Link>` components that smooth-scroll to section IDs:

| Target ID | Section | Triggered From |
| --- | --- | --- |
| `#top` | Page top | Logo click, "How To Use" footer link |
| `#services` | Services | Header nav, Footer nav |
| `#feature` | Features | Header nav, Footer nav |
| `#pricing` | Pricing | Header nav, Footer nav |
| `#testimonials` | Testimonials | Header nav ("Partners") |
| `#CTA` | Call-to-Action | Header nav ("About us") |

All scroll links use `smooth={true}`, `duration={600}`, and `offset={-100}` (to account for the fixed header).

---

## State Management

This application is a **stateless landing page**. There is no global state management library, no database, and no API calls.

### Local Component State

| Component | State | Purpose |
| --- | --- | --- |
| `SideMobileMenu` | `open: boolean` | Controls mobile menu visibility |
| `SideMobileMenu` | `mounted: boolean` | Prevents SSR portal hydration mismatch |
| `HeroInfoCard` | `isMounted: boolean` | Prevents hydration mismatch from `useMediaQuery` |

### Derived/Computed State

| Source | Usage |
| --- | --- |
| `useMediaQuery({ query: "(max-width: 768px)" })` | Controls animation `toggleActions` (play-once on mobile vs. reverse on desktop) |
| `useMediaQuery({ query: "(max-width: 640px)" })` | Switches Swiper pagination container between mobile and desktop |

### Side Effects

| Effect | Component | Purpose |
| --- | --- | --- |
| Body scroll lock | `SideMobileMenu` | Sets `document.body.style.overflow = "hidden"` when menu is open |
| Swiper initialization | `TestimonialsSwiper` | Creates and destroys Swiper instance via `useEffect` |
| Window resize listener | `UnderlinedWord` | Recalculates underline position on window resize |
| GSAP animations | Multiple | `useGSAP` manages timeline creation and cleanup |

---

## Reusable Components

| Component | Purpose | Used In |
| --- | --- | --- |
| `Button` | Gradient-stroke CTA button with inner glow shadow | Header, HeroContent, PricingCard, CTA, SideMobileMenu |
| `Label` | Pill-shaped section label with gradient border and purple glow | HeroContent, SectionHeader |
| `SectionHeader` | Consistent section header with label, title, and optional subtitle | Services, Features, Pricing, Testimonials |
| `BackgroundLights` | Decorative blurred multi-color light effect | HeroVisual, Features, Pricing, CTA, Preloader, SideMobileMenu |
| `FloatingBalls` | Animated SVG balls (orange, green, violet) with absolute positioning | HeroVisual, Preloader |
| `Logo` | Brand logo + "IdentityHub" text with scroll-to-top behavior | Header, Footer, SideMobileMenu |
| `UnderlinedWord` | Word with positioned SVG underline decoration | HeroContent (`size="bigger"`), CTA (`size="smaller"`) |
| `Arrow` | Color-dispatching arrow component (blue/violet/green SVGs) | FeatureCard |

---

## Utilities

### `cn(...inputs: ClassValue[]): string`

**File:** `lib/utils.ts`

Combines `clsx` (conditional class construction) with `tailwind-merge` (resolves Tailwind class conflicts). Used throughout the codebase for dynamic class composition.

```ts
cn("px-4 py-2", isPremium && "bg-gradient-to-r", className)
```

### `calcDaysAgo(dateString: string): string`

**File:** `lib/utils.ts`

Converts a date string into a human-readable relative time string.

| Input Age | Output |
| --- | --- |
| < 1 day | `"Today"` |
| 1 day | `"1 day ago"` |
| 2–6 days | `"X days ago"` |
| 1–3 weeks | `"X week(s) ago"` |
| 1–11 months | `"X month(s) ago"` |
| 12+ months | `"X year(s) ago"` |

---

## Performance Optimizations

| Optimization | Implementation |
| --- | --- |
| **Turbopack** | `next dev --turbopack` and `next build --turbopack` for faster development and builds |
| **Font Display Swap** | All fonts use `display: "swap"` or `font-display: swap` to prevent FOIT |
| **Image Optimization** | `next/image` with `fill` layout for responsive images and `priority` on the hero image |
| **Swiper Cleanup** | Swiper instance is properly destroyed on component unmount (`swiper.destroy(true, true)`) |
| **GSAP Cleanup** | `useGSAP` automatically cleans up GSAP timelines and ScrollTrigger instances |
| **Portal-based Menu** | Mobile menu renders via `createPortal` to avoid layout shifts and z-index issues |
| **CSS `mix-blend-mode`** | Background lights use `mix-blend-color-dodge` for GPU-accelerated visual effects |
| **Conditional Animations** | `useMediaQuery` prevents complex reverse animations on mobile devices |
| **Hidden Scrollbar** | `::-webkit-scrollbar { display: none }` with GSAP ScrollSmoother replacing native scroll |
| **SVG Components** | Arrow SVGs are inline React components (not external files) for zero network requests |
| **Responsive Loading** | Hero info card text content is hidden on mobile (`hidden sm:block`) to reduce visual clutter |

---

## Security

This is a **static landing page** with no backend, authentication, database, or user-submitted forms. Security considerations are minimal:

| Area | Status |
| --- | --- |
| Authentication | Not applicable — no user accounts |
| API Routes | None implemented |
| Form Submission | No forms — CTA buttons are non-functional placeholders |
| External Links | Social media links open in `target="_blank"` (consider adding `rel="noopener noreferrer"`) |
| Dependencies | Standard, well-maintained packages — no known vulnerable dependencies |
| Content Security | All content is static and hardcoded in `constants/index.ts` |

---

## Error Handling

| Area | Approach |
| --- | --- |
| **Null Guards** | Optional chaining (`?.`) used when mapping over constant arrays (`ServicesCardsData?.map(...)`) |
| **Image Fallbacks** | `iconSrc \|\| ""` and `avatar \|\| "/userAvatar.png"` prevent broken images |
| **Image Fallbacks (Features)** | `imageUrl \|\| "/feature-card-image1.png"` provides a default feature image |
| **SSR Hydration** | `isMounted` state pattern in `HeroInfoCard` and `SideMobileMenu` prevents hydration mismatches from `useMediaQuery` and `createPortal` |
| **Swiper SSR Guard** | `if (typeof window === "undefined") return` prevents Swiper initialization during SSR |
| **Resize Listener Cleanup** | `UnderlinedWord` removes its `resize` event listener on unmount to prevent memory leaks |
| **Body Scroll Restoration** | `SideMobileMenu` restores `document.body.style.overflow` in the `useEffect` cleanup |

---

## Custom CSS

### Design Tokens (`@theme`)

```css
--color-darkBase: #0e0c15       /* Deep dark purple-black background */
--color-softBlue: #cad1e9       /* Default text color */
--color-pinkMagenta: #f33cc0    /* Gradient accent (pink) */
--color-electricBlue: #4349ff   /* Gradient accent (blue) */
--font-Aeonik: "Aeonik"        /* Custom font family */
```

### Custom Utilities

| Class | Effect |
| --- | --- |
| `.text-gradient-pink-blue-verticle` | Vertical gradient text (pink → blue) with `--grad-pos` CSS variable |
| `.text-gradient-blue-pink-horizontal` | Horizontal gradient text (blue → pink) |
| `.gradient-stroke` | Pseudo-element gradient border using CSS mask compositing |
| `.masked-image` | SVG mask-based custom card shape |
| `.swiper-pagination-bullet` | Custom Swiper bullet styling (white, 5px) |
| `.swiper-pagination-bullet-active::before` | Active bullet gradient ring indicator |

---

## Future Improvements

Based on the current architecture, these are realistic enhancements:

| Improvement | Rationale |
| --- | --- |
| **Add `rel="noopener noreferrer"` to external links** | Prevents `window.opener` security risk on social media links |
| **Implement actual routing for sub-pages** | The architecture supports Next.js App Router — add `/about`, `/contact`, etc. |
| **Connect CTA buttons to a signup form or external service** | Buttons currently have no `onClick` handlers |
| **Add loading skeleton or Suspense boundaries** | Improve perceived performance during initial load |
| **Extract animation config into constants** | GSAP timeline durations, delays, and easing values are hardcoded — centralizing would improve maintainability |
| **Add accessibility improvements** | ARIA labels on interactive elements, keyboard navigation for the mobile menu, focus trapping in the side drawer |
| **Implement dark/light mode toggle** | The design system already uses CSS custom properties, making theming straightforward |
| **Add analytics integration** | Track CTA clicks, section scroll depth, and testimonial engagement |
| **Optimize image formats** | Convert PNG feature images to WebP/AVIF for smaller file sizes |
| **Add contact/feedback form** | Extend the CTA section with an actual form (e.g., using React Hook Form + Zod) |
| **Add SEO meta tags per section** | Implement Open Graph and Twitter Card tags for social sharing |
| **Reduce large SVG asset sizes** | `herosection-image.svg` is ~19MB — consider rasterizing or simplifying |

---

## Development Setup

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Aser-Essa/IdentityHub.git
cd IdentityHub

# Install dependencies
npm install
```

### Environment Variables

This project has **no environment variables**. All configuration is hardcoded or in config files.

### Running Locally

```bash
# Start development server (with Turbopack)
npm run dev
```

The app will be available at `http://localhost:3000`.

### Building for Production

```bash
# Create production build (with Turbopack)
npm run build

# Start production server
npm start
```

### Linting

```bash
npm run lint
```

---

## Folder Tree

```
IdentityHub/
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
│
├── app/
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Arrow.tsx
│   ├── BackgroundLights.tsx
│   ├── BlueArrow.tsx
│   ├── Button.tsx
│   ├── ControlPagination.tsx
│   ├── CopywriteAndSocialLinks.tsx
│   ├── CTA.tsx
│   ├── FeatureCard.tsx
│   ├── FeaturesList.tsx
│   ├── FloatingBalls.tsx
│   ├── GreenArrow.tsx
│   ├── GSAPClientWrapper.tsx
│   ├── HeroContent.tsx
│   ├── HeroInfoCard.tsx
│   ├── HeroInfoCards.tsx
│   ├── HeroVisual.tsx
│   ├── Label.tsx
│   ├── Logo.tsx
│   ├── LogoAndFooterLinks.tsx
│   ├── MobileControlPagination.tsx
│   ├── Preloader.tsx
│   ├── PricingCard.tsx
│   ├── SectionHeader.tsx
│   ├── ServiceCard.tsx
│   ├── SideMobileMenu.tsx
│   ├── TestimonialCard.tsx
│   ├── TestimonialsSwiper.tsx
│   ├── UnderlinedWord.tsx
│   └── VioletArrow.tsx
│
├── constants/
│   └── index.ts
│
├── lib/
│   └── utils.ts
│
└── public/
    ├── fonts/
    │   ├── Aeonik-Black.ttf
    │   ├── Aeonik-Bold.otf
    │   ├── Aeonik-Light.otf
    │   ├── Aeonik-Medium.otf
    │   └── Aeonik-Regular.otf
    ├── background.png
    ├── arrow-right.svg
    ├── blue-checkmark-circle.svg
    ├── blue-down-arrow-line.png
    ├── feature-card-image1.png
    ├── feature-card-image2.png
    ├── feature-card-image3.png
    ├── green-checkmark-circle.svg
    ├── green-down-arrow-line.png
    ├── greenBall.svg
    ├── Group 2.svg
    ├── hero-info-card-icon-1.svg
    ├── hero-info-card-icon-2.svg
    ├── hero-info-card-icon-3.svg
    ├── hero-info-card-icon-4.svg
    ├── herosection-image.png
    ├── herosection-image.svg
    ├── img.svg
    ├── lined-ball.svg
    ├── logo.svg
    ├── mask-border.svg
    ├── mask-image.svg
    ├── orangeBall.svg
    ├── radio-waves.svg
    ├── radio-waves1.png
    ├── service-card-1.svg
    ├── service-card-2.svg
    ├── service-card-3.svg
    ├── underline-word.svg
    ├── userAvatar.png
    ├── violet-checkmark-circle.svg
    ├── violet-down-arrow-line.png
    └── violetBall.svg
```

---

## Dependencies

### Production

| Package | Version | Purpose |
| --- | --- | --- |
| `next` | 15.5.9 | React framework with App Router, server components, and image optimization |
| `react` | 19.1.0 | UI library |
| `react-dom` | 19.1.0 | React DOM renderer |
| `gsap` | ^3.13.0 | Professional animation library — ScrollTrigger, ScrollSmoother, SplitText |
| `@gsap/react` | ^2.1.2 | React integration for GSAP with the `useGSAP` hook |
| `swiper` | ^12.0.3 | Touch-enabled carousel/slider for the testimonials section |
| `react-icons` | ^5.5.0 | Icon library providing FontAwesome, Ionicons, and Ant Design icons |
| `react-responsive` | ^10.0.1 | `useMediaQuery` hook for responsive breakpoint detection |
| `react-scroll` | ^1.9.3 | Smooth in-page anchor scrolling via `<Link>` component |
| `clsx` | ^2.1.1 | Utility for constructing conditional className strings |
| `tailwind-merge` | ^3.3.1 | Merges Tailwind CSS classes without style conflicts |

### Development

| Package | Version | Purpose |
| --- | --- | --- |
| `typescript` | ^5 | Static type checking |
| `tailwindcss` | ^4 | Utility-first CSS framework (v4 with `@theme` directive) |
| `@tailwindcss/postcss` | ^4 | PostCSS plugin for Tailwind CSS v4 |
| `eslint` | ^9 | JavaScript/TypeScript linting |
| `eslint-config-next` | 15.5.6 | Next.js-specific ESLint rules including core web vitals |
| `@eslint/eslintrc` | ^3 | ESLint flat config compatibility layer |
| `prettier` | ^3.6.2 | Opinionated code formatter |
| `prettier-plugin-tailwindcss` | ^0.7.1 | Automatic Tailwind class sorting in Prettier |
| `@types/node` | ^20 | TypeScript type definitions for Node.js |
| `@types/react` | ^19 | TypeScript type definitions for React |
| `@types/react-dom` | ^19 | TypeScript type definitions for React DOM |
| `@types/react-scroll` | ^1.8.10 | TypeScript type definitions for react-scroll |

---

## Conclusion

**IdentityHub** is a high-fidelity, animation-rich landing page for a digital identity and privacy protection platform. The application demonstrates advanced front-end engineering through:

- **Cinematic Motion Design** — A multi-phase preloader, scroll-triggered section reveals, infinite floating animations, and GSAP `SplitText` character-level text effects create a premium, app-like experience.
- **Modern React Architecture** — Built on Next.js 15 App Router with TypeScript, the codebase cleanly separates page-level sections from reusable components, with all static content centralized in constants.
- **GSAP ScrollSmoother Integration** — Provides native-feeling smooth scrolling with inertia, replacing the browser's default scroll behavior.
- **Responsive-First Design** — Every component adapts from 360px mobile to large desktop, with animation behavior intelligently adjusted per breakpoint using `react-responsive`.
- **Production-Ready Tooling** — Tailwind CSS v4, Turbopack, Prettier with Tailwind plugin, ESLint with Next.js rules, and proper TypeScript configuration.

The project is structured for easy content updates (modify `constants/index.ts`) and straightforward extension into a multi-page application using Next.js App Router.

---

<p align="center">
  Built by <a href="https://www.linkedin.com/in/asser-essa-a03407341/">Asser Essa</a>
</p>
