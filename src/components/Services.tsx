import { Database, BarChart3, Code2, Briefcase } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Creating responsive and interactive web applications with modern frameworks and technologies to deliver seamless user experiences."
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building scalable data infrastructure and ETL pipelines to modernize enterprise data systems and improve query performance."
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Creating interactive dashboards and delivering insights from complex datasets to drive data-driven decision making."
    },
    {
      icon: Briefcase,
      title: "Product Management",
      description: "Leading cross-functional teams to deliver platform upgrades, improving user engagement and operational efficiency."
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4">Services</h2>
          <p className="text-gray-400 text-sm sm:text-base">What I offer to bring your ideas to life</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-blue-950/40 to-blue-900/20 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-blue-500/20 hover:border-blue-500/60 transition-all hover:transform hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 transition-all"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl text-white mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}