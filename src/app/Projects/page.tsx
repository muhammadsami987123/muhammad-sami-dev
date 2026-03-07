'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink, FiGithub, FiCpu } from 'react-icons/fi';
import {
  SiPython, SiTypescript, SiOpenai, SiLangchain, SiReact, SiNextdotjs,
  SiTailwindcss, SiStripe, SiSanity, SiNodedotjs, SiFastapi, SiPostgresql
} from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';
import Background from '@/components/Background';

const iconMap: { [key: string]: React.ReactNode } = {
  'Python': <SiPython />,
  'TypeScript': <SiTypescript />,
  'OpenAI': <SiOpenai />,
  'LangChain': <SiLangchain />,
  'React': <SiReact />,
  'Next.js': <SiNextdotjs />,
  'Tailwind CSS': <SiTailwindcss />,
  'Stripe': <SiStripe />,
  'Sanity CMS': <SiSanity />,
  'Sanity': <SiSanity />,
  'Node.js': <SiNodedotjs />,
  'FastAPI': <SiFastapi />,
  'PostgreSQL': <SiPostgresql />,
};

const projects = [
  {
    id: 0,
    title: '100 Days of AI Agents',
    description: 'A professional intensive focused on architecting autonomous AI agents. Developed 550+ diverse agents including conversational AI, business intelligence bots, and workflow orchestrators using OpenAI, LangChain, and CrewAI.',
    tags: ['Python', 'TypeScript', 'OpenAI', 'LangChain', 'Automation'],
    imageUrl: '/project-ai-agents.png',
    liveUrl: 'https://github.com/muhammadsami987123/100DaysOfAI-Agents',
    githubUrl: 'https://github.com/muhammadsami987123/100DaysOfAI-Agents',
    featured: true,
    stats: {
      agents: '550+',
      frameworks: '12+'
    }
  },
  {
    id: 1,
    title: 'Furniture E-Commerce Platform',
    description: 'High-performance commerce solution with advanced product management and secure payment integrations.',
    tags: ['Next.js', 'Sanity CMS', 'Stripe', 'Tailwind CSS'],
    imageUrl: '/projext1.png',
    liveUrl: 'https://hackthone-two.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/Marketplace-Hackathon-2025.git',
  },
  {
    id: 2,
    title: 'AI-Powered Blog Platform',
    description: 'Modern content ecosystem with rich-text capabilities and dynamic content delivery via headless architecture.',
    tags: ['Next.js', 'TypeScript', 'Sanity'],
    imageUrl: '/project3.png',
    liveUrl: 'https://blogwebsite-gray.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/Blog-website',
  },
  {
    id: 6,
    title: 'Intelligent Chat Interface',
    description: 'Sophisticated chatbot application featuring context-aware responses and real-time communication protocols.',
    tags: ['React', 'Node.js', 'WebSocket'],
    imageUrl: '/project8.png',
    liveUrl: 'https://chat-bot-using-next-js.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/ChatBot-using-next.js',
  },
  {
    id: 7,
    title: 'Enterprise Admin Center',
    description: 'Comprehensive dashboard solution for real-time analytics, user management, and product orchestration.',
    tags: ['Next.js', 'Sanity', 'Chart.js'],
    imageUrl: '/project16.png',
    liveUrl: 'https://ecommerceadmindashboard-puce.vercel.app/',
  },
  {
    id: 3,
    title: 'Tech Marketplace',
    description: 'Full-cycle electronics marketplace with advanced filtering, secure checkout, and real-time inventory tracking.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Stripe'],
    imageUrl: '/project2.png',
    liveUrl: 'https://e-commerce--exclusive.vercel.app/',
    githubUrl: 'https://github.com/muhammadsami987123/Electronic-E-Commerce.git',
  },
];

export default function Projects() {
  return (
    <Background className="py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase mb-4"
          >
            Project Portfolio
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Creations.</span>
          </motion.h2>
          <motion.p
            className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A curated selection of autonomous systems and sophisticated applications bridging the gap between complexity and utility.
          </motion.p>
        </div>

        {/* Featured Milestone Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="relative group overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-5 sm:p-6 lg:p-10">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-600/10 blur-[80px] rounded-full"></div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
              <div className="flex-1 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                    100 Days of <br />
                    <span className="text-blue-500">AI Agents Challenge.</span>
                  </h3>
                  <p className="text-zinc-400 text-[12px] sm:text-[13px] md:text-sm leading-relaxed max-w-md">
                    An intensive technical journey dedicated to architecting 100+ autonomous AI entities.
                    Focused on multi-agent orchestration and contextual memory.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-zinc-800/50 py-3 sm:py-4">
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">550+</p>
                    <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 mt-1">Agents Developed</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">12+</p>
                    <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 mt-1">Frameworks</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  <Link href="/AllProjects" className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-white text-zinc-900 font-bold text-[10px] sm:text-xs rounded-xl hover:bg-zinc-100 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Explore AI Agents <FiArrowRight />
                  </Link>
                  <Link href="/case-study/ai-agents" className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-blue-600/10 border border-blue-600/20 text-blue-500 font-bold text-[10px] sm:text-xs rounded-xl hover:bg-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    View Case Study <FiExternalLink />
                  </Link>
                </div>
              </div>

              <div className="hidden lg:flex flex-1 w-full max-w-[280px] aspect-square rounded-2xl bg-zinc-800/30 border border-zinc-700/30 p-5 flex-col items-center justify-center text-center relative overflow-hidden group/card lg:scale-95">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                <FiCpu size={50} className="text-blue-500 mb-4 animate-pulse" />
                <h4 className="text-lg font-bold text-white mb-2">Technical Mastery</h4>
                <p className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest leading-none">AI & Architecture</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Improved Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-white dark:bg-zinc-900/50 rounded-3xl border border-zinc-100 dark:border-zinc-800 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
            >
              <div className="aspect-video relative bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading='lazy'
                />
              </div>
              <div className="p-8 space-y-4 flex-1 flex flex-col">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{project.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-zinc-100 dark:border-zinc-800/50 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {iconMap[tag] && <span className="text-[12px]">{iconMap[tag]}</span>}
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-4 mt-auto">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors">
                    <FiExternalLink /> LIVE DEMO
                  </a>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                      <FiGithub /> SOURCE CODE
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/AllProjects" className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-600 dark:text-zinc-400 text-sm font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all">
            View All Projects <FiArrowRight />
          </Link>
        </div>
      </div>
    </Background>
  );
}
