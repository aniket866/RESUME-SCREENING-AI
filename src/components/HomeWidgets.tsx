
import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Lightbulb, BrainCircuit, Layers, Bot, 
  Briefcase, GraduationCap, Code, LineChart, 
  FileText, FileSearch, Award, Sparkles
} from "lucide-react";
import { 
  Card, CardContent, CardDescription, 
  CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const TechStatsWidget = () => {
  return (
    <div className="glass-card p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <LineChart className="mr-2 h-5 w-5 text-primary" />
        AI Resume Statistics
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="p-4 bg-primary/5 rounded-lg">
          <div className="text-3xl font-bold text-primary">124K+</div>
          <div className="text-sm text-muted-foreground">Resumes Analyzed</div>
        </div>
        <div className="p-4 bg-primary/5 rounded-lg">
          <div className="text-3xl font-bold text-primary">87%</div>
          <div className="text-sm text-muted-foreground">Success Rate</div>
        </div>
        <div className="p-4 bg-primary/5 rounded-lg">
          <div className="text-3xl font-bold text-primary">5.2K+</div>
          <div className="text-sm text-muted-foreground">Jobs Secured</div>
        </div>
        <div className="p-4 bg-primary/5 rounded-lg">
          <div className="text-3xl font-bold text-primary">16.8K+</div>
          <div className="text-sm text-muted-foreground">Active Users</div>
        </div>
      </div>
    </div>
  );
};

export const CareerPathsWidget = () => {
  const careerPaths = [
    { name: "Tech & IT", icon: <Code className="h-5 w-5 text-blue-500" />, path: "/career-path?field=tech" },
    { name: "Business", icon: <Briefcase className="h-5 w-5 text-green-500" />, path: "/career-path?field=business" },
    { name: "Education", icon: <GraduationCap className="h-5 w-5 text-yellow-500" />, path: "/career-path?field=education" },
    { name: "Data Science", icon: <LineChart className="h-5 w-5 text-purple-500" />, path: "/career-path?field=data" }
  ];

  return (
    <Card className="bg-gradient-to-br from-background/80 to-background/60 border-primary/10 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Layers className="mr-2 h-5 w-5 text-primary" />
          Career Paths
        </CardTitle>
        <CardDescription>Explore custom career journeys</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <ul className="space-y-2">
          {careerPaths.map((path, index) => (
            <li key={index}>
              <Link to={path.path} className="flex items-center justify-between p-2 rounded-md hover:bg-primary/5 transition-colors">
                <div className="flex items-center gap-2">
                  {path.icon}
                  <span>{path.name}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link to="/career-path" className="text-primary text-sm flex items-center">
          <span>View all career paths</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export const AIToolsWidget = () => {
  const tools = [
    { name: "Resume Analyzer", icon: <FileSearch className="h-5 w-5 text-primary" />, path: "/resume-analysis" },
    { name: "Cover Letter Generator", icon: <FileText className="h-5 w-5 text-primary" />, path: "/cover-letters" },
    { name: "Skills Assessment", icon: <Award className="h-5 w-5 text-primary" />, path: "/skills-assessment" }
  ];
  
  return (
    <Card className="bg-gradient-to-br from-background/80 to-background/60 border-primary/10 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <BrainCircuit className="mr-2 h-5 w-5 text-primary" />
          AI Tools
        </CardTitle>
        <CardDescription>Boost your career with AI</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <ul className="space-y-2">
          {tools.map((tool, index) => (
            <li key={index}>
              <Link to={tool.path} className="flex items-center justify-between p-2 rounded-md hover:bg-primary/5 transition-colors">
                <div className="flex items-center gap-2">
                  {tool.icon}
                  <span>{tool.name}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link to="/resume-templates" className="text-primary text-sm flex items-center">
          <span>Explore all tools</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export const NewsWidget = () => {
  return (
    <Card className="bg-gradient-to-br from-background/80 to-background/60 border-primary/10 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Lightbulb className="mr-2 h-5 w-5 text-primary" />
          Latest Updates
        </CardTitle>
        <CardDescription>Tips and industry news</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          <div className="bg-primary/5 p-3 rounded-md">
            <div className="text-sm font-medium">Resume Tips 2024</div>
            <p className="text-xs text-muted-foreground">Top skills employers look for this year</p>
          </div>
          <div className="bg-primary/5 p-3 rounded-md">
            <div className="text-sm font-medium">AI in Recruitment</div>
            <p className="text-xs text-muted-foreground">How AI is changing hiring processes</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link to="/blog" className="text-primary text-sm flex items-center">
          <span>Read more articles</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};
