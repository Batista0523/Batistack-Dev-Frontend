export type Agent = {
  name: string;
  slug: string;
  role: string;
  description: string;
  today: string;
};

export const AGENTS: Agent[] = [
  {
    name: "CEO Agent",
    slug: "ceo",
    role: "Operations Brain",
    description:
      "The coordinator. Watches every other agent, prioritizes the day's work, and compiles what happened into a morning briefing you actually read.",
    today: "Compiled your 7 AM briefing: 14 tasks completed overnight, 2 items waiting for your approval.",
  },
  {
    name: "Scout Agent",
    slug: "scout",
    role: "Lead Generation",
    description:
      "Hunts for your next customer around the clock — qualifying website inquiries, watching lead sources, and building prospect lists that match your best clients.",
    today: "Qualified 9 new leads, flagged 3 as high-intent, and queued intro emails for each.",
  },
  {
    name: "Voice Agent",
    slug: "voice",
    role: "Calls & Intake",
    description:
      "Answers your phone with a natural voice, 24/7. Qualifies callers, books appointments, and escalates real emergencies straight to your cell.",
    today: "Answered 11 calls after hours, booked 4 service appointments, escalated 1 emergency to you.",
  },
  {
    name: "Email Agent",
    slug: "email",
    role: "Campaigns & Follow-up",
    description:
      "Writes and sends the follow-ups humans forget: quote chasers, renewal sequences, win-back campaigns, and replies to routine inquiries.",
    today: "Sent 47 personalized follow-ups; 6 dormant leads replied asking for a quote.",
  },
  {
    name: "Billing Agent",
    slug: "billing",
    role: "Invoices & Payments",
    description:
      "Generates invoices the moment work completes, sends payment reminders on schedule, and reconciles what's been paid — without you opening QuickBooks.",
    today: "Issued 8 invoices, collected $4,300 in overdue payments via polite reminders.",
  },
  {
    name: "Scheduler Agent",
    slug: "scheduler",
    role: "Calendar & Dispatch",
    description:
      "Books jobs, confirms appointments, sends reminders that kill no-shows, and keeps crews or consultations routed sensibly across your week.",
    today: "Booked 12 appointments, sent 31 confirmations, rescheduled 2 conflicts before they happened.",
  },
  {
    name: "Commander Agent",
    slug: "commander",
    role: "Telegram Control",
    description:
      "Your remote control. Lives in Telegram on your phone — sends you approvals, daily digests, and lets you command the entire workforce with a message.",
    today: "Delivered 3 approval requests to your phone; you approved all three from the back of a cab.",
  },
];

export const CAPABILITIES = [
  {
    title: "Lead Generation",
    text: "Agents qualify every inquiry in seconds and build prospect lists while you sleep.",
  },
  {
    title: "Voice Calls",
    text: "Natural-sounding AI answers every call 24/7 — booking, qualifying, escalating.",
  },
  {
    title: "Invoice Automation",
    text: "Work order closes, invoice goes out. Reminders chase payment so you don't have to.",
  },
  {
    title: "Appointment Scheduling",
    text: "Bookings, confirmations, and reminders that cut no-shows dramatically.",
  },
  {
    title: "Email Campaigns",
    text: "Follow-ups, renewals, and win-backs written and sent automatically.",
  },
  {
    title: "Field Coordination",
    text: "Dispatch crews and approve decisions from Telegram, wherever you are.",
  },
];
