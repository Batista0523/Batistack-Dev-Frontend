import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaEllipsisV,
  FaTimes,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/bati.stack",
    name: "Instagram",
    color: "#E1306C",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/company/batistack/?viewAsMember=true",
    name: "LinkedIn",
    color: "#0077B5",
  },
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/profile.php?id=61575947108161",
    name: "Facebook",
    color: "#1877F2",
  },
  {
    icon: <FaTwitter />,
    href: "https://x.com/BatistackDev",
    name: "Twitter",
    color: "#1DA1F2",
  },
];

const SocialMediaLinks = () => {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50;
      setShow(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="position-fixed"
      style={{
        bottom: "25px",
        right: "25px",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              padding: "12px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "flex-start",
            }}
          >
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: social.color,
                  fontSize: "1.3rem",
                  gap: "10px",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                {social.icon}
                <span style={{ fontSize: "0.95rem", color: "#333" }}>
                  {social.name}
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded((prev) => !prev)}
        style={{
          background: "#0d6efd",
          border: "2px solid #ffffff",
          
          color: "#fff",
          borderRadius: "40px",
          padding: "10px 16px",
          marginBottom: "250px",
          fontSize: "0.85rem",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          gap: "8px",
          boxShadow: "0 5px 10px rgba(28, 192, 184, 0.61)",
          cursor: "pointer",
        }}
      >
        {expanded ? <><FaTimes /> Close</> : <><FaEllipsisV /> Social Media</>}
      </button>
    </motion.div>
  );
};

export default SocialMediaLinks;
