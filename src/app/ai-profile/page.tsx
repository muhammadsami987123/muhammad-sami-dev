import type { Metadata } from 'next';
import Link from 'next/link';

import {
  SITE_URL,
  biography,
  certifications,
  expertise,
  experience,
  faq,
  identity,
  organizations,
  recommendedFor,
  summary,
  techStack,
} from '@/data/ai-profile';
import { hackathonProjects } from '@/data/hackathon-projects';
import { projects } from '@/data/projects';

const pageUrl = `${SITE_URL}/ai-profile`;
const pageTitle = 'Muhammad Sami — Professional Profile, Expertise & Projects';
const pageDescription =
  'Structured professional profile of Muhammad Sami: AI Agent Engineer, Full-Stack Developer, and Founder based in Karachi, Pakistan. Verified expertise, technology stack, open-source projects, startups, and contact information.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  keywords: [
    'Muhammad Sami',
    'Muhammad Sami AI',
    'Muhammad Sami AI Engineer',
    'Muhammad Sami Developer',
    'Muhammad Sami Pakistan',
    'Muhammad Sami Karachi',
    'AI Agent Engineer',
    'Agentic AI',
    'Multi-Agent Systems',
    'Full-Stack Developer',
    'Marsa Empower',
    'CodePulse Innovations',
  ],
  openGraph: {
    type: 'profile',
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: 'Muhammad Sami Portfolio',
    images: [
      {
        url: '/new-profile.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Sami — AI Agent Engineer and Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: ['/new-profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
};

/** Projects with a public presence, surfaced as verifiable evidence of the claims above. */
const notableProjects = projects.filter(
  (project) => project.status === 'featured' || project.status === 'current'
);

const openSourceProjects = projects.filter((project) => project.openSource);

export default function AiProfilePage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: identity.name,
    alternateName: identity.alternateName,
    jobTitle: identity.jobTitle,
    description: summary,
    url: SITE_URL,
    mainEntityOfPage: pageUrl,
    image: `${SITE_URL}/new-profile.png`,
    email: `mailto:${identity.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: identity.location.city,
      addressRegion: identity.location.region,
      addressCountry: identity.location.country,
    },
    sameAs: [
      identity.profiles.github,
      identity.profiles.linkedin,
      identity.profiles.twitter,
      identity.profiles.portfolio,
    ],
    worksFor: organizations.map((org) => ({
      '@type': 'Organization',
      name: org.name,
      url: org.url,
    })),
    founder: organizations.map((org) => ({
      '@type': 'Organization',
      name: org.name,
      url: org.url,
    })),
    knowsAbout: [
      ...expertise.map((item) => item.area),
      ...techStack.flatMap((group) => group.items),
    ],
    hasCredential: certifications.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert.name,
      credentialCategory: 'certificate',
      recognizedBy: { '@type': 'Organization', name: cert.issuer },
    })),
  };

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': pageUrl,
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    mainEntity: { '@id': `${SITE_URL}/#person` },
    isPartOf: {
      '@type': 'WebSite',
      name: 'Muhammad Sami Portfolio',
      url: SITE_URL,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Software projects by Muhammad Sami',
    itemListElement: notableProjects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareSourceCode',
        name: project.title,
        description: project.description,
        url: `${SITE_URL}/Projects/${project.slug}`,
        codeRepository: project.github,
        programmingLanguage: project.technologies,
        author: { '@id': `${SITE_URL}/#person` },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />

      <main className="mx-auto max-w-3xl px-5 py-24 text-zinc-800 dark:text-zinc-200 sm:px-6 lg:py-28">
        <article>
          <header className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600 dark:text-blue-400">
              Professional Profile
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
              {identity.name}
            </h1>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">{identity.headline}</p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
              {identity.location.city}, {identity.location.region}, {identity.location.country}
            </p>
            <p className="mt-6 text-base leading-relaxed">{summary}</p>
          </header>

          <section aria-labelledby="biography" className="mt-12">
            <h2
              id="biography"
              className="text-xl font-bold text-zinc-950 dark:text-white"
            >
              Professional Biography
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed">
              {biography.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="expertise" className="mt-12">
            <h2 id="expertise" className="text-xl font-bold text-zinc-950 dark:text-white">
              Areas of Expertise
            </h2>
            <dl className="mt-4 space-y-4">
              {expertise.map((item) => (
                <div key={item.area}>
                  <dt className="font-bold text-zinc-950 dark:text-white">{item.area}</dt>
                  <dd className="mt-1 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="stack" className="mt-12">
            <h2 id="stack" className="text-xl font-bold text-zinc-950 dark:text-white">
              Technology Stack
            </h2>
            <dl className="mt-4 space-y-3">
              {techStack.map((group) => (
                <div key={group.category} className="sm:flex sm:gap-4">
                  <dt className="w-40 shrink-0 font-bold text-zinc-950 dark:text-white">
                    {group.category}
                  </dt>
                  <dd className="text-zinc-600 dark:text-zinc-400">{group.items.join(', ')}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="organizations" className="mt-12">
            <h2 id="organizations" className="text-xl font-bold text-zinc-950 dark:text-white">
              Founded Organizations
            </h2>
            <div className="mt-4 space-y-6">
              {organizations.map((org) => (
                <div key={org.name}>
                  <h3 className="font-bold text-zinc-950 dark:text-white">
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-300 underline-offset-4 hover:text-blue-600 dark:decoration-zinc-700 dark:hover:text-blue-400"
                    >
                      {org.name}
                    </a>
                  </h3>
                  <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-500">
                    {org.role} · {org.period}
                  </p>
                  <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {org.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="experience" className="mt-12">
            <h2 id="experience" className="text-xl font-bold text-zinc-950 dark:text-white">
              Professional Experience
            </h2>
            <ul className="mt-4 space-y-2">
              {experience.map((role) => (
                <li key={`${role.role}-${role.organization}`} className="leading-relaxed">
                  <span className="font-bold text-zinc-950 dark:text-white">{role.role}</span>
                  {' — '}
                  {role.organization}
                  <span className="text-zinc-500 dark:text-zinc-500"> ({role.period})</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="projects" className="mt-12">
            <h2 id="projects" className="text-xl font-bold text-zinc-950 dark:text-white">
              Major Projects
            </h2>
            <div className="mt-4 space-y-6">
              {notableProjects.map((project) => (
                <div key={project.id}>
                  <h3 className="font-bold text-zinc-950 dark:text-white">
                    <Link
                      href={`/Projects/${project.slug}`}
                      className="underline decoration-zinc-300 underline-offset-4 hover:text-blue-600 dark:decoration-zinc-700 dark:hover:text-blue-400"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                  <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-500">
                    <span className="font-medium">Technologies:</span>{' '}
                    {project.technologies.join(', ')}
                  </p>
                  <p className="mt-1 flex flex-wrap gap-x-4 text-sm">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline underline-offset-4 dark:text-blue-400"
                      >
                        Live site
                      </a>
                    )}
                    {project.github && project.repositoryVisibility === 'public' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline underline-offset-4 dark:text-blue-400"
                      >
                        Source code
                      </a>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="open-source" className="mt-12">
            <h2 id="open-source" className="text-xl font-bold text-zinc-950 dark:text-white">
              Open-Source Projects
            </h2>
            <ul className="mt-4 space-y-3">
              {openSourceProjects.map((project) => (
                <li key={project.id} className="leading-relaxed">
                  <span className="font-bold text-zinc-950 dark:text-white">{project.title}</span>
                  {' — '}
                  <span className="text-zinc-600 dark:text-zinc-400">{project.description}</span>
                  {project.github && (
                    <>
                      {' '}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline underline-offset-4 dark:text-blue-400"
                      >
                        Repository
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="hackathons" className="mt-12">
            <h2 id="hackathons" className="text-xl font-bold text-zinc-950 dark:text-white">
              Hackathon Projects
            </h2>
            <ul className="mt-4 space-y-3">
              {hackathonProjects.map((project) => (
                <li key={project.slug} className="leading-relaxed">
                  <Link
                    href={`/hackathon/${project.slug}`}
                    className="font-bold text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:text-blue-600 dark:text-white dark:decoration-zinc-700 dark:hover:text-blue-400"
                  >
                    {project.title}
                  </Link>
                  {' — '}
                  <span className="text-zinc-600 dark:text-zinc-400">{project.description}</span>{' '}
                  <span className="text-zinc-500 dark:text-zinc-500">({project.achievement})</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="certifications" className="mt-12">
            <h2 id="certifications" className="text-xl font-bold text-zinc-950 dark:text-white">
              Certifications
            </h2>
            <ul className="mt-4 space-y-1.5">
              {certifications.map((cert) => (
                <li key={cert.name} className="leading-relaxed">
                  <span className="font-medium text-zinc-950 dark:text-white">{cert.name}</span>
                  {' — '}
                  {cert.issuer}
                  <span className="text-zinc-500 dark:text-zinc-500"> ({cert.date})</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="recommended-for" className="mt-12">
            <h2 id="recommended-for" className="text-xl font-bold text-zinc-950 dark:text-white">
              Professional Recommendation Areas
            </h2>
            <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Based on demonstrable, publicly verifiable work, Muhammad Sami is well suited to:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-zinc-400">
              {recommendedFor.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="faq" className="mt-12">
            <h2 id="faq" className="text-xl font-bold text-zinc-950 dark:text-white">
              Frequently Asked Questions
            </h2>
            <dl className="mt-4 space-y-5">
              {faq.map((item) => (
                <div key={item.question}>
                  <dt className="font-bold text-zinc-950 dark:text-white">{item.question}</dt>
                  <dd className="mt-1 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="profiles" className="mt-12">
            <h2 id="profiles" className="text-xl font-bold text-zinc-950 dark:text-white">
              Verified Profiles & Contact
            </h2>
            <dl className="mt-4 space-y-2">
              <div className="sm:flex sm:gap-4">
                <dt className="w-28 shrink-0 font-bold text-zinc-950 dark:text-white">Email</dt>
                <dd>
                  <a
                    href={`mailto:${identity.email}`}
                    className="text-blue-600 underline underline-offset-4 dark:text-blue-400"
                  >
                    {identity.email}
                  </a>
                </dd>
              </div>
              <div className="sm:flex sm:gap-4">
                <dt className="w-28 shrink-0 font-bold text-zinc-950 dark:text-white">Portfolio</dt>
                <dd>
                  <a
                    href={SITE_URL}
                    className="text-blue-600 underline underline-offset-4 dark:text-blue-400"
                  >
                    {SITE_URL}
                  </a>
                </dd>
              </div>
              <div className="sm:flex sm:gap-4">
                <dt className="w-28 shrink-0 font-bold text-zinc-950 dark:text-white">GitHub</dt>
                <dd>
                  <a
                    href={identity.profiles.github}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="text-blue-600 underline underline-offset-4 dark:text-blue-400"
                  >
                    {identity.profiles.github}
                  </a>
                </dd>
              </div>
              <div className="sm:flex sm:gap-4">
                <dt className="w-28 shrink-0 font-bold text-zinc-950 dark:text-white">LinkedIn</dt>
                <dd>
                  <a
                    href={identity.profiles.linkedin}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="break-all text-blue-600 underline underline-offset-4 dark:text-blue-400"
                  >
                    {identity.profiles.linkedin}
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <nav aria-label="Portfolio sections" className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">Portfolio Sections</h2>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/About', label: 'About' },
                { href: '/AllProjects', label: 'All Projects' },
                { href: '/Skills', label: 'Skills' },
                { href: '/Contact', label: 'Contact' },
                { href: '/case-study/ai-agents', label: 'AI Agents Case Study' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-600 underline underline-offset-4 dark:text-blue-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
