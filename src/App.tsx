
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UploadResume from "./pages/UploadResume";
import JobSeekerDashboard from "./pages/JobSeekerDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import ResumeAnalysis from "./pages/ResumeAnalysis";
import ResumeTemplates from "./pages/ResumeTemplates";
import CareerResources from "./pages/CareerResources";
import Pricing from "./pages/Pricing";
import JobSearch from "./pages/JobSearch";
import SuccessStories from "./pages/SuccessStories";
import Enterprise from "./pages/Enterprise";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CoverLetters from "./pages/CoverLetters";
import CareerPath from "./pages/CareerPath";
import SkillsAssessment from "./pages/SkillsAssessment";

// Create a new QueryClient for every component render
const App = () => {
  // Create a client
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/upload-resume" element={<UploadResume />} />
                <Route path="/resume-analysis" element={<ResumeAnalysis />} />
                <Route path="/resume-templates" element={<ResumeTemplates />} />
                <Route path="/jobseeker-dashboard" element={<JobSeekerDashboard />} />
                <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
                <Route path="/career-resources" element={<CareerResources />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/job-search" element={<JobSearch />} />
                <Route path="/success-stories" element={<SuccessStories />} />
                <Route path="/enterprise" element={<Enterprise />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cover-letters" element={<CoverLetters />} />
                <Route path="/career-path" element={<CareerPath />} />
                <Route path="/skills-assessment" element={<SkillsAssessment />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </BrowserRouter>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
