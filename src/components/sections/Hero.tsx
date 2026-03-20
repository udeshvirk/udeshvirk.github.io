import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiArrowDown, FiTwitter } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import { profile } from '@/data/profile';
import styles from './Hero.module.scss';

const TAGLINES = profile.taglines;

const Hero: React.FC = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Typewriter effect
  useEffect(() => {
    const current = TAGLINES[taglineIndex];
    const speed = isDeleting ? 40 : 80;
    const pause = isDeleting ? 0 : 1800;

    if (!isDeleting && displayText === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTaglineIndex((i) => (i + 1) % TAGLINES.length);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, taglineIndex]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Animated Background Blobs */}
      <div className={styles.blobWrapper}>
        <div className={`${styles.blob} ${styles.blobIndigo}`} />
        <div className={`${styles.blob} ${styles.blobCyan}`} />
        <div className={`${styles.blob} ${styles.blobViolet}`} />
      </div>

      {/* Grid overlay */}
      <div className={styles.grid} aria-hidden />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 min-h-screen flex flex-col justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={item} className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
              <HiSparkles className="text-indigo-400" size={14} />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight mb-4 leading-[1.05]"
          >
            <span className="text-white">Udesh</span>{' '}
            <span className={styles.gradientName}>Kumar</span>
          </motion.h1>

          {/* Title */}
          <motion.div variants={item} className="mb-5">
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-slate-300 font-semibold">
              {profile.title}
            </p>
            <p className="text-slate-500 text-base mt-1 font-medium">{profile.subtitle}</p>
          </motion.div>

          {/* Typewriter */}
          <motion.div variants={item} className="flex items-center gap-2 mb-8 h-8">
            <span className="text-indigo-400 font-mono text-sm">&gt;&nbsp;</span>
            <span className="font-mono text-sm text-cyan-400">
              {displayText}
              <span className={styles.cursor}>|</span>
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <Link to="projects" smooth duration={600} offset={-64}>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl bg-indigo-500 text-white font-semibold font-display text-sm cursor-pointer hover:bg-indigo-400 transition-colors duration-200 shadow-lg shadow-indigo-500/25"
              >
                View My Work
              </motion.button>
            </Link>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold font-display text-sm cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
              >
                <FiGithub size={16} />
                GitHub
              </motion.button>
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold font-display text-sm cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
              >
                <FiLinkedin size={16} />
                LinkedIn
              </motion.button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-8 pb-4 border-t border-white/5 pt-8"
          >
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '3', label: 'Frameworks Mastered' },
              { value: '∞', label: 'Coffee Consumed' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className={`font-display text-3xl font-bold ${styles.statValue}`}>
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Social pills on right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-40"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-indigo-500/50" />
          {[
            { href: profile.links.github, Icon: FiGithub, label: 'GitHub' },
            { href: profile.links.linkedin, Icon: FiLinkedin, label: 'LinkedIn' },
            { href: profile.links.twitter, Icon: FiTwitter, label: 'Twitter' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
          <div className="w-px h-16 bg-gradient-to-b from-indigo-500/50 to-transparent" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <Link to="about" smooth duration={600} offset={-64} className="cursor-pointer">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="text-slate-600 hover:text-indigo-400 transition-colors"
            >
              <FiArrowDown size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
