export interface ExperienceItem {
  id: string
  title: string
  company: string
  period: string
  summary: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'frontend-engineer',
    title: 'Frontend Engineer',
    company: 'Product-focused Tech Company',
    period: '2021 – Present',
    summary:
      'Building and evolving complex web applications with a focus on performance, clarity, and developer experience.',
    highlights: [
      'Architected async flows and state management patterns for high-traffic features.',
      'Collaborated closely with design and product to refine UX and interaction details.',
      'Improved build times and DX through tooling, linting, and CI enhancements.',
    ],
  },
  {
    id: 'software-developer',
    title: 'Software Developer',
    company: 'Digital Services Organization',
    period: '2018 – 2021',
    summary:
      'Delivered end-to-end features across the stack, with an emphasis on front-end quality and reliability.',
    highlights: [
      'Implemented reusable UI components and patterns across multiple projects.',
      'Introduced testing practices that reduced regressions and increased confidence.',
      'Mentored peers on modern frontend patterns and best practices.',
    ],
  },
]
