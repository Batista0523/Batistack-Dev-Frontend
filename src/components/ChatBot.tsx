// import { useState, useRef, useEffect } from "react";
// import axios from "axios";
// import { Button, Spinner, Form } from "react-bootstrap";
// import images from "../images";

// interface ChatMessage {
//   role: "user" | "assistant";
//   content: string;
//   timestamp: string;
// }

// function ChatBot() {
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement | null>(null);
//   const url = import.meta.env.VITE_BASE_URL;

//   const sendAudio = new Audio(
//     "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAABCxAgAEABAAZGF0Yf8AAAAA"
//   );
//   const receiveAudio = new Audio(
//     "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAABCxAgAEABAAZGF0Yf8AAAAA"
//   );

//   useEffect(() => {
//     localStorage.removeItem("batistack-chat");
//   }, []);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, 300);
//     localStorage.setItem("batistack-chat", JSON.stringify(messages));
//     return () => clearTimeout(timeout);
//   }, [messages]);

//   useEffect(() => {
//     document.body.classList.toggle("chat-open", open);
//   }, [open]);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage: ChatMessage = {
//       role: "user",
//       content: input,
//       timestamp: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setLoading(true);
//     sendAudio.play().catch(() => {});
//     navigator.vibrate?.(30);

//     try {
//       const res = await axios.post(`${url}/chatbot`, {
//         message: input,
//         chatHistory: [...messages, userMessage],
//         isFinished:
//           input.toLowerCase().includes("thank you") ||
//           input.toLowerCase().includes("that's all"),
//         userDetails: { fullName, email, phoneNumber },
//       });

//       const botMessage: ChatMessage = {
//         role: "assistant",
//         content: String(res.data.reply || ""),
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };

