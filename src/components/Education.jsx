import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

const educationData = [
  {
    level: 'High School',
    institution: 'Sherman Oaks CES',
    year: '2015 - 2019',
    details: 'Achieved my high school diploma while taking multiple AP classes.'
  },
  {
    level: 'Community College',
    institution: 'Los Angeles Pierce College',
    year: '2019 - 2022',
    details: 'Completed with associate degrees in Computer Science, Mathematics, Physics, and Social Studies.'
  },
  {
    level: 'University',
    institution: 'University of California, Davis',
    year: '2022 - 2024',
    details: 'Graduated with a Bachelor of Science in Computer Science.'
  },
  {
    level: 'Certificate Course',
    institution: 'Coursera',
    year: '2024 - 2025',
    details: 'Cybersecurity course from Google, focusing on network security, system administration, and incident response.'
  }
]

const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen w-full bg-gradient-to-br from-[#0a0f1a] to-[#0d1117] text-white overflow-hidden px-4 py-20 snap-start snap-always"
    >
      {/* Starry Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={100} depth={70} count={6000} factor={4.5} fade speed={1.2} />
        </Canvas>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mb-16 text-center">
          Education
        </h2>

        {/* Snake Grid */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-20 justify-items-center">
          {educationData.map((item, index) => (
            <div key={index} className={`relative flex flex-col items-center ${index % 2 === 0 ? 'mt-0' : 'mt-12'}`}>
              {/* Connector Line */}
              {index > 0 && (
                <div className="absolute -left-[3.3rem] top-1/2 w-12 border-t-2 border-dashed border-cyan-400 z-0 hidden md:block" />
              )}

              {/* Dot */}
              <div className="w-4 h-4 bg-cyan-400 rounded-full border-2 border-white shadow-md z-10 mb-4" />

              {/* Card */}
              <motion.div
                whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="w-[90%] bg-[#101624]/80 border border-cyan-500/20 rounded-2xl p-6 shadow-xl cursor-pointer hover:shadow-cyan-500/30 backdrop-blur-md transform-style-preserve-3d"
                style={{ perspective: '1000px' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaGraduationCap className="text-cyan-400 text-2xl" />
                  <h3 className="text-xl font-semibold">{item.level}</h3>
                </div>
                <h4 className="text-cyan-300 font-medium text-sm">{item.institution}</h4>
                <p className="text-xs text-gray-400 mb-2">{item.year}</p>
                <p className="text-gray-200 text-sm">{item.details}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
