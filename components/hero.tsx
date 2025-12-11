import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="group relative text-center lg:text-left lg:flex-1 p-8 rounded-2xl bg-gradient-to-br bg-[#1e293b]/30 border border-gray-700/30 overflow-hidden transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_48px_rgba(139,92,246,0.3),0_0_0_1px_rgba(255,255,255,0.1)] backdrop-blur-sm">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl animate-gradient" />
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                Hi, I&apos;m
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-purple mb-6 animate-gradient">
                Anuj Parwal
              </h2>

              <p className="text-gray-300 text-lg md:text-xl mb-4 max-w-2xl mx-auto lg:mx-0 group-hover:text-gray-200 transition-colors">
                AI/ML Engineer & Full-Stack Developer specializing in{" "}
                <span className="text-purple-400 font-semibold">Machine Learning</span>,{" "}
                <span className="text-green-400 font-semibold">Deep Learning</span>, and{" "}
                <span className="text-blue-400 font-semibold">Modern Web Technologies</span>
              </p>

              <p className="text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 group-hover:text-gray-300 transition-colors">
                Building intelligent systems, designing scalable ML pipelines, and crafting seamless user experiences
                through modern AI engineering.
              </p>

              <Button asChild className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300">
                <a href="#contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            
            {/* Decorative corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 rounded-tr-full transition-opacity duration-500 blur-2xl" />
          </div>

          {/* Right - Profile Image */}
          <div className="relative lg:flex-shrink-0 group">
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
              {/* Animated decorative circles with multiple layers */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 via-indigo-500/20 to-blue-500/30 blur-3xl scale-110 animate-pulse-glow" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-2xl scale-125 animate-pulse-glow" style={{ animationDelay: "1s" }} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl scale-105 animate-pulse-glow" style={{ animationDelay: "2s" }} />
              
              {/* Rotating gradient ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 via-pink-500 to-purple-500 opacity-30 blur-sm animate-rotate-slow" />
              <div className="absolute -inset-2 rounded-full bg-gradient-to-l from-indigo-500 via-purple-500 via-blue-500 to-indigo-500 opacity-20 blur-sm animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }} />
              
              {/* Profile image container with enhanced border */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 p-1 group-hover:scale-105 transition-transform duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0f172a]">
                  <Image
                    src="/images/whatsapp-20image-202025-12-10-20at-2018.jpg"
                    alt="Anuj Parwal - AI/ML Developer"
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-indigo-500/0 group-hover:from-purple-500/20 group-hover:to-indigo-500/20 transition-all duration-500" />
                </div>
              </div>
              
              {/* Floating particles around image */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-float blur-sm" />
              <div className="absolute -top-8 right-8 w-2 h-2 bg-indigo-400 rounded-full opacity-50 animate-float blur-sm" style={{ animationDelay: "1s" }} />
              <div className="absolute -bottom-6 -right-6 w-2.5 h-2.5 bg-pink-400 rounded-full opacity-60 animate-float blur-sm" style={{ animationDelay: "2s" }} />
              <div className="absolute bottom-0 left-12 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-float blur-sm" style={{ animationDelay: "1.5s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
