import React from 'react'

function SectionShell({ id, label, desc, children }) {
  return (
    <section id={id} className="py-20 sm:py-28 mt-16">
      <div className="section-container">
        <header className="mb-10">
          {desc && (
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
              {desc}
            </p>
          )}
          <h2 className="text-2xl sm:text-3xl font-semibold">{label}</h2>
        </header>

        {children}
      </div>
    </section>
  )
}

export default SectionShell
