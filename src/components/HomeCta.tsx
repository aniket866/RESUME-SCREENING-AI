
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { SparkleButton } from "@/components/SparkleButton";
import { Sparkles, ArrowRight, Rocket } from "lucide-react";

export const CtaSection = () => {
  const bubbleContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create random bubbles periodically
    const createBubble = () => {
      if (!bubbleContainerRef.current) return;
      
      const bubble = document.createElement('div');
      const size = 20 + Math.random() * 40;
      const initialLeft = Math.random() * 100;
      
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${initialLeft}%`;
      bubble.style.bottom = '0';
      bubble.style.opacity = (0.3 + Math.random() * 0.7).toString();
      bubble.style.position = 'absolute';
      bubble.style.borderRadius = '50%';
      bubble.style.background = 'radial-gradient(circle at 30% 30%, var(--primary), transparent 70%)';
      bubble.style.animation = `float ${5 + Math.random() * 10}s linear forwards`;
      
      bubbleContainerRef.current.appendChild(bubble);
      
      // Remove bubble after animation completes
      setTimeout(() => {
        if (bubbleContainerRef.current && bubbleContainerRef.current.contains(bubble)) {
          bubbleContainerRef.current.removeChild(bubble);
        }
      }, 15000);
    };
    
    const interval = setInterval(createBubble, 500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-primary/10 to-blue-500/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 p-2 rounded-full bg-primary/10 animate-pulse">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          Ready to transform your career?
        </h2>
        
        <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Join thousands of professionals who've improved their job prospects with our AI-powered tools
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/signup">
            <SparkleButton size="lg" className="group">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </SparkleButton>
          </Link>
          
          <Link to="/pricing">
            <SparkleButton variant="outline" size="lg" className="group">
              View Pricing
              <Rocket className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </SparkleButton>
          </Link>
        </div>
        
        <div className="mt-10 text-sm flex justify-center gap-1 text-muted-foreground">
          <span>No credit card required</span>
          <span>•</span>
          <span>Cancel anytime</span>
          <span>•</span>
          <span>14-day trial</span>
        </div>
      </div>
      
      <div ref={bubbleContainerRef} className="absolute inset-0 overflow-hidden">
        {/* Bubbles will be dynamically added here */}
      </div>
      
      <style jsx="true">{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(calc(20vw * (Math.random() - 0.5)));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
