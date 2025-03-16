
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">AI Resume Screener</h3>
            <p className="text-sm text-muted-foreground">
              Leverage AI to optimize resumes and streamline the recruitment process.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">For Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/upload-resume" className="text-sm hover:text-primary transition-colors">
                  Upload Resume
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-sm hover:text-primary transition-colors">
                  Resume Tips
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">For Recruiters</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/post-job" className="text-sm hover:text-primary transition-colors">
                  Post Jobs
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-sm hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm hover:text-primary transition-colors">
                  Enterprise Plans
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-muted-foreground">
          <p>© {currentYear} AI Resume Screener. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
