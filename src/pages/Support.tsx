
import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { 
  Info, 
  HelpCircle, 
  ArrowRight, 
  Mail, 
  MessageSquare,
  FileText
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Support = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportCategories = [
    {
      title: "Getting Started",
      description: "New to siftd.xyz? Learn the basics to get up and running quickly.",
      icon: <Info className="h-6 w-6" />,
      topics: [
        "Creating an Account",
        "Setting Up Your Wallet",
        "Understanding the Marketplace",
        "Contributor Onboarding",
      ],
      cta: "View Guides",
      link: "#guides"
    },
    {
      title: "Data Purchases",
      description: "Everything you need to know about finding, purchasing, and using datasets.",
      icon: <FileText className="h-6 w-6" />,
      topics: [
        "Payment Methods",
        "Dataset Licensing",
        "Download Instructions",
        "Format Specifications",
      ],
      cta: "Purchase Help",
      link: "#purchase-help"
    },
    {
      title: "Data Contributions",
      description: "Information for contributors looking to provide datasets to our marketplace.",
      icon: <HelpCircle className="h-6 w-6" />,
      topics: [
        "Submission Guidelines",
        "Quality Standards",
        "Compensation Models",
        "Verification Process",
      ],
      cta: "Contributor Resources",
      link: "#contributor-resources"
    }
  ];

  const commonQuestions = [
    {
      question: "How does siftd.xyz verify dataset quality?",
      answer: "We use a multi-stage verification process that includes source validation, content analysis, and blockchain verification. Our proprietary algorithms check for data consistency, completeness, and accuracy before certification. Each dataset also undergoes ethical review to ensure it meets our standards for responsible data collection."
    },
    {
      question: "What payment methods are accepted?",
      answer: "siftd.xyz accepts traditional payment methods (credit/debit cards, bank transfers) as well as cryptocurrency payments (BTC, ETH, and selected stablecoins). Enterprise clients can also arrange customized invoicing and payment terms for bulk purchases."
    },
    {
      question: "How are contributors compensated?",
      answer: "Contributors receive compensation based on the quality and volume of their data submissions. Our smart contract system distributes payments automatically when datasets are purchased. Contributors can choose to receive payments in cryptocurrency or fiat currency."
    },
    {
      question: "Can I request a custom dataset?",
      answer: "Yes, enterprise clients can request custom datasets tailored to their specific needs. Our platform connects you with qualified contributors who can collect and verify the specific data you require. Contact our enterprise solutions team to discuss your requirements."
    },
    {
      question: "What formats do you support for dataset downloads?",
      answer: "We support multiple industry-standard formats including CSV, JSON, PARQUET, HDF5, and specialized formats for images, audio, and text data. Each dataset includes detailed format documentation and sample code for common data processing frameworks."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-10 text-center"
          >
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Support Center
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions or get in touch with our support team.
            </p>
          </motion.div>

          {/* Support Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {supportCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="bg-primary/10 p-4 rounded-full w-fit mb-4">
                      {category.icon}
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 mt-2">
                      {category.topics.map((topic) => (
                        <li key={topic} className="flex items-center">
                          <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <a href={category.link}>
                        {category.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Get in Touch
            </h2>

            <div className="flex flex-col md:flex-row gap-6">
              <Card className="flex-1">
                <CardHeader>
                  <div className="text-primary mb-2">
                    <Mail className="h-8 w-8" />
                  </div>
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>
                    Get a response within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Send us a detailed description of your issue or question, and our support team will get back to you.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:support@siftd.xyz">
                      support@siftd.xyz
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex-1">
                <CardHeader>
                  <div className="text-primary mb-2">
                    <MessageSquare className="h-8 w-8" />
                  </div>
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>
                    Available Monday-Friday, 9AM-6PM CET
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Chat with our support representatives in real-time for immediate assistance with your questions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Start Chat
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {commonQuestions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                >
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to="/faq">
                <Button>
                  View All FAQs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
