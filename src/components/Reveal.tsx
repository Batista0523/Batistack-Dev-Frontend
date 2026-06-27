'use client';
import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  style,
}: {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
