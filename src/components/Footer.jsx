import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a
            href="https://github.com/dr3wvu"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4"
          >
            <span> GitHub</span>
            <div>
              <FaGithub size={24} className="hover:text-gray-300 transition" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-vu00/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4"
          >
            <span>LinkedIn</span>
            <div>
              <FaLinkedin
                size={24}
                className="hover:text-gray-300 transition"
              />
            </div>
          </a>
        </div>

        <p className="footer-copy">&copy; {currentYear} All rights reserved.</p>
      </div>
    </footer>
  )
}
