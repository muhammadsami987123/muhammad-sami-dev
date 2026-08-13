'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/About', label: 'About' },
    { href: '/#startups', label: 'Startups' },
    { href: '/Projects', label: 'Projects' },
    { href: '/Skills', label: 'Skills' },
    { href: '/Contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[59] transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container-width">
          <nav
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-500 ${
              scrolled
                ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-300/80 dark:border-zinc-800 shadow-lg shadow-zinc-950/5'
                : 'bg-white/40 dark:bg-zinc-950/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50'
            }`}
          >
            {/* Brand Logo & Title */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-blue-500/40 group-hover:border-blue-600 transition-colors duration-300 shadow-md">
                <Image
                  src="/profile1.png"
                  alt="Muhammad Sami"
                  fill
                  className="object-cover transition-transform group-hover:scale-110 duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg tracking-tight text-zinc-900 dark:text-white leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Muhammad Sami
                </span>
                <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-blue-600 dark:text-blue-400 mt-0.5">
                  AI Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavTab"
                        className="absolute inset-0 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
              <div className="ml-3 pl-3 border-l border-zinc-300 dark:border-zinc-800">
                <a
                  href="https://github.com/muhammadsami987123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 bg-zinc-900 hover:bg-blue-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-blue-400 dark:hover:text-zinc-950 text-white rounded-full transition-all shadow-sm shadow-zinc-900/10 active:scale-95"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden p-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-zinc-300 dark:border-zinc-800 rounded-3xl shadow-2xl md:hidden overflow-hidden p-6"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-2xl text-base font-bold transition-all ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20'
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <a
                  href="https://github.com/muhammadsami987123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center py-3 bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold rounded-2xl text-sm shadow-md"
                >
                  Visit GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
