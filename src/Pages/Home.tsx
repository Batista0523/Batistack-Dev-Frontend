//-----------------------------------------------HOME 1------------------------------------------------------------------

// import { useTrafficTracker } from "../hook/useTrafficTracker";
// import images from "../images";
// import { Container, Row, Col } from "react-bootstrap";
// import FeatureSection from "../components/FeatureSection";
// import { motion } from "framer-motion";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { Helmet } from "react-helmet-async";
// import Footer from "../components/Footer";
// import AnimatedButton from "../components/Button";
// import InviteVoiceAgent from "../components/InviteBtn";

// function Home() {
//   useTrafficTracker("page_view", "/");

//   const coreFeatures = [
//     {
//       icon: "bi-rocket",
//       title: "Custom Websites That Convert",
//       desc: "High-performance sites built for speed, SEO ranking, and real lead generation.",
//       color: "text-primary",
//     },
//     {
//       icon: "bi-lock-fill",
//       title: "Security & Stability",
//       desc: "From database to payment flows, every layer is secured using industry-standard practices.",
//       color: "text-success",
//     },
//     {
//       icon: "bi-lightning-charge-fill",
//       title: "Launch Fast. Grow Faster.",
//       desc: "Clean, modern code that ships in weeks and scales as your business grows.",
//       color: "text-warning",
//     },
//   ];

//   const extraValues = [
//     {
//       title: "Fully Custom Code",
//       desc: "No templates. Only handcrafted, scalable code designed for your business.",
//       icon: "bi-code-slash",
//     },
//     {
//       title: "Professional Execution",
//       desc: "Every workflow and visual element is intentional and optimized.",
//       icon: "bi-layout-text-window-reverse",
//     },
//     {
//       title: "Conversion-Focused",
//       desc: "Pages designed to boost leads, calls, and sales.",
//       icon: "bi-bullseye",
//     },
//     {
//       title: "We Work as Partners",
//       desc: "Your goals become our development roadmap with real communication.",
//       icon: "bi-people-fill",
//     },
//     {
//       title: "Modern Tech Stack",
//       desc: "React, TypeScript, Node, PostgreSQL, and AI built for speed and scalability.",
//       icon: "bi-terminal-fill",
//     },
//     {
//       title: "Transparent Process",
//       desc: "Clear steps, predictable pricing, and honest timelines.",
//       icon: "bi-eye-fill",
//     },
//   ];

//   const aiCoreFeatures = [
//     {
//       icon: "bi-chat-dots",
//       title: "AI Chat Assistants",
//       desc: "Custom-trained chatbots that answer questions, pre-qualify leads, and convert 24/7.",
//       color: "text-primary",
//     },
//     {
//       icon: "bi-robot",
//       title: "AI Voice Agents",
//       desc: "Phone AI that talks, books appointments, and supports customers like a real human.",
//       color: "text-success",
//     },
//     {
//       icon: "bi-bar-chart-line",
//       title: "AI Insights & Automation",
//       desc: "Track visitor actions and automate tasks with smart analytics.",
//       color: "text-warning",
//     },
//   ];

//   const aiExtraFeatures = [
//     {
//       title: "Custom-Trained AI",
//       desc: "We train your AI with your tone, logic, and internal knowledge.",
//       icon: "bi-cpu-fill",
//     },
//     {
//       title: "Multilingual AI",
//       desc: "Serve users in English and Spanish with natural, clear responses.",
//       icon: "bi-translate",
//     },
//     {
//       title: "Learns With Use",
//       desc: "Your AI improves each week as interactions increase.",
//       icon: "bi-lightbulb-fill",
//     },
//     {
//       title: "Omnichannel Integration",
//       desc: "Website, phone, SMS, CRM, one AI brain across everything.",
//       icon: "bi-plug-fill",
//     },
//     {
//       title: "24/7 Availability",
//       desc: "Never miss a customer again, day or night.",
//       icon: "bi-clock-history",
//     },
//     {
//       title: "Security-First AI",
//       desc: "Encrypted pipelines and safe data handling.",
//       icon: "bi-shield-lock-fill",
//     },
//   ];

//   const workSteps = [
//     {
//       title: "Strategize",
//       icon: "bi-lightbulb",
//       desc: "We define your goals, audit your systems, and build a clear roadmap.",
//     },
//     {
//       title: "Design & Build",
//       icon: "bi-layout-text-window",
//       desc: "From wireframes to production-ready code, engineered for real results.",
//     },
//     {
//       title: "Launch & Scale",
//       icon: "bi-rocket-takeoff",
//       desc: "We monitor performance, optimize, and help you grow month after month.",
//     },
//   ];

//   function Divider() {
//     return (
//       <div className="w-100 d-flex justify-content-center">
//         <div
//           style={{
//             height: "3px",
//             width: "80px",
//             background: "#0d6efd",
//             borderRadius: "10px",
//             margin: "3rem 0",
//           }}
//         ></div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>
//           Batistack Development | NYC Web Design, AI Agents & Application Help
//         </title>
//         <meta
//           name="description"
//           content="Batistack builds high-performance websites, AI voice bots, chatbots, and NYC application services for businesses and families in Brooklyn, Manhattan, Queens, and The Hamptons."
//         />
//         <meta
//           name="keywords"
//           content="NYC web design, React developer NYC, TypeScript developer, AI chatbots NYC, AI voice agents NYC, custom software Manhattan, Brooklyn web developer, application help NYC, Node developer NYC, AI automation NYC"
//         />
//         <meta
//           property="og:title"
//           content="Batistack Development | Web & AI Solutions Built in NYC"
//         />
//         <meta
//           property="og:description"
//           content="Web development, AI automation, and application support for New Yorkers. Get a custom-built system that brings real leads and results."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://batistack.com/" />
//         <meta
//           property="og:image"
//           content="https://batistack.com/assets/og-image.jpg"
//         />
//         <link rel="canonical" href="https://batistack.com/" />
//         <meta name="robots" content="index,follow" />
//         <script type="application/ld+json">
//           {`
//           {
//             "@context": "https://schema.org",
//             "@type": "LocalBusiness",
//             "name": "Batistack Development",
//             "image": "https://batistack.com/assets/og-image.jpg",
//             "url": "https://batistack.com",
//             "telephone": "+1-929-733-1600",
//             "address": {
//               "@type": "PostalAddress",
//               "addressLocality": "New York",
//               "addressRegion": "NY",
//               "postalCode": "11201",
//               "addressCountry": "US"
//             },
//             "areaServed": [
//               "Brooklyn",
//               "Manhattan",
//               "Queens",
//               "The Hamptons",
//               "New York City"
//             ],
//             "description": "Batistack is an NYC-based web development and AI automation studio that builds custom websites, AI agents, and application workflows for local businesses and residents.",
//             "sameAs": [
//               "https://www.linkedin.com/in/elisaul-batista/"
//             ]
//           }
//         `}
//         </script>
//       </Helmet>

//       <div
//         style={{ backgroundColor: "#000", color: "#fff", overflowX: "hidden" }}
//       >
//         <section className="py-5 min-vh-100 d-flex align-items-center bg-black">
//           <Container>
//             <Row className="align-items-center g-5 flex-column-reverse flex-lg-row">
//               <Col lg={6} className="text-center text-lg-start">
//                 <motion.h1
//                   className="fw-bold display-4 text-white mb-3"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   Web, AI & Applications{" "}
//                   <span className="text-primary">Built For New York.</span>
//                 </motion.h1>

//                 <motion.p
//                   className="fs-5 text-light mb-4"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.1 }}
//                 >
//                   We build high-performance websites, AI chat and voice agents,
//                   and help New Yorkers complete complex applications with
//                   precision and real human follow-up. One team for your entire
//                   digital system.
//                 </motion.p>

//                 <motion.div
//                   className="d-flex gap-3 flex-wrap"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.15 }}
//                 >
//                   <AnimatedButton text="Book a Free Call" href="/contact" />
//                   <AnimatedButton text="Explore AI Tools" href="/services" />
//                   <AnimatedButton
//                     text="Application Center"
//                     href="/applications"
//                   />
//                 </motion.div>
//               </Col>

//               <Col lg={6} className="text-center">
//                 <motion.div
//                   className="rounded-circle border border-primary mx-auto shadow-lg"
//                   style={{
//                     width: 340,
//                     height: 340,
//                     overflow: "hidden",
//                     background: "#fff",
//                   }}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.7 }}
//                 >
//                   <img
//                     src={images.logo2}
//                     alt="Batistack Logo"
//                     className="w-100 h-100"
//                     style={{ objectFit: "cover" }}
//                   />
//                 </motion.div>
//                 <div className="mt-4">
//                   <InviteVoiceAgent />
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <Divider />

//         <section className="py-5 bg-black">
//           <Container>
//             <motion.h2
//               className="fw-bold text-white text-center display-6 mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               Industries We Serve
//             </motion.h2>
//             <motion.p
//               className="text-light text-center mb-5"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               We help local businesses, families, entrepreneurs, and service
//               professionals across all five NYC boroughs launch, grow, and
//               automate their operations.
//             </motion.p>

//             <Row className="g-4 text-center">
//               {[
//                 "Contractors & HVAC",
//                 "Restaurants & Local Shops",
//                 "Entrepreneurs & Startups",
//                 "Immigrants & NYC Residents",
//                 "Real Estate & Property Managers",
//                 "Online Stores & E-commerce",
//               ].map((industry, idx) => (
//                 <Col md={4} key={idx}>
//                   <motion.div
//                     className="p-3 bg-dark rounded-4 border border-secondary h-100"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: idx * 0.05 }}
//                   >
//                     <h5 className="text-white fw-bold">{industry}</h5>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         </section>

//         <Divider />

//         <section className="py-5 bg-dark">
//           <Container>
//             <motion.h2
//               className="fw-bold text-white text-center display-6 mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               Modern Tech Stack
//             </motion.h2>

//             <motion.p
//               className="text-light text-center mb-5"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//             >
//               The same technologies used by world-class startups, now powering
//               your website, apps, and AI systems.
//             </motion.p>

//             <Row className="g-4">
//               <Col md={6} lg={3}>
//                 <motion.div
//                   className="p-4 rounded-4 bg-black border border-secondary h-100 text-center"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <i
//                     className="bi bi-window text-primary"
//                     style={{ fontSize: "2.5rem" }}
//                   ></i>
//                   <h5 className="text-white fw-bold mt-3 mb-3">Frontend</h5>
//                   <p className="text-light small">
//                     Fast, responsive and interactive user interfaces.
//                   </p>
//                   <hr className="border-secondary" />
//                   <ul className="text-light list-unstyled small text-start">
//                     <li>Next.js</li>
//                     <li>React.js</li>
//                     <li>Bootstrap</li>
//                     <li>TypeScript</li>
//                     <li>Tailwind CSS</li>
//                     <li>Framer Motion</li>
//                     <li>HTML5 / CSS3</li>
//                     <li>JavaScript (ES6+)</li>
//                   </ul>
//                 </motion.div>
//               </Col>

//               <Col md={6} lg={3}>
//                 <motion.div
//                   className="p-4 rounded-4 bg-black border border-secondary h-100 text-center"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                 >
//                   <i
//                     className="bi bi-cpu text-success"
//                     style={{ fontSize: "2.5rem" }}
//                   ></i>
//                   <h5 className="text-white fw-bold mt-3 mb-3">Backend</h5>
//                   <p className="text-light small">
//                     Secure, stable and scalable server-side logic.
//                   </p>
//                   <hr className="border-secondary" />
//                   <ul className="text-light list-unstyled small text-start">
//                     <li>Node.js</li>
//                     <li>Express.js</li>
//                     <li>REST APIs</li>

//                     <li>JWT Authentication</li>
//                     <li>Stripe Payments & Webhooks</li>
//                   </ul>
//                 </motion.div>
//               </Col>

