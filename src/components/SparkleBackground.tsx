
import React, { useEffect, useRef } from "react";

interface SparkleProps {
  children: React.ReactNode;
  className?: string;
  density?: 'low' | 'medium' | 'high';
  colors?: string[];
}

export const SparkleBackground: React.FC<SparkleProps> = ({ 
  children, 
  className = "",
  density = 'medium',
  colors = ['#9b87f5', '#7E69AB', '#8B5CF6', '#D946EF', '#0EA5E9']
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    // Set number of sparkles based on density
    const sparklesCount = density === 'low' ? 15 : density === 'medium' ? 30 : 50;
    
    // Create and position sparkles
    for (let i = 0; i < sparklesCount; i++) {
      createSparkle(container, colors);
    }
    
    // Add new sparkles periodically
    const interval = setInterval(() => {
      const existingSparkles = container.querySelectorAll('.sparkle');
      const maxSparkles = density === 'low' ? 30 : density === 'medium' ? 50 : 80;
      
      if (existingSparkles.length < maxSparkles) {
        createSparkle(container, colors);
      }
    }, density === 'low' ? 1000 : density === 'medium' ? 800 : 600);
    
    return () => clearInterval(interval);
  }, [density, colors]);
  
  const createSparkle = (container: HTMLDivElement, colors: string[]) => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Random position
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 8 + 2;
    
    // Random color from provided colors
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Random duration
    const duration = Math.random() * 8 + 4;
    
    // Random shape (circle or star)
    const isCircle = Math.random() > 0.3;
    
    // Apply styles
    if (isCircle) {
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
    } else {
      // Create star shape
      sparkle.innerHTML = `<svg width="${size * 2}" height="${size * 2}" viewBox="0 0 24 24" fill="${color}">
        <path d="M12 0L14.39 8.26L22.95 8.26L16.28 13.45L18.67 21.71L12 16.52L5.33 21.71L7.72 13.45L1.05 8.26L9.61 8.26L12 0Z"/>
      </svg>`;
      Object.assign(sparkle.style, {
        position: 'absolute',
        left: `${left}%`,
        top: `${top}%`,
        width: `${size * 2}px`,
        height: `${size * 2}px`,
        opacity: 0,
        animation: `sparkle-rotate ${duration}s ease-in-out forwards`,
        zIndex: 0,
      });
    }
    
    // Add animation and removal logic
    sparkle.addEventListener('animationend', () => {
      sparkle.remove();
    });
    
    container.appendChild(sparkle);
  };
  
  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {children}
      <style>
        {`
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
        @keyframes sparkle-rotate {
          0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
            transform: scale(1) rotate(180deg);
          }
          80% {
            opacity: 0.5;
          }
          100% {
            transform: scale(1) rotate(360deg);
            opacity: 0;
          }
        }
        `}
      </style>
    </div>
  );
};
