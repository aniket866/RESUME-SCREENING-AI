
import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import { Upload, Search, Sparkles } from "lucide-react";
import { SparkleButton } from "@/components/SparkleButton";
import { AnimatedLogo } from "@/components/AnimatedLogo";

export const HeroSection = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center text-center px-4 py-16 md:py-24 relative">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10">
        <div className="w-[800px] h-[800px] rounded-full bg-primary/5 animate-pulse" />
      </div>

      <AnimatedLogo large className="mb-8" />
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent animate-pulse relative">
        <span className="relative inline-block">
          AI Resume Screener
          <span className="absolute -top-6 -right-6">
            <Sparkles className="h-5 w-5 text-primary animate-bounce" />
          </span>
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 animate-fade-in">
        Optimize your resume with AI or find the perfect candidate faster with our intelligent screening technology
      </p>

      {!user ? (
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-200">
          <Link to="/signup?role=jobseeker">
            <SparkleButton size="lg" className="gap-2">
              <Upload className="h-5 w-5" />
              Get Started as Job Seeker
            </SparkleButton>
          </Link>
          <Link to="/signup?role=recruiter">
            <SparkleButton variant="outline" size="lg" className="gap-2">
              <Search className="h-5 w-5" />
              Get Started as Recruiter
            </SparkleButton>
          </Link>
        </div>
      ) : (
        <div className="flex gap-4 animate-slide-up animation-delay-200">
          {user.role === "jobseeker" ? (
            <Link to="/upload-resume">
              <SparkleButton size="lg" className="gap-2">
                <Upload className="h-5 w-5" />
                Upload Resume
              </SparkleButton>
            </Link>
          ) : (
            <Link to="/recruiter-dashboard">
              <SparkleButton size="lg" className="gap-2">
                <Search className="h-5 w-5" />
                Go to Dashboard
              </SparkleButton>
            </Link>
          )}
        </div>
      )}
      
      <div className="mt-20 animate-fade-in animation-delay-300 text-center">
        <h2 className="text-2xl font-semibold mb-6">Trusted by professionals worldwide</h2>
        <div className="flex flex-wrap justify-center gap-8 opacity-70">
          {["Google", "Microsoft", "Amazon", "Apple", "Netflix"].map((company) => (
            <div key={company} className="text-lg font-medium">{company}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
