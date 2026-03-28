import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import teslaImage from 'figma:asset/5e888e59e48978fbc59a8cc41ea7ed06b23bf1b3.png';
import { useState } from "react";
import { SiDatabricks, SiApachespark, SiNeo4J, SiPython } from "react-icons/si";
import { FaFileExcel } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { TbChartDots3 } from "react-icons/tb";

/* ── Inline Tableau logo (not in react-icons v5) ── */
function TableauIcon({ size = 18, color = "#E97627", className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M11.654.174V2.377H9.682v.58h1.972V5.16h.696V2.957h1.97v-.58h-1.97V.174h-.696zm6.03 2.262l-.002 1.623-1.53-.027v.534l1.53-.004v1.627h.59V4.566l1.53.004v-.534l-1.53.027V2.436h-.59zM4.986 2.436v1.623l-1.53-.027v.534l1.53-.004v1.627h.588V4.566l1.53.004v-.534l-1.53.027V2.436h-.588zm11.76 4.074v2.563H14.15v.835h2.595v2.565h.843V9.908h2.597v-.835h-2.597V6.51h-.843zM.91 6.627v2.563H-1.686v.835H.91v2.565h.842V10.025H4.35v-.835H1.752V6.627H.91zm11.653-.117v3.283H9.682v1.06h2.881v3.286h1.078V10.853h2.882v-1.06H13.64V6.51h-1.078zm-6.03 2.262v1.623l-1.53-.027v.534l1.53-.004v1.627h.588v-1.623l1.53.004v-.534l-1.53.027V8.772h-.588zm16.136-.003v1.623l-1.53-.027v.534l1.53-.004V12.522h.588v-1.623l1.53.004v-.534l-1.53.027V8.769h-.588zm-8.067 5.108v2.563h-2.596v.835h2.596v2.565h.843v-2.565h2.596v-.835h-2.596v-2.563h-.843zm-6.03 2.262v1.623l-1.53-.027v.534l1.53-.004v1.627h.588v-1.623l1.53.004v-.534l-1.53.027v-1.627h-.588zm12.06 0v1.623l-1.53-.027v.534l1.53-.004v1.627h.59v-1.623l1.53.004v-.534l-1.53.027v-1.627h-.59zm-6.032 4.33v2.2H12.35v.58h1.972v2.2h.696v-2.2h1.97v-.58h-1.97v-2.2h-.696z" />
    </svg>
  );
}

import tflImage from '../assets/tfl_image.png';
import { ComingSoon } from "./ComingSoon";
import { AnimatePresence } from "motion/react";

/* ── Skill → icon + brand colour ── */
const skillIcons: Record<string, { icon: React.ComponentType<{ size?: number; color?: string; className?: string }>; color: string }> = {
  "Excel":            { icon: FaFileExcel,   color: "#217346" },
  "Python":           { icon: SiPython,      color: "#3776AB" },
  "Data Analysis":    { icon: TbChartDots3,  color: "#60a5fa" },
  "Tableau":        { icon: TableauIcon,   color: "#E97627" },
  "Azure":          { icon: VscAzure,      color: "#0078D4" },
  "Databricks":     { icon: SiDatabricks,  color: "#FF3621" },
  "PySpark":        { icon: SiApachespark, color: "#E25A1C" },
  "Neo4j":          { icon: SiNeo4J,       color: "#008CC1" },
};

export function Projects() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const projects = [
    {
      title: "Tesla Financial Analysis",
      category: "Data Analysis",
      description: "Time-series analysis of Tesla's SEC 10-K filings (2018-2020) assessing financial health and operational efficiency",
      image: teslaImage,
      tags: ["Excel", "Python", "Tableau"],
      githubUrl: "https://github.com/udaya-bhandarkar/financial_analysis",
      link: "https://tesla-financial-analysis.vercel.app/"
    },
    {
      title: "Event-Driven Transit Routing Tool for London Tube",
      category: "Data Engineering",
      description:
        "Cloud-native streaming pipeline processing live Transport for London (TfL) API telemetry to detect network disruptions and predict localized bottlenecks.",
      image: tflImage,
      tags: ["Azure", "Databricks", "PySpark", "Neo4j"],
      githubUrl: "https://github.com/udaya-bhandarkar/tfl-transit-balancer"
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
                {/* Skill logos */}
                <div className="flex gap-3 flex-wrap items-center">
                  {project.tags.map((tag) => {
                    const skill = skillIcons[tag];
                    if (!skill) return null;
                    const Icon = skill.icon;
                    return (
                      <div
                        key={tag}
                        className="skill-icon-wrapper"
                        title={tag}
                      >
                        <Icon size={18} color={skill.color} className="drop-shadow-sm" />
                        <span className="skill-icon-tooltip">
                          {tag}
                        </span>
                      </div>
                    );
                  })}
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