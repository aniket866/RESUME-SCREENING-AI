
import React from "react";
import { SparkleBackground } from "@/components/SparkleBackground";
import { Card, CardContent } from "@/components/ui/card";
import { SparkleButton } from "@/components/SparkleButton";
import { Link } from "react-router-dom";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { Robot, Users, Award, Heart, Target, Clock } from "lucide-react";

const About = () => {
  return (
    <SparkleBackground className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our mission is to help job seekers and recruiters connect more efficiently through AI-powered tools
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                AI Resume Screener was founded in 2023 with a simple mission: to make the job search process more efficient and equitable for everyone.
              </p>
              <p>
                After seeing how challenging it was for job seekers to understand why their applications were being rejected, and how overwhelming the screening process was for recruiters, we built a platform to bridge this gap.
              </p>
              <p>
                Today, our AI-powered platform helps thousands of job seekers optimize their resumes and assists recruiters in finding the best candidates faster than ever before.
              </p>
            </div>
          </div>
          
          <div className="flex-1 flex items-center justify-center">
            <div className="p-8 rounded-xl bg-primary/5 backdrop-blur-sm">
              <AnimatedLogo large />
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Robot className="h-8 w-8 text-primary" />,
                title: "AI-Powered Innovation",
                description: "We leverage cutting-edge AI to solve real problems in the hiring process."
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "People First",
                description: "Technology serves people, not the other way around. We design for human needs."
              },
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from our code to our customer service."
              },
              {
                icon: <Heart className="h-8 w-8 text-primary" />,
                title: "Inclusivity",
                description: "We're committed to making the job market more accessible and fair for everyone."
              },
              {
                icon: <Target className="h-8 w-8 text-primary" />,
                title: "Purposeful Impact",
                description: "We measure our success by the positive impact we have on people's careers."
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Continuous Improvement",
                description: "We're always learning and iterating to make our platform better."
              }
            ].map((value, i) => (
              <Card key={i} className="glass-card border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">{value.icon}</div>
                  <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            We're a passionate team of engineers, designers, and career experts working together to transform the job search experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Alex Rivera",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
              },
              {
                name: "Sarah Chen",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
              },
              {
                name: "Marcus Johnson",
                role: "Head of AI",
                image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop"
              },
              {
                name: "Priya Sharma",
                role: "Head of Product",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop"
              }
            ].map((member, i) => (
              <Card key={i} className="glass-card border-none overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Card className="glass-card border-none max-w-4xl mx-auto p-8 bg-gradient-to-b from-primary/5 to-primary/10">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals to join our mission. Check out our open positions.
              </p>
              <Link to="/careers">
                <SparkleButton>View Open Positions</SparkleButton>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </SparkleBackground>
  );
};

export default About;
