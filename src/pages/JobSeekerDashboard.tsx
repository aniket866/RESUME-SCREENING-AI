
import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Clock, Award, AlertTriangle, TrendingUp, Download, Eye, BarChart, List, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// Mock data for demonstration
const mockResumeData = {
  atsScore: 78,
  lastUpdated: "2023-12-15T14:30:00",
  missingKeywords: ["Docker", "TypeScript", "CI/CD", "AWS"],
  formattingSuggestions: [
    { id: 1, type: "structure", message: "Add a clear professional summary at the top" },
    { id: 2, type: "bullet", message: "Use more action verbs in your experience section" },
    { id: 3, type: "readability", message: "Improve readability by adding more white space" },
  ],
  appliedJobs: [
    { id: 1, company: "TechCorp", position: "Frontend Developer", status: "In Review", appliedDate: "2023-12-10T10:15:00" },
    { id: 2, company: "InnoSys", position: "UI/UX Designer", status: "Rejected", appliedDate: "2023-12-05T11:30:00" },
    { id: 3, company: "DataMinds", position: "React Developer", status: "Interview", appliedDate: "2023-12-12T09:45:00" },
  ],
};

export default function JobSeekerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();

  const handleDownloadResume = () => {
    toast({
      title: "Download started",
      description: "Your resume is being downloaded",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 animate-slide-up">
          <div>
            <h1 className="text-3xl font-bold">Your Resume Dashboard</h1>
            <p className="text-muted-foreground">Track and improve your resume performance</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
            <Link to="/upload-resume">
              <Button variant="outline">
                <FileText className="mr-2 size-4" />
                Update Resume
              </Button>
            </Link>
            <Button onClick={handleDownloadResume}>
              <Download className="mr-2 size-4" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card border-none animate-slide-up animation-delay-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">ATS Score</CardTitle>
              <CardDescription>
                How well your resume performs with ATS systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center text-center">
                <div className="relative size-32 mb-4">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="text-muted stroke-current"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="42"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-primary stroke-current"
                      strokeWidth="8"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="42"
                      cx="50"
                      cy="50"
                      strokeDasharray={`${2 * Math.PI * 42 * mockResumeData.atsScore / 100} ${2 * Math.PI * 42 * (1 - mockResumeData.atsScore / 100)}`}
                      strokeDashoffset={(2 * Math.PI * 42 * 25) / 100}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
                    {mockResumeData.atsScore}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  {mockResumeData.atsScore >= 75 ? (
                    <Badge className="bg-green-500">Good</Badge>
                  ) : mockResumeData.atsScore >= 50 ? (
                    <Badge className="bg-yellow-500">Average</Badge>
                  ) : (
                    <Badge className="bg-red-500">Needs Work</Badge>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground text-center w-full">
                Last updated: {formatDate(mockResumeData.lastUpdated)}
              </p>
            </CardFooter>
          </Card>

          <Card className="glass-card border-none animate-slide-up animation-delay-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Keyword Gaps</CardTitle>
              <CardDescription>
                Important keywords missing from your resume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {mockResumeData.missingKeywords.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="text-muted-foreground">
                      {keyword}
                    </Badge>
                  ))}
                </div>
                
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <AlertTriangle className="size-4 shrink-0 mt-0.5 text-yellow-500" />
                    <span>
                      Adding these keywords may improve your resume's visibility to recruiters.
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/learn" className="text-sm text-primary hover:underline w-full text-center">
                Learn how to add these skills to your resume
              </Link>
            </CardFooter>
          </Card>

          <Card className="glass-card border-none animate-slide-up animation-delay-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Suggestion Highlights</CardTitle>
              <CardDescription>
                Top improvements for your resume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {mockResumeData.formattingSuggestions.map((suggestion) => (
                  <li key={suggestion.id} className="flex items-start gap-2">
                    <Lightbulb className="size-4 shrink-0 mt-0.5 text-primary" />
                    <span className="text-sm">{suggestion.message}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                View All Suggestions
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mb-8 animate-scale-in animation-delay-400">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <Card className="glass-card border-none">
                <CardHeader>
                  <CardTitle>Resume Performance</CardTitle>
                  <CardDescription>
                    An overview of your resume's performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Structure</span>
                        <span className="text-sm text-muted-foreground">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Content Quality</span>
                        <span className="text-sm text-muted-foreground">82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Keyword Optimization</span>
                        <span className="text-sm text-muted-foreground">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Readability</span>
                        <span className="text-sm text-muted-foreground">90%</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="applications" className="mt-6">
              <Card className="glass-card border-none">
                <CardHeader>
                  <CardTitle>Job Applications</CardTitle>
                  <CardDescription>
                    Track your recent job applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockResumeData.appliedJobs.map((job) => (
                      <div key={job.id} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                        <div>
                          <h3 className="font-medium">{job.position}</h3>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                          <p className="text-xs text-muted-foreground">Applied on {formatDate(job.appliedDate)}</p>
                        </div>
                        <div className="flex items-center">
                          <Badge
                            className={
                              job.status === "Interview" 
                                ? "bg-green-500" 
                                : job.status === "Rejected" 
                                ? "bg-red-500" 
                                : "bg-yellow-500"
                            }
                          >
                            {job.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View All Applications
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="insights" className="mt-6">
              <Card className="glass-card border-none">
                <CardHeader>
                  <CardTitle>Career Insights</CardTitle>
                  <CardDescription>
                    Personalized insights based on your profile
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3 p-4 rounded-lg border bg-card/50">
                      <TrendingUp className="size-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Skill Development</h3>
                        <p className="text-sm text-muted-foreground">
                          The top 3 skills to develop based on your profile and current job market:
                        </p>
                        <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                          <li>Cloud Infrastructure (AWS, Azure)</li>
                          <li>CI/CD Pipelines</li>
                          <li>TypeScript</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 rounded-lg border bg-card/50">
                      <BarChart className="size-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Industry Trends</h3>
                        <p className="text-sm text-muted-foreground">
                          Based on your experience, these sectors are showing strong hiring trends:
                        </p>
                        <ul className="mt-2 space-y-1 text-sm list-disc pl-5">
                          <li>Health Tech</li>
                          <li>FinTech</li>
                          <li>E-commerce</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
