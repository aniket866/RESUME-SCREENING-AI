
import React, { useEffect, useRef } from "react";
import { BrainCircuit, Bot, Cpu, Zap, Cog, CircuitBoard } from "lucide-react";
import { cn } from "@/lib/utils";

export const AnimatedLogo = ({ className, large = false }: { className?: string, large?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const robotArmRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      if (containerRef.current) {
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
    
    // Robot movement
    const robotInterval = setInterval(() => {
      if (robotArmRef.current) {
        const armAngle = Math.sin((Date.now() / 1000)) * 15;
        robotArmRef.current.style.transform = `rotate(${armAngle}deg)`;
      }
    }, 50);
    
    return () => {
      clearInterval(pulseInterval);
      clearInterval(glowInterval);
      clearInterval(robotInterval);
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
        
        {/* Robot head */}
        <div className="relative" ref={robotArmRef}>
          <Bot className={cn("text-primary", large ? "h-9 w-9" : "h-7 w-7")} />
          
          {/* Circuit decorations */}
          <CircuitBoard className={cn(
            "absolute text-primary/50 animate-pulse",
            large ? "-right-4 -top-4 h-6 w-6" : "-right-3 -top-3 h-4 w-4"
          )} />
          <CircuitBoard className={cn(
            "absolute text-primary/50 animate-pulse animation-delay-200",
            large ? "-left-4 -bottom-4 h-6 w-6" : "-left-3 -bottom-3 h-4 w-4"
          )} />
        </div>
        
        <div className="absolute left-3 animate-pulse">
          <BrainCircuit className={cn("text-primary opacity-75", large ? "h-8 w-8" : "h-6 w-6")} />
        </div>
        <Cpu className={cn("text-primary ml-[10px]", large ? "h-8 w-8" : "h-6 w-6")} />
        <Cog className={cn("text-primary animate-spin", large ? "h-6 w-6" : "h-4 w-4")} />
        <Zap className={cn("text-primary ml-1 animate-pulse", large ? "h-7 w-7" : "h-5 w-5")} />
      </div>
      
      <span className={cn(
        "font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3CFA85] via-primary to-blue-500 animate-pulse",
        large ? "text-3xl md:text-4xl" : "text-xl"
      )}>
        AI Resume Screener
      </span>
      
      {large && (
        <div className="flex gap-1 mt-1">
          <div className="h-1 w-8 bg-[#3CFA85] rounded-full animate-pulse"></div>
          <div className="h-1 w-4 bg-primary/50 rounded-full animate-pulse delay-100"></div>
          <div className="h-1 w-6 bg-primary/60 rounded-full animate-pulse delay-200"></div>
        </div>
      )}
    </div>
  );
};
