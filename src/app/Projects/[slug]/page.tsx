import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiExternalLink, FiGithub, FiLock } from 'react-icons/fi';

import ProjectVisual from '@/components/ProjectVisual';
import { getProjectBySlug, projects } from '@/data/projects';

type Props = {
  params: Promise<{ slug: string }>;
};

const baseUrl = 'https://muhammad-sami.vercel.app';

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found | Muhammad Sami' };
  }

  const title = project.seoTitle ?? `${project.title} | Muhammad Sami`;
  const description = project.seoDescription ?? project.description;
  // Route directory is `app/Projects/[slug]`, and Next.js paths are case-sensitive.
  const url = `${baseUrl}/Projects/${project.slug}`;
  const image = project.image ?? '/new-profile.png';

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName: 'Muhammad Sami Portfolio',
      images: [{ url: image, width: 1200, height: 630, alt: `${project.title} project visual` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `${baseUrl}/projects/${project.slug}`,
    image: project.image ? `${baseUrl}${project.image}` : undefined,
    dateCreated: project.year,
    creator: {
      '@type': 'Person',
      name: 'Muhammad Sami',
      url: baseUrl,
      sameAs: ['https://github.com/muhammadsami987123', 'https://www.linkedin.com/in/muhammad-sami-3aa6102b8/'],
      jobTitle: 'Forward Deployed Engineer, AI Agent Engineer, Full-Stack Developer, Founder',
    },
    programmingLanguage: project.technologies,
    codeRepository: project.repositoryVisibility === 'public' ? project.github : undefined,
  };

  return (
    <main className="min-h-dvh overflow-hidden bg-white pt-24 text-zinc-950 dark:bg-black dark:text-white lg:pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="container-width relative z-10 pb-20">
        <Link
          href="/AllProjects"
          className="mb-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-bold text-zinc-600 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-blue-400"
        >
          <FiArrowLeft /> Back to archive
        </Link>

        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-950 shadow-2xl shadow-zinc-950/10 dark:border-zinc-800">
              <div className="relative aspect-video">
                {project.image ? (
                  <Image src={project.image} alt={`${project.title} project visual`} fill priority className="object-cover" />
                ) : (
                  <ProjectVisual
                    variant={project.visual}
                    label={project.title}
                    title={project.coverTitle}
                    subtitle={project.coverSubtitle ?? project.category}
                    className="h-full w-full"
                  />
                )}
              </div>
            </div>

            <div className="mt-6 rounded-[2rem] border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70">
              <h2 className="text-sm font-black uppercase tracking-[0.24em] text-zinc-400">Project Links</h2>
              <div className="mt-5 flex flex-col gap-3">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-white dark:text-zinc-950 dark:hover:bg-blue-200"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-bold text-zinc-700 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-zinc-800 dark:text-zinc-300 dark:hover:text-blue-400"
                  >
                    {project.repositoryVisibility === 'private' ? <FiLock /> : <FiGithub />}
                    {project.repositoryVisibility === 'private' ? 'Private Source' : 'Source Code'}
                  </a>
                )}
              </div>
              {project.stage && (
                <p className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-800 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">
                  <strong>Status:</strong> {project.stage}. This portfolio entry is intentionally framed conservatively.
                </p>
              )}
            </div>
          </div>

          <article>
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                {project.category}
              </span>
              <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                {project.status}
              </span>
              {project.openSource && (
                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                  Open Source
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.longDescription ?? project.description}
            </p>

            <section className="mt-12" aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="text-2xl font-bold text-zinc-950 dark:text-white">Overview</h2>
              <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
            </section>

            <section className="mt-12" aria-labelledby="capabilities-heading">
              <h2 id="capabilities-heading" className="text-2xl font-bold text-zinc-950 dark:text-white">Key capabilities</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.capabilities.map((capability) => (
                  <div key={capability} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                    {capability}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12" aria-labelledby="engineering-heading">
              <h2 id="engineering-heading" className="text-2xl font-bold text-zinc-950 dark:text-white">Engineering highlights</h2>
              <ul className="mt-5 space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12" aria-labelledby="tech-heading">
              <h2 id="tech-heading" className="text-2xl font-bold text-zinc-950 dark:text-white">Technologies</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-xs font-bold text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
