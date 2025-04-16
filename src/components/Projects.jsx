import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    type: 'Web',
    description: 'Personal portfolio using tools such as Tailwindcss, React, Vite, and Javascript.',
    github: 'https://github.com/AhmedIrtija/Portfolio',
    live: '',
  },
  {
    id: 2,
    title: 'TuneIn',
    type: 'iOS',
    description: 'An iOS app using SwiftUI, Spotify API, MapKit, and Firebase, enabling users to connect through music.',
    github: 'https://github.com/AhmedIrtija/Tune-In',
    live: '',
  },
  {
    id: 3,
    title: 'Game Website',
    type: 'Web',
    description: 'A responsive website featuring three separate games using HTML, CSS, and JavaScript.',
    github: 'https://github.com/AhmedIrtija/Game-Website',
    live: 'https://ahmedirtija.github.io/Game-Website/',
  },
  {
    id: 4,
    title: 'AI Project',
    type: 'AI',
    description: 'A website utilizing a machine learning model to analyze food allergen data and notify users of major allergens.',
    github: 'https://github.com/AhmedIrtija/ECS_171_Project',
    live: '',
  },
  {
    id: 5,
    title: 'PunchHell Game',
    type: 'Game',
    description: 'A Unity powered Touhou Style Danmaku game created using C#.',
    github: 'https://github.com/Konsing/Punch-Hell-Game_Unity',
    live: 'https://extraconcentratedjuice.itch.io/punchhell',
  },
  {
    id: 6,
    title: '3D Model in WebGL',
    type: 'Web',
    description: 'A JavaScript project that utilized WebGl’s abilities to produce any 3D model with the correct geometry on the HTML file.',
    github: 'https://github.com/AhmedIrtija/3D-Model-in-Webgl',
    live: '',
  },
]

const filters = ['All', 'Web', 'AI', 'iOS', 'Game']

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.type === activeFilter)

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-gradient-to-b from-[#0d1117] via-[#0a0e19] to-[#05080f] text-white snap-start overflow-y-auto px-6 py-20"
    >
      {/* Star Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={120} depth={80} count={6000} factor={4.5} fade speed={1.2} />
        </Canvas>
      </div>

      {/* Project Info */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
          Projects
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all backdrop-blur-md
                ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-md'
                    : 'bg-transparent border-gray-500 text-gray-300 hover:border-indigo-500'
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Individual Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -6,
                scale: 1.03,
                boxShadow: '0 12px 25px rgba(99, 102, 241, 0.4)', // subtle blue glow
              }}
              className="rounded-2xl p-6 bg-gradient-to-br from-[#1e1e2f] to-[#2a2a3d] border border-indigo-500/40 shadow-xl backdrop-blur-xl transition hover:ring-1 hover:ring-indigo-400/50"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-200 mb-4">{project.description}</p>
            
              <div className="flex justify-center gap-5 mb-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 transition"
                >
                  <FaGithub size={20} />
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-indigo-400 transition"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-indigo-600 text-white shadow-sm">
                {project.type}
              </span>
            </motion.div>            
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Projects
