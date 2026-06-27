'use client';

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AGENTS } from "../data/agents";
import type { Agent } from "../data/agents";
import {
  Section,
  SectionHeading,
  GlowCard,
  Reveal,
  PrimaryLink,
  GhostLink,
  CTABanner,
} from "../components/ui";

const AGENT_IMAGES: Record<string, string> = {
  ceo:       "/brand/brainsAgent.png",
  scout:     "/brand/scoutAgents.PNG",
  voice:     "/brand/voiceAgent.png",
  email:     "/brand/emailAgents.PNG",
  billing:   "/brand/billingAgent.png",
  scheduler: "/brand/schedulerAgent.png",
  commander: "/brand/comanderAgent.png",
};

type Metric     = { value: string; label: string };
type Capability = { title: string; text: string };
type UseCase    = { title: string; scenario: string };
type AgentPageData = {
  tagline: string;
  metrics: Metric[];
  capabilities: Capability[];
  useCases: UseCase[];
};

const AGENT_PAGE_DATA: Record<string, AgentPageData> = {
  ceo: {
    tagline:
      "The coordinator that never sleeps. Watches every agent, prioritizes your day, and drops a morning briefing on your desk before your first coffee.",
    metrics: [
      { value: "14+", label: "tasks coordinated daily" },
      { value: "7AM",  label: "briefing delivered" },
      { value: "100%", label: "agent uptime tracked" },
    ],
    capabilities: [
      { title: "Morning Briefings",    text: "Compiles a plain-English summary of everything that happened overnight — what agents did, what needs your attention, what's waiting." },
      { title: "Agent Coordination",   text: "Watches the entire roster and routes tasks between agents automatically, so nothing falls through the cracks between handoffs." },
      { title: "Task Prioritization",  text: "Ranks your day's work by urgency, revenue impact, and deadline — so you always start with what matters most." },
      { title: "Approval Queue",       text: "Surfaces the two or three decisions that actually need you, batched and ready. No hunting through notifications." },
      { title: "Performance Tracking", text: "Monitors each agent's output and flags when something is running below expected — before it becomes a problem." },
      { title: "Escalation Routing",   text: "Knows when a situation is too complex for automation and gets it in front of the right human instantly." },
    ],
    useCases: [
      { title: "Overnight Catch-Up",           scenario: "You went to bed at 10PM. By 7AM the CEO Agent has reviewed 14 completed tasks across all agents, flagged 2 pending approvals, and sent you a one-page briefing. You're up to speed before breakfast." },
      { title: "Pre-Meeting Prep",             scenario: "Before a client call, the CEO Agent pulls together what Scout found, what emails Email Agent sent, and any open invoices from Billing — so you walk in fully briefed." },
      { title: "Cross-Agent Conflict Resolution", scenario: "Voice Agent booked a job for Tuesday. Scheduler Agent flagged a crew conflict. CEO Agent detects the overlap, proposes a reschedule, and sends it to you for a single tap approval." },
    ],
  },
  scout: {
    tagline:
      "Hunts for your next customer around the clock — qualifying every inquiry, monitoring lead sources, and building prospect lists that match your best clients.",
    metrics: [
      { value: "9+",  label: "leads qualified daily" },
      { value: "3",   label: "high-intent flags per day" },
      { value: "60%", label: "qualification accuracy" },
    ],
    capabilities: [
      { title: "Website Inquiry Qualification", text: "Responds to every web form within seconds, asks the right qualifying questions, and scores the lead before a human ever gets involved." },
      { title: "Lead Scoring",          text: "Assigns each prospect a score based on budget signals, intent language, and fit against your best existing clients." },
      { title: "Prospect List Building", text: "Continuously builds and enriches a list of potential clients in your target market — passively, while you work." },
      { title: "Source Monitoring",     text: "Watches every lead channel — website, social, referrals — and routes new inquiries into the right pipeline automatically." },
      { title: "Intro Email Queuing",   text: "Queues personalized intro emails for high-intent leads and hands them to Email Agent for delivery — no manual drafting." },
      { title: "CRM Sync",              text: "Logs every lead interaction, score, and status directly to your CRM so nothing gets lost and your pipeline stays current." },
    ],
    useCases: [
      { title: "After-Hours Website Inquiry", scenario: "At 11PM, someone fills out your contact form. Scout qualifies them in 2 minutes, scores them high-intent, and queues a personalized intro email — ready to send by 8AM." },
      { title: "Trade Show Follow-Up",        scenario: "You collected 30 business cards at an event. Scout ingests the list, scores each contact, and builds a tiered follow-up sequence ranked by fit." },
      { title: "Win-Back Campaign",           scenario: "Scout identifies clients who haven't booked in 6 months, scores their likelihood to return, and hands the list to Email Agent for a targeted re-engagement sequence." },
    ],
  },
  voice: {
    tagline:
      "Answers your phone with a natural voice, 24/7. Qualifies callers, books appointments, and escalates real emergencies straight to your cell.",
    metrics: [
      { value: "24/7", label: "call coverage" },
      { value: "11",   label: "calls handled per night avg" },
      { value: "85%",  label: "first-call resolution" },
    ],
    capabilities: [
      { title: "Natural Voice Answering",   text: "Picks up every call with a professional, natural-sounding voice that represents your brand — not a robotic IVR menu." },
      { title: "Appointment Booking",       text: "Checks your calendar in real time and books available slots while the caller is still on the phone." },
      { title: "Caller Qualification",      text: "Asks the right intake questions to determine whether a caller is a new lead, an existing client, or a vendor — and routes accordingly." },
      { title: "Emergency Escalation",      text: "Detects urgency signals in the conversation and calls your cell directly when something genuinely can't wait until morning." },
      { title: "Call Logging & Transcription", text: "Transcribes and summarizes every call, logs it to your CRM, and delivers a daily call report to your inbox." },
      { title: "After-Hours Coverage",      text: "Keeps your business reachable 24/7 without paying for a night-shift receptionist or leaving calls to voicemail." },
    ],
    useCases: [
      { title: "Late-Night Emergency Call", scenario: "A client calls at 2AM with a burst pipe. Voice Agent picks up, identifies it as an emergency, and calls your cell immediately — not a voicemail you find in the morning." },
      { title: "New Client Intake",         scenario: "A prospect calls from an ad. Voice Agent answers, qualifies them with three intake questions, and books a consultation on the spot — while you're in another meeting." },
      { title: "High Call Volume Day",      scenario: "You run a promotion and get 20 calls in one afternoon. Every call is answered within two rings, qualified, and either booked or logged — none go to voicemail." },
    ],
  },
  email: {
    tagline:
      "Writes and sends the follow-ups humans always forget: quote chasers, renewal sequences, win-back campaigns, and replies to routine inquiries.",
    metrics: [
      { value: "47",  label: "emails sent daily avg" },
      { value: "6",   label: "dormant leads revived" },
      { value: "32%", label: "average open rate" },
    ],
    capabilities: [
      { title: "Follow-Up Sequences",   text: "Runs multi-touch sequences for every lead and customer — timed, personalized, and sent automatically without any manual scheduling." },
      { title: "Quote Chasing",         text: "Follows up on every open quote on a set schedule until it's accepted, declined, or expired — no more lost deals from forgotten follow-up." },
      { title: "Renewal Campaigns",     text: "Identifies upcoming contract renewals and sends a targeted sequence to secure the next term before the client starts shopping alternatives." },
      { title: "Win-Back Campaigns",    text: "Reaches out to clients who've gone quiet with a sequence designed to re-engage — personalized to their history with your business." },
      { title: "Routine Inquiry Replies", text: "Handles common inbound questions — hours, pricing, availability — with accurate, on-brand responses so you don't have to." },
      { title: "Personalization Engine", text: "Pulls client data, history, and context to make every email feel individually written, not templated — even at volume." },
    ],
    useCases: [
      { title: "Post-Estimate Follow-Up",      scenario: "You send a $4,000 estimate. Email Agent sends a friendly check-in at day 3, a value reminder at day 7, and a last-call note at day 14 — without you thinking about it once." },
      { title: "Annual Renewal",               scenario: "A maintenance contract expires in 45 days. Email Agent sends a renewal offer, a reminder, and a final notice on schedule. The client renews before you even notice." },
      { title: "Dormant Client Reactivation",  scenario: "A client hasn't booked in 8 months. Email Agent sends a personalized re-engagement message referencing their last service — 6 respond asking for a new quote." },
    ],
  },
  billing: {
    tagline:
      "Generates invoices the moment work completes, sends payment reminders on schedule, and reconciles what's been paid — without you opening QuickBooks.",
    metrics: [
      { value: "$4.3K", label: "avg collected daily" },
      { value: "8",     label: "invoices issued per day" },
      { value: "0",     label: "invoices forgotten" },
    ],
    capabilities: [
      { title: "Auto Invoice Generation", text: "Creates and sends an invoice the moment a job is marked complete — no delay, no manual entry, no waiting until Friday." },
      { title: "Payment Reminders",       text: "Sends polite, timed reminders at 7, 14, and 30 days overdue — escalating appropriately without you micromanaging." },
      { title: "Overdue Chase Sequences", text: "Runs a structured follow-up sequence for every unpaid invoice until it's resolved, with increasing urgency you never have to manage." },
      { title: "QuickBooks Sync",         text: "Pushes every invoice, payment, and credit note directly to QuickBooks in real time — your books are always current." },
      { title: "Payment Reconciliation",  text: "Matches incoming payments to open invoices automatically, flags any discrepancies, and keeps your AR clean without manual matching." },
      { title: "Revenue Reporting",       text: "Delivers a weekly snapshot of collected, outstanding, and overdue revenue so you always know where your cash flow stands." },
    ],
    useCases: [
      { title: "Job Completion Invoice",       scenario: "Your crew finishes an install at 3PM. By 3:01PM, the client has received a professional invoice. By 3:05PM, it's logged in QuickBooks — no one on your team sent a thing." },
      { title: "Overdue Payment Chase",        scenario: "An invoice is 30 days past due. Billing Agent has already sent three reminders — a friendly nudge, a firmer notice, and a final warning — collecting $4,300 in overdue payments this week." },
      { title: "End-of-Month Reconciliation",  scenario: "Instead of spending Saturday morning in QuickBooks, you open your Sunday briefing and find a clean month-end summary — every payment matched, every discrepancy flagged." },
    ],
  },
  scheduler: {
    tagline:
      "Books jobs, confirms appointments, sends reminders that kill no-shows, and keeps crews or consultations routed sensibly across your week.",
    metrics: [
      { value: "12",  label: "bookings per day" },
      { value: "31",  label: "confirmations sent daily" },
      { value: "85%", label: "no-show reduction" },
    ],
    capabilities: [
      { title: "Appointment Booking",     text: "Accepts new bookings from any channel — phone, web, email — checks real-time availability, and confirms the slot instantly." },
      { title: "Crew Dispatch",           text: "Routes jobs to the right technician or consultant based on location, skill, and current schedule — minimizing drive time and idle gaps." },
      { title: "Conflict Detection",      text: "Scans the calendar continuously and flags double-bookings or impossible travel times before they become a problem in the field." },
      { title: "Reminder Sequences",      text: "Sends automated reminders at 48 hours, 24 hours, and 2 hours before every appointment — dramatically cutting the no-show rate." },
      { title: "Reschedule Management",   text: "Handles cancellations and reschedule requests automatically, fills the open slot from a waitlist, and notifies all parties without a single call." },
      { title: "Calendar Sync",           text: "Stays in sync with Google Calendar, Outlook, and your field service platform so there's one source of truth for your entire schedule." },
    ],
    useCases: [
      { title: "Last-Minute Cancellation",        scenario: "A client cancels 3 hours before their appointment. Scheduler Agent texts the next person on the waitlist, fills the slot in 8 minutes, and notifies the crew — you find out in your evening digest." },
      { title: "Crew Routing Optimization",       scenario: "Monday has 8 jobs across the city. Scheduler Agent routes them by location cluster, cutting 40 minutes of drive time and fitting a ninth job into the day." },
      { title: "Automated Confirmation Sequence", scenario: "A client books a consultation 2 weeks out. They receive a confirmation email, a 48-hour reminder, and a 2-hour text — without anyone on your team sending a single message." },
    ],
  },
  commander: {
    tagline:
      "Your remote control. Lives in Telegram on your phone — sends you approvals, daily digests, and lets you command your entire AI workforce from anywhere.",
    metrics: [
      { value: "3",     label: "approvals per day avg" },
      { value: "< 2m",  label: "avg response time" },
      { value: "100%",  label: "mobile command coverage" },
    ],
    capabilities: [
      { title: "Approval Requests",      text: "Surfaces the decisions that need you — formatted cleanly in Telegram with context and options — so you can approve or reject with a tap." },
      { title: "Daily Digests",          text: "Delivers a morning and evening summary of everything your workforce did: tasks completed, revenue collected, appointments booked." },
      { title: "Mobile Commands",        text: "Accept plain-language instructions from Telegram — 'reschedule Tuesday jobs,' 'chase the Johnson invoice' — and routes them to the right agent." },
      { title: "Agent Monitoring",       text: "Gives you a live status view of every agent in your roster: what they're doing, when they last ran, and whether anything needs attention." },
      { title: "Instant Alerts",         text: "Pings you immediately when something unusual happens — a missed appointment, a payment dispute, a high-urgency call — so you're never blindsided." },
      { title: "Remote Configuration",   text: "Lets you update agent settings, pause workflows, or change approval thresholds directly from Telegram without touching a computer." },
    ],
    useCases: [
      { title: "On-the-Go Approval",     scenario: "You're at a family dinner when Billing Agent proposes sending a $12,000 invoice. Commander sends it to your Telegram with one tap to approve. Dinner continues uninterrupted." },
      { title: "Morning Digest Review",  scenario: "You check Telegram over coffee. Commander delivers a 60-second summary: 14 tasks done overnight, 2 approvals waiting, $4,300 collected. You're running the business from your kitchen." },
      { title: "Field Emergency Override", scenario: "A crew lead texts you that a client is unhappy. You message Commander Agent: 'prioritize the Henderson account today.' It routes the instruction to the right agents within seconds." },
    ],
  },
};

