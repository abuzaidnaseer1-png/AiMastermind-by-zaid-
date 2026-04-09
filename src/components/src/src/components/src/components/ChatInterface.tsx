import React, { useState, useEffect, useRef } from 'react';
import { Send, Mic, Languages, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hello! I am LinguaMate. How can I help you learn today? You can ask me to teach you Korean, English, or Urdu!' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate AI Response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: 'That sounds interesting! As your AI assistant, I am processing your request. (This is a demo response)' 
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-160px)] max-w-4xl mx-auto bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
            <Languages size={20} />
          </div>
          <div>
            <h3 className="font-bold">LinguaMate AI</h3>
            <p className="text-xs text-green-400 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse" /> Online
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
           <button className="p-2 text-slate-400 hover:text-white"><Sparkles size={18}/></button>
        </div>
      </div>

      {/* Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={cn(
            "flex",
            msg.role === 'user' ? "justify-end" : "justify-start"
          )}>
            <div className={cn(
              "max-w-[80%] p-4 rounded-2xl text-sm",
              msg.role === 'user' 
                ? "bg-indigo-600 text-white rounded-tr-none" 
                : "bg-slate-800 text-slate-200 rounded-tl-none"
            )}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-slate-900 border-t border-slate-800">
        <div className="flex items-center space-x-2 bg-slate-800 p-2 rounded-xl">
          <button className="p-2 text-slate-400 hover:text-indigo-400 transition-colors">
            <Mic size={20} />
          </button>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm p-2"
          />
          <button 
            onClick={handleSend}
            className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
