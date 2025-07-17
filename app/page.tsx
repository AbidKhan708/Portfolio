"use client"
import Layout from "@/components/layout"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Leadership from "@/components/sections/leadership"
import Contact from "@/components/sections/contact"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Leadership />
      <Contact />
    </Layout>
  )
}
