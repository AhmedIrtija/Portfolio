import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Education from './components/Education'

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App