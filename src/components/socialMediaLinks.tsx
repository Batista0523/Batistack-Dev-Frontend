
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";

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

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      setShow(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="position-fixed"
      style={{
        bottom: "25px",
        left: "25px",
        background: "#fff",
        borderRadius: "50px",
        boxShadow: "0 20px 20px rgba(0,0,0,0.1)",
        padding: "5px 15px",
        zIndex: 999,
        display: "flex",
        gap: "18px",
        alignItems: "center",
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
            color: social.color,
            fontSize: "1.6rem",
            textDecoration: "none",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          {social.icon}
        </a>
      ))}
    </motion.div>
  );
};

export default SocialMediaLinks;
