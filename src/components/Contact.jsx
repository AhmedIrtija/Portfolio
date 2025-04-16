import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

const Contact = () => {
  const form = useRef()
  const [sent, setSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    if (!validate()) return

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_EMAIL_KEY
      )
      .then(
        () => {
          setSent(true)
          setFormData({ name: '', email: '', message: '' })
          setErrors({})
          form.current.reset()
        },
        (error) => {
          console.error('FAILED...', error)
        }
      )
  }

  return (
    <section id="contact" className="relative min-h-screen w-full flex items-center justify-center snap-start overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-black text-white px-6 py-24">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={80} depth={50} count={3000} factor={2.5} fade speed={0.7} />
        </Canvas>
      </div>

      {/* Contact Form */}
      <div className="relative z-10 w-full max-w-2xl">
        <motion.h2
          className="text-4xl font-bold text-teal-300 mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full space-y-6 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-teal-500/20 shadow-md"
          noValidate
        >
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full p-3 rounded-md bg-white/10 focus:ring-2 focus:ring-teal-400 focus:outline-none text-white placeholder-gray-300 ${
                errors.name ? 'border border-red-500' : 'border border-teal-500/30'
              }`}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full p-3 rounded-md bg-white/10 focus:ring-2 focus:ring-teal-400 focus:outline-none text-white placeholder-gray-300 ${
                errors.email ? 'border border-red-500' : 'border border-teal-500/30'
              }`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={`w-full p-3 rounded-md bg-white/10 focus:ring-2 focus:ring-teal-400 focus:outline-none text-white placeholder-gray-300 ${
                errors.message ? 'border border-red-500' : 'border border-teal-500/30'
              }`}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 transition-all py-3 px-6 rounded-md text-white font-semibold shadow-lg"
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.04 }}
          >
            Send Message
          </motion.button>

          {/* Sent Message Notification */}
          {sent && (
            <motion.p
              className="text-green-400 text-sm mt-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Message sent successfully!
            </motion.p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
