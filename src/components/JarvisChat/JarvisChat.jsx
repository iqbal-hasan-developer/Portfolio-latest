import { useState, useRef } from "react";
import { useZapierScript } from "../../hooks/useZapierScript";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useZapierScript();

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-[#6FE047] text-black p-3 text-2xl rounded-full shadow-lg transition hover:scale-110"
          style={{ boxShadow: "0 0 20px rgba(111,224,71,0.6)" }}
        >
          💬
        </button>
      )}

      {open && (
        <div
          className="w-80 h-[500px] flex flex-col rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          {/* Header */}
          <div className="p-3 flex justify-between items-center text-white">
            <span className="font-semibold">🤖 Jarvis</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Glow divider */}
          <div
            className="h-[1px] w-full"
            style={{ background: "#6FE047", opacity: 0.6 }}
          />

          {/* Zapier Embed */}
          <div className="flex-1 w-full h-full">
            <zapier-interfaces-chatbot-embed
              is-popup="false"
              chatbot-id="cmo5u5wak0078cy3ckujn0cb9"
              height="100%"
              width="100%"
              style={{ display: "block", width: "100%", height: "100%" }}
            />
          </div>

          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
}