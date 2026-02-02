export interface Project {
  id: string
  name: string
  role: string
  description: string
  techStack: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: '3d-portfolio',
    name: '3D Portfolio Experience',
    role: 'Architect & Frontend Engineer',
    description:
      'A reactive 3D portfolio that blends declarative React components with Three.js scenes and GSAP-driven motion.',
    techStack: ['React', 'TypeScript', 'Three.js', 'GSAP', 'Tailwind CSS'],
  },
  {
    id: 'async-dashboard',
    name: 'Async Insights Dashboard',
    role: 'Frontend Architect',
    description:
      'A dashboard designed around complex async workflows, emphasizing predictable state, error handling, and observability.',
    techStack: ['React', 'TypeScript', 'State Management', 'Design Systems'],
  },
  {
    id: 'design-system',
    name: 'Design System & Component Library',
    role: 'Lead Engineer',
    description:
      'A reusable component library with strict typing, accessibility-first patterns, and a focus on long-term maintainability.',
    techStack: ['React', 'TypeScript', 'Storybook', 'Testing Library'],
  },
]
