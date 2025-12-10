import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {
  const navItems = ["Home", "Services", "Testimonials", "Contact Us"];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (item: string) => {
    const sectionId = item.toLowerCase().replace(' ', '-');
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 100; // Height buffer to prevent overlap
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
          padding: 12px 20px;
          transition: color 0.3s ease;
          cursor: pointer;
        }
        
        .nav-link:hover {
          color: #3b82f6;
        }
      `}</style>
      
      <motion.div 
        className={`transition-all duration-300 rounded-full ${
          isScrolled 
            ? 'bg-slate-900/80 backdrop-blur-md border-b border-blue-500/30 shadow-lg shadow-blue-500/10' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          {/* Nav Links */}
          {navItems.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(item)}
              className="nav-link text-white uppercase tracking-wider text-sm whitespace-nowrap"
            >
              {item === "Contact Us" ? "Contact Me" : item}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}