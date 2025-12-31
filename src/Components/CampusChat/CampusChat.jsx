import React, { useState, useRef, useEffect } from "react";
import { campusAI } from "../../ai/campusAI";
import { Send, X, MessageSquare, Bot, User, CornerDownLeft } from "lucide-react";
import "./CampusChat.css";

const CampusChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    
    // Simulate typing
    setIsTyping(true);
    
    // Artificial delay
    setTimeout(() => {
      const aiResponse = campusAI(input);
      const aiMsg = { 
        from: "ai", 
        text: aiResponse, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  // auto scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-100 font-sans">
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="chat-bubble-float group bg-primary hover:bg-primary-focus text-white w-16 h-16 rounded-full shadow-[0_8px_30px_rgb(16,185,129,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-4 border-white"
        >
          <MessageSquare className="w-8 h-8 group-hover:hidden" />
          <Bot className="w-8 h-8 hidden group-hover:block transition-all" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-white"></span>
          </span>
        </button>
      )}

      {/* Chat Box */}
      {open && (
        <div className="chat-window w-96 max-w-[95vw] h-[550px] max-h-[80vh] flex flex-col rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] chat-glass overflow-hidden border-2 border-white/50">
          
          {/* Header */}
          <div className="bg-linear-to-r from-secondary via-secondary to-slate-800 text-white p-5 flex items-center justify-between pb-8">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/10">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-bold text-lg leading-tight">Campus Assistant</h2>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                  <span className="text-xs text-white/70">Powered by AI</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setOpen(false)} 
              className="p-2 hover:bg-white/10 rounded-xl transition-colors active:scale-90"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-white/40 -mt-4 rounded-t-3xl backdrop-blur-sm">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="p-4 bg-emerald-50 rounded-full text-primary">
                  <Bot className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Hello there! 👋</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    I'm your campus guide. Ask me anything about departments, levels, or locations!
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-2 w-full pt-4">
                  {["Where is the Mosque?", "Find CST Department", "Show me the Campus Map"].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setInput(suggestion)}
                      className="text-xs bg-white/80 hover:bg-emerald-50 text-secondary py-2 px-4 rounded-xl border border-emerald-100 transition-all text-left font-medium"
                    >
                      "{suggestion}"
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`message-item flex gap-2 ${m.from === "ai" ? "" : "flex-row-reverse"}`}
              >
                <div className={`w-8 h-8 rounded-2xl flex items-center justify-center shrink-0 shadow-sm
                  ${m.from === "ai" ? "bg-primary text-white" : "bg-secondary text-white"}`}
                >
                  {m.from === "ai" ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                </div>
                <div className="flex flex-col max-w-[75%]">
                  <div
                    className={`px-4 py-2.5 rounded-2xl text-sm shadow-sm
                      ${m.from === "ai" 
                        ? "bg-white text-gray-800 rounded-tl-none border border-emerald-50" 
                        : "bg-secondary text-white rounded-tr-none"}`}
                  >
                    {m.text}
                  </div>
                  <span className={`text-[10px] mt-1 text-gray-400 font-medium px-1
                    ${m.from === "ai" ? "text-left" : "text-right"}`}
                  >
                    {m.time}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="message-item flex gap-2">
                <div className="w-8 h-8 rounded-2xl bg-secondary text-white flex items-center justify-center shadow-sm">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-emerald-50 shadow-sm">
                  <div className="thinking-dots text-primary flex space-x-1">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative group">
              <input
                className="w-full bg-gray-50 border-0 rounded-2xl pl-5 pr-12 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-400 shadow-inner"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-xl transition-all
                  ${input.trim() 
                    ? "bg-primary text-white shadow-lg shadow-emerald-200 hover:scale-105 active:scale-95" 
                    : "text-gray-300 pointer-events-none"}`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-3 flex items-center justify-center gap-1.5 opacity-40">
              <CornerDownLeft className="w-3 h-3" />
              <span className="text-[10px] font-semibold uppercase tracking-wider">Press Enter to send</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampusChat;
