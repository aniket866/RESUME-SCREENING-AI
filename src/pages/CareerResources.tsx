
import React from "react";
import { SparkleBackground } from "@/components/SparkleBackground";
import { SparkleButton } from "@/components/SparkleButton";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Video, BookOpen, Lightbulb, Link as LinkIcon, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const resources = [
  {
    id: 1,
    title: "Resume Writing Guide",
    description: "Learn how to create an ATS-optimized resume that gets past automated filters",
    type: "guide",
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=500&auto=format&fit=crop",
    category: "resume"
  },
  {
    id: 2,
    title: "Interview Preparation",
    description: "Tips and techniques for answering common interview questions",
    type: "video",
    imageUrl: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=500&auto=format&fit=crop",
    category: "interview"
  },
  {
    id: 3,
    title: "Salary Negotiation",
    description: "Strategies for getting the compensation you deserve",
    type: "guide",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=500&auto=format&fit=crop",
    category: "negotiation"
  },
  {
    id: 4,
    title: "LinkedIn Profile Optimization",
    description: "Boost your online presence with these LinkedIn tips",
    type: "checklist",
    imageUrl: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=500&auto=format&fit=crop",
    category: "networking"
  },
  {
    id: 5,
    title: "Remote Work Success",
    description: "How to thrive in a work-from-home environment",
    type: "webinar",
    imageUrl: "https://images.unsplash.com/photo-1585909695286-aa2499f1d810?q=80&w=500&auto=format&fit=crop",
    category: "productivity"
  },
  {
    id: 6,
    title: "Career Change Guide",
    description: "Steps for successfully pivoting to a new industry",
    type: "guide",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=500&auto=format&fit=crop",
    category: "career"
  }
];

const categories = [
  { id: "all", name: "All Resources" },
  { id: "resume", name: "Resume" },
  { id: "interview", name: "Interviews" },
  { id: "negotiation", name: "Negotiation" },
  { id: "networking", name: "Networking" },
  { id: "career", name: "Career Planning" }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "guide": return <FileText className="h-4 w-4" />;
    case "video": return <Video className="h-4 w-4" />;
    case "webinar": return <Video className="h-4 w-4" />;
    case "checklist": return <Lightbulb className="h-4 w-4" />;
    default: return <BookOpen className="h-4 w-4" />;
  }
};

const CareerResources = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const filteredResources = selectedCategory === "all" 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <SparkleBackground className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Career Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Exclusive guides, templates, and tutorials to help you advance your career
          </p>
          
          {/* Category filters */}
          <Tabs defaultValue="all" value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
            <TabsList className="flex flex-wrap justify-center h-auto p-1">
              {categories.map(category => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          {/* Resources grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => (
              <Card 
                key={resource.id}
                className="glass-card border-none overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={resource.imageUrl}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Type badge */}
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    {getTypeIcon(resource.type)}
                    <span className="capitalize">{resource.type}</span>
                  </div>
                </div>
                
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="p-4 pt-2">
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </CardContent>
                
                <CardFooter className="p-4 flex justify-between items-center">
                  <Badge variant="outline">{resource.category}</Badge>
                  <SparkleButton size="sm" variant="outline">
                    {resource.type === "guide" ? (
                      <>
                        <Download className="h-4 w-4 mr-1" /> Download
                      </>
                    ) : (
                      <>
                        <LinkIcon className="h-4 w-4 mr-1" /> View
                      </>
                    )}
                  </SparkleButton>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="glass-card border-none max-w-4xl mx-auto p-8 bg-gradient-to-b from-primary/5 to-primary/10">
            <CardContent className="p-0 mb-6">
              <h2 className="text-2xl font-bold mb-4">Want more career resources?</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive weekly career tips and resources directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="px-4 py-2 rounded-md border border-input bg-background"
                />
                <SparkleButton>Subscribe</SparkleButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SparkleBackground>
  );
};

export default CareerResources;
