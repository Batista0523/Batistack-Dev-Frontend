import { motion } from "framer-motion";

function InviteVoiceAgent() {
  return (
    <div className="text-center my-5">
      <motion.h5
        className="text-light mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Experience Our AI Voice Assistant — Call Now!
      </motion.h5>

      <motion.a
        href="tel:+19296007370"
        className="btn btn-outline-light btn-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        📞 (929) 600-7370
      </motion.a>

      <motion.p
        className="text-secondary mt-3"
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
