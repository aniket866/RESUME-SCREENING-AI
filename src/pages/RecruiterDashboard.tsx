
import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, Search, FileText, Users, BarChart3, CheckCircle, XCircle, Star, Filter, Download, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

// Mock data for demonstration
const mockJobs = [
  { 
    id: 1, 
    title: "Senior Frontend Developer", 
    company: "Your Company", 
    location: "Remote", 
    applications: 24, 
    status: "active", 
    postedDate: "2023-12-01T10:00:00" 
  },
  { 
    id: 2, 
    title: "UX Designer", 
    company: "Your Company", 
    location: "New York, NY", 
    applications: 18, 
    status: "active", 
    postedDate: "2023-12-05T14:30:00" 
  },
  { 
    id: 3, 
    title: "Product Manager", 
    company: "Your Company", 
    location: "San Francisco, CA", 
    applications: 12, 
    status: "closed", 
    postedDate: "2023-11-15T09:15:00" 
  },
];

const mockCandidates = [
  { 
    id: 1, 
    name: "John Smith", 
    role: "Senior Frontend Developer", 
    atsScore: 92, 
    skillMatch: 89, 
    experienceYears: 5,
    status: "reviewed",
    isShortlisted: true 
  },
  { 
    id: 2, 
    name: "Emma Johnson", 
    role: "Senior Frontend Developer", 
    atsScore: 86, 
    skillMatch: 92, 
    experienceYears: 4,
    status: "new",
    isShortlisted: false 
  },
  { 
    id: 3, 
    name: "Michael Chen", 
    role: "Frontend Developer", 
    atsScore: 78, 
    skillMatch: 84, 
    experienceYears: 3,
    status: "new",
    isShortlisted: false 
  },
  { 
    id: 4, 
    name: "Sarah Williams", 
    role: "Senior Frontend Developer", 
    atsScore: 75, 
    skillMatch: 77, 
    experienceYears: 6,
    status: "reviewed",
    isShortlisted: false 
  },
  { 
    id: 5, 
    name: "David Rodriguez", 
    role: "Frontend Engineer", 
    atsScore: 72, 
    skillMatch: 80, 
    experienceYears: 2,
    status: "rejected",
    isShortlisted: false 
  },
];