//               <Col md={6} lg={3}>
//                 <motion.div
//                   className="p-4 rounded-4 bg-black border border-secondary h-100 text-center"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                   <i
//                     className="bi bi-database text-warning"
//                     style={{ fontSize: "2.5rem" }}
//                   ></i>
//                   <h5 className="text-white fw-bold mt-3 mb-3">
//                     Data & DevOps
//                   </h5>
//                   <p className="text-light small">
//                     Fast databases and production-grade deployments.
//                   </p>
//                   <hr className="border-secondary" />
//                   <ul className="text-light list-unstyled small text-start">
//                     <li>AWS</li>
//                     <li>Vercel</li>
//                     <li>Netlify</li>
//                     <li>Render</li>
//                     <li>Firebase</li>
//                     <li>Supabase</li>
//                     <li>PostgreSQL</li>
//                     <li>Git / GitHub</li>
//                   </ul>
//                 </motion.div>
//               </Col>

//               <Col md={6} lg={3}>
//                 <motion.div
//                   className="p-4 rounded-4 bg-black border border-secondary h-100 text-center"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.3 }}
//                 >
//                   <i
//                     className="bi bi-robot text-info"
//                     style={{ fontSize: "2.5rem" }}
//                   ></i>
//                   <h5 className="text-white fw-bold mt-3 mb-3">AI Systems</h5>
//                   <p className="text-light small">
//                     Intelligent chat, voice and automation engines.
//                   </p>
//                   <hr className="border-secondary" />
//                   <ul className="text-light list-unstyled small text-start">
//                     <li>OpenAI API</li>
//                     <li>ElevenLabs</li>
//                     <li>Twilio Voice</li>
//                     <li>RAG Pipelines</li>
//                     <li>AI Chat Agents</li>
//                     <li>AI Voice Agents</li>
//                   </ul>
//                 </motion.div>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <Divider />

//         <FeatureSection
//           sectionClass="py-5 bg-dark"
//           title="Why Businesses Choose Us"
//           subtitle="Websites and systems built smart, built fast, and built to scale your business."
//           features={coreFeatures}
//           extraValues={extraValues}
//         />

//         <Divider />

//         <FeatureSection
//           sectionClass="py-5 bg-black"
//           title="AI Tools That Work Smarter"
//           subtitle="AI that feels human, operates nonstop, and automates your entire business."
//           features={aiCoreFeatures}
//           extraValues={aiExtraFeatures}
//         />

//         <div className="text-center mt-5">
//           <AnimatedButton text="Explore AI Services" href="/services" />
//         </div>

//         <Divider />

//         <section className="py-5 bg-black">
//           <Container>
//             <motion.h2
//               className="fw-bold text-white text-center display-6 mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               Why We’re Different
//             </motion.h2>

//             <Row className="g-4 text-center">
//               {[
//                 "NYC-Based & Local-Focused",
//                 "Web, AI & Applications Under One Roof",
//                 "End-to-End Development & Automation",
//                 "Fast Turnaround Times",
//                 "Transparent Pricing & Clear Scopes",
//                 "Long-Term Partnership Mindset",
//               ].map((item, idx) => (
//                 <Col md={4} key={idx}>
//                   <motion.div
//                     className="p-4 bg-dark rounded-4 border border-secondary h-100"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: idx * 0.05 }}
//                   >
//                     <h5 className="text-white">{item}</h5>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         </section>

//         <Divider />

//         <section className="py-5 bg-dark">
//           <Container>
//             <motion.div
//               className="text-center mb-5"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//             >
//               <h2 className="fw-bold display-5 text-white">How We Work</h2>
//               <p className="text-light fs-5">
//                 A simple, three-phase method that blends strategy, clean code,
//                 and ongoing optimization so you see ROI from day one.
//               </p>
//             </motion.div>

//             <Row className="g-4 text-center">
//               {workSteps.map((step, i) => (
//                 <Col md={4} key={i}>
//                   <motion.div
//                     className="p-4 rounded-4 bg-black border border-secondary h-100"
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: i * 0.2 }}
//                   >
//                     <i
//                       className={`bi ${step.icon} text-primary mb-3`}
//                       style={{ fontSize: "2.5rem" }}
//                     ></i>
//                     <h5 className="fw-bold text-white">{step.title}</h5>
//                     <p className="text-light">{step.desc}</p>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>

//             <div className="text-center mt-5">
//               <AnimatedButton text="Book a Free Call" href="/contact" />
//             </div>
//           </Container>
//         </section>

//         <Divider />

//         <section className="py-5 bg-black">
//           <Container className="text-center">
//             <motion.h2
//               className="fw-bold text-white display-6 mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               Trusted Across New York
//             </motion.h2>

//             <Row className="g-4 mt-4">
//               {[
//                 "40+ Projects Completed",
//                 "6+ Years of Experience",
//                 "NYC Web & AI Specialist",
//                 "Serving All Five Boroughs",
//               ].map((stat, idx) => (
//                 <Col md={3} key={idx}>
//                   <motion.div
//                     className="p-4 bg-dark border border-secondary rounded-4 h-100"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: idx * 0.05 }}
//                   >
//                     <h5 className="text-white fw-bold">{stat}</h5>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>

//             <div className="text-center mt-5">
//               <AnimatedButton text="Start Your Project" href="/contact" />
//             </div>
//           </Container>
//         </section>

//         <Footer />
//       </div>
//     </>
//   );
// }
// export default Home;

// //-----------------------------------------------------------HOME 2-----------------------------------------------------------------------//

// import { useTrafficTracker } from "../hook/useTrafficTracker";
// import images from "../images";
// import { Container, Row, Col } from "react-bootstrap";
// import FeatureSection from "../components/FeatureSection";
// import { motion } from "framer-motion";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { Helmet } from "react-helmet-async";
// import Footer from "../components/Footer";
// import AnimatedButton from "../components/Button";
// import InviteVoiceAgent from "../components/InviteBtn";

// function Home() {
//   useTrafficTracker("page_view", "/");

//   const coreFeatures = [
//     {
//       icon: "bi-rocket",
//       title: "Custom Websites That Convert",
//       desc: "High-performance sites built for speed, SEO ranking, and real lead generation.",
//       color: "text-primary",
//     },
//     {
//       icon: "bi-lock-fill",
//       title: "Security & Stability",
//       desc: "From database to payment flows, every layer is secured using industry-standard practices.",
//       color: "text-success",
//     },
//     {
//       icon: "bi-lightning-charge-fill",
//       title: "Launch Fast. Grow Faster.",
//       desc: "Clean, modern code that ships in weeks and scales as your business grows.",
//       color: "text-warning",
//     },
//   ];

//   const extraValues = [
//     {
//       title: "Fully Custom Code",
//       desc: "No templates. Only handcrafted, scalable code designed for your business.",
//       icon: "bi-code-slash",
//     },
//     {
//       title: "Professional Execution",
//       desc: "Every workflow and visual element is intentional and optimized.",
//       icon: "bi-layout-text-window-reverse",
//     },
//     {
//       title: "Conversion-Focused",
//       desc: "Pages designed to boost leads, calls, and sales.",
//       icon: "bi-bullseye",
//     },
//     {
//       title: "We Work as Partners",
//       desc: "Your goals become our development roadmap with real communication.",
//       icon: "bi-people-fill",
//     },
//     {
//       title: "Modern Tech Stack",
//       desc: "React, TypeScript, Node, PostgreSQL, and AI built for speed and scalability.",
//       icon: "bi-terminal-fill",
//     },
//     {
//       title: "Transparent Process",
//       desc: "Clear steps, predictable pricing, and honest timelines.",
//       icon: "bi-eye-fill",
//     },
//   ];

//   const aiCoreFeatures = [
//     {
//       icon: "bi-chat-dots",
//       title: "AI Chat Assistants",
//       desc: "Custom-trained chatbots that answer questions, pre-qualify leads, and convert 24/7.",
//       color: "text-primary",
//     },
//     {
//       icon: "bi-robot",
//       title: "AI Voice Agents",
//       desc: "Phone AI that talks, books appointments, and supports customers like a real human.",
//       color: "text-success",
//     },
//     {
//       icon: "bi-bar-chart-line",
//       title: "AI Insights & Automation",
//       desc: "Track visitor actions and automate tasks with smart analytics.",
//       color: "text-warning",
//     },
//   ];

//   const aiExtraFeatures = [
//     {
//       title: "Custom-Trained AI",
//       desc: "We train your AI with your tone, logic, and internal knowledge.",
//       icon: "bi-cpu-fill",
//     },
//     {
//       title: "Multilingual AI",
//       desc: "Serve users in English and Spanish with natural, clear responses.",
//       icon: "bi-translate",
//     },
//     {
//       title: "Learns With Use",
//       desc: "Your AI improves each week as interactions increase.",
//       icon: "bi-lightbulb-fill",
//     },
//     {
//       title: "Omnichannel Integration",
//       desc: "Website, phone, SMS, CRM, one AI brain across everything.",
//       icon: "bi-plug-fill",
//     },
//     {
//       title: "24/7 Availability",
//       desc: "Never miss a customer again, day or night.",
//       icon: "bi-clock-history",
//     },
//     {
//       title: "Security-First AI",
//       desc: "Encrypted pipelines and safe data handling.",
//       icon: "bi-shield-lock-fill",
//     },
//   ];

//   const workSteps = [
//     {
//       title: "Strategize",
//       icon: "bi-lightbulb",
//       desc: "We define your goals, audit your systems, and build a clear roadmap.",
//     },
//     {
//       title: "Design & Build",
//       icon: "bi-layout-text-window",
//       desc: "From wireframes to production-ready code, engineered for real results.",
//     },
//     {
//       title: "Launch & Scale",
//       icon: "bi-rocket-takeoff",
//       desc: "We monitor performance, optimize, and help you grow month after month.",
//     },
//   ];

//   function Divider() {
//     return (
//       <div className="w-100 d-flex justify-content-center">
//         <div
//           style={{
//             height: "2px",
//             width: "120px",
//             background:
//               "linear-gradient(90deg, rgba(148,163,184,0) 0%, #64748b 50%, rgba(148,163,184,0) 100%)",
//             borderRadius: "999px",
//             margin: "4rem 0",
//           }}
//         />
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>
//           Batistack Development | Web, AI & Application Systems in New York
//         </title>
//         <meta
//           name="description"
//           content="Batistack Development builds premium websites, AI chat & voice agents, and guided NYC application systems for businesses, professionals and families across all five boroughs."
//         />
//         <meta
//           name="keywords"
//           content="NYC web design, React developer NYC, TypeScript developer, AI chatbots NYC, AI voice agents NYC, custom software Manhattan, Brooklyn web developer, application help NYC, Node developer NYC, AI automation NYC"
//         />
//         <meta
//           property="og:title"
//           content="Batistack Development | Web & AI Solutions Built in NYC"
//         />
//         <meta
//           property="og:description"
//           content="One studio for websites, AI automation, and NYC application workflows. Think it. Code it. Launch it."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://batistack.com/" />
//         <meta
//           property="og:image"
//           content="https://batistack.com/assets/og-image.jpg"
//         />
//         <link rel="canonical" href="https://batistack.com/" />
//         <meta name="robots" content="index,follow" />
//         <script type="application/ld+json">
//           {`
//           {
//             "@context": "https://schema.org",
//             "@type": "LocalBusiness",
//             "name": "Batistack Development",
//             "image": "https://batistack.com/assets/og-image.jpg",
//             "url": "https://batistack.com",
//             "telephone": "+1-929-733-1600",
//             "address": {
//               "@type": "PostalAddress",
//               "addressLocality": "New York",
//               "addressRegion": "NY",
//               "postalCode": "11201",
//               "addressCountry": "US"
//             },
//             "areaServed": [
//               "Brooklyn",
//               "Manhattan",
//               "Queens",
//               "The Hamptons",
//               "New York City"
//             ],
//             "description": "Batistack is an NYC-based web development and AI automation studio that builds custom websites, AI agents, and application workflows for local businesses and residents.",
//             "sameAs": [
//               "https://www.linkedin.com/in/elisaul-batista/"
//             ]
//           }
//         `}
//         </script>
//       </Helmet>

//       <div
//         style={{
//           backgroundColor: "#020617",
//           color: "#f9fafb",
//           overflowX: "hidden",
//           fontFamily:
//             '-apple-system, system-ui, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
//           position: "relative",
//         }}
//       >

