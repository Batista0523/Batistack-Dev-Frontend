import { motion } from "framer-motion";

interface ChatInputProps {
  value: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
}

function ChatInput({ value, loading, onChange, onSend }: ChatInputProps) {
  const canSend = value.trim().length > 0 && !loading;

  return (
    <div className="chatbot-input-bar">
      <div className="chatbot-input-shell">
        <input
          className="chatbot-input-field"
          placeholder="Ask about your website..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
        />

        <motion.button
          type="button"
          className="chatbot-send-button cursor-hover"
          onClick={onSend}
          disabled={!canSend}
          whileHover={canSend ? { y: -1, scale: 1.02 } : undefined}
          whileTap={canSend ? { scale: 0.98 } : undefined}
          aria-label="Send message"
        >
          Send
        </motion.button>
      </div>
    </div>
  );
}

export default ChatInput;
