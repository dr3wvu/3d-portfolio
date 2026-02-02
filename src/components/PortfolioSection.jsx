import React, { useState } from 'react'
import { motion } from 'framer-motion'

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with React and Node.js',
      image: '🛍️',
      link: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: '📋',
      link: '#',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Interactive data visualization dashboard with Chart.js',
      image: '📊',
      link: '#',
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'Full-stack social media platform with messaging features',
      image: '💬',
      link: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="portfolio" className="py-20 px-12 bg-white bg-opacity-30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <h2>Portfolio</h2>
            <p className="description mt-4 max-w-2xl">
              A selection of my recent projects showcasing my expertise in
              full-stack development, UI/UX design, and problem-solving.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="card flex flex-col h-full"
              >
                {/* Image Placeholder */}
                <div className="h-48 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center mb-4 text-6xl">
                  {project.image}
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>

                {/* Description */}
                <p className="description flex-grow mb-4">
                  {project.description}
                </p>

                {/* Visit Button */}
                <a
                  href={project.link}
                  className="btn-primary w-full text-center"
                >
                  Visit Website
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection
