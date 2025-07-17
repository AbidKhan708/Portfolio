"use client"

import { motion } from "framer-motion"
import { Code, Database, Cloud, Settings, Brain } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "from-cyan-400 to-blue-500",
    skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "Redux", "Responsive Design", "UI/UX Design"],
  },
  {
    title: "Styling & Frameworks",
    icon: Code,
    color: "from-green-400 to-emerald-500",
    skills: ["Bootstrap", "Tailwind CSS", "Material UI", "CSS3", "SASS/SCSS", "Styled Components"],
  },
  {
    title: "Backend & APIs",
    icon: Database,
    color: "from-purple-400 to-pink-500",
    skills: ["RESTful APIs", "API Integration", ".NET Integration", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-400 to-red-500",
    skills: ["AWS", "Azure DevOps", "GitLab", "Bitbucket", "Performance Optimization", "Deployment"],
  },
  {
    title: "Tools & Collaboration",
    icon: Settings,
    color: "from-indigo-400 to-purple-500",
    skills: ["Visual Studio Code", "JIRA", "Trello", "Postman", "Figma", "ESLint", "Prettier"],
  },
  {
    title: "Expert AI Integration",
    icon: Brain,
    color: "from-yellow-400 to-orange-500",
    skills: [
      "AI/ML Model Integration",
      "OpenAI API Integration",
      "Chatbot Development",
      "Natural Language Processing",
      "Computer Vision APIs",
      "AI-Powered Analytics",
    ],
  },
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

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Mastery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proficient in React.js, Redux, and TypeScript with expertise in Expert AI Integration across healthcare,
            real estate, and education domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 h-full">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3`}></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Development Tools & Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
              >
                <span className="text-gray-300 text-sm font-medium">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
