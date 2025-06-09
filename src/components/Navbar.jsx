import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = ['home', 'experience', 'education', 'projects', 'contact']

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold tracking-wide cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ahmed Irtija
        </motion.h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
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

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? (
              <motion.div initial={{ rotate: -90 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
                <HiX />
              </motion.div>
            ) : (
              <motion.div initial={{ rotate: 90 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
                <HiMenuAlt3 />
              </motion.div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-sm px-6 pb-4 pt-2"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link}
                  to={link}
                  smooth={true}
                  duration={400}
                  offset={-30}
                  onClick={closeMenu}
                  className="cursor-pointer capitalize text-base text-gray-200 hover:text-cyan-400 transition"
                  activeClass="text-cyan-400 font-semibold"
                  spy={true}
                >
                  {link}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
