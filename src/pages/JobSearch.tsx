
import React from "react";
import { SparkleBackground } from "@/components/SparkleBackground";
import { SparkleButton } from "@/components/SparkleButton";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Briefcase, Building, Clock, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "New York, NY",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    posted: "2 days ago",
    description: "We're looking for a skilled Frontend Developer to join our team...",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "UX Designer",
    company: "DesignHub",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $110,000",
    posted: "1 week ago",
    description: "Join our design team to create beautiful user experiences...",
    tags: ["Figma", "User Research", "Prototyping"]
  },
  {
    id: 3,
    title: "Product Manager",
    company: "GrowthSystems",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    posted: "3 days ago",
    description: "Lead product development for our flagship software...",
    tags: ["Agile", "Product Strategy", "User-Centric Design"]
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "DataMinds",
    location: "Chicago, IL",
    type: "Contract",
    salary: "$70 - $90 per hour",
    posted: "1 day ago",
    description: "Analyze large datasets to help drive business decisions...",
    tags: ["SQL", "Python", "Tableau"]
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Remote",
    type: "Full-time",
    salary: "$100,000 - $140,000",
    posted: "5 days ago",
    description: "Manage our cloud infrastructure and deployment pipelines...",
    tags: ["AWS", "Docker", "Kubernetes"]
  },
  {
    id: 6,
    title: "Software Engineer",
    company: "InnovateSoft",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$90,000 - $130,000",
    posted: "2 weeks ago",
    description: "Join our backend team to build scalable APIs and services...",
    tags: ["Node.js", "MongoDB", "Microservices"]
  }
];

const JobSearch = () => {
  return (
    <SparkleBackground className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Find Your Perfect Job
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Browse thousands of jobs matched to your skills and experience
          </p>
          
          {/* Search Bar */}
          <Card className="glass-card border-none mb-8">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Job title, keywords, or company"
                    className="pl-9 bg-background/50"
                  />
                </div>
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Location or remote"
                    className="pl-9 bg-background/50"
                  />
                </div>
                <SparkleButton>
                  <Search className="mr-2 h-4 w-4" />
                  Search Jobs
                </SparkleButton>
              </div>
            </CardContent>
          </Card>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="outline" className="px-3 py-1 cursor-pointer hover:bg-primary/10">
              Remote
            </Badge>
            <Badge variant="outline" className="px-3 py-1 cursor-pointer hover:bg-primary/10">
              Full-time
            </Badge>
            <Badge variant="outline" className="px-3 py-1 cursor-pointer hover:bg-primary/10">
              Part-time
            </Badge>
            <Badge variant="outline" className="px-3 py-1 cursor-pointer hover:bg-primary/10">
              Contract
            </Badge>
            <Badge variant="outline" className="px-3 py-1 cursor-pointer hover:bg-primary/10">
              Entry Level
            </Badge>
            <Badge variant="outline" className="px-3 py-1 cursor-pointer hover:bg-primary/10">
              Mid-Level
            </Badge>
            <Badge variant="outline" className="px-3 py-1 cursor-pointer hover:bg-primary/10">
              Senior
            </Badge>
            <Badge className="px-3 py-1 flex items-center gap-1 cursor-pointer">
              <Filter className="h-3 w-3" /> More Filters
            </Badge>
          </div>
        </div>
        
        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {mockJobs.map(job => (
            <Card 
              key={job.id}
              className="glass-card border-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <div className="flex items-center text-muted-foreground text-sm mt-1">
                      <Building className="h-3 w-3 mr-1" />
                      {job.company}
                      <span className="mx-2">•</span>
                      <MapPin className="h-3 w-3 mr-1" />
                      {job.location}
                    </div>
                  </div>
                  <Badge className={job.type === "Remote" ? "bg-green-500" : undefined}>
                    {job.type}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-4 pt-2">
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {job.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="text-muted-foreground flex items-center">
                    <Briefcase className="h-3 w-3 mr-1" />
                    {job.salary}
                  </div>
                  <div className="text-muted-foreground flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {job.posted}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <SparkleButton className="w-full" size="sm">Apply Now</SparkleButton>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center">
          <SparkleButton variant="outline">
            Load More Jobs
          </SparkleButton>
        </div>
      </div>
    </SparkleBackground>
  );
};

export default JobSearch;
