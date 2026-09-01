import { PageTransition } from "../components/PageTransition";
import { InteractiveStars } from "../components/InteractiveStars";
import { Button } from "../components/Button";
import { ScrollIndicator } from "../components/ScrollIndicator";
import { FloatingContactCTA } from "../components/FloatingContactCTA";
import { motion } from "motion/react";

export default function Home() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageTransition className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden pt-6 pb-14 lg:py-0">
        <InteractiveStars colors={["255, 255, 255", "251, 243, 16"]} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
            
            {/* Copy - Left side */}
            <div className="lg:col-span-7 flex flex-col items-start justify-center z-20 pt-4 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                {/* Small indicator bar with HELLO */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
                  <div className="w-6 sm:w-8 h-0.5 bg-accent"></div>
                  <span className="text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase text-muted-foreground">
                    Hello
                  </span>
                </div>

                <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground/90 mb-1">
                  I’M
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-accent leading-[0.95] mb-2 sm:mb-3">
                  JATIN SINGH
                </h1>

                <h2 className="text-lg sm:text-2xl md:text-[28px] lg:text-[30px] font-display font-bold text-foreground tracking-tight mb-4 sm:mb-5">
                  A FINANCE PROFESSIONAL
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-normal max-w-xl leading-relaxed mb-6 sm:mb-8">
                  Specializing in Equity Research & Capital Markets.
                </p>

                <div className="w-full sm:w-auto">
                  <Button to="/my-work" variant="primary" icon="arrow-right" className="w-full sm:w-auto">
                    VIEW MY WORK
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Image - Right side (Seamless, frameless portrait blended into background, appears simultaneously) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 relative flex items-end justify-center lg:justify-end w-full mt-2 lg:mt-0"
            >
              {/* Subtle ambient backglow */}
              <div className="absolute inset-0 bg-radial from-accent/10 via-transparent to-transparent blur-2xl -z-10 pointer-events-none scale-110"></div>
              
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl flex items-end justify-center lg:justify-end scale-100 sm:scale-105 lg:scale-110 origin-bottom">
                <img 
                  src="/img 1.png?v=4" 
                  alt="Jatin Singh - Finance Professional" 
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  className="w-full max-h-[52vh] sm:max-h-[64vh] lg:max-h-[82vh] object-contain object-bottom grayscale hover:grayscale-0 transition-all duration-700 select-none drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                    e.currentTarget.className = "w-full max-h-[52vh] sm:max-h-[64vh] lg:max-h-[82vh] object-contain object-bottom grayscale hover:grayscale-0 transition-all duration-700";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Cue (bottom centered) */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors group cursor-pointer z-20"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase">About Me</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down group-hover:text-accent transition-colors"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </motion.div>
        </motion.button>
      </section>

      {/* Floating Scroll Indicator on right */}
      <ScrollIndicator />

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 relative z-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            
            {/* Heading Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-2 block">Who am i</span>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold relative inline-block">
                  HELLO
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/30 -skew-x-12 -z-10"></div>
                </h2>
                <div className="mt-8 hidden lg:block">
                  <svg width="100%" height="40" viewBox="0 0 200 40" fill="none" stroke="currentColor" strokeWidth="2" className="text-border">
                    <path d="M0 20 Q 25 0, 50 20 T 100 20 T 150 20 T 200 20" strokeLinecap="round"/>
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <p>
                  <strong className="text-foreground font-semibold">I’m Jatin, 22</strong> - working in equity research and spending most of my time doing what I enjoy most: understanding businesses.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p>
                  For me, equity research isn’t just about reading financial statements or watching stock prices. It’s about figuring out why a business works, what could change its trajectory, and whether the story the market is telling actually matches the business underneath.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p>
                  I like going down the rabbit hole - reading & studying industries, tracking management commentary, following competitive developments, and connecting seemingly small details to the bigger picture. Because markets are full of noise. <span className="text-foreground">Good research starts by knowing what to ignore.</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-muted p-6 sm:p-8 rounded-2xl border border-border"
              >
                <p className="mb-3 sm:mb-4">
                  <strong className="text-foreground">The Challenge:</strong> Information is everywhere. Clarity isn’t.
                </p>
                <p>
                  <strong className="text-foreground">My Approach:</strong> Ask better questions, research with discipline, and turn complex business stories into insights that are simple, useful, and grounded in facts.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-square md:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted order-2 md:order-1 relative"
              >
                <img 
                  src="/img%202.jpg?v=1" 
                  alt="Jatin working" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800";
                  }}
                />
             </motion.div>
             <div className="order-1 md:order-2 flex flex-col items-start gap-4 sm:gap-6">
                <h3 className="text-2xl sm:text-3xl font-display font-semibold">Ready to dive deeper?</h3>
                <p className="text-muted-foreground text-base sm:text-lg">Explore my detailed research reports, mutual fund analyses, and financial models.</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                  <Button to="/resume" variant="primary" icon="arrow-right" className="w-full sm:w-auto">
                    View Resume
                  </Button>
                  <Button to="/my-work" variant="outline" icon="arrow-right" className="w-full sm:w-auto">
                    Explore Analysis
                  </Button>
                </div>
             </div>
          </div>
        </div>
      </section>

      <FloatingContactCTA />
    </PageTransition>
  );
}
