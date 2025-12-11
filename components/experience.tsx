import { Briefcase, Trophy, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// --- Data definitions (Kept identical as they are clean) ---
const experiences = [
  // ... (Your experiences data)
  {
    title: "Web Development Intern",
    company: "Zidio Development",
    duration: "Apr 2025 - Jun 2025",
    description: "Built and shipped responsive web features, integrating modern UI patterns and performance-focused best practices.",
    highlights: [
      "Developed reusable UI components and improved lighthouse scores.",
      "Optimized API consumption with caching and debouncing to reduce payloads.",
      "Collaborated with designers to deliver pixel-perfect, accessible pages.",
    ],
  },
  {
    title: "Research Intern (Aerospace / CFD)",
    company: "Indian Space Research Organisation (ISRO)",
    duration: "Jan 2025 - Feb 2025",
    description: "Ran simulations in Finite Element Analysis and Computational Fluid Dynamics, contributing to research validation.",
    highlights: [
      "Reviewed and interpreted research papers to support experimental validation.",
      "Produced simulation data and analysis reports for budgeting and feasibility.",
      "Improved technical accuracy of CFD experiments through iterative validation.",
    ],
  },
  {
    title: "Software Engineering Virtual Experience",
    company: "JPMorgan Chase & Co. (Forage)",
    duration: "2025",
    description: "Completed job-simulation tasks covering backend integration and system design for a microservices stack.",
    highlights: [
      "Project setup with REST controllers and service layers.",
      "Kafka integration with H2 and REST API workflows.",
      "Built and tested REST endpoints for data ingestion and retrieval.",
    ],
  },
]

const education = [
  // ... (Your education data)
  {
    title: "B.Tech in AI & Machine Learning",
    company: "Shri Ramdeobaba College of Engineering, Nagpur",
    duration: "2023 - Present",
    description: "Pursuing Bachelor's degree with focus on Artificial Intelligence and Machine Learning. Current CGPA: 8.2",
  },
  {
    title: "12th State Board",
    company: "Yeshwant Mahavidyalaya, Nanded",
    duration: "2021 - 2023",
    description: "70%",
  },
  {
    title: "10th CBSE Board",
    company: "Nagarjuna Public School, Nanded",
    duration: "2021",
    description: "87%",
  },
]

const achievements = [
  // ... (Your achievements data)
  {
    title: "BLOGDAG’25 Finalist",
    issuer: "BlockDAG Hackathon",
    description:
      "Problem: Web3 platforms face rising fake accounts and impersonation that lead to scams and loss of trust. Solution: Built AutoShield, an AI-powered Web3 identity verification system that analyzes profiles off-chain with ML, issues cryptographically signed attestations, and anchors them on-chain via Solidity contracts on BlockDAG. Target impact: ~70% reduction in fake accounts and ~50% reduction in social-engineering exposure.",
    link: "https://auto-shield-hackathon.vercel.app/",
  },
  {
    title: "Competitive Programming",
    issuer: "LeetCode",
    description: "Solved 600+ problems; improved DSA and problem-solving mastery.",
  },
  {
    title: "Multi-Hackathon Participation",
    issuer: "Various",
    description:
      "Adobe Digital Analyst, Build with India, ComSoc HackX, AI for Quality, GDG Solution Challenge, Google Cloud Certified PCA, Bhartiya Antariksh Hackathon 2025 (ISRO).",
  },
]

// --- Reusable Card Component for Experience/Education ---
// This abstracts the complex styling logic to keep the main JSX cleaner
const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  highlights,
  badgeContent,
  cardColor = 'purple', // 'purple' or 'green'
}) => {
  
  // Dynamic color classes based on cardColor prop
  const colorMap = {
    purple: {
      from: 'from-purple-500', 
      to: 'to-indigo-500', 
      text: 'text-purple-400', 
      textHover: 'group-hover:from-purple-400 group-hover:to-indigo-400',
      shadow: 'hover:shadow-[0_12px_48px_rgba(139,92,246,0.3),0_0_0_1px_rgba(255,255,255,0.1)]'
    },
    green: {
      from: 'from-green-500', 
      to: 'to-emerald-500', 
      text: 'text-green-400', 
      textHover: 'group-hover:from-green-400 group-hover:to-emerald-400',
      shadow: 'hover:shadow-[0_12px_48px_rgba(34,197,94,0.3),0_0_0_1px_rgba(255,255,255,0.1)]'
    },
  };

  const colors = colorMap[cardColor] || colorMap.purple;

  return (
    <div
      className={`group relative p-6 rounded-2xl bg-gradient-to-br bg-[#1e293b]/50 border border-gray-700/50 overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)] ${colors.shadow}`}
    >
      {/* Animated gradient border */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.from} ${colors.to} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
      <div className={`absolute inset-[1px] rounded-2xl bg-gradient-to-br ${colors.from}/20 ${colors.to}/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h4 className={`text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${colors.textHover} transition-all duration-300`}>
              {title}
            </h4>
            <p className={`${colors.text} text-sm group-hover:text-opacity-80 transition-colors`}>{company}</p>
          </div>
          {duration && (
            <Badge variant="outline" className={`text-xs text-gray-400 border-gray-600 shrink-0 group-hover:border-opacity-50 group-hover:${colors.text} transition-colors`}>
              <Calendar className="h-3 w-3 mr-1" />
              {duration}
            </Badge>
          )}
        </div>

        {description && (
            <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                {description}
                {badgeContent && (
                    <Badge variant="outline" className="ml-2 text-xs text-gray-400 border-gray-600">
                        {badgeContent}
                    </Badge>
                )}
            </p>
        )}
        
        {/* Highlights List (only for experience) */}
        {highlights && highlights.length > 0 && (
          <ul className="space-y-2">
            {highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                <span className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text', 'bg')} mt-2 shrink-0 group-hover:bg-opacity-80 group-hover:shadow-lg group-hover:shadow-current/50 transition-all`} />
                {highlight}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {/* Decorative corner accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.from} ${colors.to} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500 blur-2xl`} />
    </div>
  )
}

// --- Achievement Card Component (simplified) ---
const AchievementCard = ({ title, issuer, description, link }) => (
    <div
        className="group relative p-6 rounded-2xl bg-gradient-to-br bg-[#1e293b]/50 border border-gray-700/50 overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_48px_rgba(34,197,94,0.3),0_0_0_1px_rgba(255,255,255,0.1)]"
    >
        {/* Animated gradient border (Green) */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
        
        <div className="relative z-10 space-y-1">
            <h4 className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">
                {title}
            </h4>
            <p className="text-green-400 text-sm group-hover:text-green-300 transition-colors">{issuer}</p>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{description}</p>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 text-sm font-medium transition-colors"
                >
                    View Details &rarr;
                </a>
            )}
        </div>
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500 blur-2xl" />
    </div>
)


