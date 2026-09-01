import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ExternalLink, Folder } from "lucide-react";
import { cn } from "../lib/utils";

type Project = {
  title: string;
  url: string | null;
  status?: string;
  instruction?: string;
};

type DropdownFolderProps = {
  name: string;
  projects?: Project[];
  type: "dropdown" | "folder_link";
  url?: string;
};

export function DropdownFolder({ name, projects, type, url }: DropdownFolderProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (type === "folder_link") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors shadow-sm hover:shadow-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Folder className="text-accent" size={24} />
            <h3 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors">{name}</h3>
          </div>
          <ExternalLink size={20} className="text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </a>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-6 focus:outline-none focus:bg-muted/50 hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <Folder className="text-muted-foreground shrink-0" size={22} />
          <h3 className="text-lg sm:text-xl font-semibold text-card-foreground text-left">{name}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 ml-2"
        >
          <ChevronDown size={20} className="text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-background/50 border-t border-border"
          >
            <ul className="py-1 sm:py-2 divide-y divide-border/40 sm:divide-y-0">
              {projects?.map((project, idx) => (
                <li key={idx}>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 hover:bg-muted focus:bg-muted transition-colors gap-3"
                    >
                      <span className="font-medium text-sm sm:text-base text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </span>
                      <ExternalLink size={16} className="text-muted-foreground opacity-70 sm:opacity-0 sm:group-hover:opacity-100 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </a>
                  ) : (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 opacity-60 gap-2">
                      <span className="font-medium text-sm sm:text-base text-foreground">{project.title}</span>
                      {project.status && (
                        <span className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground self-start sm:self-auto">
                          {project.status}
                        </span>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
