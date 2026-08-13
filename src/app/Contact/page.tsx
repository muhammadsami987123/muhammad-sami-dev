'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiTwitter, FiSend, FiCheckCircle } from 'react-icons/fi';
import Background from '@/components/Background';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'm.samiwaseem1234@gmail.com',
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '+92 347 7286878',
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Karachi, Sindh, Pakistan',
    },
  ];

  return (
    <Background className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-[10px] tracking-widest uppercase mb-4"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Great.</span>
          </motion.h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-base sm:text-lg leading-relaxed">
            Have a project in mind or looking for advanced AI solutions? Reach out and let&apos;s discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 bg-white dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800 transition-all hover:border-blue-500/50 shadow-sm">
                  <div className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-0.5 sm:mb-1">{info.label}</p>
                    <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white truncate max-w-[200px] sm:max-w-none">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden lg:block pt-10 border-t border-zinc-200 dark:border-zinc-800">
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-6">Social Networks</p>
              <div className="flex gap-3">
                {[
                  { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/muhammad-sami-3aa6102b8/', label: 'LinkedIn' },
                  { icon: <FiGithub />, url: 'https://github.com/muhammadsami987123', label: 'GitHub' },
                  { icon: <FiTwitter />, url: 'https://twitter.com/MSAMIWASEEM1', label: 'Twitter' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center hover:scale-110 transition-all border border-zinc-200 dark:border-zinc-700 shadow-sm"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-xl shadow-zinc-900/5">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2.5 sm:space-y-3">
                    <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full h-12 sm:h-14 px-5 sm:px-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all text-sm outline-none"
                    />
                  </div>
                  <div className="space-y-2.5 sm:space-y-3">
                    <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full h-12 sm:h-14 px-5 sm:px-6 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all text-sm outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Your Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all text-sm resize-none outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full h-14 sm:h-16 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-blue-700 transition-all disabled:opacity-70 shadow-lg shadow-blue-500/20 group text-sm"
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white animate-spin rounded-full"></div>
                  ) : (
                    <>Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 text-center text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      <FiCheckCircle /> Message Sent Successfully
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Mobile Social Networks - Only visible on small screens */}
            <div className="lg:hidden mt-12 pt-10 border-t border-zinc-100 dark:border-zinc-800 text-center pb-6">
              <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-6 font-bold uppercase tracking-[0.2em]">Connect with Me</p>
              <div className="flex justify-center gap-4">
                {[
                  { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/muhammad-sami-3aa6102b8/', label: 'LinkedIn' },
                  { icon: <FiGithub />, url: 'https://github.com/muhammadsami987123', label: 'GitHub' },
                  { icon: <FiTwitter />, url: 'https://twitter.com/MSAMIWASEEM1', label: 'Twitter' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-700 shadow-sm transition-transform active:scale-95"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Background>
  );
}