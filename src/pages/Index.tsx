
import { SparkleBackground } from "@/components/SparkleBackground";
import { HeroSection } from "@/components/HomeHero";
import { FeaturesSection } from "@/components/HomeFeatures";
import { TestimonialsSection } from "@/components/HomeTestimonials";
import { CtaSection } from "@/components/HomeCta";
import { TechStatsWidget, CareerPathsWidget, AIToolsWidget, NewsWidget } from "@/components/HomeWidgets";

const Index = () => {
  return (
    <SparkleBackground className="min-h-screen flex flex-col pt-16">
      <style>
        {`
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
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 15px 5px rgba(60, 250, 133, 0.2);
          }
          50% {
            box-shadow: 0 0 25px 10px rgba(60, 250, 133, 0.4);
          }
        }
        
        .tech-card {
          transition: all 0.3s ease;
        }
        
        .tech-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(60, 250, 133, 0.3);
        }
        
        .career-item {
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }
        
        .career-item:hover {
          border-left: 3px solid #3CFA85;
          background: rgba(60, 250, 133, 0.05);
        }
        `}
      </style>
      <main className="flex-1">
        <HeroSection />
        
        {/* Stats and Widgets Section */}
        <div className="py-12 px-4 bg-background/30 dark:bg-background/10">
          <div className="max-w-7xl mx-auto">
            <TechStatsWidget />
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <CareerPathsWidget />
              <AIToolsWidget />
              <NewsWidget />
            </div>
          </div>
        </div>
        
        <FeaturesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
    </SparkleBackground>
  );
};

export default Index;
