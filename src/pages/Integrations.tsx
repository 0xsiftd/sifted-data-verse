
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  FileText, 
  ArrowRight, 
  MessageSquare, 
  BarChart, 
  Code, 
  Server 
} from "lucide-react";

type IntegrationCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  delay: number;
};

const IntegrationCard = ({ title, description, icon, buttonText, delay }: IntegrationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border rounded-lg p-6 transition-shadow hover:shadow-md"
    >
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 text-sm">{description}</p>
      <Button variant="outline" size="sm" className="mt-2">
        {buttonText} <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
      </Button>
    </motion.div>
  );
};

const Integrations = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const integrations = [
    {
      title: "Database Connectors",
      description: "Connect directly to your existing database systems to streamline data flow between platforms.",
      icon: <Database className="h-6 w-6 text-primary" />,
      buttonText: "Connect Database",
      delay: 0.1,
    },
    {
      title: "API Integration",
      description: "Access our comprehensive API suite to build custom applications with our blockchain-verified data.",
      icon: <Code className="h-6 w-6 text-primary" />,
      buttonText: "View Documentation",
      delay: 0.2,
    },
    {
      title: "Analytics Platforms",
      description: "Seamlessly integrate with popular analytics tools to extract insights from verified datasets.",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      buttonText: "Connect Analytics",
      delay: 0.3,
    },
    {
      title: "AI/ML Frameworks",
      description: "Feed high-quality data directly into your machine learning pipelines for better model training.",
      icon: <Server className="h-6 w-6 text-primary" />,
      buttonText: "Connect AI Platform",
      delay: 0.4,
    },
    {
      title: "Document Processing",
      description: "Automate extraction and verification of data from various document formats with blockchain validation.",
      icon: <FileText className="h-6 w-6 text-primary" />,
      buttonText: "Explore Solutions",
      delay: 0.5,
    },
    {
      title: "Collaboration Tools",
      description: "Integrate with your team's existing collaboration platforms for seamless workflow management.",
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      buttonText: "Connect Tools",
      delay: 0.6,
    },
  ];

  const techStack = [
    { name: "Python", logo: "M12 0L1.5 4.5v7.5L12 16.5 22.5 12V4.5L12 0zm-9 9.5V5.7l9-3.4v3.8l-9 3.4zm18 0l-9 3.5V9.3l9-3.4v3.6z" },
    { name: "Java", logo: "M8.85.55c.25.83.13 1.57-.37 2.17A3.6 3.6 0 0 1 2.53 5.2c1.4 1.15 3.72.43 4.57-.02.5-.25 1.35-.81 1.35-.81s-.75 1.37-2.53 1.8a5.25 5.25 0 0 1-3.12-.31 4.12 4.12 0 0 1 0 3.6c1.08-.93 2.75-.92 2.75-.92s-1.5.94-2.56 2.08c-1.1 1.26.03 2.38.03 2.38.71-.35 1.2-.87 1.2-.87.04 1.55 1.32 3.31 1.32 3.31.48-.47.49-.99.49-1.15.8 1.56 2.4 1.71 2.4 1.71-1.65-1.79-1.48-4.58-1.48-4.58 1.43.5 3.01.35 3.01.35-2.12-.97-2.37-2.01-2.37-2.3 1.42.05 2.94-1.14 2.94-1.14-2.4-.15-3.1-1.33-3.1-1.33 1.19-.56 1.9-1.42 1.9-1.42-1.94.06-2.48-.35-3.7-1.28-.89-.68-1.38-1.8-1.38-1.8z" },
    { name: "Node.js", logo: "M12 0c-.65 0-1.31.15-1.92.47L2.44 4.42a3.92 3.92 0 0 0-1.96 3.39v8.39c0 1.4.75 2.7 1.96 3.38l7.64 3.95c1.2.68 2.63.68 3.84 0l7.64-3.95a3.92 3.92 0 0 0 1.96-3.38V7.8c0-1.4-.75-2.7-1.96-3.39L13.92.47A3.87 3.87 0 0 0 12 0zm0 3c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7z" },
    { name: "AWS", logo: "M5.72 4.47a1 1 0 0 0-1.42 0L.56 8.22a1 1 0 0 0 0 1.42l3.74 3.74a1 1 0 0 0 1.42-1.42L2.69 8.93l3.03-3.03a1 1 0 0 0 0-1.42zm6.56 0a1 1 0 0 1 1.42 0l3.74 3.75a1 1 0 0 1 0 1.42l-3.74 3.74a1 1 0 1 1-1.42-1.42l3.03-3.03-3.03-3.03a1 1 0 0 1 0-1.42zM8 0a1 1 0 0 1 .93.67l3 9a1 1 0 1 1-1.86.66l-3-9A1 1 0 0 1 8 0z" },
    { name: "Docker", logo: "M12 0H0v12h1V1h11V0zm1 2v11h11V2H13zm10 10h-9V3h9v9z" },
    { name: "Kubernetes", logo: "M7.76 3.8l-4.8 1.69V9.1c0 1.86.97 3.62 2.33 4.69l2.47 1.77 2.47-1.77A5.35 5.35 0 0 0 12.56 9.1V5.49L7.76 3.8zm.5-3.08l5.98 2.1c.45.16.76.59.76 1.08v5.2c0 2.29-1.2 4.44-2.87 5.77L8.26 17.6a1.2 1.2 0 0 1-1.4 0l-3.87-2.75A7.46 7.46 0 0 1 .12 9.1V3.9c0-.5.31-.92.76-1.08L6.86.73a2.17 2.17 0 0 1 1.4 0v-.01z" },
    { name: "TensorFlow", logo: "M11.91.03a.57.57 0 0 0-.32.17l-5.5 5.5a.57.57 0 0 0 0 .8l2.07 2.09 6.22-6.22V.62a.57.57 0 0 0-.47-.6zm1.1 2.83l-6.2 6.22 2.08 2.07a.57.57 0 0 0 .8 0l5.5-5.5a.57.57 0 0 0 0-.8L13 2.86z" },
    { name: "React", logo: "M11 6a6 6 0 1 1-2 11.67 6 6 0 0 1 2-11.67zm-.73.11a1 1 0 1 0 1.46 0 1 1 0 0 0-1.46 0zM8.29 9a.5.5 0 0 0-.57.4 4 4 0 0 0 0 1.2.5.5 0 0 0 .57.4h.42a.5.5 0 0 0 .58-.4 4 4 0 0 0 0-1.2.5.5 0 0 0-.58-.4h-.42zm3 0a.5.5 0 0 0-.57.4 4 4 0 0 0 0 1.2.5.5 0 0 0 .57.4h.42a.5.5 0 0 0 .58-.4 4 4 0 0 0 0-1.2.5.5 0 0 0-.58-.4h-.42z" },
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
              Ecosystem Connections
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              <span className="text-gradient">siftd.xyz</span> Integrations
            </h1>
            <p className="text-lg text-muted-foreground">
              Connect our blockchain-verified data platform with your existing tools and systems for seamless operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <IntegrationCard key={index} {...integration} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-20 pt-6 text-center"
          >
            <h2 className="text-2xl font-display font-bold mb-8">
              Compatible Technology Stack
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 items-center justify-center">
              {techStack.map((tech, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="h-12 w-12 flex items-center justify-center mb-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8 text-muted-foreground"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={tech.logo} />
                    </svg>
                  </div>
                  <span className="text-xs font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-20 bg-secondary/30 rounded-lg p-8 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-xl font-semibold mb-3">
              Need a custom integration?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team can build custom integrations for your specific technology stack. 
              Contact us to discuss your requirements.
            </p>
            <Button>
              Contact Integration Team <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-16 max-w-3xl mx-auto prose dark:prose-invert"
          >
            <h2>Integration Process</h2>
            <p>
              Our integration specialists will work with your team to ensure a smooth connection between siftd.xyz and your existing systems.
              The typical integration process includes:
            </p>
            <ol>
              <li>Initial assessment and requirements gathering</li>
              <li>Solution design and architecture planning</li>
              <li>Development and customization</li>
              <li>Testing in a sandbox environment</li>
              <li>Deployment and monitoring</li>
              <li>Ongoing support and optimization</li>
            </ol>
            <p>
              This process ensures that the integration is tailored to your specific needs and works seamlessly with your existing infrastructure.
            </p>
          </motion.div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Integrations;
