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
  {
    slug: "pool-repair",
    name: "Pool Service & Repair",
    shortName: "Pool Service",
    tagline: "Spring backlog season is 8 weeks long. Most owners waste 4 of them on the phone.",
    pain: "Pool season in the New York metro is short and unforgiving. From April through June, every pool owner wants their water ready at the same time — and if your crew can't get to the phone while they're opening pools, those jobs go to whoever answers first. Emergency equipment calls don't wait, and recurring service customers drift to the next flyer they find if you go quiet between visits.",
    painPoints: [
      "Spring-rush calls going unanswered while techs are on site",
      "Emergency equipment failures losing jobs to faster competitors",
      "Recurring service customers skipped or forgotten between visits",
      "Invoice delays because office admin is managing the chaos",
    ],
    solution:
      "Batistack installs an AI workforce that handles every inbound call, books service windows by zone, sends recurring visit reminders to your customers, and invoices the moment a job is logged. Your techs stay in the water; your Telegram stays full of booked jobs.",
    keyAgents: [
      { name: "Voice Agent", why: "Answers every spring-rush call and books emergency repairs 24/7" },
      { name: "Scheduler Agent", why: "Routes crews by neighborhood and books recurring service visits" },
      { name: "Billing Agent", why: "Invoices automatically on job completion — no admin delay" },
      { name: "Scout Agent", why: "Reaches out to HOAs and property managers with commercial pools" },
    ],
    stat: { value: "0", label: "missed calls during spring rush" },
  },
  {
    slug: "general-contractor",
    name: "General Contracting",
    shortName: "General Contractor",
    tagline: "You can't manage a NYC job site and chase bids at the same time.",
    pain: "NYC general contractors operate on thin margins where every unbilled change order and every slow bid response is money left on the table. Subcontractors need coordination, DOB schedules need tracking, and bid requests from developers and property managers arrive while you're three floors up in Bushwick. The office work piles up while the field work never stops.",
    painPoints: [
      "Bid requests unanswered while the owner is on-site",
      "Change orders completed but never formally invoiced",
      "Subcontractor coordination running on group text",
      "DOB inspection dates and permit deadlines tracked on paper",
    ],
    solution:
      "Batistack gives your contracting business an AI office that responds to bid requests the same hour, converts every change order into a line-itemed invoice, and keeps project milestones in front of you on Telegram. Sub coordination goes from group text to tracked, timestamped messages — with a paper trail when disputes arise.",
    keyAgents: [
      { name: "Email Agent", why: "Same-hour bid responses to developers, PMs, and property owners" },
      { name: "Billing Agent", why: "Every change order becomes a signed, sent invoice automatically" },
      { name: "CEO Agent", why: "Daily digest of open bids, project milestones, and deadlines" },
      { name: "Commander Agent", why: "Sub coordination and approvals dispatched from your phone" },
    ],
    stat: { value: "100%", label: "of change orders invoiced" },
  },
  {
    slug: "landscaping",
    name: "Landscaping & Grounds",
    shortName: "Landscaping",
    tagline: "Maintenance contracts go to whoever sends the proposal in 48 hours. Not 5 days.",
    pain: "Landscaping in the New York metro runs on recurring maintenance contracts — and those contracts go to whoever sends the proposal fastest in late winter. While you're running crews through Queens and Staten Island in peak season, new customers call and get voicemail, recurring accounts complain about missed visits, and invoicing falls weeks behind because office time disappears from May through October.",
    painPoints: [
      "Spring proposal requests going unanswered during crew season",
      "Recurring maintenance customers double-booked or quietly dropped",
      "Seasonal invoice delays stretching into the following month",
      "No systematic outreach to property managers and HOAs",
    ],
    solution:
      "Your Batistack AI workforce sends proposals within hours of an inquiry, routes crews by borough with zero double-booking, invoices recurring accounts automatically on their schedule, and runs outreach to property managers and HOAs across your target zip codes — all while you're running operations in the field.",
    keyAgents: [
      { name: "Scheduler Agent", why: "Routes crews by borough, eliminates double-booking entirely" },
      { name: "Email Agent", why: "Instant proposals and seasonal service outreach to PMs and HOAs" },
      { name: "Billing Agent", why: "Recurring maintenance invoices sent on schedule, automatically" },
      { name: "Scout Agent", why: "Finds commercial property contracts in your target neighborhoods" },
    ],
    stat: { value: "48 hr", label: "proposal-to-signed contract window" },
  },
  {
    slug: "roofing",
    name: "Roofing",
    shortName: "Roofing",
    tagline: "The 48 hours after a NYC storm close more jobs than the rest of the month combined.",
    pain: "NYC roofing is a storm-driven business. When a nor'easter rolls through, every flat roof in the Bronx and Brooklyn needs inspection — and the contractors who answer the phone in the 48 hours after the storm capture the season. Between storms, bids pile up unanswered, insurance documentation takes hours you don't have, and crews idle while dispatch runs on phone tag.",
    painPoints: [
      "Post-storm surge calls missed while crews are already deployed",
      "Insurance documentation consuming hours of admin time per job",
      "Bid requests sitting unanswered until competitors take the work",
      "Crew dispatch across boroughs running on manual phone tag",
    ],
    solution:
      "Batistack puts an AI workforce in your office that captures every storm-surge call, triages by urgency, and dispatches your nearest crew from Telegram. Insurance documentation gets organized from job notes automatically, bids go out the same day inquiries arrive, and your schedule fills itself.",
    keyAgents: [
      { name: "Voice Agent", why: "Captures every post-storm call, triages urgency, books inspection" },
      { name: "Commander Agent", why: "Crew dispatch and job approvals from Telegram in seconds" },
      { name: "Billing Agent", why: "Insurance claim documentation and invoicing on job close" },
      { name: "Scout Agent", why: "Outreach to property managers and HOAs for preventive contract work" },
    ],
    stat: { value: "48 hr", label: "post-storm response window" },
  },
  {
    slug: "pest-control",
    name: "Pest Control",
    shortName: "Pest Control",
    tagline: "In NYC, every HPD violation is an emergency call you cannot miss.",
    pain: "New York City has the highest pest pressure in the country — bedbugs, cockroaches, and rodents don't follow business hours. Multi-family landlords call for HPD violation response at 7 AM; restaurant owners call the moment the health inspector leaves. If your line goes to voicemail, they're calling the next exterminator on Yelp. Recurring accounts drift away when treatment reports don't arrive on time.",
    painPoints: [
      "HPD violation and emergency calls missed outside business hours",
      "Recurring account treatment reports sent late or forgotten",
      "Multi-family property managers needing same-day scheduling",
      "New lead follow-up lost to faster-responding competitors",
    ],
    solution:
      "Your Batistack AI workforce answers every call — day or night — qualifies the pest type and urgency, books the service window, and sends treatment reports automatically when your tech closes the job. Recurring accounts get reminders and documentation without touching your inbox, and landlords get the paper trail their city inspectors require.",
    keyAgents: [
      { name: "Voice Agent", why: "24/7 emergency intake for HPD violations and urgent pest calls" },
      { name: "Scheduler Agent", why: "Same-day booking and routing for multi-family and restaurant accounts" },
      { name: "Email Agent", why: "Automated treatment reports and recurring service reminders" },
      { name: "Billing Agent", why: "Invoicing on job close, recurring billing on schedule" },
    ],
    stat: { value: "24/7", label: "HPD violation response coverage" },
  },
  {
    slug: "auto-repair",
    name: "Auto Repair",
    shortName: "Auto Repair",
    tagline: "An empty bay costs you $400 an hour. Your schedule shouldn't have gaps.",
    pain: "Auto repair shops in NYC live and die by bay utilization. Customers call for estimates and don't hear back until the next day — so they drop it off somewhere else. Service reminders never go out, so regular customers forget you exist between oil changes. Insurance work piles up documentation that keeps your service writer off the floor instead of writing tickets.",
    painPoints: [
      "Estimate inquiries unanswered until the customer books elsewhere",
      "Service reminders never sent — regular customers quietly drift away",
      "Insurance documentation keeping the service writer off the floor",
      "Empty bays from no-shows with no appointment confirmation system",
    ],
    solution:
      "Batistack installs an AI workforce that answers every estimate call, books appointments to fill your bays with confirmation texts that kill no-shows, sends service reminders to past customers, and handles insurance documentation — so your service writer stays with customers, not on hold with adjusters. Bay status and daily revenue show up in your Telegram in real time.",
    keyAgents: [
      { name: "Voice Agent", why: "Answers estimate calls and books appointments to fill every bay" },
      { name: "Scheduler Agent", why: "Bay scheduling with confirmation texts that eliminate no-shows" },
      { name: "Email Agent", why: "Service reminders bring back oil change and seasonal customers" },
      { name: "Billing Agent", why: "Insurance estimates and invoicing without tying up the service writer" },
    ],
    stat: { value: "0", label: "empty bays from scheduling gaps" },
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
