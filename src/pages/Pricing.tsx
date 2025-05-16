
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DemoRequestForm from "@/components/sections/DemoRequestForm";

const PricingTier = ({
  name,
  description,
  price,
  billingPeriod,
  features,
  buttonText,
  isPopular,
  delay = 0,
}: {
  name: string;
  description: string;
  price: string;
  billingPeriod: string;
  features: Array<{ text: string; tooltip?: string }>;
  buttonText: string;
  isPopular?: boolean;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative flex flex-col p-6 bg-background border rounded-lg shadow-sm ${
        isPopular
          ? "border-primary/40 shadow-lg shadow-primary/5"
          : "border-border"
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
          Most popular
        </div>
      )}
      <div className="mb-5">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      <div className="mb-5">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {billingPeriod && (
            <span className="ml-1 text-sm text-muted-foreground">
              /{billingPeriod}
            </span>
          )}
        </div>
      </div>
      <ul className="mb-6 space-y-2.5 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-sm">{feature.text}</span>
            {feature.tooltip && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="ml-1.5 inline-flex">
                      <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-xs">{feature.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </li>
        ))}
      </ul>
      <Button variant={isPopular ? "default" : "outline"} className="w-full">
        {buttonText}
      </Button>
    </motion.div>
  );
};

const Pricing = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small teams exploring data solutions",
      price: "$199",
      billingPeriod: "month",
      features: [
        { text: "Access to marketplace" },
        { text: "5GB verified data monthly", tooltip: "High-quality curated datasets verified through our blockchain protocol" },
        { text: "Basic data validation tools" },
        { text: "Email support" },
        { text: "Up to 3 team members" },
      ],
      buttonText: "Start Free Trial",
      isPopular: false,
      delay: 0.1,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with evolving data needs",
      price: "$499",
      billingPeriod: "month",
      features: [
        { text: "Everything in Starter" },
        { text: "25GB verified data monthly" },
        { text: "Advanced validation tools" },
        { text: "Priority support" },
        { text: "Custom data requests", tooltip: "Submit specific data needs to our contributor network" },
        { text: "API access" },
        { text: "Up to 10 team members" },
      ],
      buttonText: "Get Started",
      isPopular: true,
      delay: 0.2,
    },
    {
      name: "Enterprise",
      description: "For organizations with large-scale data requirements",
      price: "Custom",
      billingPeriod: "",
      features: [
        { text: "Everything in Professional" },
        { text: "Unlimited data access" },
        { text: "Dedicated success manager" },
        { text: "Custom blockchain integration", tooltip: "Direct integration with your existing systems" },
        { text: "White-label solutions" },
        { text: "Onboarding & training" },
        { text: "SLA guarantees" },
        { text: "Unlimited team members" },
      ],
      buttonText: "Contact Sales",
      isPopular: false,
      delay: 0.3,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <span className="block mb-2 text-sm font-medium text-tech-blue-500">
              Pricing Plans
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Simple, transparent <span className="text-gradient">pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that's right for your business. All plans include access to our blockchain-verified data marketplace.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <PricingTier key={index} {...tier} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 bg-secondary/30 rounded-xl p-8 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-xl font-semibold mb-3">Need a custom solution?</h2>
            <p className="text-muted-foreground mb-6">
              Our team can help you find the perfect solution for your unique data needs. 
              Schedule a personalized demo to learn more.
            </p>
            <div className="flex justify-center">
              <DemoRequestForm />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-display font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-medium mb-2">Can I change plans later?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-medium mb-2">How is data quality ensured?</h3>
                <p className="text-sm text-muted-foreground">
                  All data on our platform is validated through our blockchain verification process, ensuring highest quality and reliability.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-medium mb-2">Do you offer refunds?</h3>
                <p className="text-sm text-muted-foreground">
                  We offer a 14-day money-back guarantee if you're not satisfied with our service. Just contact our support team.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-medium mb-2">How does billing work?</h3>
                <p className="text-sm text-muted-foreground">
                  We bill monthly or annually depending on your preference. All plans include automatic renewal which can be disabled.
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
