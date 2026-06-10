interface ChatBrandProps {
  compact?: boolean;
}

function ChatBrand({ compact }: ChatBrandProps) {
  return (
    <div className={`chatbot-brand ${compact ? "is-compact" : ""}`} aria-hidden="true">
      <img
        src="/brand/batistack-mark.png"
        alt=""
        style={{ height: compact ? "26px" : "32px", width: "auto", display: "block" }}
      />
      {!compact && (
        <img
          src="/brand/batistack-wordmark.png"
          alt=""
          style={{ height: "12px", width: "auto", display: "block" }}
        />
      )}
    </div>
  );
}



export default ChatBrand;
