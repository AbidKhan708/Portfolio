"use client"

import { motion } from "framer-motion"
import { MapPin, TrendingUp, Users, Code, GraduationCap } from "lucide-react"

const careerSteps = [
  {
    title: "Software Engineer (Intern to Permanent)",
    duration: "April 2020 – Oct 2021",
    description: "Transitioned from intern to permanent React.js Developer due to strong performance and contributions",
  },
  {
    title: "Senior React.js Developer",
    duration: "Oct 2021 – May 2023",
    description: "Extensive expertise in React.js, Redux, and TypeScript with proven project leadership experience",
  },
  {
    title: "Team Lead",
    duration: "May 2023 – Present",
    description:
      "Leading development teams, managing projects, and mentoring developers across healthcare, real estate, and education domains",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Career Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer & AI Integration Expert with 3+ years of experience in crafting seamless user
            interfaces and enhancing user experiences through API integration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Career Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400"></div>

            {careerSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-8 last:mb-0"
              >
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-slate-900"></div>
                <div className="ml-16 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{step.duration}</p>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats and Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-cyan-400 mr-3" />
                <span className="text-white font-medium">Education</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Bachelor of Science in Software Engineering</h3>
              <p className="text-cyan-400 mb-2">Government College University Faisalabad (2016 - 2020)</p>
              <p className="text-gray-300">✓ Final Year Project: Image Process Grade A</p>
            </div>

            {/* Location & Languages */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-cyan-400 mr-3" />
                <span className="text-white font-medium">Based in Lahore, Pakistan</span>
              </div>
              <p className="text-gray-300 mb-4">
                <strong>Languages:</strong> English, Hindi, Urdu
              </p>
              <p className="text-gray-300">
                <strong>Interests:</strong> Traveling, Photography
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, label: "Years Experience", value: "3+" },
                { icon: Users, label: "Team Leadership", value: "Yes" },
                { icon: Code, label: "Major Projects", value: "5+" },
                { icon: TrendingUp, label: "Domains", value: "3+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 text-center"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