//         <div
//           style={{
//             position: "fixed",
//             inset: 0,
//             pointerEvents: "none",
//             zIndex: 0,
//             opacity: 0.6,
//           }}
//         >
//           <div
//             style={{
//               position: "absolute",
//               top: "-180px",
//               right: "-120px",
//               width: "420px",
//               height: "420px",
//               borderRadius: "999px",
//               background:
//                 "radial-gradient(circle, rgba(148,163,184,0.4) 0%, transparent 65%)",
//               filter: "blur(30px)",
//             }}
//           />
//           <div
//             style={{
//               position: "absolute",
//               bottom: "-220px",
//               left: "-160px",
//               width: "460px",
//               height: "460px",
//               borderRadius: "999px",
//               background:
//                 "radial-gradient(circle, rgba(148,163,184,0.25) 0%, transparent 70%)",
//               filter: "blur(34px)",
//             }}
//           />
//         </div>

//         {/* ================== HERO ================== */}
//         <section
//           className="py-5 min-vh-100 d-flex align-items-center"
//           style={{ position: "relative", zIndex: 1 }}
//         >
//           <Container>
//             <Row className="align-items-center g-5 flex-column-reverse flex-lg-row">
//               {/* LEFT */}
//               <Col lg={6} className="text-center text-lg-start">
//                 <motion.div
//                   initial={{ opacity: 0, y: 18 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6 }}
//                   className="d-inline-flex align-items-center px-3 py-1 rounded-pill mb-4"
//                   style={{
//                     background: "rgba(15,23,42,0.9)",
//                     border: "1px solid rgba(148,163,184,0.5)",
//                     backdropFilter: "blur(14px)",
//                     fontSize: "0.78rem",
//                     letterSpacing: "0.12em",
//                     textTransform: "uppercase",
//                     color: "#e5e7eb",
//                   }}
//                 >
//                   <span
//                     style={{
//                       width: 8,
//                       height: 8,
//                       borderRadius: "999px",
//                       background: "#22c55e",
//                       marginRight: 8,
//                     }}
//                   />
//                   NYC Website · AI · Applications
//                 </motion.div>

//                 <motion.h1
//                   className="fw-bold mb-3"
//                   style={{ lineHeight: 1.08, fontSize: "2.8rem" }}
//                   initial={{ opacity: 0, y: 22 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.05 }}
//                 >
//                   Think It. Code It.
//                   <br />
//                   <span
//                     style={{
//                       background:
//                         "linear-gradient(120deg,#e5e7eb,#9ca3af,#f9fafb)",
//                       WebkitBackgroundClip: "text",
//                       color: "transparent",
//                     }}
//                   >
//                     Launch It.
//                   </span>
//                 </motion.h1>

//                 <motion.p
//                   className="fs-5 mb-4"
//                   style={{ color: "#cbd5f5", maxWidth: 540 }}
//                   initial={{ opacity: 0, y: 22 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.12 }}
//                 >
//                   Batistack is your single studio for{" "}
//                   <strong>premium websites</strong>,{" "}
//                   <strong>AI chat & voice agents</strong>, and{" "}
//                   <strong>NYC application workflows</strong>. Designed like a
//                   product team. Built like an engineering squad. Focused on
//                   real results.
//                 </motion.p>

//                 <motion.div
//                   className="d-flex flex-wrap gap-3 mb-4"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.18 }}
//                 >
//                   <AnimatedButton text="Book a Strategy Call" href="/contact" />
//                   <AnimatedButton text="View Web & AI Work" href="/services" />
//                   <AnimatedButton
//                     text="Visit Application Center"
//                     href="/applications"
//                   />
//                 </motion.div>

//                 <motion.div
//                   className="d-flex flex-wrap gap-3"
//                   initial={{ opacity: 0, y: 18 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.22 }}
//                 >
//                   {[
//                     { label: "Projects Delivered", value: "40+" },
//                     { label: "Years of Experience", value: "6+" },
//                     { label: "NYC Boroughs Served", value: "5" },
//                   ].map((stat) => (
//                     <div
//                       key={stat.label}
//                       className="px-3 py-2 rounded-4"
//                       style={{
//                         background: "rgba(15,23,42,0.88)",
//                         border: "1px solid rgba(148,163,184,0.6)",
//                         backdropFilter: "blur(16px)",
//                       }}
//                     >
//                       <div
//                         style={{
//                           fontSize: "1.2rem",
//                           fontWeight: 700,
//                           color: "#f9fafb",
//                         }}
//                       >
//                         {stat.value}
//                       </div>
//                       <div
//                         style={{
//                           fontSize: "0.78rem",
//                           color: "#9ca3af",
//                           textTransform: "uppercase",
//                           letterSpacing: "0.09em",
//                         }}
//                       >
//                         {stat.label}
//                       </div>
//                     </div>
//                   ))}
//                 </motion.div>
//               </Col>

//               {/* RIGHT - LOGO + FLOATING CARDS */}
//               <Col lg={6} className="text-center">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.92, y: 16 }}
//                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   style={{
//                     position: "relative",
//                     maxWidth: 460,
//                     margin: "0 auto",
//                   }}
//                 >
//                   {/* Silver ring under card */}
//                   <div
//                     style={{
//                       position: "absolute",
//                       top: "52%",
//                       left: "50%",
//                       transform: "translate(-50%, -50%)",
//                       width: "340px",
//                       height: "340px",
//                       borderRadius: "999px",
//                       border: "1px solid rgba(148,163,184,0.75)",
//                       boxShadow:
//                         "0 0 80px rgba(148,163,184,0.28), 0 0 120px rgba(15,23,42,0.9)",
//                       opacity: 0.9,
//                     }}
//                   />

//                   {/* Glass card with logo */}
//                   <motion.div
//                     className="shadow-lg"
//                     style={{
//                       position: "relative",
//                       borderRadius: "28px",
//                       padding: "26px 28px 24px",
//                       background:
//                         "linear-gradient(145deg, rgba(15,23,42,0.98), rgba(15,23,42,0.96))",
//                       border:
//                         "1px solid rgba(148,163,184,0.55)",
//                       backdropFilter: "blur(22px)",
//                       zIndex: 1,
//                     }}
//                     animate={{ y: [0, -8, 0] }}
//                     transition={{
//                       duration: 6,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                   >
//                     {/* Fake top bar like device */}
//                     <div
//                       className="d-flex justify-content-between align-items-center mb-3"
//                       style={{
//                         borderBottom: "1px solid rgba(51,65,85,0.9)",
//                         paddingBottom: 10,
//                       }}
//                     >
//                       <div className="d-flex align-items-center gap-2">
//                         <span
//                           style={{
//                             width: 8,
//                             height: 8,
//                             borderRadius: "999px",
//                             background: "#64748b",
//                           }}
//                         />
//                         <span
//                           style={{
//                             width: 8,
//                             height: 8,
//                             borderRadius: "999px",
//                             background: "#94a3b8",
//                             opacity: 0.8,
//                           }}
//                         />
//                         <span
//                           style={{
//                             width: 8,
//                             height: 8,
//                             borderRadius: "999px",
//                             background: "#e5e7eb",
//                             opacity: 0.9,
//                           }}
//                         />
//                       </div>
//                       <span
//                         style={{
//                           fontSize: "0.78rem",
//                           color: "#9ca3af",
//                           letterSpacing: "0.14em",
//                           textTransform: "uppercase",
//                         }}
//                       >
//                         Batistack Development
//                       </span>
//                     </div>

//                     <div
//                       className="d-flex justify-content-center mb-3"
//                       style={{ paddingTop: 4 }}
//                     >
//                       <img
//                         src={images.logo2}
//                         alt="Batistack Logo"
//                         className="rounded-circle"
//                         style={{

//                           width: 220,
//                           height: 220,
//                           objectFit: "cover",
//                           border: "2px solid rgba(148,163,184,0.85)",
//                           boxShadow:
//                             "0 18px 45px rgba(0,0,0,0.85), 0 0 60px rgba(148,163,184,0.6)",
//                         }}
//                       />
//                     </div>

//                     <div className="mt-3">
//                       <InviteVoiceAgent />
//                     </div>
//                   </motion.div>

//                   {/* Floating small cards */}
//                   <motion.div
//                     className="floating-card"
//                     style={{
//                       position: "absolute",
//                       top: "8%",
//                       left: "-5%",
//                       padding: "10px 14px",
//                       borderRadius: "16px",
//                       background: "rgba(15,23,42,0.96)",
//                       border: "1px solid rgba(148,163,184,0.5)",
//                       backdropFilter: "blur(16px)",
//                       fontSize: "0.78rem",
//                       textAlign: "left",
//                       zIndex: 10,
//                     }}
//                     animate={{ y: [-6, 4, -6] }}
//                     transition={{
//                       duration: 5.5,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                   >
//                     <div
//                       style={{
//                         fontSize: "0.7rem",
//                         color: "#9ca3af",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.12em",
//                       }}
//                     >
//                       Web Experiences
//                     </div>
//                     <div style={{ fontWeight: 600, color: "#e5e7eb" }}>
//                       Landing Pages · Dashboards
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     className="floating-card"
//                     style={{
//                       position: "absolute",
//                       bottom: "4%",
//                       right: "-5%",
//                       padding: "10px 14px",
//                       borderRadius: "16px",
//                       background: "rgba(15,23,42,0.96)",
//                       border: "1px solid rgba(148,163,184,0.5)",
//                       backdropFilter: "blur(16px)",
//                       fontSize: "0.78rem",
//                       textAlign: "left",
//                       zIndex: 10,
//                     }}
//                     animate={{ y: [4, -6, 4] }}
//                     transition={{
//                       duration: 6.5,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                   >
//                     <div
//                       style={{
//                         fontSize: "0.7rem",
//                         color: "#9ca3af",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.12em",
//                       }}
//                     >
//                       AI Agents
//                     </div>
//                     <div style={{ fontWeight: 600, color: "#e5e7eb" }}>
//                       Phone · Chat · Workflows
//                     </div>
//                   </motion.div>

//                   <motion.div
//                     className="floating-card"
//                     style={{
//                       position: "absolute",
//                       bottom: "-8%",
//                       left: "10%",
//                       padding: "10px 14px",
//                       borderRadius: "16px",
//                       background: "rgba(15,23,42,0.96)",
//                       border: "1px solid rgba(148,163,184,0.5)",
//                       backdropFilter: "blur(16px)",
//                       fontSize: "0.78rem",
//                       textAlign: "left",
//                       zIndex: 10,
//                     }}
//                     animate={{ y: [0, -8, 0] }}
//                     transition={{
//                       duration: 7,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                   >
//                     <div
//                       style={{
//                         fontSize: "0.7rem",
//                         color: "#9ca3af",
//                         textTransform: "uppercase",
//                         letterSpacing: "0.12em",
//                       }}
//                     >
//                       Application Center
//                     </div>
//                     <div style={{ fontWeight: 600, color: "#e5e7eb" }}>
//                       SNAP · NYCHA · Section 8
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <Divider />

//         {/* ================== WHAT WE BUILD ================== */}
//         <section className="py-5" style={{ position: "relative", zIndex: 1 }}>
//           <Container>
//             <motion.h2
//               className="fw-bold text-center display-6 mb-3"
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               One Studio. Three Core Pillars.
//             </motion.h2>
//             <motion.p
//               className="text-center mb-5"
//               style={{ color: "#9ca3af", maxWidth: 640, margin: "0 auto" }}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.06 }}
//             >
//               Websites engineered for performance, AI agents trained to act like
//               your best employee, and application flows designed for real people
//               in New York City.
//             </motion.p>

//             <Row className="g-4">
//               {[
//                 {
//                   icon: "bi-laptop",
//                   title: "Web Development",
//                   desc: "Custom-coded sites and dashboards built for speed, SEO and conversion — no page builders, no shortcuts.",
//                 },
//                 {
//                   icon: "bi-robot",
//                   title: "AI Voice & Chat",
//                   desc: "24/7 agents that answer, qualify and route clients by phone, SMS or chat while you focus on the real work.",
//                 },
//                 {
//                   icon: "bi-ui-checks-grid",
//                   title: "Application Center",
//                   desc: "Guided NYC applications like SNAP, NYCHA, Section 8 and Cash Assistance with clear steps and human support.",
//                 },
//               ].map((item, idx) => (
//                 <Col md={4} key={item.title}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: idx * 0.08 }}
//                     className="h-100"
//                   >
//                     <div
//                       className="p-4 rounded-4 h-100"
//                       style={{
//                         background: "rgba(15,23,42,0.96)",
//                         border:
//                           "1px solid rgba(148,163,184,0.6)",
//                         boxShadow:
//                           "0 18px 45px rgba(15,23,42,0.9)",
//                         backdropFilter: "blur(14px)",
//                         transition: "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
//                       }}
//                     >
//                       <i
//                         className={`bi ${item.icon}`}
//                         style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
//                       />
//                       <h5 className="fw-bold text-white mt-3 mb-2">
//                         {item.title}
//                       </h5>
//                       <p className="mb-0" style={{ color: "#cbd5e1" }}>
//                         {item.desc}
//                       </p>
//                     </div>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         </section>

