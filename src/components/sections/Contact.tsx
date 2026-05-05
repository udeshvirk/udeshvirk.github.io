import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
  FiMapPin,
} from 'react-icons/fi';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { profile } from '@/data/profile';
import styles from './Contact.module.scss';

const socialLinks = [
  { icon: FiGithub, href: profile.links.github, label: 'GitHub', handle: 'udeshvirk' },
  { icon: FiLinkedin, href: profile.links.linkedin, label: 'LinkedIn', handle: 'in/udesh-kumar' },
  { icon: FiTwitter, href: profile.links.twitter, label: 'Twitter', handle: '@udeshvirk' },
  { icon: FiMail, href: `mailto:${profile.links.email}`, label: 'Email', handle: profile.links.email },
];

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Udesh,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
    );
    window.location.href = `mailto:${profile.links.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <SectionWrapper id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-indigo-400 text-sm">05.</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent ml-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-300 text-lg leading-relaxed mb-3"
            >
              I'm always open to discussing new opportunities, interesting projects,
              or just having a conversation about frontend architecture and platform engineering.
              Let's connect!
            </motion.p>
            <p className="text-slate-500 text-sm mb-8">
              The form below opens your default email client with the message pre-filled —
              or reach out directly via any of the links.
            </p>

            <div className="flex items-center gap-2 text-slate-500 text-sm mb-10">
              <FiMapPin size={14} className="text-indigo-400" />
              <span>{profile.location}</span>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className={styles.socialLink}
                >
                  <div className={styles.socialIcon}>
                    <social.icon size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{social.label}</p>
                    <p className="text-slate-500 text-xs font-mono">{social.handle}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.formCard}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  className={styles.input}
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  className={styles.input}
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="What would you like to discuss?"
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  className={`${styles.input} resize-none`}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3.5 rounded-xl font-semibold font-display text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                  sent
                    ? 'bg-green-500 text-white'
                    : 'bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/25'
                }`}
              >
                {sent ? (
                  '✓ Opening email client...'
                ) : (
                  <>
                    <FiSend size={15} />
                    Open in Email Client
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
