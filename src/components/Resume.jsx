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
import { Experiences } from '../constants/projects.data'

gsap.registerPlugin(ScrollTrigger)

export default function Resume() {
  return (
    <SectionShell
      id="resume"
      label="Resume / Experience"
      desc="What have I done"
    >
      <h3 className="text-2xl font-bold text-white mb-4">
        My Resume
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
          {Experiences.map((exp) => (
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
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              icon={
                <img
                  src={exp.icon}
                  alt={exp.company}
                  className="w-[100%] h-[100%] object-contain rounded-full"
                />
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
