import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "AI / ML / Deep Learning",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712100.png",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGradient: "from-purple-500 to-pink-500",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "NLP",
      "CNNs",
      "RNNs",
      "LSTM",
      "Transformers",
      "MediaPipe",
      "Model Evaluation",
      "yFinance API",
    ],
  },
  {
    title: "Web Technologies",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGradient: "from-blue-500 to-cyan-500",
    skills: ["JavaScript", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Django", "Streamlit", "REST APIs"],
  },
  {
    title: "Blockchain & Web3",
    icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    gradient: "from-green-500/20 to-emerald-500/20",
    borderGradient: "from-green-500 to-emerald-500",
    skills: ["Solidity", "BlockDAG", "Smart Contracts", "Web3", "Cryptography"],
  },
  {
    title: "Backend & Tools",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    gradient: "from-orange-500/20 to-red-500/20",
    borderGradient: "from-orange-500 to-red-500",
    skills: ["Python", "Django", "MySQL", "Git", "GitHub", "API Development", "Problem Solving"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="pt-16 pb-16 scroll-mt-20" aria-label="Skills">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Skills & Technologies</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Tools, frameworks and technologies I use to build modern AI systems & web apps.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-6 rounded-2xl bg-gradient-to-br bg-[#1e293b]/50 border border-gray-700/50 overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_48px_rgba(139,92,246,0.3),0_0_0_1px_rgba(255,255,255,0.1)]"
            >
              {/* Animated gradient border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
              />
              <div
                className={`absolute inset-[1px] rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${category.borderGradient} rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    <div className="relative bg-[#0f172a]/80 p-2 rounded-lg border border-gray-700/50 group-hover:border-purple-500/50 transition-colors">
                      <Image
                        src={category.icon || "/placeholder.svg"}
                        alt={`${category.title} icon`}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                <div
                  className={`h-px bg-gradient-to-r ${category.borderGradient} mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-[#0f172a]/70 border-gray-600/50 text-gray-300 hover:border-purple-500/70 hover:text-purple-300 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Decorative corner accent */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.borderGradient} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500 blur-2xl`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
