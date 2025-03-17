
import React from "react";
import { SparkleBackground } from "@/components/SparkleBackground";
import { SparkleButton } from "@/components/SparkleButton";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Eye, Sparkles } from "lucide-react";
import { AnimatedLogo } from "@/components/AnimatedLogo";

const templates = [
  {
    id: 1,
    name: "Modern Professional",
    description: "Clean and professional template with a modern design focus",
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=500&auto=format&fit=crop",
    category: "professional"
  },
  {
    id: 2,
    name: "Creative Designer",
    description: "Bold and creative template for design professionals",
    imageUrl: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=500&auto=format&fit=crop",
    category: "creative"
  },
  {
    id: 3,
    name: "Tech Innovator",
    description: "Sleek template optimized for tech industry professionals",
    imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=500&auto=format&fit=crop",
    category: "tech"
  },
  {
    id: 4,
    name: "Executive Brief",
    description: "Sophisticated template for senior executives and managers",
    imageUrl: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=500&auto=format&fit=crop",
    category: "professional"
  },
  {
    id: 5,
    name: "Graduate Entry",
    description: "Perfect for recent graduates entering the job market",
    imageUrl: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=500&auto=format&fit=crop",
    category: "entry"
  },
  {
    id: 6,
    name: "Minimalist",
    description: "Clean, minimal design focusing on content and readability",
    imageUrl: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?q=80&w=500&auto=format&fit=crop",
    category: "minimal"
  },
  {
    id: 7,
    name: "Data Scientist",
    description: "Specially designed for data professionals",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
    category: "tech"
  },
  {
    id: 8,
    name: "Creative Portfolio",
    description: "Visual portfolio style resume for creative professionals",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=500&auto=format&fit=crop",
    category: "creative"
  }
];

const categories = [
  { id: "all", name: "All Templates" },
  { id: "professional", name: "Professional" },
  { id: "creative", name: "Creative" },
  { id: "tech", name: "Tech Industry" },
  { id: "entry", name: "Entry Level" },
  { id: "minimal", name: "Minimalist" }
];

const ResumeTemplates = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [hoveredTemplate, setHoveredTemplate] = React.useState<number | null>(null);

  const filteredTemplates = selectedCategory === "all" 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  return (
    <SparkleBackground className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Professional Resume Templates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose from our collection of professionally designed, ATS-optimized resume templates
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-background border border-border hover:bg-accent"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Templates grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.map(template => (
              <Card 
                key={template.id}
                className="glass-card border-none overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                onMouseEnter={() => setHoveredTemplate(template.id)}
                onMouseLeave={() => setHoveredTemplate(null)}
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img 
                    src={template.imageUrl}
                    alt={template.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredTemplate === template.id ? "opacity-100" : "opacity-0"
                  }`}>
                    <div className="flex gap-2">
                      <SparkleButton size="sm" variant="secondary">
                        <Eye className="h-4 w-4 mr-1" /> Preview
                      </SparkleButton>
                      <SparkleButton size="sm">
                        <Download className="h-4 w-4 mr-1" /> Use
                      </SparkleButton>
                    </div>
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                    {template.category}
                  </div>
                </div>
                
                <CardHeader className="p-4 pb-0">
                  <CardTitle className="text-lg flex items-center">
                    {template.name}
                    {Math.random() > 0.7 && (
                      <span className="ml-2 bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full flex items-center">
                        <Sparkles className="h-3 w-3 mr-1" /> Popular
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-4 pt-2">
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </CardContent>
                
                <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
                  ATS-optimized • Easy to customize
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <Card className="glass-card border-none max-w-4xl mx-auto p-8">
            <CardContent className="p-0 mb-6">
              <h2 className="text-2xl font-bold mb-4">Need a custom resume design?</h2>
              <p className="text-muted-foreground">
                Our AI can generate a personalized resume template based on your industry and experience level
              </p>
            </CardContent>
            <CardFooter className="flex justify-center p-0">
              <SparkleButton>
                <Sparkles className="h-4 w-4 mr-1" /> Generate Custom Template
              </SparkleButton>
            </CardFooter>
          </Card>
        </div>
      </div>
    </SparkleBackground>
  );
};

export default ResumeTemplates;
