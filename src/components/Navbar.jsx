import { useEffect, useState } from 'react'

const sections = ['about', 'portfolio', 'resume', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('')

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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="navbar">
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
  )
}
