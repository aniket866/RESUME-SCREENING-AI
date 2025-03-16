
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Upload, BarChart, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function Landing() {
  const [activeTab, setActiveTab] = useState("jobseeker");

  const features = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Resume Analysis",
      description: "Get detailed insights on your resume's effectiveness with real-time ATS scoring.",
      userType: "jobseeker",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Skill Gap Analysis",
      description: "Identify missing skills and get recommendations to match job requirements.",
      userType: "jobseeker",
    },
    {
      icon: <BarChart className="h-10 w-10 text-recruiter" />,
      title: "Candidate Ranking",
      description: "Automatically rank candidates based on ATS scores and skill matches.",
      userType: "recruiter",
    },
    {
      icon: <Upload className="h-10 w-10 text-recruiter" />,
      title: "Bulk Processing",
      description: "Upload multiple resumes and job descriptions for efficient screening.",
      userType: "recruiter",
    },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Developer",
      content: "The resume analysis helped me optimize my CV and land interviews at top tech companies.",
      userType: "jobseeker",
    },
    {
      name: "Sarah Williams",
      role: "HR Manager at TechCorp",
      content: "This tool reduced our hiring time by 40% while improving the quality of candidates we interviewed.",
      userType: "recruiter",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 px-6">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_30%,var(--background)_70%),radial-gradient(circle_at_top,var(--primary)/5%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 animate-slide-up text-balance">
              Optimize Your Resume With <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">AI Precision</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up animation-delay-100 md:text-2xl mb-8 text-balance">
              The smart way to perfect your resume or find the ideal candidate using advanced AI analysis.
            </p>
            
            <Tabs
              defaultValue="jobseeker"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full max-w-lg mx-auto animate-fade-in animation-delay-200"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="jobseeker">Job Seeker</TabsTrigger>
                <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
              </TabsList>
              
              <TabsContent value="jobseeker" className="mt-0 space-y-4">
                <Link to="/upload-resume">
                  <Button size="lg" className="mr-4">
                    Upload Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg">
                    Create Account
                  </Button>
                </Link>
              </TabsContent>
              
              <TabsContent value="recruiter" className="mt-0 space-y-4">
                <Link to="/post-job">
                  <Button size="lg" className="mr-4">
                    Post a Job <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg">
                    Create Account
                  </Button>
                </Link>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="max-w-6xl mx-auto relative glass-card p-1 overflow-hidden animate-scale-in animation-delay-300">
            {/* Banner image would go here */}
            <div className="aspect-[16/7] w-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
              <span className="text-lg text-muted-foreground">AI Resume Analysis Dashboard Preview</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools for job seekers and recruiters alike
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features
              .filter(feature => activeTab === "all" || feature.userType === activeTab)
              .map((feature, index) => (
                <Card key={index} className="glass-card border-none overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-start">
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied users who have improved their hiring process and job search
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials
              .filter(testimonial => activeTab === "all" || testimonial.userType === activeTab)
              .map((testimonial, index) => (
                <Card key={index} className="glass-card border-none">
                  <CardContent className="p-8">
                    <blockquote className="text-lg mb-4 italic">"{testimonial.content}"</blockquote>
                    <div className="flex items-center">
                      <div className="ml-4">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of job seekers and recruiters who are optimizing their hiring process
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg">
                  Create Free Account
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
