import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button, Spinner, Form } from "react-bootstrap";
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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    localStorage.setItem("batistack-chat", JSON.stringify(messages));
  }, [messages]);

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert("Please fill out the required fields.");
      return;
    }

    setIsFormSubmitted(true);

    // After form submission, greet the user in the AI response
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
      <div className="chat-toggle-button" onClick={() => setOpen(!open)}>
        💬
      </div>

      {open && (
        <div className="chat-window shadow">
          <div className="chat-header">
            <span>Batistack AI</span>
            <Button variant="outline-light" size="sm" onClick={() => setOpen(false)}>
              ×
            </Button>
          </div>

          <div className="chat-body">
            {!isFormSubmitted ? (
              <div className="chat-form">
                <h2 className="chat-form-title">Please Enter Your Details</h2>
                <Form onSubmit={handleFormSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="chat-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="chat-input"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number (Optional)</Form.Label>
                    <Form.Control
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="chat-input"
                    />
                  </Form.Group>
                  <Button type="submit" variant="primary" className="chat-submit-btn">
                    Start Chatting
                  </Button>
                </Form>
              </div>
            ) : (
              <>
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
              </>
            )}
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
