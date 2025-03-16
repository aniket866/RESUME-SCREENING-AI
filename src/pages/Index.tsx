
import { SparkleBackground } from "@/components/SparkleBackground";
import { HeroSection } from "@/components/HomeHero";
import { FeaturesSection } from "@/components/HomeFeatures";
import { TestimonialsSection } from "@/components/HomeTestimonials";
import { CtaSection } from "@/components/HomeCta";
import { StatsWidget, TipsWidget, PopularTemplatesWidget, CtaWidget } from "@/components/HomeWidgets";

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
        `}
      </style>
      <main className="flex-1">
        <HeroSection />
        
        {/* Stats and Widgets Section */}
        <div className="py-12 px-4 bg-background/30">
          <div className="max-w-6xl mx-auto">
            <StatsWidget />
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <TipsWidget />
              <PopularTemplatesWidget />
              <CtaWidget />
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
