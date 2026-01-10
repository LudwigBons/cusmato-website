import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

interface Message {
  id: string;
  sender: string;
  senderInitial: string;
  senderColor: string;
  text: string;
  timestamp: string;
  type?: "normal" | "mention" | "ai-suggestion" | "action";
  mentionTarget?: string;
}

export default function TeamchatConversationDemo() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSender, setTypingSender] = useState<string | null>(null);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  const messages: Message[] = [
    {
      id: "1",
      sender: "Sarah",
      senderInitial: "S",
      senderColor: "bg-blue-600",
      text: "Goedemorgen! Ik heb zojuist de laatste klantvragen gecheckt. De meeste vragen gaan over verzendstatus.",
      timestamp: "08:45",
      type: "normal",
    },
    {
      id: "2",
      sender: "Jij",
      senderInitial: "J",
      senderColor: "bg-slate-600",
      text: "@Milan kun jij de tracking checken voor ticket #1234? Klant vraagt waar het pakket blijft.",
      timestamp: "08:46",
      type: "mention",
      mentionTarget: "Milan",
    },
    {
      id: "3",
      sender: "Milan",
      senderInitial: "M",
      senderColor: "bg-green-600",
      text: "Ja, check het nu even.",
      timestamp: "08:47",
      type: "normal",
    },
    {
      id: "4",
      sender: "AI",
      senderInitial: "AI",
      senderColor: "bg-purple-600",
      text: "Cusmato AI suggests: stuur update naar klant",
      timestamp: "Nu",
      type: "ai-suggestion",
    },
    {
      id: "5",
      sender: "Milan",
      senderInitial: "M",
      senderColor: "bg-green-600",
      text: "Pakket is onderweg, wordt morgen bezorgd. Track & trace: 3SDK123456789",
      timestamp: "08:48",
      type: "normal",
    },
    {
      id: "6",
      sender: "Jij",
      senderInitial: "J",
      senderColor: "bg-slate-600",
      text: "Actie: status → Verzonden ✅",
      timestamp: "08:49",
      type: "action",
    },
    {
      id: "7",
      sender: "Sarah",
      senderInitial: "S",
      senderColor: "bg-blue-600",
      text: "Perfect! Ik stuur de update naar de klant.",
      timestamp: "2 min geleden",
      type: "normal",
    },
  ];

  useEffect(() => {
    if (!isInView) return;

    const messageDelays = shouldReduceMotion
      ? messages.map(() => 0) // No delays for reduced motion
      : [0, 800, 1600, 2400, 3200, 4000, 4800]; // Staggered delays

    messages.forEach((msg, index) => {
      if (shouldReduceMotion) {
        // Show all messages immediately for reduced motion
        setVisibleMessages((prev) => [...prev, msg.id]);
        return;
      }

      // Show typing indicator before some messages
      if (index === 3 || index === 4) {
        const typingDelay = messageDelays[index] - 600;
        const typingTimeout = setTimeout(() => {
          setIsTyping(true);
          setTypingSender(msg.sender);
        }, Math.max(0, typingDelay));

        timeoutRefs.current.push(typingTimeout);

        const hideTypingTimeout = setTimeout(() => {
          setIsTyping(false);
          setTypingSender(null);
        }, messageDelays[index] - 100);

        timeoutRefs.current.push(hideTypingTimeout);
      }

      const messageTimeout = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg.id]);
      }, messageDelays[index]);

      timeoutRefs.current.push(messageTimeout);
    });

    return () => {
      timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
      timeoutRefs.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, shouldReduceMotion]);

  const getMessageComponent = (message: Message) => {
    const isVisible = visibleMessages.includes(message.id);
    const isOwnMessage = message.sender === "Jij";

    if (!isVisible && !shouldReduceMotion) return null;

    return (
      <motion.div
        key={message.id}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`flex items-start gap-3 ${isOwnMessage ? "flex-row-reverse" : ""}`}
      >
        {/* Avatar */}
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full ${message.senderColor} flex items-center justify-center text-white text-xs font-semibold`}
        >
          {message.senderInitial}
        </div>

        {/* Message Content */}
        <div className={`flex-1 ${isOwnMessage ? "flex flex-col items-end" : ""}`}>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-slate-900">{message.sender}</span>
            <span className="text-xs text-slate-500">{message.timestamp}</span>
          </div>

          {/* Message Bubble */}
          {message.type === "ai-suggestion" ? (
            <div className="bg-purple-50 border border-purple-200 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-xs font-semibold text-purple-900">AI Suggestion</span>
              </div>
              <p className="text-sm text-purple-800">{message.text}</p>
            </div>
          ) : message.type === "action" ? (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl rounded-tr-none p-3 max-w-[80%]">
              <p className="text-sm text-blue-900 font-medium">{message.text}</p>
            </div>
          ) : message.type === "mention" ? (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl rounded-tl-none p-3 max-w-[80%]">
              <p className="text-sm text-slate-700 leading-relaxed">
                <span className="font-semibold text-blue-600">@{message.mentionTarget}</span>{" "}
                {message.text.replace(`@${message.mentionTarget} `, "")}
              </p>
            </div>
          ) : (
            <div
              className={`rounded-2xl p-3 max-w-[80%] ${
                isOwnMessage
                  ? "bg-blue-600 text-white rounded-tr-none"
                  : "bg-slate-100 text-slate-900 rounded-tl-none"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* Chat Window Card */}
      <div className="relative rounded-3xl border border-slate-200/80 bg-white shadow-xl overflow-hidden" style={{ boxShadow: "0 20px 60px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.1)" }}>
        {/* Header */}
        <div className="border-b border-slate-200/80 bg-gradient-to-r from-slate-50 to-white px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">#</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Cusmato Software</h3>
              <p className="text-xs text-slate-500">4 members</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["S", "M", "J", "A"].map((initial, idx) => (
                <div
                  key={idx}
                  className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white text-blue-600 text-xs font-semibold flex items-center justify-center"
                >
                  {initial}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex flex-col md:flex-row min-h-[400px] max-h-[500px]">
          {/* Sidebar - Collapsed on mobile */}
          <div className="hidden md:block w-48 border-r border-slate-200/80 bg-slate-50/50 p-4">
            <div className="mb-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Channels</p>
              <div className="space-y-1">
                <div className="px-2 py-1.5 rounded-lg bg-blue-50 border border-blue-200">
                  <p className="text-sm font-medium text-blue-900"># Cusmato Software</p>
                </div>
                <div className="px-2 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer">
                  <p className="text-sm text-slate-600"># Support Team</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Team</p>
              <div className="space-y-2">
                {["Sarah", "Milan", "Jij", "AI"].map((name, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 border border-white text-blue-600 text-xs font-semibold flex items-center justify-center">
                      {name[0]}
                    </div>
                    <span className="text-sm text-slate-700">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col bg-white">
            {/* Messages */}
            <div
              className="flex-1 overflow-visible lg:overflow-y-auto p-4 md:p-6 space-y-4"
              style={{ scrollbarWidth: "thin" }}
              aria-live="polite"
            >
              {messages.map((message) => getMessageComponent(message))}

              {/* Typing Indicator */}
              {isTyping && typingSender && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-slate-400 flex items-center justify-center text-white text-xs font-semibold">
                    {typingSender[0]}
                  </div>
                  <div className="bg-slate-100 rounded-2xl rounded-tl-none p-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms", animationDuration: "1.4s" }} />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms", animationDuration: "1.4s" }} />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms", animationDuration: "1.4s" }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Composer */}
            <div className="border-t border-slate-200/80 p-4 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Typ een bericht..."
                    className="w-full px-4 py-2.5 rounded-full border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled
                  />
                </div>
                <button
                  className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50"
                  disabled
                  aria-label="Verstuur bericht"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
