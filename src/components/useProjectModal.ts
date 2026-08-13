'use client';

import { useCallback, useRef, useState } from 'react';

import type { Project } from '@/data/projects';

/**
 * Modal state plus focus restoration to the card/button that opened it.
 * `syncQuery` mirrors the open project into ?project=<slug> without a navigation.
 */
export function useProjectModal({ syncQuery = false }: { syncQuery?: boolean } = {}) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openProject = useCallback(
    (project: Project, trigger: HTMLElement) => {
      triggerRef.current = trigger;
      setActiveProject(project);
      if (syncQuery) {
        window.history.replaceState(null, '', `?project=${project.slug}`);
      }
    },
    [syncQuery]
  );

  const closeProject = useCallback(() => {
    setActiveProject(null);
    if (syncQuery) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    triggerRef.current?.focus();
    triggerRef.current = null;
  }, [syncQuery]);

  return { activeProject, openProject, closeProject, setActiveProject };
}
