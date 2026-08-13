'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiAward, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { hackathonProjects } from '@/data/hackathon-projects';

export default function HackathonVictories() {
    return (
        <section className="py-12 lg:py-14 bg-zinc-50 dark:bg-zinc-950/50 relative overflow-hidden" id="hackathons">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-4 border border-blue-600/20 shadow-sm"
                    >
                        <FiAward className="text-blue-500" /> Proven Excellence
                    </motion.div>
                    <motion.h2
                        className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 tracking-tight leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Award-Winning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Architectures.</span>
                    </motion.h2>
                    <motion.p
                        className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Setting technical benchmarks across the ecosystem. High-performance systems
                        recognized for architectural depth and AI innovation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {hackathonProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500 flex flex-col"
                        >
                            <Link href={`/hackathon/${project.slug}`} className="absolute inset-0 z-10" />

                            <div className="absolute top-3 left-3 z-20">
                                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-blue-600/40 border border-white/10 backdrop-blur-sm">
                                    <FiAward size={9} /> {project.achievement}
                                </div>
                            </div>

                            <div className="aspect-[16/9] relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-4 sm:p-5 relative z-20 flex-1 flex flex-col">
                                <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white mb-1.5 tracking-tight line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed mb-3 line-clamp-2 font-medium">
                                    {project.description}
                                </p>

                                <div className="mb-3 flex items-center gap-2">
                                    <div className="h-1 flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-600 w-[92%]"></div>
                                    </div>
                                    <span className="text-[9px] sm:text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter">
                                        {project.benchmark}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider rounded-lg border border-zinc-200 dark:border-zinc-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-2 relative z-30">
                                    <Link
                                        href={`/hackathon/${project.slug}`}
                                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider"
                                    >
                                        Case Study <FiArrowRight size={11} />
                                    </Link>
                                    <div className="flex items-center gap-1.5 sm:gap-2">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 dark:hover:text-blue-400 transition-all"
                                        >
                                            <FiExternalLink size={11} /> Live
                                        </a>
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider hover:text-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-white transition-all"
                                            >
                                                <FiGithub size={11} /> GitHub
                                            </a>
                                        )}
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
