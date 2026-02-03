import React, { useRef, useLayoutEffect, useState } from 'react'
import SectionShell from './SectionShell'
import Earth from '../three/Globe'
import Stars from '../three/Stars'
import Footer from './Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from '@emailjs/browser'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const formWrapperRef = useRef(null)
  const formRef = useRef(null)
  const globeContainerRef = useRef(null)

  const [loading, setLoading] = useState(false)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          // markers: true,
        },
      })

      tl.fromTo(
        formWrapperRef.current,
        { x: -150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.8,
          ease: 'power4.out',
        }
      ).fromTo(
        globeContainerRef.current,
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.8,
          ease: 'power4.out',
        },
        '-=1.4'
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setLoading(false)
        formRef.current.reset()
        alert('Message sent successfully!')
      },
      (error) => {
        console.error(error)
        setLoading(false)
        alert('Please try again.')
      }
    )
  }

  return (
    <div id="contact-wrapper">
      <SectionShell id="contact" label="Contact" desc="Get in touch">
        <div className="contact-stars absolute inset-0">
          <Stars />
        </div>

        <div className="contact-section" ref={sectionRef}>
          {/* FORM */}
          <div className="contact-form-wrapper" ref={formWrapperRef}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="max-w-md space-y-4"
            >
              <input
                name="from_name"
                className="w-full p-3 rounded bg-[#1b1b2f] text-white"
                placeholder="Your Name"
                required
              />

              <input
                name="reply_to"
                type="email"
                className="w-full p-3 rounded bg-[#1b1b2f] text-white"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                className="w-full p-3 rounded bg-[#1b1b2f] text-white"
                placeholder="Your Message"
                rows="4"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded px-6 py-2 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send'}
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
