"use client"

import { Button } from "@/components/ui/button"
import { Download, AlertCircle } from "lucide-react"
import { useState } from "react"

export default function CVDownload() {
  const [downloadError, setDownloadError] = useState(false)

  const downloadCV = async () => {
    try {
      setDownloadError(false)

      // First, try to fetch the PDF to verify it exists
      const response = await fetch("/Muhammad_Abid_Ali_Khan_CV.pdf")

      if (!response.ok) {
        throw new Error("PDF file not found")
      }

      // Create a link element and trigger download
      const link = document.createElement("a")
      link.href = "/Muhammad_Abid_Ali_Khan_CV.pdf"
      link.download = "Muhammad_Abid_Ali_Khan_CV.pdf"
      link.target = "_blank"

      // Add to DOM, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error downloading CV:", error)
      setDownloadError(true)

      // Fallback: Create a simple text-based CV
      createFallbackCV()
    }
  }

  const createFallbackCV = () => {
    const cvContent = `
MUHAMMAD ABID ALI KHAN
Senior React.js Developer & Team Lead
Lahore, Pakistan

PROFESSIONAL EXPERIENCE

Team Lead - Xeven Solutions (May 2023 - Present)
• Dedicated React.js Developer and Team Lead with 3+ years of experience
• Leading development teams and managing projects across multiple domains
• Mentoring developers and ensuring code quality through reviews

Senior React.js Developer - Xeven Solutions (Oct 2021 - May 2023)
• Extensive expertise in React.js, Redux, and TypeScript
• Strong track record in solving complex technical problems
• Proven project leadership experience

Software Engineer - Xeven Solutions (April 2020 - Oct 2021)
• Transitioned from intern to permanent React.js Developer
• Built and enhanced user interfaces using React.js
• Collaborated with designers to translate UI/UX designs

EDUCATION
Bachelor of Science in Software Engineering
Government College University Faisalabad (2016 - 2020)
Final Year Project: Image Process Grade A

KEY SKILLS
• React.js, JavaScript (ES6+), TypeScript, Redux
• Node.js, Express.js, MongoDB, MySQL, PostgreSQL
• RESTful APIs, GraphQL, AWS, Docker
• Visual Studio Code, JIRA, Trello, Postman, Figma

MAJOR PROJECTS
• AlfaCare - Comprehensive Healthcare Management System
• Yodha - Learning Management System
• RedHanded - Real Estate Investment Platform
• MediStreamline - AI-Powered Healthcare Assistant
• BrandMind - AI-Powered Social Media Management

LANGUAGES & INTERESTS
Languages: English, Hindi, Urdu
Interests: Traveling, Photography
    `

    const blob = new Blob([cvContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Muhammad_Abid_Ali_Khan_CV.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="flex flex-col items-center">
      <Button
        onClick={downloadCV}
        variant="outline"
        size="lg"
        className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-transparent"
      >
        <Download className="w-5 h-5 mr-2" />
        Download Resume
      </Button>

      {downloadError && (
        <div className="mt-3 flex items-center text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 mr-2" />
          <span>PDF unavailable - downloaded as text file</span>
        </div>
      )}
    </div>
  )
}
