
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Moon, Sun, Menu, X, Upload, BarChart3, BrainCircuit, 
  FileText, LogOut, User, BookOpen, Briefcase, PenTool,
  Settings, Users, Globe, Sparkles, LineChart, Zap 
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { SparkleButton } from "@/components/SparkleButton";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/landing" },
    { name: "Resume Templates", path: "/resume-templates" },
    { name: "Career Resources", path: "/career-resources" },
    { name: "Job Search", path: "/job-search" },
    { name: "Pricing", path: "/pricing" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Enterprise", path: "/enterprise" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  const jobSeekerMenuItems = [
    { name: "Upload Resume", path: "/upload-resume", icon: <Upload className="h-4 w-4" /> },
    { name: "AI Analysis", path: "/resume-analysis", icon: <BrainCircuit className="h-4 w-4" /> },
    { name: "Dashboard", path: "/jobseeker-dashboard", icon: <BarChart3 className="h-4 w-4" /> },
    { name: "Cover Letters", path: "/cover-letters", icon: <FileText className="h-4 w-4" /> },
    { name: "Career Path", path: "/career-path", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Skills Assessment", path: "/skills-assessment", icon: <BookOpen className="h-4 w-4" /> },
  ];

  const recruiterMenuItems = [
    { name: "Dashboard", path: "/recruiter-dashboard", icon: <BarChart3 className="h-4 w-4" /> },
    { name: "Post Job", path: "/post-job", icon: <PenTool className="h-4 w-4" /> },
    { name: "Candidates", path: "/candidates", icon: <Users className="h-4 w-4" /> },
    { name: "Resume Search", path: "/resume-search", icon: <FileText className="h-4 w-4" /> },
    { name: "Analytics", path: "/analytics", icon: <LineChart className="h-4 w-4" /> },
    { name: "Team", path: "/team", icon: <Users className="h-4 w-4" /> },
  ];

  const solutionsMenuItems = [
    { 
      name: "For Job Seekers", 
      path: "/upload-resume", 
      icon: <Upload className="h-5 w-5 text-primary" />,
      description: "Optimize your resume for better job opportunities"
    },
    { 
      name: "For Recruiters", 
      path: "/signup?role=recruiter", 
      icon: <Users className="h-5 w-5 text-primary" />,
      description: "Find the perfect candidates faster with AI screening"
    },
    { 
      name: "For Students", 
      path: "/students", 
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      description: "Start your career strong with expert guidance"
    },
    { 
      name: "For Enterprises", 
      path: "/enterprise", 
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      description: "Scale your hiring process with our enterprise solution"
    },
    { 
      name: "Global Markets", 
      path: "/global", 
      icon: <Globe className="h-5 w-5 text-primary" />,
      description: "Optimize for international job applications"
    },
    { 
      name: "Career Transition", 
      path: "/career-change", 
      icon: <Zap className="h-5 w-5 text-primary" />,
      description: "Get guidance for changing careers or industries"
    },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <AnimatedLogo />
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.slice(0, 5).map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link to={item.path}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {menuItems.slice(5).map((item) => (
                      <li key={item.name}>
                        <Link to={item.path} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{item.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore our {item.name.toLowerCase()} section
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {user && user.role === "jobseeker" && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Job Seeker</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/5 p-6 no-underline outline-none focus:shadow-md"
                            href="/upload-resume"
                          >
                            <BrainCircuit className="h-6 w-6 mb-2 text-primary" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              AI Resume Analysis
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Get intelligent feedback on your resume with our AI-powered analysis
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {jobSeekerMenuItems.map((item) => (
                        <li key={item.name}>
                          <Link to={item.path} className="flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            {item.icon}
                            <div>
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}
              
              {user && user.role === "recruiter" && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Recruiter</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/5 p-6 no-underline outline-none focus:shadow-md"
                            href="/recruiter-dashboard"
                          >
                            <BarChart3 className="h-6 w-6 mb-2 text-primary" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Recruiter Dashboard
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Access your recruitment analytics and candidate management tools
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {recruiterMenuItems.map((item) => (
                        <li key={item.name}>
                          <Link to={item.path} className="flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            {item.icon}
                            <div>
                              <div className="text-sm font-medium leading-none">{item.name}</div>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}
              
              {!user && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] lg:grid-cols-3">
                      <li className="row-span-6 col-span-1">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/20 to-primary/5 p-6 no-underline outline-none focus:shadow-md overflow-hidden relative"
                            href="/upload-resume"
                          >
                            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/5 animate-pulse" />
                            <BrainCircuit className="h-6 w-6 mb-2 text-primary relative z-10" />
                            <div className="mb-2 mt-4 text-lg font-medium relative z-10">
                              AI Resume Analysis
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground relative z-10">
                              Get intelligent feedback on your resume with our AI-powered analysis
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {solutionsMenuItems.map((item) => (
                        <li key={item.name}>
                          <Link to={item.path} className="flex items-start gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            {item.icon}
                            <div>
                              <div className="text-sm font-medium leading-none mb-1">{item.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="rounded-full relative group"
          >
            <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 transition-transform duration-300 group-hover:scale-100" />
            {theme === "dark" ? 
              <Sun size={18} className="transition-transform duration-300 group-hover:rotate-45" /> : 
              <Moon size={18} className="transition-transform duration-300 group-hover:rotate-45" />
            }
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full size-10 p-0 relative group">
                  <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 transition-transform duration-300 group-hover:scale-100" />
                  <User className="h-5 w-5 relative" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to={user.role === "jobseeker" ? "/jobseeker-dashboard" : "/recruiter-dashboard"} className="flex w-full items-center">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                {user.role === "jobseeker" && (
                  <>
                    <DropdownMenuItem>
                      <Link to="/upload-resume" className="flex w-full items-center">
                        <Upload className="mr-2 h-4 w-4" />
                        <span>Upload Resume</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/resume-analysis" className="flex w-full items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Resume Analysis</span>
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <SparkleButton>Sign Up</SparkleButton>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/90 backdrop-blur-md p-4 shadow-md border-t animate-slide-down overflow-y-auto max-h-[80vh]">
          <nav className="flex flex-col space-y-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {user && user.role === "jobseeker" && (
              <>
                <div className="text-sm font-bold text-muted-foreground uppercase pt-2">Job Seeker</div>
                {jobSeekerMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-base font-medium transition-colors hover:text-primary flex items-center gap-2 ${
                      location.pathname === item.path ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </>
            )}
            
            {user && user.role === "recruiter" && (
              <>
                <div className="text-sm font-bold text-muted-foreground uppercase pt-2">Recruiter</div>
                {recruiterMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-base font-medium transition-colors hover:text-primary flex items-center gap-2 ${
                      location.pathname === item.path ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </>
            )}
            
            <div className="pt-4 flex items-center justify-between border-t">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </Button>

              {user ? (
                <Button variant="ghost" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Link to="/login">
                    <Button variant="ghost" size="sm">Login</Button>
                  </Link>
                  <Link to="/signup">
                    <SparkleButton size="sm">Sign Up</SparkleButton>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
