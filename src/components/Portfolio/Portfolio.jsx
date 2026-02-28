import { useState, useMemo } from 'react'
import { projects } from '../../constants/projects.data'
import SectionShell from '../SectionShell'
import CaseCardModal from './ProjectModal'

function buildCarouselRows(projects) {
  const seen = new Set()
  const frames = []

  projects.forEach((project) => {
    project.frames.forEach((frame) => {
      if (!seen.has(String(frame))) {
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
    rowTwo: frames.slice(mid - 1),
  }
}

function CarouselRow({ items, speed, onSelect }) {
  return (
    <div className="carousel-row">
      <div
        className="carousel-track pingpong"
        style={{ animationDuration: speed }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.projectId}-${index}`}
            className="carousel-item"
            onClick={() => onSelect(item)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === 'Enter' || e.key === ' ') && onSelect(item)
            }
          >
            <img
              loading="lazy"
              src={item.frame}
              alt={item.title || 'project frame'}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeProject, setActive] = useState(null)
  const { rowOne, rowTwo } = useMemo(() => buildCarouselRows(projects), [])

  return (
    <div>
      <SectionShell id="portfolio" label="Portfolio" desc="Check out my work" />
      <div className="carousel-fullwidth">
        <CarouselRow items={rowOne} speed="25s" onSelect={setActive} />
        <CarouselRow items={rowTwo} speed="22s" onSelect={setActive} />
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
