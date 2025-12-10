import { motion } from 'motion/react';
import { X, Rocket, Sparkles } from 'lucide-react';

interface ComingSoonProps {
  onClose: () => void;
}

export function ComingSoon({ onClose }: ComingSoonProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-md w-full mx-4"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Content card */}
        <div className="relative bg-gradient-to-br from-slate-900 to-blue-950/50 border border-blue-500/30 rounded-2xl p-8 sm:p-10 text-center overflow-hidden">
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                initial={{
                  x: Math.random() * 300,
                  y: Math.random() * 300,
                  opacity: 0,
                }}
                animate={{
                  y: [null, -400],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Rocket icon with animation */}
          <motion.div
            className="inline-block mb-6"
            animate={{
              y: [0, -10, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Rocket className="w-16 h-16 text-blue-500 relative" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Title with stagger animation */}
          <motion.h2
            className="text-3xl sm:text-4xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Coming Soon!
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-gray-400 text-base sm:text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            This project is currently under development. Check back soon for updates!
          </motion.p>

          {/* Sparkles decoration */}
          <div className="relative flex justify-center gap-4 mt-8">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-5 h-5 text-blue-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
