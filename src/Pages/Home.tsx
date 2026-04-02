import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'
import { useTrafficTracker } from '../hook/useTrafficTracker'

// ─── SECTION 1: Hero ─────────────────────────────────────────────────────────
const TERMINAL_LINES = [
  '> initializing batistack.ai...',
  '> scanning your market...',
  '> loading conversion engine...',
  '✓ your new website is ready.',
  '✓ AI assistant deployed.',
  '✓ leads incoming.',
]

function TerminalBlock() {
  const [displayed, setDisplayed] = useState('')
  const fullText = TERMINAL_LINES.join('\n')
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const indexRef = useRef(0)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (indexRef.current >= fullText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        return
      }
      indexRef.current += 1
      setDisplayed(fullText.slice(0, indexRef.current))
    }, 20)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [fullText])

  return (
    <div style={styles.terminal}>
      <div style={styles.terminalChrome}>
        <span style={{ ...styles.dot, background: '#ff5f57' }} />
        <span style={{ ...styles.dot, background: '#febc2e' }} />
        <span style={{ ...styles.dot, background: '#28c840' }} />
      </div>
      <pre style={styles.terminalText}>
        {displayed}
        <span style={styles.cursor}>|</span>
      </pre>
    </div>
  )
}

function HeroSection() {
  const reduced = useReducedMotion()
  const words = [
    { text: 'WE BUILD', color: 'var(--bone)' },
    { text: 'WEBSITES', color: 'var(--bone)' },
    { text: 'THAT CLOSE', color: 'var(--gold)' },
  ]

  return (
    <section className="home-hero-section" style={styles.hero}>
      <div className="section-container home-hero-inner" style={styles.heroInner}>
        {/* Left */}
        <div style={styles.heroLeft}>
          <p style={styles.heroLabel}>NEW YORK CITY · EST. 2024</p>

          <div>
            {words.map((w, i) => (
              <motion.div
                key={w.text}
                initial={reduced ? {} : { opacity: 0, y: 60 }}
                animate={reduced ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: 'easeOut' }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(52px, 13vw, 140px)',
                  lineHeight: 0.95,
                  color: w.color,
                }}
              >
                {w.text}
              </motion.div>
            ))}
          </div>

          <p style={styles.heroSub}>
            Custom web design and AI integration for businesses that refuse to be ignored.
          </p>

          <div style={styles.heroCTAs}>
            <Link
              to="/contact"
              className="btn-primary"
              data-cursor="cta"
              style={{ fontSize: 18 }}
            >
              START YOUR PROJECT →
            </Link>
            <Link to="/services" className="btn-ghost" style={{ fontSize: 18 }}>
              SEE OUR WORK
            </Link>
          </div>

          <div style={styles.heroStats}>
            {[
              { num: '48H', label: 'Average response time' },
              { num: '$0', label: 'Hidden fees' },
              { num: '100%', label: 'Custom built' },
            ].map((s) => (
              <div key={s.num}>
                <div style={styles.statNum}>{s.num}</div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="home-hero-right" style={styles.heroRight}>
          <TerminalBlock />
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 2: Marquee ───────────────────────────────────────────────────────
const ROW1 =
  'WEB DESIGN · MOBILE APPS · AI INTEGRATION · REACT & NEXT.JS · AUTOMATION · NYC BASED'
const ROW2 =
  'LEAD GENERATION · CONVERSION FOCUSED · CUSTOM BUILT · FAST DELIVERY · NO TEMPLATES · YOUR GROWTH'

function MarqueeStrip() {
  const repeat = (text: string) => Array(3).fill(text).join('  ·  ')
  return (
    <div style={{ background: 'var(--gold)', overflow: 'hidden' }}>
      {[
        { text: ROW1, reverse: false },
        { text: ROW2, reverse: true },
      ].map((row, i) => (
        <div
          key={i}
          style={{ padding: '14px 0', overflow: 'hidden' }}
        >
          <div
            className={`marquee-track${row.reverse ? ' marquee-track-reverse' : ''}`}
          >
            {Array(3)
              .fill(null)
              .map((_, j) => (
                <span key={j} className="marquee-item">
                  {repeat(row.text)}
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── SECTION 3: Services ──────────────────────────────────────────────────────
const SERVICES = [
  {
    num: '01',
    name: 'Custom Web Design',
    desc: 'From landing pages to full platforms.',
    tags: ['React', 'TypeScript', 'Vite'],
  },
  {
    num: '02',
    name: 'Mobile Applications',
    desc: 'iOS and Android, built in React Native.',
    tags: ['React Native', 'Expo'],
  },
  {
    num: '03',
    name: 'AI Integration',
    desc: 'Make your site work smarter.',
    tags: ['Claude API', 'OpenAI'],
  },
  {
    num: '04',
    name: 'Website Redesign',
    desc: 'Turn an outdated site into a revenue machine.',
    tags: ['Audit', 'UX', 'Migration'],
  },
]

function ServicesSection() {
  const reduced = useReducedMotion()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section style={{ background: 'var(--void)', padding: '120px 0' }}>
      <div className="section-container">
        <p style={{ ...styles.sectionMarker, color: 'var(--gold-dim)' }}>01 / WHAT WE BUILD</p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 64, fontStyle: 'italic', color: 'var(--bone)', fontWeight: 400 }}>
          Every pixel has a job to do.
        </h2>

        <div style={{ marginTop: 80 }}>
          {SERVICES.map((svc, i) => {
            const isHovered = hovered === svc.num
            return (
              <motion.div
                key={svc.num}
                initial={reduced ? {} : { opacity: 0, y: 40 }}
                whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onMouseEnter={() => setHovered(svc.num)}
                onMouseLeave={() => setHovered(null)}
                className="home-svc-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '40px 0',
                  borderBottom: '1px solid var(--smoke)',
                  background: isHovered ? 'var(--ash)' : 'transparent',
                  transition: 'background 0.3s',
                  paddingLeft: isHovered ? 16 : 0,
                  paddingRight: isHovered ? 16 : 0,
                }}
              >
                <span
                  className="svc-num-col"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(64px, 10vw, 160px)',
                    lineHeight: 1,
                    marginRight: 40,
                    color: isHovered ? 'var(--gold-dim)' : 'var(--smoke)',
                    transition: 'color 0.3s',
                    flexShrink: 0,
                  }}
                >
                  {svc.num}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: 44, color: 'var(--bone)', marginBottom: 8, fontWeight: 400 }}>
                    {svc.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--mist)' }}>
                    {svc.desc}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                    {svc.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 24,
                      color: 'var(--gold)',
                      transition: 'transform 0.2s',
                      transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                      display: 'inline-block',
                    }}
                  >
                    →
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 4: Social Proof ──────────────────────────────────────────────────
function SocialProofSection() {
  const reduced = useReducedMotion()
  const stats = [
    { stat: '14 Days', label: 'Average delivery time' },
    { stat: '3×', label: 'Average traffic increase' },
    { stat: '24/7', label: 'AI works while you don\'t' },
  ]

  return (
    <section style={{ background: 'var(--bone)', padding: '120px 0' }}>
      <div className="section-container">
        <p style={{ ...styles.sectionMarker, color: 'var(--gold-dim)' }}>02 / WHY US</p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 56, color: 'var(--void)', fontWeight: 400, maxWidth: 700 }}>
          The agency that treats your ROI like it's our paycheck.
        </h2>

        <div className="home-stats-row" style={{ display: 'flex', marginTop: 60, borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.stat}
              initial={reduced ? {} : { opacity: 0, y: 40 }}
              whileInView={reduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                flex: 1,
                padding: 40,
                borderRight: i < stats.length - 1 ? '1px solid #ccc' : 'none',
              }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 80, color: 'var(--void)', lineHeight: 1 }}>
                {s.stat}
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#555', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: 8 }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="home-why-cols" style={{ display: 'flex', gap: 60, marginTop: 80 }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 700, color: 'var(--void)' }}>
              We don't do templates. We don't do cookie-cutter.
            </h3>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.7, color: '#444' }}>
              Every Batistack project starts with a real conversation about your goals, your customers, and what's actually holding back your growth. Then we build something that works.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 5: AI Spotlight ──────────────────────────────────────────────────
const AI_FEATURES = [
  {
    name: 'AI Chat Assistant',
    desc: 'Trained on your business, captures leads 24/7',
    icon: <path d="M2 2h12v8H7l-5 4V2z" stroke="currentColor" strokeWidth="1.5" fill="none" />,
  },
  {
    name: 'Smart Lead Scoring',
    desc: 'AI qualifies leads before they hit your inbox',
    icon: <path d="M12 2l2 4-8 6-4-6 10-4z" stroke="currentColor" strokeWidth="1.5" fill="none" />,
  },
  {
    name: 'Workflow Automation',
    desc: 'Booking, follow-ups, CRM — fully automated',
    icon: <path d="M2 8h4M10 8h4M8 4v8" stroke="currentColor" strokeWidth="1.5" />,
  },
  {
    name: 'SEO Intelligence',
    desc: 'AI content and keyword tools built into your site',
    icon: (
      <>
        <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
]

function AISpotlightSection() {
  const reduced = useReducedMotion()

  return (
    <section style={{ background: 'var(--void)', padding: '120px 0' }}>
      <div className="section-container">
        <p style={{ ...styles.sectionMarker, color: 'var(--gold-dim)' }}>03 / AI INTEGRATION</p>
        <div className="home-ai-flex" style={{ display: 'flex', gap: 80 }}>
          {/* Rotated label */}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 12,
                color: 'var(--gold-dim)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                transform: 'rotate(-90deg)',
                transformOrigin: 'center',
                whiteSpace: 'nowrap',
                display: 'block',
              }}
            >
              ARTIFICIAL INTELLIGENCE
            </span>
          </div>

          {/* Content */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 64, color: 'var(--bone)', lineHeight: 1.1, fontWeight: 400 }}>
              Your website should work harder than your team.
            </h2>

            <div style={{ marginTop: 64 }}>
              {AI_FEATURES.map((feat, i) => (
                <motion.div
                  key={feat.name}
                  initial={reduced ? {} : { opacity: 0, y: 40 }}
                  whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 24,
                    padding: '28px 0',
                    borderBottom: '1px solid var(--smoke)',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      border: '1px solid var(--smoke)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" style={{ color: 'var(--gold)' }}>
                      {feat.icon}
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 600, color: 'var(--bone)' }}>
                      {feat.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--mist)', marginTop: 4 }}>
                      {feat.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SECTION 6: Process ───────────────────────────────────────────────────────
const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We learn your business, your customers, and your goals in a 30-min call. No jargon, no fluff — just clarity.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We design in the open. You see wireframes and mockups early and often. No surprises at the end.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'We build fast. Most projects are in your hands within 14 days. TypeScript, React, performance-first.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: "Go live with SEO config, analytics, and a handoff so clean you'll never need to call us for basic changes.",
  },
]

function ProcessSection() {
  const reduced = useReducedMotion()
  const [openStep, setOpenStep] = useState<number | null>(null)

  return (
    <section style={{ background: 'var(--void)', padding: '120px 0' }}>
      <div className="section-container">
        <p style={{ ...styles.sectionMarker, color: 'var(--gold-dim)' }}>04 / HOW WE WORK</p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 56, color: 'var(--bone)', fontWeight: 400 }}>
          Four steps from idea to live.
        </h2>

        <div style={{ marginTop: 64 }}>
          {STEPS.map((step, i) => {
            const isOpen = openStep === i
            return (
              <div key={step.num} style={{ borderBottom: '1px solid var(--smoke)' }}>
                <button
                  onClick={() => setOpenStep(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '32px 0',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 64, color: 'var(--gold)', width: 80, flexShrink: 0 }}>
                    {step.num}
                  </span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 36, color: 'var(--bone)', flex: 1, fontWeight: 400 }}>
                    {step.title}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--gold)' }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      initial={reduced ? {} : { height: 0, opacity: 0 }}
                      animate={reduced ? {} : { height: 'auto', opacity: 1 }}
                      exit={reduced ? {} : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="process-step-desc" style={{ fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--mist)', maxWidth: 600, lineHeight: 1.7, padding: '0 0 32px 104px' }}>
                        {step.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--mist)', marginTop: 40 }}>
          Most projects ship in 14–21 days.
        </p>
      </div>
    </section>
  )
}

// ─── SECTION 7: Pricing ───────────────────────────────────────────────────────
const PLANS = [
  {
    tier: 'STARTER',
    price: '$1,200',
    tagline: 'Launch fast, look sharp.',
    features: ['5-page responsive site', 'Contact form + SEO', 'Mobile-first', '14-day delivery'],
    cta: 'GET STARTED',
    featured: false,
  },
  {
    tier: 'GROWTH',
    price: '$2,800',
    tagline: 'The full conversion machine.',
    features: ['10-page custom site', 'AI chat assistant', 'Lead automation', 'Analytics setup', '21-day delivery'],
    cta: 'START YOUR PROJECT',
    featured: true,
  },
  {
    tier: 'ENTERPRISE',
    price: 'Custom',
    tagline: 'Full platform, built to scale.',
    features: ['Unlimited pages', 'Advanced AI integration', 'Custom backend', 'Retainer available', 'Timeline: TBD'],
    cta: "LET'S TALK",
    featured: false,
  },
]

function PricingSection() {
  const reduced = useReducedMotion()

  return (
    <section style={{ background: 'var(--ash)', padding: '120px 0' }}>
      <div className="section-container">
        <p style={{ ...styles.sectionMarker, color: 'var(--gold-dim)' }}>05 / INVESTMENT</p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 56, color: 'var(--bone)', fontWeight: 400 }}>
          Transparent pricing. No surprises.
        </h2>
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 16, color: 'var(--gold)', marginTop: 12 }}>
          Introductory rates — limited spots at these prices
        </p>

        <div className="home-pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, marginTop: 60, border: '1px solid var(--smoke)' }}>
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.tier}
              initial={reduced ? {} : { opacity: 0, y: 40 }}
              whileInView={reduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: plan.featured ? 'var(--gold)' : 'var(--void)',
                padding: '48px 40px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {plan.featured && (
                <span style={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  fontFamily: 'var(--font-sans)',
                  fontSize: 9,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  background: 'var(--void)',
                  color: 'var(--gold)',
                  padding: '4px 10px',
                }}>
                  MOST POPULAR
                </span>
              )}

              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.2em', color: plan.featured ? 'var(--void)' : 'var(--mist)', marginBottom: 16 }}>
                {plan.tier}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 72, color: plan.featured ? 'var(--void)' : 'var(--bone)', lineHeight: 1 }}>
                {plan.price}
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: plan.featured ? 'var(--void)' : 'var(--mist)', marginBottom: 32, marginTop: 8 }}>
                {plan.tagline}
              </div>

              <ul style={{ listStyle: 'none', marginBottom: 'auto', paddingBottom: 32 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: plan.featured ? 'var(--void)' : 'var(--bone)', lineHeight: 2 }}>
                    <span style={{ color: plan.featured ? 'var(--void)' : 'var(--gold-dim)', marginRight: 6 }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div style={{ borderTop: `1px solid ${plan.featured ? 'rgba(8,8,8,0.2)' : 'var(--smoke)'}`, paddingTop: 24, marginTop: 'auto' }}>
                <Link
                  to="/contact"
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    fontFamily: 'var(--font-display)',
                    fontSize: 16,
                    padding: 16,
                    textDecoration: 'none',
                    border: plan.featured ? 'none' : '1px solid var(--smoke)',
                    background: plan.featured ? 'var(--void)' : 'transparent',
                    color: plan.featured ? 'var(--gold)' : 'var(--bone)',
                    letterSpacing: '0.08em',
                    transition: 'opacity 0.2s',
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--mist)', marginTop: 40 }}>
          Not sure which plan fits?{' '}
          <Link to="/contact" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
            Let's figure it out together →
          </Link>
        </p>
      </div>
    </section>
  )
}