//         <Divider />

//         {/* ================== INDUSTRIES ================== */}
//         <section className="py-5">
//           <Container>
//             <motion.h2
//               className="fw-bold text-center display-6 mb-3"
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               Built For Real New Yorkers
//             </motion.h2>
//             <motion.p
//               className="text-center mb-5"
//               style={{ color: "#9ca3af", maxWidth: 620, margin: "0 auto" }}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.06 }}
//             >
//               From contractors to restaurants and local families, Batistack
//               powers the people actually moving New York forward.
//             </motion.p>

//             <Row className="g-4">
//               {[
//                 "Contractors & HVAC Teams",
//                 "Restaurants & Local Shops",
//                 "Entrepreneurs & Startups",
//                 "Immigrants & NYC Residents",
//                 "Real Estate & Property Managers",
//                 "Online Stores & E-commerce",
//               ].map((industry, idx) => (
//                 <Col md={4} key={industry}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 18 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.45, delay: idx * 0.06 }}
//                     className="h-100"
//                   >
//                     <div
//                       className="p-3 rounded-4 h-100 d-flex align-items-center justify-content-center text-center"
//                       style={{
//                         background: "rgba(15,23,42,0.96)",
//                         border: "1px solid rgba(148,163,184,0.55)",
//                         backdropFilter: "blur(10px)",
//                       }}
//                     >
//                       <h5 className="fw-semibold" style={{ color: "#e5e7eb" }}>
//                         {industry}
//                       </h5>
//                     </div>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         </section>

//         <Divider />

//         {/* ================== TECH STACK ================== */}
//         <section className="py-5">
//           <Container>
//             <motion.h2
//               className="fw-bold text-center display-6 mb-3"
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//             >
//               Modern Tech Stack. Serious Engineering.
//             </motion.h2>
//             <motion.p
//               className="text-center mb-5"
//               style={{ color: "#9ca3af", maxWidth: 640, margin: "0 auto" }}
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.06 }}
//             >
//               The same tools used by leading startups and AI companies, tuned to
//               power your website, AI systems and application workflows.
//             </motion.p>

//             <Row className="g-4">
//               <Col md={6} lg={3}>
//                 <motion.div
//                   className="p-4 rounded-4 h-100"
//                   style={{
//                     background: "rgba(15,23,42,0.96)",
//                     border: "1px solid rgba(148,163,184,0.6)",
//                     backdropFilter: "blur(10px)",
//                   }}
//                   initial={{ opacity: 0, y: 22 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <i
//                     className="bi bi-window mb-3"
//                     style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
//                   />
//                   <h5 className="fw-bold mb-2">Frontend</h5>
//                   <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
//                     Smooth, responsive interfaces that feel premium on every
//                     device.
//                   </p>
//                   <hr className="border-secondary" />
//                   <ul
//                     className="list-unstyled mb-0"
//                     style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
//                   >
//                     <li>Next.js</li>
//                     <li>React.js</li>
//                     <li>TypeScript</li>
//                     <li>Tailwind CSS</li>
//                     <li>Bootstrap</li>
//                     <li>Framer Motion</li>
//                     <li>HTML5 / CSS3</li>
//                   </ul>
//                 </motion.div>
//               </Col>

//               <Col md={6} lg={3}>
//                 <motion.div
//                   className="p-4 rounded-4 h-100"
//                   style={{
//                     background: "rgba(15,23,42,0.96)",
//                     border: "1px solid rgba(148,163,184,0.6)",
//                     backdropFilter: "blur(10px)",
//                   }}
//                   initial={{ opacity: 0, y: 22 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: 0.08 }}
//                 >
//                   <i
//                     className="bi bi-cpu mb-3"
//                     style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
//                   />
//                   <h5 className="fw-bold mb-2">Backend</h5>
//                   <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
//                     Secure, stable and scalable server-side logic built for real
//                     workflows.
//                   </p>
//                   <hr className="border-secondary" />
//                   <ul
//                     className="list-unstyled mb-0"
//                     style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
//                   >
//                     <li>Node.js</li>
//                     <li>Express.js</li>
//                     <li>REST APIs</li>
//                     <li>JWT Auth</li>
//                     <li>Stripe Webhooks</li>
//                   </ul>
//                 </motion.div>
//               </Col>

//               <Col md={6} lg={3}>
//                 <motion.div
//                   className="p-4 rounded-4 h-100"
//                   style={{
//                     background: "rgba(15,23,42,0.96)",
//                     border: "1px solid rgba(148,163,184,0.6)",
//                     backdropFilter: "blur(10px)",
//                   }}
//                   initial={{ opacity: 0, y: 22 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: 0.16 }}
//                 >
//                   <i
//                     className="bi bi-database mb-3"
//                     style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
//                   />
//                   <h5 className="fw-bold mb-2">Data & DevOps</h5>
//                   <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
//                     Solid databases and production-grade deployments.
//                   </p>
//                   <hr className="border-secondary" />
//                   <ul
//                     className="list-unstyled mb-0"
//                     style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
//                   >
//                     <li>PostgreSQL</li>
//                     <li>Supabase</li>
//                     <li>Firebase</li>
//                     <li>Vercel</li>
//                     <li>Netlify</li>
//                     <li>AWS</li>
//                     <li>Git / GitHub</li>
//                   </ul>
//                 </motion.div>
//               </Col>

//               <Col md={6} lg={3}>
//                 <motion.div
//                   className="p-4 rounded-4 h-100"
//                   style={{
//                     background: "rgba(15,23,42,0.96)",
//                     border: "1px solid rgba(148,163,184,0.6)",
//                     backdropFilter: "blur(10px)",
//                   }}
//                   initial={{ opacity: 0, y: 22 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: 0.24 }}
//                 >
//                   <i
//                     className="bi bi-robot mb-3"
//                     style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
//                   />
//                   <h5 className="fw-bold mb-2">AI Systems</h5>
//                   <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
//                     Intelligent chat, voice and automation engines that extend
//                     your team.
//                   </p>
//                   <hr className="border-secondary" />
//                   <ul
//                     className="list-unstyled mb-0"
//                     style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
//                   >
//                     <li>OpenAI API</li>
//                     <li>RAG Pipelines</li>
//                     <li>AI Chat Agents</li>
//                     <li>AI Voice Agents</li>
//                     <li>ElevenLabs</li>
//                     <li>Twilio Voice</li>
//                   </ul>
//                 </motion.div>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <Divider />

//         {/* ================== WHY BUSINESSES CHOOSE US ================== */}
//         <FeatureSection
//           sectionClass="py-5 bg-black"
//           title="Why Businesses Choose Batistack"
//           subtitle="Websites and systems built smart, built fast, and built to scale your business."
//           features={coreFeatures}
//           extraValues={extraValues}
//         />

//         <Divider />

//         {/* ================== AI FEATURE SECTION ================== */}
//         <FeatureSection
//           sectionClass="py-5 bg-black"
//           title="AI Tools That Work Smarter"
//           subtitle="AI that feels human, operates nonstop, and automates your entire business."
//           features={aiCoreFeatures}
//           extraValues={aiExtraFeatures}
//         />

//         <div className="text-center mt-5">
//           <AnimatedButton text="Explore AI Services" href="/services" />
//         </div>

//         <Divider />

//         {/* ================== HOW WE WORK ================== */}
//         <section className="py-5 bg-black">
//           <Container>
//             <motion.div
//               className="text-center mb-5"
//               initial={{ opacity: 0, y: 22 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h2 className="fw-bold display-5 text-white">How We Work</h2>
//               <p className="text-light fs-5">
//                 A simple, three-phase method that blends strategy, clean code
//                 and ongoing optimization so you see ROI from day one.
//               </p>
//             </motion.div>

//             <Row className="g-4 text-center">
//               {workSteps.map((step, i) => (
//                 <Col md={4} key={step.title}>
//                   <motion.div
//                     className="p-4 rounded-4 h-100"
//                     style={{
//                       background: "rgba(15,23,42,0.96)",
//                       border: "1px solid rgba(148,163,184,0.6)",
//                       backdropFilter: "blur(10px)",
//                     }}
//                     initial={{ opacity: 0, y: 22 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.45, delay: i * 0.08 }}
//                   >
//                     <i
//                       className={`bi ${step.icon} mb-3`}
//                       style={{ fontSize: "2.4rem", color: "#e5e7eb" }}
//                     />
//                     <h5 className="fw-bold text-white mb-2">{step.title}</h5>
//                     <p className="text-light mb-0">{step.desc}</p>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>

//             <div className="text-center mt-5">
//               <AnimatedButton text="Book a Strategy Call" href="/contact" />
//             </div>
//           </Container>
//         </section>

//         <Divider />

//         {/* ================== TRUST / NYC ================== */}
//         <section className="py-5 bg-black">
//           <Container className="text-center">
//             <motion.h2
//               className="fw-bold text-white display-6 mb-3"
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               NYC-Built. NYC-Tested.
//             </motion.h2>

//             <motion.p
//               className="text-light mb-4"
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.06 }}
//             >
//               From Brooklyn to The Hamptons, Batistack supports businesses,
//               professionals and families that need a serious digital partner.
//             </motion.p>

//             <Row className="g-4 mt-3">
//               {[
//                 "40+ Projects Completed",
//                 "6+ Years of Experience",
//                 "NYC Web & AI Specialist",
//                 "Serving All Five Boroughs",
//               ].map((stat, idx) => (
//                 <Col md={3} key={stat}>
//                   <motion.div
//                     className="p-4 rounded-4 h-100"
//                     style={{
//                       background: "rgba(15,23,42,0.96)",
//                       border: "1px solid rgba(148,163,184,0.6)",
//                       backdropFilter: "blur(8px)",
//                     }}
//                     initial={{ opacity: 0, y: 18 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: idx * 0.06 }}
//                   >
//                     <h5 className="text-white fw-bold mb-0">{stat}</h5>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>

//             <div className="text-center mt-5">
//               <AnimatedButton text="Start Your Project" href="/contact" />
//             </div>
//           </Container>
//         </section>

//         <Footer />

//         {/* Small hover animation for all cards */}
//         <style>{`
//           .floating-card:hover {
//             transform: translateY(-4px);
//             transition: transform 200ms ease;
//           }
//           section .rounded-4:hover {
//             transform: translateY(-4px);
//             box-shadow: 0 24px 60px rgba(0,0,0,0.8);
//             border-color: rgba(226,232,240,0.9) !important;
//           }
//         `}</style>
//       </div>
//     </>
//   );
// }

// export default Home;

//HOME-----------------------------2-----------------------------

// import { useTrafficTracker } from "../hook/useTrafficTracker";
// import images from "../images";
// import { Container, Row, Col } from "react-bootstrap";
// import { motion } from "framer-motion";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { Helmet } from "react-helmet-async";
// import Footer from "../components/Footer";
// import AnimatedButton from "../components/Button";
// import InviteVoiceAgent from "../components/InviteBtn";

// function Home() {
//   useTrafficTracker("page_view", "/");

//   const howWeWorkSteps = [
//     {
//       icon: "bi-lightbulb",
//       title: "1. Strategy",
//       desc: "We clarify your goals, map your systems, and define a clear build roadmap.",
//     },
//     {
//       icon: "bi-cpu",
//       title: "2. Build",
//       desc: "Design, development and AI training — fast, clean and performance-focused.",
//     },
//     {
//       icon: "bi-rocket",
//       title: "3. Launch & Support",
//       desc: "Deployment, analytics, and ongoing improvements so your system keeps paying off.",
//     },
//   ];

