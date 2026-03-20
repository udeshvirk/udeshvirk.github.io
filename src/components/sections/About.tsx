import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { profile } from '@/data/profile';
import { FiMapPin, FiCode, FiLayers, FiTrendingUp } from 'react-icons/fi';
import styles from './About.module.scss';

const highlights = [
  {
    icon: FiCode,
    title: 'Full-Stack Frontend',
    description: 'Deep expertise across the entire frontend spectrum — from pixels to architecture.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: FiLayers,
    title: 'Platform Engineering',
    description: 'Building the foundations: design systems, micro-frontends, shared infra.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: FiTrendingUp,
    title: 'Performance Obsessed',
    description: 'Core Web Vitals, bundle optimization, and render performance as first-class concerns.',
    color: 'from-violet-500 to-violet-600',
  },
];

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-indigo-400 text-sm">01.</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio text */}
          <div className="space-y-6">
            <div className={styles.bioText}>
              {profile.about.split('\n\n').map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="text-slate-300 leading-relaxed text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-slate-500 text-sm mt-4"
            >
              <FiMapPin size={14} className="text-indigo-400" />
              <span>{profile.location}</span>
              <span className="mx-2">·</span>
              <span className="text-indigo-400 font-medium">{profile.currentCompany}</span>
            </motion.div>

            {/* Tech highlights pill row */}
            <div className="flex flex-wrap gap-2 mt-6">
              {['React', 'TypeScript', 'Vue.js', 'Vite', 'SCSS', 'Tailwind', 'Angular', 'Node.js'].map(
                (tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                    className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium font-mono"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </div>

          {/* Highlight cards */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="glass-card p-5 flex items-start gap-4 cursor-default"
              >
                <div className={`p-2.5 rounded-lg bg-gradient-to-br ${item.color} flex-shrink-0`}>
                  <item.icon size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Avatar card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className={styles.avatarCard}
            >
              <div className={styles.avatar}>
                <span className="font-display text-4xl font-bold text-white">UK</span>
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg">Udesh Kumar</p>
                <p className="text-indigo-400 text-sm">Principal Frontend Engineer</p>
                <p className="text-slate-500 text-xs mt-1">@ Zeta Suite · Bengaluru</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
