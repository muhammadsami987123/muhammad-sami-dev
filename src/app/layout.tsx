import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://muhammad-sami.vercel.app'),
  title: 'Muhammad Sami | Lead AI Agent Engineer & Full-Stack Architect | GIAIC | PIAIC',
  description: 'Muhammad Sami - GIAIC and PIAIC certified AI Engineer specialized in autonomous AI agents, RAG architectures, and cloud-native systems. 550+ agents engineered, 3/3 national hackathon victories. Expert in OpenAI, LangChain, CrewAI, Next.js, and Python.',
  keywords: ['Muhammad Sami', 'Muhammad Sami GIAIC', 'Muhammad Sami PIAIC', 'GIAIC', 'PIAIC', 'AI Engineer', 'AI Agents', 'LangChain', 'CrewAI', 'OpenAI', 'Full Stack Developer', 'Next.js', 'Python', 'RAG Architecture', 'Multi-Agent Systems', 'Cloud Native', 'Autonomous Agents', 'Machine Learning Engineer', 'Governor Sindh Initiative', 'Presidential Initiative AI'],
  authors: [{ name: 'Muhammad Sami', url: 'https://github.com/muhammadsami987123' }],
  creator: 'Muhammad Sami',
  publisher: 'Muhammad Sami',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammad-sami.vercel.app/',
    title: 'Muhammad Sami | Lead AI Agent Engineer | GIAIC | PIAIC',
    description: 'Muhammad Sami - GIAIC and PIAIC certified AI Engineer. Specialized in autonomous AI agents, RAG architectures, and cloud-native systems. 550+ agents engineered, 3/3 national hackathon victories.',
    siteName: 'Muhammad Sami Portfolio',
    images: [
      {
        url: '/profile1.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Sami - AI Agent Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Sami | Lead AI Agent Engineer | GIAIC | PIAIC',
    description: 'Muhammad Sami - GIAIC & PIAIC Certified | 550+ AI agents engineered | 3/3 National Hackathon Victories | Expert in LangChain, CrewAI, Next.js',
    creator: '@MSAMIWASEEM1',
    images: ['/profile1.png'],
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
    google: 'ArmMNJtXDCnwE3FnPfGPmvfy2_YOHpKduJcKVmy7g_I', // Added the Google Search Console verification code from your screenshot
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Sami",
              "alternateName": "Muhammad Sami Waseem",
              "jobTitle": "Lead AI Agent Engineer & Full-Stack Architect",
              "description": "GIAIC and PIAIC certified AI Engineer specialized in autonomous AI agents, RAG architectures, and cloud-native systems.",
              "url": "https://muhammad-sami.vercel.app",
              "image": "https://muhammad-sami.vercel.app/profile1.png",
              "email": "m.samiwaseem1234@gmail.com",
              "sameAs": [
                "https://github.com/muhammadsami987123",
                "https://www.linkedin.com/in/muhammad-sami-3aa6102b8/",
                "https://twitter.com/MSAMIWASEEM1"
              ],
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Governor Sindh Initiative for GenAI, Web3, and Metaverse (GIAIC)"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Presidential Initiative for Artificial Intelligence and Computing (PIAIC)"
                }
              ],
              "knowsAbout": ["AI Agents", "LangChain", "CrewAI", "OpenAI", "GIAIC", "PIAIC"]
            })
          }}
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