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
    events.forEach((event) =>
      window.addEventListener(event, resetInactivityTimer)
    );

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach((event) =>
        window.removeEventListener(event, resetInactivityTimer)
      );
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
    } catch (error) {
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
      }, 300);
    };

    const input =
      document.querySelector<HTMLInputElement>(".chat-footer input");
    input?.addEventListener("focus", scrollToBottom);
    window.addEventListener("resize", scrollToBottom);

    return () => {
      input?.removeEventListener("focus", scrollToBottom);
      window.removeEventListener("resize", scrollToBottom);
    };
  }, [messages]);



  useEffect(() => {
  const preventViewportJump = () => {
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
  };

  const restoreBody = () => {
    document.body.style.position = "";
    document.body.style.width = "";
  };

  const input = document.querySelector<HTMLInputElement>(".chat-footer input");
  input?.addEventListener("focus", preventViewportJump);
  input?.addEventListener("blur", restoreBody);

  return () => {
    input?.removeEventListener("focus", preventViewportJump);
    input?.removeEventListener("blur", restoreBody);
  };
}, []);

  return (
    <>
      <div className="chat-toggle-button" onClick={() => setOpen(!open)}>
        💬
      </div>

      {open && (
        <div className="chat-window shadow">
          <div className="chat-header bg-dark text-white p-2 d-flex justify-content-between align-items-center">
            <span>Batistack AI</span>
            <Button
              variant="outline-light"
              size="sm"
              onClick={() => setOpen(false)}
            >
              ×
            </Button>
          </div>

          <div className="chat-body p-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.role === "user" ? "text-end" : "text-start"
                }`}
              >
                <div
                  className={`d-inline-block px-3 py-2 rounded ${
                    msg.role === "user"
                      ? "bg-primary text-white"
                      : "bg-light text-dark"
                  }`}
                  style={{ maxWidth: "80%", whiteSpace: "pre-wrap" }}
                >
                  {msg.role === "assistant" && (
                    <span className="me-1" role="img" aria-label="robot">
                      🤖
                    </span>
                  )}
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

          <div className="chat-footer p-2 border-top d-flex">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleEnter}
              className="form-control me-2"
            />
            <Button
              variant="primary"
              onClick={handleSend}
              disabled={loading || !input.trim()}
              style={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                padding: "0",
              }}
            >
              ➤
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
