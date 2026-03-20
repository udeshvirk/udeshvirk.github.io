import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { projects } from '@/data/profile';
import styles from './Projects.module.scss';

const Projects: React.FC = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <SectionWrapper id="projects" className="py-24 bg-navy-800/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-indigo-400 text-sm">04.</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className={styles.featuredCard}
            >
              {/* Gradient header */}
              <div className={`${styles.cardGradient} bg-gradient-to-br ${project.gradient}`}>
                <span className="text-4xl">{project.icon}</span>
                <span className="ml-auto px-2 py-0.5 rounded bg-black/20 text-white text-xs font-medium">
                  {project.type}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs font-mono bg-white/5 text-slate-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <FiGithub size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i + featured.length}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              className={styles.smallCard}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent border border-white/10`}
                  >
                    {project.type}
                  </span>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-white transition-colors"
                    >
                      <FiGithub size={14} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="font-display font-bold text-white text-base mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 text-slate-500 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/udeshvirk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-300 font-medium text-sm hover:border-indigo-500/40 hover:text-indigo-400 transition-all duration-200 bg-white/5"
            >
              <FiGithub size={16} />
              See more on GitHub
              <FiExternalLink size={13} />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
