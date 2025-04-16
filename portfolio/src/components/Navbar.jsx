import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'

const navLinks = ['home', 'experience', 'projects', 'contact']

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Name */}
        <motion.h1
          className="text-2xl font-bold tracking-wide cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ahmed Irtija
        </motion.h1>

        {/* Nav Links */}
        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link}
              to={link}
              smooth={true}
              duration={400}
              offset={-30} 
              className="cursor-pointer capitalize text-sm hover:text-cyan-400 transition"
              activeClass="text-cyan-400 font-semibold"
              spy={true}
            >
              {link}
            </ScrollLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
