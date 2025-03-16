
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun, Menu, X, Upload, BarChart3, BrainCircuit, FileText, LogOut, User } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BrainCircuit className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            AI Resume Screener
          </span>
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              {user && user.role === "jobseeker" && (
                <>
                  <NavigationMenuItem>
                    <Link to="/upload-resume">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Upload Resume
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/resume-analysis">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        AI Analysis
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </>
              )}
              
              {user && user.role === "recruiter" && (
                <>
                  <NavigationMenuItem>
                    <Link to="/recruiter-dashboard">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Dashboard
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Manage</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                        <li>
                          <Link to="/post-job" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Post Job</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Create a new job listing
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/candidates" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Candidates</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Review and manage applicants
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/resume-search" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Resume Search</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Search for specific skills or qualifications
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </>
              )}
              
              {!user && (
                <>
                  <NavigationMenuItem>
                    <Link to="/landing">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Features
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
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
                        <li>
                          <Link to="/upload-resume" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">For Job Seekers</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Optimize your resume for better job opportunities
                            </p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/signup?role=recruiter" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">For Recruiters</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Find the perfect candidates faster with AI screening
                            </p>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </>
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
            className="rounded-full"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-full size-10 p-0">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
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
                <Button>Sign Up</Button>
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/90 backdrop-blur-md p-4 shadow-md border-t animate-slide-down">
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              to="/"
              className={`text-base font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-foreground/80"
              }`}
            >
              Home
            </Link>
            
            {user && user.role === "jobseeker" && (
              <>
                <Link
                  to="/upload-resume"
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === "/upload-resume" ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  Upload Resume
                </Link>
                <Link
                  to="/resume-analysis"
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === "/resume-analysis" ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  AI Analysis
                </Link>
                <Link
                  to="/jobseeker-dashboard"
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === "/jobseeker-dashboard" ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  Dashboard
                </Link>
              </>
            )}
            
            {user && user.role === "recruiter" && (
              <>
                <Link
                  to="/recruiter-dashboard"
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === "/recruiter-dashboard" ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/post-job"
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === "/post-job" ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  Post Job
                </Link>
                <Link
                  to="/candidates"
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === "/candidates" ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  Candidates
                </Link>
              </>
            )}
            
            {!user && (
              <>
                <Link
                  to="/landing"
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === "/landing" ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  Features
                </Link>
                <Link
                  to="/upload-resume"
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === "/upload-resume" ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  Upload Resume
                </Link>
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
                    <Button size="sm">Sign Up</Button>
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
