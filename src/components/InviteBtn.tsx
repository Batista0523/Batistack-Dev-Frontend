import { motion } from "framer-motion";

interface InviteVoiceAgentProps {
  variant?: "light" | "dark";
}

function InviteVoiceAgent({ variant = "light" }: InviteVoiceAgentProps) {
  const isDark = variant === "dark";

  const baseClass = isDark
    ? "btn btn-outline-dark btn-lg"
    : "btn btn-outline-light btn-lg";

  const hoverEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.classList.add(
      isDark ? "bg-black" : "bg-white",
      isDark ? "text-white" : "text-dark",
      isDark ? "border-black" : "border-white"
    );
  };

  const hoverLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.classList.remove(
      isDark ? "bg-black" : "bg-white",
      isDark ? "text-white" : "text-dark",
      isDark ? "border-black" : "border-white"
    );
  };

  return (
    <div className="text-center my-5">
      <motion.h5
        className={isDark ? "text-dark mb-3" : "text-light mb-3"}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Experience Our AI Voice Assistant DEMO — Call Now!
      </motion.h5>

      <motion.a
        href="tel:+19296007370"
        className={baseClass}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        onMouseEnter={hoverEnter}
        onMouseLeave={hoverLeave}
      >
        📞 (929) 600-7370
      </motion.a>

      <motion.p
        className={isDark ? "text-secondary mt-3" : "text-light mt-3"}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        24/7 AI-Powered Call Agent — No Hold Times. No Robots. Just Smart.
      </motion.p>
    </div>
  );
}

export default InviteVoiceAgent;
