"use client"

import { motion } from "framer-motion"
import { ExternalLink, Users, Zap, Heart, Building, Shield, Brain, BarChart, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AlfaCare",
    subtitle: "Full Stack Healthcare Ecosystem",
    description:
      "Complete healthcare management platform supporting multiple roles: Super Admin, Doctor, Patient, Pharmacy, and Lab Systems with integrated payments and EMR.",
    url: "https://demoalfacare.xeventechnologies.com/",
    tech: ["React.js", "Video Consultation", "EMR System", "Payment Gateway", "Pharmacy Integration", "Lab Management"],
    color: "from-blue-500 to-cyan-500",
    icon: Heart,
    features: [
      "Video Consultation with secure capabilities",
      "Electronic Medical Records (EMR) system",
      "Appointment Scheduling system",
      "Pharmacy Integration and management",
      "Secure Payment Gateway integration",
      "Laboratory Management modules",
      "Doctor and Patient Registration",
    ],
  },
  {
    title: "Latus Yodha",
    subtitle: "Healthcare Platform",
    description:
      "Comprehensive healthcare platform for UK healthcare providers with organization management and video consultation capabilities.",
    url: "https://latusgroup.co.uk/yodha/",
    tech: ["React.js", ".NET APIs", "Component Architecture", "Video Calling", "Responsive Design"],
    color: "from-green-500 to-emerald-500",
    icon: Users,
    features: [
      "RESTful API integration with .NET backend",
      "Component-based architecture design",
      "Video calling features integration",
      "Responsive design across all devices",
      "Organization management tools",
    ],
  },
  {
    title: "Red Handed",
    subtitle: "Real Estate Platform",
    description:
      "Advanced real estate platform with market analysis and property search algorithms for investment decisions.",
    url: "https://redhandedco.com/",
    tech: ["React.js", "Material UI", "Payment Gateway", "Real-time APIs", "Advanced Search"],
    color: "from-red-500 to-pink-500",
    icon: Building,
    features: [
      "Responsive UI with React.js and Material UI",
      "Advanced search and filtering functionality",
      "Integrated payment gateway for transactions",
      "Real-time data integration with third-party APIs",
      "Performance optimization and load time reduction",
      "Client interaction and property management features",
    ],
  },
  {
    title: "BrandMind",
    subtitle: "Social Media AI Suite",
    description:
      "Multi-platform social media management tool with AI-driven content generation and cross-platform scheduling capabilities.",
    url: "https://brandmind.xeventechnologies.com/",
    tech: ["React.js", "AI Content Generation", "Multi-platform APIs", "Social Media Integration"],
    color: "from-orange-500 to-yellow-500",
    icon: Zap,
    features: [
      "Multi-platform posting (LinkedIn, Facebook, Instagram, X)",
      "AI-generated content for engaging posts",
      "Versatile posting types (blobs, posts, ads)",
      "Company and brand management profiles",
    ],
  },
  {
    title: "MediStreamline",
    subtitle: "AI-Powered Healthcare Assistant",
    description:
      "Healthcare platform with AI chatbot for medical report analysis, patient history management, and HIPAA-compliant data handling.",
    url: "https://medistreamline.ai/",
    tech: ["React.js", "Stripe Integration", "AI Chatbot", "OAuth", "Medical History Management"],
    color: "from-purple-500 to-indigo-500",
    icon: Shield,
    features: [
      "Stripe integration for secure payment processing",
      "AI-powered chatbot for healthcare assistance",
      "Google and Facebook login integration",
      "Team leadership and project management",
      "Medical history management features",
    ],
  },
  {
    title: "Jinnalyst",
    subtitle: "AI Analyst Vetting System",
    description:
      "Advanced AI-powered analyst vetting platform with comprehensive evaluation systems and automated assessment capabilities. Currently leading as Product Manager.",
    url: "https://stg.jinnalyst.com",
    tech: ["AI Vetting", "Team Leadership", "Product Strategy", "Assessment Systems", "Analytics Dashboard"],
    color: "from-violet-500 to-purple-500",
    icon: Brain,
    features: [
      "AI-powered analyst evaluation system",
      "Comprehensive vetting algorithms",
      "Automated assessment workflows",
      "Performance analytics dashboard",
      "Team leadership and product management",
      "Strategic product development",
    ],
  },
  {
    title: "Emformance",
    subtitle: "Performance Management Platform",
    description:
      "Comprehensive performance management system designed to track, analyze, and optimize team and individual performance metrics.",
    url: "https://emformance.com/",
    tech: ["React.js", "Performance Metrics", "Dashboard", "Analytics", "Reporting Systems"],
    color: "from-teal-500 to-cyan-500",
    icon: BarChart,
    features: [
      "Real-time performance tracking",
      "Advanced analytics dashboard",
      "Custom reporting systems",
      "Team performance metrics",
      "Goal setting and tracking",
      "Performance optimization tools",
    ],
  },
  {
    title: "Contestance",
    subtitle: "Contest Management System",
    description:
      "Advanced contest management platform with real-time updates, user management, and comprehensive contest logic for various competition types.",
    url: "https://dev.contestantcenter.com/",
    tech: ["Contest Logic", "User Management", "Real-time Updates", "Competition Systems", "Scoring Algorithms"],
    color: "from-amber-500 to-orange-500",
    icon: Trophy,
    features: [
      "Advanced contest logic implementation",
      "Real-time participant updates",
      "Comprehensive user management",
      "Multiple competition formats",
      "Automated scoring systems",
      "Live leaderboard functionality",
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Standalone Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Leading projects across healthcare, real estate, education, AI vetting, and social media domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group h-full"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300 h-full flex flex-col">
                {/* Project Header */}
                <div className={`h-32 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-white/80 text-sm">{project.subtitle}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <project.icon className="w-6 h-6 text-white" />
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-cyan-300 border border-cyan-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6 flex-1">
                    <h4 className="text-white font-semibold mb-3 text-sm">Key Features</h4>
                    <div className="space-y-2">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <div
                            className={`w-1.5 h-1.5 bg-gradient-to-r ${project.color} rounded-full mt-2 flex-shrink-0`}
                          ></div>
                          <span className="text-gray-300 text-xs leading-relaxed">{feature}</span>
                        </div>
                      ))}
                      {project.features.length > 4 && (
                        <div className="text-cyan-400 text-xs">+{project.features.length - 4} more features</div>
                      )}
                    </div>
                  </div>

                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 mt-auto"
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
