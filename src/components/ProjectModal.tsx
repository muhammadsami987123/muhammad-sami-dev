'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown, FiExternalLink, FiGithub, FiLock, FiX } from 'react-icons/fi';

import ProjectCover from '@/components/ProjectCover';
import type { Project } from '@/data/projects';

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const open = Boolean(project);
  const [canScroll, setCanScroll] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    if (!open) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === panelRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const focusTimer = window.setTimeout(() => panelRef.current?.focus(), 20);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(focusTimer);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [open, onClose]);

  // Measure scrollability and track scroll position
  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScroll(el.scrollHeight > el.clientHeight);
    setAtTop(el.scrollTop <= 30);
  }, []);

  useEffect(() => {
    if (!open) return;
    // Small delay so content has rendered
    const t = window.setTimeout(checkScroll, 80);
    const el = scrollRef.current;
    el?.addEventListener('scroll', checkScroll, { passive: true });
    const ro = new ResizeObserver(checkScroll);
    if (el) ro.observe(el);
    return () => {
      window.clearTimeout(t);
      el?.removeEventListener('scroll', checkScroll);
      ro.disconnect();
    };
  }, [open, checkScroll]);

  const handleIndicatorClick = () => {
    scrollRef.current?.scrollBy({ top: 200, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal"
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div
            className="absolute inset-0 bg-zinc-950/55 backdrop-blur-sm dark:bg-black/70"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[88vh] w-full flex-col overflow-hidden rounded-t-3xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-950/25 outline-none dark:border-zinc-800 dark:bg-zinc-950 sm:max-h-[80vh] sm:max-w-[680px] sm:rounded-3xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-md transition hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <FiX size={18} />
            </button>

            {/* Scrollable content */}
            <div ref={scrollRef} className="overflow-y-auto overscroll-contain pb-[env(safe-area-inset-bottom)]">
              <div className="relative aspect-[2.8/1] w-full shrink-0 bg-zinc-950">
                <ProjectCover project={project} priority sizes="(min-width: 640px) 950px, 100vw" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                    {project.status}
                  </span>
                  {project.openSource && (
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                      Open Source
                    </span>
                  )}
                  <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                    {project.year}
                  </span>
                </div>

                <h2 id={titleId} className="mt-4 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                  {project.longDescription ?? project.description}
                </p>

                {project.stage && (
                  <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-relaxed text-amber-800 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">
                    <FiLock className="mr-2 inline" />
                    <strong>Status:</strong> {project.stage}.
                  </p>
                )}

                <hr className="my-6 border-zinc-200 dark:border-zinc-800" />

                <section aria-label="Overview">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Overview</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
                </section>

                <section className="mt-7" aria-label="Key features">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Key Features</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {project.capabilities.map((capability) => (
                      <li key={capability} className="flex gap-2.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </section>

                {project.highlights.length > 0 && (
                  <section className="mt-7" aria-label="Engineering highlights">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Engineering Highlights</h3>
                    <ul className="mt-3 space-y-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                <section className="mt-7" aria-label="Technologies">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Technologies</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-bold text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {(project.liveDemo || project.github) && (
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-white dark:text-zinc-950 dark:hover:bg-blue-200"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-bold text-zinc-700 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:text-zinc-300 dark:hover:text-blue-400"
                      >
                        {project.repositoryVisibility === 'private' ? <FiLock /> : <FiGithub />}
                        {project.repositoryVisibility === 'private' ? 'Private Source' : 'GitHub / Source'}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Scroll indicator overlay */}
            <AnimatePresence>
              {canScroll && atTop && (
                <motion.div
                  key="scroll-indicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end pb-4"
                  aria-hidden="true"
                >
                  {/* Gradient fade — taller for more presence */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-zinc-950 dark:via-zinc-950/80" />
                  {/* Chevron button with pill background */}
                  <button
                    type="button"
                    onClick={handleIndicatorClick}
                    aria-label="Scroll down for more content"
                    className="pointer-events-auto relative z-10 flex cursor-pointer flex-col items-center gap-0.5 rounded-full border border-blue-200 bg-white/90 px-3 py-1.5 text-blue-500 opacity-90 shadow-md shadow-blue-100 backdrop-blur-sm transition-all hover:opacity-100 hover:shadow-blue-200 focus:outline-none dark:border-blue-500/30 dark:bg-zinc-900/90 dark:shadow-blue-950"
                  >
                    <motion.div
                      animate={{ y: [0, 5, 0], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1.6, ease: 'easeInOut', repeat: Infinity }}
                      className="motion-reduce:animate-none"
                    >
                      <FiChevronDown size={22} strokeWidth={2.5} />
                    </motion.div>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
