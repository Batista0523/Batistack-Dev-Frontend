'use client';
import { motion } from "framer-motion";
import AnimatedButton from "./Button";
import images from "../images";

const PARTICLE_CONFIGS: Array<{
  top: string;
  left: string;
  duration: number;
  delay: number;
}> = [
  { top: "8%",  left: "14%",  duration: 7.2,  delay: 0.3  },
  { top: "15%", left: "73%",  duration: 9.8,  delay: 1.1  },
  { top: "23%", left: "38%",  duration: 6.4,  delay: 0.7  },
  { top: "31%", left: "91%",  duration: 11.3, delay: 1.6  },
  { top: "42%", left: "5%",   duration: 8.1,  delay: 0.0  },
  { top: "48%", left: "57%",  duration: 10.5, delay: 0.9  },
  { top: "56%", left: "29%",  duration: 6.9,  delay: 1.4  },
  { top: "63%", left: "82%",  duration: 12.0, delay: 0.2  },
  { top: "71%", left: "46%",  duration: 7.7,  delay: 1.7  },
  { top: "79%", left: "11%",  duration: 9.1,  delay: 0.5  },
  { top: "87%", left: "67%",  duration: 8.6,  delay: 1.2  },
  { top: "92%", left: "35%",  duration: 6.2,  delay: 0.8  },
  { top: "12%", left: "52%",  duration: 11.7, delay: 1.5  },
  { top: "27%", left: "88%",  duration: 7.4,  delay: 0.1  },
  { top: "39%", left: "21%",  duration: 9.3,  delay: 1.0  },
  { top: "53%", left: "96%",  duration: 6.7,  delay: 1.8  },
  { top: "66%", left: "63%",  duration: 10.2, delay: 0.4  },
  { top: "74%", left: "7%",   duration: 8.8,  delay: 1.3  },
  { top: "82%", left: "44%",  duration: 7.1,  delay: 0.6  },
  { top: "18%", left: "31%",  duration: 11.0, delay: 1.6  },
  { top: "44%", left: "79%",  duration: 6.5,  delay: 0.2  },
  { top: "95%", left: "55%",  duration: 9.6,  delay: 1.4  },
];

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  isContactPage?: boolean;
}

function HeroSection({
  title,
  description,
  buttonText,
  buttonHref,
  isContactPage = false,
}: HeroSectionProps) {
  return (
    <section
      style={{
        position: "relative",
        padding: "6rem 0 5rem",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top, #0b1120 0%, #020617 60%, #000000 100%)",
        color: "#fff",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 20%, rgba(66,153,255,0.18), transparent 60%), radial-gradient(circle at 70% 80%, rgba(255,99,146,0.18), transparent 60%)",
          filter: "blur(70px)",
          opacity: 0.6,
          pointerEvents: "none",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {PARTICLE_CONFIGS.map((p, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.45)",
            top: p.top,
            left: p.left,
            filter: "blur(1.5px)",
          }}
          animate={{
            y: [0, -14, 0],
            opacity: [0.3, 0.85, 0.35],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div className="row align-items-center gy-5">
          <div className="col-md-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                width: 280,
                height: 280,
                borderRadius: "999px",
                margin: "0 auto",
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.35)",
                backdropFilter: "blur(14px)",
                boxShadow:
                  "0 0 45px rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.5)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <motion.img
                src={images.logo2.src}
                alt="Batistack Logo"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          <div className="col-md-6 text-center text-md-start">
            <motion.h1
              className="fw-bold mb-4"
              style={{
                fontSize: "clamp(2.4rem, 4vw, 3.3rem)",
                lineHeight: 1.2,
              }}
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="fs-5 mb-4"
              style={{
                maxWidth: 480,
                color: "#d1d5db",
                lineHeight: 1.6,
                margin: "0 auto 1.5rem",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {description}
            </motion.p>

            {buttonText && buttonHref && !isContactPage && (
              <div>
                <AnimatedButton variant="primary" href={buttonHref}>
                  {buttonText}
                </AnimatedButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
