
import React from "react";
import { SparkleBackground } from "@/components/SparkleBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    role: "Software Engineer at Google",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    testimonial: "After optimizing my resume with AI Resume Screener, I received a call from Google within a week. The ATS score analysis was a game-changer for me!",
    company: "Google",
    companyLogo: "https://via.placeholder.com/50"
  },
  {
    id: 2,
    name: "Sarah Zhang",
    role: "UX Designer at Adobe",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    testimonial: "I struggled for months to get interviews until I used this platform. The AI suggestions helped me highlight my achievements in a way that caught recruiters' attention.",
    company: "Adobe",
    companyLogo: "https://via.placeholder.com/50"
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Product Manager at Salesforce",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    testimonial: "The resume templates and AI analysis helped me transition from a technical role to product management. Three interviews and two offers within two weeks!",
    company: "Salesforce",
    companyLogo: "https://via.placeholder.com/50"
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Marketing Director at Spotify",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    testimonial: "As someone who has reviewed thousands of resumes, I decided to use this tool when I was job hunting. The insights were invaluable and helped me land my dream job.",
    company: "Spotify",
    companyLogo: "https://via.placeholder.com/50"
  },
  {
    id: 5,
    name: "Robert Chen",
    role: "Data Scientist at Amazon",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    testimonial: "The keyword optimization suggestions helped my resume match job descriptions perfectly. I got callbacks from 80% of the positions I applied for!",
    company: "Amazon",
    companyLogo: "https://via.placeholder.com/50"
  },
  {
    id: 6,
    name: "Lisa Patel",
    role: "HR Manager at Microsoft",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    testimonial: "From the perspective of a hiring manager, candidates who use this tool stand out. Their resumes are clear, concise, and highlight exactly what we're looking for.",
    company: "Microsoft",
    companyLogo: "https://via.placeholder.com/50"
  }
];

const SuccessStories = () => {
  return (
    <SparkleBackground className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Success Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Real stories from job seekers who transformed their careers with our AI-powered platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="glass-card border-none hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-6 flex flex-row items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="rounded-full w-16 h-16 object-cover"
                />
                <div>
                  <CardTitle className="text-base">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="mb-4 text-primary opacity-70">
                  <Quote className="h-8 w-8" />
                </div>
                <p className="italic text-muted-foreground mb-4">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center gap-2">
                  <img 
                    src={testimonial.companyLogo} 
                    alt={testimonial.company} 
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-sm font-medium">{testimonial.company}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Our Impact</h2>
            <p className="text-muted-foreground">The numbers speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "250,000+", label: "Resumes Optimized" },
              { stat: "85%", label: "Interview Success Rate" },
              { stat: "45 days", label: "Average Time to Hire" },
              { stat: "92%", label: "User Satisfaction" }
            ].map((item, i) => (
              <Card key={i} className="glass-card border-none text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                    {item.stat}
                  </div>
                  <p className="text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Featured In Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-6">As Featured In</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            {["Forbes", "TechCrunch", "Business Insider", "Fast Company", "CNBC"].map((company, i) => (
              <div key={i} className="text-xl font-bold">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </SparkleBackground>
  );
};

export default SuccessStories;