//   const whyChoose = [
//     {
//       icon: "bi-diagram-3",
//       title: "Full System Thinking",
//       desc: "We don’t just build pages or bots. We design the full flow from click to client.",
//     },
//     {
//       icon: "bi-person-workspace",
//       title: "Direct Builder Access",
//       desc: "You speak directly with the developer — no layers of account managers in between.",
//     },
//     {
//       icon: "bi-graph-up-arrow",
//       title: "Built to Convert",
//       desc: "Every layout, call-to-action and automation is designed around leads and revenue.",
//     },
//     {
//       icon: "bi-shield-lock",
//       title: "Security & Stability",
//       desc: "Clean, well-structured code and best practices on auth, data and deployments.",
//     },
//     {
//       icon: "bi-clock-history",
//       title: "Fast Turnaround",
//       desc: "Most projects move from idea to launch within weeks, not months.",
//     },
//     {
//       icon: "bi-people",
//       title: "Long-Term Partnership",
//       desc: "We stay available for upgrades, support, and new ideas as you grow.",
//     },
//   ];

//   function Divider() {
//     return (
//       <div className="w-100 d-flex justify-content-center">
//         <div
//           style={{
//             height: "2px",
//             width: "120px",
//             background:
//               "linear-gradient(90deg, rgba(148,163,184,0) 0%, #e5e7eb 50%, rgba(148,163,184,0) 100%)",
//             borderRadius: "999px",
//             margin: "3.5rem 0",
//             opacity: 0.75,
//           }}
//         ></div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Helmet>
//         <title>
//           Batistack Development | NYC Web Design, AI Agents & Application Help
//         </title>
//         <meta
//           name="description"
//           content="Batistack builds high-performance websites, AI voice bots, chatbots, and NYC application services for businesses and families in Brooklyn, Manhattan, Queens, and The Hamptons."
//         />
//         <meta
//           name="keywords"
//           content="NYC web design, React developer NYC, TypeScript developer, AI chatbots NYC, AI voice agents NYC, custom software Manhattan, Brooklyn web developer, application help NYC, Node developer NYC, AI automation NYC"
//         />
//         <meta
//           property="og:title"
//           content="Batistack Development | Web & AI Solutions Built in NYC"
//         />
//         <meta
//           property="og:description"
//           content="Web development, AI automation, and application support for New Yorkers. Get a custom-built system that brings real leads and results."
//         />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://batistack.com/" />
//         <meta
//           property="og:image"
//           content="https://batistack.com/assets/og-image.jpg"
//         />
//         <link rel="canonical" href="https://batistack.com/" />
//         <meta name="robots" content="index,follow" />
//         <script type="application/ld+json">
//           {`
//           {
//             "@context": "https://schema.org",
//             "@type": "LocalBusiness",
//             "name": "Batistack Development",
//             "image": "https://batistack.com/assets/og-image.jpg",
//             "url": "https://batistack.com",
//             "telephone": "+1-929-733-1600",
//             "address": {
//               "@type": "PostalAddress",
//               "addressLocality": "New York",
//               "addressRegion": "NY",
//               "postalCode": "11201",
//               "addressCountry": "US"
//             },
//             "areaServed": [
//               "Brooklyn",
//               "Manhattan",
//               "Queens",
//               "The Hamptons",
//               "New York City"
//             ],
//             "description": "Batistack is an NYC-based web development and AI automation studio that builds custom websites, AI agents, and application workflows for local businesses and residents.",
//             "sameAs": [
//               "https://www.linkedin.com/in/elisaul-batista/"
//             ]
//           }
//         `}
//         </script>
//       </Helmet>

//       <div
//         style={{
//           background:
//             "radial-gradient(circle at top, #0b1120 0, #020617 45%, #000000 100%)",
//           color: "#f9fafb",
//           overflowX: "hidden",
//           fontFamily:
//             '-apple-system, system-ui, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
//         }}
//       >
//         {/* ================= HERO ================= */}
//         <section
//           className="py-5 min-vh-100 d-flex align-items-center"
//           style={{ position: "relative" }}
//         >
//           {/* Subtle ambient glow */}
//           <div
//             style={{
//               position: "absolute",
//               inset: 0,
//               pointerEvents: "none",
//               opacity: 0.45,
//             }}
//           >
//             <div
//               style={{
//                 position: "absolute",
//                 width: "520px",
//                 height: "520px",
//                 borderRadius: "999px",
//                 background:
//                   "radial-gradient(circle, rgba(148,163,184,0.28) 0, transparent 60%)",
//                 top: "-120px",
//                 left: "10%",
//                 filter: "blur(60px)",
//               }}
//             ></div>
//             <div
//               style={{
//                 position: "absolute",
//                 width: "380px",
//                 height: "380px",
//                 borderRadius: "999px",
//                 background:
//                   "radial-gradient(circle, rgba(15,23,42,0.9) 0, transparent 60%)",
//                 bottom: "-120px",
//                 right: "-40px",
//                 filter: "blur(40px)",
//               }}
//             ></div>
//           </div>

//           <Container style={{ position: "relative", zIndex: 1 }}>
//             <Row className="align-items-center flex-column-reverse flex-lg-row g-5">
//               {/* LEFT TEXT */}
//               <Col lg={6} className="text-center text-lg-start">
//                 <motion.div
//                   initial={{ opacity: 0, y: 18 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="d-inline-flex align-items-center px-3 py-1 rounded-pill mb-4"
//                   style={{
//                     background: "rgba(15,23,42,0.9)",
//                     border: "1px solid rgba(148,163,184,0.55)",
//                     backdropFilter: "blur(12px)",
//                     fontSize: "0.75rem",
//                     letterSpacing: "0.12em",
//                     textTransform: "uppercase",
//                   }}
//                 >
//                   <span
//                     style={{
//                       width: 8,
//                       height: 8,
//                       borderRadius: "999px",
//                       background: "#22c55e",
//                       marginRight: 8,
//                     }}
//                   ></span>
//                   NYC Web · AI · Applications
//                 </motion.div>

//                 <motion.h1
//                   className="fw-bold display-4 mb-3"
//                   style={{ lineHeight: 1.1 }}
//                   initial={{ opacity: 0, y: 22 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.05 }}
//                 >
//                   Web, AI & Applications{" "}
//                   <span
//                     style={{
//                       background:
//                         "linear-gradient(120deg,#e5e7eb 0%,#f9fafb 40%,#9ca3af 100%)",
//                       WebkitBackgroundClip: "text",
//                       color: "transparent",
//                     }}
//                   >
//                     built like a product,
//                   </span>
//                   <br />
//                   run like a real business.
//                 </motion.h1>

//                 <motion.p
//                   className="fs-5 mb-4"
//                   style={{ color: "#cbd5e1", maxWidth: 560 }}
//                   initial={{ opacity: 0, y: 22 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.12 }}
//                 >
//                   Batistack designs and builds custom websites, AI voice & chat
//                   agents, and guided application flows for New Yorkers. One
//                   studio to plan it, code it, and keep it running.
//                 </motion.p>

//                 <motion.div
//                   className="d-flex flex-wrap gap-3 mb-4"
//                   initial={{ opacity: 0, y: 22 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.18 }}
//                 >
//                   <AnimatedButton text="Book a Free Call" href="/contact" />
//                   <AnimatedButton text="Explore AI Services" href="/services" />
//                   <AnimatedButton
//                     text="Application Center"
//                     href="/applications"
//                   />
//                 </motion.div>

//                 <motion.div
//                   className="d-flex flex-wrap gap-3"
//                   initial={{ opacity: 0, y: 18 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.22 }}
//                 >
//                   {[
//                     { label: "Projects Delivered", value: "40+" },
//                     { label: "Years of Experience", value: "6+" },
//                     { label: "NYC Boroughs Served", value: "5" },
//                   ].map((stat) => (
//                     <div
//                       key={stat.label}
//                       className="px-3 py-2 rounded-4"
//                       style={{
//                         background: "rgba(15,23,42,0.9)",
//                         border: "1px solid rgba(148,163,184,0.6)",
//                         backdropFilter: "blur(12px)",
//                       }}
//                     >
//                       <div
//                         style={{
//                           fontSize: "1.25rem",
//                           fontWeight: 700,
//                           color: "#e5e7eb",
//                         }}
//                       >
//                         {stat.value}
//                       </div>
//                       <div
//                         style={{
//                           fontSize: "0.8rem",
//                           color: "#9ca3af",
//                           textTransform: "uppercase",
//                           letterSpacing: "0.08em",
//                         }}
//                       >
//                         {stat.label}
//                       </div>
//                     </div>
//                   ))}
//                 </motion.div>
//               </Col>

//               {/* RIGHT VISUAL: LOGO + FLOATING CARDS */}
//               <Col lg={6} className="text-center">
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.92, y: 16 }}
//                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   style={{
//                     maxWidth: 440,
//                     margin: "0 auto",
//                     position: "relative",
//                   }}
//                 >
//                   {/* Main card with logo */}

//                   <div
//                     style={{
//                       position: "relative",
//                       borderRadius: "28px",
//                       padding: "26px 24px 22px",
//                       background:
//                         "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.96))",
//                       border: "1px solid rgba(148,163,184,0.65)",
//                       boxShadow: "0 24px 80px rgba(15,23,42,0.95)",
//                       backdropFilter: "blur(18px)",
//                       overflow: "hidden",
//                     }}
//                   >
//                     {/* subtle border glow */}
//                     <div
//                       style={{
//                         position: "absolute",
//                         inset: 0,
//                         borderRadius: "28px",
//                         padding: "1px",
//                         background:
//                           "radial-gradient(circle at top, rgba(248,250,252,0.35), rgba(15,23,42,0.9))",
//                         opacity: 0.25,
//                         pointerEvents: "none",
//                       }}
//                     ></div>

//                     <div
//                       style={{
//                         position: "relative",
//                         zIndex: 1,
//                       }}
//                     >
//                       <div className="d-flex justify-content-center mb-3">
//                         <img
//                           src={images.logo2}
//                           alt="Batistack Logo"
//                           className="rounded-circle"
//                           style={{
//                             width: 180,
//                             height: 180,
//                             objectFit: "cover",
//                             border: "2px solid rgba(226,232,240,0.7)",
//                             boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
//                           }}
//                         />
//                       </div>
//                       <p
//                         className="mb-1"
//                         style={{
//                           color: "#94a3b8",
//                           fontSize: "0.8rem",
//                           letterSpacing: "0.18em",
//                           textTransform: "uppercase",
//                         }}
//                       >
//                         Batistack Development
//                       </p>
//                       <p
//                         className="mb-0"
//                         style={{ color: "#e5e7eb", fontSize: "0.95rem" }}
//                       >
//                         Think it. Code it. Launch it.
//                       </p>

//                       <div className="mt-3">
//                         <InviteVoiceAgent />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Floating mini-cards (Web / AI / Applications) */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 16 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.7, delay: 0.15 }}
//                     style={{
//                       position: "absolute",
//                       inset: 0,
//                       pointerEvents: "none",
//                     }}
//                   >
//                     {/* Web Dev card */}
//                     <motion.div
//                       style={{
//                         position: "absolute",
//                         top: "-14px",
//                         left: "-40px",
//                         width: "180px",
//                       }}
//                       animate={{
//                         y: [0, -6, 0],
//                       }}
//                       transition={{
//                         duration: 8,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     >
//                       <div
//                         className="p-3 rounded-4"
//                         style={{
//                           background: "rgba(15,23,42,0.97)",
//                           border: "1px solid rgba(148,163,184,0.7)",
//                           boxShadow: "0 14px 40px rgba(15,23,42,0.95)",
//                           backdropFilter: "blur(12px)",
//                           textAlign: "left",
//                         }}
//                       >
//                         <div
//                           style={{
//                             fontSize: "0.75rem",
//                             color: "#9ca3af",
//                             letterSpacing: "0.14em",
//                             textTransform: "uppercase",
//                             marginBottom: 4,
//                           }}
//                         >
//                           Web
//                         </div>
//                         <div
//                           style={{
//                             fontSize: "0.92rem",
//                             color: "#e5e7eb",
//                             fontWeight: 600,
//                           }}
//                         >
//                           Custom Websites
//                         </div>
//                       </div>
//                     </motion.div>

