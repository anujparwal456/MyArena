import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "AutoShield",
    description:
      "AI-powered Web3 identity verification system that uses ML models to analyze profiles off-chain, generates cryptographically signed attestations, and stores verifications on-chain via Solidity smart contracts on BlockDAG. Aims to reduce fake accounts by ~70% and social engineering scams by ~50%.",
    tech: ["Python", "Solidity", "Next.js", "BlockDAG Testnet", "AI/ML"],
    image: "https://images.pexels.com/photos/6770619/pexels-photo-6770619.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/anuj-1410/AutoShield-hackathon",
    demo: "https://lnkd.in/dxsxXaSD",
  },
  {
    title: "StockMaster AI",
    description:
      "Developed an end-to-end platform for predicting stock trends using AI and ML algorithms. Implemented advanced data preprocessing, sentiment analysis, and LSTM-based time-series forecasting.",
    tech: ["Python", "Streamlit", "LSTM", "yFinance API", "Pandas"],
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/anujparwal456/StockMaster-AI-Model",
  },
  {
    title: "Sign Language to Text",
    description:
      "Built a Machine Learning model in Python for real-time sign language recognition and conversion to text. Used OpenCV, TensorFlow, and MediaPipe for hand gesture detection with high accuracy.",
    tech: ["Python", "TensorFlow", "OpenCV", "MediaPipe", "CNN"],
    image: "https://images.pexels.com/photos/7587442/pexels-photo-7587442.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/anuj-1410/Indian_Sign_lang_model",
  },
  {
    title: "DSA Web Application",
    description:
      "Developed a dynamic website using HTML, CSS, JavaScript (Frontend) & Django (Backend). Focused on implementing efficient DSA-based logic for optimized performance.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
    github: "https://github.com/anujparwal456/dsa_virtual_lab",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="pt-16 pb-24 scroll-mt-20" aria-label="Projects">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-[#1e293b]/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02] shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_48px_rgba(139,92,246,0.3),0_0_0_1px_rgba(255,255,255,0.1)]"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-indigo-500/10 transition-all duration-500 rounded-2xl" />
              
              {/* Glowing border effect */}
              <div className="absolute -inset-[2px] bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10" />
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-transparent group-hover:from-purple-500/20 transition-all duration-500" />
              </div>

              {/* Project content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-indigo-400 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-purple-500/10 text-purple-300 border border-purple-500/20 text-xs hover:bg-purple-500/20 hover:border-purple-500/40 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 backdrop-blur-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
