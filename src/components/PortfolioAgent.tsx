'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiUser, FiArrowUp, FiRefreshCw } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

import {
  getQuickReply,
  SUGGESTED_PROMPTS,
  WELCOME_MESSAGE,
  ASSISTANT_NAME,
} from '@/data/agent-quick-replies';

type Message = { role: 'user' | 'assistant'; content: string };

const INITIAL_MESSAGES: Message[] = [{ role: 'assistant', content: WELCOME_MESSAGE }];

/** Monogram avatar — reads as a considered brand mark rather than a generic bot glyph. */
function AssistantAvatar({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const dimensions = size === 'sm' ? 'h-7 w-7 text-[10px]' : 'h-9 w-9 text-xs';
  return (
    <span
      aria-hidden
      className={`${dimensions} inline-flex shrink-0 select-none items-center justify-center rounded-full bg-zinc-900 font-black tracking-tight text-white dark:bg-white dark:text-zinc-900`}
    >
      MS
    </span>
  );
}

export default function PortfolioAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastUserMessage = useRef<string>('');

  // Pin to the newest message. Instant on first paint, smooth for subsequent turns.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: messages.length > 1 ? 'smooth' : 'auto' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // Escape closes the panel from anywhere inside it.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  // Lock background scroll on mobile, where the panel covers the viewport.
  useEffect(() => {
    if (!isOpen) return;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (!isMobile) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const send = useCallback(
    async (text?: string) => {
      const messageText = (text ?? input).trim();
      if (!messageText || isLoading) return;

      lastUserMessage.current = messageText;
      const userMessage: Message = { role: 'user', content: messageText };
      const history = [...messages, userMessage];

      setMessages(history);
      setInput('');
      setHasError(false);

      // Greetings, identity and small talk resolve locally — no network round trip.
      const quickReply = getQuickReply(messageText);
      if (quickReply) {
        setMessages([...history, { role: 'assistant', content: quickReply }]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: history }),
        });
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);

        const data = await response.json();
        if (!data.reply) throw new Error('Empty response');

        setMessages([...history, { role: 'assistant', content: data.reply }]);
      } catch (error) {
        console.error('Chat error:', error);
        setHasError(true);
        setMessages([
          ...history,
          {
            role: 'assistant',
            content:
              "Sorry — I couldn't reach the server just then. Try again, or email Sami directly at **m.samiwaseem1234@gmail.com**.",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading, messages]
  );

  const retry = () => {
    if (!lastUserMessage.current) return;
    // Drop the failed exchange before replaying the question.
    setMessages((prev) => prev.slice(0, -2));
    void send(lastUserMessage.current);
  };

  const resetConversation = () => {
    setMessages(INITIAL_MESSAGES);
    setInput('');
    setHasError(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Enter sends; Shift+Enter inserts a newline.
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void send();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    // Grow the textarea with content, capped so the composer never dominates the panel.
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  };

  const showSuggestions = messages.length === 1 && !isLoading;

  return (
    <>
      {/* Launcher */}
      <div className="fixed bottom-4 right-4 z-[100] md:bottom-6 md:right-6">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              type="button"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              aria-label="Open portfolio assistant"
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg shadow-zinc-900/20 transition-colors hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-900 dark:hover:bg-blue-500 dark:hover:text-white dark:focus-visible:ring-offset-black md:h-[60px] md:w-[60px]"
            >
              <FiMessageSquare className="text-xl md:text-[22px]" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Scrim — dismisses on mobile, stays inert on desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm md:hidden"
            />

            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="false"
              aria-label="Portfolio assistant"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="fixed inset-x-0 bottom-0 z-[100] flex h-[85dvh] flex-col overflow-hidden rounded-t-3xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950 md:inset-x-auto md:bottom-6 md:right-6 md:h-[600px] md:max-h-[calc(100dvh-6rem)] md:w-[400px] md:rounded-2xl"
            >
              {/* Header */}
              <header className="flex items-center justify-between gap-3 border-b border-zinc-200 px-4 py-3.5 dark:border-zinc-800">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="relative">
                    <AssistantAvatar />
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-zinc-950" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="truncate text-sm font-bold text-zinc-950 dark:text-white">
                      Portfolio Assistant
                    </h2>
                    <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                      Ask about Sami’s work
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {messages.length > 1 && (
                    <button
                      type="button"
                      onClick={resetConversation}
                      aria-label="Start a new conversation"
                      className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:bg-zinc-900 dark:hover:text-zinc-200"
                    >
                      <FiRefreshCw size={15} />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close assistant"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:bg-zinc-900 dark:hover:text-zinc-200"
                  >
                    <FiX size={18} />
                  </button>
                </div>
              </header>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 py-5"
              >
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    {msg.role === 'user' ? (
                      <span
                        aria-hidden
                        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400"
                      >
                        <FiUser size={13} />
                      </span>
                    ) : (
                      <AssistantAvatar size="sm" />
                    )}

                    <div
                      className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'rounded-tr-sm bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                          : 'rounded-tl-sm bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200'
                      }`}
                    >
                      <div className="prose prose-sm max-w-none dark:prose-invert prose-p:my-0 prose-p:leading-relaxed prose-ul:my-1.5 prose-ul:pl-4 prose-li:my-0.5 prose-strong:font-bold [&>*+*]:mt-2">
                        <ReactMarkdown
                          components={{
                            a: ({ ...props }) => (
                              <a
                                {...props}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium underline underline-offset-2"
                              />
                            ),
                            strong: ({ ...props }) => (
                              <strong
                                {...props}
                                className={
                                  msg.role === 'user'
                                    ? 'font-bold text-white dark:text-zinc-900'
                                    : 'font-bold text-zinc-950 dark:text-white'
                                }
                              />
                            ),
                          }}
                        >
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-2.5"
                  >
                    <AssistantAvatar size="sm" />
                    <div
                      role="status"
                      aria-label="Assistant is typing"
                      className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-zinc-100 px-4 py-3.5 dark:bg-zinc-900"
                    >
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400" />
                    </div>
                  </motion.div>
                )}

                {hasError && !isLoading && (
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={retry}
                      className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-bold text-zinc-600 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
                    >
                      <FiRefreshCw size={12} /> Retry
                    </button>
                  </div>
                )}
              </div>

              {/* Composer */}
              <div className="border-t border-zinc-200 bg-white px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 dark:border-zinc-800 dark:bg-zinc-950">
                {showSuggestions && (
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {SUGGESTED_PROMPTS.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => void send(item.prompt)}
                        className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:border-blue-500 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex items-end gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-1.5 transition-colors focus-within:border-blue-500 focus-within:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:focus-within:bg-zinc-950">
                  <label htmlFor="assistant-input" className="sr-only">
                    Message the portfolio assistant
                  </label>
                  <textarea
                    id="assistant-input"
                    ref={inputRef}
                    rows={1}
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask a question..."
                    className="max-h-[120px] flex-1 resize-none bg-transparent px-2.5 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={() => void send()}
                    disabled={!input.trim() || isLoading}
                    aria-label="Send message"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-white transition-all hover:bg-blue-600 disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-white dark:text-zinc-900 dark:hover:bg-blue-500 dark:hover:text-white"
                  >
                    {isLoading ? (
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    ) : (
                      <FiArrowUp size={16} />
                    )}
                  </button>
                </div>

                <p className="mt-2 text-center text-[10px] text-zinc-400 dark:text-zinc-500">
                  {ASSISTANT_NAME} · Responses may be imprecise
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
