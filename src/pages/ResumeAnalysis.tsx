
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrainCircuit, CheckCircle, AlertTriangle, FileText, Download, Sparkles } from "lucide-react";

export default function ResumeAnalysis() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  // Mock data for the resume analysis
  const analysisData = {
    atsScore: 72,
    readabilityScore: 85,
    formatScore: 68,
    keywordScore: 65,
    strengths: [
      "Clear work experience section",
      "Good use of action verbs",
      "Appropriate length (1 page)"
    ],
    weaknesses: [
      "Missing some industry keywords",
      "Education section could be improved",
      "Skills section needs more technical details"
    ],
    missingKeywords: [
      "data analysis",
      "project management",
      "stakeholder communication"
    ],
    suggestions: [
      "Add more specific technical skills relevant to the job",
      "Quantify your achievements with metrics and numbers",
      "Include relevant certifications in the education section"
    ]
  };

  const handleGenerateReport = () => {
    setIsGeneratingReport(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsGeneratingReport(false);
      toast({
        title: "Report Generated",
        description: "Your enhanced resume report has been created successfully",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">Resume Analysis</h1>
            <p className="text-muted-foreground mb-6">
              AI-powered analysis of your resume with detailed insights and improvement suggestions
            </p>
            
            <Card className="glass-card border-none mb-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center">
                  <BrainCircuit className="mr-2 text-primary" />
                  Overall Assessment
                </CardTitle>
                <CardDescription>
                  Your resume scored {analysisData.atsScore}/100 on our ATS compatibility test
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">ATS Compatibility</span>
                      <span className="text-sm font-medium">{analysisData.atsScore}%</span>
                    </div>
                    <Progress value={analysisData.atsScore} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Readability</span>
                      <span className="text-sm font-medium">{analysisData.readabilityScore}%</span>
                    </div>
                    <Progress value={analysisData.readabilityScore} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Formatting</span>
                      <span className="text-sm font-medium">{analysisData.formatScore}%</span>
                    </div>
                    <Progress value={analysisData.formatScore} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Keyword Optimization</span>
                      <span className="text-sm font-medium">{analysisData.keywordScore}%</span>
                    </div>
                    <Progress value={analysisData.keywordScore} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="strengths">Strengths</TabsTrigger>
                <TabsTrigger value="improvements">Improvements</TabsTrigger>
                <TabsTrigger value="keywords">Keywords</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Resume Overview</CardTitle>
                    <CardDescription>
                      Summary of your resume's performance and AI analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Your resume has several strong points but could benefit from optimization in key areas.
                      The AI analysis shows that your resume is {analysisData.atsScore}% compatible with most ATS systems.
                    </p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Proper section organization</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                        <span>Missing some key industry terms</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>Good balance of content and white space</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="strengths" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Resume Strengths</CardTitle>
                    <CardDescription>
                      Areas where your resume performs well
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysisData.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="improvements" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Suggested Improvements</CardTitle>
                    <CardDescription>
                      Areas that could be enhanced for better results
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysisData.suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="keywords" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Keyword Analysis</CardTitle>
                    <CardDescription>
                      Key terms missing or underrepresented in your resume
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-muted-foreground mb-2">Consider adding these keywords to improve relevance:</p>
                      <div className="flex flex-wrap gap-2">
                        {analysisData.missingKeywords.map((keyword, index) => (
                          <span key={index} className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="md:w-1/3">
            <Card className="sticky top-24 glass-card border-none">
              <CardHeader>
                <CardTitle className="text-lg">Resume Preview</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center">
                <div className="bg-card border rounded-md w-full aspect-[1/1.4] mb-4 flex items-center justify-center">
                  <FileText className="h-12 w-12 text-muted-foreground" />
                </div>
                
                <div className="w-full space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={handleGenerateReport}
                    disabled={isGeneratingReport}
                  >
                    {isGeneratingReport ? (
                      <>
                        <BrainCircuit className="mr-2 h-4 w-4 animate-pulse" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <BrainCircuit className="mr-2 h-4 w-4" />
                        Generate AI-Enhanced Resume
                      </>
                    )}
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Analysis Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
