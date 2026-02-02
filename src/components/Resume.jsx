import { motion } from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SectionShell from './SectionShell'
import { DownloadButton } from './Icons'
import AndrewResume from '/AndrewResume.pdf'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SOTIIcon from '../assets/SOTI.png'
import TDIcon from '../assets/TD.png'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'SOTI Inc.',
    year: '2022 - Present',
    icon: SOTIIcon,
    desc: [
      'Architected scalable microservices using Node.js.',
      'Optimized React performance reducing load times by 30%.',
      'Led migration from legacy systems to cloud-native infra.',
    ],
  },
  {
    id: 2,
    title: 'Salesforce Analyst',
    company: 'TD Bank',
    year: 'May 2021 - Dec 2021',
    icon: TDIcon,
    desc: [
      'Designed high-fidelity mockups for enterprise clients.',
      'Developed responsive layouts using Tailwind and CSS.',
      'Improved SEO rankings through technical optimizations.',
    ],
  },
]

export default function Resume() {
  return (
    <SectionShell
      id="resume"
      label="Resume / Experience"
      desc="What have I done"
    >
      <h3 className="text-2xl font-bold text-white mb-4">
        My Resume{' '}
        <a
          href="/AndrewResume.pdf"
          download="AndrewVuResume"
          className="resume-download-btn"
          aria-label="Download Andrew Vu Resume PDF"
        >
          <DownloadButton />
        </a>
      </h3>

      <div className="resume-timeline-wrapper">
        <VerticalTimeline lineColor="white" animate={false}>
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.id} // Added unique key for mapping
              className="vertical-timeline-element-work"
              contentStyle={{
                background: '#001F3F',
                color: '#fff',
                borderRadius: '15px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'opacity 0.5s ease-in-out',
              }}
              contentArrowStyle={{ borderRight: '7px solid #001F3F' }}
              date={exp.year}
              iconStyle={{
                background: '#001F3F',
                color: '#fff',
                boxShadow:
                  '0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)',
              }}
              icon={
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src={exp.icon}
                    alt={exp.company}
                    className="w-full h-full object-cover block"
                  />
                </div>
              }
            >
              <h3 className="resume-title">{exp.title}</h3>
              <h4 className="resume-company">{exp.company}</h4>
              <ul className="mt-4 space-y-2 list-disc list-inside resume-list">
                {exp.desc.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </SectionShell>
  )
}
