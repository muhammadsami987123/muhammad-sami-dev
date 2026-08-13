import Image from 'next/image';
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
    <footer className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 transition-colors duration-300">
      {/* Glow Effects */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden opacity-30">
        <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-12 lg:mb-16">

          {/* Brand Column with Profile Image */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-md transition-transform group-hover:scale-105 duration-300">
                <Image
                  src="/profile1.png"
                  alt="Muhammad Sami"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-tight text-zinc-900 dark:text-white leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Muhammad Sami
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-blue-600 dark:text-blue-400 mt-1">
                  Forward Deployed · AI Agents
                </span>
              </div>
            </Link>

            <p className="text-zinc-600 dark:text-zinc-400 max-w-sm text-sm sm:text-base leading-relaxed">
              Building serious AI systems, intelligent products, automation workflows, developer tools, and scalable full-stack platforms.
            </p>

            <div className="flex items-center gap-3 py-2 px-4 rounded-full bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/30 dark:border-blue-500/20 w-fit backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
                Available for New Opportunities
              </span>
            </div>
          </div>

          {/* Right columns: Navigation + Connect + External Profiles */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:contents">
          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-200">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-700 group-hover:bg-blue-500 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-200">Connect</h4>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center gap-3 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:m.samiwaseem1234@gmail.com"
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center gap-3 group"
                >
                  <FiMail size={18} className="group-hover:scale-110 transition-transform" />
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* External Profiles Column */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-200">External Profiles</h4>
            <div className="space-y-3">
              <a
                href="https://muhammad-sami-resume.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 hover:border-blue-500/50 hover:shadow-lg dark:hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <FiGlobe className="text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">Live Web CV</span>
                </div>
                <FiExternalLink className="text-[10px] text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://github.com/muhammadsami987123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 hover:border-blue-500/50 hover:shadow-lg dark:hover:border-blue-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <FiGithub className="text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">GitHub Repo</span>
                </div>
                <FiExternalLink className="text-[10px] text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
          </div>{/* closes grid-cols-2 sm:grid-cols-3 wrapper */}
        </div>{/* closes lg:grid-cols-12 outer grid */}

        <div className="pt-8 border-t border-zinc-300 dark:border-zinc-800/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
              © {currentYear} Muhammad Sami
            </p>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-500 font-medium">
              Designed & Engineered with <span className="text-blue-600 dark:text-blue-400 font-semibold">Passion & Precision</span>
            </p>
          </div>

          <div className="flex gap-6">
            <Link href="/privacy" className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest hover:text-blue-600 dark:hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest hover:text-blue-600 dark:hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest hover:text-blue-600 dark:hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}