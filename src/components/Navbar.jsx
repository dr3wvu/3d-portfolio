import { useEffect, useState } from 'react'
import logo from '../assets/logoA.png' // adjust path if needed

const sections = ['about', 'portfolio', 'resume', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (!section) return

        const rect = section.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id)
        }
      })
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="navbar">
      <div className="brand">
        <a
          href="https://www.linkedin.com/in/andrew-vu00/"
          target="_blank"
          rel="noreferrer"
          className="brand-name"
        >
          <img src={logo} alt="Logo" className="logo" />
          <span>Andrew Vu</span>
        </a>
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className="desktop-links">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`nav-link ${active === section ? 'active' : ''}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      <div className={`mobile-menu ${open ? 'show' : ''}`}>
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`nav-link ${active === section ? 'active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </div>
  )
}
