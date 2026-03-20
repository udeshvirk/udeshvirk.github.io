import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiCalendar, FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { experience } from '@/data/profile';
import styles from './Experience.module.scss';

const Experience: React.FC = () => {
  const [expanded, setExpanded] = useState<number>(1);

  return (
    <SectionWrapper id="experience" className="py-24 bg-navy-800/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-indigo-400 text-sm">02.</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </div>

        <div className="relative">
          {/* Timeline spine */}
          <div className={styles.timelineSpine} />

          <div className="space-y-0">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={styles.timelineItem}
              >
                {/* Dot */}
                <div
                  className={`${styles.dot} ${expanded === exp.id ? styles.dotActive : ''}`}
                />

                {/* Card */}
                <div className="flex-1 pb-10">
                  <motion.div
                    className={`${styles.card} ${expanded === exp.id ? styles.cardActive : ''}`}
                    whileHover={{ scale: 1.005 }}
                  >
                    {/* Card Header */}
                    <button
                      onClick={() => setExpanded(expanded === exp.id ? -1 : exp.id)}
                      className="w-full text-left"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display text-lg font-bold text-white">{exp.role}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-indigo-400 font-medium text-sm hover:text-indigo-300 flex items-center gap-1 transition-colors"
                            >
                              {exp.company}
                              <FiExternalLink size={11} />
                            </a>
                            <span className="text-slate-600 text-xs">·</span>
                            <span className="text-slate-500 text-xs">{exp.type}</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 mt-2">
                            <span className="flex items-center gap-1 text-slate-500 text-xs">
                              <FiCalendar size={11} />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-xs">
                              <FiMapPin size={11} />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <div className="text-slate-500 flex-shrink-0 mt-1">
                          {expanded === exp.id ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                        </div>
                      </div>
                    </button>

                    {/* Expandable content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: expanded === exp.id ? 'auto' : 0,
                        opacity: expanded === exp.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-white/5 mt-4">
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>
                        <ul className="space-y-2 mb-4">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className="text-indigo-400 mt-1 flex-shrink-0">▸</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
