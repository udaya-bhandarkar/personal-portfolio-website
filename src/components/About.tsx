import { Calendar, Award, BadgeCheck } from "lucide-react";
import aboutImage from 'figma:asset/50f1bab22d0067b9d76ef445c7ef90df1b22affb.png';
import { Journey } from "./Journey";

export function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left - Profile image and stats */}
          <div className="space-y-6 sm:space-y-8 md:mt-12">
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-30"></div>
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500/30 bg-gradient-to-br from-blue-900/50 to-cyan-900/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={aboutImage} 
                      alt="About" 
                      className="w-full h-full object-cover object-[center_20%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - About Content */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4">About me</h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Hi, I'm Udaya, a Data Engineer who somehow enjoys both SQL queries and product meetings. At Genpact, I sped up data pipelines, built dashboards execs politely nod at, and migrated systems older than my laptop.
              </p>
              <p className="text-gray-300 leading-relaxed mt-3 sm:mt-4 text-sm sm:text-base">
                I've also tried Product Management, where leading an 8-member team taught me that "a small change" is never small.
              </p>
              <p className="text-gray-300 leading-relaxed mt-3 sm:mt-4 text-sm sm:text-base">
                I like building things, like DebtFree, a smart money buddy for international students.
              </p>
              <p className="text-gray-300 leading-relaxed mt-3 sm:mt-4 text-sm sm:text-base">
                I'm currently pursuing my MSc in Business Analytics at Warwick Business School, balancing data, deadlines, and far too much coffee.
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats and Journey - aligned row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-8">
          {/* Stat boxes */}
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-2 max-w-sm mt-4 sm:mt-6">
              <div className="bg-blue-950/50 backdrop-blur-sm rounded-lg p-2 sm:p-2.5 border border-blue-500/20 flex flex-col items-center justify-center aspect-square">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mb-1 sm:mb-1.5" />
                <div className="text-base sm:text-lg text-white">2+</div>
                <div className="text-xs text-gray-400 text-center leading-tight">Years Experience</div>
              </div>
              <div className="bg-blue-950/50 backdrop-blur-sm rounded-lg p-2 sm:p-2.5 border border-blue-500/20 flex flex-col items-center justify-center aspect-square">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mb-1 sm:mb-1.5" />
                <div className="text-base sm:text-lg text-white">10+</div>
                <div className="text-xs text-gray-400 text-center leading-tight">Projects Done</div>
              </div>
              <div className="bg-blue-950/50 backdrop-blur-sm rounded-lg p-2 sm:p-2.5 border border-blue-500/20 flex flex-col items-center justify-center aspect-square">
                <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mb-1 sm:mb-1.5" />
                <div className="text-base sm:text-lg text-white">8+</div>
                <div className="text-xs text-gray-400 text-center leading-tight">Certifications</div>
              </div>
            </div>
          </div>
          
          {/* Journey component */}
          <div>
            <Journey />
          </div>
        </div>
      </div>
    </section>
  );
}