import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, MessageSquare, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      <span className="h-1 w-1 animate-bounce rounded-full bg-white/70 [animation-delay:-0.2s]"></span>
      <span className="h-1 w-1 animate-bounce rounded-full bg-white/70"></span>
      <span className="h-1 w-1 animate-bounce rounded-full bg-white/70 [animation-delay:0.2s]"></span>
    </span>
  );
}

const examplePrompts = [
  "I need a gaming laptop under $1200",
  "Lightweight laptop for college, long battery",
  "Desktop for 4K video editing",
  "Quiet workstation for coding",
];

function getAssistantReply(text) {
  const t = text.toLowerCase();
  if (/(game|rtx|fps|gpu|steam)/.test(t)) {
    return {
      tag: "gaming",
      reply:
        "Got it. For gaming, a modern GPU matters most. I'll target an RTX 4060+ (or RX 7700 XT on desktop), paired with an i7/Ryzen 7 and 16–32GB RAM.",
    };
  }
  if (/(edit|premiere|davinci|4k|render|creator|photoshop)/.test(t)) {
    return {
      tag: "creator",
      reply:
        "Creator workload noted. You’ll benefit from a multi-core CPU, 32GB RAM, fast NVMe storage, and a color-accurate display.",
    };
  }
  if (/(student|college|school|lightweight|battery|portable|travel)/.test(t)) {
    return {
      tag: "student",
      reply:
        "Portability-focused. I’ll prioritize slim designs with great battery life, quiet fans, and reliable keyboards.",
    };
  }
  if (/(code|program|developer|ai|ml|data|python)/.test(t)) {
    return {
      tag: "developer",
      reply:
        "Developer needs detected. I’ll aim for strong CPU performance, 16–32GB RAM, fast SSD, and a high-quality screen for long sessions.",
    };
  }
  if (/(budget|cheap|afford|under|price)/.test(t)) {
    return {
      tag: "budget",
      reply:
        "Budget in mind. I’ll filter for best price-to-performance and avoid overspending where it doesn’t help.",
    };
  }
  return {
    tag: "general",
    reply:
      "Thanks! Tell me how you’ll use it (gaming, school, editing), your budget, and if you prefer a laptop or desktop.",
  };
}

function getRecommendations(tags) {
  const prefers = new Set(tags);
  const picks = [];

  if (prefers.has("gaming")) {
    picks.push({
      name: "Gaming Laptop – RTX 4060",
      spec: "i7 / RTX 4060 / 16GB / 512GB NVMe / 144Hz 15.6”",
      link: "https://www.newegg.com/",
      reason: "Great 1080p/1440p performance with efficient thermals.",
    });
  }
  if (prefers.has("creator")) {
    picks.push({
      name: "Creator Laptop – OLED Color",
      spec: "Ryzen 7 / 32GB / 1TB NVMe / OLED 3K",
      link: "https://www.amazon.com/",
      reason: "Excellent color accuracy and RAM for editing suites.",
    });
  }
  if (prefers.has("student")) {
    picks.push({
      name: "Ultralight Student Laptop",
      spec: "Intel Evo / 16GB / 512GB / 14” 16:10 / 15h battery",
      link: "https://www.bestbuy.com/",
      reason: "Portable, long-lasting, and comfortable to type on.",
    });
  }
  if (prefers.has("developer")) {
    picks.push({
      name: "Developer Workhorse",
      spec: "Ryzen 7 / 32GB / 1TB NVMe / Matte QHD+",
      link: "https://www.microcenter.com/",
      reason: "Plenty of RAM and a sharp display for productivity.",
    });
  }
  if (picks.length === 0) {
    picks.push({
      name: "Balanced All‑Rounder",
      spec: "i5 / 16GB / 512GB / IPS 15.6”",
      link: "https://www.amazon.com/",
      reason: "Reliable daily performance at a fair price.",
    });
  }
  return picks.slice(0, 3);
}

export default function ChatAdvisor() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I’m your AI PC advisor. Tell me what you’ll use it for and your budget.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [tags, setTags] = useState([]);
  const containerRef = useRef(null);

  const recommendations = useMemo(() => getRecommendations(tags), [tags]);

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  function handleSend(text) {
    const content = (text ?? input).trim();
    if (!content) return;

    setMessages((m) => [...m, { role: "user", content }]);
    setInput("");
    setIsTyping(true);

    const { reply, tag } = getAssistantReply(content);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
      if (tag && !tags.includes(tag)) setTags((t) => [...t, tag]);
      setIsTyping(false);
    }, 700);
  }

  return (
    <section id="chat" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Chat with your PC advisor</h2>
          <p className="mt-3 text-white/70">Describe your needs and get tailored picks in minutes.</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-4 backdrop-blur">
            <div
              ref={containerRef}
              className="h-[420px] w-full overflow-y-auto rounded-xl bg-slate-900/70 p-4 ring-1 ring-white/10"
            >
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-3 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl px-3 py-2 text-sm leading-6 ${
                      m.role === "user"
                        ? "bg-indigo-500 text-white"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mb-3 flex justify-start"
                  >
                    <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-white">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                placeholder="e.g. I want a quiet laptop for coding under $1000"
                className="flex-1 rounded-lg border border-white/10 bg-slate-900/80 px-3 py-3 text-sm text-white placeholder-white/40 shadow-inner outline-none ring-0 focus:border-indigo-400"
              />
              <button
                onClick={() => handleSend()}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-slate-900 transition hover:translate-y-[-1px] hover:shadow"
              >
                Send
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {examplePrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => handleSend(p)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 hover:bg-white/10"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 backdrop-blur">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-white">Recommended picks</h3>
              <div className="inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-2 py-1 text-amber-300 ring-1 ring-amber-400/20">
                <Star size={14} />
                <span className="text-xs">Tailored</span>
              </div>
            </div>
            <p className="mt-1 text-sm text-white/70">
              These update as you chat. Links go to trusted stores.
            </p>

            <div className="mt-4 space-y-4">
              {recommendations.map((r) => (
                <motion.a
                  key={r.name}
                  href={r.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="block rounded-xl border border-white/10 bg-slate-900/70 p-4 ring-1 ring-white/10 transition hover:bg-slate-900"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium text-white">{r.name}</h4>
                      <p className="mt-1 text-sm text-white/70">{r.spec}</p>
                      <p className="mt-1 text-xs text-white/60">{r.reason}</p>
                    </div>
                    <div className="shrink-0 rounded-md bg-white px-3 py-1 text-xs font-semibold text-slate-900">
                      View
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2 text-white/80">
                <MessageSquare size={16} />
                <span className="text-sm">Tip: Mention budget, size, and main apps/games.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