// --- Main Component ---
export default function Experience() {
  return (
    <section id="experience" className="pt-24 pb-16 scroll-mt-20" aria-label="Experience and Education">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Experience & Education</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My professional internships, academic journey, and competitive achievements.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN: PROFESSIONAL EXPERIENCE - timeline style */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Professional Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-10">
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-4 top-6 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/60 to-indigo-500/30" />
                  )}
                  <div className="absolute left-1 top-4">
                    <div className="w-6 h-6 rounded-full bg-purple-600/90 flex items-center justify-center shadow-lg shadow-purple-500/40">
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    </div>
                  </div>

                  <div className="flex-1 bg-[#11182d] border border-gray-800/70 rounded-xl p-6 shadow-lg hover:shadow-purple-500/20 transition duration-500">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <h4 className="text-2xl font-semibold text-white">{exp.title}</h4>
                      <div className="flex items-center gap-2 text-purple-300 font-medium">
                        <Calendar size={18} />
                        {exp.duration}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 mb-3">
                      <span className="font-semibold text-white">{exp.company}</span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed text-[15px]">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights?.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-[15px]">
                          <span className="mt-1 inline-block w-2 h-2 rounded-full bg-purple-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Education section below experience */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <ExperienceCard
                    key={index}
                    title={edu.title}
                    company={edu.company}
                    duration={edu.duration}
                    description={edu.description}
                    badgeContent={edu.duration}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ACHIEVEMENTS / CERTIFICATIONS */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Trophy className="h-6 w-6 text-green-400" />
              <h3 className="text-xl font-bold text-white">Certifications & Achievements</h3>
            </div>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  title={achievement.title}
                  issuer={achievement.issuer}
                  description={achievement.description}
                  link={achievement.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}