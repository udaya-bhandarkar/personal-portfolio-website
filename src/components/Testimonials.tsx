import { Star, Quote } from "lucide-react";
import madhukeshwarAvatar from "figma:asset/bfbce199aab1ed5db1cb5f612eaab0ef3168a01b.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials() {
  const testimonials = [
    {
      name: "Madhukeshwar",
      role: "Product Manager, General Electric",
      avatar: madhukeshwarAvatar,
      content:
        "Udaya is a skilled data architect and engineer with a clear focus on efficiency and business value. He proactively modernized our data stack, creating a scalable Databricks ETL pipeline that significantly boosted data collection efficiency. His architectural foresight in designing secure, multi-platform data flows using AWS S3, Airflow, and MFTN Server was a critical win for our operations team.",
      rating: 5,
    },
    {
      name: "Giridharan Murugesan",
      role: "Assistant Vice President, Genpact",
      avatar:
        "https://images.unsplash.com/photo-1758599543120-4e462429a4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc2MzU3MTEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      content:
        "During his time with our team, Udaya engineered scalable, automated data pipelines on AWS using best-in-class cloud practices. He writes clean, maintainable code and possesses a strong grasp of data modeling and workflow orchestration. His eagerness to learn and improve constantly stood out.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl text-white mb-3 sm:mb-4">
            Testimonials
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            What my clients say about my work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-950/30 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all relative flex flex-col h-full"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 text-blue-500/10" />

              <div className="flex gap-1 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed my-3 sm:my-4 flex-grow relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 pt-2 relative z-10">
                {index === 0 ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-blue-500/30"
                  />
                ) : (
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-blue-500/30 object-cover"
                  />
                )}
                <div>
                  <div className="text-white text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}