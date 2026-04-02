import { type ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children:  ReactNode;
  strength?: number;
}

export default function MagneticButton({ children, strength = 0.3 }: MagneticButtonProps) {
  const ref                           = useRef<HTMLDivElement>(null);
  const [offset, setOffset]           = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el   = ref.current;
    if (!el) return;

    const rect  = el.getBoundingClientRect();
    const cx    = rect.left + rect.width  / 2;
    const cy    = rect.top  + rect.height / 2;

    setOffset({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}
