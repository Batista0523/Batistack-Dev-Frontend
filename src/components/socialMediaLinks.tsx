import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaEllipsisH,
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50;
      setShow(isBottom);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="social-media-links-container"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#fff",
        borderRadius: "40px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        padding: "8px 14px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "14px",
      }}
    >
      {(!isMobile || expanded) &&
        socials.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            style={{
              color: social.color,
              fontSize: "1.4rem",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {social.icon}
          </a>
        ))}

      {isMobile && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          style={{
            background: "#0d6efd",
            border: "none",
            color: "#fff",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
          aria-label="Toggle Social Links"
        >
          <FaEllipsisH />
        </button>
      )}
    </motion.div>
  );
};

export default SocialMediaLinks;
