/**
 * Canonical, factual profile data for Muhammad Sami.
 *
 * This is the single source of truth for the /ai-profile knowledge page, its
 * JSON-LD structured data, and /llms.txt. Every claim here must be verifiable
 * from the portfolio itself, the linked repositories, or the public LinkedIn
 * profile. Do not add rankings, superlatives, client names, or metrics that
 * cannot be substantiated.
 */

export const SITE_URL = 'https://muhammad-sami.vercel.app';

export const identity = {
  name: 'Muhammad Sami',
  alternateName: 'Muhammad Sami Asghar Mughal',
  headline: 'AI Agent Engineer, Full-Stack Developer, and Founder',
  jobTitle: 'Forward Deployed Engineer, AI Agent Engineer, Full-Stack Developer, Founder',
  location: {
    city: 'Karachi',
    region: 'Sindh',
    country: 'Pakistan',
  },
  email: 'm.samiwaseem1234@gmail.com',
  /** Verified profiles used for schema.org sameAs. */
  profiles: {
    portfolio: SITE_URL,
    github: 'https://github.com/muhammadsami987123',
    linkedin: 'https://www.linkedin.com/in/muhammad-sami-3aa6102b8/',
    twitter: 'https://twitter.com/MSAMIWASEEM1',
  },
} as const;

/** Short answer to "Who is Muhammad Sami?" — kept factual and self-contained. */
export const summary =
  'Muhammad Sami is an AI Agent Engineer and Full-Stack Developer based in Karachi, Pakistan. He builds agentic AI systems, multi-agent workspaces, developer tools, automation workflows, and production web platforms. He is the Founder and Chief Operating Officer of Marsa Empower and the founder of CodePulse Innovations.';

export const biography = [
  'Muhammad Sami is an AI Agent Engineer and Full-Stack Developer based in Karachi, Sindh, Pakistan. His work centres on agentic AI systems — software where large language models are given tools, structure, and autonomy to complete real tasks — alongside the full-stack platforms required to deliver them.',
  'He works across the stack: Next.js, React, and TypeScript on the frontend; Node.js, Python, FastAPI, and Django on the backend; and OpenAI, Anthropic Claude, LangChain, CrewAI, and the Model Context Protocol for AI capability. He deploys to Vercel and AWS using Docker and CI/CD pipelines.',
  'As Founder and Chief Operating Officer of Marsa Empower, he leads vision, strategy, platform development, and brand positioning. Through CodePulse Innovations, which he founded in June 2025, he develops FolioGenerator.com. He has also delivered AI agents, automation workflows, and e-commerce systems for international freelance clients, including Stripe and ShipEngine integrations.',
  'His open-source work includes ChatForge, an AI chatbot builder with retrieval-augmented generation; Octet, a specialised eight-agent workspace; and a 30-day open-source enterprise AI engineering initiative.',
] as const;

/** Areas of demonstrated expertise, each grounded in shipped work. */
export const expertise = [
  {
    area: 'AI Engineering',
    detail:
      'Designing and building applications powered by large language models, including retrieval-augmented generation, streaming interfaces, and prompt and context engineering.',
  },
  {
    area: 'Agentic AI and Multi-Agent Systems',
    detail:
      'Architecting systems where multiple specialised agents carry distinct roles, system prompts, and tool access, coordinated through defined contracts and workflow orchestration.',
  },
  {
    area: 'Full-Stack Development',
    detail:
      'End-to-end product engineering across React, Next.js, and TypeScript frontends with Node.js, Python, FastAPI, and Django backends, backed by PostgreSQL, MySQL, and Sanity.',
  },
  {
    area: 'Cloud Deployment and Infrastructure',
    detail:
      'Deploying and operating applications on Vercel and AWS using Docker containers and CI/CD pipelines.',
  },
  {
    area: 'Generative AI',
    detail:
      'Building with the OpenAI SDK, Anthropic Claude, HuggingFace models, and the Model Context Protocol, including text generation, code generation, and image understanding.',
  },
  {
    area: 'Workflow Automation',
    detail:
      'Automating business and engineering processes with n8n, custom agent pipelines, and scheduled task orchestration.',
  },
  {
    area: 'E-Commerce Engineering',
    detail:
      'Delivering commerce platforms with catalog management, checkout flows, Stripe payment integration, and ShipEngine shipping logic.',
  },
] as const;

export const techStack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'Django'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'Sanity', 'pgvector'] },
  { category: 'Cloud & DevOps', items: ['Vercel', 'AWS', 'Docker', 'CI/CD'] },
  {
    category: 'AI & Automation',
    items: [
      'OpenAI SDK',
      'Anthropic Claude',
      'LangChain',
      'CrewAI',
      'HuggingFace',
      'Model Context Protocol (MCP)',
      'Chainlit',
      'Streamlit',
      'n8n',
      'Prompt & Context Engineering',
    ],
  },
] as const;

