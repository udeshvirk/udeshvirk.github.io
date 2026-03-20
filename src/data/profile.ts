// Portfolio static data — edit this file to update content

export const profile = {
  name: 'Udesh Kumar',
  title: 'Principal Frontend Engineer',
  subtitle: 'Frontend Architect & Platform Engineering',
  taglines: [
    'Building scalable web platforms',
    'Architecting frontend systems',
    'Crafting exceptional UX',
    '15+ years of frontend mastery',
  ],
  about: `Principal Frontend Engineer with 15+ years of experience specializing in building scalable, high-performance web applications and modern frontend architectures. Currently leading the Platform Engineering team at Zeta Suite, where I design and implement the foundational systems that power next-generation fintech products.

I thrive at the intersection of engineering excellence and user experience—obsessing over performance, developer ergonomics, and scalable component architectures. My stack spans React, Vue.js, Angular, TypeScript, and the modern JavaScript ecosystem.`,
  location: 'Bengaluru, Karnataka, India',
  currentCompany: 'Zeta Suite',
  links: {
    github: 'https://github.com/udeshvirk',
    linkedin: 'https://linkedin.com/in/udesh-kumar-1b06b115',
    twitter: 'https://twitter.com/udeshvirk',
    email: 'udeshvirk@gmail.com',
  },
};

export const experience = [
  {
    id: 1,
    role: 'Principal Frontend Engineer',
    company: 'Zeta Suite',
    companyUrl: 'https://www.zeta.tech',
    period: '2021 — Present',
    type: 'Full-time',
    location: 'Bengaluru, India',
    description:
      'Leading the Platform Engineering team building the foundational frontend infrastructure for Zeta\'s Banking-as-a-Service products. Architecting micro-frontend systems, design token pipelines, and shared component libraries that power multiple product teams.',
    highlights: [
      'Architected a micro-frontend platform serving 5+ product teams with zero-downtime deployments',
      'Built a design token system bridging design and code across web and mobile platforms',
      'Established frontend performance budgets reducing TTI by 40% across core journeys',
      'Mentoring a team of 8 engineers on architecture patterns and best practices',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Micro-frontends', 'Design Systems', 'Node.js'],
  },
  {
    id: 2,
    role: 'Senior Frontend Engineer',
    company: 'RedAlkemi',
    companyUrl: 'https://www.redalkemi.com',
    period: '2018 — 2021',
    type: 'Full-time',
    location: 'Chandigarh, India',
    description:
      'Led frontend development for multiple client projects across e-commerce, SaaS, and enterprise domains. Standardized development workflows and introduced component-driven development practices.',
    highlights: [
      'Delivered 12+ client projects on time with high satisfaction scores',
      'Introduced Vue.js and React component libraries adopted team-wide',
      'Reduced build times by 60% by migrating from Webpack to Vite',
      'Mentored junior and mid-level developers through code reviews and workshops',
    ],
    tags: ['Vue.js', 'React', 'Angular', 'SCSS', 'Webpack', 'Vite'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'Deloitte India',
    companyUrl: 'https://www2.deloitte.com/in',
    period: '2013 — 2018',
    type: 'Full-time',
    location: 'Bengaluru, India',
    description:
      'Developed enterprise-grade web applications for large-scale clients in the consulting space. Worked across multiple technology stacks on complex, cross-functional projects.',
    highlights: [
      'Built responsive enterprise dashboards for Fortune 500 clients',
      'Led accessibility (WCAG 2.1) compliance initiative across 3 products',
      'Implemented automated end-to-end testing reducing QA cycle by 30%',
    ],
    tags: ['JavaScript', 'Angular', 'jQuery', 'HTML5', 'CSS3', 'REST APIs'],
  },
  {
    id: 4,
    role: 'Web Developer',
    company: 'Early Career',
    companyUrl: '#',
    period: '2010 — 2013',
    type: 'Full-time',
    location: 'India',
    description:
      'Began my journey building web interfaces, honing core HTML/CSS/JavaScript skills across various small to mid-sized companies and freelance projects.',
    highlights: [
      'Delivered 20+ websites and web apps for small businesses and startups',
      'Self-taught JavaScript, jQuery, and PHP development',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'WordPress'],
  },
];

export const skills = {
  'Core Languages': [
    { name: 'TypeScript', level: 98 },
    { name: 'JavaScript (ES2022+)', level: 99 },
    { name: 'HTML5 / CSS3', level: 99 },
    { name: 'Node.js', level: 80 },
  ],
  'Frameworks & Libraries': [
    { name: 'React', level: 98 },
    { name: 'Vue.js', level: 92 },
    { name: 'Angular', level: 85 },
    { name: 'Vite', level: 95 },
    { name: 'Next.js', level: 82 },
  ],
  'Styling': [
    { name: 'Tailwind CSS', level: 96 },
    { name: 'SCSS / Sass', level: 96 },
    { name: 'CSS-in-JS', level: 88 },
    { name: 'Design Systems', level: 95 },
  ],
  'Architecture & Platform': [
    { name: 'Micro-frontends', level: 92 },
    { name: 'Web Performance', level: 90 },
    { name: 'CI/CD Pipelines', level: 82 },
    { name: 'Design Tokens', level: 90 },
    { name: 'Component Libraries', level: 96 },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Zeta Platform UI System',
    description:
      'Enterprise-grade design system and component library powering Zeta\'s Banking-as-a-Service platform. Includes 120+ components, design tokens, and accessibility primitives.',
    tags: ['React', 'TypeScript', 'Design Tokens', 'Storybook', 'SCSS'],
    type: 'Platform',
    featured: true,
    gradient: 'from-indigo-500 to-violet-500',
    icon: '⚡',
  },
  {
    id: 2,
    title: 'Micro-Frontend Orchestrator',
    description:
      'Custom micro-frontend architecture enabling independent deployments across 5+ product teams. Zero-downtime deployments with shared state management and cross-app communication.',
    tags: ['Module Federation', 'Webpack', 'React', 'TypeScript', 'CI/CD'],
    type: 'Architecture',
    featured: true,
    gradient: 'from-cyan-500 to-indigo-500',
    icon: '🏗️',
  },
  {
    id: 3,
    title: 'React Snake Game',
    description:
      'A fully-featured Snake game built with React, featuring smooth animations, high score tracking, and responsive controls. Clean, component-driven architecture.',
    tags: ['React', 'JavaScript', 'Canvas', 'CSS Animations'],
    type: 'Open Source',
    featured: false,
    gradient: 'from-violet-500 to-rose-500',
    icon: '🎮',
    github: 'https://github.com/udeshvirk',
  },
  {
    id: 4,
    title: 'Frontend Performance Dashboard',
    description:
      'Real-time web performance monitoring dashboard with Core Web Vitals tracking, Lighthouse CI integration, and alerting for performance regressions.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'Lighthouse CI'],
    type: 'Tool',
    featured: false,
    gradient: 'from-rose-500 to-orange-500',
    icon: '📊',
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'Punjab Technical University',
    period: '2006 — 2010',
    location: 'Punjab, India',
  },
];
