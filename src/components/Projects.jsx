import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../constants'

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.6 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      className="group relative h-96 rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${project.image})`,
        }}
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"
        animate={{
          opacity: isHovered ? 0.9 : 0.8,
        }}
      />

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6 z-10"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: isHovered ? 1 : 0.7 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-white/70 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-xs px-2 py-1 rounded bg-white/10 border border-white/20 ${tag.color}`}
            >
              {tag.name}
            </span>
          ))}
        </div>

        {/* Links */}
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded hover:bg-purple-700 transition-colors"
          >
            Code
          </a>
          <a
            href={project.deployed}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded hover:bg-white/20 transition-colors"
          >
            Live Demo
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-12"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-sm uppercase tracking-widest text-purple-400 font-semibold">
            My Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl">
            Each project showcases my expertise in building scalable,
            interactive web experiences with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div variants={itemVariants} className="text-center pt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
