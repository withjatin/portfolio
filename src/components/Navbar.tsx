import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X, ArrowUpRight, Mail, Phone, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "My Work", path: "/my-work" },
  { name: "Resume", path: "/resume" },
  { name: "Articles", path: "/articles" },
  { name: "Get in Touch", path: "/get-in-touch" },
];

export function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check initial state
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-xl font-display font-bold tracking-tighter">
              Jatin Singh.
            </Link>

            {/* Desktop Nav - completely untouched */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent relative py-2",
                    location.pathname === item.path ? "text-accent" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Header Controls */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full hover:bg-muted active:scale-95 transition-all text-foreground"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-muted/60 text-foreground hover:bg-muted active:scale-95 transition-all flex items-center justify-center"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={22} className="text-accent" /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Full-Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          >
            {/* Nav links */}
            <div className="flex flex-col space-y-3 pt-4">
              <span className="text-xs font-mono font-semibold tracking-widest text-muted-foreground uppercase mb-2 pl-2">
                Navigation
              </span>
              {NAV_ITEMS.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-2xl transition-all duration-200 group",
                        isActive
                          ? "bg-foreground text-background font-bold shadow-lg"
                          : "text-foreground hover:bg-muted/60 active:bg-muted font-medium"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          "text-xs font-mono px-2 py-0.5 rounded",
                          isActive ? "bg-accent text-black font-bold" : "text-muted-foreground bg-muted"
                        )}>
                          0{index + 1}
                        </span>
                        <span className="text-2xl font-display tracking-tight">
                          {item.name}
                        </span>
                      </div>
                      <ArrowUpRight className={cn(
                        "w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                        isActive ? "text-accent" : "text-muted-foreground"
                      )} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Footer / Quick Connect Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="pt-6 border-t border-border mt-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Quick Connect
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/918198831306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-accent text-black font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <Phone size={14} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:speaktojatinsingh@gmail.com"
                  className="p-3 rounded-xl bg-muted border border-border text-foreground hover:text-accent transition-colors"
                  aria-label="Email Jatin"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/thejatinsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-muted border border-border text-foreground hover:text-accent transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
