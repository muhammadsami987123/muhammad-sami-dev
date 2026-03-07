'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiAward, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { hackathonProjects } from '@/data/hackathon-projects';

export default function HackathonVictories() {
    return (
        <section className="py-20 lg:py-28 bg-zinc-50 dark:bg-zinc-950/50 relative overflow-hidden" id="hackathons">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-4 border border-blue-600/20 shadow-sm"
                    >
                        <FiAward className="text-blue-500" /> Proven Excellence
                    </motion.div>
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6 tracking-tight leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Award-Winning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Architectures.</span>
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Setting technical benchmarks across the ecosystem. High-performance systems
                        recognized for architectural depth and AI innovation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {hackathonProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col"
                        >
                            <Link href={`/hackathon/${project.slug}`} className="absolute inset-0 z-10" />

                            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                                <div className="flex items-center gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-2xl shadow-blue-600/40 border border-white/10 backdrop-blur-sm">
                                    <FiAward size={10} className="sm:size-[12px]" /> {project.achievement}
                                </div>
                            </div>

                            <div className="aspect-[16/10] relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-5 sm:p-6 relative z-20 flex-1 flex flex-col">
                                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 line-clamp-3 font-medium">
                                    {project.description}
                                </p>

                                <div className="mb-4 flex items-center gap-2">
                                    <div className="h-1 flex-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-600 w-[92%]"></div>
                                    </div>
                                    <span className="text-[9px] sm:text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tighter">
                                        {project.benchmark}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider rounded-lg border border-zinc-200 dark:border-zinc-700/50">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex flex-col gap-3 relative z-30">
                                    <Link
                                        href={`/hackathon/${project.slug}`}
                                        className="w-full flex items-center justify-center gap-2 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 transform active:scale-95"
                                    >
                                        View Case Study <FiArrowRight />
                                    </Link>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-600/10 hover:text-blue-600 transition-all duration-300"
                                        >
                                            <FiExternalLink /> Live
                                        </a>
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-zinc-900 transition-all duration-300"
                                            >
                                                <FiGithub /> GitHub
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
