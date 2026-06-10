export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  pain: string;
  painPoints: string[];
  solution: string;
  keyAgents: { name: string; why: string }[];
  stat: { value: string; label: string };
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "hvac",
    name: "HVAC & Mechanical",
    shortName: "HVAC",
    tagline: "Every missed call in July is a $8,000 install going to your competitor.",
    pain: "HVAC season doesn't wait. When a heat wave hits NYC, your phone rings off the hook — and every call you miss while your techs are on rooftops is revenue walking straight to the next contractor on Google. Estimates pile up at night, invoices go out late, and dispatching crews across five boroughs by text message burns hours you don't have.",
    painPoints: [
      "Missed emergency calls during peak season",
      "Invoices sent days after job completion",
      "Manual dispatching across boroughs",
      "Maintenance contract renewals slipping through cracks",
    ],
    solution:
      "Batistack installs an AI workforce in your office that answers every call, books service windows, generates invoices the moment a job closes, and coordinates your field crews — all running 24/7 on a Mac mini in your office. You approve the big stuff from Telegram; the routine work just happens.",
    keyAgents: [
      { name: "Voice Agent", why: "Answers overflow and after-hours calls, books emergency service" },
      { name: "Scheduler Agent", why: "Routes techs by zone and books maintenance windows" },
      { name: "Billing Agent", why: "Invoices the moment a work order closes" },
      { name: "Commander Agent", why: "You dispatch and approve everything from Telegram" },
    ],
    stat: { value: "24/7", label: "emergency call coverage" },
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    shortName: "Plumbing",
    tagline: "Burst pipes don't call during business hours.",
    pain: "Plumbing is an emergency business — and emergencies happen at 2 AM. If your answering setup is voicemail, those panicked homeowners call the next plumber on the list. Meanwhile your days disappear into quoting, chasing payments on completed jobs, and juggling which tech is where.",
    painPoints: [
      "After-hours emergencies going to voicemail",
      "Slow quotes losing jobs to faster competitors",
      "Unpaid invoices aging past 30 days",
      "Double-booked or idle technicians",
    ],
    solution:
      "Your Batistack AI workforce picks up every call — day or night — qualifies the emergency, books the job, and pings you on Telegram. Quotes go out in minutes, invoices follow the job automatically, and payment reminders chase themselves. You stop being the office manager and go back to being the owner.",
    keyAgents: [
      { name: "Voice Agent", why: "24/7 emergency intake — never miss a burst-pipe call again" },
      { name: "Scout Agent", why: "Finds property managers and GCs who need a reliable plumber" },
      { name: "Billing Agent", why: "Automated invoicing and payment follow-ups" },
      { name: "Scheduler Agent", why: "Keeps your techs booked tight, not double-booked" },
    ],
    stat: { value: "2 min", label: "average emergency response" },
  },
  {
    slug: "electrical",
    name: "Electrical",
    shortName: "Electrical",
    tagline: "You're licensed to wire buildings, not to chase paperwork.",
    pain: "Electrical contractors in NYC live between inspections, permits, and demanding GCs. The work is skilled and high-stakes — but the business side is death by a thousand cuts: estimate requests sitting in your inbox, change orders that never get billed, and leads from your website that nobody follows up on until they've hired someone else.",
    painPoints: [
      "Estimate requests sitting unanswered for days",
      "Change orders completed but never invoiced",
      "Website leads with no follow-up",
      "Permit and inspection dates tracked on paper",
    ],
    solution:
      "Batistack installs AI agents that respond to every estimate request within minutes, track every change order to an invoice, and follow up with leads automatically until they book. Your Commander Agent keeps inspection dates and job milestones in front of you on Telegram — nothing slips.",
    keyAgents: [
      { name: "Email Agent", why: "Instant response to estimate requests and GC inquiries" },
      { name: "Billing Agent", why: "Every change order becomes an invoice, automatically" },
      { name: "Scout Agent", why: "Surfaces new construction and renovation leads in your zip codes" },
      { name: "CEO Agent", why: "Tracks job milestones, permits, and inspection dates" },
    ],
    stat: { value: "100%", label: "of change orders billed" },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    shortName: "Real Estate",
    tagline: "Speed-to-lead decides who closes in NYC real estate.",
    pain: "In NYC real estate, the agent who responds first usually wins the client. But you can't answer Zillow inquiries while you're showing apartments, and by the time you call back tonight's leads, three other agents already have. Listings need follow-up, open houses need scheduling, and your CRM is a graveyard of contacts nobody nurtured.",
    painPoints: [
      "Lead response measured in hours, not seconds",
      "No-show appointments with no confirmation system",
      "Cold contacts rotting in the CRM",
      "Listing inquiries arriving around the clock",
    ],
    solution:
      "Your AI workforce responds to every inquiry in seconds — qualifying budget, timeline, and neighborhoods — then books showings straight into your calendar with automatic confirmations. Old CRM contacts get re-engaged with intelligent email sequences. You show up to closings; your agents do the chasing.",
    keyAgents: [
      { name: "Scout Agent", why: "Instant qualification of every portal and website lead" },
      { name: "Scheduler Agent", why: "Books and confirms showings, kills no-shows" },
      { name: "Email Agent", why: "Nurtures your database with listing-match campaigns" },
      { name: "Voice Agent", why: "Answers listing calls when you're mid-showing" },
    ],
    stat: { value: "<60s", label: "lead response time" },
  },
  {
    slug: "gyms-fitness",
    name: "Gyms & Fitness",
    shortName: "Gyms",
    tagline: "Memberships are won at the front desk you can't always staff.",
    pain: "Every gym owner knows the math: a missed trial booking is a lost membership worth thousands in lifetime value. Front-desk staff turn over, DMs go unanswered overnight, class schedules change, and chasing failed payments feels awkward — so it doesn't happen, and revenue quietly leaks.",
    painPoints: [
      "Trial requests and DMs unanswered after hours",
      "Failed membership payments never recovered",
      "Class no-shows with no reminder system",
      "Lead follow-up dependent on busy front-desk staff",
    ],
    solution:
      "Batistack gives your gym a tireless front desk: agents that answer every inquiry, book trials and classes, send reminders that crush no-show rates, and recover failed payments with polite persistence. Your Telegram shows you new sign-ups while you coach.",
    keyAgents: [
      { name: "Scout Agent", why: "Converts Instagram and website inquiries into booked trials" },
      { name: "Scheduler Agent", why: "Class bookings, waitlists, and no-show-killing reminders" },
      { name: "Billing Agent", why: "Recovers failed payments without awkward conversations" },
      { name: "Email Agent", why: "Win-back campaigns for lapsed members" },
    ],
    stat: { value: "40%", label: "fewer no-shows with reminders" },
  },
  {
    slug: "legal",
    name: "Legal",
    shortName: "Legal",
    tagline: "Billable hours shouldn't be spent on intake calls.",
    pain: "Every hour a NYC attorney spends on intake, scheduling, and chasing retainer payments is an hour not billed. Potential clients call multiple firms — the one that answers first and follows up professionally signs the engagement letter. After-hours inquiries from people in urgent legal situations go to voicemail and never call back.",
    painPoints: [
      "Intake calls interrupting billable work",
      "After-hours inquiries lost to competitors",
      "Consultation no-shows and reschedule chaos",
      "Retainer invoices and payment reminders done by hand",
    ],
    solution:
      "Your AI workforce handles first-contact intake — capturing case type, urgency, and contact details — books consultations into open slots, and sends engagement-ready summaries to your Telegram. Billing runs itself. Processing stays local on your own hardware, which your clients' confidentiality demands.",
    keyAgents: [
      { name: "Voice Agent", why: "Professional 24/7 intake without a call center" },
      { name: "Scheduler Agent", why: "Consultations booked, confirmed, and reminded" },
      { name: "Billing Agent", why: "Retainers and invoices on autopilot" },
      { name: "CEO Agent", why: "Daily digest of new matters and follow-ups" },
    ],
    stat: { value: "Local", label: "data processing on-premise" },
  },
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    shortName: "Cleaning",
    tagline: "Win contracts while your crews are still on site.",
    pain: "Commercial cleaning in NYC is a volume game: more walkthroughs, more bids, more buildings. But owners get stuck supervising crews instead of selling, bids go out late, and client complaints about a missed trash room turn into cancelled contracts because nobody logged the issue.",
    painPoints: [
      "Bid requests answered too slowly to win",
      "No systematic outreach to property managers",
      "Client complaints lost in text threads",
      "Crew scheduling across buildings done manually",
    ],
    solution:
      "Batistack's agents hunt new building contracts, respond to bid requests instantly, log every client request into a tracked queue, and coordinate crew schedules across all your sites. You see the day's wins and issues in one Telegram digest.",
    keyAgents: [
      { name: "Scout Agent", why: "Finds property managers and offices needing service" },
      { name: "Email Agent", why: "Bid follow-ups and client communication" },
      { name: "Scheduler Agent", why: "Crew assignments across every building" },
      { name: "Commander Agent", why: "Complaint triage straight to your phone" },
    ],
    stat: { value: "3x", label: "more bids submitted per week" },
  },
  {
    slug: "insurance",
    name: "Insurance",
    shortName: "Insurance",
    tagline: "Renewals and follow-ups are where books of business are built.",
    pain: "Independent agents and brokerages live and die by follow-up: quotes that need a second touch, renewals approaching silently, cross-sell opportunities sitting unworked in the book. One person can only make so many calls — so policies lapse, quotes go stale, and growth flatlines.",
    painPoints: [
      "Renewal dates passing without outreach",
      "Quoted prospects never followed up",
      "Cross-sell opportunities invisible in the book",
      "Service requests clogging the inbox",
    ],
    solution:
      "Your AI workforce watches every renewal date, re-engages every open quote, and runs cross-sell campaigns across your book — while the Voice Agent fields service calls. Sensitive client data stays on your own hardware, not in someone else's cloud.",
    keyAgents: [
      { name: "Email Agent", why: "Renewal sequences and quote follow-ups that never forget" },
      { name: "Scout Agent", why: "Surfaces cross-sell opportunities in your existing book" },
      { name: "Voice Agent", why: "Handles service calls so you can sell" },
      { name: "Billing Agent", why: "Premium payment reminders and reconciliation" },
    ],
    stat: { value: "0", label: "renewals missed" },
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
