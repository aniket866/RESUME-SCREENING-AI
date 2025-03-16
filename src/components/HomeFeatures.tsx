
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, BadgeCheck, BrainCircuit, Zap, Sparkles, 
  PenTool, Users, Globe, Briefcase, FileText, Settings, BookOpen, LineChart
} from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card className="border-none glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
      <CardContent className="flex flex-col items-center p-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="bg-primary/10 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 relative">
          <div className="absolute inset-0 rounded-full bg-primary/5 animate-ping opacity-60" />
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-center">{description}</p>
      </CardContent>
    </Card>
  );
};

export const FeaturesSection = () => {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "ATS Score Analysis",
      description: "Get your resume scored against ATS systems and receive insights to improve your chances of getting noticed."
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-primary" />,
      title: "Keyword Optimization",
      description: "Identify missing keywords and skills to tailor your resume for specific job descriptions."
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
      title: "AI Resume Enhancement",
      description: "Get AI-powered suggestions to improve your resume content, formatting and readability."
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "Smart Candidate Ranking",
      description: "Recruiters can automatically rank and filter candidates based on skill match and resume quality."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Instant Feedback",
      description: "Receive instant feedback on your resume with actionable suggestions for improvement."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Personalized Insights",
      description: "Get personalized recommendations based on your industry, experience level, and career goals."
    },
    {
      icon: <PenTool className="h-6 w-6 text-primary" />,
      title: "Resume Templates",
      description: "Access professionally designed resume templates optimized for ATS compatibility."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Team Collaboration",
      description: "Collaborate with team members on candidate evaluations and hiring decisions."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Global Job Market Analysis",
      description: "Get insights into global job market trends and skill demands for your industry."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Career Path Planning",
      description: "Map out potential career paths and identify skills needed for advancement."
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Cover Letter Generator",
      description: "Create personalized cover letters tailored to specific job applications using AI."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Performance Analytics",
      description: "Track your job application success rate and optimize your approach over time."
    }
  ];

  return (
    <div className="py-16 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Enhanced AI Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
