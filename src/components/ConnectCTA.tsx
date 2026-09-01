import { Button } from "./Button";
import { motion } from "motion/react";

export function ConnectCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="pt-12 pb-6 flex items-center justify-center relative"
    >
      <div className="relative inline-flex items-center">
        {/* Curved swoosh arrow pointing to the button */}
        <div className="absolute -left-16 sm:-left-24 -top-3 sm:-top-5 pointer-events-none select-none">
          <svg
            className="w-16 sm:w-24 h-10 sm:h-14 text-white dark:text-white stroke-white fill-none drop-shadow-sm"
            viewBox="0 0 100 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Smooth curving swoosh */}
            <path
              d="M 6 12 Q 35 46 82 28"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Arrowhead pointing to the button */}
            <path
              d="M 69 19 L 84 28 L 74 38"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        <Button 
          to="/get-in-touch" 
          variant="primary" 
          icon="arrow-right"
          className="font-display tracking-wide uppercase text-sm sm:text-base shadow-xl"
        >
          LETS CONNECT
        </Button>
      </div>
    </motion.div>
  );
}
