/**
 * Portfolio Constants & Data
 * Light Blue Theme - Andrew Vu Portfolio
 */

// Navigation links
export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About Me' },
  { id: 'portfolio', title: 'Portfolio' },
  { id: 'resume', title: 'Resume' },
  { id: 'contact', title: 'Contact' },
]

// About Me Information
export const aboutMe = {
  name: 'Andrew Vu',
  title: 'Full Stack Developer',
  bio: "I'm a passionate full stack developer with a keen eye for detail and a love for creating engaging user experiences.",
  location: 'San Francisco, CA',
  email: 'andrew@example.com',
}

// Tech Stack
export const techStack = [
  'React',
  'Node.js',
  'JavaScript',
  'TypeScript',
  'MongoDB',
  'PostgreSQL',
  'Three.js',
  'Tailwind CSS',
]

// Skills data grouped by category
export const skills = [
  {
    category: 'Frontend',
    icon: '⚛️',
    technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: '3D & Motion',
    icon: '🎨',
    technologies: [
      'Three.js',
      'Babylon.js',
      'GSAP',
      'Framer Motion',
      'Blender',
    ],
  },
  {
    category: 'Backend',
    icon: '🔧',
    technologies: ['Node.js', 'SQL Server', 'Express', 'GraphQL'],
  },
  {
    category: 'Tools & DevOps',
    icon: '⚙️',
    technologies: ['Git', 'Jenkins', 'Webpack', 'Vite', 'AWS', 'CI/CD'],
  },
  {
    category: 'Design & UX',
    icon: '🎭',
    technologies: ['Figma', 'Prototyping', 'Responsive Design'],
  },
  {
    category: 'Testing & Quality',
    icon: '✅',
    technologies: ['Jasmine', 'Jest', 'E2E Testing', 'Debugging'],
  },
]

// Professional experience
export const experience = [
  {
    position: 'Senior Frontend Engineer',
    company: 'TechVision Studio',
    period: 'Jan 2023 - Present',
    location: 'San Francisco, CA',
    description:
      'Led development of interactive 3D web applications and optimized frontend performance.',
    achievements: [
      'Architected scalable React component library used across 12+ projects',
      'Implemented Three.js-based data visualization reducing load times by 40%',
      'Mentored 3 junior developers and established best practices for motion design',
      'Achieved 98% Lighthouse performance score on production sites',
    ],
  },
  {
    position: 'Full-Stack Developer',
    company: 'Creative Labs',
    period: 'Jun 2021 - Dec 2022',
    location: 'Austin, TX',
    description:
      'Developed full-stack web applications with focus on user experience and performance.',
    achievements: [
      'Built real-time collaborative design tool using WebSockets and React',
      'Migrated legacy Vue.js app to modern React architecture',
      'Reduced API response time by 60% through optimization and caching',
      'Implemented comprehensive E2E test suite with Cypress',
    ],
  },
  {
    position: 'UI/UX Developer',
    company: 'Digital Forge',
    period: 'Mar 2020 - May 2021',
    location: 'Remote',
    description:
      'Designed and implemented responsive web interfaces with emphasis on accessibility.',
    achievements: [
      'Created 50+ reusable Tailwind CSS components for design system',
      'Improved site accessibility score from 72 to 96 (WCAG AA compliance)',
      'Designed and prototyped interactive dashboard in Figma',
      'Pioneered motion design integration for enhanced UX',
    ],
  },
]

