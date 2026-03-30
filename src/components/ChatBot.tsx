import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import "../ChatBot.css";
import ChatHeader from "./chatbot/ChatHeader";
import ChatMessages from "./chatbot/ChatMessages";
import ChatInput from "./chatbot/ChatInput";
import ChatBrand from "./chatbot/ChatBrand";
import type { ChatMessage } from "./chatbot/types";

const widgetMotion = {
  initial: { opacity: 0, y: 24, scale: 0.92 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 18, scale: 0.96 },
  transition: { duration: 0.28, ease: "easeOut" as const },
};

const panelMotion = {
  initial: { opacity: 0, y: 32, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 24, scale: 0.98 },
  transition: { duration: 0.28, ease: "easeOut" as const },
};

function ChatBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const url = import.meta.env.VITE_BASE_URL;
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 180);

    return () => window.clearTimeout(timeout);
  }, [messages, loading, open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const createTimestamp = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const handleSend = async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput || loading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: trimmedInput,
      timestamp: createTimestamp(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post(`${url}/chatbot`, {
        message: trimmedInput,
        chatHistory: [...messages, userMessage],
        isFinished:
          trimmedInput.toLowerCase().includes("thank you") ||
          trimmedInput.toLowerCase().includes("that's all"),
        userDetails: { fullName, email, phoneNumber },
      });

      const botMessage: ChatMessage = {
        role: "assistant",
        content: res.data.reply || "",
        timestamp: createTimestamp(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "An error occurred. Please try again.",
          timestamp: createTimestamp(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!fullName || !email) {
      alert("Please fill all required fields.");
      return;
    }

    setIsFormSubmitted(true);
    setMessages([
      {
        role: "assistant",
        content: `Hi ${fullName}, I’m here to help. What would you like to do today?`,
        timestamp: createTimestamp(),
      },
    ]);
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            {...widgetMotion}
            type="button"
            className="chatbot-trigger"
            onClick={() => setOpen(true)}
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Open Batistack AI chat"
          >
            <span className="chatbot-trigger-ring" />
            <ChatBrand compact />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="chatbot-backdrop"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.section
              {...panelMotion}
              className="chatbot-panel"
              aria-label="Batistack AI chat"
            >
              <ChatHeader onClose={() => setOpen(false)} />

              {!isFormSubmitted ? (
                <div className="chatbot-intro">
                  <div className="chatbot-intro-card">
                    <p className="chatbot-kicker">Project Intake</p>
                    <h3 className="chatbot-intro-title">Start with the essentials.</h3>
                    <p className="chatbot-intro-copy">
                      Tell us who you are and Batistack AI will guide the conversation from there.
                    </p>

                    <form className="chatbot-intake-form" onSubmit={handleFormSubmit}>
                      <label className="chatbot-field">
                        <span>Full Name</span>
                        <input
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                          placeholder="John Smith"
                        />
                      </label>

                      <label className="chatbot-field">
                        <span>Email</span>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          placeholder="john@company.com"
                        />
                      </label>

                      <label className="chatbot-field">
                        <span>Phone (optional)</span>
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="(929) 555-1234"
                        />
                      </label>

                      <motion.button
                        type="submit"
                        className="chatbot-start-button cursor-hover"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Start Chat
                      </motion.button>
                    </form>
                  </div>
                </div>
              ) : (
                <>
                  <ChatMessages
                    messages={messages}
                    loading={loading}
                    bottomRef={messagesEndRef}
                  />
                  <ChatInput
                    value={input}
                    loading={loading}
                    onChange={setInput}
                    onSend={handleSend}
                  />
                </>
              )}
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot;
