import { Brain, Cpu, Code2, Lightbulb } from "lucide-react"

const focusAreas = [
  {
    icon: Brain,
    title: "AI & ML",
    description: "Deep Learning, CNNs, NLP, Transformers, Computer Vision",
  },
  {
    icon: Cpu,
    title: "Data Science",
    description: "Data Analysis, Model Evaluation, Feature Engineering",
  },
  {
    icon: Code2,
    title: "Engineering",
    description: "Full-stack ML systems, APIs, Web Development",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Problem Solving, Research, Building Products",
  },
]

export default function About() {
  return (
    <section id="about" className="pt-24 pb-16 scroll-mt-20" aria-label="About me">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">About Me</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          I&apos;m an AI/ML Engineer passionate about building intelligent systems, solving real-world problems with
          Machine Learning, and creating products that scale.
        </p>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Who I Am */}
          <div className="lg:col-span-1 group relative p-6 rounded-2xl bg-gradient-to-br bg-[#1e293b]/50 border border-gray-700/50 overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_48px_rgba(139,92,246,0.3),0_0_0_1px_rgba(255,255,255,0.1)]">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                Who I Am
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">
                I work at the intersection of Machine Learning, Deep Learning, Computer Vision, and Full-Stack
                Development. My focus lies in building practical, end-to-end AI solutions — from data pipelines and model
                engineering to deployment and optimization.
              </p>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                I love experimenting with modern technologies, researching novel techniques, and applying AI to areas like
                Stock Market Analysis, Sign Language Recognition, and Real-world Automation.
              </p>
            </div>
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500 blur-2xl" />
          </div>

          {/* Focus areas grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {focusAreas.map((area, index) => {
              const gradients = [
                { from: "from-purple-500/20", to: "to-pink-500/20", border: "from-purple-500", borderTo: "to-pink-500" },
                { from: "from-blue-500/20", to: "to-cyan-500/20", border: "from-blue-500", borderTo: "to-cyan-500" },
                { from: "from-green-500/20", to: "to-emerald-500/20", border: "from-green-500", borderTo: "to-emerald-500" },
                { from: "from-orange-500/20", to: "to-red-500/20", border: "from-orange-500", borderTo: "to-red-500" },
              ]
              const gradient = gradients[index % gradients.length]
              
              return (
                <div
                  key={area.title}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br bg-[#1e293b]/50 border border-gray-700]"
                >
                  {/* Animated gradient border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient.border} ${gradient.borderTo} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                  <div className={`absolute inset-[1px] rounded-2xl bg-gradient-to-br ${gradient.from} ${gradient.to} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="relative inline-block mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-r ${gradient.border} ${gradient.borderTo} rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative bg-[#0f172a]/80 p-2 rounded-lg border border-gray-700/50 group-hover:border-purple-500/50 transition-colors">
                        <area.icon className={`h-8 w-8 text-purple-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300`} />
                      </div>
                    </div>
                    <h4 className="text-white font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {area.title}
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{area.description}</p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradient.border} ${gradient.borderTo} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500 blur-2xl`} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