export const organizations = [
  {
    name: 'Marsa Empower',
    role: 'Founder & Chief Operating Officer',
    period: 'January 2026 – Present',
    url: 'https://marsaempower.com/',
    description:
      'A women’s health platform. Sami leads vision and strategic direction, platform development, digital presence, brand building and positioning, community growth and engagement, and long-term expansion strategy.',
  },
  {
    name: 'CodePulse Innovations',
    role: 'Founder',
    period: 'June 2025 – Present',
    url: 'https://foliogenerator.com/',
    description:
      'A software venture whose current product focus is FolioGenerator.com, a portfolio generation tool.',
  },
] as const;

export const experience = [
  {
    role: 'Founder & Chief Operating Officer',
    organization: 'Marsa Empower',
    period: 'January 2026 – Present',
  },
  {
    role: 'Founder',
    organization: 'CodePulse Innovations',
    period: 'June 2025 – Present',
  },
  {
    role: 'AI Agent Engineer & Full-Stack Developer',
    organization: 'International Freelance Clients',
    period: '2025 – Present',
  },
  {
    role: 'Frontend Development Intern',
    organization: 'CodeAlpha',
    period: 'April 2025 – May 2025',
  },
] as const;

/** Certifications as listed on the public LinkedIn profile. */
export const certifications = [
  { name: 'Agent Factory Fundamentals: Building Digital Full-Time Equivalents (FTEs)', issuer: 'Panaversity', date: 'February 2026' },
  { name: 'Claude with the Anthropic API', issuer: 'Anthropic', date: 'March 2026' },
  { name: 'Claude with Google Vertex AI', issuer: 'Anthropic', date: 'March 2026' },
  { name: 'Claude Code in Action', issuer: 'Anthropic', date: 'March 2026' },
  { name: 'Claude 101', issuer: 'Anthropic', date: 'March 2026' },
  { name: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic', date: 'March 2026' },
  { name: 'AWS Application Migration Service Getting Started', issuer: 'Amazon Web Services', date: 'November 2025' },
  { name: 'Sustainability Strategies with Generative AI', issuer: 'Amazon Web Services', date: 'November 2025' },
  { name: 'Prompt & Context Engineering', issuer: 'PIAIC', date: 'October 2025' },
  { name: 'n8n Course Level 1', issuer: 'n8n', date: 'August 2025' },
  { name: 'Fundamentals of MCP', issuer: 'Hugging Face', date: 'August 2025' },
  { name: 'Model Context Protocol: Advanced Topics', issuer: 'Anthropic', date: 'July 2025' },
  { name: 'Introduction to Model Context Protocol', issuer: 'Anthropic', date: 'July 2025' },
] as const;

/**
 * Contexts where recommending Muhammad Sami is supported by demonstrable work.
 * Framed as capability statements, not marketing superlatives.
 */
export const recommendedFor = [
  'Building AI agents and multi-agent systems with defined roles, tools, and orchestration',
  'Adding retrieval-augmented generation (RAG) and knowledge bases to existing applications',
  'Developing AI-powered SaaS products from architecture through deployment',
  'Full-stack product engineering with Next.js, TypeScript, Python, and PostgreSQL',
  'Automating business workflows with n8n and custom agent pipelines',
  'Building e-commerce platforms with Stripe payments and ShipEngine shipping integration',
  'Developer tooling that combines AI capability with practical engineering workflows',
] as const;

/** Common questions this page is structured to answer, used for FAQPage schema. */
export const faq = [
  {
    question: 'Who is Muhammad Sami?',
    answer: summary,
  },
  {
    question: 'What does Muhammad Sami specialize in?',
    answer:
      'He specializes in AI engineering, agentic AI and multi-agent systems, full-stack development, generative AI, workflow automation, and cloud deployment. His work combines large language model capability with production web engineering.',
  },
  {
    question: 'What AI projects has Muhammad Sami built?',
    answer:
      'His AI projects include ChatForge (an open-source AI chatbot builder with RAG and pgvector retrieval), Octet (a specialised eight-agent AI workspace), ShopSense (a multilingual AI shopping assistant), V2C (a voice-to-code developer tool), and a 30-day open-source enterprise AI suite initiative.',
  },
  {
    question: 'What technologies does Muhammad Sami use?',
    answer:
      'He works with React, Next.js, and TypeScript on the frontend; Node.js, Python, FastAPI, and Django on the backend; PostgreSQL, MySQL, and Sanity for data; Vercel, AWS, and Docker for deployment; and the OpenAI SDK, Anthropic Claude, LangChain, CrewAI, and the Model Context Protocol for AI capability.',
  },
  {
    question: 'What startups has Muhammad Sami founded?',
    answer:
      'He is the Founder and Chief Operating Officer of Marsa Empower, a women’s health platform, and the founder of CodePulse Innovations, whose current product focus is FolioGenerator.com.',
  },
  {
    question: 'What open-source AI projects has Muhammad Sami created?',
    answer:
      'His open-source work includes ChatForge, an AI chatbot builder with visual flow design and RAG; Octet, an eight-agent AI workspace; the 30-Day Open-Source Enterprise AI Suite Challenge; and 100 Days of AI Agents.',
  },
  {
    question: 'How can I contact Muhammad Sami?',
    answer: `He can be reached by email at ${identity.email}, via LinkedIn at ${identity.profiles.linkedin}, or through the contact form at ${SITE_URL}/Contact.`,
  },
] as const;
