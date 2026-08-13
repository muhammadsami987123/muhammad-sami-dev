'use client';

import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiZap, FiTarget, FiTrendingUp, FiAward } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import Background from '@/components/Background';

export default function AIAgentsCaseStudy() {
    return (
        <Background className="py-24 lg:py-32">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <Link
                        href="/AllProjects"
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all mb-8"
                    >
                        ← Back to Projects
                    </Link>

                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase">
                            Case Study
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight">
                            100 Days of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Agents.</span>
                        </h1>
                        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            An intensive technical journey building 500+ AI agents, focused on multi-agent orchestration, contextual memory, automation workflows, and real-world utility frameworks.
                        </p>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative aspect-video rounded-3xl overflow-hidden mb-16 border border-zinc-100 dark:border-zinc-800"
                >
                    <Image
                        src="/project-ai-agents.png"
                        alt="100 Days of AI Agents"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Key Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                >
                    {[
                        { label: 'Agents Built', value: '500+', icon: <FiCpu /> },
                        { label: 'Frameworks Used', value: '12+', icon: <FiCode /> },
                        { label: 'E-Commerce Platforms', value: '7+', icon: <FiTrendingUp /> },
                        { label: 'Projects Deployed', value: '50+', icon: <FiAward /> },
                    ].map((metric, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                            <div className="text-blue-600 dark:text-blue-400 mb-3">{metric.icon}</div>
                            <p className="text-3xl font-bold text-zinc-900 dark:text-white mb-1">{metric.value}</p>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">{metric.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* The Challenge */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <FiTarget className="text-blue-600 text-2xl" />
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The Challenge</h2>
                    </div>
                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            The AI landscape was rapidly evolving with the emergence of Large Language Models, but there was a critical gap between simple prompt engineering and production-ready autonomous systems. The challenge was to bridge this gap by:
                        </p>
                        <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>Building agents that could reason, plan, and execute complex multi-step tasks autonomously</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>Implementing contextual memory systems that persist across sessions</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>Orchestrating multiple specialized agents to collaborate on industrial-scale problems</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>Ensuring reliability, error handling, and graceful degradation in production environments</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* The Architecture */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <FiCode className="text-blue-600 text-2xl" />
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The Architecture</h2>
                    </div>

                    <div className="space-y-8">
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-100 dark:border-blue-900/20">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Core Technology Stack</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Intelligence Layer</h4>
                                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                        <li>• OpenAI GPT-4 & GPT-3.5 Turbo</li>
                                        <li>• Anthropic Claude for reasoning tasks</li>
                                        <li>• LangChain for orchestration</li>
                                        <li>• CrewAI for multi-agent coordination</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Infrastructure</h4>
                                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                                        <li>• Python 3.11+ runtime</li>
                                        <li>• Vector databases (Chroma, Pinecone)</li>
                                        <li>• FastAPI for API endpoints</li>
                                        <li>• Docker containerization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Key Architectural Decisions</h3>
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                                    <h4 className="font-bold text-zinc-900 dark:text-white mb-2">1. Modular Agent Design</h4>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                                        Each agent was designed as an independent, reusable module with clearly defined inputs, outputs, and responsibilities. This enabled rapid composition and testing of complex workflows.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                                    <h4 className="font-bold text-zinc-900 dark:text-white mb-2">2. RAG-First Approach</h4>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                                        Implemented Retrieval-Augmented Generation for all knowledge-intensive tasks, ensuring agents had access to up-to-date, domain-specific information without retraining.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                                    <h4 className="font-bold text-zinc-900 dark:text-white mb-2">3. Tool-Calling Framework</h4>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                                        Leveraged OpenAI&apos;s function calling and custom tool integration to give agents the ability to interact with external APIs, databases, and services autonomously.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Results */}
                <section className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <FiZap className="text-blue-600 text-2xl" />
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">The Results</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="p-8 rounded-3xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900">
                            <h3 className="text-2xl font-bold mb-4">Impact & Achievements</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-4xl font-bold mb-2">7+</p>
                                    <p className="text-zinc-300 dark:text-zinc-600 text-sm">E-commerce platforms shipped with modern product workflows</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-bold mb-2">50+</p>
                                    <p className="text-zinc-300 dark:text-zinc-600 text-sm">Deployed projects across AI, automation, commerce, and full-stack platforms</p>
                                </div>
                            </div>
                        </div>

                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Key Learnings</h3>
                            <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 mt-1">→</span>
                                    <span><strong>Prompt Engineering is Critical:</strong> 80% of agent reliability comes from well-structured prompts and clear instruction hierarchies.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 mt-1">→</span>
                                    <span><strong>Error Handling Matters:</strong> Production agents need robust fallback mechanisms and graceful degradation strategies.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 mt-1">→</span>
                                    <span><strong>Context Management:</strong> Effective memory systems and context pruning are essential for long-running agent sessions.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-blue-600 mt-1">→</span>
                                    <span><strong>Multi-Agent Coordination:</strong> CrewAI&apos;s role-based architecture proved superior to monolithic agent designs for complex tasks.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Technologies Used */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Technologies Used</h2>
                    <div className="flex flex-wrap gap-3">
                        {['Python', 'OpenAI', 'LangChain', 'CrewAI', 'FastAPI', 'Docker', 'Chroma', 'Pinecone', 'TypeScript', 'Next.js', 'Streamlit', 'AutoGen'].map((tech) => (
                            <span key={tech} className="px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-bold border border-zinc-200 dark:border-zinc-700">
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center pt-12 border-t border-zinc-100 dark:border-zinc-900">
                    <p className="text-zinc-500 dark:text-zinc-400 mb-6">Explore the complete repository</p>
                    <a
                        href="https://github.com/muhammadsami987123/100DaysOfAI-Agents"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
                    >
                        View on GitHub →
                    </a>
                </div>
            </div>
        </Background>
    );
}
