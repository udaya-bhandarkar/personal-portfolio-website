import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import teslaImage from 'figma:asset/5e888e59e48978fbc59a8cc41ea7ed06b23bf1b3.png';
import { useState } from "react";
import { ComingSoon } from "./ComingSoon";
import { AnimatePresence } from "motion/react";

export function Projects() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const projects = [
    {
      title: "DebtFree - Finance App",
      category: "Product Design",
      description: "High-fidelity mobile debt management app featuring Visa-Sync Dynamic Personalization and Safe-to-Spend calculations",
      image: "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MzU4Nzk3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Figma", "React", "MongoDB"],
      githubUrl: "https://github.com/udaya-bhandarkar/debtfree"
    },
    {
      title: "Tesla Financial Analysis",
      category: "Data Analysis",
      description: "Time-series analysis of Tesla's SEC 10-K filings (2018-2020) assessing financial health and operational efficiency",
      image: teslaImage,
      tags: ["Excel", "Data Analysis", "Tableau"],
      githubUrl: "https://github.com/udaya-bhandarkar/financial_analysis",
      link: "https://tesla-financial-analysis.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4">My Projects</h2>
          <p className="text-gray-400 text-sm sm:text-base">Recent work that I'm proud of</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-blue-950/30 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all hover:transform hover:scale-105 flex flex-col"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent opacity-60"></div>
              </div>

              <div className="p-5 sm:p-6 space-y-2 sm:space-y-3 flex flex-col flex-1">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg sm:text-xl text-white">{project.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm flex-1">{project.description}</p>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm"
                    onClick={() => (project as any).link ? window.open((project as any).link, '_blank') : setShowComingSoon(true)}
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:text-white text-xs sm:text-sm"
                    onClick={() => project.githubUrl ? window.open(project.githubUrl, '_blank') : setShowComingSoon(true)}
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && <ComingSoon onClose={() => setShowComingSoon(false)} />}
      </AnimatePresence>
    </section>
  );
}