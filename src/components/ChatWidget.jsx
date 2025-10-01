import { useState, useEffect, useRef } from "react";

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;

    // ✅ Close on outside click
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    // ✅ Close on scroll
    const handleScroll = () => setOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <div className="chat-widget" aria-live="polite">
      {open && (
        <div
          ref={panelRef}
          className="chat-panel card"
          role="dialog"
          aria-label="Chat"
        >
          <div className="chat-head">
            <strong>Chat with me</strong>
            <button
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          <div className="chat-body">
            <p className="lead">Hi! How can I help you?</p>
            <a
              className="btn"
              href="https://wa.me/916205525758"
              target="_blank"
              rel="noreferrer noopener"
            >
              WhatsApp
            </a>
            <a className="btn secondary" href="mailto:anujkushwaha9858@gmail.com">
              Email me
            </a>
          </div>
        </div>
      )}
      <button
        className="chat-btn"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        💬
      </button>
    </div>
  );
}

export default ChatWidget;
