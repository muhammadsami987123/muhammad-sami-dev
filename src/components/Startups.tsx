'use client';

import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';

const ventures = [
  {
    title: 'Marsa Empower',
    tagline: 'FOUNDER + CHIEF OPERATING OFFICER',
    description:
      'Digital platform empowering individuals, ideas, and communities through AI, software, and strategic brand development.',
    logo: '/marsa-logo.png',
    url: 'https://marsaempower.com/',
    accent: 'from-blue-600 to-indigo-600',
    date: 'JAN 2026 – PRESENT',
  },
  {
    title: 'CodePulse Innovations',
    tagline: 'FOUNDER',
    description:
      'Product studio behind FolioGenerator.com — an AI-powered platform for portfolio creation and digital presence workflows.',
    logo: '/codepulse-logo.png',
    url: 'https://foliogenerator.com/',
    accent: 'from-teal-500 to-emerald-600',
    date: 'JUNE 2025 – PRESENT',
  },
];

export default function Startups() {
  return (
    <section id="startups" className="py-14 lg:py-16 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl"
          >
            Founded Startups
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-xl"
          >
            Building products and companies around AI, software, and digital platforms.
          </motion.p>
        </div>

        {/* Cards grid — 2 cols desktop, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="group relative flex flex-col rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 overflow-hidden"
            >
              {/* Thin top accent line */}
              <div className={`h-[3px] w-full bg-gradient-to-r ${venture.accent} shrink-0`} />

              <div className="flex flex-col flex-1 p-6">
                {/* Logo + date row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="relative w-[52px] h-[52px] rounded-xl border border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-800 overflow-hidden shadow-inner shrink-0">
                    <Image
                      src={venture.logo}
                      alt={venture.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500">
                    {venture.date}
                  </span>
                </div>

                {/* Company name + role */}
                <h3 className="text-[22px] font-bold leading-tight tracking-tight text-zinc-900 dark:text-white">
                  {venture.title}
                </h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
                  {venture.tagline}
                </p>

                {/* Description — short, 2–3 lines */}
                <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-3">
                  {venture.description}
                </p>

                {/* Footer link */}
                <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
                  >
                    Visit Website
                    <FiArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
