'use client';

import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiGlobe, FiExternalLink } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/About', label: 'About' },
    { href: '/Projects', label: 'Projects' },
    { href: '/Skills', label: 'Skills' },
    { href: '/Contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/muhammadsami987123', icon: <FiGithub size={18} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/muhammad-sami-3aa6102b8/', icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
    { href: 'https://x.com/MSAMIWASEEM1', icon: <FiTwitter size={18} />, label: 'X' },
  ];

  return (
    <footer className="bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900 pt-24 pb-12">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-zinc-900 dark:bg-white rotate-45 rounded-sm transition-transform group-hover:rotate-[135deg] duration-500 shadow-lg"></div>
                <span className="relative z-10 text-white dark:text-black font-bold text-base">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight text-zinc-900 dark:text-white leading-none">
                  Muhammad Sami
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-blue-600 dark:text-blue-400 mt-1">
                  Forward Deployed · AI Agents
                </span>
              </div>
            </Link>

            <p className="text-zinc-500 dark:text-zinc-400 max-w-sm text-base leading-relaxed">
              Building serious AI systems, intelligent products, automation workflows, developer tools, and scalable full-stack platforms.
            </p>

            <div className="flex items-center gap-3 py-2 px-4 rounded-full bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100/50 dark:border-blue-900/20 w-fit">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
                Available for New Opportunities
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-800 group-hover:bg-blue-600 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connected Centers Column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">Connect</h4>
            <ul className="space-y-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-3"
                  >
                    {social.icon}
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:m.samiwaseem1234@gmail.com"
                  className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-3"
                >
                  <FiMail size={18} />
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio Tools Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-white">External Profiles</h4>
            <div className="space-y-3">
              <a
                href="https://muhammad-sami-resume.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <FiGlobe className="text-zinc-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Live Web CV</span>
                </div>
                <FiExternalLink className="text-[10px] text-zinc-400" />
              </a>
              <a
                href="https://github.com/muhammadsami987123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <FiGithub className="text-zinc-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">GitHub Repo</span>
                </div>
                <FiExternalLink className="text-[10px] text-zinc-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
              © {currentYear} Muhammad Sami
            </p>
            <p className="text-[9px] text-zinc-400 dark:text-zinc-600 font-medium">
              Designed & Engineered with <span className="text-blue-500/80">Passion & Precision</span>
            </p>
          </div>

          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest hover:text-zinc-900 dark:hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest hover:text-zinc-900 dark:hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}