
import React, { useState } from "react";
import { SparkleBackground } from "@/components/SparkleBackground";
import { SparkleButton } from "@/components/SparkleButton";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Info, Zap } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "Essential tools for your job search",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      { name: "Upload & analyze 1 resume", included: true },
      { name: "Basic ATS score", included: true },
      { name: "Limited templates", included: true },
      { name: "Job matching", included: false },
      { name: "AI improvement suggestions", included: false },
      { name: "Interview preparation", included: false },
      { name: "Priority support", included: false },
    ],
    popular: false,
    badge: "Basic"
  },
  {
    id: "pro",
    name: "Professional",
    description: "Advanced tools for serious job seekers",
    monthlyPrice: 12.99,
    yearlyPrice: 9.99,
    features: [
      { name: "Upload & analyze unlimited resumes", included: true },
      { name: "Detailed ATS score", included: true },
      { name: "Full template library", included: true },
      { name: "Job matching", included: true },
      { name: "AI improvement suggestions", included: true },
      { name: "Interview preparation", included: false },
      { name: "Priority support", included: false },
    ],
    popular: true,
    badge: "Most Popular"
  },
  {
    id: "premium",
    name: "Premium",
    description: "Complete career acceleration package",
    monthlyPrice: 29.99,
    yearlyPrice: 24.99,
    features: [
      { name: "Everything in Professional", included: true },
      { name: "1-on-1 resume review", included: true },
      { name: "Interview preparation", included: true },
      { name: "Cover letter generator", included: true },
      { name: "LinkedIn profile optimization", included: true },
      { name: "Career coaching session", included: true },
      { name: "Priority support", included: true },
    ],
    popular: false,
    badge: "Complete"
  }
];

const enterprisePlans = [
  {
    id: "recruiter",
    name: "Recruiter",
    description: "For individual recruiters and small teams",
    monthlyPrice: 49.99,
    yearlyPrice: 39.99,
    features: [
      { name: "Process up to 100 resumes/month", included: true },
      { name: "Candidate ranking", included: true },
      { name: "Job description analysis", included: true },
      { name: "Interview question generator", included: true },
      { name: "Candidate tracking", included: true },
      { name: "Premium support", included: false },
      { name: "API access", included: false },
    ],
    popular: false,
    badge: "Starter"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Custom solutions for larger companies",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    features: [
      { name: "Unlimited resume processing", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Custom integrations", included: true },
      { name: "White-label solution", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "Premium support", included: true },
      { name: "API access", included: true },
    ],
    popular: false,
    badge: "Enterprise"
  }
];

const Pricing = () => {
  const [annually, setAnnually] = useState(true);
  const [userType, setUserType] = useState("individual");

  return (
    <SparkleBackground className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Pricing Plans
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your career needs
          </p>
          
          {/* Billing toggle */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!annually ? "text-primary" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <Switch 
              checked={annually} 
              onCheckedChange={setAnnually}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium flex items-center gap-1 ${annually ? "text-primary" : "text-muted-foreground"}`}>
              Annually
              <Badge variant="outline" className="text-xs bg-primary/10 text-primary">
                Save 20%
              </Badge>
            </span>
          </div>
          
          {/* User type toggle */}
          <div className="inline-flex rounded-md border border-input mb-10 p-1">
            <button
              onClick={() => setUserType("individual")}
              className={`px-4 py-2 text-sm rounded ${
                userType === "individual" ? "bg-primary text-primary-foreground" : "bg-transparent hover:bg-accent"
              }`}
            >
              Individual
            </button>
            <button
              onClick={() => setUserType("business")}
              className={`px-4 py-2 text-sm rounded ${
                userType === "business" ? "bg-primary text-primary-foreground" : "bg-transparent hover:bg-accent"
              }`}
            >
              Businesses
            </button>
          </div>
          
          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {(userType === "individual" ? pricingPlans : enterprisePlans).map((plan) => (
              <Card 
                key={plan.id}
                className={`glass-card border-none overflow-hidden transition-all duration-300 hover:shadow-xl relative ${
                  plan.popular ? "border-2 border-primary scale-105 lg:scale-110 z-10" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 -mt-1 -mr-1">
                    <Badge className="bg-primary text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="p-6">
                  <Badge 
                    variant="outline" 
                    className="w-fit mb-2 text-xs"
                  >
                    {plan.badge}
                  </Badge>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">
                        {typeof plan.monthlyPrice === "number" ? (
                          <>
                            ${annually ? plan.yearlyPrice : plan.monthlyPrice}
                          </>
                        ) : (
                          plan.monthlyPrice
                        )}
                      </span>
                      {typeof plan.monthlyPrice === "number" && plan.monthlyPrice > 0 && (
                        <span className="text-muted-foreground ml-1">/mo</span>
                      )}
                    </div>
                    {typeof plan.monthlyPrice === "number" && plan.monthlyPrice > 0 && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {annually ? "Billed annually" : "Billed monthly"}
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground"}>
                          {feature.name}
                        </span>
                        {feature.name.includes("1-on-1") && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="h-4 w-4 text-muted-foreground" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-60 text-sm">
                                  Get personalized feedback from a career expert to enhance your resume.
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link to="/signup" className="w-full">
                    <SparkleButton className="w-full">
                      {plan.id === "free" ? "Get Started" : "Choose Plan"}
                      {plan.popular && <Zap className="ml-1 h-4 w-4" />}
                    </SparkleButton>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* FAQs */}
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I cancel my subscription anytime?",
                  a: "Yes, you can cancel your subscription at any time. If you cancel, you'll be able to use your plan until the end of your billing cycle."
                },
                {
                  q: "Do you offer refunds?",
                  a: "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with our service, you can request a refund within 14 days of your purchase."
                },
                {
                  q: "Can I switch plans?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, the new rate will apply at the next billing cycle."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and Apple Pay."
                }
              ].map((faq, i) => (
                <div key={i} className="p-4 rounded-lg bg-card/50 backdrop-blur-sm">
                  <h3 className="font-medium mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SparkleBackground>
  );
};

export default Pricing;
