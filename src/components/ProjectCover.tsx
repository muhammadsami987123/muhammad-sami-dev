'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import ProjectVisual from '@/components/ProjectVisual';
import type { Project } from '@/data/projects';

/**
 * Single source of truth for project imagery: real screenshot when one exists and
 * loads, otherwise a project-specific generated cover. Never renders a broken image.
 */
export default function ProjectCover({
  project,
  sizes,
  priority = false,
  className = '',
}: {
  project: Project;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [project.image]);

  if (!project.image || failed) {
    return (
      <ProjectVisual
        variant={project.visual}
        label={project.shortTitle ?? project.title}
        title={project.coverTitle}
        subtitle={project.coverSubtitle ?? project.category}
        className={`h-full w-full ${className}`}
      />
    );
  }

  return (
    <Image
      src={project.image}
      alt={`${project.title} project cover`}
      fill
      sizes={sizes ?? '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
