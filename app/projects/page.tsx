"use client"

import Layout from "@/components/layout"
import { motion } from "framer-motion"
import { ExternalLink, Users, Heart, Shield, Zap, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    title: "AlfaCare",
    subtitle: "Full Stack Healthcare Ecosystem",
    description:
      "Complete healthcare management platform supporting multiple roles: Super Admin, Doctor, Patient, Pharmacy, and Lab Systems with integrated payments and EMR.",
    url: "https://demoalfacare.xeventechnologies.com/",
    github: "#",
    tech: ["React.js", "Node.js", "MongoDB", "Stripe Integration", "EMR System", "Video Calls"],
    color: "from-green-500 to-emerald-500",
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
    github: "#",
    tech: ["React.js", ".NET Integration", "Video Consultation", "Healthcare Compliance", "Role Management"],
    color: "from-blue-500 to-cyan-500",
    icon: Users,
    features: [
      "RESTful API integration with .NET backend",
      "Component-based architecture design",
      "Video calling features integration",
      "Responsive design across all devices",
      "Organization management tools",
      "Role-based access control",
    ],
  },
  {
    title: "RedHanded",
    subtitle: "Real Estate Platform",
    description:
      "Advanced real estate platform with market analysis and property search algorithms for investment decisions.",
    url: "https://redhandedco.com/",
    github: "#",
    tech: ["React.js", "Node.js", "Real-time APIs", "ML Algorithms", "Payment Gateway", "Data Analytics"],
    color: "from-red-500 to-pink-500",
    icon: Building,
    features: [
      "Responsive UI with React.js and Material UI",
      "Advanced search and filtering functionality",
      "Integrated payment gateway for transactions",
      "Real-time data integration with third-party APIs",
      "Performance optimization and load time reduction",
      "Property investment analytics",
    ],
  },
  {
    title: "MediStreamline",
    subtitle: "AI-Powered Healthcare Assistant",
    description:
      "Healthcare platform with AI chatbot for medical report analysis, patient history management, and HIPAA-compliant data handling.",
    url: "https://medistreamline.com/",
    github: "#",
    tech: ["React.js", "AI/ML Integration", "OAuth Systems", "HIPAA Compliance", "Medical AI", "Stripe"],
    color: "from-purple-500 to-indigo-500",
    icon: Shield,
    features: [
      "Stripe integration for secure payment processing",
      "AI-powered chatbot for healthcare assistance",
      "Google and Facebook login integration",
      "Team leadership and project management",
      "Medical history management features",
      "HIPAA compliant data handling",
    ],
  },
  {
    title: "BrandMind",
    subtitle: "Social Media AI Suite",
    description:
      "Multi-platform social media management tool with AI-driven content generation and cross-platform scheduling capabilities.",
    url: "https://brandmind.xeventechnologies.com/",
    github: "#",
    tech: ["React.js", "AI Content Generation", "Multi-platform APIs", "Social Media Integration"],
    color: "from-orange-500 to-yellow-500",
    icon: Zap,
    features: [
      "Multi-platform posting (LinkedIn, Facebook, Instagram, X)",
      "AI-generated content for engaging posts",
      "Versatile posting types (blobs, posts, ads)",
      "Company and brand management profiles",
      "Content scheduling and automation",
      "Analytics and performance tracking",
    ],
  },
]

const otherProjects = [
  {
    title: "Jinnalyst",
    description: "AI Analyst Vetting System (Currently Leading)",
    url: "https://stg.jinnalyst.com",
    tech: ["AI Vetting", "Team Leadership", "Product Strategy"],
  },
  {
    title: "Emformance",
    description: "Performance Management Platform",
    url: "https://emformance.com/",
    tech: ["React.js", "Performance Metrics", "Dashboard"],
  },
  {
    title: "Contestance",
    description: "Contest Management System",
    url: "https://dev.contestantcenter.com/",
    tech: ["Contest Logic", "User Management", "Real-time Updates"],
  },
]

export default function ProjectsPage() {
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
              Standalone Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complex, full-stack applications across healthcare, real estate, and AI sectors
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-12 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                {/* Project Header */}
                <div className={`h-32 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-white/80">{project.subtitle}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <project.icon className="w-8 h-8 text-white" />
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
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Description */}
                    <div>
                      <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                      {/* Tech Stack */}
                      {project.tech?.length ? (
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-cyan-300 border border-cyan-400/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      <Button
                        asChild
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600"
                      >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    </div>

                    {/* Key Features */}
                    {project.features?.length ? (
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h4 className="text-white font-semibold mb-4">Key Features & Contributions</h4>
                        <div className="space-y-3">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <div
                                className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mt-2 flex-shrink-0`}
                              ></div>
                              <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Other Notable Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  {project.tech?.length ? (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent"
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
