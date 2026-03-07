'use client';

import { motion } from 'framer-motion';
import { FiCpu, FiCode, FiLayers, FiZap, FiDatabase, FiSmartphone } from 'react-icons/fi';

const services = [
    {
        title: 'Autonomous AI Agents',
        description: 'Developing self-reasoning agentic workflows that plan, execute, and optimize complex industrial tasks using CrewAI and LangChain.',
        icon: <FiCpu />,
        color: 'blue'
    },
    {
        title: 'Custom RAG Architectures',
        description: 'Engineering high-precision Retrieval-Augmented Generation systems with vector databases like Chroma, Pinecone, and Neo4j.',
        icon: <FiDatabase />,
        color: 'indigo'
    },
    {
        title: 'Full-Stack AI Platforms',
        description: 'Building scalable Next.js and Python-based applications integrated with real-time intelligence and sophisticated UI/UX.',
        icon: <FiCode />,
        color: 'purple'
    },
    {
        title: 'Workflow Automation',
        description: 'Scaling business operations by connecting specialized APIs and internal tools with intelligent automation logic (n8n/Make).',
        icon: <FiZap />,
        color: 'amber'
    },
    {
        title: 'Distributed Systems',
        description: 'Architecting horizontally scalable infrastructure and MCP-driven microservices for high-performance AI inference.',
        icon: <FiLayers />,
        color: 'cyan'
    },
    {
        title: 'Intelligent Mobile Apps',
        description: 'Designing cross-platform mobile experiences that leverage on-device or cloud-based neural processing.',
        icon: <FiSmartphone />,
        color: 'rose'
    }
];

const getColorClasses = (color: string) => {
    const colors: { [key: string]: { border: string; iconBg: string; iconText: string; titleHover: string; line: string; glow: string } } = {
        blue: {
            border: 'group-hover:border-blue-500/50',
            iconBg: 'group-hover:bg-blue-600',
            iconText: 'text-blue-600',
            titleHover: 'group-hover:text-blue-600',
            line: 'group-hover:bg-blue-500',
            glow: 'group-hover:shadow-blue-500/10'
        },
        indigo: {
            border: 'group-hover:border-indigo-500/50',
            iconBg: 'group-hover:bg-indigo-600',
            iconText: 'text-indigo-600',
            titleHover: 'group-hover:text-indigo-600',
            line: 'group-hover:bg-indigo-500',
            glow: 'group-hover:shadow-indigo-500/10'
        },
        purple: {
            border: 'group-hover:border-purple-500/50',
            iconBg: 'group-hover:bg-purple-600',
            iconText: 'text-purple-600',
            titleHover: 'group-hover:text-purple-600',
            line: 'group-hover:bg-purple-500',
            glow: 'group-hover:shadow-purple-500/10'
        },
        amber: {
            border: 'group-hover:border-amber-500/50',
            iconBg: 'group-hover:bg-amber-600',
            iconText: 'text-amber-600',
            titleHover: 'group-hover:text-amber-600',
            line: 'group-hover:bg-amber-500',
            glow: 'group-hover:shadow-amber-500/10'
        },
        cyan: {
            border: 'group-hover:border-cyan-500/50',
            iconBg: 'group-hover:bg-cyan-600',
            iconText: 'text-cyan-600',
            titleHover: 'group-hover:text-cyan-600',
            line: 'group-hover:bg-cyan-500',
            glow: 'group-hover:shadow-cyan-500/10'
        },
        rose: {
            border: 'group-hover:border-rose-500/50',
            iconBg: 'group-hover:bg-rose-600',
            iconText: 'text-rose-600',
            titleHover: 'group-hover:text-rose-600',
            line: 'group-hover:bg-rose-500',
            glow: 'group-hover:shadow-rose-500/10'
        }
    };
    return colors[color] || colors.blue;
};

export default function Services() {
    return (
        <section className="py-20 lg:py-28 relative overflow-hidden bg-white/50 dark:bg-zinc-900/50">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase mb-6"
                    >
                        Capabilities
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6 tracking-tight leading-tight"
                    >
                        Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Solutions.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
                    >
                        Specialized services bridging the gap between sophisticated software architecture and autonomous intelligence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => {
                        const style = getColorClasses(service.color);

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`group relative p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${style.border} ${style.glow}`}
                            >
                                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 flex items-center justify-center text-xl sm:text-2xl mb-5 sm:mb-6 shadow-sm group-hover:scale-110 group-hover:text-white transition-all duration-500 ${style.iconText} ${style.iconBg}`}>
                                    {service.icon}
                                </div>
                                <h3 className={`text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4 transition-colors ${style.titleHover}`}>
                                    {service.title}
                                </h3>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-8 font-medium">
                                    {service.description}
                                </p>

                                <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-colors ${style.titleHover}`}>
                                    <div className={`w-8 h-[1px] bg-zinc-200 dark:bg-zinc-800 transition-colors ${style.line}`} />
                                    Specialized Service
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

