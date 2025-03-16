
import React, { useEffect, useRef } from "react";
import { BrainCircuit, User } from "lucide-react";
import { cn } from "@/lib/utils";

export const AnimatedLogo = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        // Toggle animation state
        containerRef.current.classList.toggle("scale-105");
        containerRef.current.classList.toggle("rotate-1");
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "flex items-center justify-center gap-1 transition-all duration-700",
        className
      )}
    >
      <div className="relative flex items-center">
        <User className="h-6 w-6 text-primary animate-pulse" />
        <div className="absolute left-3 animate-ping">
          <BrainCircuit className="h-6 w-6 text-primary opacity-75" />
        </div>
        <BrainCircuit className="h-6 w-6 text-primary ml-[-4px] animate-pulse" />
      </div>
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/70 to-blue-500 animate-bg-pulse">
        AI Resume Screener
      </span>
    </div>
  );
};
