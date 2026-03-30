interface ChatBrandProps {
  compact?: boolean;
}

function ChatBrand({ compact }: ChatBrandProps) {
  return (
    <div className={`chatbot-brand ${compact ? "is-compact" : ""}`} aria-hidden="true">
      <span className="chatbot-brand-mark">
        <span className="chatbot-brand-mark-b">B</span>
        <span className="chatbot-brand-mark-ai">AI</span>
      </span>
      {!compact && (
        <span className="chatbot-brand-wordmark">
          Bati<span>stack</span>
        </span>
      )}
    </div>
  );
}

export default ChatBrand;
