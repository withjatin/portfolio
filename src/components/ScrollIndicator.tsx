import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how close the user is to the bottom
      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 120;
      
      if (scrollPosition >= threshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight * 0.75,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={scrollToNext}
          aria-label="Scroll down"
          title="Scroll down"
        >
          {/* Mouse body */}
          <div className="w-6 h-10 md:w-7 md:h-11 rounded-full border-2 border-foreground/70 group-hover:border-accent bg-background/80 backdrop-blur-sm flex items-start justify-center p-1.5 shadow-lg transition-colors">
            {/* Animated wheel */}
            <motion.div
              animate={{
                y: [0, 8, 0],
                opacity: [1, 0.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-2.5 bg-accent rounded-full"
            />
          </div>

          {/* Animated Chevrons */}
          <motion.div
            animate={{
              y: [0, 4, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="text-foreground/70 group-hover:text-accent transition-colors"
          >
            <ChevronDown size={18} />
          </motion.div>

          {/* Vertical scroll label (hidden on small mobile) */}
          <span className="hidden md:block [writing-mode:vertical-rl] text-[10px] uppercase font-mono tracking-widest text-muted-foreground group-hover:text-accent transition-colors select-none">
            Scroll
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
