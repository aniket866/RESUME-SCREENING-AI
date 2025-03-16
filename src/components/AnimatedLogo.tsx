
import React, { useEffect, useRef } from "react";
import { BrainCircuit, User, Cpu, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export const AnimatedLogo = ({ className, large = false }: { className?: string, large?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      if (containerRef.current) {
        // Toggle animation state
        containerRef.current.classList.toggle("scale-105");
        containerRef.current.classList.toggle("rotate-1");
      }
    }, 3000);
    
    // Rotating glow effect
    const glowInterval = setInterval(() => {
      if (circleRef.current) {
        const angle = (Date.now() / 50) % 360;
        circleRef.current.style.background = `radial-gradient(circle at ${50 + 30 * Math.cos(angle * Math.PI / 180)}% ${50 + 30 * Math.sin(angle * Math.PI / 180)}%, var(--primary), transparent 70%)`;
      }
    }, 50);
    
    return () => {
      clearInterval(pulseInterval);
      clearInterval(glowInterval);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className={cn(
        "flex items-center justify-center gap-1 transition-all duration-700 relative",
        large && "flex-col",
        className
      )}
    >
      <div 
        ref={circleRef} 
        className="absolute inset-0 opacity-20 rounded-full"
      />
      
      <div className={cn(
        "relative flex items-center", 
        large && "mb-3 scale-150"
      )}>
        <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-50" />
        <User className={cn("text-primary", large ? "h-8 w-8" : "h-6 w-6")} />
        <div className="absolute left-3 animate-pulse">
          <BrainCircuit className={cn("text-primary opacity-75", large ? "h-8 w-8" : "h-6 w-6")} />
        </div>
        <Cpu className={cn("text-primary ml-[-4px]", large ? "h-8 w-8" : "h-6 w-6")} />
        <Zap className={cn("text-primary ml-1 animate-pulse", large ? "h-7 w-7" : "h-5 w-5")} />
      </div>
      
      <span className={cn(
        "font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/70 to-blue-500 animate-bg-pulse",
        large ? "text-3xl md:text-4xl" : "text-xl"
      )}>
        AI Resume Screener
      </span>
      
      {large && (
        <div className="flex gap-1 mt-1 animate-pulse">
          <div className="h-1 w-8 bg-primary/70 rounded-full"></div>
          <div className="h-1 w-4 bg-primary/50 rounded-full"></div>
          <div className="h-1 w-6 bg-primary/60 rounded-full"></div>
        </div>
      )}
    </div>
  );
};
