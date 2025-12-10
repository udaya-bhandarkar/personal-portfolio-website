import { Code2, Database, Terminal, Cloud, Layers, BarChart3, FileSpreadsheet, Presentation, Figma, FileCode, Palette } from "lucide-react";

// Git logo component
function GitIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 92 92" className={className}>
      <path fill="currentColor" d="M90.156 41.965L50.036 1.848a5.913 5.913 0 0 0-8.368 0l-8.332 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.043 7.043 0 0 1 1.673 7.277l10.183 10.184a7.026 7.026 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.045 7.045 0 0 1-9.961 0 7.038 7.038 0 0 1-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.034 7.034 0 0 1 2.308-1.539V33.926a7.001 7.001 0 0 1-2.308-1.535 7.049 7.049 0 0 1-1.516-7.7L29.242 14.273 1.734 41.777a5.918 5.918 0 0 0 0 8.371l40.119 40.118a5.914 5.914 0 0 0 8.371 0l39.932-39.934a5.925 5.925 0 0 0 0-8.367"/>
    </svg>
  );
}

export function Skills() {
  const skills = [
    { icon: Code2, name: "Python" },
    { icon: Database, name: "SQL" },
    { icon: Terminal, name: "R" },
    { icon: Cloud, name: "AWS" },
    { icon: Layers, name: "Databricks" },
    { icon: BarChart3, name: "Tableau" },
    { icon: FileSpreadsheet, name: "Excel" },
    { icon: Presentation, name: "PowerPoint" },
    { icon: Figma, name: "Figma" },
    { icon: FileCode, name: "HTML" },
    { icon: Palette, name: "CSS" },
    { icon: GitIcon, name: "Git" }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white mb-4">Skills</h2>
          <p className="text-gray-400">Technologies and tools I work with</p>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 max-w-sm sm:max-w-md md:max-w-4xl lg:max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-blue-950/30 backdrop-blur-sm rounded-lg p-2 sm:p-3 md:p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:transform hover:scale-105 aspect-square"
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 sm:gap-2.5 md:gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <skill.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-5 md:h-5 text-blue-400" />
                </div>
                <h3 className="text-white text-xs sm:text-sm md:text-xs text-center leading-tight break-words w-full px-0.5">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}