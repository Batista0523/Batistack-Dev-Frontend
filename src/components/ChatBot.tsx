import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button, Spinner } from "react-bootstrap";
import "../ChatBot.css";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

function ChatBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const url = import.meta.env.VITE_BASE_URL;

  const sendAudio = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAABCxAgAEABAAZGF0Yf8AAAAA");
  const receiveAudio = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAABCxAgAEABAAZGF0Yf8AAAAA");

  useEffect(() => {
    localStorage.removeItem("batistack-chat");
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    localStorage.setItem("batistack-chat", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    const handleBeforeUnload = async () => {
      const stored = localStorage.getItem("batistack-chat");
      if (stored) {
        const chatHistory = JSON.parse(stored);
        if (chatHistory.length > 1) {
          try {
            await axios.post(`${url}/chatbot`, {
              message: "Chat ended",
              chatHistory,
              isFinished: true,
            });
            localStorage.removeItem("batistack-chat");
          } catch (err) {
            console.error("Failed to send final chat log:", err);
          }
        }
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    let inactivityTimer: ReturnType<typeof setTimeout>;

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      if (messages.length > 1) {
        inactivityTimer = setTimeout(async () => {
          try {
            await axios.post(`${url}/chatbot`, {
              message: "User inactive, chat ended",
              chatHistory: messages,
              isFinished: true,
            });
            localStorage.removeItem("batistack-chat");
          } catch (err) {
            console.error("Inactivity email failed:", err);
          }
        }, 3 * 60 * 1000);
      }
    };

    resetInactivityTimer();
    const events = ["mousemove", "keydown", "scroll", "click"];
    events.forEach((e) => window.addEventListener(e, resetInactivityTimer));
    return () => {
      clearTimeout(inactivityTimer);
      events.forEach((e) => window.removeEventListener(e, resetInactivityTimer));
    };
  }, [messages]);

  useEffect(() => {
    if (open && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        role: "assistant",
        content:
          "👋 Welcome to Batistack Development AI!\nWe're here to answer any questions about our services, industries we help, or how to get started. 🤖",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([welcomeMessage]);
    }
  }, [open]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    sendAudio.play().catch(() => {});

    try {
      const res = await axios.post(`${url}/chatbot`, {
        message: input,
        chatHistory: [...messages, userMessage],
        isFinished:
          input.toLowerCase().includes("thank you") ||
          input.toLowerCase().includes("that's all"),
      });

      const botMessage: ChatMessage = {
        role: "assistant",
        content: String(res.data.reply || ""),
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMessage]);
      receiveAudio.play().catch(() => {});
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Sorry, something went wrong.",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };
useEffect(() => {
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const input = document.querySelector("input");
  input?.addEventListener("focus", scrollToBottom);

  return () => {
    input?.removeEventListener("focus", scrollToBottom);
  };
}, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <div className="chat-toggle-button" onClick={() => setOpen(!open)}>
        💬
      </div>

      {open && (
        <div className="chat-window shadow">
          <div className="chat-header">
            <span>Batistack AI</span>
            <Button variant="outline-light" size="sm" onClick={() => setOpen(false)}>×</Button>
          </div>

          <div className="chat-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.role === "user" ? "text-end" : "text-start"}`}
              >
                <div
                  className={`d-inline-block px-3 py-2 rounded ${
                    msg.role === "user" ? "bg-primary text-white" : "bg-light text-dark"
                  }`}
                  style={{ maxWidth: "80%", whiteSpace: "pre-wrap" }}
                >
                  {msg.role === "assistant" && <span role="img">🤖</span>}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: msg.content
                        .replace(
                          /(\/(?:industries|contact|services|about|login|sintra|policy)[a-z0-9\-\/]*)/gi,
                          '<a href="$1" style="color:#0d6efd; text-decoration:underline;">Here</a>'
                        )
                        .replace(/\n/g, "<br>"),
                    }}
                  />
                </div>
                <div className="text-muted small">{msg.timestamp}</div>
              </div>
            ))}
            {loading && <Spinner animation="border" size="sm" />}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-footer d-flex align-items-center position-relative">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleEnter}
              className="form-control pe-5"
            />
            <Button
              variant="primary"
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="send-arrow"
            >
              ↑
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