/* ════════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════ */

export default function AgentPage() {
  const params = useParams(); const slug = params?.slug as string | undefined;
  const agent = AGENTS.find((a) => a.slug === slug);

  if (!agent || !slug || !AGENT_PAGE_DATA[slug]) {
    return notFound();
  }

  const data  = AGENT_PAGE_DATA[slug];
  const image = AGENT_IMAGES[slug];

  return (
    <main style={{ background: "var(--void)", paddingTop: "72px" }}>
      <AgentHero agent={agent} data={data} image={image} />
      <MetricsStrip metrics={data.metrics} />
      <CapabilitiesSection capabilities={data.capabilities} agentName={agent.name} />
      <UseCasesSection useCases={data.useCases} />
      <CTABanner />
    </main>
  );
}

/* ════════════════ HERO ════════════════ */

function AgentHero({ agent, data, image }: { agent: Agent; data: AgentPageData; image: string }) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,174,239,0.07) 0%, transparent 60%), #0A0A0A",
        borderBottom: "1px solid #1E1E1E",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,174,239,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 90% at 50% 0%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 90% at 50% 0%, black 20%, transparent 75%)",
        }}
      />

      <div
        className="section-container agent-hero-grid"
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr",
          gap: "72px",
          alignItems: "center",
          padding: "80px 60px 88px",
        }}
      >
        {/* ── Left column ── */}
        <div>
          <Reveal>
            <Link
              href="/ai-agents"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--mist)",
                textDecoration: "none",
                marginBottom: "28px",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00AEEF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--mist)")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M19 12H5m7-7-7 7 7 7" />
              </svg>
              All Agents
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                border: "1px solid rgba(0,174,239,0.4)",
                borderRadius: "100px",
                padding: "7px 16px",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--silver)",
                background: "rgba(0,174,239,0.05)",
                marginBottom: "22px",
              }}
            >
              <span className="status-dot" />
              {agent.role}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(36px, 4.5vw, 58px)",
                lineHeight: 1.08,
                color: "var(--bone)",
                margin: "0 0 20px",
                letterSpacing: "-0.015em",
              }}
            >
              {agent.name.replace(" Agent", "")}
              <span style={{ color: "#00AEEF" }}> Agent</span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "17px",
                color: "var(--mist)",
                lineHeight: 1.75,
                maxWidth: "540px",
                margin: "0 0 28px",
              }}
            >
              {data.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div
              style={{
                background: "#0A0A0A",
                border: "1px solid #1E1E1E",
                borderLeft: "2px solid #00AEEF",
                borderRadius: "6px",
                padding: "16px 18px",
                marginBottom: "32px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "10px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#00AEEF",
                  margin: "0 0 8px",
                }}
              >
                Today
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  letterSpacing: "0.03em",
                  color: "var(--silver)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                <span style={{ color: "#00AEEF" }}>&gt;_</span> {agent.today}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <PrimaryLink to="/contact">Schedule Free Assessment</PrimaryLink>
              <GhostLink to="/ai-agents">View All Agents</GhostLink>
            </div>
          </Reveal>
        </div>

        {/* ── Right column ── */}
        <Reveal delay={0.15} style={{ position: "relative" }}>
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: "-24px",
              borderRadius: "24px",
              background: "radial-gradient(ellipse at 50% 50%, rgba(0,174,239,0.18) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(0,174,239,0.3)",
              boxShadow: "0 0 60px rgba(0,174,239,0.12)",
              background: "#0A0A0A",
            }}
          >
            <Image
              src={image}
              alt={`${agent.name} — ${agent.role}`}
              width={800}
              height={600}
              priority
              style={{ width: "100%", display: "block", objectFit: "contain", aspectRatio: "4/3" }}
            />
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .agent-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 64px 24px 56px !important;
          }
          .agent-hero-grid > *:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}

