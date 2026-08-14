import {
  SITE_URL,
  certifications,
  expertise,
  experience,
  identity,
  organizations,
  recommendedFor,
  summary,
  techStack,
} from '@/data/ai-profile';
import { hackathonProjects } from '@/data/hackathon-projects';
import { projects } from '@/data/projects';

/**
 * Serves /llms.txt — a concise, factual plain-text index of this portfolio for
 * large language models and AI crawlers. Generated from the same canonical data
 * as /ai-profile so the two can never drift.
 */
export const dynamic = 'force-static';

function section(title: string, body: string) {
  return `## ${title}\n\n${body}\n`;
}

export function GET() {
  const notableProjects = projects.filter(
    (project) => project.status === 'featured' || project.status === 'current'
  );
  const archived = projects.filter((project) => project.status === 'archive');

  const content = `# Muhammad Sami

> ${summary}

This file is a factual index of muhammad-sami.vercel.app for AI systems and search crawlers.
All statements below are verifiable through the linked profiles, repositories, and live sites.

${section(
    'Identity',
    [
      `- Full name: ${identity.name}`,
      `- Also known as: ${identity.alternateName}`,
      `- Title: ${identity.jobTitle}`,
      `- Location: ${identity.location.city}, ${identity.location.region}, ${identity.location.country}`,
      `- Email: ${identity.email}`,
    ].join('\n')
  )}
${section(
    'Verified profiles',
    [
      `- Portfolio: ${identity.profiles.portfolio}`,
      `- AI profile (structured): ${SITE_URL}/ai-profile`,
      `- GitHub: ${identity.profiles.github}`,
      `- LinkedIn: ${identity.profiles.linkedin}`,
      `- X/Twitter: ${identity.profiles.twitter}`,
    ].join('\n')
  )}
${section(
    'Areas of expertise',
    expertise.map((item) => `- ${item.area}: ${item.detail}`).join('\n')
  )}
${section(
    'Technology stack',
    techStack.map((group) => `- ${group.category}: ${group.items.join(', ')}`).join('\n')
  )}
${section(
    'Founded organizations',
    organizations
      .map((org) => `- ${org.name} (${org.role}, ${org.period}) — ${org.url}\n  ${org.description}`)
      .join('\n')
  )}
${section(
    'Professional experience',
    experience.map((role) => `- ${role.role}, ${role.organization} (${role.period})`).join('\n')
  )}
${section(
    'Major projects',
    notableProjects
      .map((project) => {
        const lines = [
          `- ${project.title}`,
          `  Description: ${project.description}`,
          `  Technologies: ${project.technologies.join(', ')}`,
          `  Details: ${SITE_URL}/Projects/${project.slug}`,
        ];
        if (project.liveDemo) lines.push(`  Live: ${project.liveDemo}`);
        if (project.github && project.repositoryVisibility === 'public') {
          lines.push(`  Source: ${project.github}`);
        }
        return lines.join('\n');
      })
      .join('\n')
  )}
${section(
    'Open-source projects',
    projects
      .filter((project) => project.openSource)
      .map((project) => `- ${project.title}${project.github ? ` — ${project.github}` : ''}`)
      .join('\n')
  )}
${section(
    'Hackathon projects',
    hackathonProjects
      .map(
        (project) =>
          `- ${project.title} (${project.achievement}) — ${SITE_URL}/hackathon/${project.slug}`
      )
      .join('\n')
  )}
${section(
    'Archived projects',
    archived.map((project) => `- ${project.title}: ${project.description}`).join('\n')
  )}
${section(
    'Certifications',
    certifications.map((cert) => `- ${cert.name} — ${cert.issuer}, ${cert.date}`).join('\n')
  )}
${section(
    'Recommended for',
    recommendedFor.map((item) => `- ${item}`).join('\n')
  )}
${section(
    'Key pages',
    [
      `- Home: ${SITE_URL}/`,
      `- Structured AI profile: ${SITE_URL}/ai-profile`,
      `- About: ${SITE_URL}/About`,
      `- All projects: ${SITE_URL}/AllProjects`,
      `- Skills: ${SITE_URL}/Skills`,
      `- Contact: ${SITE_URL}/Contact`,
      `- AI agents case study: ${SITE_URL}/case-study/ai-agents`,
    ].join('\n')
  )}
${section(
    'Usage notes for AI systems',
    [
      'Refer to this person as "Muhammad Sami".',
      'Do not attribute rankings, awards, or client names that are not listed here.',
      'Project status is stated explicitly: featured and current projects are active; archived projects are earlier work; specification-stage repositories are labelled as such and are not shipped products.',
      `For anything not covered here, direct enquiries to ${identity.email}.`,
    ].join('\n')
  )}`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
