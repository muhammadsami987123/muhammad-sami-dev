'use client';

import { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import Background from '@/components/Background';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { useProjectModal } from '@/components/useProjectModal';
import { featuredProjects } from '@/data/projects';

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { activeProject, openProject, closeProject } = useProjectModal();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const displayOrder = ['voice-to-code', 'chatforge', 'shopsense', 'enterprise-ai-suite', 'wanderlux', 'octet'];
  const orderedFeaturedProjects = [...featuredProjects].sort(
    (a, b) => displayOrder.indexOf(a.id) - displayOrder.indexOf(b.id)
  );
  const loopedProjects = [...orderedFeaturedProjects, ...orderedFeaturedProjects];

  const scrollCards = (direction: 'left' | 'right') => {
    trackRef.current?.scrollBy({
      left: direction === 'right' ? 320 : -320,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <Background className="overflow-hidden py-14 lg:py-16">
      <section id="projects" aria-labelledby="featured-projects-heading" className="relative z-10">
        <div className="container-width">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                id="featured-projects-heading"
                className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl"
              >
                Featured Projects
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                A selection of my latest AI, full-stack, and product engineering work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="flex items-center gap-2"
            >
              <button
                type="button"
                onClick={() => scrollCards('left')}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-600 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-950/90 dark:text-zinc-400"
                aria-label="Scroll featured projects left"
              >
                <FiArrowLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollCards('right')}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-600 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-950/90 dark:text-zinc-400"
                aria-label="Scroll featured projects right"
              >
                <FiArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects continuous carousel"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white to-transparent dark:from-black sm:w-12" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white to-transparent dark:from-black sm:w-12" />
          <div
            ref={trackRef}
            className="project-marquee-track no-scrollbar flex w-max gap-5 overflow-x-auto px-4 pb-3 motion-reduce:w-full motion-reduce:snap-x motion-reduce:snap-mandatory motion-reduce:px-4 sm:px-6 lg:px-8"
          >
            {loopedProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % orderedFeaturedProjects.length) * 0.03 }}
                aria-hidden={index >= featuredProjects.length}
                className="w-[calc(100vw-2rem)] shrink-0 snap-start md:w-[calc((100vw-4.25rem)/2)] lg:w-[calc((100vw-7rem)/3)] xl:w-[386px]"
              >
                <ProjectCard project={project} onOpen={openProject} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container-width mt-6 text-center">
          <Link
            href="/AllProjects"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-xs font-bold text-zinc-700 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-300 dark:hover:text-blue-400"
          >
            View All Projects <FiArrowRight size={14} />
          </Link>
        </div>
      </section>

    </Background>

    {mounted && createPortal(
      <ProjectModal project={activeProject} onClose={closeProject} />,
      document.body
    )}
    </>
  );
}
