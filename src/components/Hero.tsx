import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import avatarImage from 'figma:asset/fe7a74385176214b31a1195f06afaa8ec88ed6ce.png';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { toast } from "sonner@2.0.3";

export function Hero() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = "bhandarkar.udaya.2001@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      toast.success("Email copied to clipboard!");
    }).catch(() => {
      toast.error("Failed to copy email");
    });
  };

  // Mouse position tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set((e.clientX - centerX) / 30);
        mouseY.set((e.clientY - centerY) / 30);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Icon data with positions on circular orbit and depth variations
  const techIcons = [
    {
      id: 0,
      angle: 0,
      depth: 1.05, // Slightly farther
      orbitRadius: 200, // Reduced for closer spacing
      driftRadius: 5,
      driftSpeed: 5.5, // Balanced speed
      driftAngleOffset: 0,
      breathingDuration: 4.5, // Balanced speed
      depthDuration: 5.2,
      component: (
        <svg width="50" height="50" viewBox="0 0 32 32">
          <path fill="#3b82f6" d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v.96H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912H8.33v-3.361s-.235-4.013 3.942-4.013h6.669s3.815.06 3.815-3.688V5.765s.587-3.665-6.871-3.665zm-3.732 2.12a1.214 1.214 0 1 1-.001 2.428 1.214 1.214 0 0 1 .001-2.428z" />
          <path fill="#60a5fa" d="M16.115 29.9c7.1 0 6.651-3.07 6.651-3.07v-3.19h-6.751v-.96h9.441S30 23.2 30 15.995s-4.013-6.912-4.013-6.912H23.67v3.361s.235 4.013-3.942 4.013h-6.67s-3.815-.06-3.815 3.688v6.09s-.587 3.665 6.872 3.665zm3.732-2.12a1.214 1.214 0 1 1 .001-2.428 1.214 1.214 0 0 1-.001 2.428z" />
        </svg>
      ),
      label: "Python"
    },
    {
      id: 1,
      angle: 60,
      depth: 0.95, // Closer
      orbitRadius: 200,
      driftRadius: 4.5,
      driftSpeed: 5.0, // Balanced speed
      driftAngleOffset: 120,
      breathingDuration: 5.0, // Balanced speed
      depthDuration: 4.6,
      component: (
        <svg width="55" height="55" viewBox="0 0 100 100" className="text-blue-400">
          <path
            d="M 25 20 Q 15 20 15 30 L 15 40 Q 15 45 10 45 Q 15 45 15 50 L 15 60 Q 15 70 25 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M 75 20 Q 85 20 85 30 L 85 40 Q 85 45 90 45 Q 85 45 85 50 L 85 60 Q 85 70 75 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="35" cy="45" r="3" fill="currentColor" />
          <circle cx="50" cy="45" r="3" fill="currentColor" />
          <circle cx="65" cy="45" r="3" fill="currentColor" />
        </svg>
      ),
      label: "Code"
    },
    {
      id: 2,
      angle: 120,
      depth: 1, // Normal depth
      orbitRadius: 200,
      driftRadius: 6,
      driftSpeed: 6.0, // Balanced speed
      driftAngleOffset: 240,
      breathingDuration: 4.2, // Balanced speed
      depthDuration: 5.8,
      component: (
        <svg width="55" height="55" viewBox="0 0 92 92">
          <path fill="#3b82f6" d="M90.156 41.965L50.036 1.848a5.913 5.913 0 0 0-8.368 0l-8.332 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.043 7.043 0 0 1 1.673 7.277l10.183 10.184a7.026 7.026 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.045 7.045 0 0 1-9.961 0 7.038 7.038 0 0 1-1.532-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.034 7.034 0 0 1 2.308-1.539V33.926a7.001 7.001 0 0 1-2.308-1.535 7.049 7.049 0 0 1-1.516-7.7L29.242 14.273 1.734 41.777a5.918 5.918 0 0 0 0 8.371l40.119 40.118a5.914 5.914 0 0 0 8.371 0l39.932-39.934a5.925 5.925 0 0 0 0-8.367" />
        </svg>
      ),
      label: "Git"
    },
    {
      id: 3,
      angle: 180,
      depth: 1.08, // Farther
      orbitRadius: 200,
      driftRadius: 4,
      driftSpeed: 4.6, // Balanced speed
      driftAngleOffset: 60,
      breathingDuration: 4.7, // Balanced speed
      depthDuration: 5.0,
      component: (
        <svg width="55" height="55" viewBox="0 0 384 512">
          <path fill="#3b82f6" d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z" transform="scale(0.85)" />
        </svg>
      ),
      label: "Database"
    },
    {
      id: 4,
      angle: 240,
      depth: 0.92, // Closer
      orbitRadius: 230, // Slightly increased for terminal/command-line icon
      driftRadius: 5.5,
      driftSpeed: 5.3, // Balanced speed
      driftAngleOffset: 180,
      breathingDuration: 4.0, // Balanced speed
      depthDuration: 4.8,
      component: (
        <svg width="55" height="55" viewBox="0 0 100 80" className="text-blue-400">
          <rect x="5" y="10" width="90" height="60" rx="4" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="3" />
          <circle cx="15" cy="20" r="2" fill="#ef4444" />
          <circle cx="23" cy="20" r="2" fill="#fbbf24" />
          <circle cx="31" cy="20" r="2" fill="#22c55e" />
          <path d="M 15 35 L 25 40 L 15 45" fill="none" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="32" y="38" width="15" height="4" fill="#60a5fa" />
          <line x1="15" y1="52" x2="45" y2="52" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
          <line x1="15" y1="58" x2="35" y2="58" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
        </svg>
      ),
      label: "Terminal"
    },
    {
      id: 5,
      angle: 300,
      depth: 1, // Normal depth
      orbitRadius: 200,
      driftRadius: 5,
      driftSpeed: 6.3, // Balanced speed
      driftAngleOffset: 300,
      breathingDuration: 4.6, // Balanced speed
      depthDuration: 5.4,
      component: (
        <svg width="50" height="50" viewBox="0 0 100 100" className="text-blue-400">
          <path d="M 30 35 L 20 50 L 30 65" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 70 35 L 80 50 L 70 65" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="55" y1="30" x2="45" y2="70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </svg>
      ),
      label: "API"
    }
  ];

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-8 sm:pt-20 pb-8 sm:pb-0">
      <style>{`
        .liquid-button {
          position: relative;
          overflow: hidden;
          z-index: 0;
          transition: 
            opacity 0.2s cubic-bezier(0.2, 0, 0.1, 1),
            transform 0.2s cubic-bezier(0.2, 0, 0.1, 1),
            box-shadow 0.4s ease,
            color 0.4s ease,
            background 0.4s ease;
          will-change: box-shadow, color, transform, opacity, background;
        }
        
        .liquid-button::before,
        .liquid-button::after {
          content: '';
          position: absolute;
          z-index: -1;
          pointer-events: none;
          top: 0;
          right: -50%;
          left: -50%;
          height: 0;
          padding-bottom: 200%;
          border-radius: 39%;
          transition: transform 0s cubic-bezier(0.2, 0, 0.1, 1) 0.4s, opacity 0.4s cubic-bezier(0.2, 0, 0.1, 1);
          opacity: 0;
        }
        
        .liquid-button::before {
          transform: translate3d(-10%, 4.8em, 0) rotate(330deg);
          background: linear-gradient(25deg, #60a5fa, rgba(96, 165, 250, 0));
        }
        
        .liquid-button::after {
          transform: translate3d(10%, 4.8em, 0) rotate(0deg);
          background: linear-gradient(70deg, rgba(59, 130, 246, 0.5), rgba(37, 99, 235, 0));
        }
        
        .liquid-button:hover::before,
        .liquid-button:hover::after {
          transition: transform 1.5s ease 0s, opacity 0.2s ease;
          opacity: 1;
        }
        
        .liquid-button:hover::before {
          transform: translate3d(-10%, -1em, 0) rotate(100deg);
        }
        
        .liquid-button:hover::after {
          transform: translate3d(10%, -1em, 0) rotate(180deg);
        }
        
        .liquid-button:hover {
          transition:
            opacity 0.2s cubic-bezier(0.2, 0, 0.1, 1),
            transform 0.2s cubic-bezier(0.2, 0, 0.1, 1),
            box-shadow 1.2s ease,
            color 1s ease,
            background 0.6s ease 0.4s;
          background: #3b82f6;
          box-shadow: 
            inset 0 0 0 0.1em #2563eb,
            0 0 1.75em rgba(59, 130, 246, 0.5);
        }
      `}</style>
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-300"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <h1 className="space-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl">
                  <span className="text-white">Hello, I'm</span>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl">
                  <span className="text-blue-500">Udaya Bhandarkar</span>
                </div>
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl pt-2">
                <span className="text-white">Data Engineer</span>
              </div>
            </div>

            <p className="text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
              Data Engineer specializing in scalable data platforms, real-time pipelines, and analytics solutions that empower smarter, faster business decisions.
            </p>

            <div className="flex gap-3 sm:gap-4 justify-center md:justify-start flex-wrap">
              <a href="/Udaya_Bhandarkar_Resume.pdf" download="Udaya_Bhandarkar_Resume.pdf">
                <Button className="liquid-button bg-blue-600 rounded-full px-4 sm:px-6 cursor-pointer text-sm sm:text-base">Download CV</Button>
              </a>
              <Button
                variant="outline"
                className="liquid-button border-blue-600 text-white hover:text-white hover:border-blue-500 rounded-full px-4 sm:px-6 bg-transparent cursor-pointer text-sm sm:text-base"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                My Projects
              </Button>
            </div>

            <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center md:justify-start">
              <a
                href="https://github.com/udaya-bhandarkar"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-button w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/udaya-bhandarkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-button w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
              <a href="#" className="liquid-button w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors" onClick={handleEmailClick}>
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </a>
            </div>

            {/* Profile image for mobile - shown only on mobile */}
            <div className="relative flex justify-center md:hidden pt-10">
              <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] flex items-center justify-center mx-auto">

                {/* Avatar container with glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

                  {/* Static glow background */}
                  <div
                    className="absolute inset-0 rounded-full -m-8"
                    style={{
                      background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0.3) 30%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)',
                    }}
                  />

                  {/* Main avatar */}
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                    <img
                      src={avatarImage}
                      alt="Profile"
                      className="w-[120%] h-[120%] object-cover object-center absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>

                {/* Tech icons on circular orbit */}
                <motion.div
                  style={{
                    scale: parallaxScale,
                  }}
                >
                  {techIcons.map((icon, index) => {
                    const radius = icon.orbitRadius * icon.depth * 0.7; // Smaller radius for mobile
                    const baseAngle = icon.angle;

                    return (
                      <motion.div
                        key={icon.id}
                        className="absolute cursor-pointer"
                        style={{
                          left: '50%',
                          top: '50%',
                          marginLeft: '-20px',
                          marginTop: '-20px',
                        }}
                        animate={{
                          // Position on the circle with orbital drift
                          x: [
                            Math.cos((baseAngle - 90) * Math.PI / 180) * radius + Math.cos(icon.driftAngleOffset * Math.PI / 180) * icon.driftRadius,
                            Math.cos((baseAngle - 90) * Math.PI / 180) * radius + Math.cos((icon.driftAngleOffset + 90) * Math.PI / 180) * icon.driftRadius,
                            Math.cos((baseAngle - 90) * Math.PI / 180) * radius + Math.cos((icon.driftAngleOffset + 180) * Math.PI / 180) * icon.driftRadius,
                            Math.cos((baseAngle - 90) * Math.PI / 180) * radius + Math.cos((icon.driftAngleOffset + 270) * Math.PI / 180) * icon.driftRadius,
                            Math.cos((baseAngle - 90) * Math.PI / 180) * radius + Math.cos(icon.driftAngleOffset * Math.PI / 180) * icon.driftRadius,
                          ],
                          y: [
                            Math.sin((baseAngle - 90) * Math.PI / 180) * radius + Math.sin(icon.driftAngleOffset * Math.PI / 180) * icon.driftRadius,
                            Math.sin((baseAngle - 90) * Math.PI / 180) * radius + Math.sin((icon.driftAngleOffset + 90) * Math.PI / 180) * icon.driftRadius,
                            Math.sin((baseAngle - 90) * Math.PI / 180) * radius + Math.sin((icon.driftAngleOffset + 180) * Math.PI / 180) * icon.driftRadius,
                            Math.sin((baseAngle - 90) * Math.PI / 180) * radius + Math.sin((icon.driftAngleOffset + 270) * Math.PI / 180) * icon.driftRadius,
                            Math.sin((baseAngle - 90) * Math.PI / 180) * radius + Math.sin(icon.driftAngleOffset * Math.PI / 180) * icon.driftRadius,
                          ],
                        }}
                        transition={{
                          duration: icon.driftSpeed,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        whileHover={{
                          scale: 1.12,
                          transition: { type: "spring", stiffness: 300, damping: 15 }
                        }}
                        onMouseEnter={() => setHoveredIcon(icon.id)}
                        onMouseLeave={() => setHoveredIcon(null)}
                      >

                        {/* Icon container with breathing, rotation, and depth */}
                        <motion.div
                          className="relative scale-90"
                          animate={{
                            // Breathing motion (98% → 104% → 98%)
                            scale: [0.98, 1.04, 0.98],
                            // Rotation oscillation (±2 degrees)
                            rotate: [-2, 2, -2],
                          }}
                          transition={{
                            scale: {
                              duration: icon.breathingDuration,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.3,
                            },
                            rotate: {
                              duration: 4.5 + index * 0.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.4,
                            },
                          }}
                        >
                          {icon.component}
                        </motion.div>

                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right content - Profile image for desktop */}
          <div className="relative hidden md:flex justify-center">
            <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center mx-auto">

              {/* Avatar container with glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

                {/* Static glow background */}
                <div
                  className="absolute inset-0 rounded-full -m-8"
                  style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0.3) 30%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)',
                  }}
                />

                {/* Main avatar */}
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                  <img
                    src={avatarImage}
                    alt="Profile"
                    className="w-[120%] h-[120%] object-cover object-center absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>

              {/* Tech icons on circular orbit */}
              <motion.div
                style={{
                  scale: parallaxScale,
                }}
              >
                {techIcons.map((icon, index) => {
                  const radius = icon.orbitRadius * icon.depth; // Apply depth variation to custom orbit radius
                  const baseAngle = icon.angle;

                  return (
                    <motion.div
                      key={icon.id}
                      className="absolute cursor-pointer"
                      style={{
                        left: '50%',
                        top: '50%',
                        marginLeft: '-25px',
                        marginTop: '-25px',
                      }}
                      animate={{
                        // Position on the circle with orbital drift
                        x: [
                          Math.cos((baseAngle - 90) * Math.PI / 180) * radius + Math.cos(icon.driftAngleOffset * Math.PI / 180) * icon.driftRadius,
                          Math.cos((baseAngle - 90) * Math.PI / 180) * radius + Math.cos((icon.driftAngleOffset + 90) * Math.PI / 180) * icon.driftRadius,
                          Math.cos((baseAngle - 90) * Math.PI / 180) * radius + Math.cos((icon.driftAngleOffset + 180) * Math.PI / 180) * icon.driftRadius,
                          Math.cos((baseAngle - 90) * Math.PI / 180) * radius + Math.cos((icon.driftAngleOffset + 270) * Math.PI / 180) * icon.driftRadius,
                          Math.cos((baseAngle - 90) * Math.PI / 180) * radius + Math.cos(icon.driftAngleOffset * Math.PI / 180) * icon.driftRadius,
                        ],
                        y: [
                          Math.sin((baseAngle - 90) * Math.PI / 180) * radius + Math.sin(icon.driftAngleOffset * Math.PI / 180) * icon.driftRadius,
                          Math.sin((baseAngle - 90) * Math.PI / 180) * radius + Math.sin((icon.driftAngleOffset + 90) * Math.PI / 180) * icon.driftRadius,
                          Math.sin((baseAngle - 90) * Math.PI / 180) * radius + Math.sin((icon.driftAngleOffset + 180) * Math.PI / 180) * icon.driftRadius,
                          Math.sin((baseAngle - 90) * Math.PI / 180) * radius + Math.sin((icon.driftAngleOffset + 270) * Math.PI / 180) * icon.driftRadius,
                          Math.sin((baseAngle - 90) * Math.PI / 180) * radius + Math.sin(icon.driftAngleOffset * Math.PI / 180) * icon.driftRadius,
                        ],
                      }}
                      transition={{
                        duration: icon.driftSpeed,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      whileHover={{
                        scale: 1.12,
                        transition: { type: "spring", stiffness: 300, damping: 15 }
                      }}
                      onMouseEnter={() => setHoveredIcon(icon.id)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >

                      {/* Icon container with breathing, rotation, and depth */}
                      <motion.div
                        className="relative"
                        animate={{
                          // Breathing motion (98% → 104% → 98%)
                          scale: [0.98, 1.04, 0.98],
                          // Rotation oscillation (±2 degrees)
                          rotate: [-2, 2, -2],
                        }}
                        transition={{
                          scale: {
                            duration: icon.breathingDuration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3,
                          },
                          rotate: {
                            duration: 4.5 + index * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.4,
                          },
                        }}
                      >
                        {icon.component}
                      </motion.div>

                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}