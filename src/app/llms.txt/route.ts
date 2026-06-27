export const dynamic = "force-static";

const CONTENT = `# Batista AI Infrastructure and Agent Services

> Batistack physically installs AI agent workforces — running on Mac mini and Mac Studio (Apple Silicon) hardware — inside NYC small service businesses. The product is called Batistack Autopilot. Target clients are NYC service trades: HVAC, plumbing, electrical, roofing, landscaping, pest control, auto repair, pool service, general contracting, real estate, gyms, legal, commercial cleaning, and insurance.

## What We Do

Batistack does not sell software subscriptions. We install dedicated AI agent hardware on-site at your business. Seven specialized agents run 24/7:

- CEO Agent — daily briefings, coordinates other agents, tracks tasks
- Scout Agent — outbound lead generation and qualification
- Voice Agent — answers calls, qualifies callers, books appointments
- Email Agent — follow-ups, proposals, bid responses
- Billing Agent — invoicing, payment reminders, insurance documentation
- Scheduler Agent — routes crews, books service windows, sends confirmations
- Commander Agent — Telegram-based dispatch and business control

## Key Pages

- [Home](https://batistack.com) — overview and lead capture
- [About](https://batistack.com/about) — founder and mission
- [Services](https://batistack.com/services) — Batistack Autopilot product details
- [AI Agents](https://batistack.com/ai-agents) — all 7 agents explained
- [How It Works](https://batistack.com/how-it-works) — 4-step process
- [Industries](https://batistack.com/industries) — all 14 NYC service industries served
- [Blog](https://batistack.com/blog) — AI automation insights for NYC service businesses
- [Contact](https://batistack.com/contact) — free AI assessment

## Industries Served in NYC

HVAC, Plumbing, Electrical, Roofing, Landscaping, Pool Service & Repair, Pest Control, Auto Repair, General Contracting, Real Estate, Gyms & Fitness, Legal, Commercial Cleaning, Insurance

## Technology

- Hardware: Apple Silicon (Mac mini, Mac Studio)
- AI agents run locally on-premise — not cloud-dependent
- Managed by owner via Telegram (Commander Agent)
- Monthly support + monitoring included

## Contact

- Website: https://batistack.com
- Contact form: https://batistack.com/contact
- Free assessment: 30-minute call, no commitment required

## Sitemap

https://batistack.com/sitemap.xml
`;

export function GET() {
  return new Response(CONTENT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
    },
  });
}
