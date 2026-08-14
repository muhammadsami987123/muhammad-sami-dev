import { MetadataRoute } from 'next'

const baseUrl = 'https://muhammad-sami.vercel.app'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                // API routes hold no indexable content.
                disallow: '/api/',
            },
            // Named AI crawlers are allowed explicitly so the structured profile
            // at /ai-profile and the index at /llms.txt are reachable.
            {
                userAgent: [
                    'GPTBot',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'ClaudeBot',
                    'Claude-User',
                    'anthropic-ai',
                    'PerplexityBot',
                    'Google-Extended',
                    'Applebot-Extended',
                    'CCBot',
                    'Bingbot',
                    'DuckDuckBot',
                ],
                allow: '/',
                disallow: '/api/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    }
}
