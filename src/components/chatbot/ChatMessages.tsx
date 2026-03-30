import { AnimatePresence, motion } from "framer-motion";
import type { RefObject } from "react";
import MessageBubble from "./MessageBubble";
import type { ChatMessage } from "./types";

interface ChatMessagesProps {
  messages: ChatMessage[];
  loading: boolean;
  bottomRef: RefObject<HTMLDivElement | null>;
}

function ChatMessages({ messages, loading, bottomRef }: ChatMessagesProps) {
  return (
    <div className="chatbot-messages">
      <div className="chatbot-messages-inner">
        {messages.map((message, index) => (
          <MessageBubble
            key={`${message.timestamp}-${message.role}-${index}`}
            message={message}
          />
        ))}

        <AnimatePresence>
          {loading && (
            <motion.div
              className="chatbot-message-row is-assistant"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="chatbot-message-bubble is-assistant chatbot-typing">
                <span />
                <span />
                <span />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default ChatMessages;
