import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { profile } from '@/data/profile';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-500 text-sm font-display">
          <span className="text-slate-300 font-semibold">Udesh Kumar</span> — Built with React, Vite & TypeScript. Hosted on GitHub Pages.
        </div>
        <div className="flex items-center gap-5">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"><FiGithub size={18} /></a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"><FiLinkedin size={18} /></a>
          <a href={profile.links.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"><FiTwitter size={18} /></a>
          <a href={`mailto:${profile.links.email}`} className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"><FiMail size={18} /></a>
        </div>
        <div className="text-slate-600 text-xs">
          © {new Date().getFullYear()} Udesh Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
