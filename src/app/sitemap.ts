import { MetadataRoute } from 'next'

import { hackathonProjects } from '@/data/hackathon-projects'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://muhammad-sami.vercel.app'
    const now = new Date()

    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            // Structured knowledge profile for search engines and AI systems.
            url: `${baseUrl}/ai-profile`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.95,
        },
        {
            url: `${baseUrl}/About`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/Projects`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/AllProjects`,
            lastModified: now,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/Skills`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/Contact`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/case-study/ai-agents`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.75,
        },
    ]

    const projectRoutes = projects.map((project) => ({
        // Route directory is `app/Projects/[slug]`, and Next.js paths are case-sensitive.
        url: `${baseUrl}/Projects/${project.slug}`,
        lastModified: now,
        changeFrequency: project.status === 'archive' ? 'yearly' as const : 'monthly' as const,
        priority: project.status === 'featured' ? 0.9 : project.status === 'current' ? 0.8 : 0.55,
    }))

    const hackathonRoutes = hackathonProjects.map((project) => ({
        url: `${baseUrl}/hackathon/${project.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticRoutes, ...projectRoutes, ...hackathonRoutes]
}
