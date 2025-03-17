
import React from "react";
import { SparkleBackground } from "@/components/SparkleBackground";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { SparkleButton } from "@/components/SparkleButton";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How to Optimize Your Resume for ATS Systems",
    excerpt: "Learn the key strategies to make your resume pass through Applicant Tracking Systems and land on a recruiter's desk.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=500&auto=format&fit=crop",
    author: "Alex Rivera",
    date: "June 15, 2023",
    readTime: "8 min read",
    category: "Resume Tips"
  },
  {
    id: 2,
    title: "10 Most In-Demand Tech Skills for 2023",
    excerpt: "Discover which technical skills employers are seeking most this year and how to showcase them effectively.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=500&auto=format&fit=crop",
    author: "Sarah Chen",
    date: "May 22, 2023",
    readTime: "6 min read",
    category: "Career Growth"
  },
  {
    id: 3,
    title: "Mastering the Virtual Interview",
    excerpt: "Virtual interviews are here to stay. Here's how to prepare, present yourself, and succeed in remote job interviews.",
    image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=500&auto=format&fit=crop",
    author: "Marcus Johnson",
    date: "April 10, 2023",
    readTime: "10 min read",
    category: "Interviews"
  },
  {
    id: 4,
    title: "The Art of Salary Negotiation",
    excerpt: "Learn proven techniques to confidently negotiate your compensation package and get what you're worth.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=500&auto=format&fit=crop",
    author: "Priya Sharma",
    date: "March 28, 2023",
    readTime: "7 min read",
    category: "Negotiation"
  }
];

const Blog = () => {
  return (
    <SparkleBackground className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Career Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Insights and advice to help you navigate your career journey
          </p>
          
          {/* Featured post */}
          <Card className="glass-card border-none mb-12 max-w-5xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop" 
                  alt="Featured post" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <Badge className="mb-4">Featured</Badge>
                  <h2 className="text-2xl font-bold mb-3">The Future of Work: AI and Human Collaboration</h2>
                  <p className="text-muted-foreground mb-4">
                    How artificial intelligence is transforming the workplace and how professionals can adapt to thrive in this new era.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">Sophia Williams</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">July 3, 2023</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>12 min read</span>
                  </div>
                </div>
                <Link to="/blog/future-of-work">
                  <SparkleButton className="w-full sm:w-auto">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </SparkleButton>
                </Link>
              </div>
            </div>
          </Card>
          
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogPosts.map(post => (
              <Card key={post.id} className="glass-card border-none overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <CardHeader className="p-5 pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <p className="text-muted-foreground line-clamp-3 mb-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-5 pt-0">
                  <Link to={`/blog/${post.id}`} className="text-primary hover:underline flex items-center">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Newsletter signup */}
          <Card className="glass-card border-none p-8 max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold mb-3">Subscribe to our newsletter</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest career advice and job search tips delivered straight to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                />
                <SparkleButton>Subscribe</SparkleButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SparkleBackground>
  );
};

export default Blog;