//       setMessages((prev) => [...prev, botMessage]);
//       receiveAudio.play().catch(() => {});
//     } catch {
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content: "⚠️ Sorry, something went wrong.",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!fullName || !email) {
//       alert("Please fill out the required fields.");
//       return;
//     }

//     setIsFormSubmitted(true);

//     const welcomeMessage: ChatMessage = {
//       role: "assistant",
//       content: `Hi ${fullName}, tell me how I can help you today!`,
//       timestamp: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//     };

//     setMessages([welcomeMessage]);
//   };

//   return (
//     <>
//       {!open && (
//         <div className="position-fixed bottom-0 end-0 m-4 z-3">
//           <Button
//             variant="dark"
//             className="rounded-circle p-2 shadow"
//             onClick={() => setOpen(true)}
//           >
//             <img
//               src={images.logo2}
//               alt="Chat"
//               style={{ width: "40px", height: "40px", borderRadius: "50%" }}
//             />
//           </Button>
//         </div>
//       )}

//       {open && (
//         <div
//           className="position-fixed top-0 start-0 bg-black text-light d-flex flex-column justify-content-between"
//           style={{
//             width: "100vw",
//             height: "100vh",
//             zIndex: 99999,
//             borderRadius: 0,
//           }}
//         >
//           <div className="p-3 border-bottom border-light d-flex justify-content-between align-items-center">
//             <strong>Batistack AI</strong>
//             <Button
//               variant="outline-light"
//               size="sm"
//               onClick={() => setOpen(false)}
//             >
//               ×
//             </Button>
//           </div>

//           <div
//             className="flex-grow-1 overflow-auto p-3 bg-dark"
//             style={{ WebkitOverflowScrolling: "touch", paddingBottom: "90px" }}
//           >
//             {!isFormSubmitted ? (
//               <Form onSubmit={handleFormSubmit} className="text-light">
//                 <Form.Group className="mb-3">
//                   <Form.Label>Full Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={fullName}
//                     onChange={(e) => setFullName(e.target.value)}
//                     required
//                     className="bg-black text-white border-secondary"
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="bg-black text-white border-secondary"
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Phone (optional)</Form.Label>
//                   <Form.Control
//                     type="tel"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     className="bg-black text-white border-secondary"
//                   />
//                 </Form.Group>
//                 <Button type="submit" variant="primary" className="w-100">
//                   Start Chat
//                 </Button>
//               </Form>
//             ) : (
//               <div>
//                 {messages.map((msg, index) => (
//                   <div
//                     key={index}
//                     className={`mb-3 ${
//                       msg.role === "user" ? "text-end" : "text-start"
//                     }`}
//                   >
//                     <div
//                       className={`d-inline-block px-3 py-2 rounded-3 ${
//                         msg.role === "user"
//                           ? "bg-primary text-white"
//                           : "bg-light text-dark"
//                       }`}
//                       style={{ maxWidth: "80%", whiteSpace: "pre-wrap" }}
//                     >
//                       {msg.role === "assistant" && <span role="img">🤖 </span>}
//                       <span
//                         dangerouslySetInnerHTML={{
//                           __html: msg.content
//                             .replace(
//                               /(\/[^\s]+?)(?=[\s.?!,]|$)/g,
//                               '<a href="$1" style="color:#0d6efd; text-decoration:underline;">link</a>'
//                             )
//                             .replace(/\n/g, "<br>"),
//                         }}
//                       />
//                     </div>
//                     <div className="text-muted small mt-1">{msg.timestamp}</div>
//                   </div>
//                 ))}
//                 {loading && (
//                   <Spinner
//                     animation="border"
//                     size="sm"
//                     className="d-block mx-auto"
//                   />
//                 )}
//                 <div ref={messagesEndRef} />
//               </div>
//             )}
//           </div>

//           {isFormSubmitted && (
//             <div className="chat-input-container border-top border-light bg-dark">
//               <div className="d-flex p-2">
//                 <input
//                   type="text"
//                   placeholder="Ask something..."
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyDown={handleEnter}
//                   autoFocus
//                   className="form-control bg-black text-white border-secondary me-2"
//                   onFocus={() =>
//                     messagesEndRef.current?.scrollIntoView({
//                       behavior: "smooth",
//                       block: "start",
//                     })
//                   }
//                 />
//                 <Button
//                   variant="primary"
//                   onClick={handleSend}
//                   disabled={loading || !input.trim()}
//                   style={{
//                     minWidth: "44px",
//                     height: "44px",
//                     fontSize: "1.2rem",
//                   }}
//                 >
//                   ↑
//                 </Button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// }

// export default ChatBot;
/**
 *  BATISTACK — VISION PRO CHATBOT
 *  Luxury AI Chat, Glass UI, Floating Cards
 *  Designed for a Million-Dollar Agency
 */

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
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

  const url = import.meta.env.VITE_BASE_URL;
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  /* Smooth scroll always */
  useEffect(() => {
    const timeout = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 250);
    return () => clearTimeout(timeout);
  }, [messages]);

  /* Close body scroll when open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
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
        userDetails: { fullName, email, phoneNumber },
      });

      const botMessage: ChatMessage = {
        role: "assistant",
        content: res.data.reply || "",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ An error occurred. Please try again.",
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email) return alert("Please fill all required fields.");

    setIsFormSubmitted(true);

    setMessages([
      {
        role: "assistant",
        content: `Hi ${fullName}, I’m here to help. What would you like to do today?`,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  return (
    <>
      {/* ---- FLOATING VISION PRO BUTTON ---- */}
      {!open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="position-fixed bottom-0 end-0 m-4"
          style={{ zIndex: 99999 }}
        >
          <motion.div
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            style={{
              width: "74px",
              height: "74px",
              borderRadius: "50%",
              cursor: "pointer",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.18), rgba(180,180,180,0.1))",
              border: "1px solid rgba(255,255,255,0.22)",
              boxShadow:
                "0 0 18px rgba(255,255,255,0.15), inset 0 0 12px rgba(255,255,255,0.12)",
              backdropFilter: "blur(18px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.img
              src={images.logo2}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* ---- FULLSCREEN GLASS CHAT ---- */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{
            zIndex: 999999,
            backdropFilter: "blur(32px)",
            background: "rgba(10,10,10,0.78)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* TOP BAR */}
          <div
            style={{
              padding: "14px 22px",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "rgba(0,0,0,0.35)",
            }}
          >
            <strong style={{ fontSize: "1.2rem" }}>Batistack AI Assistant</strong>

            <motion.button
              onClick={() => setOpen(false)}
              whileHover={{ scale: 1.15 }}
              style={{
                background: "transparent",
                border: "none",
                fontSize: "1.8rem",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              ×
            </motion.button>
          </div>

          {/* CHAT WINDOW */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "24px",
              paddingBottom: "140px",
            }}
          >
            {/* If form NOT submitted — show FORM */}
            {!isFormSubmitted ? (
              <form
                onSubmit={handleFormSubmit}
                style={{
                  maxWidth: "420px",
                  margin: "0 auto",
                  background: "rgba(255,255,255,0.04)",
                  padding: "24px",
                  borderRadius: "20px",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <h4 style={{ marginBottom: "18px" }}>Welcome 👋</h4>

                <label>Full Name</label>
                <input
                  className="form-control bg-black text-white mb-3"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />

                <label>Email</label>
                <input
                  className="form-control bg-black text-white mb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label>Phone (optional)</label>
                <input
                  className="form-control bg-black text-white mb-4"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="btn btn-primary w-100"
                  type="submit"
                >
                  Start Chat
                </motion.button>
              </form>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      textAlign: msg.role === "user" ? "right" : "left",
                      marginBottom: "16px",
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        display: "inline-block",
                        padding: "12px 16px",
                        borderRadius: "16px",
                        maxWidth: "78%",
                        background:
                          msg.role === "user"
                            ? "linear-gradient(135deg, #2563eb, #1e40af)"
                            : "rgba(255,255,255,0.1)",
                        border:
                          msg.role === "user"
                            ? "1px solid rgba(255,255,255,0.15)"
                            : "1px solid rgba(255,255,255,0.22)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {msg.role === "assistant" && (
                        <span style={{ opacity: 0.7, marginRight: "4px" }}>
                          🤖
                        </span>
                      )}
                      {msg.content}
                    </motion.div>

                    <div
                      style={{ fontSize: "0.7rem", opacity: 0.6, marginTop: 4 }}
                    >
                      {msg.timestamp}
                    </div>
                  </div>
                ))}

                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* INPUT BAR */}
          {isFormSubmitted && (
            <div
              style={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                padding: "14px",
                background: "rgba(0,0,0,0.55)",
                borderTop: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  className="form-control bg-black text-white"
                  placeholder="Ask something…"
                  value={input}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  onChange={(e) => setInput(e.target.value)}
                />

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="btn btn-primary"
                  onClick={handleSend}
                  disabled={!input.trim() || loading}
                >
                  ↑
                </motion.button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
}

export default ChatBot;
