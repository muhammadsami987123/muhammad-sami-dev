'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiSearch } from 'react-icons/fi';

import Background from '@/components/Background';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { useProjectModal } from '@/components/useProjectModal';
import {
  getProjectBySlug,
  projectCategories,
  projects,
  searchProject,
  type ProjectCategory,
} from '@/data/projects';

export default function AllProjects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const { activeProject, openProject, closeProject, setActiveProject } = useProjectModal({ syncQuery: true });

  useEffect(() => { setMounted(true); }, []);

  // Deep link support: /AllProjects?project=chatforge opens straight into the modal.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('project');
    if (slug) {
      const project = getProjectBySlug(slug);
      if (project) setActiveProject(project);
    }
  }, [setActiveProject]);

  const isFiltering = activeCategory !== 'All' || Boolean(searchQuery.trim());

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          (activeCategory === 'All' || project.category === activeCategory) &&
          searchProject(project, searchQuery)
      ),
    [activeCategory, searchQuery]
  );

  return (
    <>
    <Background className="pb-20 pt-24 lg:pt-28">
      <main className="container-width relative z-10">
        <header className="mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl"
          >
            All Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            A collection of my AI, full-stack, developer, and product engineering work.
          </motion.p>
        </header>

        <section
          aria-label="Search and filter projects"
          className="sticky top-[64px] z-30 -mx-4 mb-10 border-y border-zinc-200/70 bg-white/90 px-4 py-3 backdrop-blur-xl dark:border-zinc-800 dark:bg-black/85 sm:mx-0 sm:rounded-2xl sm:border sm:px-4"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <label className="relative block w-full lg:max-w-xs">
              <span className="sr-only">Search projects</span>
              <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search projects..."
                className="h-10 w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-9 pr-3 text-sm font-medium text-zinc-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:bg-zinc-900"
              />
            </label>

            <div className="no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1" role="tablist" aria-label="Project categories">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className={`h-9 shrink-0 rounded-full px-3.5 text-[10px] font-black uppercase tracking-[0.14em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    activeCategory === category
                      ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950'
                      : 'border border-zinc-200 bg-white text-zinc-500 hover:border-blue-500/40 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="all-projects-heading">
          <h2 id="all-projects-heading" className="text-xl font-bold text-zinc-950 dark:text-white sm:text-2xl">
            {isFiltering ? 'Results' : 'All Projects'}
          </h2>
          <p className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            {isFiltering
              ? `${filteredProjects.length} project${filteredProjects.length === 1 ? '' : 's'} matched.`
              : 'Explore the complete collection of projects, experiments, platforms, and engineering work.'}
          </p>

          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div layout className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ProjectCard project={project} onOpen={openProject} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-white/70 p-10 text-center dark:border-zinc-700 dark:bg-zinc-950/70"
              >
                <p className="font-bold text-zinc-950 dark:text-white">No projects matched this search.</p>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                  Try another category or a technology like Next.js, OpenAI, FastAPI, or Stripe.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <section
          aria-labelledby="explore-more-heading"
          className="mt-14 rounded-2xl border border-zinc-200/80 bg-white/90 p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950/80 dark:shadow-black/20 sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Open Source
              </p>
              <h2
                id="explore-more-heading"
                className="mt-2 text-xl font-bold text-zinc-950 dark:text-white sm:text-2xl"
              >
                Want to explore more?
              </h2>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                More than 5,000+ projects and experiments are available on my GitHub.
              </p>
            </div>

            <a
              href="https://github.com/muhammadsami987123?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-[10px] font-black uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-zinc-950 dark:hover:bg-blue-500 dark:hover:text-white dark:focus-visible:ring-offset-black"
            >
              <FiGithub size={13} />
              View All Projects
              <FiArrowRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              />
            </a>
          </div>
        </section>
      </main>

    </Background>

    {mounted && createPortal(
      <ProjectModal project={activeProject} onClose={closeProject} />,
      document.body
    )}
    </>
  );
}
