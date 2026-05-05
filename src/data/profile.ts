// Portfolio static data — edit this file to update content.
// Aligned with Udesh_Kumar_Resume.pdf (in /public).

export const profile = {
  name: 'Udesh Kumar',
  title: 'Principal Engineer',
  subtitle: 'Frontend Platform Architecture',
  taglines: [
    'Owning the platform that ships the apps',
    'Architecting frontend systems',
    'Designing for change, not for cleverness',
    '100+ apps · 20+ tenants · one platform',
  ],
  about: `Principal Engineer with 16+ years of experience architecting scalable frontend systems and driving platform-level engineering. At Zeta, I own the frontend platform powering 100+ applications across 20+ tenants and 50+ developers — covering project scaffolding, CI/CD automation, federated micro-frontend architecture, multi-tenant configuration, and S3-based artifact deployment.

I work at the intersection of platform engineering and developer experience — reducing delivery friction, standardising architecture, and enabling teams to ship faster through shared tooling, infrastructure, and a 50+ component design system. I optimise for changeability over cleverness — boring component APIs, explicit contracts between teams, and design tokens that move in lockstep with the product.`,
  location: 'Bengaluru, Karnataka, India',
  currentCompany: 'Zeta Suite',
  links: {
    github: 'https://github.com/udeshvirk',
    linkedin: 'https://linkedin.com/in/udesh-kumar-1b06b115',
    twitter: 'https://twitter.com/udeshvirk',
    email: 'udeshvirk@gmail.com',
    resume: '/Udesh_Kumar_Resume.pdf',
  },
};

export const experience = [
  {
    id: 1,
    role: 'Principal Engineer — Frontend Platform',
    company: 'Zeta Suite',
    companyUrl: 'https://www.zeta.tech',
    period: 'Nov 2021 — Present',
    type: 'Full-time',
    location: 'Bengaluru, India',
    description:
      'Own and evolve the frontend platform infrastructure powering 100+ applications, 20+ tenants, and 50+ developers — project scaffolding, CI/CD, federated micro-frontends, multi-tenant configuration, and S3-based artifact deployment.',
    highlights: [
      'Designed a federated dependency model for micro-frontends — independent deployment of modules across 100+ apps without cross-team coordination bottlenecks',
      'Built a config-driven multi-tenancy system serving 20+ tenants — theming, feature flags, and routing through configuration rather than code changes',
      'Designed a runtime extension framework — applications inject and override UI behaviours dynamically without redeployment',
      'Built and maintain a Kubernetes operator that watches frontend application resources and automates deployment — eliminating manual infrastructure steps',
      'Architected a platform service providing CLI scaffolding, shared build configs, and project templates — reducing new application setup from days to hours across 50+ developers',
      'Owned end-to-end CI/CD pipelines and the S3-based artifact deployment pipeline — versioned bundles, zero-downtime serving across 100+ applications',
      'Developed a centralised design system of 50+ components with design tokens, theming, and WCAG-compliant accessibility — adopted across all frontend teams',
      'Defined engineering standards: coding guidelines, test coverage requirements, and Architectural Decision Records (ADRs) across 50+ developers',
    ],
    tags: ['React', 'Vue.js', 'TypeScript', 'Module Federation', 'Webpack', 'Kubernetes', 'AWS S3', 'CI/CD'],
  },
  {
    id: 2,
    role: 'UI Lead',
    company: 'ColorTokens, Inc.',
    companyUrl: 'https://colortokens.com',
    period: 'Nov 2017 — Oct 2021',
    type: 'Full-time',
    location: 'Bengaluru, India',
    description:
      'Led a team of 4–5 engineers building the admin console for a Zero Trust cybersecurity platform — agents on end-user devices block all traffic by default; admins define granular allow policies.',
    highlights: [
      'Architected the frontend for a complex security admin console — policy editors, real-time traffic visualisations, and device management dashboards for enterprise clients',
      'Designed and built a reusable component library and shared frameworks — improving consistency and reducing duplication across product areas',
      'Optimised rendering performance for large policy datasets — improving responsiveness and reducing UI lag on complex views',
      'Led and mentored a team of 4–5 frontend engineers — code reviews, technical direction, and engineering practice standards',
      'Received merit recognition from clients and VP for outstanding delivery',
    ],
    tags: ['React', 'TypeScript', 'Data Visualisation', 'Component Libraries', 'Zero Trust'],
  },
  {
    id: 3,
    role: 'Technical Lead — Development',
    company: 'Relevance Lab',
    companyUrl: 'https://relevancelab.com',
    period: 'Mar 2014 — Nov 2017',
    type: 'Full-time',
    location: 'Bengaluru, India',
    description:
      'Promoted from Sr. Software Engineer (Mar 2014 – Mar 2015) to Technical Lead (Apr 2015 – Nov 2017). Led end-to-end delivery of web applications across multiple concurrent client engagements.',
    highlights: [
      'Led end-to-end delivery of web applications across multiple concurrent client engagements',
      'Mentored engineers and established frontend coding standards, testing practices, and review processes',
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'jQuery'],
  },
  {
    id: 4,
    role: 'Senior Web Developer / Sr. Software Engineer',
    company: 'Earlier Career',
    companyUrl: '#',
    period: '2009 — 2014',
    type: 'Full-time',
    location: 'Mohali / Chandigarh, India',
    description:
      'Earlier roles at Baya Tree Pvt. Ltd. (2012 – 2014, Mohali), Smart Data Enterprises (2011 – 2012, Mohali), and RedAlkemi (2009 – 2011, Chandigarh). Built and shipped web applications across multiple companies, sharpening JavaScript, jQuery, and PHP fundamentals.',
    highlights: [
      'Delivered web applications and features across three companies over five years',
      'Developed core JavaScript, jQuery, and PHP fluency working on production codebases',
    ],
    tags: ['JavaScript', 'jQuery', 'PHP', 'HTML', 'CSS'],
  },
];

