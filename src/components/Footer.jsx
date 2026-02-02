export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:your@email.com">Contact</a>
        </div>

        <p className="footer-copy">&copy; {currentYear} All rights reserved.</p>
      </div>
    </footer>
  )
}
