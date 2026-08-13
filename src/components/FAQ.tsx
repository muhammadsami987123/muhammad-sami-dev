'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiArrowRight } from 'react-icons/fi';

const faqs = [
    {
        question: 'What is your typical project timeline?',
        answer: 'Timelines vary based on complexity. A specialized AI agent prototype can take 1-2 weeks, while a comprehensive full-stack platform integrated with complex multi-agent workflows typically spans 6-12 weeks.'
    },
    {
        question: 'How do you handle data privacy and security?',
        answer: 'Security is a top priority. I implement enterprise-grade encryption, secure key management, and ensure compliance with GDPR/CCPA. For sensitive data, I often deploy local LLMs or private endpoints to ensure no data leaves your controlled environment.'
    },
    {
        question: 'Do you offer post-launch support?',
        answer: 'Yes, I provide a 30-day warranty period for bug fixes after launch. I also offer ongoing retainer packages for system monitoring, LLM model updates, and feature enhancements to keep your AI infrastructure state-of-the-art.'
    },
    {
        question: 'RAG vs Fine-Tuning: Which one do I need?',
        answer: 'It depends on your goal. If you need the AI to know your live proprietary data (like policies or inventory), RAG is the way to go. If you need it to learn a specific "voice" or highly specialized task pattern, fine-tuning is better. Often, a hybrid approach works best.'
    },
    {
        question: 'Can you integrate AI into our existing legacy systems?',
        answer: 'Absolutely. I specialize in building "glue" layers using modern APIs and microservices. I can bridge your legacy SQL/NoSQL databases with modern vector stores and agentic workflows without requiring a complete rewrite of your current infrastructure.'
    },
    {
        question: 'Who owns the Intellectual Property (IP)?',
        answer: 'You do. Upon final payment, 100% of the code, improved models, and documentation transfer to you. I retain no rights to your proprietary business logic or data.'
    },
    {
        question: 'What is your preferred tech stack?',
        answer: 'For AI, I rely on CrewAI, LangChain, and OpenAI/Anthropic models, supported by Neo4j/Pinecone for vector search. For the full stack, I use Next.js (React), TypeScript, and Node.js/Python microservices to ensure scalability and type safety.'
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 lg:py-32 bg-white dark:bg-black relative" id="faq">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Header & CTA */}
                    <div className="lg:col-span-5 text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase mb-6"
                        >
                            Support
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight leading-tight"
                        >
                            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Questions.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed"
                        >
                            Clear answers to common questions about my process and tools.
                            <br /><br />
                            Can&apos;t find what you are looking for?
                        </motion.p>

                        <motion.a
                            href="#contact"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold hover:bg-blue-600 dark:hover:bg-blue-50 dark:hover:text-blue-600 transition-all group"
                        >
                            Ask me directly
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </div>

                    {/* Right Column: Accordion Cards */}
                    <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`rounded-2xl border transition-all duration-300 ${
                                        isOpen
                                            ? 'border-blue-500/40 bg-blue-50/30 dark:bg-zinc-900/80 dark:border-blue-500/30 shadow-md shadow-blue-500/5'
                                            : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700'
                                    }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full p-5 sm:p-6 flex items-center justify-between text-left focus:outline-none gap-4"
                                    >
                                        <span className={`text-base sm:text-lg font-bold transition-colors duration-300 ${
                                            isOpen
                                                ? 'text-blue-600 dark:text-blue-400'
                                                : 'text-zinc-900 dark:text-white'
                                        }`}>
                                            {faq.question}
                                        </span>
                                        <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                                            isOpen
                                                ? 'border-blue-600 bg-blue-600 text-white rotate-0'
                                                : 'border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800'
                                        }`}>
                                            {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-5 sm:px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base border-t border-zinc-100 dark:border-zinc-800/60 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
