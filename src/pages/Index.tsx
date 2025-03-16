
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Upload, Search, BadgeCheck, BarChart3 } from "lucide-react";
import { Switch } from "@/components/ui/switch";

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
    <Card className="border-none glass-card">
      <CardContent className="flex flex-col items-center p-6">
        <div className="bg-primary/10 p-3 rounded-full mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-center">{description}</p>
      </CardContent>
    </Card>
  );
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <Moon className="h-4 w-4" />
    </div>
  );
};

const HeroSection = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center text-center px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
        AI Resume Screener
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
        Optimize your resume with AI or find the perfect candidate faster with our intelligent screening technology
      </p>

      {!user ? (
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/signup?role=jobseeker">
            <Button size="lg" className="gap-2">
              <Upload className="h-5 w-5" />
              Get Started as Job Seeker
            </Button>
          </Link>
          <Link to="/signup?role=recruiter">
            <Button variant="outline" size="lg" className="gap-2">
              <Search className="h-5 w-5" />
              Get Started as Recruiter
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex gap-4">
          {user.role === "jobseeker" ? (
            <Link to="/upload-resume">
              <Button size="lg" className="gap-2">
                <Upload className="h-5 w-5" />
                Upload Resume
              </Button>
            </Link>
          ) : (
            <Link to="/recruiter-dashboard">
              <Button size="lg" className="gap-2">
                <BarChart3 className="h-5 w-5" />
                Go to Dashboard
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<BarChart3 className="h-6 w-6 text-primary" />}
            title="ATS Score Analysis"
            description="Get your resume scored against ATS systems and receive insights to improve your chances of getting noticed."
          />
          <FeatureCard
            icon={<BadgeCheck className="h-6 w-6 text-primary" />}
            title="Keyword Optimization"
            description="Identify missing keywords and skills to tailor your resume for specific job descriptions."
          />
          <FeatureCard
            icon={<Search className="h-6 w-6 text-primary" />}
            title="Smart Candidate Ranking"
            description="Recruiters can automatically rank and filter candidates based on skill match and resume quality."
          />
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full px-4 py-4 flex justify-end">
        <ThemeToggle />
      </header>
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default Index;
