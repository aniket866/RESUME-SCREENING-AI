
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import { 
  Upload, Search, BadgeCheck, BarChart3, BrainCircuit, Zap, Sparkles, 
  PenTool, Users, Globe, Briefcase, FileText, Settings, BookOpen, LineChart
} from "lucide-react";
import { SparkleButton } from "@/components/SparkleButton";
import { SparkleBackground } from "@/components/SparkleBackground";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card className="border-none glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
      <CardContent className="flex flex-col items-center p-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="bg-primary/10 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 relative">
          <div className="absolute inset-0 rounded-full bg-primary/5 animate-ping opacity-60" />
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-center">{description}</p>
      </CardContent>
    </Card>
  );
};

const HeroSection = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center text-center px-4 py-16 md:py-24 relative">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-10">
        <div className="w-[800px] h-[800px] rounded-full bg-primary/5 animate-pulse" />
      </div>

      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent animate-pulse relative">
        <span className="relative inline-block">
          AI Resume Screener
          <span className="absolute -top-6 -right-6">
            <Sparkles className="h-5 w-5 text-primary animate-bounce" />
          </span>
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8 animate-fade-in">
        Optimize your resume with AI or find the perfect candidate faster with our intelligent screening technology
      </p>

      {!user ? (
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-200">
          <Link to="/signup?role=jobseeker">
            <SparkleButton size="lg" className="gap-2">
              <Upload className="h-5 w-5" />
              Get Started as Job Seeker
            </SparkleButton>
          </Link>
          <Link to="/signup?role=recruiter">
            <SparkleButton variant="outline" size="lg" className="gap-2">
              <Search className="h-5 w-5" />
              Get Started as Recruiter
            </SparkleButton>
          </Link>
        </div>
      ) : (
        <div className="flex gap-4 animate-slide-up animation-delay-200">
          {user.role === "jobseeker" ? (
            <Link to="/upload-resume">
              <SparkleButton size="lg" className="gap-2">
                <Upload className="h-5 w-5" />
                Upload Resume
              </SparkleButton>
            </Link>
          ) : (
            <Link to="/recruiter-dashboard">
              <SparkleButton size="lg" className="gap-2">
                <BarChart3 className="h-5 w-5" />
                Go to Dashboard
              </SparkleButton>
            </Link>
          )}
        </div>
      )}
      
      <div className="mt-20 animate-fade-in animation-delay-300 text-center">
        <h2 className="text-2xl font-semibold mb-6">Trusted by professionals worldwide</h2>
        <div className="flex flex-wrap justify-center gap-8 opacity-70">
          {["Google", "Microsoft", "Amazon", "Apple", "Netflix"].map((company) => (
            <div key={company} className="text-lg font-medium">{company}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "ATS Score Analysis",
      description: "Get your resume scored against ATS systems and receive insights to improve your chances of getting noticed."
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-primary" />,
      title: "Keyword Optimization",
      description: "Identify missing keywords and skills to tailor your resume for specific job descriptions."
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
      title: "AI Resume Enhancement",
      description: "Get AI-powered suggestions to improve your resume content, formatting and readability."
    },
    {
      icon: <Search className="h-6 w-6 text-primary" />,
      title: "Smart Candidate Ranking",
      description: "Recruiters can automatically rank and filter candidates based on skill match and resume quality."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Instant Feedback",
      description: "Receive instant feedback on your resume with actionable suggestions for improvement."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Personalized Insights",
      description: "Get personalized recommendations based on your industry, experience level, and career goals."
    },
    {
      icon: <PenTool className="h-6 w-6 text-primary" />,
      title: "Resume Templates",
      description: "Access professionally designed resume templates optimized for ATS compatibility."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Team Collaboration",
      description: "Collaborate with team members on candidate evaluations and hiring decisions."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Global Job Market Analysis",
      description: "Get insights into global job market trends and skill demands for your industry."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Career Path Planning",
      description: "Map out potential career paths and identify skills needed for advancement."
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Cover Letter Generator",
      description: "Create personalized cover letters tailored to specific job applications using AI."
    },
    {
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "Performance Analytics",
      description: "Track your job application success rate and optimize your approach over time."
    }
  ];

  return (
    <div className="py-16 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Enhanced AI Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "Software Engineer",
      company: "Tech Innovations",
      quote: "The AI Resume Screener helped me optimize my resume and land interviews at top tech companies. Highly recommended!"
    },
    {
      name: "Michael T.",
      role: "HR Manager",
      company: "Global Solutions",
      quote: "As a recruiter, this tool has saved me countless hours by filtering candidates effectively. The AI analysis is spot on."
    },
    {
      name: "Elena K.",
      role: "Recent Graduate",
      company: "University of Technology",
      quote: "Without much work experience, I was struggling to create a good resume. This tool guided me every step of the way."
    }
  ];

  return (
    <div className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none glass-card hover:shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 text-5xl opacity-20">"</div>
                <p className="mb-6 italic">{testimonial.quote}</p>
                <div className="mt-auto">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatisticsSection = () => {
  const stats = [
    { label: "Users worldwide", value: "200,000+" },
    { label: "Resumes improved", value: "1.5M+" },
    { label: "Success rate increase", value: "78%" },
    { label: "Enterprise clients", value: "500+" }
  ];

  return (
    <div className="py-16 px-4 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CtaSection = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-primary/10 to-blue-500/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your career?</h2>
        <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Join thousands of professionals who've improved their job prospects with our AI-powered tools
        </p>
        <Link to="/signup">
          <SparkleButton size="lg" className="mr-4">Get Started Free</SparkleButton>
        </Link>
        <Link to="/landing">
          <SparkleButton variant="outline" size="lg">Learn More</SparkleButton>
        </Link>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <SparkleBackground className="min-h-screen flex flex-col pt-16">
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <StatisticsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
    </SparkleBackground>
  );
};

export default Index;
