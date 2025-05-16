
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import {
  Server,
  Database,
  MessageSquare,
  FileText,
  LineChart,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import DemoRequestForm from "@/components/sections/DemoRequestForm";

const IndustryCard = ({
  industry,
  icon,
  benefits,
  delay,
}: {
  industry: string;
  icon: React.ReactNode;
  benefits: string[];
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
          {icon}
        </div>
        <h3 className="font-medium text-lg">{industry}</h3>
      </div>
      <ul className="space-y-2">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Solutions = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    {
      industry: "Healthcare & Life Sciences",
      icon: <Server className="h-5 w-5 text-primary" />,
      benefits: [
        "HIPAA-compliant medical datasets for AI diagnostics",
        "Verified patient data for clinical research",
        "Diverse health records for inclusive treatment models",
      ],
      delay: 0.1,
    },
    {
      industry: "Financial Services",
      icon: <LineChart className="h-5 w-5 text-primary" />,
      benefits: [
        "Fraud detection training datasets with blockchain verification",
        "Synthetic financial data for model testing",
        "Market behavior datasets for predictive analytics",
      ],
      delay: 0.2,
    },
    {
      industry: "Retail & E-commerce",
      icon: <Globe className="h-5 w-5 text-primary" />,
      benefits: [
        "Customer behavior data for recommendation systems",
        "Verified product reviews for sentiment analysis",
        "Purchase pattern datasets for inventory forecasting",
      ],
      delay: 0.3,
    },
    {
      industry: "Transportation & Logistics",
      icon: <Database className="h-5 w-5 text-primary" />,
      benefits: [
        "Route optimization datasets for autonomous vehicles",
        "Traffic pattern data for smart city planning",
        "Supply chain datasets for disruption prediction",
      ],
      delay: 0.4,
    },
    {
      industry: "Legal & Compliance",
      icon: <FileText className="h-5 w-5 text-primary" />,
      benefits: [
        "Document classification datasets for legal AI",
        "Case outcome datasets for predictive analytics",
        "Verified regulatory data for compliance systems",
      ],
      delay: 0.5,
    },
    {
      industry: "Manufacturing",
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      benefits: [
        "Equipment maintenance data for predictive servicing",
        "Quality control datasets for defect detection AI",
        "Production efficiency data for process optimization",
      ],
      delay: 0.6,
    },
  ];

  const dataTypes = [
    {
      type: "Text & Language",
      examples: ["Conversational datasets", "Sentiment-labeled content", "Multilingual text corpora"],
    },
    {
      type: "Images & Video",
      examples: ["Annotated visual datasets", "Object detection training data", "Motion tracking sequences"],
    },
    {
      type: "Structured Data",
      examples: ["Tabular datasets", "Time series data", "Relational databases"],
    },
    {
      type: "Audio & Speech",
      examples: ["Voice samples across demographics", "Ambient sound libraries", "Transcribed conversations"],
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
            <span className="block mb-2 text-sm font-medium text-tech-blue-500">Enterprise Solutions</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              <span className="text-gradient">siftd.xyz</span> Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              Access high-quality, verified datasets tailored to your industry needs through our blockchain-powered data marketplace.
            </p>
          </motion.div>

          <div className="prose dark:prose-invert max-w-3xl mx-auto mb-16">
            <h2>How siftd.xyz Helps Enterprises</h2>
            <p>
              In today's AI-driven business landscape, the quality of your data directly determines the effectiveness of your models and applications. siftd.xyz provides enterprises with access to verified, high-quality datasets through our innovative blockchain-based marketplace.
            </p>
            <p>
              Our platform solves the critical challenges facing AI development teams:
            </p>
            <ul>
              <li><strong>Data Quality Assurance</strong> - Every dataset is verified through our blockchain protocol</li>
              <li><strong>Data Provenance</strong> - Complete visibility into data sources and collection methods</li>
              <li><strong>Ethical Sourcing</strong> - Fair compensation for contributors and transparent practices</li>
              <li><strong>Custom Collection</strong> - Ability to request specific datasets tailored to your needs</li>
              <li><strong>Regulatory Compliance</strong> - Documentation supporting compliance requirements</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-display font-bold text-center mb-10">
              Industry-Specific Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((item, index) => (
                <IndustryCard key={index} {...item} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-20 bg-secondary/30 rounded-lg p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-display font-bold mb-6">Available Data Types</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataTypes.map((dataType, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-3">{dataType.type}</h3>
                  <ul className="space-y-1.5">
                    {dataType.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button asChild>
                <a href="/marketplace">
                  Browse Full Data Catalog <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-display font-bold text-center mb-8">
              Custom Data Collection
            </h2>
            
            <div className="prose dark:prose-invert">
              <p>
                Can't find exactly what you need in our marketplace? Our custom data collection service allows enterprises to request specific datasets tailored precisely to their requirements.
              </p>
              <h3>How It Works:</h3>
              <ol>
                <li><strong>Requirements Definition</strong> - We work with your team to define exact data specifications</li>
                <li><strong>Collection Strategy</strong> - Our experts design an optimal collection strategy</li>
                <li><strong>Contributor Mobilization</strong> - We engage relevant contributors from our global network</li>
                <li><strong>Quality Assurance</strong> - Collected data undergoes rigorous verification</li>
                <li><strong>Secure Delivery</strong> - The verified dataset is delivered through our secure platform</li>
              </ol>
              <p>
                This service is ideal for enterprises with specific data needs that aren't met by existing datasets in the marketplace.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-display font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Schedule a personalized demo to see how siftd.xyz can transform your AI data collection process.
            </p>
            <div className="flex justify-center">
              <DemoRequestForm />
            </div>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
