'use client';

import { FiArrowRight, FiExternalLink, FiGithub, FiLock } from 'react-icons/fi';

import ProjectCover from '@/components/ProjectCover';
import type { Project } from '@/data/projects';

/**
 * Compact archive tile. All detail lives in the project modal, so the card stays
 * scannable: cover, category, title, two-line summary, a few technologies, links.
 */
export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project, trigger: HTMLElement) => void;
}) {
  const visibleTech = project.technologies.slice(0, 3);
  const remainingTech = project.technologies.length - visibleTech.length;

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 shadow-sm shadow-zinc-200/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 dark:border-zinc-800 dark:bg-zinc-950/80 dark:shadow-black/20">
      <button
        type="button"
        onClick={(event) => onOpen(project, event.currentTarget)}
        aria-label={`Open ${project.shortTitle ?? project.title} project details`}
        className="relative block aspect-[16/9] w-full overflow-hidden bg-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
      >
        <ProjectCover
          project={project}
          className="transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        {project.stage && (
          <span className="absolute bottom-2 left-2 inline-flex items-center gap-1.5 rounded-full border border-amber-300/25 bg-black/50 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.16em] text-amber-100 backdrop-blur-md">
            <FiLock size={9} /> In progress
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {project.category}
        </p>

        <h3 className="mt-2 text-base font-bold leading-snug text-zinc-950 dark:text-white">
          <button
            type="button"
            onClick={(event) => onOpen(project, event.currentTarget)}
            className="text-left transition-colors hover:text-blue-600 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:text-blue-400"
          >
            {project.shortTitle ?? project.title}
          </button>
        </h3>

        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[9px] font-bold text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
            >
              {tech}
            </span>
          ))}
          {remainingTech > 0 && (
            <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[9px] font-bold text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900">
              +{remainingTech}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-4 text-[10px]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-8 items-center gap-1.5 rounded-md font-black uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:text-white"
            >
              <FiGithub size={12} /> Source
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-8 items-center gap-1.5 rounded-md font-black uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:text-white"
            >
              <FiExternalLink size={12} /> Live
            </a>
          )}
          <button
            type="button"
            onClick={(event) => onOpen(project, event.currentTarget)}
            className="ml-auto inline-flex min-h-8 items-center gap-1.5 rounded-md px-1 font-black uppercase tracking-[0.14em] text-blue-600 transition-colors hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-400"
          >
            Details <FiArrowRight size={12} />
          </button>
        </div>
      </div>
    </article>
  );
}
