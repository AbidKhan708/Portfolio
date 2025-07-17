"use client"

import Layout from "@/components/layout"
import { motion } from "framer-motion"
import { Users, TrendingUp, Target, Code, CheckCircle, Award, MessageSquare, Lightbulb } from "lucide-react"

const leadershipStats = [
  { icon: Users, label: "Team Members Led", value: "14", description: "Developers across multiple projects" },
  { icon: TrendingUp, label: "Years as Lead", value: "3+", description: "Consistent growth and delivery" },
  { icon: Target, label: "Project Success Rate", value: "98%", description: "On-time, on-budget delivery" },
  { icon: Code, label: "Code Reviews", value: "500+", description: "Quality assurance and mentoring" },
]

const leadershipPrinciples = [
  {
    icon: Users,
    title: "People-First Leadership",
    description:
      "Believe that great products come from great teams. Focus on individual growth, clear communication, and creating an environment where everyone can do their best work.",
    color: "from-blue-400 to-cyan-400",
  },
  {
    icon: Target,
    title: "Results-Driven Approach",
    description:
      "Set clear goals, measure progress, and celebrate achievements. Balance ambitious targets with realistic timelines and resource allocation.",
    color: "from-green-400 to-emerald-400",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Learning",
    description:
      "Encourage experimentation, learn from failures, and stay current with technology trends. Foster a culture of continuous improvement and knowledge sharing.",
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Maintain open channels of communication, provide regular feedback, and ensure everyone understands project goals and their role in achieving them.",
    color: "from-orange-400 to-red-400",
  },
]

const achievements = [
  {
    title: "Team Scaling Success",
    description:
      "Successfully scaled development team from 5 to 14 members while maintaining code quality and delivery timelines",
    impact: "180% team growth with maintained productivity",
    year: "2023",
  },
  {
    title: "Process Optimization",
    description: "Implemented agile methodologies and code review processes that reduced bug reports by 60%",
    impact: "60% reduction in production issues",
    year: "2022",
  },
  {
    title: "Mentorship Program",
    description:
      "Established structured mentorship program that resulted in 3 junior developers being promoted to senior roles",
    impact: "3 internal promotions achieved",
    year: "2023",
  },
  {
    title: "Cross-functional Collaboration",
    description:
      "Led cross-functional initiatives between development, design, and product teams improving delivery speed by 40%",
    impact: "40% faster feature delivery",
    year: "2024",
  },
  {
    title: "Team Player Award",
    description:
      "Recognized for exceptional collaboration, supporting team members, and fostering positive team dynamics",
    impact: "Enhanced team morale and productivity",
    year: "2023",
  },
  {
    title: "Project Leader of the Month",
    description:
      "Multiple recognitions for outstanding project leadership, delivery excellence, and innovative problem-solving",
    impact: "Consistent recognition for leadership excellence",
    year: "2023-2024",
  },
]

const responsibilities = [
  "Strategic Planning & Roadmap Development",
  "Team Performance Management & Reviews",
  "Code Architecture & Technical Decisions",
  "Stakeholder Communication & Reporting",
  "Resource Allocation & Sprint Planning",
  "Quality Assurance & Code Standards",
  "Mentoring & Professional Development",
  "Risk Management & Problem Resolution",
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior Frontend Developer",
    quote:
      "Muhammad's leadership style is both supportive and challenging. He helped me grow from a junior to senior developer through his mentorship and clear guidance.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ahmed Hassan",
    role: "Backend Developer",
    quote:
      "Working under Muhammad's leadership has been transformative. His technical expertise combined with excellent communication skills makes complex projects manageable.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Lisa Chen",
    role: "Product Manager",
    quote:
      "Muhammad bridges the gap between technical complexity and business requirements perfectly. His team consistently delivers high-quality solutions on time.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function LeadershipPage() {
  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Leadership Philosophy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Driving teams to excellence through mentorship, strategic planning, and technical leadership
            </p>
          </motion.div>

          {/* Leadership Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {leadershipStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
              >
                <stat.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.description}</div>
              </div>
            ))}
          </motion.div>

          {/* Leadership Principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Leadership Principles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {leadershipPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${principle.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Achievements</h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 md:mb-0">{achievement.title}</h3>
                    <span className="text-cyan-400 font-bold text-lg">{achievement.year}</span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{achievement.description}</p>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-white font-semibold">Impact: </span>
                      <span className="text-cyan-400 ml-2">{achievement.impact}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Core Responsibilities & Testimonials */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Core Responsibilities</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="space-y-4">
                  {responsibilities.map((responsibility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
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
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Team Testimonials</h2>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-cyan-400/30"
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h4 className="text-white font-semibold">{testimonial.name}</h4>
                          <span className="text-cyan-400 text-sm ml-2">• {testimonial.role}</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed italic">"{testimonial.quote}"</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
