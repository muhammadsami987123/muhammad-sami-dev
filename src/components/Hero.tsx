'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload, FiGlobe } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import Background from './Background';

const roles = [
  "AI Agent Engineer",
  "Full Stack Developer",
  "Automation Specialist",
  "System Architect"
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), springConfig);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/muhammadsami987123', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, url: 'https://www.linkedin.com/in/muhammad-sami-3aa6102b8/', label: 'LinkedIn' },
    { icon: <FiTwitter size={20} />, url: 'https://x.com/MSAMIWASEEM1', label: 'X' },
    { icon: <FiMail size={20} />, url: '#contact', label: 'Email' },
  ];

  if (!mounted) return null;

  return (
    <Background
      showExtraGradients
      className="lg:h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* Text Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-2xl lg:text-left text-center z-10 py-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-50/30 dark:bg-blue-900/10 border border-blue-100/30 dark:border-blue-500/10 mb-6"
            >
              <div className="relative flex h-1.5 w-1.5">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Available for New Projects
              </span>
            </motion.div>

            <div className="space-y-1 mb-4">
              <h2 className="text-zinc-500 dark:text-zinc-400 text-xs lg:text-sm font-bold uppercase tracking-widest">
                Hi, I&apos;m
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
                Muhammad <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sami</span>
              </h1>
            </div>

            {/* Role Display */}
            <div className="h-12 flex justify-center lg:justify-start items-center mb-6">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-zinc-500 dark:text-zinc-500 mr-3">
                Expert in
              </span>
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-lg sm:text-xl lg:text-2xl font-bold text-zinc-900 dark:text-white"
                  >
                    {roles[roleIndex]}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block w-[3px] h-[20px] lg:h-[24px] bg-blue-600 dark:bg-blue-400 ml-2 mb-[-1px]"
                    />
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Specialized in engineering <span className="font-bold text-zinc-900 dark:text-white">Autonomous AI Systems</span> and architecting scalable <span className="font-bold text-zinc-900 dark:text-white">Full Stack Solutions</span>.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
              <Link href="#projects" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-12 lg:h-14 px-8 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-3">
                  Explore Projects <FiArrowRight size={18} />
                </button>
              </Link>
              <div className="flex gap-3 w-full sm:w-auto">
                <a href="https://muhammad-sami-resume.vercel.app/" target="_blank" className="flex-1 sm:flex-none">
                  <button className="w-full h-12 lg:h-14 px-5 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 text-xs">
                    <FiGlobe /> Web Resume
                  </button>
                </a>
                <a href="/new-resume.pdf" target="_blank" className="flex-1 sm:flex-none">
                  <button className="w-full h-12 lg:h-14 px-5 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 text-xs">
                    <FiDownload /> Resume PDF
                  </button>
                </a>
              </div>
            </div>

            {/* Social Bar */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-6 border-t border-zinc-100 dark:border-zinc-900">
              <span className="text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.4em]">Connect</span>
              <div className="flex gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-125"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Profile Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 w-full max-w-[380px] lg:flex justify-end hidden lg:block"
            style={{ rotateX, rotateY, perspective: 1000 }}
          >
            <div className="relative group">
              <div className="absolute -inset-8 bg-blue-600/10 rounded-full blur-[80px] animate-pulse"></div>

              <div className="relative bg-white dark:bg-zinc-900 rounded-[2.5rem] p-2 border border-zinc-100 shadow-2xl dark:border-zinc-800/80">
                <div className="relative aspect-[4/5] w-[260px] xl:w-[300px] rounded-[2rem] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="/new-profile.png"
                    alt="Muhammad Sami"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/20">
                    <p className="text-[8px] font-bold text-blue-300 uppercase tracking-widest mb-1">Lead AI Engineer</p>
                    <p className="text-white font-bold text-[10px] tracking-tight">Open for collaboration</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Background>
  );
}
