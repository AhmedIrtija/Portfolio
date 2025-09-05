import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { desc } from 'framer-motion/client';

const experiences = [
  {
    company: "Compass Co., Ltd.",
    role: "Contractor",
    duration: "July 2025 - Present",
    description: [
      "Improving an application by fixing bugs and adding features such as calendar view, reservation management, and user database functionality.",
      "Improving frontend usage by cleaning up and optimizing code.",
      "Managing databases with SQLite to ensure accurate data storage and retrieval and containerizing the application with Docker to ensure reliable execution.",
    ],
  },
  {
    company: "LBPM",
    role: "Intern",
    duration: "June 2025 - August 2025",
    description: [
      "Merged multiple property databases using AppFolio and Excel.",
      "Developing data fields on AppFolio to digitize and manage physical records.",
      "Maintaining and adding features on the LBPM official website and automating filling W9 forms for properties using Python and Google Sheet.",
    ],
  },
  {
    company: "UC Davis EcoCAR",
    role: "Software Engineer / Project Manager",
    duration: "Sep 2022 – June 2024",
    description: [
      "Led a team of 5 software engineers",
      "Built applications using Python, Docker, Airflow, and PostgreSQL.",
      "Automated workflows using Google API and DocuSign API.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full bg-gradient-to-br from-[#0a0f1a] to-[#0d1117] text-white overflow-hidden px-4 py-20 snap-start snap-always"
    >
      {/* Starry Space Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={100} depth={70} count={6000} factor={4.5} fade speed={1.2} />
        </Canvas>
      </div>

      {/* Aurora Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />

      {/* Experience Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mb-16 text-center">
          Experience
        </h2>

        <div className="w-full border-l-4 border-purple-600 pl-8 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-5 top-2 w-4 h-4 bg-purple-500 rounded-full shadow-md transition-all group-hover:scale-110" />

              {/* Experience Card */}
              <div className="bg-[#101624]/80 border border-purple-700/40 p-6 rounded-2xl shadow-md hover:shadow-purple-500/30 transition backdrop-blur-lg">
                <h3 className="text-xl font-bold text-purple-300 mb-1">
                  {exp.role}
                </h3>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{exp.company}</span>
                  <span>{exp.duration}</span>
                </div>
                <ul className="mt-4 list-disc list-inside text-gray-200 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
