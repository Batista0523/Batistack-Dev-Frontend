
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button, Spinner, Form } from "react-bootstrap";
import images from "../images";

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
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const url = import.meta.env.VITE_BASE_URL;

  const sendAudio = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAABCxAgAEABAAZGF0Yf8AAAAA");
  const receiveAudio = new Audio("data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAABCxAgAEABAAZGF0Yf8AAAAA");

  useEffect(() => {
    localStorage.removeItem("batistack-chat");
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
    localStorage.setItem("batistack-chat", JSON.stringify(messages));
    return () => clearTimeout(timeout);
  }, [messages]);

  useEffect(() => {
    document.body.classList.toggle("chat-open", open);
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
    navigator.vibrate?.(30);

    try {
      const res = await axios.post(`${url}/chatbot`, {
        message: input,
        chatHistory: [...messages, userMessage],
        isFinished: input.toLowerCase().includes("thank you") || input.toLowerCase().includes("that's all"),
        userDetails: { fullName, email, phoneNumber },
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
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: "⚠️ Sorry, something went wrong.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }]);
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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert("Please fill out the required fields.");
      return;
    }

    setIsFormSubmitted(true);

    const welcomeMessage: ChatMessage = {
      role: "assistant",
      content: `Hi ${fullName}, tell me how I can help you today!`,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([welcomeMessage]);
  };

  return (
    <>
      {!open && (
        <div className="position-fixed bottom-0 end-0 m-4 z-3">
          <Button variant="dark" className="rounded-circle p-2 shadow" onClick={() => setOpen(true)}>
            <img src={images.logo} alt="Chat" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
          </Button>
        </div>
      )}

      {open && (
        <div
          className="position-fixed top-0 start-0 bg-black text-light d-flex flex-column justify-content-between"
          style={{
            width: "100vw",
            height: "100vh",
            zIndex: 99999,
            borderRadius: 0,
          }}
        >
          <div className="p-3 border-bottom border-light d-flex justify-content-between align-items-center">
            <strong>Batistack AI</strong>
            <Button variant="outline-light" size="sm" onClick={() => setOpen(false)}>×</Button>
          </div>

          <div
            className="flex-grow-1 overflow-auto p-3 bg-dark"
            style={{ WebkitOverflowScrolling: "touch", paddingBottom: "90px" }}
          >
            {!isFormSubmitted ? (
              <Form onSubmit={handleFormSubmit} className="text-light">
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="bg-black text-white border-secondary" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-black text-white border-secondary" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone (optional)</Form.Label>
                  <Form.Control type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="bg-black text-white border-secondary" />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100">Start Chat</Button>
              </Form>
            ) : (
              <div>
                {messages.map((msg, index) => (
                  <div key={index} className={`mb-3 ${msg.role === "user" ? "text-end" : "text-start"}`}>
                    <div className={`d-inline-block px-3 py-2 rounded-3 ${msg.role === "user" ? "bg-primary text-white" : "bg-light text-dark"}`} style={{ maxWidth: "80%", whiteSpace: "pre-wrap" }}>
                      {msg.role === "assistant" && <span role="img">🤖 </span>}
                      <span dangerouslySetInnerHTML={{
                        __html: msg.content
                          .replace(/(\/[^\s]+?)(?=[\s.?!,]|$)/g, '<a href="$1" style="color:#0d6efd; text-decoration:underline;">link</a>')
                          .replace(/\n/g, "<br>")
                      }} />
                    </div>
                    <div className="text-muted small mt-1">{msg.timestamp}</div>
                  </div>
                ))}
                {loading && <Spinner animation="border" size="sm" className="d-block mx-auto" />}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {isFormSubmitted && (
            <div className="chat-input-container border-top border-light bg-dark">
              <div className="d-flex p-2">
                <input
                  type="text"
                  placeholder="Ask something..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleEnter}
                  autoFocus
                  className="form-control bg-black text-white border-secondary me-2"
                  onFocus={() =>
                    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                />
                <Button
                  variant="primary"
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  style={{ minWidth: "44px", height: "44px", fontSize: "1.2rem" }}
                >
                  ↑
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ChatBot;
