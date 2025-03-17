
import React, { useRef, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import { Upload, Search, Sparkles, BrainCircuit, Bot } from "lucide-react";
import { SparkleButton } from "@/components/SparkleButton";
import { AnimatedLogo } from "@/components/AnimatedLogo";

export const HeroSection = () => {
  const { user } = useAuth();
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animationRef.current) return;
    
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 5-15px
      const size = Math.random() * 10 + 5;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      
      // Random color between green and cyan
      const hue = Math.random() * 60 + 120; // 120-180 hue range (green to cyan)
      particle.style.backgroundColor = `hsla(${hue}, 100%, 70%, 0.8)`;
      
      // Random animation duration
      const duration = Math.random() * 5 + 5;
      particle.style.animation = `float ${duration}s ease-in-out infinite, pulse-glow ${duration / 2}s ease-in-out infinite`;
      
      // Add to container
      if (animationRef.current) {
        animationRef.current.appendChild(particle);
        
        // Remove after animation
        setTimeout(() => {
          if (particle.parentNode === animationRef.current) {
            animationRef.current?.removeChild(particle);
          }
        }, duration * 1000);
      }
    };
    
    // Create initial particles
    for (let i = 0; i < 20; i++) {
      createParticle();
    }
    
    // Create new particles periodically
    const interval = setInterval(() => {
      if (animationRef.current) {
        createParticle();
      }
    }, 1000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center text-center md:text-left px-4 py-16 md:py-24 relative">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10">
        <div className="w-[800px] h-[800px] rounded-full bg-primary/5 animate-pulse" />
      </div>

      <div className="w-full md:w-1/2 z-10 mb-12 md:mb-0">
        <AnimatedLogo large className="mb-8 mx-auto md:mx-0" />
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#3CFA85] to-primary bg-clip-text text-transparent animate-pulse relative">
          <span className="relative inline-block">
            SMART SOLUTIONS
            <span className="absolute -top-6 -right-6">
              <Sparkles className="h-5 w-5 text-[#3CFA85] animate-bounce" />
            </span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 animate-fade-in">
          Intelligent solutions in AI and Blockchain technology enabling smarter resumes and career decisions for the future tech world
        </p>

        {!user ? (
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-200">
            <Link to="/signup?role=jobseeker">
              <SparkleButton size="lg" className="gap-2 bg-[#3CFA85] hover:bg-[#3CFA85]/90 text-black">
                <BrainCircuit className="h-5 w-5" />
                Explore Solutions
              </SparkleButton>
            </Link>
            <Link to="/signup?role=recruiter">
              <SparkleButton variant="outline" size="lg" className="gap-2 border-[#3CFA85]/50 text-[#3CFA85]">
                <Search className="h-5 w-5" />
                Start Recruiting
              </SparkleButton>
            </Link>
          </div>
        ) : (
          <div className="flex gap-4 animate-slide-up animation-delay-200">
            {user.role === "jobseeker" ? (
              <Link to="/upload-resume">
                <SparkleButton size="lg" className="gap-2 bg-[#3CFA85] hover:bg-[#3CFA85]/90 text-black">
                  <Upload className="h-5 w-5" />
                  Upload Resume
                </SparkleButton>
              </Link>
            ) : (
              <Link to="/recruiter-dashboard">
                <SparkleButton size="lg" className="gap-2 bg-[#3CFA85] hover:bg-[#3CFA85]/90 text-black">
                  <Search className="h-5 w-5" />
                  Go to Dashboard
                </SparkleButton>
              </Link>
            )}
          </div>
        )}
        
        <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#3CFA85]"></div>
            <span className="text-sm text-muted-foreground">24.7K+ Happy Users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary"></div>
            <span className="text-sm text-muted-foreground">124K+ Resumes Generated</span>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 flex justify-center md:justify-end p-4">
        <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#3CFA85]/20 to-primary/20 blur-xl rounded-full"></div>
          
          {/* Animated container with floating particles */}
          <div 
            ref={animationRef} 
            className="relative z-10 w-full h-full rounded-lg overflow-hidden"
          >
            {/* Holographic robot or AI visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[200px] h-[200px] relative">
                <div className="absolute inset-0 rounded-full border-4 border-[#3CFA85]/30 animate-ping" style={{ animationDuration: '3s' }}></div>
                <div className="absolute inset-[15%] rounded-full border-4 border-[#3CFA85]/50 animate-ping" style={{ animationDuration: '4s' }}></div>
                <div className="absolute inset-[30%] rounded-full border-4 border-[#3CFA85]/70 animate-ping" style={{ animationDuration: '5s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bot className="h-20 w-20 text-[#3CFA85] animate-pulse" style={{ animationDuration: '2s' }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-sm p-3 rounded-lg text-xs text-white z-20">
            <div className="flex items-center gap-2 mb-1">
              <Bot className="h-4 w-4 text-[#3CFA85]" />
              <span>AI-Powered Solutions</span>
            </div>
            <div className="text-muted-foreground">Future-proof your career</div>
          </div>
        </div>
      </div>
    </div>
  );
};