// ─── SECTION 8: Contact ───────────────────────────────────────────────────────
type FormState = 'idle' | 'sending' | 'success' | 'error'

function ContactSection() {
  const reduced = useReducedMotion()
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const [fields, setFields] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('sending')
    setErrorMsg('')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: fields.name,
          from_email: fields.email,
          service: fields.service,
          budget: fields.budget,
          message: fields.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setFormState('success')
    } catch {
      setFormState('error')
      setErrorMsg('Something went wrong. Please try again or email us directly.')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--smoke)',
    padding: '12px 0',
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    color: 'var(--bone)',
    outline: 'none',
    transition: 'border-color 0.2s',
    appearance: 'none',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-sans)',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: 'var(--mist)',
    marginBottom: 8,
  }

  return (
    <section style={{ background: 'var(--ash)', padding: '120px 0' }}>
      <div className="section-container">
        <p style={{ ...styles.sectionMarker, color: 'var(--gold-dim)' }}>06 / LET'S BUILD</p>

        <h2
          className="home-contact-headline"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(48px, 10vw, 120px)',
            color: 'var(--bone)',
            lineHeight: 1,
            whiteSpace: 'pre-line',
            marginBottom: 80,
          }}
        >
          {'READY WHEN\nYOU ARE.'}
        </h2>

        <div className="home-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          {/* Left */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: -40 }}
            whileInView={reduced ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--mist)' }}>
              No gatekeepers. No account managers. Just results.
            </p>

            <ul style={{ listStyle: 'none', marginTop: 40 }}>
              {[
                'Fast turnaround — most sites ship in 2–3 weeks',
                'Direct communication — you work with the builder, not a middleman',
                'AI-first approach — every site can have intelligence built in',
                'NYC based — available for in-person meetings',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', gap: 16, marginBottom: 20, alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--gold)', flexShrink: 0, marginTop: 2 }}>✓</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--bone)', lineHeight: 1.5 }}>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 48, fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--mist)' }}>
              <a
                href="mailto:elisaul@batistack.com"
                style={{ color: 'var(--gold)', textDecoration: 'none', display: 'block', marginBottom: 8 }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                elisaul@batistack.com
              </a>
              <span>New York City, NY</span>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: 40 }}
            whileInView={reduced ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {formState === 'success' ? (
              <div style={{ textAlign: 'center', paddingTop: 60 }}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ margin: '0 auto 24px', display: 'block' }}>
                  <circle cx="24" cy="24" r="23" stroke="var(--gold)" strokeWidth="1.5" />
                  <path d="M14 24l8 8 12-16" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 24, color: 'var(--bone)' }}>
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <div style={{ marginBottom: 32 }}>
                  <label style={labelStyle}>Name</label>
                  <input
                    name="name"
                    required
                    value={fields.name}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--smoke)')}
                  />
                </div>

                <div style={{ marginBottom: 32 }}>
                  <label style={labelStyle}>Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={fields.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--smoke)')}
                  />
                </div>

                <div style={{ marginBottom: 32 }}>
                  <label style={labelStyle}>Service</label>
                  <select
                    name="service"
                    value={fields.service}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: 'none' as const }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--smoke)')}
                  >
                    <option value="" style={{ background: 'var(--ash)' }}>Select a service</option>
                    <option value="Custom Web Design" style={{ background: 'var(--ash)' }}>Custom Web Design</option>
                    <option value="Mobile App" style={{ background: 'var(--ash)' }}>Mobile App</option>
                    <option value="AI Integration" style={{ background: 'var(--ash)' }}>AI Integration</option>
                    <option value="Website Redesign" style={{ background: 'var(--ash)' }}>Website Redesign</option>
                    <option value="Other" style={{ background: 'var(--ash)' }}>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: 32 }}>
                  <label style={labelStyle}>Budget</label>
                  <select
                    name="budget"
                    value={fields.budget}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: 'none' as const }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--smoke)')}
                  >
                    <option value="" style={{ background: 'var(--ash)' }}>Select a budget range</option>
                    <option value="Under $2,000" style={{ background: 'var(--ash)' }}>Under $2,000</option>
                    <option value="$2,000–$5,000" style={{ background: 'var(--ash)' }}>$2,000–$5,000</option>
                    <option value="$5,000–$15,000" style={{ background: 'var(--ash)' }}>$5,000–$15,000</option>
                    <option value="$15,000+" style={{ background: 'var(--ash)' }}>$15,000+</option>
                    <option value="Not sure yet" style={{ background: 'var(--ash)' }}>Not sure yet</option>
                  </select>
                </div>

                <div style={{ marginBottom: 32 }}>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={fields.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = 'var(--smoke)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  style={{
                    width: '100%',
                    fontFamily: 'var(--font-display)',
                    fontSize: 20,
                    background: 'var(--gold)',
                    color: 'var(--void)',
                    border: 'none',
                    padding: 20,
                    cursor: formState === 'sending' ? 'not-allowed' : 'pointer',
                    opacity: formState === 'sending' ? 0.7 : 1,
                    letterSpacing: '0.08em',
                  }}
                >
                  {formState === 'sending' ? 'SENDING...' : 'SEND IT →'}
                </button>

                {formState === 'error' && (
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#e05c5c', marginTop: 12 }}>
                    {errorMsg}
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Shared style objects ─────────────────────────────────────────────────────
const styles = {
  hero: {
    minHeight: '100vh',
    background: 'var(--void)',
    paddingTop: 80,
    display: 'flex',
    alignItems: 'center',
  } as React.CSSProperties,

  heroInner: {
    display: 'grid',
    gridTemplateColumns: '55% 45%',
    gap: 60,
    alignItems: 'center',
  } as React.CSSProperties,

  heroLeft: {
    display: 'flex',
    flexDirection: 'column',
  } as React.CSSProperties,

  heroRight: {
    display: 'flex',
    alignItems: 'center',
  } as React.CSSProperties,

  heroLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: 10,
    letterSpacing: '0.2em',
    color: 'var(--gold)',
    textTransform: 'uppercase',
    marginBottom: 32,
  } as React.CSSProperties,

  heroSub: {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontSize: 'clamp(16px, 2.5vw, 22px)',
    color: 'var(--mist)',
    maxWidth: 460,
    margin: '32px 0',
  } as React.CSSProperties,

  heroCTAs: {
    display: 'flex',
    gap: 20,
    flexWrap: 'wrap',
  } as React.CSSProperties,

  heroStats: {
    display: 'flex',
    gap: 40,
    marginTop: 48,
    flexWrap: 'wrap',
  } as React.CSSProperties,

  statNum: {
    fontFamily: 'var(--font-display)',
    fontSize: 40,
    color: 'var(--gold)',
  } as React.CSSProperties,

  statLabel: {
    fontFamily: 'var(--font-sans)',
    fontSize: 11,
    color: 'var(--mist)',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
  } as React.CSSProperties,

  terminal: {
    background: 'var(--ash)',
    border: '1px solid var(--smoke)',
    borderRadius: 4,
    padding: 32,
    width: '100%',
  } as React.CSSProperties,

  terminalChrome: {
    display: 'flex',
    gap: 6,
    marginBottom: 20,
  } as React.CSSProperties,

  dot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    display: 'inline-block',
  } as React.CSSProperties,

  terminalText: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: 'var(--gold)',
    lineHeight: 1.8,
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  } as React.CSSProperties,

  cursor: {
    display: 'inline-block',
    animation: 'blink 1s infinite',
    color: 'var(--gold)',
  } as React.CSSProperties,

  sectionMarker: {
    fontFamily: 'var(--font-sans)',
    fontSize: 11,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    marginBottom: 24,
  } as React.CSSProperties,
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export default function Home() {
  useTrafficTracker('page_view', '/')

  return (
    <HelmetProvider>
      <Helmet>
        <title>Batistack — Web Design & AI Integration | NYC</title>
        <meta
          name="description"
          content="Custom web design and AI integration for NYC businesses. Fast delivery, transparent pricing."
        />
        <meta
          name="keywords"
          content="web design NYC, AI integration, custom website New York, web developer NYC, AI chatbot, React developer NYC"
        />
        <meta property="og:title" content="Batistack — Web Design & AI Integration | NYC" />
        <meta
          property="og:description"
          content="Custom web design and AI integration for NYC businesses. Fast delivery, transparent pricing."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Batistack',
            description: 'Custom web design and AI integration for NYC businesses.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'New York',
              addressRegion: 'NY',
              addressCountry: 'US',
            },
          })}
        </script>
      </Helmet>

      <HeroSection />
      <MarqueeStrip />
      <ServicesSection />
      <SocialProofSection />
      <AISpotlightSection />
      <ProcessSection />
      <PricingSection />
      <ContactSection />

      {/* ── Global responsive overrides ── */}
      <style>{`
        /* ── Section container ── */
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 60px;
        }

        /* ── Hero ── */
        .home-hero-inner {
          grid-template-columns: 55% 45%;
          gap: 60px;
          align-items: center;
        }

        /* ── Services ── */
        .home-svc-num {
          font-size: clamp(100px, 12vw, 160px);
        }

        /* ── Pricing ── */
        .home-pricing-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        /* ── Contact ── */
        .home-contact-grid {
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }

        /* ── Marquee reverse ── */
        .marquee-track-reverse {
          animation-direction: reverse;
        }

        /* ═══════════════════════════════
           TABLET  ≤ 900px
           ═══════════════════════════════ */
        @media (max-width: 900px) {
          .section-container {
            padding: 0 28px;
          }

          /* Hero: stack cols, hide terminal, reduce padding */
          .home-hero-section {
            padding-top: 100px !important;
            padding-bottom: 60px !important;
            align-items: flex-start !important;
          }
          .home-hero-inner {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .home-hero-right {
            display: none !important;
          }

          /* Service rows: compress */
          .home-svc-row {
            padding: 24px 0 !important;
          }
          .svc-num-col {
            font-size: clamp(48px, 10vw, 80px) !important;
            margin-right: 20px !important;
          }

          /* Stats: wrap */
          .home-stats-row {
            flex-wrap: wrap !important;
          }
          .home-stats-row > * {
            flex: 1 1 calc(50% - 1px) !important;
            min-width: 140px !important;
            padding: 24px 20px !important;
            border-right: none !important;
            border-bottom: 1px solid #ccc !important;
          }

          /* Why-us text cols */
          .home-why-cols {
            flex-direction: column !important;
            gap: 32px !important;
          }

          /* AI section h2 */
          .home-ai-flex h2 {
            font-size: clamp(32px, 6vw, 56px) !important;
          }

          /* AI flex: hide rotated label, stack content */
          .home-ai-flex {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .home-ai-flex > div:first-child {
            display: none !important;
          }

          /* Pricing: single column */
          .home-pricing-grid {
            grid-template-columns: 1fr !important;
          }

          /* Contact headline */
          .home-contact-grid ~ * .contact-heading,
          .home-contact-headline {
            font-size: clamp(48px, 10vw, 80px) !important;
            white-space: normal !important;
          }

          /* Contact: single column */
          .home-contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }

          /* Sections: reduce padding on tablet */
          section {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
        }

        /* ═══════════════════════════════
           MOBILE  ≤ 600px
           ═══════════════════════════════ */
        @media (max-width: 600px) {
          .section-container {
            padding: 0 20px;
          }

          /* Hero */
          .home-hero-section {
            min-height: auto !important;
            padding-top: 96px !important;
            padding-bottom: 48px !important;
          }

          /* Service numbers: smaller on phone */
          .svc-num-col {
            font-size: 56px !important;
            margin-right: 16px !important;
          }

          /* Service tags: hide on very small screens */
          .home-svc-row > div:last-child {
            display: none !important;
          }

          /* Stats: fully stacked */
          .home-stats-row {
            flex-direction: column !important;
          }
          .home-stats-row > * {
            flex: 1 1 100% !important;
            border-right: none !important;
          }

          /* Pricing padding tighter */
          .home-pricing-grid > * {
            padding: 32px 24px !important;
          }

          /* Process step: reduce indent for desc */
          .process-step-desc {
            padding-left: 0 !important;
          }

          /* Sections: reduce padding further */
          section {
            padding-top: 64px !important;
            padding-bottom: 64px !important;
          }
        }

        /* ── Cursor blink ── */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </HelmetProvider>
  )
}