// Featured projects
export const projects = [
  {
    id: 1,
    title: 'Interactive 3D Data Viz',
    description:
      'Real-time data visualization platform with Three.js. Allows exploration of complex datasets through immersive 3D environments with gesture controls and animations.',
    image:
      'https://images.unsplash.com/photo-1617634924704-92d37541fe3f?w=500&h=300&fit=crop',
    tags: [
      { name: 'Three.js', color: 'text-blue-400' },
      { name: 'React', color: 'text-cyan-400' },
      { name: 'Data Viz', color: 'text-purple-400' },
    ],
    github: 'https://github.com',
    deployed: 'https://example.com',
    features: [
      'Real-time data streaming',
      'Interactive 3D models',
      'Mobile responsive',
      'Performance optimized',
    ],
  },
  {
    id: 2,
    title: 'AI-Powered Design System',
    description:
      'Component library with AI-assisted design tokens. Automatically generates color schemes, spacing, and typography based on brand guidelines.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    tags: [
      { name: 'Design System', color: 'text-green-400' },
      { name: 'TypeScript', color: 'text-yellow-400' },
      { name: 'AI/ML', color: 'text-red-400' },
    ],
    github: 'https://github.com',
    deployed: 'https://example.com',
    features: [
      'Dynamic theming',
      'AI token generation',
      'Storybook integration',
      'TypeScript support',
    ],
  },
  {
    id: 3,
    title: 'Immersive Portfolio Platform',
    description:
      'Full-stack portfolio builder with real-time collaboration. Users create stunning 3D portfolios using drag-drop interface and pre-built motion animations.',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    tags: [
      { name: 'Full-Stack', color: 'text-indigo-400' },
      { name: 'Collaboration', color: 'text-pink-400' },
      { name: 'Three.js', color: 'text-blue-400' },
    ],
    github: 'https://github.com',
    deployed: 'https://example.com',
    features: [
      'Drag-drop builder',
      'Real-time sync',
      '3D preview',
      'Export to HTML',
    ],
  },
  {
    id: 4,
    title: 'Motion Design Library',
    description:
      'Comprehensive library of pre-built animations and motion components. Integrated with Framer Motion and GSAP for production-ready effects.',
    image:
      'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=300&fit=crop',
    tags: [
      { name: 'Motion', color: 'text-orange-400' },
      { name: 'React', color: 'text-cyan-400' },
      { name: 'Animation', color: 'text-violet-400' },
    ],
    github: 'https://github.com',
    deployed: 'https://example.com',
    features: [
      'Pre-built animations',
      'Customizable params',
      'Performance tuned',
      'Interactive demos',
    ],
  },
]

// Testimonials
export const testimonials = [
  {
    quote:
      'Andrew transformed our vision into reality. His technical expertise combined with creative problem-solving made our 3D platform a success.',
    author: 'Sarah Johnson',
    title: 'Product Lead',
    company: 'TechVision',
  },
  {
    quote:
      'Exceptional developer who delivers both technically sound and beautifully designed solutions. A true full-stack talent.',
    author: 'Mike Chen',
    title: 'CTO',
    company: 'Creative Labs',
  },
  {
    quote:
      'The motion design expertise brought our interfaces to life. Users loved the experience and engagement increased by 45%.',
    author: 'Emma Davis',
    title: 'Designer',
    company: 'Digital Forge',
  },
]

// Hero section text
export const heroText = {
  greeting: 'Hey there! 👋',
  headline: 'Creative Developer crafting',
  highlight: 'reactive interfaces',
  subheadline: 'and transformative 3D experiences',
  description:
    'I build maintainable, scalable architectures with React and Node.js, then layer in Three.js and motion where they clarify, not clutter.',
  cta: 'Explore My Work',
}

// Tech stack for display
export const techStack = [
  'React',
  'Three.js',
  'TypeScript',
  'Node.js',
  'Tailwind',
  'GSAP',
  'Next.js',
  'GraphQL',
  'Docker',
  'AWS',
  'Framer Motion',
  'PostgreSQL',
]

// Contact form topics
export const contactTopics = [
  'Project Inquiry',
  'Collaboration',
  'Job Opportunity',
  'Technical Question',
  'Other',
]

// Resume link
export const resumeLink = 'https://your-resume-link.com'

// Color configuration for gradients
export const gradients = {
  primary: 'from-blue-600 to-purple-600',
  secondary: 'from-purple-600 to-pink-600',
  accent: 'from-pink-600 to-orange-600',
  success: 'from-green-600 to-emerald-600',
}
