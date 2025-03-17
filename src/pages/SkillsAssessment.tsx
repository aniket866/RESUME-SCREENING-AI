
import React from "react";
import { SparkleBackground } from "@/components/SparkleBackground";
import { Card, CardContent } from "@/components/ui/card";

const SkillsAssessment = () => {
  return (
    <SparkleBackground className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Skills Assessment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Evaluate your professional skills and identify areas for growth
          </p>
          
          <Card className="glass-card border-none p-8 max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-0">
              <p>
                Our Skills Assessment tool is coming soon. Check back for updates!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SparkleBackground>
  );
};

export default SkillsAssessment;
