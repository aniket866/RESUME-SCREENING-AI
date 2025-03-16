
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";

export const SparkleButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    const [isHovering, setIsHovering] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    
    return (
      <div className="relative">
        {isHovering && (
          <div className="absolute inset-0 blur-md opacity-70 bg-primary/30 rounded-md animate-pulse" />
        )}
        <Button
          ref={ref || buttonRef}
          className={cn(
            "relative transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 overflow-hidden",
            className
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          <span className="relative z-10">{children}</span>
          {isHovering && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <span
                  key={i}
                  className="absolute inline-flex h-2 w-2 rounded-full bg-primary/60"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 0.5}s`,
                    animationDuration: `${0.5 + Math.random() * 0.5}s`,
                  }}
                />
              ))}
            </div>
          )}
        </Button>
      </div>
    );
  }
);

SparkleButton.displayName = "SparkleButton";
