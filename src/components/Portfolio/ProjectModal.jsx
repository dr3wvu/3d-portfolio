import { useEffect } from 'react'

export default function CaseCardModal({ project, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="case-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-btn"
          aria-label="close modal"
          onClick={onClose}
        >
          X
        </button>
        {/* Preview */}
        <div className="case-preview">
          <img src={project.frame} alt={project.title} />
        </div>

        {/* Content */}
        <div className="case-content">
          <h3>{project.title}</h3>

          <p>{project.desc || 'No description'}</p>

          <ul className="case-stack">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="case-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="action-primary"
              >
                GitHub
              </a>
            )}

            {project.codepen && (
              <a href={project.codepen} target="_blank" rel="noreferrer">
                CodePen
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
