import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => (
  <footer className="sticky bottom-0 z-50 w-full bg-black text-white py-6 px-4 shadow-md overflow-hidden">
    {/* Star background*/}
    <div className="absolute inset-0 -z-10 animate-pulse bg-gradient-to-br from-indigo-900 via-black to-purple-900 opacity-70"></div>

    {/* Star overlay */}
    <div className="absolute inset-0 -z-10 bg-[url('/stars.svg')] bg-cover opacity-20 pointer-events-none"></div>

    {/* Footer */}
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex space-x-8 text-3xl mb-2">
        {[
          { icon: <FaGithub />, link: 'https://github.com/AhmedIrtija' },
          { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/ahmed-irtija/' },
          { icon: <FaInstagram />, link: 'https://www.instagram.com/your_boi_ahmed/' },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#38bdf8' }}
            className="text-white hover:text-cyan-400 transition-all duration-300"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>

      <motion.p
        className="text-xs text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        &copy; {new Date().getFullYear()} Ahmed Irtija. All rights reserved.
      </motion.p>
    </motion.div>
  </footer>
)

export default Footer
