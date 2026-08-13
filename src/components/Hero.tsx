'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowRight, FiGithub, FiLinkedin,
  FiTwitter, FiMail, FiDownload, FiGlobe
} from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import Background from './Background';

const roles = [
  { label: 'Forward Deployed Engineer', color: 'from-blue-500 to-cyan-500' },
  { label: 'AI Agent Engineer',          color: 'from-violet-500 to-purple-600' },
  { label: 'Full-Stack Developer',       color: 'from-emerald-500 to-teal-500' },
  { label: 'Founder',                    color: 'from-orange-500 to-amber-500' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRoleIndex((p) => (p + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: <FiGithub size={18} />,   url: 'https://github.com/muhammadsami987123',                            label: 'GitHub'   },
    { icon: <FiLinkedin size={18} />, url: 'https://www.linkedin.com/in/muhammad-sami-3aa6102b8/',              label: 'LinkedIn' },
    { icon: <FiTwitter size={18} />,  url: 'https://x.com/MSAMIWASEEM1',                                       label: 'X'        },
    { icon: <FiMail size={18} />,     url: 'mailto:m.samiwaseem1234@gmail.com',                                 label: 'Email'    },
  ];

  if (!mounted) return null;

  return (
    <Background showExtraGradients className="min-h-screen flex items-center overflow-hidden">
      <div className="container-width px-6 sm:px-10 lg:px-16 pt-28 pb-16 w-full">

        {/* ── BALANCED TWO-COLUMN ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-1 justify-between">

          {/* ── LEFT: Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-semibold text-zinc-600 dark:text-zinc-300 tracking-wide whitespace-nowrap">
                Available for new projects
              </span>
            </motion.div>

            {/* Hi label */}
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-zinc-400 dark:text-zinc-500 mb-3">
              Hi, I&apos;m
            </p>

            {/* Name — one line */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-none mb-6 whitespace-nowrap">
              <span className="text-zinc-900 dark:text-white">Muhammad </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Sami
              </span>
            </h1>

            {/* Animated colorful role */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6 min-h-[36px]">
              <span className="text-lg font-medium text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                Building as
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex].label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className={`text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${roles[roleIndex].color} whitespace-nowrap`}
                >
                  {roles[roleIndex].label}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    className="inline-block w-[2px] h-[18px] bg-current ml-1 align-middle opacity-80"
                  />
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 max-w-md">
              I build{' '}
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">serious AI systems</span>,
              {' '}intelligent products, automation workflows, and scalable{' '}
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">full-stack platforms</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <Link href="#projects">
                <button className="h-12 px-7 bg-zinc-900 dark:bg-white hover:bg-zinc-700 dark:hover:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-bold rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 whitespace-nowrap">
                  Explore Projects <FiArrowRight size={16} />
                </button>
              </Link>
              <a href="https://muhammad-sami-resume.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="h-12 px-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-2xl shadow-sm transition-all flex items-center gap-2 whitespace-nowrap">
                  <FiGlobe size={15} /> Web Resume
                </button>
              </a>
              <a href="/new-resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="h-12 px-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-2xl shadow-sm transition-all flex items-center gap-2 whitespace-nowrap">
                  <FiDownload size={15} /> Resume PDF
                </button>
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-5 border-t border-zinc-200 dark:border-zinc-800 w-full">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 whitespace-nowrap">Connect</span>
              <div className="flex items-center gap-1">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-9 h-9 flex items-center justify-center rounded-xl text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Profile card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="hidden lg:flex lg:col-span-6 flex-col items-center lg:items-end justify-center relative"
          >
            {/* Glow */}
            <div className="absolute -inset-8 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Card */}
            <div className="relative bg-white dark:bg-zinc-900 rounded-[2.5rem] p-2.5 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <div className="relative w-[280px] xl:w-[310px] aspect-[3/4] rounded-[2rem] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src="/new-profile.png"
                  alt="Muhammad Sami — AI Agent Engineer"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3">
                    <p className="text-[9px] font-bold text-blue-300 uppercase tracking-[0.2em] mb-0.5">AI Agent Engineer</p>
                    <p className="text-white text-xs font-semibold">Open for collaboration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats row below card */}
            <div className="flex items-center justify-center gap-6 mt-4 px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
              <div className="text-center">
                <p className="text-2xl font-extrabold text-zinc-900 dark:text-white leading-none">500+</p>
                <p className="text-[10px] text-zinc-500 font-medium mt-0.5 whitespace-nowrap">AI Agents Built</p>
              </div>
              <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-700" />
              <div className="text-center">
                <p className="text-2xl font-extrabold text-zinc-900 dark:text-white leading-none">50+</p>
                <p className="text-[10px] text-zinc-500 font-medium mt-0.5 whitespace-nowrap">Projects Shipped</p>
              </div>
              <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-700" />
              <div className="text-center">
                <p className="text-2xl font-extrabold text-zinc-900 dark:text-white leading-none">7+</p>
                <p className="text-[10px] text-zinc-500 font-medium mt-0.5 whitespace-nowrap">E-Commerce</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </Background>
  );
}
