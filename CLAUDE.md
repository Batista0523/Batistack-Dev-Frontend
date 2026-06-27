# Batistack Next.js Migration

## Project
- Company: Batista AI Infrastructure and Agent Services (brand: Batistack)
- Domain: batistack.com
- Stack: Next.js 14 App Router + TypeScript (migrated from Vite + React)
- Hosting: Netlify with @netlify/plugin-nextjs

## Migration Status
- Phase 0: COMPLETE — audit done, useTrafficTracker removed
- Phase 1: COMPLETE — migration plan
- Phase 2: COMPLETE — Next.js 14 App Router migration (46 pages, 40 sitemap URLs, 14 industry pages)
- Phase 3: PENDING — Netlify preview deploy + Phase 4 verification
- Phase 4: PENDING
- Phase 5: PENDING
- Phase 6: PENDING

## Phase 2 Build Stats
- Pages: 46 static/SSG (8 static + 7 agents + 8 blog posts + 14 industries + 3 case studies + system)
- Sitemap: 40 URLs (src/app/sitemap.ts — dynamic, auto-updated)
- Industries: 14 (hvac, plumbing, electrical, real-estate, gyms-fitness, legal,
  commercial-cleaning, insurance, pool-repair, general-contractor, landscaping,
  roofing, pest-control, auto-repair)
- OG image: public/og-image.png (1200×630, new brand)

## Hard Rules
- NEVER skip a stop gate
- NEVER touch main branch
- NEVER delete files in bulk without showing diff first
- NEVER proceed without explicit "approved phase X" from user
- If build breaks, STOP and report exact error before fixing
- If anything is ambiguous, ASK before guessing
- Atomic commits per page with clear messages

## Critical Files
- src/ga.ts — GA4 with hostname guard (batistack.com only)
- src/components/NavBar.tsx — 2 CTAs wired to fireConversionEvent
- src/components/ContactFormClient.tsx — form + fireConversionEvent on submit
- src/components/UILinks.tsx — PrimaryLink/GhostLink/CTABanner fire fireConversionEvent
- src/components/HomeLeadCapture.tsx — email capture fires fireConversionEvent
- src/components/PricingCard.tsx — CTA fires fireConversionEvent
- src/components/BlogPostCTA.tsx — bottom CTA fires fireConversionEvent
- src/app/layout.tsx — root layout: NavBar, Footer, GA tracker, Bootstrap CSS
- src/app/sitemap.ts — dynamic sitemap (40 URLs, auto-includes new industries)
- src/data/industries.ts — 14 industries; add new slugs here for auto-routing

## Phase 2 SSR Fixes Applied
- R1: ga.ts hostname guard preserved and tested
- R4: react-helmet-async replaced with generateMetadata in all page.tsx files
- R5: react-router-dom replaced with next/navigation throughout
- R9: VITE_* vars renamed to NEXT_PUBLIC_* in all source files

## Env Vars to Rename (Code + Netlify Dashboard)
- VITE_GA_MEASUREMENT_ID → NEXT_PUBLIC_GA_MEASUREMENT_ID
- VITE_EMAILJS_SERVICE_ID → NEXT_PUBLIC_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TEMPLATE_ID → NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
- VITE_EMAILJS_PUBLIC_KEY → NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

## Routes
/ → Home
/about → About
/services → Services
/contact → ContactForm
/policy → PrivacyPolicy
/blog → Blog
/blog/:slug → BlogPost (dynamic)
/ai-agents → AIAgents
/agents/:slug → AgentPage (dynamic)
/how-it-works → HowItWorks
/industries → Industries
/industries/:slug → IndustryPage (dynamic)
/case-studies/:id → CaseStudyPage (dynamic)
/speedPage → redirect to /
/digital-presence → redirect to /services

## What Was Removed
- src/hook/useTrafficTracker.ts — DELETED (GA4 replaces it)
- Removed from: Blog.tsx, BlogPost.tsx, ContactForm.tsx, 
  ApplicationsCenter.tsx

## GA4
- Measurement ID: G-WTJ63BBML5
- Env var: NEXT_PUBLIC_GA_MEASUREMENT_ID
- Hostname guard must be preserved: batistack.com only
- fireConversionEvent() must remain intact on all 13 CTAs

## Brand
- Typography: Cormorant Garamond + DM Sans
- Colors: Black, Electric Blue #00AEEF, Off-white
- Hero: floating blue spheres animation MUST survive migration
- Style: Apple meets Bloomberg — minimal, premium
