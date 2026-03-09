# Zahrawi Store — Ultra-Premium Luxury Watch E-Commerce

**Tagline:** *"Unbox Life With Zahrawi"*

Zahrawi Store is a production-ready Next.js luxury watch storefront concept focused exclusively on premium wrist watches. The design language combines Swiss-watch prestige with Apple-level minimal polish.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion animations
- shadcn/ui-styled components
- `next/image` optimized media
- Lucide icons

## Features

- Cinematic dark hero section with gold/silver luxury accents
- Sticky navigation with premium icon actions
- Featured watch product grid with ratings, hover effects, and quick view modal
- Animated watch collections (Classic, Sport, Luxury, Limited Edition)
- Premium showcase section with slow rotation animation
- Elegant customer testimonials
- Newsletter signup section: **Join the Zahrawi Elite**
- Refined footer with social links and quick navigation
- SEO metadata, responsive layout, and accessibility-focused UI primitives

## Project Structure

```txt
/app
  layout.tsx
  page.tsx
/components
  Navbar.tsx
  Hero.tsx
  FeaturedWatches.tsx
  Collections.tsx
  WatchShowcase.tsx
  Testimonials.tsx
  Newsletter.tsx
  Footer.tsx
  ProductCard.tsx
  /ui
    button.tsx
    input.tsx
    dialog.tsx
/data
  watches.ts
/lib
  utils.ts
```

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm run start
```

## Brand & Design Notes

- Primary palette: `#0B0B0B`, `#1A1A1A`, `#C0C0C0`, `#D4AF37`
- Typography: Playfair Display (headings), Inter (body)
- Visual style: luxury minimalism, glassmorphism cards, elegant spacing, cinematic composition
