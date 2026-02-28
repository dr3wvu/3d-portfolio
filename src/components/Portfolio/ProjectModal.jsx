import { useEffect } from 'react'

export default function CaseCardModal({ project = {}, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const stack = Array.isArray(project.stack) ? project.stack : []
  const frame = project.frame || project.frames?.[0] || ''

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="case-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title || 'Project details'}
      >
        <button
          className="close-btn"
          aria-label="close modal"
          onClick={onClose}
        >
          X
        </button>

        <div className="case-preview">
          {frame ? (
            <img src={frame} alt={project.title || 'project preview'} />
          ) : (
            <div className="placeholder">No preview available</div>
          )}
        </div>

        <div className="case-content">
          <h3>{project.title}</h3>

          <p>{project.desc || 'No description'}</p>

          <ul className="case-stack">
            {stack.map((tech) => (
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
