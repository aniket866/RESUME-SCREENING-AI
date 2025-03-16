
import React, { useEffect, useRef } from "react";

interface SparkleProps {
  children: React.ReactNode;
  className?: string;
}

export const SparkleBackground: React.FC<SparkleProps> = ({ children, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const sparklesCount = 30;
    
    // Create and position sparkles
    for (let i = 0; i < sparklesCount; i++) {
      createSparkle(container);
    }
    
    // Add new sparkles periodically
    const interval = setInterval(() => {
      const existingSparkles = container.querySelectorAll('.sparkle');
      if (existingSparkles.length < 50) {
        createSparkle(container);
      }
    }, 800);
    
    return () => clearInterval(interval);
  }, []);
  
  const createSparkle = (container: HTMLDivElement) => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Random position
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 8 + 2;
    
    // Random color
    const colors = ['#9b87f5', '#7E69AB', '#8B5CF6', '#D946EF', '#0EA5E9'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Random duration
    const duration = Math.random() * 8 + 4;
    
    // Apply styles
    Object.assign(sparkle.style, {
      position: 'absolute',
      left: `${left}%`,
      top: `${top}%`,
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '50%',
      backgroundColor: color,
      opacity: 0,
      boxShadow: `0 0 ${size * 2}px ${size / 2}px ${color}`,
      animation: `sparkle ${duration}s ease-in-out forwards`,
      zIndex: 0,
    });
    
    // Add animation and removal logic
    sparkle.addEventListener('animationend', () => {
      sparkle.remove();
    });
    
    container.appendChild(sparkle);
  };
  
  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {children}
      <style jsx>{`
        @keyframes sparkle {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          20% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
          80% {
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