//                     {/* AI card */}
//                     <motion.div
//                       style={{
//                         position: "absolute",
//                         bottom: "0px",
//                         right: "-32px",
//                         width: "190px",
//                       }}
//                       animate={{
//                         y: [0, 8, 0],
//                       }}
//                       transition={{
//                         duration: 9,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     >
//                       <div
//                         className="p-3 rounded-4"
//                         style={{
//                           background: "rgba(15,23,42,0.97)",
//                           border: "1px solid rgba(148,163,184,0.7)",
//                           boxShadow: "0 16px 40px rgba(15,23,42,0.95)",
//                           backdropFilter: "blur(12px)",
//                           textAlign: "left",
//                         }}
//                       >
//                         <div
//                           style={{
//                             fontSize: "0.75rem",
//                             color: "#9ca3af",
//                             letterSpacing: "0.14em",
//                             textTransform: "uppercase",
//                             marginBottom: 4,
//                           }}
//                         >
//                           AI
//                         </div>
//                         <div
//                           style={{
//                             fontSize: "0.92rem",
//                             color: "#e5e7eb",
//                             fontWeight: 600,
//                           }}
//                         >
//                           Voice & Chat Agents
//                         </div>
//                       </div>
//                     </motion.div>

//                     {/* Applications card */}
//                     <motion.div
//                       style={{
//                         position: "absolute",
//                         bottom: "-40px",
//                         left: "12%",
//                         width: "210px",
//                       }}
//                       animate={{
//                         y: [0, -6, 0],
//                       }}
//                       transition={{
//                         duration: 10,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     >
//                       <div
//                         className="p-3 rounded-4"
//                         style={{
//                           background: "rgba(15,23,42,0.97)",
//                           border: "1px solid rgba(148,163,184,0.7)",
//                           boxShadow: "0 16px 40px rgba(15,23,42,0.96)",
//                           backdropFilter: "blur(12px)",
//                           textAlign: "left",
//                         }}
//                       >
//                         <div
//                           style={{
//                             fontSize: "0.75rem",
//                             color: "#9ca3af",
//                             letterSpacing: "0.14em",
//                             textTransform: "uppercase",
//                             marginBottom: 4,
//                           }}
//                         >
//                           Applications
//                         </div>
//                         <div
//                           style={{
//                             fontSize: "0.92rem",
//                             color: "#e5e7eb",
//                             fontWeight: 600,
//                           }}
//                         >
//                           NYC Application Center
//                         </div>
//                       </div>
//                     </motion.div>
//                   </motion.div>
//                 </motion.div>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <Divider />

//         {/* =============== THREE CORE PILLARS =============== */}
//         <section className="py-5" style={{ position: "relative", zIndex: 1 }}>
//           <Container>
//             <motion.h2
//               className="fw-bold text-center display-6 mb-3"
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               One Studio. Three Core Pillars.
//             </motion.h2>
//             <motion.p
//               className="text-center mb-5"
//               style={{ color: "#9ca3af", maxWidth: 640, margin: "0 auto" }}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.06 }}
//             >
//               Websites engineered for performance, AI agents trained to act like
//               your best employee, and application flows designed for real people
//               in New York City.
//             </motion.p>

//             <Row className="g-4">
//               {[
//                 {
//                   icon: "bi-laptop",
//                   title: "Web Development",
//                   desc: "Custom-coded sites and dashboards built for speed, SEO and conversion — no page builders, no shortcuts.",
//                 },
//                 {
//                   icon: "bi-robot",
//                   title: "AI Voice & Chat",
//                   desc: "24/7 agents that answer, qualify and route clients by phone, SMS or chat while you focus on the real work.",
//                 },
//                 {
//                   icon: "bi-ui-checks-grid",
//                   title: "Application Center",
//                   desc: "Guided NYC applications like SNAP, NYCHA, Section 8 and Cash Assistance with clear steps and human support.",
//                 },
//               ].map((item, idx) => (
//                 <Col md={4} key={item.title}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: idx * 0.08 }}
//                     className="h-100"
//                   >
//                     <div
//                       className="p-4 rounded-4 h-100"
//                       style={{
//                         background: "rgba(15,23,42,0.96)",
//                         border: "1px solid rgba(148,163,184,0.6)",
//                         boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
//                         backdropFilter: "blur(14px)",
//                         transition:
//                           "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
//                       }}
//                     >
//                       <i
//                         className={`bi ${item.icon}`}
//                         style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
//                       />
//                       <h5 className="fw-bold text-white mt-3 mb-2">
//                         {item.title}
//                       </h5>
//                       <p className="mb-0" style={{ color: "#cbd5e1" }}>
//                         {item.desc}
//                       </p>
//                     </div>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         </section>

//         <Divider />

//         {/* =============== MODERN TECH STACK =============== */}
//         <section className="py-5">
//           <Container>
//             <motion.h2
//               className="fw-bold text-center display-6 mb-3"
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               Modern Tech Stack.
//             </motion.h2>
//             <motion.p
//               className="text-center mb-5"
//               style={{ color: "#9ca3af", maxWidth: 640, margin: "0 auto" }}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.06 }}
//             >
//               The same tools used by leading startups and AI companies — tuned
//               to power your website, automations, and AI agents.
//             </motion.p>

//             <Row className="g-4">
//               <Col md={6} lg={3}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="h-100"
//                 >
//                   <div
//                     className="p-4 rounded-4 h-100"
//                     style={{
//                       background: "rgba(15,23,42,0.96)",
//                       border: "1px solid rgba(148,163,184,0.6)",
//                       boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
//                       backdropFilter: "blur(14px)",
//                     }}
//                   >
//                     <i
//                       className="bi bi-window"
//                       style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
//                     />
//                     <h5 className="fw-bold text-white mt-3 mb-2">Frontend</h5>
//                     <p style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
//                       Fast, responsive and premium interfaces for every device.
//                     </p>
//                     <hr
//                       style={{
//                         borderColor: "rgba(148,163,184,0.4)",
//                       }}
//                     />
//                     <ul
//                       className="list-unstyled mb-0"
//                       style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
//                     >
//                       <li>Next.js</li>
//                       <li>React.js</li>
//                       <li>TypeScript</li>
//                       <li>Tailwind CSS & Bootstrap</li>
//                       <li>Framer Motion</li>
//                     </ul>
//                   </div>
//                 </motion.div>
//               </Col>

//               <Col md={6} lg={3}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.08 }}
//                   className="h-100"
//                 >
//                   <div
//                     className="p-4 rounded-4 h-100"
//                     style={{
//                       background: "rgba(15,23,42,0.96)",
//                       border: "1px solid rgba(148,163,184,0.6)",
//                       boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
//                       backdropFilter: "blur(14px)",
//                     }}
//                   >
//                     <i
//                       className="bi bi-cpu"
//                       style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
//                     />
//                     <h5 className="fw-bold text-white mt-3 mb-2">Backend</h5>
//                     <p style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
//                       Robust server-side logic built for real-world workflows.
//                     </p>
//                     <hr
//                       style={{
//                         borderColor: "rgba(148,163,184,0.4)",
//                       }}
//                     />
//                     <ul
//                       className="list-unstyled mb-0"
//                       style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
//                     >
//                       <li>Node.js</li>
//                       <li>Express.js</li>
//                       <li>REST APIs</li>
//                       <li>JWT Authentication</li>
//                       <li>Stripe Payments & Webhooks</li>
//                     </ul>
//                   </div>
//                 </motion.div>
//               </Col>

//               <Col md={6} lg={3}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.16 }}
//                   className="h-100"
//                 >
//                   <div
//                     className="p-4 rounded-4 h-100"
//                     style={{
//                       background: "rgba(15,23,42,0.96)",
//                       border: "1px solid rgba(148,163,184,0.6)",
//                       boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
//                       backdropFilter: "blur(14px)",
//                     }}
//                   >
//                     <i
//                       className="bi bi-database"
//                       style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
//                     />
//                     <h5 className="fw-bold text-white mt-3 mb-2">
//                       Data & DevOps
//                     </h5>
//                     <p style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
//                       Solid databases and cloud deployments tuned for uptime.
//                     </p>
//                     <hr
//                       style={{
//                         borderColor: "rgba(148,163,184,0.4)",
//                       }}
//                     />
//                     <ul
//                       className="list-unstyled mb-0"
//                       style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
//                     >
//                       <li>PostgreSQL</li>
//                       <li>Supabase & Firebase</li>
//                       <li>Vercel & Netlify</li>
//                       <li>AWS</li>
//                       <li>Git / GitHub</li>
//                     </ul>
//                   </div>
//                 </motion.div>
//               </Col>

//               <Col md={6} lg={3}>
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.24 }}
//                   className="h-100"
//                 >
//                   <div
//                     className="p-4 rounded-4 h-100"
//                     style={{
//                       background: "rgba(15,23,42,0.96)",
//                       border: "1px solid rgba(148,163,184,0.6)",
//                       boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
//                       backdropFilter: "blur(14px)",
//                     }}
//                   >
//                     <i
//                       className="bi bi-robot"
//                       style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
//                     />
//                     <h5 className="fw-bold text-white mt-3 mb-2">AI Systems</h5>
//                     <p style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
//                       Custom AI agents that extend your team, not replace it.
//                     </p>
//                     <hr
//                       style={{
//                         borderColor: "rgba(148,163,184,0.4)",
//                       }}
//                     />
//                     <ul
//                       className="list-unstyled mb-0"
//                       style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
//                     >
//                       <li>OpenAI API</li>
//                       <li>RAG Pipelines</li>
//                       <li>AI Chat Agents</li>
//                       <li>AI Voice Agents</li>
//                       <li>ElevenLabs & Twilio Voice</li>
//                     </ul>
//                   </div>
//                 </motion.div>
//               </Col>
//             </Row>
//           </Container>
//         </section>

//         <Divider />

//         {/* =============== WHY BUSINESSES CHOOSE BATISTACK =============== */}
//         <section className="py-5">
//           <Container>
//             <motion.h2
//               className="fw-bold text-center display-6 mb-3"
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               Why Businesses Choose Batistack.
//             </motion.h2>
//             <motion.p
//               className="text-center mb-5"
//               style={{ color: "#9ca3af", maxWidth: 640, margin: "0 auto" }}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.06 }}
//             >
//               Real communication, clear scopes, and code designed to outgrow
//               templates and generic tools.
//             </motion.p>

//             <Row className="g-4">
//               {whyChoose.map((item, idx) => (
//                 <Col md={6} lg={4} key={item.title}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 18 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.45, delay: idx * 0.06 }}
//                     className="h-100"
//                   >
//                     <div
//                       className="p-4 rounded-4 h-100"
//                       style={{
//                         background: "rgba(15,23,42,0.96)",
//                         border: "1px solid rgba(148,163,184,0.6)",
//                         boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
//                         backdropFilter: "blur(12px)",
//                       }}
//                     >
//                       <i
//                         className={`bi ${item.icon}`}
//                         style={{ fontSize: "2rem", color: "#e5e7eb" }}
//                       />
//                       <h5 className="fw-bold text-white mt-3 mb-2">
//                         {item.title}
//                       </h5>
//                       <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
//                         {item.desc}
//                       </p>
//                     </div>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         </section>

//         <Divider />

//         {/* =============== HOW WE WORK =============== */}
//         <section className="py-5">
//           <Container>
//             <motion.div
//               className="text-center mb-5"
//               initial={{ opacity: 0, y: 22 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="fw-bold display-5 text-white">How We Work.</h2>
//               <p
//                 className="text-light fs-5"
//                 style={{ color: "#cbd5e1", maxWidth: 680, margin: "0 auto" }}
//               >
//                 A simple, three-phase method that blends strategy, clean code
//                 and ongoing optimization — so your project isn’t just launched,
//                 it performs.
//               </p>
//             </motion.div>

//             <Row className="g-4 text-center">
//               {howWeWorkSteps.map((step, i) => (
//                 <Col md={4} key={step.title}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 22 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: i * 0.08 }}
//                     className="h-100"
//                   >
//                     <div
//                       className="p-4 rounded-4 h-100"
//                       style={{
//                         background: "rgba(15,23,42,0.96)",
//                         border: "1px solid rgba(148,163,184,0.6)",
//                         boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
//                         backdropFilter: "blur(14px)",
//                       }}
//                     >
//                       <i
//                         className={`bi ${step.icon}`}
//                         style={{ fontSize: "2.4rem", color: "#e5e7eb" }}
//                       />
//                       <h5 className="fw-bold text-white mt-3 mb-2">
//                         {step.title}
//                       </h5>
//                       <p style={{ color: "#cbd5e1" }}>{step.desc}</p>
//                     </div>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>

