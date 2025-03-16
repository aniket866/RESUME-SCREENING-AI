
import React, { useState } from "react";
import { SparkleBackground } from "@/components/SparkleBackground";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { SparkleButton } from "@/components/SparkleButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, TrendingUp, ArrowRight, Code, Terminal, Database, Server, LineChart, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const careerPaths = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    description: "From junior developer to software architect",
    icon: <Code className="h-5 w-5" />,
    levels: [
      { name: "Junior Developer", years: "0-2 years", salary: "$70,000 - $90,000" },
      { name: "Mid-level Developer", years: "2-5 years", salary: "$90,000 - $120,000" },
      { name: "Senior Developer", years: "5-8 years", salary: "$120,000 - $150,000" },
      { name: "Tech Lead", years: "8-12 years", salary: "$140,000 - $180,000" },
      { name: "Software Architect", years: "12+ years", salary: "$160,000 - $220,000+" },
    ],
    skills: ["Programming Languages", "Algorithms", "Data Structures", "System Design", "DevOps", "Testing"]
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "From data analyst to chief data officer",
    icon: <LineChart className="h-5 w-5" />,
    levels: [
      { name: "Data Analyst", years: "0-2 years", salary: "$65,000 - $85,000" },
      { name: "Data Scientist", years: "2-5 years", salary: "$85,000 - $120,000" },
      { name: "Senior Data Scientist", years: "5-8 years", salary: "$120,000 - $160,000" },
      { name: "Data Science Manager", years: "8-12 years", salary: "$150,000 - $190,000" },
      { name: "Chief Data Officer", years: "12+ years", salary: "$180,000 - $250,000+" },
    ],
    skills: ["Statistics", "Machine Learning", "Python/R", "SQL", "Data Visualization", "Big Data"]
  },
  {
    id: "devops",
    title: "DevOps Engineering",
    description: "From systems admin to DevOps architect",
    icon: <Server className="h-5 w-5" />,
    levels: [
      { name: "Systems Administrator", years: "0-2 years", salary: "$65,000 - $85,000" },
      { name: "DevOps Engineer", years: "2-5 years", salary: "$85,000 - $120,000" },
      { name: "Senior DevOps Engineer", years: "5-8 years", salary: "$120,000 - $150,000" },
      { name: "DevOps Manager", years: "8-12 years", salary: "$140,000 - $180,000" },
      { name: "DevOps Architect", years: "12+ years", salary: "$160,000 - $200,000+" },
    ],
    skills: ["Cloud Platforms", "Containers", "CI/CD", "Infrastructure as Code", "Monitoring", "Security"]
  },
  {
    id: "ux-design",
    title: "UX/UI Design",
    description: "From junior designer to design director",
    icon: <PenTool className="h-5 w-5" />,
    levels: [
      { name: "Junior UX/UI Designer", years: "0-2 years", salary: "$60,000 - $80,000" },
      { name: "UX/UI Designer", years: "2-5 years", salary: "$80,000 - $110,000" },
      { name: "Senior UX/UI Designer", years: "5-8 years", salary: "$110,000 - $140,000" },
      { name: "UX/UI Lead", years: "8-12 years", salary: "$130,000 - $160,000" },
      { name: "Design Director", years: "12+ years", salary: "$150,000 - $200,000+" },
    ],
    skills: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Usability Testing", "Design Systems"]
  }
];

const CareerPath = () => {
  const [selectedPath, setSelectedPath] = useState("software-engineering");
  
  const activePath = careerPaths.find(path => path.id === selectedPath) || careerPaths[0];
  
  return (
    <SparkleBackground className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Career Path Planner
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover and map your ideal career trajectory
          </p>
          
          <Tabs value={selectedPath} onValueChange={setSelectedPath} className="w-full mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 max-w-3xl mx-auto">
              {careerPaths.map(path => (
                <TabsTrigger 
                  key={path.id} 
                  value={path.id}
                  className="flex items-center gap-2 py-3"
                >
                  {path.icon}
                  <span className="hidden sm:inline">{path.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={activePath.id} className="mt-8 animate-fade-in">
              <Card className="glass-card border-none">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{activePath.title} Path</CardTitle>
                  <CardDescription className="text-lg">{activePath.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative py-10">
                    {/* Career progression line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>
                    
                    {/* Career levels */}
                    <div className="space-y-12">
                      {activePath.levels.map((level, index) => (
                        <div key={index} className="relative">
                          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            {/* Circle marker on line */}
                            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                            
                            {/* Level details - alternate sides on desktop */}
                            <div className={`ml-8 md:ml-0 md:w-1/2 ${
                              index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                            }`}>
                              <h3 className="text-xl font-semibold">{level.name}</h3>
                              <div className="mt-1 mb-2 flex items-center gap-2 flex-wrap md:justify-end">
                                <Badge variant="outline">{level.years}</Badge>
                                <Badge className="bg-primary/20 text-primary">{level.salary}</Badge>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">Experience Level</span>
                                  <span className="text-sm">{index + 1}/5</span>
                                </div>
                                <Progress value={(index + 1) * 20} className="h-1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills needed */}
                  <div className="mt-10 bg-primary/5 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Key Skills For This Path
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {activePath.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-3 justify-center">
                  <SparkleButton>
                    <BookOpen className="mr-2 h-4 w-4" />
                    View Learning Resources
                  </SparkleButton>
                  <Link to="/skills-assessment">
                    <SparkleButton variant="outline">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Assess Your Skills
                    </SparkleButton>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Career guidance section */}
          <Card className="glass-card border-none p-8 max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-0">
              <h2 className="text-xl font-semibold mb-4">Need personalized career guidance?</h2>
              <p className="text-muted-foreground mb-6">
                Our AI-powered career advisor can help you identify your ideal path based on your skills, interests and experience.
              </p>
              <Link to="/career-advisor">
                <SparkleButton>
                  Try Career Advisor <ArrowRight className="ml-2 h-4 w-4" />
                </SparkleButton>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </SparkleBackground>
  );
};

export default CareerPath;
