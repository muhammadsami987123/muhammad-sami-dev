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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'glass py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="container-width">
          <nav className="flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-zinc-100 dark:border-zinc-800 group-hover:border-blue-500 transition-colors duration-500 shadow-lg">
                <Image
                  src="/profile1.png"
                  alt="Muhammad Sami"
                  fill
                  className="object-cover transition-transform group-hover:scale-110 duration-500"
                />
              </div>
              <div className="flex flex-col -gap-1">
                <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white leading-none">
                  Muhammad Sami
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${pathname === link.href
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-zinc-200 dark:border-zinc-800">
                <a
                  href="https://github.com/muhammadsami987123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm px-4 py-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 text-white rounded-full transition-all"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 md:hidden overflow-hidden"
          >
            <div className="container-width py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-lg font-medium transition-colors ${pathname === link.href
                    ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 px-4">
                <a
                  href="https://github.com/muhammadsami987123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex justify-center py-3"
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
