"use client"

import Layout from "@/components/layout"
import { motion } from "framer-motion"
import { Calendar, MapPin, Award, BookOpen, Coffee, Camera, Plane } from "lucide-react"

const timeline = [
  {
    year: "2016-2020",
    title: "Bachelor of Science in Software Engineering",
    company: "Government College University Faisalabad",
    description: "Completed degree with distinction, Final Year Project: Image Process Grade A",
    skills: ["Software Engineering", "Programming Fundamentals", "Database Systems", "Web Development"],
  },
  {
    year: "2020-2021",
    title: "Software Engineer (Intern to Permanent)",
    company: "Xeven Solutions",
    description: "Transitioned from intern to permanent React.js Developer due to strong performance and contributions",
    skills: ["React.js", "JavaScript", "HTML/CSS", "Git"],
  },
  {
    year: "2021-2023",
    title: "Senior React.js Developer",
    company: "Xeven Solutions",
    description: "Extensive expertise in React.js, Redux, and TypeScript with proven project leadership experience",
    skills: ["React.js", "Redux", "TypeScript", "API Integration", "Team Collaboration"],
  },
  {
    year: "2023-Present",
    title: "Team Lead",
    company: "Xeven Solutions",
    description: "Leading development teams, managing projects, and mentoring developers across multiple domains",
    skills: ["Team Leadership", "Project Management", "Mentoring", "Architecture Design", "Performance Optimization"],
  },
]

const personalInfo = [
  { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
  { icon: Calendar, label: "Experience", value: "3+ Years in React.js Development" },
  { icon: Award, label: "Specialization", value: "Healthcare, Real Estate & Education" },
  { icon: BookOpen, label: "Languages", value: "English, Hindi, Urdu" },
]

const interests = [
  { icon: Camera, title: "Photography", description: "Capturing moments and exploring creative perspectives" },
  { icon: Plane, title: "Traveling", description: "Exploring new cultures and gaining diverse experiences" },
  { icon: Coffee, title: "Continuous Learning", description: "Always exploring new technologies and best practices" },
]

const tools = [
  "Visual Studio Code (VS Code)",
  "JIRA",
  "Trello",
  "Azure DevOps",
  "Postman",
  "MongoDB",
  "MySQL",
  "Figma",
  "GitLab",
  "Bitbucket",
  "ESLint",
  "Prettier",
  "Slack",
  "Microsoft Teams",
  "Skype",
]

export default function AboutPage() {
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
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dedicated React.js Developer and Team Lead with 3+ years of experience in crafting seamless user
              interfaces and enhancing user experiences through API integration. Proficient in React.js, Redux, and
              TypeScript.
            </p>
          </motion.div>

          {/* Personal Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {personalInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <info.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">{info.label}</h3>
                <p className="text-gray-300 text-sm">{info.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Career Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Journey</h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-slate-900"></div>
                  <div className="ml-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-cyan-400 font-medium">{item.company}</p>
                      </div>
                      <span className="text-purple-400 font-bold text-lg">{item.year}</span>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm text-cyan-300 border border-cyan-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Tools & Technologies</h2>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                  >
                    <span className="text-gray-300 text-sm font-medium">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Personal Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Beyond Code</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <interest.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{interest.title}</h3>
                  <p className="text-gray-300">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
