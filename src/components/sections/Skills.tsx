import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { skills, type SkillTier } from '@/data/profile';
import styles from './Skills.module.scss';

const TIER_STYLES: Record<SkillTier, string> = {
  Expert: styles.tierExpert,
  Advanced: styles.tierAdvanced,
  Working: styles.tierWorking,
};

const categories = Object.keys(skills);

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <SectionWrapper id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-indigo-400 text-sm">03.</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {skills[activeCategory].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
              className="glass-card p-4 flex items-center justify-between"
            >
              <span className="font-medium text-slate-200 text-sm">{skill.name}</span>
              <span className={`${styles.tierBadge} ${TIER_STYLES[skill.tier]}`}>
                {skill.tier}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tier legend */}
        <p className="mt-6 text-slate-500 text-xs font-mono">
          <span className="text-indigo-300">Expert</span> = daily, deep, ship-it confidence ·{' '}
          <span className="text-cyan-300">Advanced</span> = comfortable in production ·{' '}
          <span className="text-slate-300">Working</span> = productive with reference
        </p>

        {/* All tags cloud */}
        <div className="mt-16">
          <p className="text-slate-500 text-sm font-medium mb-4 uppercase tracking-wider">Also experienced with</p>
          <div className="flex flex-wrap gap-2">
            {[
              'GraphQL', 'REST APIs', 'Storybook', 'Rollup', 'GitHub Actions',
              'Jest', 'Vitest', 'Cypress',
              'Web Workers', 'WebSockets', 'IndexedDB', 'PWAs', 'Docker',
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="px-3 py-1 text-xs rounded-full border border-white/10 text-slate-400 hover:border-indigo-500/40 hover:text-indigo-300 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