export default function RecruiterDashboard() {
  const [activeTab, setActiveTab] = useState("candidates");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterShortlisted, setFilterShortlisted] = useState(false);
  const { toast } = useToast();

  const handleToggleShortlist = (candidateId: number) => {
    // In a real app, this would update the backend
    toast({
      title: "Candidate updated",
      description: "Candidate shortlist status has been updated",
    });
  };

  const handleDownloadResumes = () => {
    toast({
      title: "Download started",
      description: "Shortlisted candidate resumes are being downloaded",
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

  const filteredCandidates = mockCandidates
    .filter(candidate => 
      (candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       candidate.role.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!filterShortlisted || candidate.isShortlisted)
    )
    .sort((a, b) => b.atsScore - a.atsScore);

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 animate-slide-up">
          <div>
            <h1 className="text-3xl font-bold">Recruiter Dashboard</h1>
            <p className="text-muted-foreground">Manage jobs and screen candidates</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
            <Link to="/post-job">
              <Button>
                <PlusCircle className="mr-2 size-4" />
                Post New Job
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card border-none animate-slide-up animation-delay-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Active Jobs</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl font-bold text-primary">
                  {mockJobs.filter(job => job.status === "active").length}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Currently active jobs
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/manage-jobs" className="w-full">
                <Button variant="outline" className="w-full">View All Jobs</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="glass-card border-none animate-slide-up animation-delay-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total Applications</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl font-bold text-primary">
                  {mockJobs.reduce((total, job) => total + job.applications, 0)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Across all active jobs
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setActiveTab("candidates")}
              >
                Review Candidates
              </Button>
            </CardFooter>
          </Card>

          <Card className="glass-card border-none animate-slide-up animation-delay-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Shortlisted</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-5xl font-bold text-primary">
                  {mockCandidates.filter(candidate => candidate.isShortlisted).length}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Candidates shortlisted
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleDownloadResumes}
              >
                <Download className="mr-2 size-4" />
                Download Resumes
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mb-8 animate-scale-in animation-delay-400">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
              <TabsTrigger value="candidates">Candidates</TabsTrigger>
              <TabsTrigger value="jobs">Jobs</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="candidates" className="mt-6">
              <Card className="glass-card border-none overflow-hidden">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle>Candidate Ranking</CardTitle>
                      <CardDescription>
                        AI-ranked candidates for Senior Frontend Developer role
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setFilterShortlisted(!filterShortlisted)}
                        className={filterShortlisted ? "bg-primary/10" : ""}
                      >
                        <Star className={`mr-2 size-4 ${filterShortlisted ? "text-primary" : ""}`} />
                        {filterShortlisted ? "All Candidates" : "Shortlisted"}
                      </Button>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                      <Input
                        placeholder="Search candidates..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            <span className="flex items-center">
                              Candidate
                              <ArrowUpDown className="ml-1 size-3" />
                            </span>
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            <span className="flex items-center">
                              ATS Score
                              <ArrowUpDown className="ml-1 size-3" />
                            </span>
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            <span className="flex items-center">
                              Skills Match
                              <ArrowUpDown className="ml-1 size-3" />
                            </span>
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            <span className="flex items-center">
                              Experience
                              <ArrowUpDown className="ml-1 size-3" />
                            </span>
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredCandidates.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="px-6 py-8 text-center text-muted-foreground">
                              No candidates found. Try adjusting your filters.
                            </td>
                          </tr>
                        ) : (
                          filteredCandidates.map((candidate) => (
                            <tr key={candidate.id} className="border-b hover:bg-muted/30">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div>
                                  <div className="font-medium">{candidate.name}</div>
                                  <div className="text-sm text-muted-foreground">{candidate.role}</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                  <div 
                                    className={`size-2 rounded-full ${
                                      candidate.atsScore >= 85 
                                        ? "bg-green-500" 
                                        : candidate.atsScore >= 70 
                                        ? "bg-yellow-500" 
                                        : "bg-red-500"
                                    }`} 
                                  />
                                  <span className="font-medium">{candidate.atsScore}%</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                  <Progress value={candidate.skillMatch} className="h-2 w-16" />
                                  <span>{candidate.skillMatch}%</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span>{candidate.experienceYears} years</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <Button 
                                    variant="ghost" 
                                    size="icon"
                                    onClick={() => handleToggleShortlist(candidate.id)}
                                    className={candidate.isShortlisted ? "text-primary" : ""}
                                  >
                                    <Star className="size-4" />
                                  </Button>
                                  <Link to={`/candidate/${candidate.id}`}>
                                    <Button variant="ghost" size="icon">
                                      <FileText className="size-4" />
                                    </Button>
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between py-4">
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredCandidates.length} of {mockCandidates.length} candidates
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" disabled>
                      Next
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="jobs" className="mt-6">
              <Card className="glass-card border-none overflow-hidden">
                <CardHeader>
                  <CardTitle>Active Jobs</CardTitle>
                  <CardDescription>
                    Manage your current job postings
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Job Title
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Location
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Applications
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Posted Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockJobs.map((job) => (
                          <tr key={job.id} className="border-b hover:bg-muted/30">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-medium">{job.title}</div>
                              <div className="text-sm text-muted-foreground">{job.company}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {job.location}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {job.applications}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {formatDate(job.postedDate)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <Badge
                                className={
                                  job.status === "active" 
                                    ? "bg-green-500" 
                                    : "bg-gray-500"
                                }
                              >
                                {job.status === "active" ? "Active" : "Closed"}
                              </Badge>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                              <Link to={`/job/${job.id}`}>
                                <Button variant="ghost" size="sm">
                                  View
                                </Button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics" className="mt-6">
              <Card className="glass-card border-none">
                <CardHeader>
                  <CardTitle>Recruitment Analytics</CardTitle>
                  <CardDescription>
                    Key metrics for your recruitment process
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col border rounded-lg p-4 bg-card/50">
                        <span className="text-sm text-muted-foreground">Average Time to Hire</span>
                        <span className="text-3xl font-bold mt-1">14 days</span>
                        <span className="text-sm text-green-500 flex items-center mt-1">
                          <span className="mr-1">↓</span> 3 days faster than industry average
                        </span>
                      </div>
                      
                      <div className="flex flex-col border rounded-lg p-4 bg-card/50">
                        <span className="text-sm text-muted-foreground">Application to Interview Ratio</span>
                        <span className="text-3xl font-bold mt-1">18%</span>
                        <span className="text-sm text-green-500 flex items-center mt-1">
                          <span className="mr-1">↑</span> 5% increase from last month
                        </span>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-card/50">
                      <h3 className="font-medium mb-2">Top Candidate Sources</h3>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>LinkedIn</span>
                            <span>45%</span>
                          </div>
                          <Progress value={45} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Company Website</span>
                            <span>30%</span>
                          </div>
                          <Progress value={30} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Indeed</span>
                            <span>15%</span>
                          </div>
                          <Progress value={15} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Referrals</span>
                            <span>10%</span>
                          </div>
                          <Progress value={10} className="h-2" />
                        </div>
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
