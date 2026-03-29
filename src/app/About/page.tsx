'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Background from '@/components/Background';
import {
  FiDownload,
  FiMail,
  FiLinkedin,
  FiGithub,
  FiBook,
  FiCode,
  FiAward,
  FiGlobe,
  FiCpu,
  FiBriefcase,
  FiTerminal,
  FiLayout,
} from 'react-icons/fi';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import Certificates from '@/components/Certificates';

export default function About() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <FiBook /> },
    { id: 'skills', label: 'Skills', icon: <FiAward /> },
    { id: 'education', label: 'Education', icon: <FiGlobe /> },
    { id: 'ai', label: 'AI Journey', icon: <FiCpu /> },
    { id: 'experience', label: 'Experience', icon: <FiBriefcase /> },
    { id: 'certifications', label: 'Certifications', icon: <FiAward /> },
  ];

  const tabContent = {
    profile: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="text-xl font-medium text-zinc-900 dark:text-white leading-relaxed">
            I am a <span className="text-blue-600 dark:text-blue-400">Lead AI Agent Engineer & Full-Stack Architect</span>, focused on building autonomous systems and cloud-native intelligence.
          </p>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
            <p>
              My professional mission is to bridge the gap between sophisticated software architectures and autonomous agentic layers, enabling systems that don&apos;t just process data—but reason, plan, and execute.
            </p>
            <p>
              Having engineered over <span className="font-bold text-zinc-900 dark:text-white">550+ AI agentic workflows</span> and successfully deployed <span className="font-bold text-zinc-900 dark:text-white">150+ tech-driven projects</span>, I specialize in multi-agent orchestration, scalable infrastructure, and specialized automation.
            </p>
            <p>
              I take pride in my performance at <span className="font-bold text-zinc-900 dark:text-white">National AI Hackathons</span>, where I have consistently delivered award-winning architectures that prioritize efficiency and system scalability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'AI Agents Engineered', value: '550+', icon: <FiCpu /> },
            { label: 'National Victories', value: '3/3', icon: <FiAward /> },
            { label: 'Total Tech Stack', value: '50+', icon: <FiCode /> },
            { label: 'E-commerce Platforms', value: '10+', icon: <FiGlobe /> },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50 transition-all hover:border-zinc-200 dark:hover:border-zinc-600 group">
              <div className="text-blue-600 dark:text-blue-400 mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold text-zinc-900 dark:text-white mb-1 tracking-tight">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
          <div className="mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4" />
            <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
              <FiBriefcase className="text-blue-600" /> Freelance Platforms
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                name: 'Fiverr',
                url: 'https://www.fiverr.com/muhammadsami530',
                description: 'Top-tier AI automation and Full-stack solutions.',
                icon: <SiFiverr className="text-2xl" />,
                accent: 'group-hover:text-[#1dbf73]'
              },
              {
                name: 'Upwork',
                url: 'https://www.upwork.com/freelancers/~016aef534b50ab5667?mp_source=share',
                description: 'Specialized in Agentic Workflows & Cloud Architecture.',
                icon: <SiUpwork className="text-2xl" />,
                accent: 'group-hover:text-[#14a800]'
              }
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700/50 transition-all hover:border-zinc-300 dark:hover:border-zinc-600 group flex items-start gap-4"
              >
                <div className={`text-zinc-400 dark:text-zinc-500 transition-colors ${platform.accent}`}>
                  {platform.icon}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-tight">{platform.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                    {platform.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    ),
    skills: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Intelligence & Core AI',
              skills: ['OpenAI SDK & Anthropic Claude', 'LangChain & Multi-agent CrewAI', 'MCP (Model Context Protocol)', 'RAG & Vector Search (Neo4j, Qdrant)', 'Custom Agentic Infrastructure']
            },
            {
              title: 'Full-Stack Architecture',
              skills: ['Next.js 15 & React 19 Ecosystem', 'TypeScript & Python (FastAPI)', 'Django & Express.js Runtimes', 'High-Performance Tailwind UI/UX', 'GraphQL & Real-time WebSockets']
            },
            {
              title: 'Cloud & Infrastructure',
              skills: ['Kubernetes & Docker Orchestration', 'AWS, GCP, & Azure Cloud', 'Vercel, Railway, & Render Ops', 'CI/CD (GitHub Actions, Argo CD)', 'Cloudflare Edge Computing']
            },
            {
              title: 'Automation & No-Code',
              skills: ['n8n & Zapier Workflow Design', 'Make.com & Pipedream Logic', 'Retool & Appsmith Tooling', 'OpenAI Builder & Custom GPTs', 'Gemini MakerSuite Integration']
            }
          ].map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-zinc-500 dark:text-zinc-400 text-sm">
                    <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
    education: (
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-8">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <FiGlobe className="text-blue-600" /> Academic & Technical Journey
          </h3>
          <div className="space-y-10">
            {[
              {
                title: 'Governor Sindh Initiative for GenAI, Web3, and Metaverse',
                institution: 'GIAIC',
                period: 'Feb 2024 – Oct 2026',
                degree: 'Certified Cloud Applied Generative AI Engineer',
                details: 'Specializing in Generative AI, Web3, Metaverse, and Cloud-Native Technologies.'
              },
              {
                title: 'PIAIC Program',
                institution: 'PIAIC',
                period: 'Aug 2024 – Apr 2026',
                degree: 'Certified Cloud Applied Agentic-AI Engineer',
                details: 'Deep dive into Agentic AI, Cloud infrastructure, and emerging AI frameworks.'
              },
              {
                title: 'SM Govt. Science College',
                institution: 'College Education',
                period: 'Jan 2023 – Jan 2025',
                degree: 'Intermediate (Pre-Engineering)',
                details: 'Focus on advanced Mathematics, Physics, and analytical problem solving.'
              },
              {
                title: 'Govt. Boys Secondary School',
                institution: 'Secondary Education',
                period: 'Jan 2021 – Feb 2022',
                degree: 'Matriculation (Science Group)',
                details: 'Foundational science and technology education.'
              }
            ].map((edu, idx) => (
              <div key={idx} className="relative group border-l-2 border-zinc-100 dark:border-zinc-800 pl-6 space-y-2">
                <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-600 ring-4 ring-white dark:ring-zinc-900 shadow-sm transition-transform group-hover:scale-125" />
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight group-hover:text-blue-600 transition-colors">{edu.title}</h4>
                <div className="flex flex-wrap gap-2 items-center">
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-tight">{edu.degree}</p>
                  <span className="text-zinc-300 dark:text-zinc-700 md:inline hidden">•</span>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{edu.period}</p>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    ai: (
      <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">My Journey in <span className="text-blue-600">AI Development.</span></h3>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-3xl">
            <p>
              My AI journey didn&apos;t start with complex models, but with a fascination for <span className="text-zinc-900 dark:text-white font-bold">meaningful automation</span>. In early 2024, I transitioned from traditional full-stack development to exploring how Large Language Models could do more than just generate text—they could <span className="italic">reason</span> and <span className="italic">act</span>.
            </p>
            <p>
              What began as simple prompt engineering experiments quickly evolved into a deep dive into <span className="text-blue-600 font-bold tracking-tight uppercase text-[10px]">Autonomous Agentic Infrastructure</span>. I realized that the future of software isn&apos;t just code we write, but intelligence that writes and executes code on our behalf.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              phase: "Phase I: The Genesis",
              title: "Prompt Engineering & Basic Automation",
              details: "Mastered the art of structured prompting and integrated LLMs into simple web workflows using LangChain and early OpenAI SDKs.",
              icon: <FiBook className="text-blue-500" />
            },
            {
              phase: "Phase II: The Growth",
              title: "550+ Agents & Multi-Agent Systems",
              details: "Engineered hundreds of specialized agents. Focused on orchestration frameworks like CrewAI and AutoGen to solve multi-step industrial problems.",
              icon: <FiCpu className="text-purple-500" />
            },
            {
              phase: "Phase III: The Frontier",
              title: "MCP & Distributed Intelligence",
              details: "Currently mastering Model Context Protocol (MCP) and distributed systems like Kafka to build horizontally scalable AI architectures.",
              icon: <FiAward className="text-amber-500" />
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/30 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-[9px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">{item.phase}</p>
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-3 leading-tight">{item.title}</h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.details}</p>
            </div>
          ))}
        </div>

        <div className="relative p-8 rounded-[2.5rem] bg-zinc-900 text-white overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -mr-32 -mt-32 group-hover:bg-blue-600/30 transition-colors" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h4 className="text-xl font-bold tracking-tight">The &quot;100 Days of AI Agents&quot; Milestone</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A pivotal chapter in my journey was building the <span className="text-white font-bold">550+ autonomous agents</span>. This wasn&apos;t just a volume play; it was a rigorous exploration of RAG, tool-calling behavior, and the limits of agentic persistence across 150+ diverse industrial projects.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold tracking-tighter text-blue-400">150+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mt-2">Projects Deployed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold tracking-tighter text-purple-400">98%</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mt-2">Inference Success</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shrink-0" />
          <p className="text-xs font-medium text-blue-700 dark:text-blue-300 leading-relaxed">
            <span className="font-bold uppercase tracking-wider text-[10px]">Where I Stand Today:</span> I am no longer just building tools; I am architecting autonomous ecosystems where intelligence is the primary backbone of the software experience.
          </p>
        </div>
      </div>
    ),
    experience: (
      <div className="relative space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
        {[
          {
            title: 'Founder & Lead Architect',
            company: 'MARSA Empower',
            period: '2025 – Present',
            location: 'Remote / Global',
            icon: <FiGlobe />,
            description: 'Architecting a comprehensive digital ecosystem for women\'s health, safety, and professional growth. Built a sophisticated multi-agent backend from scratch.',
            highlights: [
              '115+ Digital FTEs Orchestrated',
              'Autonomous Multi-Agent Backend',
              'Scaleable Women\'s Health Platform',
              'Proprietary Safety SOS Protocols'
            ]
          },
          {
            title: 'Founder',
            company: 'CodePulse Innovations',
            period: 'June 2025 – Present',
            location: 'Karachi, Sindh, Pakistan',
            icon: <FiCpu />,
            description: 'Launched FolioGenerator.com, a platform that helps individuals and professionals create visually appealing portfolios with ease.',
            highlights: [
              'Architected and built the full-stack application from scratch, ensuring scalability and performance.',
              'Integrated modern frontend and backend technologies to deliver a seamless user experience.',
              'Handled end-to-end product development including design, coding, deployment, and maintenance.'
            ]
          },
          {
            title: 'Senior AI Agent Engineer',
            company: 'Global Intelligence Solutions',
            period: '2024 – Present',
            icon: <FiTerminal />,
            description: 'Spearheading the implementation of Model Context Protocols (MCP) and RAG paradigms. Developed customized agentic suites for enterprise-level automation.'
          },
          {
            title: 'Frontend Development Intern',
            company: 'CodeAlpha',
            period: 'April 2025 – May 2025',
            icon: <FiLayout />,
            description: 'Completed a virtual internship focused on frontend development technologies and UI/UX principles.',
            highlights: [
              'Gained hands-on experience in building responsive interfaces and adapting to new frameworks.',
              'Recognized for adaptability, productivity, and consistent performance throughout the program.'
            ]
          },
          {
            title: 'National Hackathon Champion',
            company: 'Pan-Pakistan AI Competitions',
            period: '2024 – 2025',
            icon: <FiAward />,
            description: 'Achieved 3 consecutive victories specializing in "Physical AI Humanoids", "Cloud-Native Infrastructure", and "Agentic Tutoring Platforms".'
          },
          {
            title: 'Full Stack Consultant',
            company: 'Independent Solutions',
            period: '2020 – 2023',
            icon: <FiGlobe />,
            description: 'Architected and scaled 10+ e-commerce platforms and high-conversion SaaS dashboards moving legacy systems to modern cloud distributions.'
          }
        ].map((item, idx) => (
          <div key={idx} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-10 transition duration-500" />
            <div className="relative p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm transition-all duration-500 group-hover:shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-tight">{item.company}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                    {item.period}
                  </span>
                  {item.location && <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-tight">{item.location}</span>}
                </div>
              </div>

              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {'highlights' in item && item.highlights && (
                <div className="flex flex-wrap gap-2">
                  {item.highlights.map((point, pIdx) => (
                    <span key={pIdx} className="px-3 py-1 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-700 text-[11px] text-zinc-600 dark:text-zinc-400 font-medium italic">
                      # {point}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    ),
    certifications: (
      <Certificates />
    ),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  };

  return (
    <Background className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tighter">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Intelligence.</span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] animate-pulse" />
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            Engineering the intersection of sophisticated web development and modular AI solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          {/* Profile Card Column */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-xl">
                <div className="aspect-[4/5] relative bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src="/new-profile.png"
                    alt="Muhammad Sami"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white tracking-tight">Muhammad Sami</h3>
                    <p className="text-zinc-300 text-xs font-bold uppercase tracking-widest mt-1">AI & Full-Stack Engineer</p>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex justify-center gap-6">
                    {[
                      { href: "https://www.linkedin.com/in/muhammad-sami-3aa6102b8/", icon: <FiLinkedin />, label: "LinkedIn" },
                      { href: "https://github.com/muhammadsami987123", icon: <FiGithub />, label: "GitHub" },
                      { href: "mailto:m.samiwaseem1234@gmail.com", icon: <FiMail />, label: "Email" }
                    ].map(social => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-blue-600 transition-all hover:scale-110"
                        aria-label={social.label}
                      >
                        <span className="text-xl">{social.icon}</span>
                      </a>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://muhammad-sami-resume.vercel.app/"
                      target="_blank"
                      className="flex items-center justify-center gap-2 py-3 bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white rounded-xl font-bold text-xs transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                    >
                      <FiGlobe /> Web CV
                    </a>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      className="flex items-center justify-center gap-2 py-3 border-2 border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-xl font-bold text-xs transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-[0.98]"
                    >
                      <FiDownload /> Get PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tab Content Column */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 space-y-12"
          >
            {/* Premium Single-Line Tab Navigation */}
            <div className="sticky top-20 z-30 -mx-4 px-4 py-4 mb-4 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md lg:relative lg:top-0 lg:p-0 lg:bg-transparent lg:backdrop-blur-none lg:mx-0">
              <div className="relative group/tabs">
                {/* Horizontal Scroll Area */}
                <div className="flex bg-zinc-100/50 dark:bg-zinc-900/50 p-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800/50 w-full overflow-x-auto no-scrollbar scroll-smooth">
                  <div className="flex flex-nowrap gap-1">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2.5 py-3 px-6 text-[13px] font-bold rounded-xl transition-all whitespace-nowrap shrink-0 ${activeTab === tab.id
                          ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-700'
                          : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
                          }`}
                      >
                        <span className={`${activeTab === tab.id ? 'scale-110' : 'opacity-70'} transition-transform`}>
                          {tab.icon}
                        </span>
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Scroll Indicators */}
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-zinc-950/0 to-transparent pointer-events-none lg:hidden opacity-0 group-hover/tabs:opacity-100 transition-opacity" />
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-zinc-950/0 to-transparent pointer-events-none lg:hidden opacity-0 group-hover/tabs:opacity-100 transition-opacity" />
              </div>

              {/* Interaction Hint for mobile */}
              <div className="mt-2 flex items-center justify-center gap-2 lg:hidden">
                <div className="h-0.5 w-4 bg-blue-600/30 rounded-full" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Swipe to Explore</span>
                <div className="h-0.5 w-4 bg-blue-600/30 rounded-full" />
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {tabContent[activeTab as keyof typeof tabContent]}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Background>
  );
}