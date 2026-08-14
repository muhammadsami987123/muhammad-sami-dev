import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://muhammad-sami.vercel.app';
const siteTitle = 'Muhammad Sami | Forward Deployed Engineer & AI Agent Engineer';
const siteDescription = 'Muhammad Sami builds serious AI systems, intelligent products, developer tools, automation workflows, and scalable full-stack platforms. Forward Deployed Engineer, AI Agent Engineer, Full-Stack Developer, and Founder.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Muhammad Sami',
  },
  description: siteDescription,
  keywords: [
    'Muhammad Sami',
    'Forward Deployed Engineer',
    'AI Agent Engineer',
    'Full-Stack Developer',
    'AI Agents',
    'Agentic AI Systems',
    'OpenAI SDK',
    'Anthropic Claude',
    'LangChain',
    'CrewAI',
    'Model Context Protocol',
    'MCP',
    'Next.js',
    'React',
    'TypeScript',
    'Python',
    'Django',
    'PostgreSQL',
    'n8n',
    'Automation Workflows',
    'E-Commerce Platforms',
    'Marsa Empower',
    'CodePulse Innovations',
    'FolioGenerator',
  ],
  authors: [{ name: 'Muhammad Sami', url: 'https://github.com/muhammadsami987123' }],
  creator: 'Muhammad Sami',
  publisher: 'Muhammad Sami',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: 'Muhammad Sami Portfolio',
    images: [
      {
        url: '/new-profile.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Sami — Forward Deployed Engineer and AI Agent Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '@MSAMIWASEEM1',
    images: ['/new-profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ArmMNJtXDCnwE3FnPfGPmvfy2_YOHpKduJcKVmy7g_I',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    // Stable @id so the ProfilePage at /ai-profile resolves to this same entity.
    '@id': `${siteUrl}/#person`,
    name: 'Muhammad Sami',
    alternateName: 'Muhammad Sami Asghar Mughal',
    jobTitle: 'Forward Deployed Engineer, AI Agent Engineer, Full-Stack Developer, Founder',
    description: siteDescription,
    url: siteUrl,
    mainEntityOfPage: `${siteUrl}/ai-profile`,
    image: `${siteUrl}/new-profile.png`,
    email: 'mailto:m.samiwaseem1234@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressRegion: 'Sindh',
      addressCountry: 'Pakistan',
    },
    sameAs: [
      'https://github.com/muhammadsami987123',
      'https://www.linkedin.com/in/muhammad-sami-3aa6102b8/',
      'https://twitter.com/MSAMIWASEEM1',
    ],
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Marsa Empower',
        url: 'https://marsaempower.com/',
      },
      {
        '@type': 'Organization',
        name: 'CodePulse Innovations',
        url: 'https://foliogenerator.com/',
      },
    ],
    knowsAbout: [
      'AI Agents',
      'Agentic AI Systems',
      'Forward Deployed Engineering',
      'Full-Stack Development',
      'OpenAI SDK',
      'Anthropic Claude',
      'LangChain',
      'CrewAI',
      'HuggingFace',
      'Model Context Protocol',
      'Prompt & Context Engineering',
      'n8n',
      'React',
      'Next.js',
      'TypeScript',
      'Python',
      'Django',
      'PostgreSQL',
      'Sanity',
      'Stripe Integrations',
      'ShipEngine Integrations',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Muhammad Sami Portfolio',
    url: siteUrl,
    description: siteDescription,
    inLanguage: 'en',
    author: { '@id': `${siteUrl}/#person` },
    publisher: { '@id': `${siteUrl}/#person` },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
