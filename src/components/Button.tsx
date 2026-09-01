import { cn } from "../lib/utils";
import { ArrowRight, ArrowDown, ExternalLink } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: "arrow-right" | "arrow-down" | "external";
  className?: string;
  onClick?: () => void;
};

export function Button({ children, to, href, variant = "primary", icon, className, onClick }: ButtonProps) {
  const baseStyles = "group inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background";
  
  const variants = {
    primary: "bg-accent text-accent-foreground text-black hover:brightness-110 shadow-lg shadow-accent/20", // Assuming accent is yellow/lavender, text-black is good for yellow
    secondary: "bg-foreground text-background hover:bg-foreground/90",
    outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background",
  };

  const IconComponent = 
    icon === "arrow-right" ? ArrowRight : 
    icon === "arrow-down" ? ArrowDown : 
    icon === "external" ? ExternalLink : null;

  const content = (
    <>
      {children}
      {IconComponent && (
        <IconComponent 
          size={18} 
          className={cn(
            "transition-transform duration-300",
            icon === "arrow-right" && "group-hover:translate-x-1",
            icon === "arrow-down" && "group-hover:translate-y-1",
            icon === "external" && "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          )} 
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cn(baseStyles, variants[variant], className)} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn(baseStyles, variants[variant], className)} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cn(baseStyles, variants[variant], className)}>
      {content}
    </button>
  );
}
