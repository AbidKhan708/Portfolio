"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Globe, Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Available for Lead Developer, Full-Stack, and Product Management roles
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
                  { icon: Globe, label: "Languages", value: "English (Professional), Urdu/Hindi (Native)" },
                  { icon: Mail, label: "Interests", value: "Tech Photography • Global Travel" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{item.label}</div>
                      <div className="text-gray-300 text-sm">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-700" },
                { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
                { icon: Mail, href: "#", label: "Email", color: "hover:bg-red-600" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 ${social.color} transition-all duration-300 group`}
                >
                  <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                    />
                  </div>
                </div>

                <Input
                  placeholder="Subject"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                />

                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400">© 2024 Muhammad Abid Ali Khan. Crafted with passion and precision.</p>
        </motion.div>
      </div>
    </section>
  )
}
