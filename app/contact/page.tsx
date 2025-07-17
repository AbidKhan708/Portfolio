"use client"

import Layout from "@/components/layout"
import { motion } from "framer-motion"
import { Mail, MapPin, Globe, Github, Linkedin, Send, Clock, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import CVDownload from "@/components/cv-download"

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Lahore, Pakistan", description: "Available for remote work globally" },
  { icon: Globe, label: "Languages", value: "English (Professional)", description: "Urdu/Hindi (Native)" },
  { icon: Clock, label: "Availability", value: "Full-time & Contract", description: "Flexible timezone coverage" },
  { icon: Calendar, label: "Response Time", value: "Within 24 hours", description: "Quick turnaround guaranteed" },
]

const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web application development using MERN stack with AI integration",
    features: ["React.js/Next.js Frontend", "Node.js/Express Backend", "Database Design", "API Development"],
    price: "Starting from $50/hour",
  },
  {
    title: "AI Integration Services",
    description: "Integration of AI capabilities and machine learning into existing applications",
    features: ["Chatbot Development", "AI API Integration", "Machine Learning Models", "Natural Language Processing"],
    price: "Starting from $65/hour",
  },
  {
    title: "Team Leadership",
    description: "Technical leadership and team management for development projects",
    features: ["Team Scaling", "Code Reviews", "Architecture Planning", "Mentorship"],
    price: "Starting from $75/hour",
  },
  {
    title: "Product Development",
    description: "Complete product development from concept to deployment with AI features",
    features: ["MVP Development", "AI-Powered Features", "Technical Architecture", "Launch Support"],
    price: "Project-based pricing",
  },
]

const workProcess = [
  {
    step: "01",
    title: "Discovery Call",
    description: "Understanding your requirements, goals, and project scope",
    duration: "30-60 minutes",
  },
  {
    step: "02",
    title: "Proposal & Planning",
    description: "Detailed project proposal with timeline and technical approach",
    duration: "2-3 days",
  },
  {
    step: "03",
    title: "Development",
    description: "Agile development with regular updates and milestone reviews",
    duration: "Project dependent",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description: "Comprehensive testing, deployment, and post-launch support",
    duration: "1-2 weeks",
  },
]

const availability = [
  { role: "Lead Developer", status: "Available", description: "Leading development teams and technical decisions" },
  {
    role: "Full-Stack Developer",
    status: "Available",
    description: "End-to-end application development with AI integration",
  },
  {
    role: "AI Integration Expert",
    status: "Available",
    description: "Implementing AI solutions and machine learning features",
  },
  { role: "Technical Consultant", status: "Available", description: "Architecture review and AI integration guidance" },
]

export default function ContactPage() {
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
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Available for Lead Developer, Full-Stack, and AI Integration roles. Ready to bring your ideas to life with
              cutting-edge technology and AI integration expertise.
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
              >
                <info.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{info.label}</h3>
                <p className="text-cyan-400 font-medium mb-2">{info.value}</p>
                <p className="text-gray-300 text-sm">{info.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Services & Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Services Offered</h2>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <span className="text-cyan-400 font-semibold text-sm">{service.price}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 sticky top-8">
                <h2 className="text-3xl font-bold text-white mb-8">Start a Project</h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Name *</label>
                      <Input
                        placeholder="Your Name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <Input
                      placeholder="Your Company"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Project Type</label>
                    <select className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 focus:border-cyan-400 focus:outline-none">
                      <option value="">Select Project Type</option>
                      <option value="full-stack">Full-Stack Development</option>
                      <option value="leadership">Team Leadership</option>
                      <option value="product">Product Development</option>
                      <option value="ai">AI Integration</option>
                      <option value="consulting">Technical Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Budget Range</label>
                    <select className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2 focus:border-cyan-400 focus:outline-none">
                      <option value="">Select Budget Range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Project Details *</label>
                    <Textarea
                      placeholder="Tell me about your project, requirements, timeline, and any specific technologies you'd like to use..."
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Project Details
                  </Button>
                </form>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 mt-8 pt-8 border-t border-white/10">
                  {[
                    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-700" },
                    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
                    { icon: Mail, href: "mailto:contact@muhammadabid.dev", label: "Email", color: "hover:bg-red-600" },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 ${social.color} transition-all duration-300 group`}
                    >
                      <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Work Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">How We'll Work Together</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center relative"
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{step.description}</p>
                  <div className="text-cyan-400 text-sm font-medium">{step.duration}</div>

                  {/* Connection Line */}
                  {index < workProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Current Availability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Current Availability</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {availability.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-400/30">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-400/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life with cutting-edge technology and proven leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule a Call
              </Button>
              <CVDownload />
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-gray-400 mb-4">© 2024 Muhammad Abid Ali Khan. Crafted with passion and precision.</p>
            <p className="text-sm text-gray-500">
              "From intern to leading development teams – I architect solutions that scale."
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}
