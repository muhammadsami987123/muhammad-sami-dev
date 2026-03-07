'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiCpu, FiUser, FiZap, FiArrowRight } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';


export default function PortfolioAgent() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hello! I'm **Sami's AI Agent**. \n\nI can answer questions about his:\n- **AI Engineering** experience\n- **Project** architectures\n- **Tech Stack** (Next.js, Python, Agents)\n\n*How can I help you today?*" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const suggestions = [
        "Tell me about your AI projects",
        "What is your tech stack?",
        "How can I contact Sami?",
        "Explain the Physical AI Textbook"
    ];

    const handleSend = async (text?: string) => {
        const messageText = text || input;
        if (!messageText.trim() || isLoading) return;

        const userMessage = { role: 'user', content: messageText };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });

            if (!response.ok) throw new Error('Failed to fetch response');

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
        } catch (error) {
            console.error('Chat Error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: "I apologize, but I'm having trouble connecting to the neural network right now. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100]">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.button
                            initial={{ scale: 0, rotate: 180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: -180 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(true)}
                            className="group relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 rounded-full border-2 border-white/20 border-t-white/50 animate-[spin_8s_linear_infinite]" />
                            <FiMessageCircle className="relative z-10 text-xl md:text-[28px]" />

                            <span className="absolute right-full mr-4 py-2 px-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-xs font-bold text-zinc-900 dark:text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 shadow-xl hidden md:block">
                                Chat with AI Agent
                            </span>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[90] md:bg-transparent md:backdrop-blur-none md:pointer-events-none"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20, x: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20, x: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed bottom-6 right-6 z-[100] w-[90vw] md:w-[400px] h-[600px] max-h-[85vh] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 dark:border-zinc-700/50 shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* Header */}
                            <div className="relative p-6 pb-4 border-b border-zinc-100/50 dark:border-zinc-800/50 bg-gradient-to-b from-white/50 to-transparent dark:from-zinc-900/50">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3.5">
                                        <div className="relative">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                                                <FiCpu className="text-white text-xl" />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white dark:border-zinc-900 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base text-zinc-900 dark:text-white tracking-tight">AI Assistant</h3>
                                            <p className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 tracking-wider">Online & Ready</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                                    >
                                        <FiX size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar scroll-smooth">
                                {messages.map((msg, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                                        key={i}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user'
                                            ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
                                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                            }`}>
                                            {msg.role === 'user' ? <FiUser size={14} /> : <FiZap size={14} />}
                                        </div>
                                        <div className={`max-w-[75%] space-y-1 ${msg.role === 'user' ? 'items-end flex flex-col' : 'items-start'}`}>
                                            <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                                                ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-tr-sm'
                                                : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-100 dark:border-zinc-700/50 rounded-tl-sm'
                                                }`}>
                                                <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-0 prose-ul:my-1 prose-li:my-0">
                                                    <ReactMarkdown
                                                        components={{
                                                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                                            a: ({ node, ...props }) => <a {...props} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" />,
                                                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                                            strong: ({ node, ...props }) => <strong {...props} className="font-bold text-zinc-900 dark:text-white" />
                                                        }}
                                                    >
                                                        {msg.content}
                                                    </ReactMarkdown>
                                                </div>
                                            </div>
                                            <span className="text-[10px] font-medium text-zinc-400 px-1">
                                                {msg.role === 'assistant' ? 'AI Agent' : 'You'}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}

                                {isLoading && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                                            <FiZap size={14} />
                                        </div>
                                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-2xl rounded-tl-sm border border-zinc-100 dark:border-zinc-700/50 flex items-center gap-1.5 shadow-sm">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Footer / Input */}
                            <div className="p-4 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border-t border-zinc-100 dark:border-zinc-800/50 space-y-4">

                                {/* Suggestions (Only show when few messages) */}
                                {messages.length < 3 && (
                                    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar mask-gradient-right">
                                        {suggestions.map((s, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleSend(s)}
                                                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px] font-bold text-zinc-500 dark:text-zinc-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all"
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur-sm" />
                                    <div className="relative flex items-center bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                                        <input
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                            placeholder="Ask about Sami's experience..."
                                            className="w-full bg-transparent border-none py-3.5 pl-4 pr-12 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:ring-0 focus:outline-none"
                                        />
                                        <button
                                            onClick={() => handleSend()}
                                            disabled={!input.trim() || isLoading}
                                            className="absolute right-2 p-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all"
                                        >
                                            {isLoading ? <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> : <FiArrowRight size={16} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="text-[9px] text-zinc-400 font-medium">
                                        Powered by <span className="text-blue-600 dark:text-blue-400">OpenAI GPT-4o</span> & Portfolio Context
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
