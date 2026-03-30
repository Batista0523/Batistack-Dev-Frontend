import { motion } from "framer-motion";
import type { ChatMessage } from "./types";

interface MessageBubbleProps {
  message: ChatMessage;
}

function formatMessageContent(content: string) {
  // Keep relative-path links clickable without changing the backend response shape.
  return content
    .replace(
      /(\/[^\s]+?)(?=[\s.?!,]|$)/g,
      '<a href="$1" class="chatbot-inline-link">$1</a>'
    )
    .replace(/\n/g, "<br />");
}

function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <motion.div
      className={`chatbot-message-row ${isUser ? "is-user" : "is-assistant"}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <div className={`chatbot-message-bubble ${isUser ? "is-user" : "is-assistant"}`}>
        <div
          dangerouslySetInnerHTML={{
            __html: formatMessageContent(message.content),
          }}
        />
      </div>
      <span className="chatbot-message-time">{message.timestamp}</span>
    </motion.div>
  );
}

export default MessageBubble;
