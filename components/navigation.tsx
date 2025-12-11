"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px" },
    )

    window.addEventListener("scroll", handleScroll)

    navItems.forEach((item) => {
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-[#0f172a]/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-center h-16 md:h-20">
          {/* Desktop nav items - centered */}
          <ul className="flex items-center gap-8 md:gap-12">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 hover:text-white relative inline-block pb-1",
                    activeSection === item.href.slice(1) ? "text-white" : "text-gray-400",
                  )}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
