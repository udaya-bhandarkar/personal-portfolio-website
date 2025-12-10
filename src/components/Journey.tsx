import { GraduationCap, Briefcase, TrendingUp } from "lucide-react";

export function Journey() {
  const milestones = [
    {
      icon: GraduationCap,
      title: "B.Tech Electrical & Electronics Engineering",
      subtitle: "Manipal Institute of Technology"
    },
    {
      icon: Briefcase,
      title: "Data Engineer",
      subtitle: "Genpact"
    },
    {
      icon: TrendingUp,
      title: "MSc Business Analytics",
      subtitle: "Warwick Business School"
    }
  ];

  return (
    <div className="relative mt-6">
      {/* Horizontal line */}
      <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/30 via-blue-500/50 to-blue-500/30 hidden md:block"></div>
      
      {/* Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3">
        {milestones.map((milestone, index) => (
          <div key={index} className="flex flex-col items-center text-center relative">
            {/* Icon circle */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-3 relative z-10 shadow-lg shadow-blue-500/50 hover:scale-110 transition-transform">
              <milestone.icon className="w-7 h-7 text-white" />
            </div>
            
            {/* Title */}
            <h3 className="text-white text-sm mb-1 px-2">{milestone.title}</h3>
            
            {/* Subtitle */}
            <p className="text-gray-400 text-xs px-2">{milestone.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}