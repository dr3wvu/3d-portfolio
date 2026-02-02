export type SkillCategory = 'Frontend' | 'Design' | 'Tooling' | '3D & Motion'

export interface Skill {
  id: string
  name: string
  category: SkillCategory
  level: 'Core' | 'Advanced' | 'Expert'
  description: string
}

export const skills: Skill[] = [
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    level: 'Expert',
    description:
      'Building strongly-typed, component-driven interfaces with a focus on maintainable state.',
  },
  {
    id: 'angular',
    name: 'Angular & Typescript',
    category: 'Frontend',
    level: 'Expert',
    description:
      'Developed real-time dashboard monitoring capabilities, modular, and long-term maintainability.',
  },
  {
    id: 'threejs',
    name: 'Three.js & 3D UX',
    category: '3D & Motion',
    level: 'Advanced',
    description:
      'Crafting interactive 3D scenes that enhance storytelling without overwhelming performance budgets.',
  },
  {
    id: 'gsap',
    name: 'GSAP Motion Design',
    category: '3D & Motion',
    level: 'Advanced',
    description:
      'Orchestrating smooth, intentional animations that guide attention and reinforce hierarchy.',
  },
  {
    id: 'tooling',
    name: 'Tooling & DX',
    category: 'Tooling',
    level: 'Advanced',
    description:
      'Optimizing developer workflows with linting, formatting, and build tooling for fast feedback loops.',
  },
]
