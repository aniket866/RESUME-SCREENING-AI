
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "Software Engineer",
      company: "Tech Innovations",
      quote: "The AI Resume Screener helped me optimize my resume and land interviews at top tech companies. Highly recommended!",
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&auto=format&fit=crop&crop=face"
    },
    {
      name: "Michael T.",
      role: "HR Manager",
      company: "Global Solutions",
      quote: "As a recruiter, this tool has saved me countless hours by filtering candidates effectively. The AI analysis is spot on.",
      imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&auto=format&fit=crop&crop=face"
    },
    {
      name: "Elena K.",
      role: "Recent Graduate",
      company: "University of Technology",
      quote: "Without much work experience, I was struggling to create a good resume. This tool guided me every step of the way.",
      imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&auto=format&fit=crop&crop=face"
    }
  ];

  return (
    <div className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none glass-card hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 text-5xl opacity-20">"</div>
                <p className="mb-6 italic">{testimonial.quote}</p>
                <div className="mt-auto flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mb-3 border-2 border-primary/20">
                    <img 
                      src={testimonial.imageSrc} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
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
