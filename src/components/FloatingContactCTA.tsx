import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function FloatingContactCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <Link
        to="/get-in-touch"
        className="group flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 border border-border/50"
      >
        <Phone size={18} className="group-hover:rotate-12 transition-transform duration-300" />
        <span>Get in Touch</span>
      </Link>
    </motion.div>
  );
}