//             <div className="text-center mt-5">
//               <AnimatedButton text="Book a Free Call" href="/contact" />
//             </div>
//           </Container>
//         </section>

//         <Divider />

//         {/* =============== TRUSTED ACROSS NEW YORK =============== */}
//         <section className="py-5">
//           <Container className="text-center">
//             <motion.h2
//               className="fw-bold text-white display-6 mb-3"
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               Trusted Across New York.
//             </motion.h2>

//             <motion.p
//               className="text-light mb-4"
//               style={{ color: "#cbd5e1" }}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.06 }}
//             >
//               From Brooklyn to The Hamptons, Batistack supports businesses,
//               professionals and families that need a serious digital partner.
//             </motion.p>

//             <Row className="g-4 mt-3">
//               {[
//                 "40+ Projects Completed",
//                 "6+ Years of Experience",
//                 "NYC Web & AI Specialist",
//                 "Serving All Five Boroughs",
//               ].map((stat, idx) => (
//                 <Col md={3} key={stat}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 18 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: idx * 0.06 }}
//                   >
//                     <div
//                       className="p-4 rounded-4 h-100"
//                       style={{
//                         background: "rgba(15,23,42,0.96)",
//                         border: "1px solid rgba(148,163,184,0.6)",
//                         boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
//                         backdropFilter: "blur(12px)",
//                       }}
//                     >
//                       <h5 className="text-white fw-bold mb-0">{stat}</h5>
//                     </div>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>

//             <div className="text-center mt-5">
//               <AnimatedButton text="Start Your Project" href="/contact" />
//             </div>
//           </Container>
//         </section>

//         <Divider />

//         {/* =============== FINAL CTA =============== */}
//         <section className="py-5">
//           <Container className="text-center">
//             <motion.h2
//               className="fw-bold display-5 mb-3"
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               Ready to build something serious?
//             </motion.h2>
//             <motion.p
//               className="text-light mb-4"
//               style={{ color: "#cbd5e1", maxWidth: 640, margin: "0 auto" }}
//               initial={{ opacity: 0, y: 18 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.06 }}
//             >
//               Let&apos;s design a system — website, AI, and applications — that
//               feels premium, runs smoothly, and actually moves your business
//               forward.
//             </motion.p>
//             <AnimatedButton text="Book a Free Call" href="/contact" />
//           </Container>
//         </section>

//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Home;

import { useTrafficTracker } from "../hook/useTrafficTracker";
import images from "../images";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import AnimatedButton from "../components/Button";
import InviteVoiceAgent from "../components/InviteBtn";

