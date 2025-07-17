"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, Target, Code, CheckCircle, Award } from "lucide-react"

const achievements = [
  {
    icon: TrendingUp,
    title: "Rapid Promotion",
    description: "Promoted to Team Lead in just 3 years through consistent delivery and leadership excellence",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Successfully scaled and mentored development teams from 5 to 14 developers",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Code,
    title: "Code Excellence",
    description: "Established code review processes and best practices across multiple projects",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Target,
    title: "Project Delivery",
    description: "Owns end-to-end delivery cycle with 98% success rate across complex projects",
    color: "from-orange-400 to-red-500",
  },
  {
    icon: Award,
    title: "Team Player Award",
    description: "Recognized for exceptional collaboration and supporting team members across projects",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Award,
    title: "Project Leader of the Month",
    description: "Multiple recognitions for outstanding project leadership and delivery excellence",
    color: "from-purple-500 to-pink-500",
  },
]

const responsibilities = [
  "Code Reviews & Quality Assurance",
  "Task Allocation & Sprint Planning",
  "Performance Optimization",
  "Team Mentoring & Development",
  "Architecture Decision Making",
  "Client Communication & Requirements",
  "AI Integration Leadership",
  "Cross-functional Collaboration",
]

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Leadership Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Driving teams to excellence through mentorship, strategic planning, and technical leadership
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Key Achievements</h3>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Core Responsibilities</h3>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid gap-4">
                {responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {responsibility}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">14</div>
                <div className="text-sm text-gray-300">Developers Mentored</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-sm text-gray-300">Years as Lead</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
