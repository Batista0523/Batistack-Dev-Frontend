export interface CaseStudyResult {
  metric: string;
  before: string;
  after: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  challenge: string;
  solution: string;
  techStack: string[];
  timeline: string;
  results: CaseStudyResult[];
  testimonial: string;
  author: string;
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "coffee-shop",
    title: "From Foot Traffic to Online Revenue",
    category: "E-Commerce + AI",
    client: "NYC Specialty Coffee Shop",
    challenge:
      "A beloved Brooklyn coffee roaster was selling 100% in-store with no online presence. Peak hours were packed, but off-hours sales were dead — and they were leaving serious money on the table.",
    solution:
      "We built a custom e-commerce storefront with AI-powered product recommendations based on flavor profiles and past orders, plus a subscription flow that turned one-time buyers into recurring monthly customers.",
    techStack: ["React", "Stripe", "Node.js", "OpenAI API"],
    timeline: "18 days",
    results: [
      { metric: "Monthly Online Revenue", before: "$0", after: "$2,100" },
      { metric: "Subscription Sign-Ups", before: "0", after: "47" },
      { metric: "Average Order Value", before: "N/A", after: "$38" },
    ],
    testimonial:
      "I never thought we'd be doing serious revenue online. The AI recommendations alone turned browsers into buyers — people were adding things to their cart I didn't even suggest.",
    author: "Marcus T., Owner",
    color: "#c9a84c",
  },
  {
    id: "chatbot",
    title: "The Chatbot That Replaced a Part-Time Hire",
    category: "AI Integration + Automation",
    client: "Brooklyn B2B Startup",
    challenge:
      "A fast-growing SaaS startup was drowning in inbound leads — most were unqualified, but sorting them was eating 20+ hours of their sales team's week. They needed a smarter front door.",
    solution:
      "We built a custom AI lead qualification chatbot trained on their product, pricing tiers, and ideal customer profile. It pre-qualifies leads 24/7, books demos directly into the founder's calendar, and flags high-intent prospects in real time.",
    techStack: ["Claude API", "React", "Calendly API", "Webhooks"],
    timeline: "12 days",
    results: [
      { metric: "Hours Saved Per Week", before: "0", after: "22 hrs" },
      { metric: "Lead-to-Demo Rate", before: "8%", after: "34%" },
      { metric: "Response Time", before: "4–6 hours", after: "Instant" },
    ],
    testimonial:
      "The chatbot qualifies leads better than we did manually. It asks the right questions, filters the time-wasters, and hands us the good ones ready to close. It paid for itself in week one.",
    author: "Priya N., Co-Founder",
    color: "#0a0a0a",
  },
  {
    id: "redesign",
    title: "A Redesign That Turned Google Searches Into Revenue",
    category: "Web Design + SEO",
    client: "Local Home Services Business",
    challenge:
      "A well-reviewed plumbing and HVAC company had built their reputation on referrals — but their website was a decade old, mobile-unfriendly, and invisible to search engines. New customers couldn't find them.",
    solution:
      "We rebuilt their site from the ground up with a performance-first architecture, local SEO structure, trust-building social proof, and a frictionless quote request flow that drove calls and form fills immediately.",
    techStack: ["React", "Vite", "Structured Data", "Google Analytics 4"],
    timeline: "21 days",
    results: [
      { metric: "Monthly Organic Traffic", before: "310 visits", after: "1,620 visits" },
      { metric: "Monthly Revenue Added", before: "Baseline", after: "+$25,000" },
      { metric: "Quote Requests / Month", before: "6", after: "41" },
    ],
    testimonial:
      "We went from getting maybe one web lead a week to having our phones ring off the hook. I've had to hire two new guys just to keep up. Best investment I've made in the business.",
    author: "Danny R., Owner",
    color: "#ede9e1",
  },
];
