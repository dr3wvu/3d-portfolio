import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../constants'

const ExperienceCard = ({ exp, index, isLast }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: index * 0.15 },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      className={`relative pl-8 ${!isLast ? 'pb-12' : ''}`}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-black -translate-x-1.5"
        whileHover={{ scale: 1.3 }}
      />

      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-1.5 top-4 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-transparent" />
      )}

      {/* Content card */}
      <motion.div
        className="p-6 rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-purple-400/50 transition-all duration-300 group"
        whileHover={{ scale: 1.02 }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 -z-10" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <h3 className="text-lg font-bold text-white">{exp.position}</h3>
          <span className="text-xs text-purple-400 font-semibold whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        {/* Company and location */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
          <span className="text-purple-400 font-medium">{exp.company}</span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="text-white/60 text-sm">{exp.location}</span>
        </div>

        {/* Description */}
        <p className="text-white/70 mb-4">{exp.description}</p>

        {/* Achievements */}
        <ul className="space-y-2">
          {exp.achievements.map((achievement, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="text-white/60 text-sm flex gap-3"
            >
              <span className="text-purple-400 mt-1 flex-shrink-0">→</span>
              <span>{achievement}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="experience"
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
            Career Journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Experience
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl">
            A journey of growth, innovation, and impactful contributions across
            diverse roles and companies.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <motion.div variants={containerVariants} className="max-w-3xl">
          {experience.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              exp={exp}
              index={idx}
              isLast={idx === experience.length - 1}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience
