"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Leadership", href: "/leadership" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Muhammad Abid Ali Khan
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:scale-110 inline-block"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-cyan-400 transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mb-4"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-white hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
