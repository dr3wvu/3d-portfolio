import { useState } from 'react'
import { projects } from '../../constants/projects.data'
import SectionShell from '../SectionShell'
import CaseCardModal from './ProjectModal'

function buildCarouselRows(projects) {
  const seen = new Set()
  const frames = []

  projects.forEach((project) => {
    project.frames.forEach((frame) => {
      if (!seen.has(frame)) {
        seen.add(frame)
        frames.push({
          projectId: project.id,
          title: project.title,
          frame,
          desc: project.desc,
          stack: project.stack,
          github: project.github,
          codepen: project.codepen,
        })
      }
    })
  })

  const mid = Math.ceil(frames.length / 2)

  return {
    rowOne: frames.slice(0, mid),
    rowTwo: frames.slice(mid),
  }
}

const { rowOne, rowTwo } = buildCarouselRows(projects)

function CarouselRow({ items, speed, onSelect }) {
  return (
    <div className="carousel-row">
      <div
        className="carousel-track pingpong"
        style={{ animationDuration: speed }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.frame}-${index}`}
            className="carousel-item"
            onClick={() => onSelect(item)}
          >
            <img src={item.frame} alt={item.title} />
            {/* <div className="overlay">
              <h4>{item.title}</h4>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeProject, setActive] = useState(null)

  return (
    <div>
      <SectionShell
        id="portfolio"
        label="Portfolio"
        desc="Check out my work"
      ></SectionShell>
      <div className="carousel-fullwidth">
        <CarouselRow items={rowOne} speed="18s" onSelect={setActive} />
        <CarouselRow items={rowTwo} speed="10s" onSelect={setActive} />
      </div>

      {activeProject && (
        <CaseCardModal
          project={activeProject}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  )
}