/* ════════════════ METRICS ════════════════ */

function MetricsStrip({ metrics }: { metrics: Metric[] }) {
  return (
    <section
      style={{
        background: "#0D0D0D",
        borderBottom: "1px solid #1E1E1E",
        padding: "56px 0",
      }}
    >
      <div
        className="section-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          textAlign: "center",
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={0.08 * i}>
            <div
              style={{
                padding: "32px 24px",
                borderRadius: "12px",
                border: "1px solid #1E1E1E",
                background: "#141414",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(32px, 4vw, 48px)",
                  color: "#00AEEF",
                  margin: "0 0 8px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {m.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--mist)",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                }}
              >
                {m.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <style>{`
        @media (max-width: 640px) {
          .section-container.metrics-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ════════════════ CAPABILITIES ════════════════ */

function CapabilitiesSection({ capabilities, agentName }: { capabilities: Capability[]; agentName: string }) {
  return (
    <Section>
      <SectionHeading
        label="Capabilities"
        title={<>What <em style={{ color: "#00AEEF", fontStyle: "normal" }}>{agentName}</em> Does</>}
        sub="Six core capabilities that run automatically, around the clock, without you having to manage a single one."
      />
      <div
        className="cap-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          alignItems: "start",
        }}
      >
        {capabilities.map((cap, i) => (
          <Reveal key={cap.title} delay={0.07 * i}>
            <GlowCard accentBorder>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "var(--bone)",
                  margin: "0 0 12px",
                }}
              >
                {cap.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--mist)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {cap.text}
              </p>
            </GlowCard>
          </Reveal>
        ))}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .cap-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

/* ════════════════ USE CASES ════════════════ */

function UseCasesSection({ useCases }: { useCases: UseCase[] }) {
  return (
    <Section bg="#0D0D0D" style={{ padding: "80px 0 56px" }}>
      <SectionHeading
        label="In Action"
        title={<>Real-World <em style={{ color: "#00AEEF", fontStyle: "normal" }}>Scenarios</em></>}
        sub="Here's what a typical day looks like when this agent is running inside your business."
      />
      <div
        className="uc-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          alignItems: "start",
        }}
      >
        {useCases.map((uc, i) => (
          <Reveal key={uc.title} delay={0.1 * i}>
            <GlowCard style={{ position: "relative" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "48px",
                  color: "rgba(0,174,239,0.12)",
                  lineHeight: 1,
                  marginBottom: "16px",
                  letterSpacing: "-0.03em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "var(--bone)",
                  margin: "0 0 14px",
                  lineHeight: 1.3,
                }}
              >
                {uc.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--mist)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {uc.scenario}
              </p>
            </GlowCard>
          </Reveal>
        ))}
      </div>
      <style>{`
        @media (max-width: 960px) {
          .uc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}
