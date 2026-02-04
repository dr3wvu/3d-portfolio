import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionShell from './SectionShell'
import Earth from '../three/Globe'
import Stars from '../three/Stars'
import Footer from './Footer'
import emailjs from '@emailjs/browser'

const slideIn = (direction, delay) => ({
  hidden: {
    x: direction === 'left' ? -150 : 150,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      delay: delay,
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
})

export default function Contact() {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

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
        <div className="contact-stars">
          <Stars />
        </div>

        <div className="contact-section">
          <motion.div
            className="contact-form-wrapper"
            variants={slideIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
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
          </motion.div>

          <motion.div
            className="globe-container"
            variants={slideIn('right', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Earth />
          </motion.div>
        </div>
      </SectionShell>
      <Footer />
    </div>
  )
}
