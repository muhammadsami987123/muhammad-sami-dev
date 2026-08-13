'use client';

import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar, FiCheckCircle } from 'react-icons/fi';

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  description?: string;
  link?: string;
  category: string;
}

const certificates: Certificate[] = [
  {
    title: 'Claude with the Anthropic API — Anthropic Certified',
    issuer: 'Anthropic',
    year: 'Mar 2026',
    category: 'AI Engineering',
    description: 'Credential ID 5es8gqbcdjfo. Covers integrating and building with Claude using the Anthropic API.',
    link: 'https://verify.skilljar.com/c/5es8gqbcdjfo',
  },
  {
    title: 'Claude with Google Vertex AI — Anthropic Certified',
    issuer: 'Anthropic',
    year: 'Mar 2026',
    category: 'AI + Cloud',
    description: 'Credential ID se3pxj9hk77i. Covers deploying and using Claude through Google Cloud Vertex AI.',
    link: 'https://verify.skilljar.com/c/se3pxj9hk77i',
  },
  {
    title: 'Claude Code in Action — Anthropic Certified',
    issuer: 'Anthropic',
    year: 'Mar 2026',
    category: 'AI Development',
    description: 'Credential ID tnje3qz8x2qe. Hands-on course covering real-world AI development with Claude Code.',
    link: 'https://verify.skilljar.com/c/tnje3qz8x2qe',
  },
  {
    title: 'AI Fluency: Framework & Foundations — Anthropic Certified',
    issuer: 'Anthropic',
    year: 'Mar 2026',
    category: 'AI Foundations',
    description: 'Credential ID ee4r86b6c2fi. Covers core AI frameworks, foundational concepts, and practical AI systems understanding.',
  },
  {
    title: 'Claude 101 — Anthropic Certified',
    issuer: 'Anthropic',
    year: 'Mar 2026',
    category: 'AI Foundations',
    description: 'Credential ID fnxatvcgct8p. Covers core concepts of working with Claude AI.',
  },
  {
    title: 'Agent Factory Fundamentals: Building Digital FTEs',
    issuer: 'Panaversity',
    year: 'Feb 2026',
    category: 'AI Agents',
    description: 'Credential ID BADGE-9480. Focused on AI agents, Anthropic Claude, and digital FTE concepts.',
  },
  {
    title: 'AWS Application Migration Service Getting Started',
    issuer: 'Amazon Web Services (AWS)',
    year: 'Nov 2025',
    category: 'Cloud',
    description: 'Completed AWS Application Migration Service Getting Started, covering migration process, AWS MGN, testing migrated applications, and cloud modernization.',
  },
  {
    title: 'Sustainability Strategies with Generative AI',
    issuer: 'Amazon Web Services (AWS)',
    year: 'Nov 2025',
    category: 'Generative AI',
    description: 'Completed AWS course on applying generative AI to sustainability and responsible innovation in cloud environments.',
  },
  {
    title: 'Prompt & Context Engineering – Level 1',
    issuer: 'PIAIC',
    year: 'Oct 2025',
    category: 'Prompt Engineering',
    description: 'Completed Prompt and Context Engineering Level 1 Certification Exam, focused on prompt design, context control, and AI communication strategies.',
  },
  {
    title: 'n8n Course Level 1',
    issuer: 'n8n',
    year: 'Aug 2025',
    category: 'Automation',
    description: 'Credential ID 4745264eb542bb2441779cc3e0d61e23. Covers n8n workflow automation fundamentals.',
  },
  {
    title: 'Fundamentals of MCP',
    issuer: 'Hugging Face',
    year: 'Aug 2025',
    category: 'Model Context Protocol',
    description: 'Credential ID muhammadsami987123. Fundamentals of Model Context Protocol.',
  },
  {
    title: 'Model Context Protocol: Advanced Topics',
    issuer: 'Anthropic',
    year: 'Jul 2025',
    category: 'Model Context Protocol',
    description: 'Credential ID h5f6vyohij6h. Advanced MCP concepts.',
  },
  {
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    year: 'Jul 2025',
    category: 'Model Context Protocol',
    description: 'Credential ID stc4kxn2k5da. Introduction to MCP concepts.',
  },
  {
    title: 'Frontend Development Intern',
    issuer: 'CodeAlpha',
    year: 'Apr–May 2025',
    category: 'Frontend',
    description: 'Credential ID CA/AP1/8355. Frontend development internship certificate.',
  },
];

export default function Certificates() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">
          <FiAward size={24} />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">Certifications & Credentials</h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">Current AI, automation, cloud, MCP, and frontend credentials from LinkedIn.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={`${cert.title}-${cert.issuer}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            className="group relative p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-amber-200 dark:hover:border-amber-900/50 transition-all shadow-sm hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {cert.category}
                  </span>
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-white leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {cert.title}
                </h4>
              </div>
              <FiCheckCircle className="text-emerald-500 shrink-0 mt-1" />
            </div>

            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-2">{cert.issuer}</p>

            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500 mb-3">
              <FiCalendar size={12} />
              <span>{cert.year}</span>
            </div>

            {cert.description && (
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                {cert.description}
              </p>
            )}

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
              >
                Verify credential <FiExternalLink size={10} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
