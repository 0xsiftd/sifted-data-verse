
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import {
  WalletCards,
  Shield,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Contributors = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: "Fair Compensation",
      description: "Get paid directly through blockchain-based smart contracts for your valuable data contributions.",
      icon: <WalletCards className="h-6 w-6 text-primary" />,
      delay: 0.1,
    },
    {
      title: "Flexible Participation",
      description: "Contribute when and how you want, from any device, anywhere in the world.",
      icon: <Users className="h-6 w-6 text-primary" />,
      delay: 0.2,
    },
    {
      title: "Build Reputation",
      description: "Develop your contributor profile and increase your earnings as you build a quality track record.",
      icon: <Award className="h-6 w-6 text-primary" />,
      delay: 0.3,
    },
    {
      title: "Data Privacy",
      description: "Advanced encryption and privacy controls ensure you share only what you're comfortable with.",
      icon: <Shield className="h-6 w-6 text-primary" />,
      delay: 0.4,
    },
  ];

  const contributorTypes = [
    {
      type: "Individual Contributors",
      description: "Perfect for freelancers, students, or anyone with spare time who wants to earn extra income by contributing data.",
      tasks: [
        "Complete simple data collection tasks",
        "Contribute personal experiences and opinions",
        "Validate and verify other contributors' data",
        "Participate in specialized data projects",
      ],
      earnings: "$50-500 monthly (part-time)",
    },
    {
      type: "Professional Contributors",
      description: "Ideal for professionals with domain expertise who can provide high-quality, specialized data in their field.",
      tasks: [
        "Contribute expert domain knowledge",
        "Create specialized datasets",
        "Provide expert validation services",
        "Lead data collection projects",
      ],
      earnings: "$500-2,000+ monthly (dedicated)",
    },
    {
      type: "Organizational Contributors",
      description: "For organizations looking to monetize their existing data assets while maintaining control over usage.",
      tasks: [
        "License proprietary datasets",
        "Create custom data collections",
        "Provide ongoing data streams",
        "Partner on large-scale data projects",
      ],
      earnings: "Custom revenue sharing arrangements",
    },
  ];

  const steps = [
    "Sign up and complete our contributor onboarding",
    "Download our mobile app or use the web platform",
    "Browse available data collection tasks",
    "Complete tasks and submit your contributions",
    "Earn rewards as your data passes verification",
    "Build your reputation for higher-paying opportunities",
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
            <span className="block mb-2 text-sm font-medium text-tech-blue-500">For Contributors</span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Contribute to <span className="text-gradient">siftd.xyz</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our global community of data contributors and earn rewards while helping build better AI through high-quality, verified datasets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: benefit.delay }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-display font-bold text-center mb-10">
              Who Can Contribute?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contributorTypes.map((type, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{type.type}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium text-sm mb-3">Typical Tasks:</h4>
                    <ul className="space-y-2">
                      {type.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-border">
                      <h4 className="font-medium text-sm mb-1">Potential Earnings:</h4>
                      <p className="text-primary font-medium">{type.earnings}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-20 bg-secondary/30 rounded-lg p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-display font-bold text-center mb-8">
              How to Get Started
            </h2>
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-foreground">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button size="lg">
                Become a Contributor <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mb-16 max-w-3xl mx-auto prose dark:prose-invert"
          >
            <h2>Frequently Asked Questions</h2>
            
            <h3>What types of data can I contribute?</h3>
            <p>
              Contributors can provide various types of data including text, images, audio recordings, and structured data. The specific requirements depend on current projects, but we offer opportunities for diverse contributions.
            </p>
            
            <h3>How do I get paid?</h3>
            <p>
              Payments are processed through blockchain-based smart contracts. You can choose to receive payments in cryptocurrency or fiat currency. Payments are typically disbursed weekly or monthly, depending on your contribution volume.
            </p>
            
            <h3>How is my data used?</h3>
            <p>
              Your contributions help train AI models across various industries. All data usage is transparent, and you'll always know which projects your data supports. You retain certain rights to your contributions as outlined in our contributor agreement.
            </p>
            
            <h3>What equipment do I need?</h3>
            <p>
              For most tasks, a smartphone with our mobile app is sufficient. Some specialized data collection may require additional equipment, which will be clearly specified in the task requirements.
            </p>
            
            <h3>Is my personal information protected?</h3>
            <p>
              Absolutely. We take privacy seriously and employ advanced encryption and blockchain technology to protect your personal information. You control what data you share and with whom it's shared.
            </p>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Contributors;
