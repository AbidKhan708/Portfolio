"use client"

import Layout from "@/components/layout"
import { motion } from "framer-motion"
import { Code, Database, Cloud, Smartphone, Zap, Brain, CheckCircle } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "React.js", level: 95, experience: "4+ years" },
      { name: "Next.js", level: 90, experience: "3+ years" },
      { name: "TypeScript", level: 88, experience: "3+ years" },
      { name: "Redux/Context", level: 85, experience: "3+ years" },
      { name: "Tailwind CSS", level: 92, experience: "2+ years" },
      { name: "Material-UI", level: 80, experience: "2+ years" },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "from-green-400 to-emerald-500",
    skills: [
      { name: "Node.js", level: 90, experience: "3+ years" },
      { name: "Express.js", level: 88, experience: "3+ years" },
      { name: "RESTful APIs", level: 92, experience: "3+ years" },
      { name: "GraphQL", level: 75, experience: "1+ year" },
      { name: "Microservices", level: 70, experience: "1+ year" },
    ],
  },
  {
    title: "Database Management",
    icon: Database,
    color: "from-purple-400 to-pink-500",
    skills: [
      { name: "MongoDB", level: 90, experience: "3+ years" },
      { name: "MySQL", level: 85, experience: "2+ years" },
      { name: "PostgreSQL", level: 80, experience: "2+ years" },
      { name: "Redis", level: 75, experience: "1+ year" },
      { name: "Firebase", level: 82, experience: "2+ years" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-orange-400 to-red-500",
    skills: [
      { name: "AWS", level: 80, experience: "2+ years" },
      { name: "Docker", level: 75, experience: "1+ year" },
      { name: "GitLab CI/CD", level: 78, experience: "2+ years" },
      { name: "Nginx", level: 70, experience: "1+ year" },
      { name: "Linux", level: 75, experience: "2+ years" },
    ],
  },
  {
    title: "Mobile & Tools",
    icon: Smartphone,
    color: "from-indigo-400 to-purple-500",
    skills: [
      { name: "React Native", level: 80, experience: "2+ years" },
      { name: "Git/GitLab", level: 95, experience: "4+ years" },
      { name: "JIRA", level: 90, experience: "3+ years" },
      { name: "Figma", level: 85, experience: "2+ years" },
      { name: "Postman", level: 88, experience: "3+ years" },
    ],
  },
  {
    title: "Expert AI Integration",
    icon: Zap,
    color: "from-yellow-400 to-orange-500",
    skills: [
      { name: "AI/ML Model Integration", level: 90, experience: "3+ years" },
      { name: "OpenAI API Integration", level: 88, experience: "2+ years" },
      { name: "Chatbot Development", level: 92, experience: "3+ years" },
      { name: "Natural Language Processing", level: 85, experience: "2+ years" },
      { name: "Computer Vision APIs", level: 80, experience: "2+ years" },
      { name: "AI-Powered Analytics", level: 87, experience: "2+ years" },
    ],
  },
]

const certifications = [
  "AWS Certified Developer Associate",
  "MongoDB Certified Developer",
  "React Advanced Patterns",
  "Node.js Professional Certification",
  "Agile Project Management",
]

const learningPath = [
  { skill: "AI/ML Integration", progress: 75, status: "In Progress" },
  { skill: "Kubernetes", progress: 60, status: "Learning" },
  { skill: "Blockchain Development", progress: 40, status: "Exploring" },
  { skill: "Python for AI", progress: 55, status: "Learning" },
]

export default function SkillsPage() {
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
              Technical Skills
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Full-stack expertise with AI integration specialization and 4+ years of hands-on experience
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-8">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-400">{skill.experience}</span>
                          <span className="text-cyan-400 font-bold">{skill.level}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.05 }}
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learning Path & Certifications */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Current Learning */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center mb-8">
                <Brain className="w-8 h-8 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Currently Learning</h2>
              </div>

              <div className="space-y-6">
                {learningPath.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{item.skill}</span>
                      <span className="text-purple-400 text-sm font-medium">{item.status}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        className="h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center mb-8">
                <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Certifications & Training</h2>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-green-400/30 transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{cert}</span>
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
