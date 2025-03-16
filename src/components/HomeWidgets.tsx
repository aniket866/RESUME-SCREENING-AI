
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, BarChart3, Users, CheckCircle, ArrowUpRight, Lightbulb, TrendingUp, Star, Clock } from "lucide-react";
import { SparkleButton } from "./SparkleButton";
import { Link } from "react-router-dom";

export const StatsWidget = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-primary/70" />, value: "94%", label: "Success Rate", change: "+12%" },
    { icon: <LineChart className="h-8 w-8 text-primary/70" />, value: "3.5x", label: "Interview Rate", change: "+28%" },
    { icon: <CheckCircle className="h-8 w-8 text-primary/70" />, value: "85%", label: "ATS Pass Rate", change: "+16%" },
    { icon: <Clock className="h-8 w-8 text-primary/70" />, value: "-68%", label: "Time to Hire", change: "3 weeks faster" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="border-none glass-card overflow-hidden group hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6 flex items-center">
            <div className="mr-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
              {stat.icon}
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-3xl font-bold">{stat.value}</span>
                <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-500 flex items-center">
                  {stat.change} <ArrowUpRight className="ml-0.5 h-3 w-3" />
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export const TipsWidget = () => {
  const tips = [
    { icon: <Lightbulb className="h-5 w-5 text-yellow-500" />, tip: "Use industry-specific keywords to pass ATS systems" },
    { icon: <CheckCircle className="h-5 w-5 text-green-500" />, tip: "Quantify your achievements with specific metrics" },
    { icon: <TrendingUp className="h-5 w-5 text-blue-500" />, tip: "Tailor your resume for each job application" },
    { icon: <Star className="h-5 w-5 text-purple-500" />, tip: "Place most relevant experience at the top of each section" },
  ];

  return (
    <Card className="border-none glass-card">
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" /> Quick Resume Tips
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-3 mt-0.5">{tip.icon}</div>
              <span className="text-sm">{tip.tip}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-center">
          <Link to="/resume-tips">
            <SparkleButton variant="outline" size="sm">View All Tips</SparkleButton>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export const PopularTemplatesWidget = () => {
  const templates = [
    { name: "Modern Professional", imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=200&auto=format&fit=crop" },
    { name: "Creative Designer", imageUrl: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=200&auto=format&fit=crop" },
    { name: "Tech Innovator", imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=200&auto=format&fit=crop" }
  ];

  return (
    <Card className="border-none glass-card">
      <CardHeader>
        <CardTitle className="text-xl">Popular Templates</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="grid grid-cols-3 gap-3">
          {templates.map((template, index) => (
            <div 
              key={index} 
              className="aspect-[3/4] rounded-md overflow-hidden relative group cursor-pointer"
            >
              <img 
                src={template.imageUrl} 
                alt={template.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-xs text-center text-white px-1">{template.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link to="/resume-templates">
            <SparkleButton variant="outline" size="sm">View All Templates</SparkleButton>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export const CtaWidget = () => {
  return (
    <Card className="border-none glass-card bg-gradient-to-br from-primary/20 to-blue-500/5 overflow-hidden relative">
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${20 + Math.random() * 20}px`,
              height: `${20 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <CardContent className="p-6 relative z-10">
        <h3 className="text-xl font-bold mb-2">Ready to optimize your resume?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Upload your resume now and get instant AI-powered feedback and improvement suggestions
        </p>
        <div className="flex justify-center">
          <Link to="/upload-resume">
            <SparkleButton>Start Now</SparkleButton>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
