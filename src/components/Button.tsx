import { motion } from "framer-motion";

interface AnimatedButtonProps {
  text: string;
  href: string;
}

function AnimatedButton({ text, href }: AnimatedButtonProps) {
  return (
    <motion.a
      href={href}
      className="btn btn-outline-light btn-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {text}
    </motion.a>
  );
}

export default AnimatedButton;