import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createChatSession, sendMessageToGemini } from '../services/gemini';
import { ChatMessage } from '../types';
import { Chat } from "@google/genai";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Avi's AI assistant. Ask me anything about his work!", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chat session on mount
    chatSessionRef.current = createChatSession();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(chatSessionRef.current, userMsg.text);
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = { role: 'model', text: "Sorry, I had trouble connecting.", timestamp: new Date(), isError: true };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        className="fixed bottom-6 right-4 md:right-6 z-50 p-3 md:p-4 bg-orange-500 text-white border-2 border-ink dark:border-white neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50 w-[90vw] sm:w-[400px] h-[450px] md:h-[500px] bg-white dark:bg-stone-900 border-2 border-ink dark:border-white neo-shadow flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="bg-ink dark:bg-stone-800 p-3 md:p-4 flex items-center gap-3 border-b-2 border-ink dark:border-white">
              <div className="p-2 bg-orange-500 border border-white rounded-none">
                <Sparkles className="text-white w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div>
                <h3 className="text-white font-bold font-display uppercase tracking-wider text-sm md:text-base">Ask AI Avi</h3>
                <p className="text-stone-400 text-xs flex items-center gap-1 font-mono">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Gemini 2.5 Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-paper dark:bg-dark-paper paper-texture">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 flex items-center justify-center shrink-0 border-2 border-ink dark:border-white ${msg.role === 'user' ? 'bg-ink dark:bg-white text-white dark:text-ink' : 'bg-orange-500 text-white'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`max-w-[80%] p-3 text-sm leading-relaxed border-2 border-ink dark:border-white neo-shadow ${
                    msg.role === 'user' 
                      ? 'bg-white dark:bg-stone-800 text-ink dark:text-white' 
                      : 'bg-white dark:bg-stone-800 text-ink dark:text-white'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                   <div className="w-8 h-8 bg-orange-500 text-white border-2 border-ink dark:border-white flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white dark:bg-stone-800 p-3 border-2 border-ink dark:border-white neo-shadow">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-ink dark:bg-white animate-bounce"></span>
                      <span className="w-2 h-2 bg-ink dark:bg-white animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                      <span className="w-2 h-2 bg-ink dark:bg-white animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white dark:bg-stone-800 border-t-2 border-ink dark:border-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about my skills..."
                  className="flex-1 bg-stone-100 dark:bg-stone-700 border-2 border-ink dark:border-white p-2 text-sm text-ink dark:text-white placeholder-stone-500 dark:placeholder-stone-400 focus:outline-none focus:bg-white dark:focus:bg-stone-600 transition-colors font-medium"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-ink dark:bg-white text-white dark:text-ink border-2 border-ink dark:border-white hover:bg-orange-500 dark:hover:bg-orange-400 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;