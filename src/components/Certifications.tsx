import { Award, CheckCircle, Layers, Cloud } from "lucide-react";

export function Certifications() {
  const certifications = [
    { 
      name: "Databricks Certified Data Analyst Associate", 
      issuer: "Databricks", 
      year: "",
      icon: Layers,
      link: "https://credentials.databricks.com/1e62503c-afae-4ac8-9317-4c1f8c652f64#acc.LH7zpKvT",
      ariaLabel: "View Databricks Certified Data Analyst Associate credential"
    },
    { 
      name: "Databricks Certified Data Engineer Associate", 
      issuer: "Databricks", 
      year: "",
      icon: Layers,
      link: "https://credentials.databricks.com/5cdfff42-e3b8-493e-876b-ecc33f0bf02e#acc.oJgN1nXt",
      ariaLabel: "View Databricks Certified Data Engineer Associate credential"
    },
    { 
      name: "Microsoft Certified Azure Fundamentals (AZ-900)", 
      issuer: "Microsoft", 
      year: "",
      icon: Cloud,
      link: "https://learn.microsoft.com/en-us/users/UdayaBhandarkar-9330/credentials/8F59905C7740EA54?ref=https%3a%2f%2fwww.linkedin.com%2f",
      ariaLabel: "View Microsoft Certified Azure Fundamentals AZ-900 credential"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4">Certifications</h2>
          <p className="text-gray-400 text-sm sm:text-base">Professional certifications and credentials</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={cert.ariaLabel}
              className="bg-blue-950/30 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer block"
            >
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <cert.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-white leading-tight text-sm sm:text-base">{cert.name}</h3>
                  {cert.issuer && (
                    <p className="text-xs sm:text-sm text-gray-400">
                      {cert.issuer}{cert.year && `, ${cert.year}`}
                    </p>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}