function Home() {
  useTrafficTracker("page_view", "/");

  const howWeWorkSteps = [
    {
      icon: "bi-lightbulb",
      title: "1. Strategy",
      desc: "We clarify your goals, map your systems, and define a clear build roadmap.",
    },
    {
      icon: "bi-cpu",
      title: "2. Build",
      desc: "Design, development and AI training — fast, clean and performance-focused.",
    },
    {
      icon: "bi-rocket",
      title: "3. Launch & Support",
      desc: "Deployment, analytics, and ongoing improvements so your system keeps paying off.",
    },
  ];

  const whyChoose = [
    {
      icon: "bi-diagram-3",
      title: "Full System Thinking",
      desc: "We don’t just build pages or bots. We design the full flow from click to client.",
    },
    {
      icon: "bi-person-workspace",
      title: "Direct Builder Access",
      desc: "You speak directly with the developer — no layers of account managers in between.",
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Built to Convert",
      desc: "Every layout, call-to-action and automation is designed around leads and revenue.",
    },
    {
      icon: "bi-shield-lock",
      title: "Security & Stability",
      desc: "Clean, well-structured code and best practices on auth, data and deployments.",
    },
    {
      icon: "bi-clock-history",
      title: "Fast Turnaround",
      desc: "Most projects move from idea to launch within weeks, not months.",
    },
    {
      icon: "bi-people",
      title: "Long-Term Partnership",
      desc: "We stay available for upgrades, support, and new ideas as you grow.",
    },
  ];

  function Divider() {
    return (
      <div className="w-100 d-flex justify-content-center">
        <div
          style={{
            height: "2px",
            width: "120px",
            background:
              "linear-gradient(90deg, rgba(148,163,184,0) 0%, #e5e7eb 50%, rgba(148,163,184,0) 100%)",
            borderRadius: "999px",
            margin: "3.5rem 0",
            opacity: 0.75,
          }}
        ></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>
          Batistack Development | NYC Web Design, AI Agents & Application Help
        </title>
        <meta
          name="description"
          content="Batistack builds high-performance websites, AI voice bots, chatbots, and NYC application services for businesses and families in Brooklyn, Manhattan, Queens, and The Hamptons."
        />
        <meta
          name="keywords"
          content="NYC web design, React developer NYC, TypeScript developer, AI chatbots NYC, AI voice agents NYC, custom software Manhattan, Brooklyn web developer, application help NYC, Node developer NYC, AI automation NYC"
        />
        <meta
          property="og:title"
          content="Batistack Development | Web & AI Solutions Built in NYC"
        />
        <meta
          property="og:description"
          content="Web development, AI automation, and application support for New Yorkers. Get a custom-built system that brings real leads and results."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://batistack.com/" />
        <meta
          property="og:image"
          content="https://batistack.com/assets/og-image.jpg"
        />
        <link rel="canonical" href="https://batistack.com/" />
        <meta name="robots" content="index,follow" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Batistack Development",
            "image": "https://batistack.com/assets/og-image.jpg",
            "url": "https://batistack.com",
            "telephone": "+1-929-733-1600",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "postalCode": "11201",
              "addressCountry": "US"
            },
            "areaServed": [
              "Brooklyn",
              "Manhattan",
              "Queens",
              "The Hamptons",
              "New York City"
            ],
            "description": "Batistack is an NYC-based web development and AI automation studio that builds custom websites, AI agents, and application workflows for local businesses and residents.",
            "sameAs": [
              "https://www.linkedin.com/in/elisaul-batista/"
            ]
          }
        `}
        </script>
      </Helmet>

      <div
        style={{
          background:
            "radial-gradient(circle at top, #0b1120 0, #020617 45%, #000000 100%)",
          color: "#f9fafb",
          overflowX: "hidden",
          fontFamily:
            '-apple-system, system-ui, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
        }}
      >
        {/* ================= HERO ================= */}
        <section
          className="py-5 min-vh-100 d-flex align-items-center"
          style={{ position: "relative" }}
        >
          {/* Subtle ambient glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              opacity: 0.45,
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "520px",
                height: "520px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(148,163,184,0.28) 0, transparent 60%)",
                top: "-120px",
                left: "10%",
                filter: "blur(60px)",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "380px",
                height: "380px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(15,23,42,0.9) 0, transparent 60%)",
                bottom: "-120px",
                right: "-40px",
                filter: "blur(40px)",
              }}
            ></div>
          </div>

          <Container style={{ position: "relative", zIndex: 1 }}>
            <Row className="align-items-center flex-column-reverse flex-lg-row g-5">
              {/* LEFT TEXT */}
              <Col lg={6} className="text-center text-lg-start">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="d-inline-flex align-items-center px-3 py-1 rounded-pill mb-4"
                  style={{
                    background: "rgba(15,23,42,0.9)",
                    border: "1px solid rgba(148,163,184,0.55)",
                    backdropFilter: "blur(12px)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "999px",
                      background: "#22c55e",
                      marginRight: 8,
                    }}
                  ></span>
                  NYC Web · AI · Applications
                </motion.div>

                <motion.h1
                  className="fw-bold display-4 mb-3"
                  style={{ lineHeight: 1.1 }}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                >
                  Web, AI & Applications{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(120deg,#e5e7eb 0%,#f9fafb 40%,#9ca3af 100%)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    built like a product,
                  </span>
                  <br />
                  run like a real business.
                </motion.h1>

                <motion.p
                  className="fs-5 mb-4"
                  style={{ color: "#cbd5e1", maxWidth: 560 }}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.12 }}
                >
                  Batistack designs and builds custom websites, AI voice & chat
                  agents, and guided application flows for New Yorkers. One
                  studio to plan it, code it, and keep it running.
                </motion.p>

                <motion.div
                  className="d-flex flex-wrap gap-3 mb-4"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.18 }}
                >
                  <AnimatedButton text="Book a Free Call" href="/contact" />
                  <AnimatedButton text="Explore AI Services" href="/services" />
                  <AnimatedButton
                    text="Application Center"
                    href="/applications"
                  />
                </motion.div>

                <motion.div
                  className="d-flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.22 }}
                >
                  {[
                    { label: "Projects Delivered", value: "40+" },
                    { label: "Years of Experience", value: "6+" },
                    { label: "NYC Boroughs Served", value: "5" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="px-3 py-2 rounded-4"
                      style={{
                        background: "rgba(15,23,42,0.9)",
                        border: "1px solid rgba(148,163,184,0.6)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "#e5e7eb",
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "#9ca3af",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </Col>

              <Col lg={6} className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 16 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    position: "relative",
                    maxWidth: 460,
                    margin: "0 auto",
                  }}
                >
                  <motion.div
                    className="shadow-lg"
                    style={{
                      position: "relative",
                      borderRadius: "28px",
                      padding: "26px 28px 24px",

                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 100%)",

                      border: "1px solid rgba(255,255,255,0.55)",

                      backdropFilter: "blur(28px) saturate(180%)",
                      WebkitBackdropFilter: "blur(28px) saturate(180%)",

                      boxShadow:
                        "0 8px 32px rgba(0,0,0,0.35), inset 0 0 22px rgba(255,255,255,0.18)",

                      overflow: "hidden",
                      zIndex: 1,
                    }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "-40%",
                        width: "180%",
                        height: "100%",
                        background:
                          "linear-gradient(75deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.05) 60%)",
                        opacity: 0.35,
                        transform: "skewX(-12deg)",
                        pointerEvents: "none",
                      }}
                    />

                    <div
                      className="d-flex justify-content-between align-items-center mb-3"
                      style={{
                        position: "relative",
                        zIndex: 3,
                        borderBottom: "1px solid rgba(255,255,255,0.25)",
                        paddingBottom: 10,
                      }}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.9)",
                          }}
                        />
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.7)",
                          }}
                        />
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.8)",
                          }}
                        />
                      </div>

                      <span
                        style={{
                          fontSize: "0.78rem",
                          color: "#e2e8f0",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                        }}
                      >
                        Batistack Development
                      </span>
                    </div>

                    <div
                      className="d-flex justify-content-center mb-3"
                      style={{ paddingTop: 4, position: "relative", zIndex: 3 }}
                    >
                      <img
                        src={images.logo2}
                        alt="Batistack Logo"
                        className="rounded-circle"
                        style={{
                          width: 220,
                          height: 220,
                          objectFit: "cover",
                          border: "2px solid rgba(255,255,255,0.45)",
                          boxShadow:
                            "0 22px 55px rgba(0,0,0,0.45), 0 0 55px rgba(255,255,255,0.18)",
                        }}
                      />
                    </div>

                    <div
                      className="mt-3"
                      style={{ position: "relative", zIndex: 3 }}
                    >
                      <InviteVoiceAgent />
                    </div>
                  </motion.div>

                  <motion.div
                    style={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                    }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                  >
                    <motion.div
                      className="floating-card"
                      style={{
                        position: "absolute",
                        top: "8%",
                        left: "-5%",
                        padding: "10px 14px",
                        borderRadius: "16px",
                        background: "rgba(15,23,42,0.96)",
                        border: "1px solid rgba(234, 237, 242, 0.5)",
                        backdropFilter: "blur(16px)",
                        fontSize: "0.78rem",
                        textAlign: "left",
                        zIndex: 10,
                      }}
                      animate={{ y: [-6, 4, -6] }}
                      transition={{
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: "#9ca3af",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                        }}
                      >
                        Websites
                      </div>
                      <div
                        style={{
                          fontWeight: 600,
                          color: "#e5e7eb",
                        }}
                      >
                        Landing Pages · Dashboards
                      </div>
                    </motion.div>

                    <motion.div
                      className="floating-card"
                      style={{
                        position: "absolute",
                        bottom: "4%",
                        right: "-5%",
                        padding: "10px 14px",
                        borderRadius: "16px",
                        background: "rgba(15,23,42,0.96)",
                        border: "1px solid rgba(148,163,184,0.5)",
                        backdropFilter: "blur(16px)",
                        fontSize: "0.78rem",
                        textAlign: "left",
                        zIndex: 10,
                      }}
                      animate={{ y: [4, -6, 4] }}
                      transition={{
                        duration: 6.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: "#9ca3af",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                        }}
                      >
                        AI Agents
                      </div>
                      <div
                        style={{
                          fontWeight: 600,
                          color: "#e5e7eb",
                        }}
                      >
                        Phone · Chat · Workflows
                      </div>
                    </motion.div>

                    <motion.div
                      className="floating-card"
                      style={{
                        position: "absolute",
                        bottom: "-2%",
                        left: "10%",
                        padding: "10px 14px",
                        borderRadius: "16px",
                        background: "rgba(15,23,42,0.96)",
                        border: "1px solid rgba(148,163,184,0.5)",
                        backdropFilter: "blur(16px)",
                        fontSize: "0.78rem",
                        textAlign: "left",
                        zIndex: 10,
                      }}
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: "#9ca3af",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                        }}
                      >
                        Application Center
                      </div>
                      <div
                        style={{
                          fontWeight: 600,
                          color: "#e5e7eb",
                        }}
                      >
                        SNAP · NYCHA · DMV
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        <Divider />

        <section className="py-5" style={{ position: "relative", zIndex: 1 }}>
          <Container>
            <motion.h2
              className="fw-bold text-center display-6 mb-3"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              One Company. Three Core Pillars.
            </motion.h2>
            <motion.p
              className="text-center mb-5"
              style={{ color: "#9ca3af", maxWidth: 640, margin: "0 auto" }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              Websites engineered for performance, AI agents trained to act like
              your best employee, and application flows designed for real people
              in New York City.
            </motion.p>

            <Row className="g-4">
              {[
                {
                  icon: "bi-laptop",
                  title: "Web Development",
                  desc: "Custom-coded sites and dashboards built for speed, SEO and conversion — no page builders, no shortcuts.",
                },
                {
                  icon: "bi-robot",
                  title: "AI Voice & Chat",
                  desc: "24/7 agents that answer, qualify and route clients by phone, SMS or chat while you focus on the real work.",
                },
                {
                  icon: "bi-ui-checks-grid",
                  title: "Application Center",
                  desc: "Guided NYC applications like  NYCHA, DMV, SNAP, Cash Assistance and more with clear steps and human support.",
                },
              ].map((item, idx) => (
                <Col md={4} key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="h-100"
                  >
                    <div
                      className="p-4 rounded-4 h-100"
                      style={{
                        background: "rgba(15,23,42,0.96)",
                        border: "1px solid rgba(148,163,184,0.6)",
                        boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
                        backdropFilter: "blur(14px)",
                        transition:
                          "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                      }}
                    >
                      <i
                        className={`bi ${item.icon}`}
                        style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
                      />
                      <h5 className="fw-bold text-white mt-3 mb-2">
                        {item.title}
                      </h5>
                      <p className="mb-0" style={{ color: "#cbd5e1" }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <Divider />

        <section className="py-5">
          <Container>
            <motion.h2
              className="fw-bold text-center display-6 mb-3"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Modern Tech Stack.
            </motion.h2>
            <motion.p
              className="text-center mb-5"
              style={{ color: "#9ca3af", maxWidth: 640, margin: "0 auto" }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              The same tools used by leading startups and AI companies — tuned
              to power your website, automations, and AI agents.
            </motion.p>

            <Row className="g-4">
              <Col md={6} lg={3}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-100"
                >
                  <div
                    className="p-4 rounded-4 h-100"
                    style={{
                      background: "rgba(15,23,42,0.96)",
                      border: "1px solid rgba(148,163,184,0.6)",
                      boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    <i
                      className="bi bi-window"
                      style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
                    />
                    <h5 className="fw-bold text-white mt-3 mb-2">Frontend</h5>
                    <p style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                      Fast, responsive and premium interfaces for every device.
                    </p>
                    <hr
                      style={{
                        borderColor: "rgba(148,163,184,0.4)",
                      }}
                    />
                    <ul
                      className="list-unstyled mb-0"
                      style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
                    >
                      <li>Next.js</li>
                      <li>React.js</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS & Bootstrap</li>
                      <li>Framer Motion</li>
                    </ul>
                  </div>
                </motion.div>
              </Col>

              <Col md={6} lg={3}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                  className="h-100"
                >
                  <div
                    className="p-4 rounded-4 h-100"
                    style={{
                      background: "rgba(15,23,42,0.96)",
                      border: "1px solid rgba(148,163,184,0.6)",
                      boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    <i
                      className="bi bi-cpu"
                      style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
                    />
                    <h5 className="fw-bold text-white mt-3 mb-2">Backend</h5>
                    <p style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                      Robust server-side logic built for real-world workflows.
                    </p>
                    <hr
                      style={{
                        borderColor: "rgba(148,163,184,0.4)",
                      }}
                    />
                    <ul
                      className="list-unstyled mb-0"
                      style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
                    >
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>REST APIs</li>
                      <li>JWT Authentication</li>
                      <li>Stripe Payments & Webhooks</li>
                    </ul>
                  </div>
                </motion.div>
              </Col>

              <Col md={6} lg={3}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.16 }}
                  className="h-100"
                >
                  <div
                    className="p-4 rounded-4 h-100"
                    style={{
                      background: "rgba(15,23,42,0.96)",
                      border: "1px solid rgba(148,163,184,0.6)",
                      boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    <i
                      className="bi bi-database"
                      style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
                    />
                    <h5 className="fw-bold text-white mt-3 mb-2">
                      Data & DevOps
                    </h5>
                    <p style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                      Solid databases and cloud deployments tuned for uptime.
                    </p>
                    <hr
                      style={{
                        borderColor: "rgba(148,163,184,0.4)",
                      }}
                    />
                    <ul
                      className="list-unstyled mb-0"
                      style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
                    >
                      <li>PostgreSQL</li>
                      <li>Supabase & Firebase</li>
                      <li>Vercel & Netlify</li>
                      <li>AWS</li>
                      <li>Git / GitHub</li>
                    </ul>
                  </div>
                </motion.div>
              </Col>

              <Col md={6} lg={3}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.24 }}
                  className="h-100"
                >
                  <div
                    className="p-4 rounded-4 h-100"
                    style={{
                      background: "rgba(15,23,42,0.96)",
                      border: "1px solid rgba(148,163,184,0.6)",
                      boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
                      backdropFilter: "blur(14px)",
                    }}
                  >
                    <i
                      className="bi bi-robot"
                      style={{ fontSize: "2.2rem", color: "#e5e7eb" }}
                    />
                    <h5 className="fw-bold text-white mt-3 mb-2">AI Systems</h5>
                    <p style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>
                      Custom AI agents that extend your team, not replace it.
                    </p>
                    <hr
                      style={{
                        borderColor: "rgba(148,163,184,0.4)",
                      }}
                    />
                    <ul
                      className="list-unstyled mb-0"
                      style={{ color: "#e5e7eb", fontSize: "0.9rem" }}
                    >
                      <li>OpenAI API</li>
                      <li>RAG Pipelines</li>
                      <li>AI Chat Agents</li>
                      <li>AI Voice Agents</li>
                      <li>ElevenLabs & Twilio Voice</li>
                    </ul>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        <Divider />

        <section className="py-5">
          <Container>
            <motion.h2
              className="fw-bold text-center display-6 mb-3"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Businesses Choose Batistack.
            </motion.h2>
            <motion.p
              className="text-center mb-5"
              style={{ color: "#9ca3af", maxWidth: 640, margin: "0 auto" }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              Real communication, clear scopes, and code designed to outgrow
              templates and generic tools.
            </motion.p>

            <Row className="g-4">
              {whyChoose.map((item, idx) => (
                <Col md={6} lg={4} key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    className="h-100"
                  >
                    <div
                      className="p-4 rounded-4 h-100"
                      style={{
                        background: "rgba(15,23,42,0.96)",
                        border: "1px solid rgba(148,163,184,0.6)",
                        boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <i
                        className={`bi ${item.icon}`}
                        style={{ fontSize: "2rem", color: "#e5e7eb" }}
                      />
                      <h5 className="fw-bold text-white mt-3 mb-2">
                        {item.title}
                      </h5>
                      <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <Divider />

        <section className="py-5">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="fw-bold display-5 text-white">How We Work.</h2>
              <p
                className="text-light fs-5"
                style={{ color: "#cbd5e1", maxWidth: 680, margin: "0 auto" }}
              >
                A simple, three-phase method that blends strategy, clean code
                and ongoing optimization — so your project isn’t just launched,
                it performs.
              </p>
            </motion.div>

            <Row className="g-4 text-center">
              {howWeWorkSteps.map((step, i) => (
                <Col md={4} key={step.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="h-100"
                  >
                    <div
                      className="p-4 rounded-4 h-100"
                      style={{
                        background: "rgba(15,23,42,0.96)",
                        border: "1px solid rgba(148,163,184,0.6)",
                        boxShadow: "0 18px 45px rgba(15,23,42,0.9)",
                        backdropFilter: "blur(14px)",
                      }}
                    >
                      <i
                        className={`bi ${step.icon}`}
                        style={{ fontSize: "2.4rem", color: "#e5e7eb" }}
                      />
                      <h5 className="fw-bold text-white mt-3 mb-2">
                        {step.title}
                      </h5>
                      <p style={{ color: "#cbd5e1" }}>{step.desc}</p>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>

            <div className="text-center mt-5">
              <AnimatedButton text="Book a Free Call" href="/contact" />
            </div>
          </Container>
        </section>

        <Divider />

        <section className="py-5">
          <Container className="text-center">
            <motion.h2
              className="fw-bold text-white display-6 mb-3"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Trusted Across New York.
            </motion.h2>

            <motion.p
              className="text-light mb-4"
              style={{ color: "#cbd5e1" }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              From Brooklyn to The Hamptons, Batistack supports businesses,
              professionals and families that need a serious digital partner.
            </motion.p>

            <Row className="g-4 mt-3">
              {[
                "40+ Projects Completed",
                "6+ Years of Experience",
                "NYC Web & AI Specialist",
                "Serving All Five Boroughs",
              ].map((stat, idx) => (
                <Col md={3} key={stat}>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                  >
                    <div
                      className="p-4 rounded-4 h-100"
                      style={{
                        background: "rgba(15,23,42,0.96)",
                        border: "1px solid rgba(148,163,184,0.6)",
                        boxShadow: "0 16px 40px rgba(15,23,42,0.9)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <h5 className="text-white fw-bold mb-0">{stat}</h5>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>

            <div className="text-center mt-5">
              <AnimatedButton text="Start Your Project" href="/contact" />
            </div>
          </Container>
        </section>

        <Divider />

        <section className="py-5">
          <Container className="text-center">
            <motion.h2
              className="fw-bold display-5 mb-3"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to build something serious?
            </motion.h2>
            <motion.p
              className="text-light mb-4"
              style={{ color: "#cbd5e1", maxWidth: 640, margin: "0 auto" }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              Let&apos;s design a system — website, AI, and applications — that
              feels premium, runs smoothly, and actually moves your business
              forward.
            </motion.p>
            <AnimatedButton text="Book a Free Call" href="/contact" />
          </Container>
        </section>

        <Footer />

        <style>{`
          .floating-card:hover {
            transform: translateY(-4px);
            transition: transform 200ms ease;
          }
          section .rounded-4 {
            transition: transform 200ms ease, box-shadow 220ms ease, border-color 220ms ease;
          }
          section .rounded-4:hover {
            transform: translateY(-4px);
            box-shadow: 0 24px 60px rgba(0,0,0,0.8);
            border-color: rgba(226,232,240,0.9) !important;
          }
        `}</style>
      </div>
    </>
  );
}

export default Home;
