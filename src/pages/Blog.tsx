
import React from "react";
import { SparkleBackground } from "@/components/SparkleBackground";
import { Card, CardContent } from "@/components/ui/card";

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
          
          <Card className="glass-card border-none p-8 max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-0">
              <p>
                Our blog is coming soon with valuable career advice and industry insights.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SparkleBackground>
  );
};

export default Blog;
