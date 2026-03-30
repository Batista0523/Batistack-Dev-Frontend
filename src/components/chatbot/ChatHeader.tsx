import { motion } from "framer-motion";
import ChatBrand from "./ChatBrand";

interface ChatHeaderProps {
  onClose: () => void;
}

function ChatHeader({ onClose }: ChatHeaderProps) {
  return (
    <header className="chatbot-header">
      <div className="chatbot-header-brand-block">
        <ChatBrand compact />
        <div>
        <p className="chatbot-header-title">Batistack AI</p>
        <p className="chatbot-header-subtitle">Ask anything about your project</p>
        </div>
      </div>

      <motion.button
        type="button"
        className="chatbot-close-button"
        onClick={onClose}
        whileHover={{ rotate: 90 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Close chat"
      >
        <span />
        <span />
      </motion.button>
    </header>
  );
}

export default ChatHeader;