export type SkillTier = 'Expert' | 'Advanced' | 'Working';

// Aligned with the Tech Skills section of the resume. Adjust before publishing
// if any of these don't match how you'd describe yourself in an interview.
export const skills: Record<string, { name: string; tier: SkillTier }[]> = {
  'Architecture & Platform': [
    { name: 'Micro-frontends (Module Federation)', tier: 'Expert' },
    { name: 'Multi-tenant Architecture', tier: 'Expert' },
    { name: 'Design Systems', tier: 'Expert' },
    { name: 'Component Libraries', tier: 'Expert' },
    { name: 'Design Tokens', tier: 'Expert' },
    { name: 'Kubernetes (Frontend Deploys)', tier: 'Advanced' },
    { name: 'AWS S3 / Artifact Pipelines', tier: 'Advanced' },
    { name: 'Web Performance', tier: 'Advanced' },
  ],
  'Engineering Leadership': [
    { name: 'Technical Strategy & ADRs', tier: 'Expert' },
    { name: 'Mentoring & Coaching', tier: 'Expert' },
    { name: 'Cross-team Architecture Reviews', tier: 'Expert' },
    { name: 'Engineering Standards (Coding / Testing)', tier: 'Expert' },
    { name: 'Hiring & Technical Interviewing', tier: 'Advanced' },
  ],
  'Quality & Operations': [
    { name: 'CI/CD Pipelines', tier: 'Expert' },
    { name: 'Artifact Deployment (Zero-downtime)', tier: 'Expert' },
    { name: 'Testing Practices', tier: 'Advanced' },
    { name: 'Performance Optimisation', tier: 'Advanced' },
  ],
  'Frameworks & Build': [
    { name: 'React', tier: 'Expert' },
    { name: 'Vue.js', tier: 'Expert' },
    { name: 'Vite', tier: 'Expert' },
    { name: 'Webpack', tier: 'Expert' },
  ],
  'Languages': [
    { name: 'JavaScript (ES2020+)', tier: 'Expert' },
    { name: 'TypeScript', tier: 'Expert' },
  ],
  'UI & Styling': [
    { name: 'HTML & CSS', tier: 'Expert' },
    { name: 'SCSS / Sass / LESS', tier: 'Expert' },
    { name: 'Accessibility (WCAG / ARIA)', tier: 'Advanced' },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Enterprise Design System @ Zeta',
    description:
      'Centralised design system of 50+ components with design tokens, theming, and WCAG-compliant accessibility — adopted across all frontend teams. Powers consistent UI across 100+ applications and 20+ tenants.',
    tags: ['React', 'Vue.js', 'TypeScript', 'Design Tokens', 'WCAG', 'Theming'],
    type: 'Design System',
    featured: true,
    proprietary: true,
    gradient: 'from-indigo-600 to-indigo-400',
    icon: '⚡',
  },
  {
    id: 2,
    title: 'Micro-Frontend Platform @ Zeta',
    description:
      'Federated dependency model + runtime extension framework + config-driven multi-tenancy. Enables independent module deployment across 100+ applications without cross-team coordination, with per-tenant theming, feature flags, and routing driven by configuration rather than code.',
    tags: ['Module Federation', 'Webpack', 'Multi-tenant', 'TypeScript', 'Extension Framework'],
    type: 'Architecture',
    featured: true,
    proprietary: true,
    gradient: 'from-indigo-700 to-indigo-500',
    icon: '🏗️',
  },
  {
    id: 3,
    title: 'Frontend Deploy Infrastructure @ Zeta',
    description:
      'Kubernetes operator watching frontend application resources to automate deployment, plus an S3-based artifact pipeline that publishes versioned bundles and serves them with zero-downtime across 100+ applications. Eliminated manual infrastructure steps from the release process.',
    tags: ['Kubernetes', 'AWS S3', 'CI/CD', 'Infrastructure', 'Zero-downtime'],
    type: 'Infrastructure',
    featured: true,
    proprietary: true,
    gradient: 'from-indigo-500 to-indigo-700',
    icon: '🚀',
  },
  {
    id: 4,
    title: 'React Snake Game (PWA)',
    description:
      'A fully-featured Progressive Web App (PWA) Snake game built with React, featuring smooth animations, high score tracking, and responsive controls. Installable on mobile devices.',
    tags: ['React', 'JavaScript', 'PWA', 'CSS Animations'],
    type: 'Open Source',
    featured: true,
    proprietary: false,
    gradient: 'from-indigo-500 to-indigo-300',
    icon: '🎮',
    liveUrl: 'https://udeshvirk.github.io/snake-game-react/',
    github: 'https://github.com/udeshvirk/snake-game-react',
  },
];

export const education = [
  {
    degree: 'B.Tech',
    field: 'Computer Science & Engineering',
    institution: 'GGSCET, Punjab Technical University',
    period: '2006 — 2009',
    location: 'Punjab, India',
  },
  {
    degree: 'Diploma',
    field: 'Information Technology',
    institution: 'Government Polytechnic College',
    period: '2006',
    location: 'Punjab, India',
  },
];
