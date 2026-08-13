'use client';

import { motion } from 'framer-motion';
import { FiStar, FiMessageSquare, FiMapPin } from 'react-icons/fi';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Sarah Jenkins',
        role: 'CTO, TechStart',
        location: 'Austin, TX',
        content: 'Muhammad transformed our chaotic data pipelines into a sleek, autonomous workflow. His understanding of agentic AI is simply world-class.',
        avatar: 'https://i.pravatar.cc/150?u=sarah',
        rating: 5
    },
    {
        name: 'Mark Thompson',
        role: 'Senior Engineer, DataFlow',
        location: 'Seattle, WA',
        content: 'The custom RAG architecture he built allowed us to query our documentation with 99% accuracy. A truly game-changing implementation.',
        avatar: 'https://i.pravatar.cc/150?u=mark',
        rating: 5
    },
    {
        name: 'Emily Chen',
        role: 'Product Lead, InnovateCorp',
        location: 'San Francisco, CA',
        content: 'We needed a full-stack platform that could handle real-time inference. Muhammad delivered a solution that was not only fast but beautifully designed.',
        avatar: 'https://i.pravatar.cc/150?u=emily',
        rating: 5
    },
    {
        name: 'David Wilson',
        role: 'Founder, AI Solutions',
        location: 'London, UK',
        content: 'His expertise in CrewAI and multi-agent systems helped us automate our entire customer support tier. The ROI has been phenomenal.',
        avatar: 'https://i.pravatar.cc/150?u=david',
        rating: 5
    },
    {
        name: 'Jessica Rodriguez',
        role: 'Director of Eng, SoftSys',
        location: 'Madrid, Spain',
        content: 'It is rare to find an engineer who bridges the gap between complex backend logic and premium UI so seamlessly. Highly recommended.',
        avatar: 'https://i.pravatar.cc/150?u=jessica',
        rating: 5
    },
    {
        name: 'Michael Chang',
        role: 'Staff Engineer, CloudScale',
        location: 'Toronto, Canada',
        content: 'The distributed system architecture he proposed saved us 40% in monthly infrastructure costs while boosting performance.',
        avatar: 'https://i.pravatar.cc/150?u=michael',
        rating: 5
    },
    {
        name: 'Amanda White',
        role: 'VP Product, FutureTech',
        location: 'New York, NY',
        content: 'Muhammad is a visionary. He took our rough concept for an intelligent mobile app and turned it into a polished, market-ready product.',
        avatar: 'https://i.pravatar.cc/150?u=amanda',
        rating: 5
    },
    {
        name: 'Robert Baker',
        role: 'Lead Architect, DevOps Inc',
        location: 'Berlin, Germany',
        content: 'Technically brilliant and a pleasure to work with. His code is clean, well-documented, and incredibly robust.',
        avatar: 'https://i.pravatar.cc/150?u=robert',
        rating: 5
    },
    {
        name: 'Lisa Kumar',
        role: 'CEO, StartNext',
        location: 'Singapore',
        content: 'We threw some very difficult problems at him regarding vector search optimization, and he solved them in days. Exceptional talent.',
        avatar: 'https://i.pravatar.cc/150?u=lisa',
        rating: 5
    },
    {
        name: 'James Peterson',
        role: 'ML Engineer, BrainWaves',
        location: 'Boston, MA',
        content: 'His ability to integrate Python-based ML models with Next.js frontends is unparalleled. He built us a seamless, high-performance dashboard.',
        avatar: 'https://i.pravatar.cc/150?u=james',
        rating: 5
    },
    {
        name: 'Olivia Martin',
        role: 'Design Lead, CreativeAI',
        location: 'Paris, France',
        content: 'Finally, a developer who respects design! He implemented our Figma prototypes with pixel-perfect precision and added great micro-interactions.',
        avatar: 'https://i.pravatar.cc/150?u=olivia',
        rating: 5
    },
    {
        name: 'William Turner',
        role: 'Backend Lead, Serverless Co',
        location: 'Chicago, IL',
        content: 'He architected a serverless solution that scaled automatically during our Black Friday event. Zero downtime, zero stress.',
        avatar: 'https://i.pravatar.cc/150?u=william',
        rating: 5
    },
    {
        name: 'Sophie Anderson',
        role: 'Head of Data, Insightful',
        location: 'Sydney, Australia',
        content: 'The insights we get from the analytics dashboard he built are invaluable. He knows how to present complex data simply.',
        avatar: 'https://i.pravatar.cc/150?u=sophie',
        rating: 5
    },
    {
        name: 'Thomas Wright',
        role: 'Blockchain Dev, CryptoSecure',
        location: 'Zurich, Switzerland',
        content: 'Reliable, secure, and fast. Muhammad helped us audit and optimize our smart contract interactions on the frontend.',
        avatar: 'https://i.pravatar.cc/150?u=thomas',
        rating: 5
    },
    {
        name: 'Isabella Garcia',
        role: 'Frontend Architect, WebFlows',
        location: 'Barcelona, Spain',
        content: 'I was impressed by his component architecture. The system he established is scalable and easy for our junior devs to maintain.',
        avatar: 'https://i.pravatar.cc/150?u=isabella',
        rating: 5
    },
    {
        name: 'Daniel Lee',
        role: 'SRE, UpTime',
        location: 'Seoul, South Korea',
        content: 'He set up a robust CI/CD pipeline that saved us hours of manual deployment work every week. A true automation expert.',
        avatar: 'https://i.pravatar.cc/150?u=daniel',
        rating: 5
    },
    {
        name: 'Grace Kim',
        role: 'Product Owner, AgileSoft',
        location: 'Vancouver, Canada',
        content: 'Muhammad fits into any agile team perfectly. He communicates clearly, delivers on time, and always exceeds expectations.',
        avatar: 'https://i.pravatar.cc/150?u=grace',
        rating: 5
    },
    {
        name: 'Nathan Clark',
        role: 'DevRel, OpenSource',
        location: 'Amsterdam, NL',
        content: 'His contributions to our open source project were high quality and well thought out. He understands the community and the code.',
        avatar: 'https://i.pravatar.cc/150?u=nathan',
        rating: 5
    },
    {
        name: 'Hannah Scott',
        role: 'Tech Lead, MobileFirst',
        location: 'Dublin, Ireland',
        content: 'We needed a complex React Native module and he built it in record time. App performance improved by 20% immediately.',
        avatar: 'https://i.pravatar.cc/150?u=hannah',
        rating: 5
    },
    {
        name: 'Ryan King',
        role: 'Full Stack Dev, Stacked',
        location: 'Denver, CO',
        content: 'Working with him was a learning experience. His knowledge of modern React patterns and server components is top notch.',
        avatar: 'https://i.pravatar.cc/150?u=ryan',
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-14 sm:py-24 relative overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/20">
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: scroll 120s linear infinite;
                }
                .marquee-container:hover .marquee-track {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="w-full relative z-10">
                <div className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase mb-6"
                    >
                        Social Proof
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight"
                    >
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Feedback.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg"
                    >
                        Trusted by technical leaders and industry pioneers across the globe.
                    </motion.p>
                </div>

                {/* Infinite Slider Container */}
                <div className="marquee-container w-full overflow-hidden py-6 sm:py-10">
                    <div className="marquee-track gap-5 sm:gap-8 px-4">
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={`${testimonial.name}-${index}`}
                                className="relative w-[280px] sm:w-[350px] md:w-[450px] flex-shrink-0 p-5 sm:p-8 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default"
                            >
                                <div className="absolute top-8 right-8 text-blue-100 dark:text-blue-900/20 group-hover:text-blue-200 dark:group-hover:text-blue-900/40 transition-colors">
                                    <FiMessageSquare size={40} />
                                </div>

                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FiStar key={i} className="text-amber-400 fill-amber-400" size={16} />
                                    ))}
                                </div>

                                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 italic h-20 sm:h-24 line-clamp-4">
                                    &quot;{testimonial.content}&quot;
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-zinc-100 dark:border-zinc-800 group-hover:border-blue-500 transition-colors">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                            sizes="56px"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">{testimonial.name}</h4>
                                        <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">{testimonial.role}</p>
                                        <div className="flex items-center gap-1 text-[10px] text-zinc-400 font-medium">
                                            <FiMapPin size={10} /> {testimonial.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
