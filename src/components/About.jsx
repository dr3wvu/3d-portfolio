import SectionShell from './SectionShell'
import Tilt from 'react-parallax-tilt'
import andrew from '../assets/andrew.jpeg'
import { IconAI, IconCPU, IconSystem, IconMonitor } from './Icons'

const skillCards = [
  {
    title: 'Angular',
    Icon: IconCPU,
  },
  {
    title: 'Web Design',
    Icon: IconMonitor,
  },
  {
    title: 'Full Stack',
    Icon: IconSystem,
  },
]

// -----------------------------
// card component emblem
// -----------------------------
const CARD = ({ title, Icon }) => {
  return (
    <Tilt
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      scale={1.05}
      speed={400}
      className="parallax-card"
    >
      <div className="card-inner">
        <div className="card-icon-wrapper">
          {/* Render the Lucide icon instead of an <img> tag */}
          {Icon && <Icon size={48} strokeWidth={1.5} className="card-icon" />}
        </div>
        <h4 className="card-title">{title}</h4>
      </div>
    </Tilt>
  )
}
export default function About() {
  return (
    <>
      <SectionShell id="about" label="About Me" desc="Who I Am">
        <div className="about-section flex flex-col gap-16">
          {/* Description and Image - Side by Side */}
          <div className="grid grid-cols-2 lg:grid-cols-2 items-start">
            {/* LEFT SIDE - Description */}
            <div className="flex flex-col justify-end space-y-4">
              <p className="text-white/85 leading-relaxed text-lg">
                I'm Andrew, a full stack developer passionate about building
                dynamic, interactive, and modern web applications. My focus is
                on creating clean, efficient code while constantly learning new
                technologies with a core focus on Angular and scalable
                architecture. Recently, I developed real-time solution that sync
                browser and mobile devices via Websocket communication to
                deliver actionable insights.
              </p>
            </div>

            {/* RIGHT SIDE - Image */}
            <div className="flex justify-center items-start">
              <div className="about-image relative w-full h-full object-cover rounded-full scale-110 max-w-[300px] max-h-[430px] overflow-hidden bg-white/10 border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center">
                <img
                  src={andrew}
                  alt="Andrew Vu"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Skill Cards - Below */}
          <div className="card-list ">
            {skillCards.map((skill) => (
              <CARD key={skill.title} title={skill.title} Icon={skill.Icon} />
            ))}
          </div>
        </div>
      </SectionShell>
    </>
  )
}
