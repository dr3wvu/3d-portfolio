import React, { useRef, useEffect } from 'react'
import SectionShell from './SectionShell'
import Earth from '../three/Globe'
import gsap from 'gsap'
import Stars from '../three/Stars'
import Footer from './Footer'

export default function Contact() {
  const sectionRef = useRef()
  const formRef = useRef()
  const globeContainerRef = useRef()

  useEffect(() => {
    gsap.set(sectionRef.current, { height: 0, opacity: 0 })
    gsap.set(formRef.current, { y: 50, opacity: 0 })
    gsap.set(globeContainerRef.current, { x: 200, scale: 0.8, opacity: 0 })

    gsap
      .timeline({ defaults: { duration: 1, ease: 'power2.out' } })
      .to(sectionRef.current, { height: '100vh', opacity: 1 })
      .to(globeContainerRef.current, { scale: 1, opacity: 1 }, '-=0.5')
      .to(formRef.current, { y: 0, opacity: 1 }, '-=0.5')
  }, [])

  return (
    <div id="contact-wrapper">
      <SectionShell id="contact" label="Contact" desc="Get in touch">
        <div className="contact-stars absolute inset-0">
          <Stars />
        </div>

        <div className="contact-section">
          <div className="contact-form-wrapper" ref={formRef}>
            <form className="max-w-md space-y-4">
              <input
                className="w-full p-3 rounded bg-[#1b1b2f] text-white"
                placeholder="Your Name"
              />
              <input
                className="w-full p-3 rounded bg-[#1b1b2f] text-white"
                placeholder="Your Email"
              />
              <textarea
                className="w-full p-3 rounded bg-[#1b1b2f] text-white"
                placeholder="Your Message"
                rows="4"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded px-6 py-2"
              >
                Send
              </button>
            </form>
          </div>
          <div className="globe-container" ref={globeContainerRef}>
            <Earth />
          </div>
        </div>
      </SectionShell>
      <Footer />
    </div>
  )
}
