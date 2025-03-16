
import React from "react";
import { Link } from "react-router-dom";
import { SparkleButton } from "@/components/SparkleButton";

export const CtaSection = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-primary/10 to-blue-500/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your career?</h2>
        <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Join thousands of professionals who've improved their job prospects with our AI-powered tools
        </p>
        <Link to="/signup">
          <SparkleButton size="lg" className="mr-4">Get Started Free</SparkleButton>
        </Link>
        <Link to="/landing">
          <SparkleButton variant="outline" size="lg">Learn More</SparkleButton>
        </Link>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
