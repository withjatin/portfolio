import { PageTransition } from "../components/PageTransition";
import { InteractiveStars } from "../components/InteractiveStars";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function GetInTouch() {
  return (
    <PageTransition className="w-full flex-1 flex flex-col justify-center">
      <section 
        className="w-full flex-1 min-h-[calc(100vh-5rem)] h-auto lg:h-[calc(100vh-5rem)] lg:max-h-[calc(100vh-5rem)] bg-foreground text-background flex flex-col justify-between relative overflow-hidden px-4 sm:px-6 lg:px-12 py-6 sm:py-8"
        style={{
          backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(251, 243, 16, 0.08) 0%, transparent 50%)'
        }}
      >
        {/* Animated interactive stars (Black & Yellow for light canvas) */}
        <InteractiveStars colors={["20, 20, 20", "251, 243, 16"]} />

        <div className="max-w-6xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10 my-auto py-4 lg:py-0">
          
          {/* Left Column: Heading & Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Curvy square background for 'Work with the best' */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-background text-foreground border border-accent/40 shadow-sm mb-3 w-fit">
              <span className="w-2 h-2 rounded-sm bg-accent rotate-45 shrink-0"></span>
              <span className="text-accent text-xs sm:text-sm font-bold tracking-wider uppercase">
                Work with the best
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-background leading-[0.95] tracking-tight mb-4 sm:mb-6">
              LET’S CONNECT!
            </h1>

            {/* Mobile / WhatsApp & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mb-4 sm:mb-6">
              <div className="bg-background/5 border border-background/10 rounded-xl p-3.5">
                <p className="text-background/50 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-1">Mobile / WhatsApp</p>
                <a 
                  href="https://wa.me/918198831306" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group inline-flex items-center gap-2 text-sm sm:text-base md:text-lg hover:text-accent transition-colors font-medium"
                >
                  +91 81988 31306
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-accent shrink-0" />
                </a>
              </div>

              <div className="bg-background/5 border border-background/10 rounded-xl p-3.5">
                <p className="text-background/50 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-1">Email</p>
                <a 
                  href="mailto:speaktojatinsingh@gmail.com" 
                  className="group inline-flex items-center gap-2 text-sm sm:text-base md:text-lg hover:text-accent transition-colors font-medium break-all"
                >
                  speaktojatinsingh@gmail.com
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-accent shrink-0" />
                </a>
              </div>
            </div>

            {/* Social / Direct Connect Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a
                href="https://wa.me/918198831306"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2 rounded-full border border-background/20 text-xs sm:text-sm font-medium hover:bg-background hover:text-foreground hover:scale-105 transition-all shadow-sm"
              >
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/thejatinsingh/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2 rounded-full border border-background/20 text-xs sm:text-sm font-medium hover:bg-background hover:text-foreground hover:scale-105 transition-all shadow-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/thejatinsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2 rounded-full border border-background/20 text-xs sm:text-sm font-medium hover:bg-background hover:text-foreground hover:scale-105 transition-all shadow-sm"
              >
                X (Twitter)
              </a>
              <a
                href="https://substack.com/@grindwithjatin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2 rounded-full border border-background/20 text-xs sm:text-sm font-medium hover:bg-background hover:text-foreground hover:scale-105 transition-all shadow-sm"
              >
                Substack
              </a>
            </div>
          </motion.div>

          {/* Right Column: Portrait Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-center order-1 lg:order-2"
          >
            <div className="w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden bg-background/5 p-2 border border-background/10 shadow-2xl">
              <img 
                src="/Page%205.jpeg" 
                alt="Jatin Singh - Let's Connect" 
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700 select-none"
                onError={(e) => {
                  e.currentTarget.src = "/Page 5.jpeg";
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom copyright line inside frame */}
        <div className="w-full max-w-6xl mx-auto pt-3 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center text-xs text-background/40 gap-1.5 relative z-10">
          <p>© {new Date().getFullYear()} Jatin Singh. All rights reserved.</p>
          <p className="text-accent/80 font-medium">
            Equity Research & Capital Markets
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
