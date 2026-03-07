'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiZap } from 'react-icons/fi';
import Image from 'next/image';

const ventures = [
    {
        title: 'MARSA Empower',
        tagline: 'The Future of Women\'s Empowerment',
        description: 'A comprehensive digital ecosystem for women\'s health, safety, and growth. Architected an autonomous multi-agent backend managing 115+ digital FTEs from the ground up.',
        highlights: [
            '115+ Digital FTEs Orchestrated',
            'Autonomous Multi-Agent Backend',
            'Scaleable Women\'s Health Platform',
            'Proprietary Safety SOS Protocols'
        ],
        logo: '/marsa-logo.png',
        url: 'https://marsaempower.com/',
        color: 'from-blue-600 to-indigo-700',
        stats: '115+ Digital FTEs'
    },
    {
        title: 'CodePulse Innovations',
        tagline: 'AI-Driven Digital Experience',
        description: 'Leading the frontier of rapid portfolio synthesis with FolioGenerator.com. Building agentic drafting engines that deliver premium digital presences with near-zero hallucination.',
        highlights: [
            'FolioGenerator.com Integration',
            'Agentic Content Drafting',
            'Real-time SEO Orchestration',
            'Custom AI Sandbox Environments'
        ],
        logo: '/codepulse-logo.png',
        url: 'https://foliogenerator.com/',
        color: 'from-teal-500 to-emerald-600',
        stats: 'Zero-Hallucination Engines'
    }
];

export default function Startups() {
    return (
        <section id="startups" className="py-20 relative overflow-hidden bg-white dark:bg-black">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                            Founder & Lead Architect
                        </span>
                    </motion.div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-xl">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight leading-tight"
                            >
                                Founded <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Startups.</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed"
                            >
                                Focused on autonomous intelligence and digital platforms through professional startup initiatives.
                            </motion.p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {ventures.map((venture, index) => (
                        <motion.div
                            key={venture.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-[2rem] blur-sm opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                            <div className="relative h-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2rem] overflow-hidden flex flex-col transition-all duration-500 group-hover:border-zinc-300 dark:group-hover:border-zinc-700">
                                {/* Top Banner */}
                                <div className={`h-1.5 w-full bg-gradient-to-r ${venture.color}`} />

                                <div className="p-5 md:p-6 flex-1 flex flex-col">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="relative w-14 h-14 bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-2.5 border border-zinc-100 dark:border-zinc-800 group-hover:scale-110 transition-transform duration-500 overflow-hidden shadow-inner">
                                            <Image
                                                src={venture.logo}
                                                alt={venture.title}
                                                fill
                                                className="object-contain p-2.5 group-hover:scale-105 transition-all duration-500"
                                            />
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div
                                                className="px-3 py-1 rounded-full text-[9px] font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 uppercase tracking-widest"
                                            >
                                                {venture.stats}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white mb-1">
                                            {venture.title}
                                        </h3>
                                        <p className="inline-block text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
                                            {venture.tagline}
                                        </p>
                                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                                            {venture.description}
                                        </p>
                                    </div>

                                    {/* Highlights Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                        {venture.highlights.map((item, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="flex-shrink-0 w-5 h-5 rounded-md bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center border border-zinc-100 dark:border-zinc-700">
                                                    <FiZap className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400" />
                                                </div>
                                                <span className="text-[9px] font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-tight">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-zinc-50 dark:border-zinc-800 flex items-center justify-between">
                                        <a
                                            href={venture.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-zinc-900 dark:text-white font-black text-sm group/link hover:opacity-70 transition-all uppercase tracking-widest"
                                        >
                                            Visit Live Platform <FiExternalLink className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        </a>

                                        <div className="flex gap-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <div className="w-2 h-2 rounded-full bg-indigo-500 opacity-50" />
                                            <div className="w-2 h-2 rounded-full bg-indigo-500 opacity-20" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
