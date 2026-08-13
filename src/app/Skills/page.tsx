'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Background from '@/components/Background';
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiServer,
  FiTool,
  FiCpu,
  FiTerminal,
  FiCloud,
  FiZap,
} from 'react-icons/fi';
import {
  SiTailwindcss,
  SiPython,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFramer,
  SiDjango,
  SiVercel,
  SiOpenai,
  SiLangchain,
  SiHuggingface,
  SiAmazon,
  SiPlanetscale,
  SiZapier,
  SiN8N,
  SiRedis,
  SiVite,
  SiDigitalocean,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
}

interface Category {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  accent: string;
  skills: Skill[];
}

const skillCategories: Category[] = [
  {
    id: 1,
    title: 'Frontend UI/UX',
    icon: <FiLayout />,
    description: 'Architecting high-performance, responsive, and visually stunning interfaces',
    accent: 'bg-blue-500',
    skills: [
      { name: 'React / Next.js', icon: <SiReact />, proficiency: 100 },
      { name: 'TypeScript', icon: <SiTypescript />, proficiency: 94 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, proficiency: 100 },
      { name: 'Framer Motion', icon: <SiFramer />, proficiency: 90 },
      { name: 'Responsive Product UI', icon: <SiVite />, proficiency: 92 }
    ]
  },
  {
    id: 2,
    title: 'Intelligent Backend',
    icon: <FiServer />,
    description: 'Engineering resilient server-side architectures and intelligent logic',
    accent: 'bg-indigo-500',
    skills: [
      { name: 'Node.js APIs', icon: <SiNodedotjs />, proficiency: 92 },
      { name: 'Python / FastAPI', icon: <SiPython />, proficiency: 95 },
      { name: 'Django', icon: <SiDjango />, proficiency: 84 },
      { name: 'REST / API Development', icon: <FiZap />, proficiency: 90 },
      { name: 'Backend Architecture', icon: <FiTerminal />, proficiency: 90 }
    ]
  },
  {
    id: 3,
    title: 'Intelligence Layer',
    icon: <FiCpu />,
    description: 'Building autonomous agents and leveraging state-of-the-art AI',
    accent: 'bg-purple-600',
    skills: [
      { name: 'OpenAI SDK', icon: <SiOpenai />, proficiency: 98 },
      { name: 'LangChain / CrewAI', icon: <SiLangchain />, proficiency: 92 },
      { name: 'HuggingFace', icon: <SiHuggingface />, proficiency: 85 },
      { name: 'Claude / MCP', icon: <FiTerminal />, proficiency: 95 },
      { name: 'RAG / Agent Architecture', icon: <FiDatabase />, proficiency: 90 }
    ]
  },
  {
    id: 4,
    title: 'Cloud & Edge',
    icon: <FiCloud />,
    description: 'Scalable cloud infrastructure and edge delivery networks',
    accent: 'bg-sky-500',
    skills: [
      { name: 'AWS', icon: <SiAmazon />, proficiency: 85 },
      { name: 'Vercel', icon: <SiVercel />, proficiency: 100 },
      { name: 'Docker', icon: <SiDocker />, proficiency: 92 },
      { name: 'CI/CD', icon: <FiZap />, proficiency: 90 },
      { name: 'Cloud Deployment', icon: <SiDigitalocean />, proficiency: 88 }
    ]
  },
  {
    id: 5,
    title: 'Database Systems',
    icon: <FiDatabase />,
    description: 'High-availability data persistence and specialized storage',
    accent: 'bg-emerald-500',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, proficiency: 92 },
      { name: 'Sanity', icon: <FiDatabase />, proficiency: 92 },
      { name: 'MySQL', icon: <SiPlanetscale />, proficiency: 85 },
      { name: 'Redis', icon: <SiRedis />, proficiency: 86 },
      { name: 'Database Design', icon: <FiTerminal />, proficiency: 90 }
    ]
  },
  {
    id: 6,
    title: 'Infrastructure',
    icon: <FiTool />,
    description: 'Cloud-native orchestration and development environment',
    accent: 'bg-indigo-600',
    skills: [
      { name: 'Docker', icon: <SiDocker />, proficiency: 94 },
      { name: 'Git / GitHub CLI', icon: <SiGit />, proficiency: 100 },
      { name: 'CI/CD Pipelines', icon: <FiZap />, proficiency: 90 },
      { name: 'Vercel Deployments', icon: <SiVercel />, proficiency: 96 },
      { name: 'AWS Workloads', icon: <SiAmazon />, proficiency: 85 }
    ]
  },
  {
    id: 7,
    title: 'Workflows & n8n',
    icon: <FiZap />,
    description: 'Complex workflow automation and specialized systems integration',
    accent: 'bg-orange-500',
    skills: [
      { name: 'n8n Orchestration', icon: <SiN8N />, proficiency: 95 },
      { name: 'Automation Workflows', icon: <SiZapier />, proficiency: 92 },
      { name: 'Streamlit Apps', icon: <FiZap />, proficiency: 88 },
      { name: 'Chainlit Interfaces', icon: <FiCode />, proficiency: 86 },
      { name: 'Custom API Connectors', icon: <FiTerminal />, proficiency: 90 }
    ]
  },
  {
    id: 8,
    title: 'AI App Builders',
    icon: <FiCpu />,
    description: 'Rapidly deploying autonomous agents and AI-first interfaces',
    accent: 'bg-amber-500',
    skills: [
      { name: 'AI Agent Architecture', icon: <SiOpenai />, proficiency: 98 },
      { name: 'OpenAI Apps / Agents', icon: <SiOpenai />, proficiency: 96 },
      { name: 'Prompt & Context Engineering', icon: <FiCode />, proficiency: 95 },
      { name: 'Offline AI Assistants', icon: <FiCpu />, proficiency: 88 },
      { name: 'Cloud AI Assistants', icon: <FiTerminal />, proficiency: 90 }
    ]
  },
  {
    id: 9,
    title: 'Commerce & Integrations',
    icon: <FiLayout />,
    description: 'Payment, shipping, and product-platform integration work',
    accent: 'bg-cyan-500',
    skills: [
      { name: 'Stripe Integrations', icon: <FiCode />, proficiency: 90 },
      { name: 'ShipEngine Integrations', icon: <FiTool />, proficiency: 86 },
      { name: 'E-Commerce Platforms', icon: <FiLayout />, proficiency: 92 },
      { name: 'Product Strategy', icon: <FiCpu />, proficiency: 88 }
    ]
  }
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group relative flex items-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 rounded-xl bg-zinc-50/50 dark:bg-zinc-800/30 hover:bg-white dark:hover:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 shadow-sm text-sm sm:text-base">
        {skill.icon}
      </div>

      <div className="flex-grow space-y-1.5">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-bold text-zinc-700 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {skill.name}
          </h4>
          <span className="text-[10px] font-bold text-zinc-400group-hover:text-blue-500 transition-colors">
            {skill.proficiency}%
          </span>
        </div>

        {/* Sleek Progress Bar */}
        <div className="h-1 w-full bg-zinc-200 dark:bg-zinc-700/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <motion.div
      layout
      className="group h-full p-5 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-blue-100 dark:hover:border-blue-900/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4 sm:mb-6">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${category.accent} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center text-lg sm:text-xl`}>
          <span className={`dark:text-white text-zinc-900`}>
            {category.icon}
          </span>
        </div>
        <div className="px-2 py-1 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-zinc-500">
          {category.skills.length} Skills
        </div>
      </div>

      <div className="mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-1.5 transition-colors">
          {category.title}
        </h3>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed sm:min-h-[36px]">
          {category.description}
        </p>
      </div>

      <div className="space-y-3">
        {category.skills.map((skill: Skill, idx: number) => (
          <SkillCard key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <Background className="py-20 lg:pt-24 lg:pb-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase mb-6"
          >
            Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6 tracking-tight"
          >
            Tech Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Expert Skills</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
          >
            My technical belt is well-stocked. I utilize a comprehensive arsenal of modern tools
            to architect resilient, scalable, and autonomous systems.
          </motion.p>
        </div>

        {/* Filter System */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 px-4">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-300 ${activeCategory === null
              ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-lg scale-105'
              : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
              }`}
          >
            All Areas
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-300 ${activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-lg scale-105 border-transparent'
                : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400'
                }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {skillCategories
              .filter(cat => activeCategory === null || cat.id === activeCategory)
              .map((category) => (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <CategoryCard category={category} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

      </div>
    </Background>
  );
}
