import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen w-full flex flex-col md:flex-row items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#0d1117] via-[#0b0f1c] to-[#0d1117] text-white"
    >
      {/* Space Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 2, 3]} intensity={1} />
          <Stars radius={100} depth={50} count={8000} factor={5} fade speed={1.5} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

       {/* Parallax Content to see text and have the space background*/}
      <Parallax speed={-10}>
        <motion.div
          className="z-10 max-w-2xl text-center md:text-left px-6 backdrop-blur-sm bg-white/5 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            Hi, I’m Ahmed Irtija
          </h1>
          <p className="text-lg text-gray-300 dark:text-gray-400 mb-6">
            With 2+ years of experience as a Software Engineer & Project Manager, my mission is to create innovative solutions to automate workflows and enhance efficiency.
          </p>

          <motion.a
            href="./Ahmed Irtija resume 2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
          >
            View Resume
          </motion.a>
        </motion.div>
      </Parallax>
    </section>
  );
};

export default Hero;